"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    num: "01",
    title: "Local SEO & AEO",
    desc: "Get found on Google and AI search engines. GBP optimization, on-page SEO, keyword targeting, citation building, and monthly reporting.",
    price: "$750",
    priceNote: "per month · no setup fee · cancel anytime after 3-month minimum",
    href: "/services/local-seo",
  },
  {
    num: "02",
    title: "AI Foundation",
    desc: "Automated lead capture, missed call text-back, follow-up sequences, and appointment reminders. Never miss another lead.",
    price: "$1,500",
    priceNote: "per month · no setup fee · cancel anytime after 3-month minimum",
    href: "/services/ai-automation",
  },
  {
    num: "03",
    title: "AI + Local SEO",
    desc: "Everything in AI Foundation plus full local SEO management, Google Business Profile optimization, custom CRM management, and monthly performance reporting.",
    price: "$2,000",
    priceNote: "per month · no setup fee · cancel anytime after 3-month minimum",
    href: "/services/local-seo",
  },
  {
    num: "04",
    title: "Clarion Complete Stack",
    desc: "AI automation, local SEO, monthly content, and a monthly on-site media shoot under one contract. Social media management and paid advertising are in the next tier.",
    price: "$4,500",
    priceNote: "per month · no setup fee · cancel anytime after 3-month minimum",
    href: "/services/clarion-complete-stack",
  },
];

const delays = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

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
          fontSize: "16px",
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
          fontSize: "17px",
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
      <div style={{ fontSize: "14px", color: "#9E9A92", letterSpacing: "0.5px", marginBottom: "28px" }}>
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
            fontSize: "14px",
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
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase",
            background: "transparent",
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,0.4)",
            textDecoration: "none",
            transition: "border-color 0.25s, color 0.25s",
            minHeight: "44px",
            whiteSpace: "normal",
            wordBreak: "break-word",
            textAlign: "center",
            width: "100%",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A84C"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
        >
          Learn More About {service.title}
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
          fontSize: "13px",
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

      <div className="pricing-section-header" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "clamp(40px, 6vw, 72px)" }}>
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
          Five Tiers.
          <br />
          <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Zero Guesswork.</em>
        </h2>
        <p
          ref={noteRef}
          className="reveal reveal-delay-2"
          style={{ maxWidth: "360px", color: "#9E9A92", fontSize: "17px", lineHeight: 1.8 }}
        >
          Local SEO, AI automation, web design, and media production for McKinney and North Dallas businesses. No setup fees, no lock-ins.
        </p>
      </div>

      <div
        className="services-pricing-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          background: "#080808",
        }}
      >
        {services.map((s, i) => (
          <ServiceCard key={s.num} service={s} delay={delays[i]} />
        ))}
      </div>

      {/* Total Online Presence Takeover — Crown Card */}
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "#C9A84C",
            padding: "clamp(40px, 5vw, 64px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-block",
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              background: "#080808",
              color: "#C9A84C",
              padding: "5px 14px",
              marginBottom: "32px",
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 500,
            }}
          >
            TOTAL DOMINATION
          </div>

          <div className="crown-card-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
            {/* Left: headline + price + CTAs */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: 300,
                  color: "#080808",
                  lineHeight: 1.0,
                  letterSpacing: "-0.5px",
                  marginBottom: "24px",
                }}
              >
                Total Online Presence Takeover.
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(52px, 7vw, 80px)",
                  color: "#080808",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                $9,500
              </div>
              <div style={{ fontSize: "14px", color: "rgba(8,8,8,0.6)", letterSpacing: "0.5px", marginBottom: "36px" }}>
                per month · No setup fee · Cancel after 3-month minimum
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="/shop"
                  style={{
                    display: "inline-block",
                    padding: "14px 28px",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 600,
                    color: "#C9A84C",
                    background: "#080808",
                    border: "1px solid #080808",
                    textDecoration: "none",
                  }}
                >
                  Get Started →
                </a>
                <a
                  href="/services/presence-takeover"
                  style={{
                    display: "inline-block",
                    padding: "14px 28px",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 500,
                    color: "#080808",
                    background: "transparent",
                    border: "1px solid rgba(8,8,8,0.4)",
                    textDecoration: "none",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right: highlight bullets */}
            <div>
              <p style={{ fontSize: "15px", color: "rgba(8,8,8,0.7)", lineHeight: 1.6, marginBottom: "20px" }}>
                At $4,500, your AI, SEO, and media are handled. At $9,500, we add the four channels that need daily management:
              </p>
              {[
                "Monthly on-site media shoot (photos + video)",
                "Social media fully managed (IG + FB + TikTok)",
                "Google + Meta + TikTok Ads included",
                "Dedicated point of contact: Stan",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    fontSize: "17px",
                    color: "#080808",
                    lineHeight: 1.5,
                    marginBottom: "18px",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "1px",
                      background: "#080808",
                      flexShrink: 0,
                      display: "inline-block",
                      marginTop: "12px",
                    }}
                  />
                  {item}
                </div>
              ))}
              <div style={{ marginTop: "8px", fontSize: "14px", color: "rgba(8,8,8,0.55)", lineHeight: 1.6 }}>
                + Everything in Clarion Complete Stack
              </div>
            </div>
          </div>
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: "40px", fontSize: "14px", color: "#9E9A92", lineHeight: 1.7 }}>
        Looking for something specific? We also offer Web Design, Media Production, and CRM &amp; AI Workflows as{" "}
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

      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <a
          href="/shop"
          style={{
            display: "inline-block",
            padding: "14px 36px",
            fontSize: "14px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 500,
            color: "#080808",
            background: "#C9A84C",
            border: "1px solid #C9A84C",
            textDecoration: "none",
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#E2C97E"; e.currentTarget.style.borderColor = "#E2C97E"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.borderColor = "#C9A84C"; }}
        >
          Shop Services
        </a>
      </div>
    </section>
  );
}
