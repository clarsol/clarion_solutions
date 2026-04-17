import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0e0e0e",
        borderTop: "1px solid rgba(201,168,76,0.25)",
        padding: "80px 5% 40px",
      }}
    >
      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "64px",
          marginBottom: "64px",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                border: "1px solid #C9A84C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-bebas)",
                fontSize: "20px",
                color: "#C9A84C",
              }}
            >
              CS
            </div>
            <span style={{ fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", color: "#F5F1E8", fontWeight: 500 }}>
              Clarion Solutions
            </span>
          </Link>
          <p style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "280px" }}>
            AI-powered business growth for North Dallas companies. Veteran-owned and operated out of McKinney, TX.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a href="tel:+12147991868" className="hover-gold" style={{ fontSize: "13px", color: "#9E9A92", textDecoration: "none" }}>
              (214) 799-1868
            </a>
            <a href="mailto:clarionsolut@gmail.com" className="hover-gold" style={{ fontSize: "13px", color: "#9E9A92", textDecoration: "none" }}>
              clarionsolut@gmail.com
            </a>
            <span style={{ fontSize: "13px", color: "#9E9A92" }}>McKinney, TX 75070</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px", fontWeight: 400 }}>
            Services
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {["Local SEO", "AI Automation", "Web Design", "Media Production", "CRM Systems"].map((s) => (
              <Link key={s} href="#services" className="hover-white" style={{ fontSize: "14px", color: "#9E9A92", textDecoration: "none" }}>
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px", fontWeight: 400 }}>
            Company
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "About", href: "#about" },
              { label: "Why Clarion", href: "#why" },
              { label: "Pricing", href: "#products" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="hover-white" style={{ fontSize: "14px", color: "#9E9A92", textDecoration: "none" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px", fontWeight: 400 }}>
            Legal
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Cookie Policy", href: "/cookie-policy" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="hover-white" style={{ fontSize: "14px", color: "#9E9A92", textDecoration: "none" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(201,168,76,0.25)",
          paddingTop: "32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ fontSize: "13px", color: "#9E9A92" }}>
          © {year} <span style={{ color: "#C9A84C" }}>Clarion Solutions</span>. All rights reserved.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#9E9A92" }}>
          <span style={{ color: "#C9A84C", fontSize: "10px" }}>✦</span>
          Veteran-Owned · McKinney, TX
        </div>
      </div>
    </footer>
  );
}
