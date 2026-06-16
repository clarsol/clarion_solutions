"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const PAIN_POINTS = [
  {
    num: "01",
    title: "Manual Process Bottlenecks",
    desc: "Permit applications, benefit enrollment, and service requests pile up in manual queues. Staff spend hours on data entry instead of serving constituents, and backlogs grow faster than headcount can address them.",
  },
  {
    num: "02",
    title: "TRAIGA Compliance Pressure",
    desc: "Texas HB 149 requires agencies to disclose AI interactions and maintain documentation of every AI system in use. Most agencies don't have a current inventory, let alone a compliance framework.",
  },
  {
    num: "03",
    title: "Citizen Service Gaps",
    desc: "Constituents expect 24/7 acknowledgment, real-time status updates, and consistent communication. Manual processes can't deliver that consistently, and the gaps erode public trust over time.",
  },
  {
    num: "04",
    title: "Fragmented Systems",
    desc: "Departments run on disconnected platforms that don't talk to each other. Data gets re-entered multiple times, handoffs get lost, and no one has a complete operational picture.",
  },
];

const PRICING = [
  {
    badge: "START HERE",
    title: "AI Readiness Audit",
    price: "$2,500",
    features: [
      "Workflow assessment across target departments",
      "Automation opportunity mapping",
      "TRAIGA compliance gap analysis",
      "Written recommendations report",
      "Actionable roadmap for leadership review",
    ],
    cta: "Book a Discovery Call",
    ctaStyle: "primary",
  },
  {
    badge: "Most Common",
    title: "Workflow Automation Implementation",
    price: "Starting at $10,000",
    features: [
      "Up to 3 automated workflows built and deployed",
      "API integrations with existing systems",
      "Citizen-facing or internal automation",
      "n8n and GHL automation stack",
      "Full documentation and staff handoff",
    ],
    cta: "Book a Discovery Call",
    ctaStyle: "primary",
  },
  {
    badge: "Ongoing Support",
    title: "Ongoing Optimization Retainer",
    price: "$1,500/month",
    features: [
      "Performance monitoring and workflow updates",
      "New automation builds as needs evolve",
      "Priority support and response",
      "Monthly reporting and review",
      "Continuous improvement partner",
    ],
    cta: "Book a Discovery Call",
    ctaStyle: "primary",
  },
  {
    badge: "Full Transformation",
    title: "Custom Modernization Package",
    features: [
      "Full digital transformation across departments",
      "Custom automation architecture",
      "Deep systems integration",
      "Change management and staff training",
      "Long-term modernization roadmap",
    ],
    cta: "Contact for Scope",
    ctaStyle: "ghost",
  },
];

const WHY_CLARION = [
  {
    title: "Veteran-Owned, North Texas-Based",
    desc: "We understand the region, operate in the same timezone, and show up in person when it matters. You're not working with a remote agency that has never set foot in a Texas municipality.",
  },
  {
    title: "Fixed Scope, No Surprises",
    desc: "Every engagement has a defined deliverable and a fixed price agreed before work begins. No scope creep, no change orders, no budget overruns halfway through a project.",
  },
  {
    title: "Built for Municipal Procurement",
    desc: "Our engagement tiers are deliberately structured to stay under typical Texas municipal procurement thresholds, so you can move without waiting on a formal RFP process.",
  },
  {
    title: "Direct Access, Zero Overhead",
    desc: "You work directly with the person doing the work, not an account manager passing messages. No layers, no markup for overhead that doesn't benefit your agency.",
  },
];

const FAQ = [
  {
    q: "Do we need to go through a formal RFP process?",
    a: "Most Tier 1 and Tier 2 engagements fall below standard municipal procurement thresholds in Texas, which means department heads can often approve them directly without a formal RFP. Thresholds vary by city, so we walk through your specific situation on the discovery call to make sure we scope the engagement correctly from the start.",
  },
  {
    q: "Are you TRAIGA compliant as a vendor?",
    a: "Yes. As an AI vendor supplying services to Texas government entities, we operate in full compliance with TRAIGA requirements, including maintaining documentation of every AI system we deploy and making that documentation available to you as the deployer. TRAIGA compliance is built into every government engagement from day one, not bolted on at the end.",
  },
  {
    q: "What systems do you integrate with?",
    a: "We integrate with most municipal platforms commonly used in Texas cities, including permitting and inspection software, 311 and work order systems, constituent management tools, and standard productivity suites. During the AI Readiness Audit we map your current tool stack and identify what can be connected. If a system doesn't support integration, we tell you upfront and walk through the options.",
  },
  {
    q: "How long does implementation take?",
    a: "The AI Readiness Audit runs two to three weeks from kickoff to final written report. Workflow Automation Implementation projects typically take four to six weeks depending on scope. All timelines are fixed at the scoping stage and documented in writing before work begins. No revised timelines mid-project.",
  },
];

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div
      style={{ borderBottom: "1px solid rgba(201,168,76,0.2)", cursor: "pointer" }}
      onClick={onClick}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", gap: "24px" }}>
        <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "20px", fontWeight: 300, color: isOpen ? "#E2C97E" : "#F5F1E8", lineHeight: 1.3, transition: "color 0.2s" }}>
          {q}
        </span>
        <span style={{ color: "#C9A84C", fontSize: "20px", flexShrink: 0, transition: "transform 0.3s", transform: isOpen ? "rotate(45deg)" : "none", lineHeight: 1 }}>
          +
        </span>
      </div>
      <div style={{ maxHeight: isOpen ? "500px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
        <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.8, paddingBottom: "24px" }}>{a}</p>
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
      }}
    >
      {card.badge && (
        <div style={{ display: "inline-block", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#080808", background: "#C9A84C", padding: "4px 12px", marginBottom: "24px", alignSelf: "flex-start" }}>
          {card.badge}
        </div>
      )}
      <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "26px", fontWeight: 300, color: "#F5F1E8", marginBottom: card.price ? "12px" : "16px" }}>
        {card.title}
      </div>
      {card.price && (
        <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: 400, color: "#C9A84C", marginBottom: "20px", letterSpacing: "0.5px" }}>
          {card.price}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px", flex: 1 }}>
        {card.features.map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "16px", color: "#9E9A92", lineHeight: 1.5 }}>
            <span style={{ width: "16px", height: "1px", background: "#C9A84C", flexShrink: 0, display: "inline-block", marginTop: "10px" }} />
            {f}
          </div>
        ))}
      </div>
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
          ...(isPrimary ? { background: "#C9A84C", color: "#080808" } : { background: "transparent", color: "#C9A84C" }),
        }}
      >
        {card.cta}
      </button>
    </div>
  );
}

export default function GovModernizationPage() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main style={{ background: "#080808", paddingTop: "92px" }}>
      <style>{`
        .gov-sba-seals {
          position: absolute;
          bottom: 120px;
          left: 5%;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 1;
        }
        .gov-sba-seal {
          height: 160px;
          width: auto;
          object-fit: contain;
        }
        @media (max-width: 768px) {
          .gov-sba-seals { display: none; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ padding: "80px 5% 100px", borderBottom: "1px solid rgba(201,168,76,0.15)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", letterSpacing: "1px", color: "#9E9A92", marginBottom: "48px" }}>
          <Link href="/" style={{ color: "#9E9A92", textDecoration: "none" }} className="hover-gold">Home</Link>
          <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
          <span style={{ color: "#C9A84C" }}>Government Modernization</span>
        </div>

        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div className="reveal" style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            Government Modernization · North Texas
          </div>

          <h1 className="reveal reveal-delay-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.5px", color: "#F5F1E8", marginBottom: "32px" }}>
            Modernize Your Government
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Workflows. Now.</em>
          </h1>

          <p className="reveal reveal-delay-2" style={{ fontSize: "18px", color: "#9E9A92", lineHeight: 1.7, maxWidth: "640px", margin: "0 auto 20px" }}>
            We automate the manual processes slowing down your agency, integrate your fragmented systems, and help you get ahead of Texas TRAIGA compliance requirements. SDVOSB certified. SAM.gov registered. Fixed scope. No bloat. Veteran-owned and North Texas-based.
          </p>

          <p className="reveal reveal-delay-2" style={{ fontSize: "15px", color: "rgba(201,168,76,0.7)", lineHeight: 1.6, maxWidth: "560px", margin: "0 auto 48px", fontStyle: "italic" }}>
            Engagements structured to stay under municipal procurement thresholds so you can move without waiting on a formal RFP.
          </p>

          <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))} className="btn-primary-link">
              Book a Discovery Call
            </button>
            <a href="#pricing" className="btn-ghost-link" style={{ textDecoration: "none" }}>
              View Pricing
            </a>
          </div>

          {/* SBA certification seals */}
          <div className="gov-sba-seals">
            <img
              className="gov-sba-seal"
              src="/IMG/sba-veteran-owned-certified.png"
              alt="SBA Certified Veteran-Owned Business"
            />
            <img
              className="gov-sba-seal"
              src="/IMG/sba-sdvosb-certified.png"
              alt="SBA Certified Service-Disabled Veteran-Owned Small Business"
            />
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-pad" style={{ background: "#161616" }}>
        <div className="reveal" style={{ marginBottom: "64px" }}>
          <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            Who We Serve
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1 }}>
            Federal Agencies.
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Texas Municipalities.</em>
          </h2>
        </div>

        <div className="reveal service-includes-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {/* Federal Agencies */}
          <div style={{ background: "#0e0e0e", border: "1px solid rgba(201,168,76,0.2)", padding: "48px 40px", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>Federal Agencies</div>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px", fontWeight: 300, color: "#F5F1E8", marginBottom: "24px", lineHeight: 1.2 }}>
              SDVOSB-Certified. SAM.gov Registered.
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px", flex: 1 }}>
              {[
                "SDVOSB (Service-Disabled Veteran-Owned Small Business) certified",
                "Active SAM.gov registration — UEI available upon request",
                "NAICS codes: 541511 · 541512 · 541519 · 541613 · 541810 · 518210",
                "Fixed-scope AI automation and digital modernization services",
                "Available for direct awards and teaming arrangements",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "16px", color: "#9E9A92", lineHeight: 1.5 }}>
                  <span style={{ width: "16px", height: "1px", background: "#C9A84C", flexShrink: 0, display: "inline-block", marginTop: "10px" }} />
                  {item}
                </div>
              ))}
            </div>
            <a
              href="mailto:stanw@clarionsol.com"
              style={{
                display: "block",
                textAlign: "center",
                padding: "14px 28px",
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                background: "#C9A84C",
                color: "#080808",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Contact for Federal Contracting
            </a>
          </div>

          {/* Texas Municipalities */}
          <div style={{ background: "#0e0e0e", border: "1px solid rgba(201,168,76,0.2)", padding: "48px 40px", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>Texas Municipalities</div>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px", fontWeight: 300, color: "#F5F1E8", marginBottom: "24px", lineHeight: 1.2 }}>
              TRAIGA-Ready. Procurement-Threshold Aware.
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px", flex: 1 }}>
              {[
                "Full TRAIGA (HB 149) compliance built into every engagement",
                "Engagements structured below standard Texas procurement thresholds",
                "No formal RFP required for Tier 1 and Tier 2 scopes",
                "Direct department approval on most projects",
                "Veteran-owned, North Texas-based — on the ground when it matters",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "16px", color: "#9E9A92", lineHeight: 1.5 }}>
                  <span style={{ width: "16px", height: "1px", background: "#C9A84C", flexShrink: 0, display: "inline-block", marginTop: "10px" }} />
                  {item}
                </div>
              ))}
            </div>
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
                background: "transparent",
                color: "#C9A84C",
                border: "1px solid #C9A84C",
                cursor: "pointer",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Book a Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-pad" style={{ background: "#0e0e0e" }}>
        <div className="reveal" style={{ marginBottom: "64px" }}>
          <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            The Problem
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1 }}>
            What&apos;s Holding
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Agencies Back.</em>
          </h2>
        </div>

        <div className="reveal service-includes-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(201,168,76,0.15)" }}>
          {PAIN_POINTS.map((point) => (
            <div key={point.num} style={{ background: "#0e0e0e", padding: "40px 36px" }} className="includes-card">
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: "48px", color: "rgba(201,168,76,0.2)", lineHeight: 1, marginBottom: "16px" }}>
                {point.num}
              </div>
              <div style={{ fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
                {point.title}
              </div>
              <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.8 }}>{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-pad" style={{ background: "#080808" }}>
        <div className="reveal" style={{ marginBottom: "64px" }}>
          <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            Pricing
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1 }}>
            Transparent Pricing.
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>No Surprises.</em>
          </h2>
          <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.8, marginTop: "20px", maxWidth: "600px" }}>
            Most agencies start with Tier 1 and move to Tier 2 within 90 days. The audit fee is credited toward implementation when you proceed, so it functions as a no-risk starting point.
          </p>
        </div>

        <div className="reveal service-pricing-cards" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {PRICING.map((card) => (
            <PricingCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      {/* Why Clarion */}
      <section className="section-pad" style={{ background: "#0e0e0e" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="service-split-grid">
          <div className="reveal">
            <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
              Why Clarion
            </div>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 3.5vw, 52px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.15, marginBottom: "24px" }}>
              Built for
              <br />
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Government Work.</em>
            </h2>
            <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.8 }}>
              Government engagements require a vendor who understands procurement constraints, compliance requirements, and how decisions actually get made at the city and county level. Clarion is built for exactly this.
            </p>
          </div>

          <div className="reveal reveal-delay-1" style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "8px" }}>
            {WHY_CLARION.map((item, i) => (
              <div key={i} style={{ padding: "24px 28px", background: "#080808", border: "1px solid rgba(201,168,76,0.12)" }}>
                <div style={{ fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "10px" }}>
                  {item.title}
                </div>
                <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Federal Credentials */}
      <section className="section-pad" style={{ background: "#161616" }}>
        <div className="reveal" style={{ marginBottom: "64px" }}>
          <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            Federal Credentials
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1 }}>
            Verified. Registered.
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Ready to Work.</em>
          </h2>
        </div>

        <div className="reveal service-includes-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "32px" }}>
          <div style={{ background: "#0e0e0e", border: "1px solid rgba(201,168,76,0.2)", padding: "36px 32px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>SAM.gov Status</div>
            <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: 300, color: "#F5F1E8", marginBottom: "12px" }}>Active Registration</div>
            <p style={{ fontSize: "15px", color: "#9E9A92", lineHeight: 1.7 }}>Registered and active in the System for Award Management. Current UEI available upon request for teaming or contracting purposes.</p>
          </div>
          <div style={{ background: "#0e0e0e", border: "1px solid rgba(201,168,76,0.2)", padding: "36px 32px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>SDVOSB Eligibility</div>
            <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: 300, color: "#F5F1E8", marginBottom: "12px" }}>Service-Disabled Veteran-Owned</div>
            <p style={{ fontSize: "15px", color: "#9E9A92", lineHeight: 1.7 }}>SDVOSB-certified small business. Eligible for set-aside contracts and sole-source awards under applicable thresholds.</p>
          </div>
          <div style={{ background: "#0e0e0e", border: "1px solid rgba(201,168,76,0.2)", padding: "36px 32px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>Teaming</div>
            <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: 300, color: "#F5F1E8", marginBottom: "12px" }}>Open to Prime Partnerships</div>
            <p style={{ fontSize: "15px", color: "#9E9A92", lineHeight: 1.7 }}>Available as a subcontractor or teaming partner for large prime contractors pursuing AI modernization and automation contracts.</p>
          </div>
        </div>

        <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", flexWrap: "wrap" }}>
            <img
              src="/IMG/sba-veteran-owned-certified.png"
              alt="SBA Certified Veteran-Owned Business"
              style={{ height: "80px", width: "auto", objectFit: "contain" }}
            />
            <img
              src="/IMG/sba-sdvosb-certified.png"
              alt="SBA Certified Service-Disabled Veteran-Owned Small Business"
              style={{ height: "80px", width: "auto", objectFit: "contain" }}
            />
          </div>
          <p style={{ fontSize: "15px", color: "#9E9A92", lineHeight: 1.7, marginTop: "20px" }}>
            SBA-Certified · VOB &amp; SDVOSB · Application ID 96859 · Active through June 14, 2029
          </p>
        </div>

        <div className="reveal" style={{ background: "#0e0e0e", border: "1px solid rgba(201,168,76,0.15)", padding: "36px 40px", marginBottom: "48px" }}>
          <div style={{ fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>NAICS Codes</div>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            {[
              { code: "541511", label: "Custom Computer Programming" },
              { code: "541512", label: "Web Design & Development" },
              { code: "541519", label: "Other Computer-Related Services" },
              { code: "541613", label: "Marketing Consulting" },
              { code: "541810", label: "Advertising Agencies" },
              { code: "518210", label: "Data Processing & Hosting" },
            ].map(({ code, label }) => (
              <div key={code} style={{ background: "#161616", border: "1px solid rgba(201,168,76,0.2)", padding: "10px 20px", display: "flex", flexDirection: "column", gap: "4px", flex: 1, minWidth: "120px", maxWidth: "160px", textAlign: "center" }}>
                <span style={{ fontFamily: "var(--font-bebas)", fontSize: "20px", color: "#C9A84C", letterSpacing: "1px" }}>{code}</span>
                <span style={{ fontSize: "12px", color: "#9E9A92", letterSpacing: "0.5px" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ textAlign: "center" }}>
          <a
            href="mailto:stanw@clarionsol.com"
            style={{
              display: "inline-block",
              padding: "14px 40px",
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              background: "#C9A84C",
              color: "#080808",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Inquire About Federal Contracting
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: "#080808" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }} className="service-split-grid">
          <div className="reveal">
            <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
              FAQ
            </div>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 3.5vw, 52px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.15, marginBottom: "24px" }}>
              Common
              <br />
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Questions.</em>
            </h2>
            <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.8 }}>
              Still have questions?{" "}
              <button onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))} style={{ background: "none", border: "none", color: "#C9A84C", textDecoration: "underline", cursor: "pointer", padding: 0, fontSize: "inherit", fontFamily: "inherit" }}>
                Book a discovery call
              </button>{" "}
              and we&apos;ll walk through your specific situation.
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}>
              {FAQ.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "120px 5%", background: "#0e0e0e", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
        <div className="reveal" style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
          Ready to Modernize?
        </div>
        <h2 className="reveal reveal-delay-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1, marginBottom: "24px" }}>
          Let&apos;s Start With
          <br />
          <em style={{ color: "#C9A84C", fontStyle: "italic" }}>A Discovery Call.</em>
        </h2>
        <p className="reveal reveal-delay-2" style={{ fontSize: "18px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 48px" }}>
          No commitment, no pressure. We&apos;ll look at where your agency is, identify the highest-impact automation opportunities, and tell you honestly whether we&apos;re the right fit.
        </p>
        <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))} className="btn-primary-link">
            Book a Discovery Call
          </button>
          <Link href="/" className="btn-ghost-link">
            Back to Home
          </Link>
        </div>
      </section>

    </main>
  );
}
