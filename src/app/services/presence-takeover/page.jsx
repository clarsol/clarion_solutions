import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookCallButton from "@/components/BookCallButton";

const SITE_URL = "https://www.clarionsol.com";

export const metadata = {
  title: "Ads: Complete + Paid Ads | Clarion Solutions | McKinney, TX",
  description:
    "Everything in Complete plus TikTok, daily community management, and paid ads management on two platforms you choose: Meta, TikTok, Google, or ChatGPT. $5,500/mo, $1,200 ad spend included.",
  alternates: { canonical: `${SITE_URL}/services/presence-takeover` },
  openGraph: {
    title: "Ads: Complete + Paid Ads | Clarion Solutions",
    description:
      "Everything in Complete plus TikTok, daily community management, and paid ads on two platforms you choose. One team, one contract.",
    url: `${SITE_URL}/services/presence-takeover`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Ads: Complete + Paid Ads | Clarion Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ads: Complete + Paid Ads | Clarion Solutions",
    description: "Everything in Complete plus paid ads on two platforms you choose. $5,500/mo, $1,200 ad spend included.",
  },
};

const INCLUDES = [
  "Everything in Complete: AI automation, local SEO, a monthly on-site media shoot, and managed posting on Instagram + Facebook",
  "TikTok",
  "Daily community management",
  "Paid ads management on any two platforms you choose",
  "Platforms: Meta, TikTok, Google, and ChatGPT",
  "We recommend the two platforms that fit your business",
  "$1,200/mo ad spend included, split across your two platforms",
  "More than two platforms quoted per client",
];

const GOLD = "#C9A84C";
const GOLD_DIM = "rgba(201,168,76,0.15)";
const TEXT_PRIMARY = "#F5F1E8";
const TEXT_MUTED = "#9E9A92";
const BG_MAIN = "#080808";
const BG_ALT = "#0e0e0e";

export default function AdsPage() {
  return (
    <>
      <Nav />
      <main style={{ background: BG_MAIN, paddingTop: "92px" }}>

        {/* HERO */}
        <section
          style={{
            padding: "100px 5% 120px",
            borderBottom: `1px solid ${GOLD_DIM}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", letterSpacing: "1px", color: TEXT_MUTED, marginBottom: "48px" }}>
              <Link href="/" style={{ color: TEXT_MUTED, textDecoration: "none" }} className="hover-gold">Home</Link>
              <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
              <Link href="/services" style={{ color: TEXT_MUTED, textDecoration: "none" }} className="hover-gold">Services</Link>
              <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
              <span style={{ color: GOLD }}>Ads: Complete + Paid Ads</span>
            </div>

            <div style={{ maxWidth: "820px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <span style={{ width: "32px", height: "1px", background: GOLD, display: "inline-block", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-bebas)", fontSize: "13px", letterSpacing: "4px", color: GOLD }}>
                  TOTAL DOMINATION
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(48px, 6vw, 96px)",
                  fontWeight: 300,
                  lineHeight: 1.0,
                  letterSpacing: "-0.5px",
                  color: TEXT_PRIMARY,
                  marginBottom: "32px",
                }}
              >
                Complete
                <br />
                <em style={{ fontStyle: "italic", color: GOLD }}>+ Paid Ads.</em>
              </h1>

              <p
                style={{
                  fontSize: "19px",
                  color: TEXT_MUTED,
                  lineHeight: 1.75,
                  maxWidth: "640px",
                  marginBottom: "48px",
                }}
              >
                Everything in Complete, plus TikTok, daily community management, and paid ads on the two platforms that fit your business. One team owns your AI, SEO, content, media, social, and ads, so you can focus on running your business.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/shop" className="btn-primary-link">Get Started →</Link>
                <BookCallButton className="btn-ghost-link">Book a Call</BookCallButton>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section style={{ padding: "100px 5%", borderBottom: `1px solid ${GOLD_DIM}` }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: GOLD, display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: GOLD }}>
                What&apos;s Included
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(36px, 4vw, 60px)",
                fontWeight: 300,
                color: TEXT_PRIMARY,
                lineHeight: 1.1,
                marginBottom: "56px",
                letterSpacing: "-0.5px",
              }}
            >
              Complete,
              <br />
              <em style={{ color: GOLD, fontStyle: "italic" }}>Plus Paid Ads.</em>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: GOLD_DIM }} className="includes-grid">
              {INCLUDES.map((item) => (
                <div
                  key={item}
                  style={{
                    background: BG_ALT,
                    padding: "24px 28px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <span style={{ width: "16px", height: "1px", background: GOLD, flexShrink: 0, display: "inline-block", marginTop: "11px" }} />
                  <span style={{ fontSize: "16px", color: TEXT_MUTED, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section style={{ padding: "100px 5%", background: BG_MAIN, borderBottom: `1px solid ${GOLD_DIM}` }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: GOLD, display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: GOLD }}>Pricing</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(36px, 4.5vw, 60px)",
                fontWeight: 300,
                color: TEXT_PRIMARY,
                lineHeight: 1.1,
                marginBottom: "48px",
                letterSpacing: "-0.5px",
              }}
            >
              One Price.
              <br />
              <em style={{ color: GOLD, fontStyle: "italic" }}>Zero Guesswork.</em>
            </h2>

            <div
              style={{
                background: "#C9A84C",
                padding: "48px 40px",
              }}
            >
              <div style={{ display: "inline-block", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#080808", background: "rgba(8,8,8,0.12)", padding: "4px 12px", marginBottom: "24px", fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>
                All-Inclusive
              </div>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px", fontWeight: 300, color: "#080808", marginBottom: "12px" }}>
                Ads: Complete + Paid Ads
              </div>
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: "64px", color: "#080808", lineHeight: 1, marginBottom: "6px", letterSpacing: "2px" }}>
                $5,500
              </div>
              <div style={{ fontSize: "14px", color: "rgba(8,8,8,0.6)", marginBottom: "16px" }}>
                per month · No setup fee. All-in: $1,200 ad spend + $4,300 management.
              </div>
              <div style={{ fontSize: "14px", color: "rgba(8,8,8,0.6)", lineHeight: 1.6, marginBottom: "40px" }}>
                3-month initial term, then month-to-month. Cancel anytime after the initial 3 months with 30 days&apos; written notice.
              </div>
              <Link
                href="/shop"
                style={{
                  display: "inline-block",
                  padding: "14px 32px",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 600,
                  color: "#C9A84C",
                  background: "#080808",
                  border: "1px solid #080808",
                  textDecoration: "none",
                }}
              >
                See Packages →
              </Link>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section style={{ padding: "100px 5%", background: BG_ALT, textAlign: "center" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: GOLD, marginBottom: "24px" }}>
              Ready to Hand It All Over?
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 300,
                color: TEXT_PRIMARY,
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              One Team.
              <br />
              <em style={{ color: GOLD, fontStyle: "italic" }}>Total Domination.</em>
            </h2>
            <p style={{ fontSize: "18px", color: TEXT_MUTED, lineHeight: 1.8, marginBottom: "40px" }}>
              Stop managing vendors. Stop wondering what&apos;s being posted. Stop worrying about ad performance. We own it all.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/shop" className="btn-primary-link">Get Started →</Link>
              <BookCallButton className="btn-ghost-link">Book a Call</BookCallButton>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
