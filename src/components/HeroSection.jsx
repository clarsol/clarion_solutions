"use client";

import { motion } from "framer-motion";
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
      <style>{`
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

      {/* Lamp: left beam */}
      <motion.div
        initial={{ opacity: 0, width: "6rem" }}
        animate={{ opacity: 0.65, width: "30rem" }}
        transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          right: "50%",
          height: "52vh",
          background:
            "linear-gradient(to bottom right, rgba(201,168,76,0.55) 0%, transparent 65%)",
          transformOrigin: "top right",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Lamp: right beam */}
      <motion.div
        initial={{ opacity: 0, width: "6rem" }}
        animate={{ opacity: 0.65, width: "30rem" }}
        transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          height: "52vh",
          background:
            "linear-gradient(to bottom left, rgba(201,168,76,0.55) 0%, transparent 65%)",
          transformOrigin: "top left",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Lamp: top glow bar */}
      <motion.div
        initial={{ opacity: 0, width: "4rem" }}
        animate={{ opacity: 1, width: "22rem" }}
        transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "1px",
          left: "50%",
          transform: "translateX(-50%)",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          boxShadow: "0 0 14px 4px rgba(201,168,76,0.65)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Lamp: central pulsing orb — starts after intro, loops forever */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 0.95, 0.6, 0.95, 0.6],
          scale:   [0.8, 1.1,  0.9,  1.1,  0.9],
        }}
        transition={{
          delay: 1.1,
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "320px",
          height: "220px",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.9) 0%, rgba(201,168,76,0.35) 45%, transparent 70%)",
          filter: "blur(28px)",
          pointerEvents: "none",
          zIndex: 0,
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
