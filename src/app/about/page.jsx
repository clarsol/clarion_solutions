import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookCallButton from "@/components/BookCallButton";
import Link from "next/link";

const SITE_URL = "https://www.clarionsol.com";

export const metadata = {
  title: "About Clarion Solutions | Veteran-Owned Digital Agency | McKinney TX",
  description:
    "Clarion Solutions was founded by Navy veteran Stanley Wilder to help North Dallas businesses get found online and grow with AI-powered systems. Learn our story.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Clarion Solutions | Veteran-Owned Digital Agency | McKinney TX",
    description:
      "Clarion Solutions was founded by Navy veteran Stanley Wilder to help North Dallas businesses get found online and grow with AI-powered systems. Learn our story.",
    url: `${SITE_URL}/about`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Clarion Solutions | Veteran-Owned Digital Agency McKinney TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Clarion Solutions | Veteran-Owned Digital Agency | McKinney TX",
    description:
      "Clarion Solutions was founded by Navy veteran Stanley Wilder to help North Dallas businesses get found online and grow with AI-powered systems. Learn our story.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about`,
      url: `${SITE_URL}/about`,
      name: "About Clarion Solutions | Veteran-Owned Digital Agency | McKinney TX",
      description:
        "Clarion Solutions was founded by Navy veteran Stanley Wilder to help North Dallas businesses get found online and grow with AI-powered systems.",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#stan-wilder`,
      name: "Stanley Wilder",
      alternateName: "Stan Wilder",
      jobTitle: "Founder",
      description:
        "Navy veteran and digital strategist specializing in AI automation, local SEO, and business growth systems for North Dallas businesses.",
      url: `${SITE_URL}/about`,
      sameAs: ["https://www.linkedin.com/in/stanley-wilder/"],
      worksFor: { "@id": `${SITE_URL}/#business` },
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Military Service", name: "United States Navy Fire Controlman, 6 Years" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Education", name: "Software Engineering, Fullstack Development Bootcamp" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Certification", name: "CompTIA Network+" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Certification", name: "CompTIA Linux+" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Certification", name: "AWS Cloud Practitioner" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
      ],
    },
  ],
};

const credentials = [
  { label: "United States Navy", sub: "Fire Controlman · 6 Years of Service" },
  { label: "Software Engineering", sub: "Fullstack Development Bootcamp" },
  { label: "CompTIA Network+", sub: "Certified" },
  { label: "CompTIA Linux+", sub: "Certified" },
  { label: "AWS Cloud Practitioner", sub: "Certified" },
];

const values = [
  {
    title: "Transparent by Default",
    body: "Pricing is public. Reports are plain English. If something isn't working, you'll hear it from us first. We don't hide behind vanity metrics or vague updates.",
  },
  {
    title: "Built to Perform",
    body: "Everything we build is engineered to actually work. Fast websites, automation that fires correctly, SEO that moves rankings. We come from a technical background and it shows.",
  },
  {
    title: "Accountable, Always",
    body: "We show up, we deliver, and when something falls short we fix it. No excuses, no disappearing acts.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />
      <main style={{ background: "#080808", paddingTop: "92px" }}>

        {/* Hero */}
        <section style={{ padding: "80px 5% 100px", borderBottom: "1px solid rgba(201,168,76,0.15)", position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "12px", letterSpacing: "1px", color: "#9E9A92", marginBottom: "48px" }}>
            <Link href="/" style={{ color: "#9E9A92", textDecoration: "none" }} className="hover-gold">Home</Link>
            <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
            <span style={{ color: "#C9A84C" }}>About</span>
          </div>

          <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
            About · Clarion Solutions
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05, color: "#F5F1E8", marginBottom: "32px", letterSpacing: "-0.5px" }}>
            Built by Someone Who
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Gets It.</em>
          </h1>
          <p style={{ fontSize: "18px", color: "#9E9A92", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
            Six years in the Navy. Years in corporate America. And a decision to build something that actually works for the people running it.
          </p>
        </section>

        {/* Founder Story */}
        <section style={{ padding: "100px 5%", background: "#080808" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ marginBottom: "64px" }}>
              <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
                The Story
              </div>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1 }}>
                Why Clarion Exists.
              </h2>
            </div>

            <div style={{ display: "flex", gap: "80px", flexWrap: "wrap", alignItems: "flex-start" }}>
              {/* Text */}
              <div style={{ flex: "1 1 400px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
                <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.85 }}>
                  I served six years in the United States Navy as a Fire Controlman. When I got out, I wanted one thing: to be home with my wife and our two kids. I took a network engineering job in the corporate world thinking I had made it. I hadn&apos;t. The hours were the same. The distance was the same. I had traded one uniform for another.
                </p>
                <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.85 }}>
                  That&apos;s when I started taking inventory of what I actually knew how to do. Years of technical training. A software engineering education. Network and cloud certifications. A career spent building and managing complex systems under pressure. I realized I had everything I needed to build something of my own.
                </p>
                <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.85 }}>
                  What I built is Clarion Solutions. The idea was simple. Business owners are spending too much time on the day to day and not enough time on their online presence. Responding to every review. Posting photos of your work. Returning calls before a potential customer moves on to the next name on the list. Managing a calendar that works fine until it doesn&apos;t. These things add up. On top of running a business, it becomes a job on its own.
                </p>
                <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.85 }}>
                  This is where Clarion comes in. We inject AI into your business to streamline the tasks that are eating your time, while getting you found everywhere people are looking: Google, ChatGPT, Gemini, and beyond. Stop losing leads you don&apos;t even know you&apos;re missing. Start winning the markets you should already own. With reporting that actually tells you something.
                </p>
                <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.85 }}>
                  Clarion is veteran-owned and operated out of McKinney, Texas. Every client gets my direct attention. Every report is plain English. Every strategy is built around your actual business, not a template.
                </p>
              </div>

              {/* Photo placeholder */}
              <div style={{ flex: "0 0 320px" }}>
                <div
                  style={{
                    border: "1px solid rgba(201,168,76,0.4)",
                    background: "#0e0e0e",
                    aspectRatio: "3/4",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      border: "1px solid #C9A84C",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-bebas)",
                      fontSize: "30px",
                      color: "#C9A84C",
                      letterSpacing: "2px",
                    }}
                  >
                    CS
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "12px", fontWeight: 500, color: "#F5F1E8", letterSpacing: "1px", marginBottom: "6px" }}>
                      Stan Wilder
                    </div>
                    <div style={{ fontSize: "11px", color: "rgba(201,168,76,0.5)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                      Photo coming soon
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "20px", paddingLeft: "4px" }}>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "#F5F1E8", marginBottom: "4px" }}>
                    Stanley Wilder
                  </div>
                  <div style={{ fontSize: "13px", color: "#9E9A92" }}>
                    Founder, Clarion Solutions
                  </div>
                  <div style={{ fontSize: "13px", color: "#9E9A92" }}>
                    McKinney, TX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section style={{ padding: "100px 5%", background: "#0e0e0e", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "72px" }}>
              <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
                Qualifications
              </div>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1 }}>
                The Background Behind the Work.
              </h2>
            </div>

            <div
              className="about-credentials-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "rgba(201,168,76,0.15)",
              }}
            >
              {credentials.map((c) => (
                <div key={c.label} className="includes-card" style={{ background: "#0e0e0e", padding: "40px 36px" }}>
                  <div style={{ width: "32px", height: "1px", background: "#C9A84C", marginBottom: "20px" }} />
                  <div style={{ fontSize: "15px", fontWeight: 500, color: "#F5F1E8", marginBottom: "8px", lineHeight: 1.3 }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: "13px", color: "#9E9A92", letterSpacing: "0.5px" }}>
                    {c.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: "100px 5%", background: "#080808", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ marginBottom: "64px" }}>
              <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
                Our Values
              </div>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1 }}>
                How We Operate.
              </h2>
            </div>

            <div
              className="service-process-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "rgba(201,168,76,0.15)",
              }}
            >
              {values.map((v) => (
                <div key={v.title} style={{ background: "#080808", padding: "48px 36px" }}>
                  <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
                    {v.title}
                  </div>
                  <p style={{ fontSize: "15px", color: "#9E9A92", lineHeight: 1.85 }}>
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "120px 5%", background: "#080808", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
            Ready to Work Together?
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1, marginBottom: "24px" }}>
            Let&apos;s Work
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Together.</em>
          </h2>
          <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 48px" }}>
            Book a free strategy call. No pitch, no pressure, just an honest conversation about your business and whether we can help.
          </p>
          <BookCallButton className="btn-primary-link">Book a Free Call</BookCallButton>
        </section>

      </main>
      <Footer />
    </>
  );
}
