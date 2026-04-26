import { services } from "@/lib/serviceData";
import ServicePage from "@/components/services/ServicePage";

const SITE_URL = "https://clarionsol.com";
const service = services["web-design"];

export const metadata = {
  title: service.metaTitle,
  description: service.metaDesc,
  alternates: { canonical: `${SITE_URL}/services/web-design` },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDesc,
    url: `${SITE_URL}/services/web-design`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Clarion Solutions | Web Design McKinney TX" }],
  },
  twitter: { card: "summary_large_image", title: service.metaTitle, description: service.metaDesc, images: [`${SITE_URL}/opengraph-image`] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: service.name,
      description: service.serviceDescription,
      provider: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#business`, name: "Clarion Solutions" },
      url: `${SITE_URL}/services/web-design`,
    },
    {
      "@type": "FAQPage",
      mainEntity: service.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: service.name, item: `${SITE_URL}/services/web-design` },
      ],
    },
  ],
};

export default function WebDesignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePage service={service} />
    </>
  );
}
