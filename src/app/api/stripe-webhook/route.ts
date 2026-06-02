import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

// Raw body is required for Stripe signature verification.
// Next.js App Router gives us access via req.text() before any parsing.
export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const sig     = req.headers.get("stripe-signature");

  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    console.error("Missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-05-27.dahlia",
  });

  let event: ReturnType<typeof stripe.webhooks.constructEvent>;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session    = event.data.object as unknown as Record<string, unknown>;
    const meta       = (session.metadata as Record<string, string> | null) ?? {};
    const details    = (session.customer_details as Record<string, string> | null) ?? {};
    const amountRaw  = session.amount_total as number | null;

    const customerEmail = details.email || (session.customer_email as string) || meta.customer_email || "";
    const customerName  = details.name  || meta.customer_name  || "";
    const businessName  = meta.business_name  || "";
    const services      = meta.services        || "";
    const cartSummary   = meta.cart_summary    || services;
    const amountTotal   = amountRaw
      ? `$${(amountRaw / 100).toLocaleString("en-US", { minimumFractionDigits: 2 })}`
      : "subscription";

    // ── Notify GHL (update contact to payment-confirmed stage) ─────────────
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    if (ghlWebhookUrl) {
      await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event:         "checkout.session.completed",
          sessionId:     session.id,
          customerEmail,
          customerName,
          businessName,
          services,
          cartSummary,
          amountTotal:   amountRaw,
          paymentStatus: session.payment_status as string,
          pipelineStage: "Shop Purchase — Payment Confirmed",
        }),
      }).catch((err) => console.error("GHL webhook failed (non-fatal):", err));
    }

    // ── Telegram order confirmation ────────────────────────────────────────
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId   = process.env.TELEGRAM_CHAT_ID;
    if (botToken && chatId) {
      const text = [
        "💰 STRIPE PAYMENT CONFIRMED",
        "",
        `👤 ${customerName || "Unknown"}`,
        `🏢 ${businessName || "Unknown"}`,
        `📧 ${customerEmail}`,
        `📦 ${cartSummary}`,
        `💵 Amount: ${amountTotal}`,
        `🆔 Session: ${session.id}`,
        "",
        "⚡ Reply to schedule their onboarding call.",
      ].join("\n");

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      }).catch((err) => console.error("Telegram notification failed (non-fatal):", err));
    }
  }

  return NextResponse.json({ received: true });
}
