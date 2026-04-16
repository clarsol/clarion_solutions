"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.25)" : "1px solid transparent",
          background: scrolled ? "rgba(8,8,8,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.4s",
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              border: "1px solid #C9A84C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-bebas)",
              fontSize: "18px",
              color: "#C9A84C",
              letterSpacing: "1px",
            }}
          >
            CS
          </div>
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "13px",
              fontWeight: 500,
              color: "#F5F1E8",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Clarion Solutions
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "40px" }}
          className="hidden md:flex"
        >
          {["about", "services", "products", "contact"].map((href) => (
            <Link
              key={href}
              href={`#${href}`}
              style={{
                textDecoration: "none",
                color: "#9E9A92",
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.target.style.color = "#9E9A92")}
            >
              {href === "products" ? "Pricing" : href.charAt(0).toUpperCase() + href.slice(1)}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden md:inline-block"
          style={{
            background: "transparent",
            border: "1px solid #C9A84C",
            color: "#C9A84C",
            padding: "10px 24px",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "12px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            transition: "all 0.25s",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#080808"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C"; }}
        >
          Book a Call
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "1px",
                background: "#F5F1E8",
                transition: "all 0.3s",
                transformOrigin: "center",
                transform:
                  menuOpen
                    ? i === 0 ? "translateY(6px) rotate(45deg)" : i === 2 ? "translateY(-6px) rotate(-45deg)" : "scaleX(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "rgba(8,8,8,0.98)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
          className="md:hidden"
        >
          {[
            { href: "#about", label: "About" },
            { href: "#services", label: "Services" },
            { href: "#products", label: "Pricing" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "36px",
                fontWeight: 300,
                color: "#F5F1E8",
                textDecoration: "none",
                letterSpacing: "2px",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              border: "1px solid #C9A84C",
              color: "#C9A84C",
              padding: "14px 36px",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              marginTop: "16px",
            }}
          >
            Book a Call
          </Link>
        </div>
      )}
    </>
  );
}
