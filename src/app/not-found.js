import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page Not Found | Clarion Solutions",
  robots: { index: false, follow: true },
};

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <Nav />
      <main style={{ background: "#080808", paddingTop: "92px" }}>
        <section style={{ padding: "120px 5% 140px", position: "relative", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ maxWidth: "760px", position: "relative" }}>
            <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
              404
            </div>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(44px, 6vw, 84px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.05, letterSpacing: "-0.5px", marginBottom: "24px" }}>
              This page took a
              <br />
              <em style={{ fontStyle: "italic", color: "#C9A84C" }}>wrong turn.</em>
            </h1>
            <p style={{ fontSize: "18px", color: "#9E9A92", lineHeight: 1.8, marginBottom: "40px", maxWidth: "560px" }}>
              Try our <Link href="/services" style={{ color: "#C9A84C" }}>Services</Link> to see what we do, or <Link href="/contact" style={{ color: "#C9A84C" }}>Contact</Link> us and we&apos;ll point you in the right direction.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "40px" }}>
              {LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    padding: "12px 24px",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    border: "1px solid rgba(201,168,76,0.4)",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link href="/" className="btn-primary-link">
              Back to homepage →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
