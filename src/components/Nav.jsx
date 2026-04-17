"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceList } from "@/lib/serviceData";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const base = pathname.startsWith("/services") ? "/" : "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!servicesOpen) return;
    function handleOutsideClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [servicesOpen]);

  function closeAll() {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }

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
          onClick={closeAll}
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
          <Link
            href={`${base}#about`}
            style={{ textDecoration: "none", color: "#9E9A92", fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.target.style.color = "#C9A84C")}
            onMouseLeave={(e) => (e.target.style.color = "#9E9A92")}
          >
            About
          </Link>

          {/* Services click dropdown */}
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <button
              onClick={() => setServicesOpen((o) => !o)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: servicesOpen ? "#C9A84C" : "#9E9A92",
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                transition: "color 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: 0,
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Services
              <span
                style={{
                  fontSize: "8px",
                  transform: servicesOpen ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                  display: "inline-block",
                }}
              >
                ▼
              </span>
            </button>

            {servicesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 12px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(8,8,8,0.98)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  backdropFilter: "blur(12px)",
                  padding: "8px 0",
                  minWidth: "200px",
                  zIndex: 200,
                }}
              >
                {serviceList.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setServicesOpen(false)}
                    style={{
                      display: "block",
                      padding: "12px 20px",
                      fontSize: "12px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "#9E9A92",
                      textDecoration: "none",
                      transition: "color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C9A84C";
                      e.currentTarget.style.background = "rgba(201,168,76,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#9E9A92";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {s.name}
                  </Link>
                ))}
                <div style={{ height: "1px", background: "rgba(201,168,76,0.15)", margin: "8px 0" }} />
                <Link
                  href={`${base}#services`}
                  onClick={() => setServicesOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 20px",
                    fontSize: "12px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.06)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                >
                  View All →
                </Link>
              </div>
            )}
          </div>

          <Link
            href={`${base}#products`}
            style={{ textDecoration: "none", color: "#9E9A92", fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.target.style.color = "#C9A84C")}
            onMouseLeave={(e) => (e.target.style.color = "#9E9A92")}
          >
            Pricing
          </Link>

          <Link
            href={`${base}#contact`}
            style={{ textDecoration: "none", color: "#9E9A92", fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.target.style.color = "#C9A84C")}
            onMouseLeave={(e) => (e.target.style.color = "#9E9A92")}
          >
            Contact
          </Link>
        </div>

        <Link
          href={`${base}#contact`}
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
          onClick={() => setMenuOpen((o) => !o)}
          style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "4px", background: "none", border: "none", cursor: "pointer" }}
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
            gap: "32px",
            overflowY: "auto",
            padding: "80px 5% 40px",
          }}
          className="md:hidden"
        >
          {[
            { href: `${base}#about`, label: "About" },
            { href: `${base}#products`, label: "Pricing" },
            { href: `${base}#contact`, label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              onClick={closeAll}
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

          {/* Mobile services accordion */}
          <div style={{ width: "100%", maxWidth: "320px" }}>
            <button
              onClick={() => setMobileServicesOpen((o) => !o)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                fontFamily: "var(--font-cormorant)",
                fontSize: "36px",
                fontWeight: 300,
                color: mobileServicesOpen ? "#C9A84C" : "#F5F1E8",
                letterSpacing: "2px",
                transition: "color 0.2s",
              }}
            >
              Services
              <span
                style={{
                  fontSize: "18px",
                  transform: mobileServicesOpen ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                  display: "inline-block",
                  lineHeight: 1,
                  marginTop: "4px",
                }}
              >
                ▾
              </span>
            </button>

            {mobileServicesOpen && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  marginTop: "16px",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                {serviceList.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={closeAll}
                    style={{
                      fontSize: "14px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#9E9A92",
                      textDecoration: "none",
                      padding: "14px 20px",
                      borderBottom: "1px solid rgba(201,168,76,0.1)",
                      display: "block",
                    }}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href={`${base}#contact`}
            onClick={closeAll}
            style={{
              border: "1px solid #C9A84C",
              color: "#C9A84C",
              padding: "14px 36px",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              marginTop: "8px",
            }}
          >
            Book a Call
          </Link>
        </div>
      )}
    </>
  );
}
