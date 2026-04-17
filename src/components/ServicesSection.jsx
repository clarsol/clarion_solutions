"use client";

import { useRef, useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    num: "01",
    icon: "📍",
    title: "Local SEO",
    desc: "Dominate Google search and the map pack in your local market. We build the technical foundation, optimize your content, and make sure your ideal customers find you first.",
    features: [
      "Google Business Profile optimization",
      "Local keyword targeting & content",
      "Technical SEO & schema markup",
      "Citation building & NAP consistency",
      "Monthly ranking reports",
    ],
  },
  {
    num: "02",
    icon: "🤖",
    title: "AI Automation",
    desc: "Install an AI operating system into your business. We build intelligent workflows that capture every lead, follow up automatically, and handle the communication your staff can't keep up with.",
    features: [
      "AI lead capture & qualification",
      "Automated follow-up sequences",
      "Missed call text-back",
      "Appointment automation",
      "Reputation management",
    ],
  },
  {
    num: "03",
    icon: "💻",
    title: "Web Design",
    desc: "Custom websites built in Next.js that load fast, rank well, and convert visitors into calls. No templates, no page builders — real code built to perform and built to last.",
    features: [
      "Custom Next.js development",
      "Mobile-first, performance optimized",
      "SEO architecture built in",
      "GHL & CRM integration",
      "Ongoing hosting & maintenance",
    ],
  },
  {
    num: "04",
    icon: "🎬",
    title: "Media Production",
    desc: "Professional photo and video content that makes your business look as good as it actually is. Monthly content packages built for social, Google, and your website.",
    features: [
      "Professional photography",
      "Short-form video & reels",
      "Google Business Profile content",
      "Social media content packages",
      "Brand asset creation",
    ],
  },
];

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#161616" : "#0e0e0e",
        padding: "56px 48px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
      <div
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "72px",
          color: hovered ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.25)",
          lineHeight: 1,
          marginBottom: "24px",
          transition: "color 0.3s",
        }}
      >
        {service.num}
      </div>
      <div
        style={{
          width: "48px",
          height: "48px",
          border: `1px solid ${hovered ? "#C9A84C" : "rgba(201,168,76,0.25)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
          fontSize: "20px",
          background: hovered ? "rgba(201,168,76,0.15)" : "transparent",
          transition: "border-color 0.3s, background 0.3s",
        }}
      >
        {service.icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "28px",
          fontWeight: 400,
          marginBottom: "16px",
          color: hovered ? "#E2C97E" : "#F5F1E8",
          transition: "color 0.3s",
          position: "relative",
        }}
      >
        {service.title}
      </h3>
      <p style={{ color: "#9E9A92", fontSize: "14px", lineHeight: 1.8, marginBottom: "32px", position: "relative" }}>
        {service.desc}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "32px", position: "relative" }}>
        {service.features.map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#9E9A92" }}>
            <span style={{ width: "16px", height: "1px", background: "#C9A84C", flexShrink: 0, display: "inline-block" }} />
            {f}
          </div>
        ))}
      </div>
      <a
        href="#contact"
        style={{
          display: "flex",
          alignItems: "center",
          gap: hovered ? "16px" : "10px",
          fontSize: "12px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#C9A84C",
          textDecoration: "none",
          transition: "gap 0.2s",
          position: "relative",
        }}
      >
        Get Started <span>→</span>
      </a>
    </div>
  );
}

export default function ServicesSection() {
  const eyebrowRef = useReveal();
  const titleRef = useReveal();
  const descRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="services" className="section-pad" style={{ background: "#0e0e0e" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px", flexWrap: "wrap", gap: "40px" }}>
        <div>
          <div ref={eyebrowRef} className="reveal" style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            What We Do
          </div>
          <h2 ref={titleRef} className="reveal reveal-delay-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 4.5vw, 68px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#F5F1E8" }}>
            Four Services.
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>One System.</em>
          </h2>
        </div>
        <p ref={descRef} className="reveal reveal-delay-2" style={{ maxWidth: "360px", color: "#9E9A92", fontSize: "15px", lineHeight: 1.8 }}>
          Every service we offer is designed to work together — driving traffic, capturing leads, converting visitors, and building your brand.
        </p>
      </div>

      <div
        ref={gridRef}
        className="reveal services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1px",
          background: "rgba(201,168,76,0.25)",
        }}
      >
        {services.map((s) => (
          <ServiceCard key={s.num} service={s} />
        ))}
      </div>

    </section>
  );
}
