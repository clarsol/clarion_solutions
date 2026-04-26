"use client";

import { useReveal } from "@/hooks/useReveal";

const values = [
  { title: "Veteran-Owned", text: "Discipline, accountability, and mission-first thinking in everything we deliver." },
  { title: "Local First", text: "We know North Dallas. We live here, work here, and grow businesses here." },
  { title: "No Contracts", text: "We earn your business every month. No lock-ins on core services." },
  { title: "Full Stack", text: "SEO, AI, web, and media, all under one roof so nothing falls between the cracks." },
];

export default function AboutSection() {
  const eyebrowRef = useReveal();
  const imageRef = useReveal();
  const contentRef = useReveal();

  return (
    <section id="about" className="section-pad">
      <div
        ref={eyebrowRef}
        className="reveal"
        style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}
      >
        <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
        Who We Are
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          marginTop: "80px",
        }}
        className="about-grid"
      >
        {/* Image frame */}
        <div ref={imageRef} className="reveal about-image" style={{ position: "relative" }}>
          <div
            style={{
              background: "#C9A84C",
              color: "#080808",
              padding: "16px 20px",
              fontFamily: "var(--font-bebas)",
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              position: "absolute",
              top: "24px",
              left: "-24px",
              zIndex: 10,
            }}
          >
            Since 2023
          </div>
          <div
            style={{
              width: "100%",
              aspectRatio: "4/5",
              background: "linear-gradient(160deg, #161616 0%, #111111 50%, #0e0e0e 100%)",
              border: "1px solid rgba(201,168,76,0.25)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Subtle radial glow behind monogram */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
            }} />
            {/* Fine grid */}
            <div style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }} />
            {/* Monogram */}
            <div style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}>
              <div style={{
                width: "120px",
                height: "120px",
                border: "1px solid rgba(201,168,76,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}>
                {/* Corner accents */}
                <div style={{ position: "absolute", top: "-1px", left: "-1px", width: "12px", height: "12px", borderTop: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
                <div style={{ position: "absolute", top: "-1px", right: "-1px", width: "12px", height: "12px", borderTop: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />
                <div style={{ position: "absolute", bottom: "-1px", left: "-1px", width: "12px", height: "12px", borderBottom: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
                <div style={{ position: "absolute", bottom: "-1px", right: "-1px", width: "12px", height: "12px", borderBottom: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />
                <span style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "52px",
                  color: "#C9A84C",
                  letterSpacing: "4px",
                  lineHeight: 1,
                }}>CS</span>
              </div>
              <span style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "10px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.5)",
              }}>Clarion Solutions</span>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              width: "60%",
              height: "60%",
              border: "1px solid rgba(201,168,76,0.25)",
              zIndex: -1,
            }}
          />
        </div>

        {/* Content */}
        <div ref={contentRef} className="reveal reveal-delay-2" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 4.5vw, 68px)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
              color: "#F5F1E8",
            }}
          >
            Built for the
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Businesses</em>
            <br />
            That Build Dallas.
          </h2>
          <p style={{ color: "#9E9A92", lineHeight: 1.9, fontSize: "15px" }}>
            Clarion Solutions is a{" "}
            <strong style={{ color: "#F5F1E8", fontWeight: 400 }}>veteran-owned AI and digital growth agency</strong>{" "}
            based in McKinney, Texas. We serve local businesses across the North Dallas corridor, from Frisco to Anna, that are ready to compete at a higher level.
          </p>
          <p style={{ color: "#9E9A92", lineHeight: 1.9, fontSize: "15px" }}>
            We build{" "}
            <strong style={{ color: "#F5F1E8", fontWeight: 400 }}>complete growth systems</strong>{" "}
            for your business: AI that captures leads, SEO that drives traffic, websites that convert, and content that builds your brand. Everything designed to work together, managed by one team.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "16px" }}>
            {values.map(({ title, text }) => (
              <div
                key={title}
                style={{
                  border: "1px solid rgba(201,168,76,0.25)",
                  padding: "20px",
                  background: "rgba(201,168,76,0.15)",
                }}
              >
                <div style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>{title}</div>
                <div style={{ fontSize: "13px", color: "#9E9A92", lineHeight: 1.6 }}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
