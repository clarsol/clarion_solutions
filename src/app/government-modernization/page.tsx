import GovModernizationPage from "@/components/GovModernizationPage";

const SITE_URL = "https://www.clarionsol.com";

export const metadata = {
  title: "Government Modernization | AI Workflows & TRAIGA Compliance | Clarion Solutions",
  description:
    "AI workflow automation and TRAIGA compliance consulting for Texas municipalities. Fixed-scope engagements designed to stay under procurement thresholds. Veteran-owned, North Texas-based.",
  alternates: { canonical: `${SITE_URL}/government-modernization` },
  openGraph: {
    title: "Government Modernization | AI Workflows & TRAIGA Compliance | Clarion Solutions",
    description:
      "AI workflow automation and TRAIGA compliance consulting for Texas municipalities. Fixed-scope engagements designed to stay under procurement thresholds.",
    url: `${SITE_URL}/government-modernization`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Clarion Solutions | Government Modernization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Government Modernization | Clarion Solutions",
    description: "AI workflow automation and TRAIGA compliance consulting for Texas municipalities.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Government Modernization",
      description:
        "AI workflow automation, TRAIGA compliance gap analysis, and ongoing modernization support for Texas municipalities and government agencies.",
      provider: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#business`, name: "Clarion Solutions" },
      url: `${SITE_URL}/government-modernization`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do we need to go through a formal RFP process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Tier 1 and Tier 2 engagements fall below standard municipal procurement thresholds in Texas, which means department heads can often approve them directly without a formal RFP. Thresholds vary by city, so we walk through your specific situation on the discovery call.",
          },
        },
        {
          "@type": "Question",
          name: "Are you TRAIGA compliant as a vendor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. As an AI vendor supplying services to Texas government entities, we operate in full compliance with TRAIGA requirements, including maintaining and providing compliance documentation for every AI system we deploy.",
          },
        },
        {
          "@type": "Question",
          name: "What systems do you integrate with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We integrate with most municipal platforms commonly used in Texas cities, including permitting software, 311 systems, constituent management tools, and standard productivity suites. The AI Readiness Audit maps your current tool stack and identifies integration opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "How long does implementation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The AI Readiness Audit runs two to three weeks from kickoff to final written report. Workflow Automation Implementation projects typically take four to six weeks. All timelines are fixed at the scoping stage and documented in writing before work begins.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Government Modernization", item: `${SITE_URL}/government-modernization` },
      ],
    },
  ],
};

export default function GovernmentModernizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GovModernizationPage />
    </>
  );
}
