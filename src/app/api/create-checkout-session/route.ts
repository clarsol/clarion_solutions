import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { SERVICES, STRIPE_PRICE_IDS } from "@/lib/shopData";

const SITE_URL = "https://www.clarionsol.com";

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe is not configured. Contact stanw@clarionsol.com to complete your order." },
      { status: 503 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-05-27.dahlia",
  });

  try {
    const { serviceIds, formData } = await req.json();

    if (!serviceIds?.length) {
      return NextResponse.json({ error: "No services selected" }, { status: 400 });
    }

    const selected = SERVICES.filter((s: { id: string }) => serviceIds.includes(s.id));
    const recurring = selected.filter((s: { type: string }) => s.type === "recurring");
    const onetime  = selected.filter((s: { type: string }) => s.type === "onetime");

    // ── GHL webhook (lead capture before payment) ──────────────────────────
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    if (ghlWebhookUrl) {
      const nameParts = (formData.name || "").trim().split(" ");
      await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: {
            firstName:   nameParts[0] || "",
            lastName:    nameParts.slice(1).join(" ") || "",
            email:       formData.email,
            phone:       formData.phone,
            companyName: formData.businessName,
            website:     formData.website,
            city:        formData.city,
          },
          tags: serviceIds,
          customFields: {
            referral_source:    formData.referralSource,
            biggest_challenge:  formData.challenge,
            current_tools:      (formData.currentTools || []).join(", "),
            monthly_total:      formData.monthlyTotal,
            onetime_total:      formData.onetimeTotal,
            cart_summary:       formData.cartSummary,
          },
          pipelineStage: "Shop Purchase — Pending Payment",
        }),
      }).catch(() => console.error("GHL webhook failed (non-fatal)"));
    }

    // ── Telegram notification ──────────────────────────────────────────────
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId   = process.env.TELEGRAM_CHAT_ID;
    if (botToken && chatId) {
      const text = [
        "🛒 NEW SHOP CHECKOUT STARTED",
        "",
        `👤 ${formData.name}`,
        `🏢 ${formData.businessName}`,
        `📧 ${formData.email}`,
        `📞 ${formData.phone}`,
        `📦 ${formData.cartSummary}`,
        formData.challenge ? `\n💬 ${formData.challenge}` : "",
      ].filter(Boolean).join("\n");

      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      }).catch(() => {});
    }

    // ── Build Stripe line items ────────────────────────────────────────────
    type ServiceId = keyof typeof STRIPE_PRICE_IDS;

    const recurringLineItems = recurring.map((s: { id: string }) => ({
      price:    STRIPE_PRICE_IDS[s.id as ServiceId],
      quantity: 1,
    }));

    const onetimeLineItems = onetime.map((s: { id: string }) => ({
      price:    STRIPE_PRICE_IDS[s.id as ServiceId],
      quantity: 1,
    }));

    const metadata: Record<string, string> = {
      customer_name:  formData.name,
      customer_email: formData.email,
      business_name:  formData.businessName,
      services:       serviceIds.join(","),
      cart_summary:   formData.cartSummary || "",
    };

    const successUrl = `${SITE_URL}/shop/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl  = `${SITE_URL}/shop`;

    // Mixed or recurring-only cart → subscription session.
    // Stripe allows one-time line items in subscription mode; they are charged
    // once on the first invoice alongside the recurring items.
    if (recurring.length > 0) {
      const session = await stripe.checkout.sessions.create({
        mode:       "subscription",
        line_items: [...recurringLineItems, ...onetimeLineItems],
        customer_email: formData.email,
        metadata,
        success_url: successUrl,
        cancel_url:  cancelUrl,
        allow_promotion_codes: true,
      });
      return NextResponse.json({ url: session.url });
    }

    // One-time-only cart → payment session
    const session = await stripe.checkout.sessions.create({
      mode:       "payment",
      line_items: onetimeLineItems,
      customer_email: formData.email,
      metadata,
      success_url: successUrl,
      cancel_url:  cancelUrl,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });

  } catch (err: unknown) {
    console.error("Checkout session error:", err);
    const message = err instanceof Error ? err.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
