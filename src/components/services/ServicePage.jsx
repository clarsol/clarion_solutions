"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { serviceList } from "@/lib/serviceData";

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(201,168,76,0.2)",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 0",
          gap: "24px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "20px",
            fontWeight: 300,
            color: isOpen ? "#E2C97E" : "#F5F1E8",
            lineHeight: 1.3,
            transition: "color 0.2s",
          }}
        >
          {q}
        </span>
        <span
          style={{
            color: "#C9A84C",
            fontSize: "20px",
            flexShrink: 0,
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(45deg)" : "none",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </div>
      <div
        style={{
          maxHeight: isOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          style={{
            fontSize: "17px",
            color: "#9E9A92",
            lineHeight: 1.8,
            paddingBottom: "24px",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

function PricingCard({ card }) {
  const [hovered, setHovered] = useState(false);
  const isPrimary = card.ctaStyle === "primary";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#161616" : "#0e0e0e",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.2)"}`,
        padding: "48px 40px",
        display: "flex",
        flexDirection: "column",
        transition: "background 0.3s, border-color 0.3s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {card.badge && (
        <div
          style={{
            display: "inline-block",
            fontSize: "10px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#080808",
            background: "#C9A84C",
            padding: "4px 12px",
            marginBottom: "24px",
            alignSelf: "flex-start",
          }}
        >
          {card.badge}
        </div>
      )}
      <div
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "26px",
          fontWeight: 300,
          color: "#F5F1E8",
          marginBottom: "16px",
        }}
      >
        {card.title}
      </div>
      <div
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "52px",
          color: "#C9A84C",
          lineHeight: 1,
          marginBottom: "8px",
        }}
      >
        {card.price}
      </div>
      <div
        style={{
          fontSize: "14px",
          color: "#9E9A92",
          marginBottom: "32px",
          letterSpacing: "0.5px",
        }}
      >
        {card.priceNote}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "40px",
          flex: 1,
        }}
      >
        {card.features.map((f) => (
          <div
            key={f}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              fontSize: "16px",
              color: "#9E9A92",
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                width: "16px",
                height: "1px",
                background: "#C9A84C",
                flexShrink: 0,
                display: "inline-block",
                marginTop: "10px",
              }}
            />
            {f}
          </div>
        ))}
      </div>
      {card.ctaHref ? (
        <Link
          href={card.ctaHref}
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            padding: "14px 28px",
            fontSize: "14px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            transition: "all 0.25s",
            cursor: "pointer",
            fontFamily: "var(--font-dm-sans)",
            textDecoration: "none",
            border: isPrimary ? "none" : "1px solid #C9A84C",
            ...(isPrimary
              ? { background: "#C9A84C", color: "#080808" }
              : { background: "transparent", color: "#C9A84C" }),
          }}
        >
          {card.cta}
        </Link>
      ) : (
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))}
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            padding: "14px 28px",
            fontSize: "14px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            transition: "all 0.25s",
            cursor: "pointer",
            fontFamily: "var(--font-dm-sans)",
            border: isPrimary ? "none" : "1px solid #C9A84C",
            ...(isPrimary
              ? { background: "#C9A84C", color: "#080808" }
              : { background: "transparent", color: "#C9A84C" }),
          }}
        >
          {card.cta}
        </button>
      )}
    </div>
  );
}

export default function ServicePage({ service, carousel, heroCentered = false, showCompleteStackCta = false }) {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const related = serviceList.filter((s) => s.slug !== service.slug);

  return (
    <main style={{ background: "#080808", paddingTop: "92px" }}>

      {/* ── Hero ── */}
      <section
        style={{
          padding: "80px 5% 100px",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: heroCentered
              ? "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)"
              : "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Breadcrumb */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            letterSpacing: "1px",
            color: "#9E9A92",
            marginBottom: "48px",
          }}
        >
          <Link href="/" style={{ color: "#9E9A92", textDecoration: "none" }} className="hover-gold">
            Home
          </Link>
          <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
          <Link href="/services" style={{ color: "#9E9A92", textDecoration: "none" }} className="hover-gold">
            Services
          </Link>
          <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
          <span style={{ color: "#C9A84C" }}>{service.name}</span>
        </div>

        <div style={{ maxWidth: heroCentered ? "900px" : "800px", margin: heroCentered ? "0 auto" : undefined, textAlign: heroCentered ? "center" : undefined }}>
          <div
            className="reveal"
            style={{
              fontSize: "13px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: heroCentered ? "center" : undefined,
              gap: "16px",
            }}
          >
            <span
              style={{
                width: "32px",
                height: "1px",
                background: "#C9A84C",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {service.eyebrow}
          </div>

          <h1
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(48px, 6vw, 88px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.5px",
              color: "#F5F1E8",
              marginBottom: "32px",
            }}
          >
            {service.headline}
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>
              {service.headlineItalic}
            </em>
          </h1>

          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: "18px",
              color: "#9E9A92",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: heroCentered ? "0 auto 48px" : "0 0 48px",
            }}
          >
            {service.subtext}
          </p>

          <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: heroCentered ? "center" : undefined }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))} className="btn-primary-link">
              Book a Free Call
            </button>
            <Link href="/services" className="btn-ghost-link">
              All Services
            </Link>
          </div>

          {service.callout && (
            <div
              className="reveal reveal-delay-4"
              style={{
                marginTop: "32px",
                padding: "16px 20px",
                background: "rgba(201,168,76,0.05)",
                borderLeft: "3px solid #C9A84C",
                border: "1px solid rgba(201,168,76,0.2)",
                borderLeftWidth: "3px",
              }}
            >
              <p style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.7, marginBottom: service.relatedLink ? "10px" : "0" }}>
                {service.callout}
              </p>
              {service.relatedLink && (
                <p style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.7 }}>
                  {service.relatedLink.label}{" "}
                  <Link
                    href={service.relatedLink.href}
                    style={{ color: "#C9A84C", textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.35)", paddingBottom: "1px" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A84C"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"; }}
                  >
                    {service.relatedLink.linkText} →
                  </Link>
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {carousel}

      {/* ── Pricing ── */}
      <section className="section-pad" style={{ background: "#080808" }}>
        <div className="reveal" style={{ marginBottom: "64px" }}>
          <div
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
            <span
              style={{
                width: "32px",
                height: "1px",
                background: "#C9A84C",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Pricing
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 300,
              color: "#F5F1E8",
              lineHeight: 1.1,
            }}
          >
            Transparent Pricing.
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>No Surprises.</em>
          </h2>
        </div>

        <div
          className="reveal service-pricing-cards"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${service.pricing.length}, 1fr)`,
            gap: "24px",
            maxWidth: service.pricing.length === 1 ? "480px" : "none",
          }}
        >
          {service.pricing.map((card) => (
            <PricingCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      {showCompleteStackCta && (
        <section style={{ padding: "80px 5%", background: "#080808", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <div style={{ maxWidth: "760px" }}>
            <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
              Level Up
            </div>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.15, marginBottom: "24px" }}>
              Want Media Built Into
              <br />
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Your Growth System?</em>
            </h2>
            <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.85, marginBottom: "32px", maxWidth: "640px" }}>
              Media production is included in the Clarion Complete Stack at $4,500/mo, alongside AI automation, local SEO, and monthly content. One team, one contract, everything working together.
            </p>
            <Link href="/services/clarion-complete-stack" className="btn-primary-link">
              Learn More About the Complete Stack
            </Link>
          </div>
        </section>
      )}

      {/* ── What's Included ── */}
      <section
        className="section-pad"
        style={{ background: "#0e0e0e" }}
      >
        <div className="reveal" style={{ marginBottom: "64px" }}>
          <div
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
            <span
              style={{
                width: "32px",
                height: "1px",
                background: "#C9A84C",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            What&apos;s Included
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 300,
              color: "#F5F1E8",
              lineHeight: 1.1,
            }}
          >
            {service.includesHeadline || "Everything You Need."}
            {service.includesHeadlineItalic !== "" && (
              <>
                <br />
                <em style={{ color: "#C9A84C", fontStyle: "italic" }}>
                  {service.includesHeadlineItalic || "Nothing You Don't."}
                </em>
              </>
            )}
          </h2>
          {service.definitionBlock && (
            <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.8, marginTop: "20px", maxWidth: "640px" }}>
              {service.definitionBlock}
            </p>
          )}
        </div>

        {service.aeoPanel ? (
          <div
            className="service-split-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}
          >
            {/* Left: feature list */}
            <div className="reveal">
              {service.includes.map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    padding: "24px 0 28px",
                    borderBottom: i < service.includes.length - 1 ? "1px solid rgba(201,168,76,0.1)" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "clamp(13px, 1vw, 16px)",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#C9A84C",
                      }}
                    >
                      {item.title}
                    </span>
                    {item.badge && (
                      <span
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "10px",
                          fontWeight: 500,
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          color: "#080808",
                          background: "#C9A84C",
                          padding: "2px 8px",
                          lineHeight: "18px",
                          flexShrink: 0,
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: "clamp(14px, 1.1vw, 18px)", color: "#9E9A92", lineHeight: 1.8 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: AEO explainer panel */}
            <div
              className="reveal reveal-delay-1"
              style={{
                border: "1px solid rgba(201,168,76,0.35)",
                background: "rgba(201,168,76,0.03)",
                padding: "48px 40px",
                position: "sticky",
                top: "120px",
              }}
            >
              <div
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
                <span
                  style={{
                    width: "32px",
                    height: "1px",
                    background: "#C9A84C",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                {service.aeoPanel.eyebrow}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(14px, 1.1vw, 17px)",
                  color: "#9E9A92",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                }}
              >
                {service.aeoPanel.body}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {service.aeoPanel.stats.map((stat) => (
                  <div
                    key={stat}
                    style={{
                      padding: "16px 20px",
                      borderLeft: "2px solid rgba(201,168,76,0.6)",
                      background: "rgba(201,168,76,0.03)",
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(15px, 1.2vw, 19px)",
                      color: "#F5F1E8",
                      lineHeight: 1.5,
                    }}
                  >
                    {stat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="reveal service-includes-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1px",
              background: "rgba(201,168,76,0.15)",
            }}
          >
            {service.includes.map((item, i) => (
              <div
                key={item.title}
                style={{
                  background: "#0e0e0e",
                  padding: "40px 36px",
                  ...(service.includes.length % 2 !== 0 && i === service.includes.length - 1
                    ? { gridColumn: "1 / -1" }
                    : {}),
                }}
                className="includes-card"
              >
                <div
                  style={{
                    fontSize: "13px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#9E9A92",
                    lineHeight: 1.8,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Who It's For ── */}
      <section className="section-pad" style={{ background: "#080808" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="service-split-grid"
        >
          <div className="reveal">
            <div
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
              <span
                style={{
                  width: "32px",
                  height: "1px",
                  background: "#C9A84C",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              Who It&apos;s For
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 3.5vw, 52px)",
                fontWeight: 300,
                color: "#F5F1E8",
                lineHeight: 1.15,
                marginBottom: "24px",
              }}
            >
              Is This the
              <br />
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Right Fit?</em>
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#9E9A92",
                lineHeight: 1.8,
              }}
            >
              {service.whoFor.intro}
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                paddingTop: "8px",
              }}
            >
              {service.whoFor.points.map((pt, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "20px 24px",
                    background: "#0e0e0e",
                    border: "1px solid rgba(201,168,76,0.12)",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      background: "#C9A84C",
                      flexShrink: 0,
                      marginTop: "7px",
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.6 }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-pad" style={{ background: "#0e0e0e" }}>
        <div className="reveal" style={{ marginBottom: "64px" }}>
          <div
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
            <span
              style={{
                width: "32px",
                height: "1px",
                background: "#C9A84C",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            How It Works
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 300,
              color: "#F5F1E8",
              lineHeight: 1.1,
            }}
          >
            Our Process.
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Clear from Day One.</em>
          </h2>
        </div>

        <div
          className="reveal service-process-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(201,168,76,0.15)",
          }}
        >
          {service.process.map((step) => (
            <div
              key={step.num}
              style={{
                background: "#0e0e0e",
                padding: "40px 32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "56px",
                  color: "rgba(201,168,76,0.25)",
                  lineHeight: 1,
                  marginBottom: "20px",
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </div>
              <p
                style={{
                  fontSize: "16px",
                  color: "#9E9A92",
                  lineHeight: 1.7,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad" style={{ background: "#0e0e0e" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="service-split-grid"
        >
          <div className="reveal">
            <div
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
              <span
                style={{
                  width: "32px",
                  height: "1px",
                  background: "#C9A84C",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              FAQ
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 3.5vw, 52px)",
                fontWeight: 300,
                color: "#F5F1E8",
                lineHeight: 1.15,
                marginBottom: "24px",
              }}
            >
              Common
              <br />
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Questions.</em>
            </h2>
            <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.8 }}>
              Still have questions?{" "}
              <button onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))} style={{ background: "none", border: "none", color: "#C9A84C", textDecoration: "underline", cursor: "pointer", padding: 0, fontSize: "inherit", fontFamily: "inherit" }}>
                Book a free call
              </button>{" "}
              and we&apos;ll walk through your specific situation.
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}>
              {service.faq.map((item, i) => (
                <FAQItem
                  key={i}
                  q={item.q}
                  a={item.a}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="section-pad" style={{ background: "#080808" }}>
        <div className="reveal" style={{ marginBottom: "48px" }}>
          <div
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
            <span
              style={{
                width: "32px",
                height: "1px",
                background: "#C9A84C",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Other Services
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 300,
              color: "#F5F1E8",
              lineHeight: 1.2,
            }}
          >
            Everything Works{" "}
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Together.</em>
          </h2>
        </div>

        <div
          className="reveal service-related-grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${related.length}, 1fr)`,
            gap: "1px",
            background: "rgba(201,168,76,0.15)",
          }}
        >
          {related.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "#080808",
                  padding: "32px 28px",
                  transition: "background 0.25s",
                }}
                className="related-card"
              >
                <div
                  style={{
                    fontSize: "13px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    marginBottom: "12px",
                  }}
                >
                  {s.name}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#9E9A92",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Learn more <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "120px 5%",
          background: "#0e0e0e",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          textAlign: "center",
        }}
      >
        <div
          className="reveal"
          style={{
            fontSize: "13px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "24px",
          }}
        >
          Ready to Get Started?
        </div>
        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(36px, 5vw, 72px)",
            fontWeight: 300,
            color: "#F5F1E8",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Let&apos;s Talk About
          <br />
          <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Your Business.</em>
        </h2>
        <p
          className="reveal reveal-delay-2"
          style={{
            fontSize: "18px",
            color: "#9E9A92",
            lineHeight: 1.8,
            maxWidth: "480px",
            margin: "0 auto 48px",
          }}
        >
          Book a free strategy call. We&apos;ll look at where you are, share what we see,
          and tell you honestly whether we can help.
        </p>
        <div
          className="reveal reveal-delay-3"
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))} className="btn-primary-link">
            Book a Free Call
          </button>
          <Link href="/" className="btn-ghost-link">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
