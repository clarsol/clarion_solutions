import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { SERVICES, STRIPE_PRICE_IDS } from "@/lib/shopData";

const SITE_URL = "https://www.clarionsol.com";

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Stripe is not configured yet. Contact stanw@clarionsol.com to complete your order." }, { status: 503 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-05-27.dahlia",
  });

  try {
    const { serviceIds, formData } = await req.json();

    if (!serviceIds?.length) {
      return NextResponse.json({ error: "No services selected" }, { status: 400 });
    }

    const selected = SERVICES.filter((s) => serviceIds.includes(s.id));
    const recurring = selected.filter((s) => s.type === "recurring");
    const onetime = selected.filter((s) => s.type === "onetime");

    // ── Send to GHL webhook ────────────────────────────────────────────────
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    if (ghlWebhookUrl) {
      const nameParts = (formData.name || "").trim().split(" ");
      const ghlPayload = {
        contact: {
          firstName: nameParts[0] || "",
          lastName: nameParts.slice(1).join(" ") || "",
          email: formData.email,
          phone: formData.phone,
          companyName: formData.businessName,
          website: formData.website,
          city: formData.city,
        },
        tags: serviceIds,
        customFields: {
          referral_source: formData.referralSource,
          biggest_challenge: formData.challenge,
          current_tools: (formData.currentTools || []).join(", "),
          monthly_total: formData.monthlyTotal,
          onetime_total: formData.onetimeTotal,
          cart_summary: formData.cartSummary,
        },
        pipelineStage: "Shop Purchase — Pending Payment",
      };

      await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ghlPayload),
      }).catch(() => {
        // Non-fatal: log but don't block checkout
        console.error("GHL webhook failed");
      });
    }

    // ── Build Stripe session ───────────────────────────────────────────────
    const metadata: Record<string, string> = {
      customer_name: formData.name,
      customer_email: formData.email,
      business_name: formData.businessName,
      services: serviceIds.join(","),
    };

    const successUrl = `${SITE_URL}/shop/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${SITE_URL}/shop`;

    // Recurring items → subscription session
    if (recurring.length > 0) {
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: recurring.map((s) => ({
          price: STRIPE_PRICE_IDS[s.id as keyof typeof STRIPE_PRICE_IDS],
          quantity: 1,
        })),
        customer_email: formData.email,
        metadata,
        success_url: successUrl,
        cancel_url: cancelUrl,
        allow_promotion_codes: true,
      });

      // If there are also one-time items, Stan will invoice those separately.
      // The cart summary in GHL has the full order details.
      return NextResponse.json({ url: session.url });
    }

    // One-time only cart → payment session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: onetime.map((s) => ({
        price: STRIPE_PRICE_IDS[s.id as keyof typeof STRIPE_PRICE_IDS],
        quantity: 1,
      })),
      customer_email: formData.email,
      metadata,
      success_url: successUrl,
      cancel_url: cancelUrl,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("Checkout session error:", err);
    const message = err instanceof Error ? err.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
