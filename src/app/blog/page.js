import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookCallButton from "@/components/BookCallButton";
import Link from "next/link";

const SITE_URL = "https://clarionsol.com";

export const metadata = {
  title: "Local Business Growth Tips | Clarion Solutions Blog",
  description:
    "SEO tips, AI automation insights, and business growth strategies for North Dallas small businesses — from the Clarion Solutions team in McKinney, TX.",
  alternates: { canonical: `${SITE_URL}/blog` },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Local Business Growth Tips | Clarion Solutions Blog",
    description:
      "SEO tips, AI automation insights, and business growth strategies for North Dallas small businesses — from the Clarion Solutions team in McKinney, TX.",
    url: `${SITE_URL}/blog`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Business Growth Tips | Clarion Solutions Blog",
    description:
      "SEO tips, AI automation insights, and business growth strategies for North Dallas small businesses — from the Clarion Solutions team in McKinney, TX.",
  },
};

const upcomingTopics = [
  { label: "Local SEO", topic: "How long does local SEO actually take to work?" },
  { label: "AI Automation", topic: "What missed call text-back is — and why every service business needs it" },
  { label: "Google Business Profile", topic: "The 5 GBP mistakes that are suppressing your local ranking" },
  { label: "Web Design", topic: "Why your website speed is costing you Google rankings" },
  { label: "Local SEO", topic: "Local SEO for contractors: what works in McKinney, Frisco, and Allen" },
  { label: "AI Automation", topic: "How to respond to leads in under 5 minutes without hiring anyone" },
];

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "#080808", paddingTop: "72px" }}>

        {/* Hero */}
        <section style={{ padding: "80px 5% 100px", borderBottom: "1px solid rgba(201,168,76,0.15)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: "800px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", letterSpacing: "1px", color: "#9E9A92", marginBottom: "48px" }}>
              <Link href="/" style={{ color: "#9E9A92", textDecoration: "none" }} className="hover-gold">Home</Link>
              <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
              <span style={{ color: "#C9A84C" }}>Blog</span>
            </div>
            <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
              Insights &amp; Resources
            </div>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05, color: "#F5F1E8", marginBottom: "24px", letterSpacing: "-0.5px" }}>
              Local Business
              <br />
              <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Growth Tips.</em>
            </h1>
            <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.7, maxWidth: "560px" }}>
              Practical SEO, AI automation, and business growth strategies for North Dallas small businesses — written by the Clarion Solutions team.
            </p>
          </div>
        </section>

        {/* Coming Soon */}
        <section style={{ padding: "100px 5%" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>

            {/* Status banner */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "24px 32px", border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.04)", marginBottom: "72px" }}>
              <span style={{ width: "8px", height: "8px", background: "#C9A84C", borderRadius: "50%", display: "inline-block", flexShrink: 0 }} />
              <p style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.6 }}>
                <span style={{ color: "#F5F1E8" }}>First posts launching soon.</span>{" "}
                Drop your email and we&apos;ll notify you when new content goes live — no spam, just the posts.
              </p>
              <BookCallButton
                className="btn-primary-link"
                style={{ flexShrink: 0, padding: "12px 24px", fontSize: "11px" }}
              >
                Get Notified
              </BookCallButton>
            </div>

            {/* Upcoming topics */}
            <div style={{ marginBottom: "48px" }}>
              <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "32px", display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
                Coming Up
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(201,168,76,0.15)" }}>
                {upcomingTopics.map((item, i) => (
                  <div
                    key={i}
                    style={{ background: "#080808", padding: "28px 32px", display: "flex", alignItems: "center", gap: "24px" }}
                    className="includes-card"
                  >
                    <span style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", flexShrink: 0, minWidth: "96px" }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: "15px", color: "#9E9A92", lineHeight: 1.5 }}>
                      {item.topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "100px 5%", background: "#0e0e0e", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
            Don&apos;t Wait for the Blog
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1, marginBottom: "24px" }}>
            Get a Free Audit
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Right Now.</em>
          </h2>
          <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 40px" }}>
            Book a free 30-minute strategy call. We&apos;ll look at your rankings, GBP, and competitors — and tell you exactly what&apos;s holding you back.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <BookCallButton className="btn-primary-link">Book a Free Call</BookCallButton>
            <Link href="/services" className="btn-ghost-link">View Our Services</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
