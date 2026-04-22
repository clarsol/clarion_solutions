import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookCallButton from "@/components/BookCallButton";
import Link from "next/link";
import { posts } from "@/lib/blogData";

const SITE_URL = "https://clarionsol.com";

export const metadata = {
  title: "Local Business Growth Tips | Clarion Solutions Blog",
  description:
    "SEO tips, AI automation insights, and business growth strategies for North Dallas small businesses — from the Clarion Solutions team in McKinney, TX.",
  alternates: { canonical: `${SITE_URL}/blog` },
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

        {/* Post list */}
        <section style={{ padding: "80px 5% 120px" }}>
          <div style={{ maxWidth: "860px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(201,168,76,0.15)" }}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <article
                    className="includes-card"
                    style={{ background: "#080808", padding: "44px 40px", cursor: "pointer" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                      <span style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C" }}>
                        {post.category}
                      </span>
                      <span style={{ width: "1px", height: "12px", background: "rgba(201,168,76,0.25)", display: "inline-block" }} />
                      <span style={{ fontSize: "11px", letterSpacing: "1px", color: "#9E9A92" }}>{post.date}</span>
                      <span style={{ width: "1px", height: "12px", background: "rgba(201,168,76,0.25)", display: "inline-block" }} />
                      <span style={{ fontSize: "11px", letterSpacing: "1px", color: "#9E9A92" }}>{post.readTime}</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(22px, 2.8vw, 34px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.2, marginBottom: "12px", letterSpacing: "-0.2px" }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.75, maxWidth: "600px", marginBottom: "20px" }}>
                      {post.excerpt}
                    </p>
                    <span style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C" }}>
                      Read Article →
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "100px 5%", background: "#0e0e0e", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
            Ready to Talk?
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
