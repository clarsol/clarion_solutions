"use client";

import { useReveal } from "@/hooks/useReveal";

const capabilities = [
  {
    category: "Digital Marketing",
    items: ["Search Engine Optimization", "Google Ads / SEM", "Social Media & Paid Ads"],
  },
  {
    category: "AI & Automation",
    items: ["Missed Call Recovery", "Review Automation", "Re-Engagement Campaigns", "Conversation AI", "Custom Workflows"],
  },
  {
    category: "Creative & Web",
    items: ["Website Design & Development", "Hosting & Maintenance", "Graphic Design & Branding"],
  },
  {
    category: "Media",
    items: ["Video Production & Drone", "Short-Form & Social Content", "GBP & Website Content", "Media Planning"],
  },
];

const delayClasses = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function CapabilitiesSection() {
  const eyebrowRef = useReveal();
  const titleRef = useReveal();
  const aeoRef = useReveal();
  const c0 = useReveal();
  const c1 = useReveal();
  const c2 = useReveal();
  const c3 = useReveal();
  const colRefs = [c0, c1, c2, c3];

  return (
    <section id="capabilities" className="section-pad" style={{ background: "#080808", paddingBottom: "80px" }}>
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
        Our Capabilities
      </div>

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
          marginBottom: "64px",
        }}
      >
        Everything You Need.
        <br />
        <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Under One Roof.</em>
      </h2>

      {/* AEO Callout Strip */}
      <div
        ref={aeoRef}
        className="reveal reveal-delay-2 aeo-strip"
        style={{
          border: "1px solid rgba(201,168,76,0.4)",
          padding: "28px 36px",
          marginBottom: "16px",
          display: "flex",
          alignItems: "flex-start",
          gap: "20px",
          background: "rgba(201,168,76,0.04)",
        }}
      >
        <div
          style={{
            flexShrink: 0,
            width: "48px",
            height: "48px",
            border: "1px solid #C9A84C",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-bebas)",
            fontSize: "18px",
            letterSpacing: "1px",
            color: "#C9A84C",
          }}
        >
          AI
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "24px",
                fontWeight: 600,
                color: "#F5F1E8",
              }}
            >
              Answer Engine Optimization
            </span>
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
              NEW
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              color: "#9E9A92",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            More and more customers are using AI to search. Google&apos;s AI Overview is just the beginning. We get you cited where they&apos;re searching.
          </p>
        </div>
      </div>

      {/* Four-column capabilities grid */}
      <div className="caps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {capabilities.map((col, i) => (
          <div
            key={col.category}
            ref={colRefs[i]}
            className={`reveal ${delayClasses[i]}`}
            style={{
              padding: "56px 40px",
              borderRight: i < capabilities.length - 1 ? "1px solid rgba(201,168,76,0.15)" : "none",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "18px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#C9A84C",
                marginBottom: "32px",
                paddingBottom: "16px",
              }}
            >
              {col.category}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {col.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "16px",
                    color: "#9E9A92",
                    lineHeight: 1.8,
                    paddingBottom: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      background: "rgba(201,168,76,0.5)",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
