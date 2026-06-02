"use client";

import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";

const serviceCards = [
  {
    icon: "⚡",
    naics: "NAICS 541519",
    title: "AI Automation Services",
    body: "We design and deploy AI-powered workflow systems that replace manual follow-up, qualify leads automatically, and keep your pipeline moving 24/7. Built on our automation platform and native API integrations — no bloated enterprise platforms required.",
    includes: [
      "Missed call text-back and lead nurture sequences",
      "Conversational AI bots (voice and SMS)",
      "CRM pipeline automation and stage triggers",
      "Post-service follow-up and review request workflows",
      "Integration with your existing tools",
    ],
    goodFor: "Auto shops, home services, med spas, law firms, and any business that loses leads after hours.",
    ctaLabel: "See AI Automation",
    ctaHref: "/services/ai-automation",
  },
  {
    icon: "🧭",
    naics: "NAICS 541613",
    title: "Virtual Chief AI Officer",
    body: "Get executive-level AI strategy without the $250K salary. Clarion embeds as your fractional AI advisor — helping you build a real roadmap, select the right tools, govern AI responsibly, and drive adoption across your organization.",
    includes: [
      "AI readiness assessment",
      "Vendor-neutral tool selection and due diligence",
      "AI governance and policy framework",
      "90-day implementation roadmap",
      "Ongoing strategic advisory retainer",
    ],
    goodFor: "Federal agencies, municipalities, growing SMBs, and organizations building their AI foundation for the first time.",
    ctaLabel: "Learn About vCAIO",
    ctaHref: "/contact",
    ctaNote: "Learn more about our virtual AI advisory program",
  },
  {
    icon: "🖥️",
    naics: "NAICS 541511 / 541512",
    title: "Web Design & Development",
    body: "Modern, fast, conversion-focused websites built on Next.js and WordPress. Every build is mobile-first, SEO-structured, and handed off with documentation — no black boxes.",
    includes: [
      "New site builds and redesigns",
      "Landing pages and campaign pages",
      "API integrations and custom functionality",
      "Accessibility and performance optimization",
      "Ongoing maintenance retainers",
    ],
    goodFor: "Businesses that need a professional digital presence that generates leads, not just looks good.",
    ctaLabel: "See Web Design",
    ctaHref: "/services/web-design",
  },
  {
    icon: "📈",
    naics: "NAICS 541810",
    title: "Digital Marketing & Local SEO",
    body: "Data-driven search engine optimization, AI-assisted content strategy, and Google Business Profile management that puts you in front of buyers when they're ready to spend — not just browsing.",
    includes: [
      "Local SEO and Google Maps optimization",
      "AI-assisted content and blog strategy",
      "Answer Engine Optimization (AEO) for AI search",
      "Google Business Profile management",
      "Paid search and social ad management",
    ],
    goodFor: "North Dallas businesses competing for local search visibility in McKinney, Frisco, Plano, Allen, and surrounding cities.",
    ctaLabel: "See SEO Services",
    ctaHref: "/services/local-seo",
  },
  {
    icon: "🔧",
    naics: "NAICS 518210",
    title: "Managed AI Services",
    body: "Deploying AI is step one. Keeping it running, optimized, and aligned with your goals is the real work. Clarion provides ongoing management of your AI systems so they stay effective as your business evolves.",
    includes: [
      "Monthly performance monitoring and reporting",
      "Workflow tuning and optimization",
      "AI vendor management and contract oversight",
      "System health checks and issue resolution",
      "Continuous improvement cycles",
    ],
    goodFor: "Organizations that have deployed AI systems and need a trusted partner to keep them running and improving.",
    ctaLabel: "Learn More",
    ctaHref: "/contact",
  },
];

const differentiators = [
  {
    title: "Vendor-Neutral",
    body: "We don't sell platforms. We recommend what actually fits your needs and build it right.",
  },
  {
    title: "SDVOSB Certified",
    body: "Eligible for VA and federal SDVOSB set-aside contracts. Active SAM.gov registration.",
  },
  {
    title: "Real Technical Depth",
    body: "CompTIA Network+, Linux+, AWS Cloud Practitioner, software engineering. We build what we recommend.",
  },
  {
    title: "North Texas Based",
    body: "McKinney, TX. Available for on-site engagements across DFW and travel to federal sites nationwide.",
  },
];

export default function AIServicesPage() {
  return (
    <main style={{ background: "#080808", paddingTop: "92px" }}>

      {/* HERO */}
      <section
        style={{
          padding: "100px 5% 120px",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 70% at 60% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "860px", position: "relative", margin: "0 auto" }}>
          <div
            className="animate-fade-up-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid rgba(201,168,76,0.25)",
              padding: "8px 18px",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#C9A84C",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            McKinney, TX &middot; Veteran-Owned &middot; SDVOSB
          </div>

          <h1
            className="animate-fade-up-2"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(52px, 7vw, 110px)",
              fontWeight: 300,
              lineHeight: 1.0,
              color: "#F5F1E8",
              marginBottom: "28px",
              letterSpacing: "-1px",
            }}
          >
            Real AI.{" "}
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Deployed.</em>
            <br />
            Not a Pitch Deck.
          </h1>

          <p
            className="animate-fade-up-3"
            style={{
              fontSize: "18px",
              color: "#9E9A92",
              lineHeight: 1.75,
              maxWidth: "560px",
              marginBottom: "48px",
            }}
          >
            Clarion Solutions helps businesses and federal agencies cut through the noise, select the
            right tools, and build AI systems that actually work — without vendor lock-in, without
            the hype.
          </p>

          <div
            className="animate-fade-up-4"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <BookCallButton
              style={{
                background: "#C9A84C",
                color: "#080808",
                padding: "16px 36px",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E2C97E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#C9A84C";
              }}
            >
              Book a Strategy Call
            </BookCallButton>
            <a
              href="mailto:stanw@clarionsol.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "transparent",
                border: "1px solid rgba(201,168,76,0.4)",
                color: "#C9A84C",
                padding: "16px 36px",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#C9A84C";
                e.currentTarget.style.background = "rgba(201,168,76,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Request Capability Statement
            </a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section
        style={{
          padding: "100px 5%",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "24px",
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
            The Challenge
          </div>

          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#F5F1E8",
              marginBottom: "32px",
              letterSpacing: "-0.5px",
            }}
          >
            Everyone&apos;s selling AI.
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>
              Almost nobody&apos;s deploying it.
            </em>
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "#9E9A92",
              lineHeight: 1.8,
              maxWidth: "640px",
              marginBottom: "40px",
            }}
          >
            Most organizations are drowning in vendor pitches, conflicting tools, and promises that
            don&apos;t survive contact with real operations. The result:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1px",
              background: "rgba(201,168,76,0.15)",
              maxWidth: "700px",
            }}
            className="problem-grid"
          >
            {[
              "Expensive platforms nobody uses",
              "Automation that breaks the moment something changes",
              "No clear ROI — just recurring invoices",
              "Months wasted on implementation that should take weeks",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#0e0e0e",
                  padding: "28px 32px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    height: "1px",
                    background: "#C9A84C",
                    display: "inline-block",
                    flexShrink: 0,
                    marginTop: "12px",
                  }}
                />
                <span style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "17px",
              color: "#9E9A92",
              lineHeight: 1.8,
              maxWidth: "640px",
              marginTop: "40px",
            }}
          >
            Whether you&apos;re a small business owner or a federal program office, the problem is
            the same: you need someone who{" "}
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>builds</em>, not just advises.
          </p>
        </div>
      </section>

      {/* SERVICE LINES */}
      <section style={{ padding: "100px 5%", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ marginBottom: "64px" }}>
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "24px",
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
            What We Do
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#F5F1E8",
              letterSpacing: "-0.5px",
            }}
          >
            Five Ways We Put{" "}
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>AI to Work</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "1px",
            background: "rgba(201,168,76,0.15)",
          }}
          className="ai-services-grid"
        >
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="ai-service-card"
              style={{
                background: "#080808",
                padding: "48px 36px",
                display: "flex",
                flexDirection: "column",
                transition: "background 0.25s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    border: "1px solid rgba(201,168,76,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "13px",
                    letterSpacing: "3px",
                    color: "rgba(201,168,76,0.5)",
                  }}
                >
                  {card.naics}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 400,
                  color: "#F5F1E8",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                  transition: "color 0.25s",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontSize: "16px",
                  color: "#9E9A92",
                  lineHeight: 1.75,
                  marginBottom: "24px",
                }}
              >
                {card.body}
              </p>

              <div style={{ marginBottom: "24px", flexGrow: 1 }}>
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    marginBottom: "14px",
                  }}
                >
                  What&apos;s included
                </div>
                {card.includes.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "1px",
                        background: "#C9A84C",
                        display: "inline-block",
                        flexShrink: 0,
                        marginTop: "10px",
                      }}
                    />
                    <span style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  fontSize: "13px",
                  color: "#9E9A92",
                  lineHeight: 1.6,
                  padding: "16px",
                  background: "rgba(201,168,76,0.04)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  marginBottom: "24px",
                }}
              >
                <span style={{ color: "#C9A84C", fontWeight: 500 }}>Good for: </span>
                {card.goodFor}
              </div>

              <Link
                href={card.ctaHref}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  textDecoration: "none",
                  transition: "gap 0.2s",
                  marginTop: "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = "14px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = "8px";
                }}
              >
                {card.ctaLabel}
                <span style={{ fontSize: "16px", lineHeight: 1 }}>→</span>
              </Link>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* WHY CLARION */}
      <section style={{ padding: "100px 5%", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="why-clarion-grid"
        >
          <div>
            <div
              style={{
                fontSize: "13px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#C9A84C",
                marginBottom: "24px",
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
              Why Clarion
            </div>

            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(36px, 4.5vw, 64px)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "#F5F1E8",
                marginBottom: "28px",
                letterSpacing: "-0.5px",
              }}
            >
              Built by a Veteran.
              <br />
              <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Accountable Like One.</em>
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#9E9A92",
                lineHeight: 1.8,
                marginBottom: "0",
              }}
            >
              Clarion Solutions is a Service-Disabled Veteran-Owned Small Business based in McKinney,
              TX. Every engagement is run personally by the founder — not handed off to a junior team
              overseas.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "rgba(201,168,76,0.15)",
            }}
          >
            {differentiators.map((d) => (
              <div
                key={d.title}
                style={{
                  background: "#0e0e0e",
                  padding: "36px 28px",
                  transition: "background 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#161616";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0e0e0e";
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "18px",
                    letterSpacing: "2px",
                    color: "#C9A84C",
                    marginBottom: "12px",
                  }}
                >
                  {d.title}
                </div>
                <p style={{ fontSize: "15px", color: "#9E9A92", lineHeight: 1.7, margin: 0 }}>
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* FEDERAL BUYERS */}
      <section
        style={{
          padding: "100px 5%",
          background: "#161616",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 50% 80% at 90% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "820px", position: "relative", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "24px",
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
            Federal Agencies
          </div>

          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#F5F1E8",
              marginBottom: "28px",
              letterSpacing: "-0.5px",
            }}
          >
            Working With{" "}
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Federal Agencies</em>
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "#9E9A92",
              lineHeight: 1.8,
              marginBottom: "36px",
            }}
          >
            Clarion Solutions is SAM.gov registered and SDVOSB certified, with active pursuit of VA
            and civilian executive branch contracts. Our capability statement covers NAICS codes
            541511, 541512, 541519, 541613, 541810, and 518210.
          </p>

          <div style={{ marginBottom: "40px" }}>
            <p
              style={{
                fontSize: "16px",
                color: "#9E9A92",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              We specialize in helping federal program offices:
            </p>
            {[
              "Cut through AI vendor hype and select tools that fit their mission",
              "Deploy AI automation systems that reduce manual workload",
              "Build AI governance frameworks aligned with federal policy",
              "Implement digital modernization projects from strategy through delivery",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    height: "1px",
                    background: "#C9A84C",
                    display: "inline-block",
                    flexShrink: 0,
                    marginTop: "12px",
                  }}
                />
                <span style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.7 }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="mailto:stanw@clarionsol.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#C9A84C",
                color: "#080808",
                padding: "16px 36px",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E2C97E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#C9A84C";
              }}
            >
              Request Capability Statement
            </a>
          </div>

          <p
            style={{
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.5)",
              marginTop: "28px",
            }}
          >
            SDVOSB &middot; SAM.gov Registered &middot; McKinney, TX &middot; (214) 799-1868
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        style={{
          padding: "120px 5%",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative" }}>
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "28px",
            }}
          >
            Ready to Deploy AI
          </div>

          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(42px, 6vw, 90px)",
              fontWeight: 300,
              lineHeight: 1.0,
              color: "#F5F1E8",
              marginBottom: "24px",
              letterSpacing: "-1px",
            }}
          >
            Ready to Deploy AI
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>That Actually Works?</em>
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#9E9A92",
              lineHeight: 1.8,
              maxWidth: "480px",
              margin: "0 auto 48px",
            }}
          >
            Book a free 30-minute strategy call. We&apos;ll diagnose where AI can make the biggest
            impact in your operation — no pitch, no pressure.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <BookCallButton
              style={{
                background: "#C9A84C",
                color: "#080808",
                padding: "16px 40px",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E2C97E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#C9A84C";
              }}
            >
              Book a Strategy Call
            </BookCallButton>
            <a
              href="mailto:stanw@clarionsol.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "transparent",
                border: "1px solid rgba(201,168,76,0.4)",
                color: "#C9A84C",
                padding: "16px 40px",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#C9A84C";
                e.currentTarget.style.background = "rgba(201,168,76,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Request Capability Statement
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
