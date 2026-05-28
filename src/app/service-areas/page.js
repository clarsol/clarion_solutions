import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookCallButton from "@/components/BookCallButton";

const SITE_URL = "https://www.clarionsol.com";

export const metadata = {
  title: "Service Areas | Local SEO Agency Serving North Dallas, TX | Clarion Solutions",
  description:
    "Clarion Solutions is a veteran-owned local SEO agency serving McKinney, Frisco, Plano, Allen, Anna, Melissa, Princeton, and Celina, TX. AI automation and local SEO for North Dallas businesses.",
  alternates: { canonical: `${SITE_URL}/service-areas` },
  openGraph: {
    title: "Service Areas | Local SEO Agency Serving North Dallas, TX | Clarion Solutions",
    description:
      "Veteran-owned local SEO agency serving McKinney, Frisco, Plano, Allen, Anna, Melissa, Princeton, and Celina, TX. AI automation and local SEO for North Dallas businesses.",
    url: `${SITE_URL}/service-areas`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Clarion Solutions Service Areas | North Dallas, TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas | Local SEO Agency Serving North Dallas, TX | Clarion Solutions",
    description:
      "Veteran-owned local SEO agency serving McKinney, Frisco, Plano, Allen, Anna, Melissa, Princeton, and Celina, TX.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/service-areas/#service`,
      name: "Local SEO Services in North Dallas, TX",
      description:
        "Local SEO, AI automation, and web design for service businesses in McKinney, Frisco, Plano, Allen, Anna, Melissa, Princeton, and Celina, TX.",
      provider: {
        "@type": "MarketingAgency",
        "@id": `${SITE_URL}/#business`,
        name: "Clarion Solutions",
      },
      areaServed: [
        { "@type": "City", name: "McKinney", containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
        { "@type": "City", name: "Frisco",   containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
        { "@type": "City", name: "Plano",    containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
        { "@type": "City", name: "Allen",    containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
        { "@type": "City", name: "Anna",     containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
        { "@type": "City", name: "Melissa",  containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
        { "@type": "City", name: "Princeton",containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
        { "@type": "City", name: "Celina",   containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
      ],
      url: `${SITE_URL}/service-areas`,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/service-areas/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/service-areas` },
      ],
    },
  ],
};

const cities = [
  {
    name: "McKinney, TX",
    slug: "mckinney",
    desc: "Our home base. A rapidly growing Collin County city with increasing category competition and strong local search demand across most service verticals.",
  },
  {
    name: "Frisco, TX",
    slug: "frisco",
    desc: "One of the most commercially dense corridors in North Texas. Established competition in most categories, with high search volume and strong consumer spending.",
  },
  {
    name: "Plano, TX",
    slug: "plano",
    desc: "A mature market with deep-rooted local businesses. Competitive across the board, but high search volume rewards well-executed local SEO strategies.",
  },
  {
    name: "Allen, TX",
    slug: "allen",
    desc: "A growing suburb between McKinney and Plano with strong residential density, moderate category competition, and consistent local search demand.",
  },
  {
    name: "Anna, TX",
    slug: "anna",
    desc: "An early-stage market with limited established competitors. Businesses that build their local search presence here now will own their categories for years.",
  },
  {
    name: "Melissa, TX",
    slug: "melissa",
    desc: "A fast-growing small city on the US-75 corridor with new residential development and very limited local SEO competition across most service categories.",
  },
  {
    name: "Princeton, TX",
    slug: "princeton",
    desc: "An emerging market northeast of McKinney seeing rapid residential growth and wide-open first-mover opportunity for local businesses.",
  },
  {
    name: "Celina, TX",
    slug: "celina",
    desc: "One of the fastest-growing cities in Texas. The Preston Road corridor is developing fast and local search competition is still in its early stages.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />
      <main style={{ background: "#080808", paddingTop: "92px" }}>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>

          {/* Hero */}
          <section style={{ padding: "80px 0 100px", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", letterSpacing: "1px", color: "#9E9A92", marginBottom: "40px" }}>
              <Link href="/" style={{ color: "#9E9A92", textDecoration: "none" }} className="hover-gold">Home</Link>
              <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
              <span style={{ color: "#C9A84C" }}>Service Areas</span>
            </div>
            <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
              Where We Work
            </div>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05, color: "#F5F1E8", marginBottom: "24px", letterSpacing: "-0.5px" }}>
              North Dallas.
              <br />
              <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Local First.</em>
            </h1>
            <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.7 }}>
              We serve service businesses across Collin County and the North Dallas corridor. Click any city below to see market-specific SEO insights and what it takes to rank there.
            </p>
          </section>

          {/* City list */}
          <section style={{ padding: "80px 0 120px" }}>
            {cities.map((city, i) => (
              <Link
                key={city.slug}
                href={`/local-seo-${city.slug}-tx`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "32px",
                    padding: "36px 0",
                    borderBottom: i < cities.length - 1 ? "1px solid rgba(201,168,76,0.12)" : "none",
                    transition: "background 0.2s",
                  }}
                  className="pricing-row"
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
                      {city.name}
                    </div>
                    <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.6, margin: 0 }}>
                      {city.desc}
                    </p>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C" }}>
                      View Area →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </section>

        </div>

        {/* CTA */}
        <section style={{ padding: "100px 24px", background: "#0e0e0e", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
          <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
            Not Sure If We Cover Your Area?
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1, marginBottom: "24px" }}>
            Let&apos;s Talk.
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Free Strategy Call.</em>
          </h2>
          <p style={{ fontSize: "18px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 40px" }}>
            We work primarily across Collin County and the North Dallas corridor. If your business is nearby, reach out and we&apos;ll tell you honestly what the opportunity looks like in your market.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <BookCallButton className="btn-primary-link">Book a Free Call</BookCallButton>
            <Link href="/services/local-seo" className="btn-ghost-link">Local SEO Service</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
