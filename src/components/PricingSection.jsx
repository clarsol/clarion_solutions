"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const plans = [
  {
    badge: "Most Popular",
    title: "AI Foundation",
    price: "$1,500",
    priceNote: "per month · no setup fee · cancel anytime",
    features: [
      "AI lead capture & 24/7 response",
      "Automated follow-up sequences",
      "Missed call text-back",
      "Appointment reminders & no-show follow-up",
      "Reputation & review management",
      "Monthly performance report",
    ],
    cta: "Get Started",
    ctaStyle: "primary",
    delay: "",
  },
  {
    badge: "Best Value",
    title: "AI + Local SEO",
    price: "$2,750",
    priceNote: "per month · no setup fee · cancel anytime",
    features: [
      "Everything in AI Foundation",
      "Google Business Profile management",
      "Local SEO — keywords, citations, content",
      "Monthly content creation & GBP posts",
      "Competitor gap analysis",
      "Full SEO & AI performance reporting",
    ],
    cta: "Get Started",
    ctaStyle: "primary",
    delay: "reveal-delay-1",
  },
  {
    badge: "Enterprise",
    title: "Full AI System",
    price: "$3,500+",
    priceNote: "per month · custom scoped · 3-month minimum",
    features: [
      "Everything in Layers 1 & 2",
      "Custom AI workflow design",
      "Internal automation & reporting",
      "Custom integrations & API connections",
      "Quarterly strategy sessions",
      "Dedicated account management",
    ],
    cta: "Request a Proposal",
    ctaStyle: "ghost",
    delay: "reveal-delay-2",
  },
  {
    badge: "Add-On",
    title: "Web + Media",
    price: "Custom",
    priceNote: "project-based · or monthly retainer",
    features: [
      "Custom Next.js website build",
      "SEO-optimized architecture",
      "Professional photography",
      "Short-form video & reels",
      "Monthly content packages",
      "Brand asset creation",
    ],
    cta: "Get a Quote",
    ctaStyle: "ghost",
    delay: "reveal-delay-3",
  },
];

function PricingCard({ plan }) {
  const [hovered, setHovered] = useState(false);
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${plan.delay}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "#C9A84C" : "rgba(201,168,76,0.25)"}`,
        padding: "48px",
        background: hovered ? "#161616" : "#0e0e0e",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s, background 0.3s",
      }}
    >
      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "#C9A84C",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s",
        }}
      />
      <div
        style={{
          display: "inline-block",
          background: "rgba(201,168,76,0.15)",
          border: "1px solid rgba(201,168,76,0.25)",
          color: "#C9A84C",
          fontSize: "10px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          padding: "5px 12px",
          marginBottom: "24px",
        }}
      >
        {plan.badge}
      </div>
      <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "32px", fontWeight: 400, marginBottom: "8px", color: "#F5F1E8" }}>
        {plan.title}
      </h3>
      <div style={{ fontFamily: "var(--font-bebas)", fontSize: plan.price === "Custom" ? "36px" : "48px", color: "#C9A84C", letterSpacing: "2px", lineHeight: 1, marginBottom: "4px" }}>
        {plan.price}
      </div>
      <div style={{ fontSize: "12px", color: "#9E9A92", letterSpacing: "1px", marginBottom: "24px" }}>
        {plan.priceNote}
      </div>
      <div style={{ height: "1px", background: "rgba(201,168,76,0.25)", margin: "24px 0" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
        {plan.features.map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "#9E9A92", lineHeight: 1.5 }}>
            <span style={{ color: "#C9A84C", flexShrink: 0, fontSize: "12px", marginTop: "3px" }}>✦</span>
            {f}
          </div>
        ))}
      </div>
      <a
        href="#contact"
        style={{
          display: "block",
          textAlign: "center",
          padding: "16px 36px",
          fontFamily: "var(--font-dm-sans)",
          fontSize: "13px",
          fontWeight: plan.ctaStyle === "primary" ? 500 : 300,
          letterSpacing: "2px",
          textTransform: "uppercase",
          textDecoration: "none",
          background: plan.ctaStyle === "primary" ? "#C9A84C" : "transparent",
          color: plan.ctaStyle === "primary" ? "#080808" : "#F5F1E8",
          border: plan.ctaStyle === "ghost" ? "1px solid rgba(245,241,232,0.2)" : "none",
          transition: "all 0.25s",
        }}
      >
        {plan.cta}
      </a>
    </div>
  );
}

export default function PricingSection() {
  const eyebrowRef = useReveal();
  const titleRef = useReveal();
  const noteRef = useReveal();

  return (
    <section id="products" className="section-pad">
      <div ref={eyebrowRef} className="reveal" style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
        Service Tiers
      </div>
      <h2 ref={titleRef} className="reveal reveal-delay-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 4.5vw, 68px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#F5F1E8" }}>
        Straightforward
        <br />
        <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Pricing.</em>
      </h2>
      <p ref={noteRef} className="reveal reveal-delay-2" style={{ color: "#9E9A92", marginTop: "16px", fontSize: "15px", maxWidth: "480px", lineHeight: 1.8 }}>
        No setup fees. No hidden costs. No long-term lock-ins on Layers 1 and 2. Pay for what you need, upgrade when you're ready.
      </p>

      <div
        className="pricing-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px", marginTop: "64px" }}
      >
        {plans.map((plan) => (
          <PricingCard key={plan.title} plan={plan} />
        ))}
      </div>

    </section>
  );
}
