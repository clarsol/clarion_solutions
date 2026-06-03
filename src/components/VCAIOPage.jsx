"use client";

import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const GOLD = "#C9A84C";
const GOLD_DIM = "rgba(201,168,76,0.15)";
const GOLD_MED = "rgba(201,168,76,0.25)";
const TEXT_PRIMARY = "#F5F1E8";
const TEXT_MUTED = "#9E9A92";
const BG_MAIN = "#080808";
const BG_ALT = "#0e0e0e";

const INCLUDES = [
  "AI Readiness Assessment",
  "Vendor-neutral tool selection and due diligence",
  "AI governance and policy framework",
  "90-day implementation roadmap",
  "Staff adoption planning and change management",
  "Ongoing strategic advisory retainer",
];

const GOOD_FOR = [
  "Federal agencies and program offices",
  "Municipalities building AI adoption plans",
  "Growing SMBs adopting AI for the first time",
  "Organizations burned by bad AI vendor advice",
];

export default function VCAIOPage() {
  return (
    <>
      <Nav />
      <main style={{ background: BG_MAIN, paddingTop: "92px" }}>

        {/* HERO */}
        <section
          style={{
            padding: "100px 5% 120px",
            borderBottom: `1px solid ${GOLD_DIM}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", letterSpacing: "1px", color: TEXT_MUTED, marginBottom: "48px" }}>
              <Link href="/" style={{ color: TEXT_MUTED, textDecoration: "none" }} className="hover-gold">Home</Link>
              <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
              <Link href="/ai-services" style={{ color: TEXT_MUTED, textDecoration: "none" }} className="hover-gold">AI Services</Link>
              <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
              <span style={{ color: GOLD }}>Virtual Chief AI Officer</span>
            </div>

            <div style={{ maxWidth: "820px" }}>
              {/* Eyebrow */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <span style={{ width: "32px", height: "1px", background: GOLD, display: "inline-block", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-bebas)", fontSize: "13px", letterSpacing: "4px", color: GOLD }}>
                  NAICS 541613
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(48px, 6vw, 96px)",
                  fontWeight: 300,
                  lineHeight: 1.0,
                  letterSpacing: "-0.5px",
                  color: TEXT_PRIMARY,
                  marginBottom: "32px",
                }}
              >
                Virtual Chief
                <br />
                <em style={{ fontStyle: "italic", color: GOLD }}>AI Officer.</em>
              </h1>

              <p
                style={{
                  fontSize: "19px",
                  color: TEXT_MUTED,
                  lineHeight: 1.75,
                  maxWidth: "640px",
                  marginBottom: "48px",
                }}
              >
                Executive-level AI strategy without the $250K salary. Clarion embeds as your fractional AI advisor — helping you cut through hype, select the right tools, and build an adoption roadmap that actually works.
              </p>

              <BookCallButton className="btn-primary-link">Book a Call</BookCallButton>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED + GOOD FOR */}
        <section style={{ padding: "100px 5%", borderBottom: `1px solid ${GOLD_DIM}` }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="vcaio-two-col">

              {/* What's included */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  <span style={{ width: "32px", height: "1px", background: GOLD, display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: GOLD }}>
                    What&apos;s Included
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(32px, 4vw, 52px)",
                    fontWeight: 300,
                    color: TEXT_PRIMARY,
                    lineHeight: 1.1,
                    marginBottom: "40px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Everything You Need.
                  <br />
                  <em style={{ color: GOLD, fontStyle: "italic" }}>Nothing You Don&apos;t.</em>
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {INCLUDES.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                      <span style={{ width: "16px", height: "1px", background: GOLD, flexShrink: 0, display: "inline-block", marginTop: "11px" }} />
                      <span style={{ fontSize: "17px", color: TEXT_MUTED, lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Good for */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  <span style={{ width: "32px", height: "1px", background: GOLD, display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: GOLD }}>
                    Good For
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(32px, 4vw, 52px)",
                    fontWeight: 300,
                    color: TEXT_PRIMARY,
                    lineHeight: 1.1,
                    marginBottom: "40px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Who It&apos;s Built For.
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {GOOD_FOR.map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: "20px 24px",
                        background: "rgba(201,168,76,0.03)",
                        border: `1px solid ${GOLD_DIM}`,
                        fontSize: "16px",
                        color: TEXT_MUTED,
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" style={{ padding: "100px 5%", background: BG_MAIN, borderBottom: `1px solid ${GOLD_DIM}` }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: GOLD, display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: GOLD }}>Pricing</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(36px, 4.5vw, 64px)",
                fontWeight: 300,
                color: TEXT_PRIMARY,
                lineHeight: 1.1,
                marginBottom: "64px",
                letterSpacing: "-0.5px",
              }}
            >
              Start Small.
              <br />
              <em style={{ color: GOLD, fontStyle: "italic" }}>Scale With Confidence.</em>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: GOLD_MED }} className="vcaio-pricing-grid">

              {/* Tier 1: AI Readiness Audit */}
              <div style={{ background: BG_ALT, padding: "48px 40px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "inline-block", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#080808", background: GOLD, padding: "4px 12px", marginBottom: "24px", alignSelf: "flex-start" }}>
                  Start Here
                </div>
                <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "26px", fontWeight: 300, color: TEXT_PRIMARY, marginBottom: "16px" }}>
                  AI Readiness Audit
                </div>
                <div style={{ fontFamily: "var(--font-bebas)", fontSize: "52px", color: GOLD, lineHeight: 1, marginBottom: "8px" }}>
                  $250
                </div>
                <div style={{ fontSize: "14px", color: TEXT_MUTED, marginBottom: "32px", letterSpacing: "0.5px" }}>
                  one-time · written report + 90-day roadmap + 1-hour readout call
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px", flex: 1 }}>
                  {[
                    "Workflow assessment across key departments",
                    "Automation opportunity mapping",
                    "AI tool recommendations (vendor-neutral)",
                    "Written findings report",
                    "90-day implementation roadmap",
                    "1-hour readout call with Stan",
                  ].map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "16px", color: TEXT_MUTED, lineHeight: 1.5 }}>
                      <span style={{ width: "16px", height: "1px", background: GOLD, flexShrink: 0, display: "inline-block", marginTop: "10px" }} />
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  href="/shop"
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "14px 28px",
                    fontSize: "14px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    background: GOLD,
                    color: "#080808",
                    border: `1px solid ${GOLD}`,
                    textDecoration: "none",
                    transition: "all 0.25s",
                    boxSizing: "border-box",
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#E2C97E"; e.currentTarget.style.borderColor = "#E2C97E"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = GOLD; e.currentTarget.style.borderColor = GOLD; }}
                >
                  Shop Services
                </Link>
              </div>

              {/* Tier 2: vCAIO Advisory Retainer */}
              <div style={{ background: BG_ALT, padding: "48px 40px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "inline-block", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#080808", background: GOLD, padding: "4px 12px", marginBottom: "24px", alignSelf: "flex-start" }}>
                  Advisory Retainer
                </div>
                <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "26px", fontWeight: 300, color: TEXT_PRIMARY, marginBottom: "16px" }}>
                  vCAIO Advisory Retainer
                </div>
                <div style={{ fontFamily: "var(--font-bebas)", fontSize: "52px", color: GOLD, lineHeight: 1, marginBottom: "8px" }}>
                  Custom
                </div>
                <div style={{ fontSize: "14px", color: TEXT_MUTED, marginBottom: "32px", letterSpacing: "0.5px" }}>
                  contact for scope · monthly or project-based
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px", flex: 1 }}>
                  {[
                    "Everything in AI Readiness Audit",
                    "Ongoing strategic advisory sessions",
                    "Vendor negotiation and due diligence support",
                    "Staff adoption and change management",
                    "AI governance framework development",
                    "Dedicated point of contact",
                  ].map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "16px", color: TEXT_MUTED, lineHeight: 1.5 }}>
                      <span style={{ width: "16px", height: "1px", background: GOLD, flexShrink: 0, display: "inline-block", marginTop: "10px" }} />
                      {f}
                    </div>
                  ))}
                </div>
                <BookCallButton
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "14px 28px",
                    fontSize: "14px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    background: "transparent",
                    color: TEXT_PRIMARY,
                    border: `1px solid rgba(245,241,232,0.2)`,
                    cursor: "pointer",
                    transition: "all 0.25s",
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 300,
                    boxSizing: "border-box",
                  }}
                >
                  Book a Call
                </BookCallButton>
              </div>

            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section style={{ padding: "100px 5%", background: BG_ALT, textAlign: "center" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: GOLD, marginBottom: "24px" }}>
              Ready to Build Your AI Roadmap?
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 300,
                color: TEXT_PRIMARY,
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Strategy First.
              <br />
              <em style={{ color: GOLD, fontStyle: "italic" }}>Then Execution.</em>
            </h2>
            <p style={{ fontSize: "18px", color: TEXT_MUTED, lineHeight: 1.8, marginBottom: "40px" }}>
              Start with the AI Readiness Audit and get a clear picture of where you stand — then decide how far you want to take it.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <BookCallButton className="btn-primary-link">Book a Call</BookCallButton>
              <Link href="/shop" className="btn-ghost-link">Shop Services</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
