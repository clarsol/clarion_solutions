import BookCallButton from "@/components/BookCallButton";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes heroGlowPulse {
          from { opacity: 0.3; transform: scale(1); }
          to   { opacity: 0.9; transform: scale(1.12); }
        }
        @keyframes heroGlowDrift {
          from { opacity: 0.2; transform: translate(-8px, 6px) scale(0.95); }
          to   { opacity: 0.7; transform: translate(8px, -6px) scale(1.08); }
        }
        .hero-quote-btn:hover {
          border-color: #C9A84C !important;
          background: rgba(201,168,76,0.08) !important;
        }
      `}</style>

      {/* Static background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Primary glow layer */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "520px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.6) 0%, rgba(201,168,76,0.2) 40%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animationName: "heroGlowPulse",
            animationDuration: "3s",
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
            animationDirection: "alternate",
          }}
        />
      </div>

      {/* Secondary glow layer — drifts for depth */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.4) 0%, rgba(201,168,76,0.12) 50%, transparent 75%)",
            borderRadius: "50%",
            filter: "blur(40px)",
            animationName: "heroGlowDrift",
            animationDuration: "3s",
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
            animationDirection: "alternate",
            animationDelay: "0.4s",
          }}
        />
      </div>

      {/* Tag */}
      <div
        className="animate-fade-up-1"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          border: "1px solid rgba(201,168,76,0.25)",
          padding: "8px 18px",
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#C9A84C",
          marginBottom: "32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          className="animate-pulse-dot"
          style={{ width: "6px", height: "6px", background: "#C9A84C", borderRadius: "50%", display: "inline-block" }}
        />
        McKinney, TX &nbsp;·&nbsp; Veteran-Owned &nbsp;·&nbsp; North Dallas
      </div>

      {/* Headline */}
      <h1
        className="animate-fade-up-2"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(52px, 7vw, 110px)",
          fontWeight: 300,
          lineHeight: 1.0,
          letterSpacing: "-1px",
          marginBottom: "16px",
          color: "#F5F1E8",
          position: "relative",
          zIndex: 1,
        }}
      >
        Local SEO &amp;
        <br />
        <em style={{ fontStyle: "italic", color: "#C9A84C" }}>AI Automation,</em>
        <br />
        <strong style={{ fontWeight: 600 }}>McKinney, TX.</strong>
      </h1>

      {/* Subtext */}
      <p
        className="animate-fade-up-3"
        style={{
          fontSize: "clamp(14px, 1.4vw, 17px)",
          color: "#9E9A92",
          maxWidth: "520px",
          lineHeight: 1.8,
          marginBottom: "48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        Clarion Solutions builds{" "}
        <strong style={{ color: "#F5F1E8", fontWeight: 400 }}>AI-powered growth systems</strong>{" "}
        for McKinney and North Dallas businesses, combining local SEO, intelligent automation, web design, and media production under one roof.
      </p>

      {/* Actions */}
      <div
        className="animate-fade-up-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        <BookCallButton className="btn-primary-link">
          Book a Strategy Call
        </BookCallButton>
        <Link
          href="/get-a-quote"
          className="hero-quote-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 28px",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase",
            background: "transparent",
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,0.4)",
            textDecoration: "none",
            transition: "border-color 0.2s, background 0.2s",
          }}
        >
          Get a Quote
        </Link>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in-scroll"
        style={{ position: "absolute", bottom: "40px", left: "5%", display: "flex", alignItems: "center", gap: "12px" }}
      >
        <div style={{ width: "40px", height: "1px", background: "rgba(201,168,76,0.25)" }} />
        <span style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#9E9A92" }}>
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
