"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    num: "01",
    title: "AI Foundation",
    desc: "Automated lead capture, missed call text-back, follow-up sequences, and appointment reminders. Never miss another lead.",
    price: "$1,500",
    priceNote: "per month · no setup fee · cancel anytime",
    href: "/services/ai-automation",
  },
  {
    num: "02",
    title: "AI + Local SEO",
    desc: "Everything in AI Foundation plus full local SEO management, Google Business Profile optimization, and monthly performance reporting.",
    price: "$2,500",
    priceNote: "per month · no setup fee · cancel anytime",
    href: "/services/local-seo",
  },
  {
    num: "03",
    title: "Full AI System",
    desc: "The complete Clarion stack — AI automation, local SEO, content production, and media. Built to dominate your market.",
    price: "$4,500",
    priceNote: "per month · no setup fee · cancel anytime",
    href: "/services/ai-workflows",
  },
];

const delays = ["", "reveal-delay-1", "reveal-delay-2"];

function ServiceCard({ service, delay }) {
  const [hovered, setHovered] = useState(false);
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${delay}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1a1a1a" : "#161616",
        border: `1px solid ${hovered ? "#C9A84C" : "rgba(201,168,76,0.25)"}`,
        padding: "clamp(28px, 5vw, 44px)",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.25s, background 0.25s",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Bottom accent */}
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

      {/* Number */}
      <div
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "14px",
          letterSpacing: "3px",
          color: hovered ? "rgba(201,168,76,0.6)" : "rgba(201,168,76,0.3)",
          marginBottom: "20px",
          transition: "color 0.25s",
        }}
      >
        {service.num}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(24px, 3.5vw, 32px)",
          fontWeight: 400,
          color: hovered ? "#E2C97E" : "#F5F1E8",
          marginBottom: "12px",
          lineHeight: 1.15,
          transition: "color 0.25s",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "15px",
          color: "#9E9A92",
          lineHeight: 1.7,
          marginBottom: "28px",
          flexGrow: 1,
        }}
      >
        {service.desc}
      </p>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(201,168,76,0.2)", marginBottom: "20px" }} />

      {/* Price */}
      <div
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(36px, 5vw, 52px)",
          color: "#C9A84C",
          letterSpacing: "2px",
          lineHeight: 1,
          marginBottom: "6px",
        }}
      >
        {service.price}
      </div>
      <div style={{ fontSize: "12px", color: "#9E9A92", letterSpacing: "0.5px", marginBottom: "28px" }}>
        {service.priceNote}
      </div>

      {/* CTA buttons */}
      <div className="card-btn-row">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            flex: 1,
            padding: "14px 16px",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase",
            background: hovered ? "#C9A84C" : "transparent",
            color: hovered ? "#080808" : "#C9A84C",
            border: "1px solid rgba(201,168,76,0.5)",
            cursor: "pointer",
            transition: "background 0.25s, color 0.25s",
            minHeight: "44px",
            whiteSpace: "nowrap",
          }}
        >
          Get Started <span aria-hidden="true">→</span>
        </button>
        <a
          href={service.href}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            flex: 1,
            padding: "14px 16px",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase",
            background: "transparent",
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,0.4)",
            textDecoration: "none",
            transition: "border-color 0.25s, color 0.25s",
            minHeight: "44px",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A84C"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default function ServicesPricingSection() {
  const eyebrowRef = useReveal();
  const titleRef = useReveal();
  const noteRef = useReveal();

  return (
    <section id="services" className="section-pad" style={{ background: "#0e0e0e" }}>
      <div
        ref={eyebrowRef}
        className="reveal"
        style={{
          fontSize: "11px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "#C9A84C",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
        Services &amp; Pricing
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "clamp(40px, 6vw, 72px)" }}>
        <h2
          ref={titleRef}
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(36px, 4.5vw, 68px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.5px",
            color: "#F5F1E8",
          }}
        >
          Three Tiers.
          <br />
          <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Zero Guesswork.</em>
        </h2>
        <p
          ref={noteRef}
          className="reveal reveal-delay-2"
          style={{ maxWidth: "360px", color: "#9E9A92", fontSize: "15px", lineHeight: 1.8 }}
        >
          No setup fees. No long-term lock-ins. Every service built to work together — or standalone.
        </p>
      </div>

      <div
        className="services-pricing-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {services.map((s, i) => (
          <ServiceCard key={s.num} service={s} delay={delays[i]} />
        ))}
      </div>

      <p style={{ textAlign: "center", marginTop: "40px", fontSize: "13px", color: "#9E9A92", lineHeight: 1.7 }}>
        Looking for something specific? We also offer Web Design, Media Production, and AI Workflows as{" "}
        <a
          href="/services"
          style={{ color: "#C9A84C", textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.35)", paddingBottom: "1px", transition: "border-color 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A84C"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"; }}
        >
          standalone services
        </a>
        .
      </p>
    </section>
  );
}
