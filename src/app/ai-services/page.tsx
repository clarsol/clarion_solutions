import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AIServicesPage from "@/components/AIServicesPage";

const SITE_URL = "https://www.clarionsol.com";

export const metadata = {
  title: "AI Services McKinney TX | Clarion Solutions — Veteran-Owned AI Automation & Advisory",
  description:
    "Clarion Solutions delivers AI automation, virtual AI advisory, web development, and managed AI services to businesses and federal agencies. Veteran-owned. McKinney, TX.",
  alternates: { canonical: `${SITE_URL}/ai-services` },
  openGraph: {
    title: "AI Services McKinney TX | Clarion Solutions — Veteran-Owned AI Automation & Advisory",
    description:
      "Clarion Solutions delivers AI automation, virtual AI advisory, web development, and managed AI services to businesses and federal agencies. Veteran-owned. McKinney, TX.",
    url: `${SITE_URL}/ai-services`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Clarion Solutions | AI Services McKinney TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services McKinney TX | Clarion Solutions",
    description:
      "AI automation, virtual AI advisory, web development, and managed AI services. Veteran-owned. McKinney, TX.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI Services",
      description:
        "AI automation, virtual Chief AI Officer advisory, web design and development, AI-powered digital marketing and SEO, and managed AI services for businesses and federal agencies.",
      provider: {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: "Clarion Solutions",
      },
      url: `${SITE_URL}/ai-services`,
      areaServed: [
        { "@type": "City", name: "McKinney", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Frisco", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Plano", containedInPlace: { "@type": "State", name: "Texas" } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "AI Services", item: `${SITE_URL}/ai-services` },
      ],
    },
  ],
};

export default function AIServicesPageWrapper() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AIServicesPage />
      <Footer />
    </>
  );
}
