import { notFound } from "next/navigation";
import { services, serviceList } from "@/lib/serviceData";
import ServicePage from "@/components/services/ServicePage";

const SITE_URL = "https://clarionsol.com";

export function generateStaticParams() {
  return serviceList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: `${SITE_URL}/services/${slug}`,
      siteName: "Clarion Solutions",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDesc,
    },
  };
}

function buildSchema(service) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${service.slug}/#service`,
        name: service.name,
        description: service.serviceDescription,
        provider: {
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#business`,
          name: "Clarion Solutions",
        },
        areaServed: [
          { "@type": "City", name: "McKinney" },
          { "@type": "City", name: "Frisco" },
          { "@type": "City", name: "Allen" },
          { "@type": "City", name: "Plano" },
        ],
        url: `${SITE_URL}/services/${service.slug}`,
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/services/${service.slug}/#faq`,
        mainEntity: service.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/services/${service.slug}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/#services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${SITE_URL}/services/${service.slug}`,
          },
        ],
      },
    ],
  };
}

export default async function ServiceSlugPage({ params }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(service)) }}
      />
      <ServicePage service={service} />
    </>
  );
}
