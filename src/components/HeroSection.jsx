"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import BookCallButton from "@/components/BookCallButton";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
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
      <Script src="https://cdn.tailwindcss.com" strategy="afterInteractive" />

      <style>{`
        .hero-quote-btn:hover {
          border-color: #C9A84C !important;
          background: rgba(201,168,76,0.08) !important;
        }
        .bg-gradient-conic {
          background-image: conic-gradient(var(--conic-position, at center top), var(--tw-gradient-stops));
        }
      `}</style>

      {/* Static background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 65%)",
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

      {/* Lamp assembly */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-[52vh] flex-col items-center justify-center">
        <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center">

          {/* Left conic beam */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible bg-gradient-conic from-[#C9A84C] via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
          />

          {/* Right conic beam */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute inset-auto left-1/2 h-56 overflow-visible bg-gradient-conic from-transparent via-transparent to-[#C9A84C] [--conic-position:from_290deg_at_center_top]"
          />

          {/* Background mask */}
          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#080808] blur-2xl" />

          {/* Center orb — pulsing loop, no intro trigger needed */}
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-auto z-50 h-36 w-64 -translate-y-1/2 rounded-full bg-[#C9A84C] opacity-50 blur-3xl"
          />

          {/* Glow bar */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full bg-[#C9A84C] blur-2xl"
          />

          {/* Horizontal line */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-28 bg-[#C9A84C]"
          />

          {/* Bottom mask — clips beam bases */}
          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#080808]" />
        </div>
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
