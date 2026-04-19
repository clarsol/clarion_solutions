import BookCallButton from "@/components/BookCallButton";

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Backgrounds */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)",
        }}
      />
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
          width: "fit-content",
        }}
      >
        <span
          className="animate-pulse-dot"
          style={{ width: "6px", height: "6px", background: "#C9A84C", borderRadius: "50%", display: "inline-block" }}
        />
        Veteran-Owned &nbsp;·&nbsp; McKinney, TX &nbsp;·&nbsp; North Dallas
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
        }}
      >
        Local SEO &amp;
        <br />
        <em style={{ fontStyle: "italic", color: "#C9A84C" }}>AI Automation,</em>
        <br />
        <strong style={{ fontWeight: 600 }}>North Dallas.</strong>
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
        }}
      >
        Clarion Solutions builds{" "}
        <strong style={{ color: "#F5F1E8", fontWeight: 400 }}>AI-powered growth systems</strong>{" "}
        for North Dallas businesses — combining local SEO, intelligent automation, web design, and media production under one roof.
      </p>

      {/* Actions */}
      <div className="animate-fade-up-4" style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
        <BookCallButton className="btn-primary-link">
          Book a Strategy Call
        </BookCallButton>
        <a href="#services" className="btn-ghost-link">
          See What We Do
        </a>
      </div>

      {/* Stats — desktop only */}
      <div
        className="animate-fade-in-stats hero-stats-wrap"
        style={{
          position: "absolute",
          right: "5%",
          bottom: "10%",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {[
          { num: "100%", label: "Transparent Process" },
          { num: "24/7", label: "AI Systems Running" },
        ].map(({ num, label }) => (
          <div key={label} style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-bebas)", fontSize: "48px", color: "#C9A84C", lineHeight: 1, letterSpacing: "2px" }}>{num}</div>
            <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#9E9A92", marginTop: "4px" }}>{label}</div>
          </div>
        ))}
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
