import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookCallButton from "@/components/BookCallButton";
import { posts, getPost } from "@/lib/blogData";

const SITE_URL = "https://clarionsol.com";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Clarion Solutions`,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: "Clarion Solutions",
      locale: "en_US",
      type: "article",
      publishedTime: post.dateISO,
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#business`,
      name: "Clarion Solutions",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#business`,
      name: "Clarion Solutions",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />
      <main style={{ background: "#080808", paddingTop: "72px" }}>

        {/* Header */}
        <section style={{ padding: "72px 5% 64px", borderBottom: "1px solid rgba(201,168,76,0.15)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: "760px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", letterSpacing: "1px", color: "#9E9A92", marginBottom: "40px" }}>
              <Link href="/" style={{ color: "#9E9A92", textDecoration: "none" }} className="hover-gold">Home</Link>
              <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
              <Link href="/blog" style={{ color: "#9E9A92", textDecoration: "none" }} className="hover-gold">Blog</Link>
              <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
              <span style={{ color: "#C9A84C" }}>{post.category}</span>
            </div>
            <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
              {post.category}
            </div>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 300, lineHeight: 1.05, color: "#F5F1E8", marginBottom: "28px", letterSpacing: "-0.5px" }}>
              {post.title}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#9E9A92" }}>
              <span>{post.date}</span>
              <span style={{ color: "rgba(201,168,76,0.3)" }}>·</span>
              <span>{post.readTime}</span>
              <span style={{ color: "rgba(201,168,76,0.3)" }}>·</span>
              <span>Clarion Solutions</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section style={{ padding: "72px 5% 80px" }}>
          <div style={{ maxWidth: "680px" }}>
            {post.content.map((block, i) => {
              if (block.type === "h2") return (
                <h2
                  key={i}
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(22px, 2.8vw, 34px)",
                    fontWeight: 300,
                    color: "#F5F1E8",
                    lineHeight: 1.2,
                    marginTop: "56px",
                    marginBottom: "16px",
                    letterSpacing: "-0.2px",
                  }}
                >
                  {block.text}
                </h2>
              );
              if (block.type === "p") return (
                <p
                  key={i}
                  style={{
                    fontSize: "17px",
                    color: "#9E9A92",
                    lineHeight: 1.85,
                    marginBottom: "24px",
                  }}
                >
                  {block.text}
                </p>
              );
              return null;
            })}
          </div>
        </section>

        {/* Author / CTA */}
        <section style={{ padding: "80px 5%", background: "#0e0e0e", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", paddingBottom: "32px", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
              <div style={{ width: "44px", height: "44px", border: "1px solid #C9A84C", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-bebas)", fontSize: "18px", color: "#C9A84C", flexShrink: 0 }}>
                CS
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 500, color: "#F5F1E8", marginBottom: "4px" }}>Clarion Solutions</div>
                <div style={{ fontSize: "13px", color: "#9E9A92", lineHeight: 1.6 }}>
                  Veteran-owned AI and digital growth agency in McKinney, TX. We work with North Dallas businesses on local SEO, AI automation, web design, and media production.
                </div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>
                Want to talk through your situation?
              </div>
              <p style={{ fontSize: "15px", color: "#9E9A92", lineHeight: 1.7, marginBottom: "24px" }}>
                Book a free 30-minute strategy call. We'll look at your rankings, your GBP, and your competition — and tell you exactly what's holding you back.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <BookCallButton className="btn-primary-link">Book a Free Call</BookCallButton>
                <Link href="/blog" className="btn-ghost-link">More Articles</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
