import VCAIOPage from "@/components/VCAIOPage";

const SITE_URL = "https://www.clarionsol.com";

export const metadata = {
  title: "Virtual Chief AI Officer | Fractional AI Strategy | Clarion Solutions",
  description:
    "Executive-level AI strategy without the $250K salary. Clarion serves as your fractional vCAIO — AI readiness assessments, vendor-neutral tool selection, governance frameworks, and 90-day roadmaps for agencies, municipalities, and growing businesses.",
  alternates: { canonical: `${SITE_URL}/services/vcaio` },
  openGraph: {
    title: "Virtual Chief AI Officer | Fractional AI Strategy | Clarion Solutions",
    description:
      "Fractional vCAIO services for federal agencies, municipalities, and SMBs. AI readiness assessments, vendor-neutral tool selection, governance frameworks, and 90-day roadmaps.",
    url: `${SITE_URL}/services/vcaio`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Virtual Chief AI Officer | Clarion Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Chief AI Officer | Fractional AI Strategy | Clarion Solutions",
    description: "Fractional vCAIO services. AI readiness, vendor selection, governance, and 90-day roadmaps.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Virtual Chief AI Officer (vCAIO)",
      description:
        "Fractional AI advisory services including AI readiness assessments, vendor-neutral tool selection, AI governance frameworks, and 90-day implementation roadmaps.",
      provider: {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: "Clarion Solutions",
      },
      url: `${SITE_URL}/services/vcaio`,
      offers: [
        {
          "@type": "Offer",
          name: "AI Readiness Audit",
          price: "250",
          priceCurrency: "USD",
          description: "Full AI readiness assessment with written report, 90-day roadmap, and 1-hour readout call.",
        },
        {
          "@type": "Offer",
          name: "vCAIO Advisory Retainer",
          description: "Ongoing fractional AI advisory services. Scoped per engagement.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "AI Services", item: `${SITE_URL}/ai-services` },
        { "@type": "ListItem", position: 3, name: "Virtual Chief AI Officer", item: `${SITE_URL}/services/vcaio` },
      ],
    },
  ],
};

export default function VCAIOServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <VCAIOPage />
    </>
  );
}
