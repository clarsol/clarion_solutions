import CityLocalSeoPage from "@/components/CityLocalSeoPage";

const SITE_URL = "https://clarionsol.com";
const slug = "local-seo-plano-tx";
const city = "Plano";

const intro =
  "Plano businesses compete for one of the most educated and purchase-ready consumer bases in North Texas. Whether you run a service business along the US-75 corridor or a professional practice near Legacy West, appearing in Google search and the local map pack is the difference between a full calendar and a quiet phone. Clarion Solutions helps Plano businesses show up where their customers are already looking.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/${slug}/#service`,
      name: `Local SEO Services in ${city}, TX`,
      description: `Local SEO for businesses in ${city}, TX: Google Business Profile optimization, local keyword targeting, citation building, and monthly content. Served by Clarion Solutions, McKinney TX.`,
      provider: {
        "@type": "MarketingAgency",
        "@id": `${SITE_URL}/#business`,
        name: "Clarion Solutions",
      },
      areaServed: {
        "@type": "City",
        name: city,
        containedInPlace: { "@type": "AdministrativeArea", name: "Texas" },
      },
      url: `${SITE_URL}/${slug}`,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/${slug}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Local SEO", item: `${SITE_URL}/services/local-seo` },
        { "@type": "ListItem", position: 3, name: `Local SEO ${city} TX`, item: `${SITE_URL}/${slug}` },
      ],
    },
  ],
};

export const metadata = {
  title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
  description: `Get found first in ${city}, TX. Google Business Profile management, local keyword targeting, citation building & SEO content for Plano businesses. Book a free strategy call.`,
  alternates: { canonical: `${SITE_URL}/${slug}` },
  openGraph: {
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Get found first in ${city}, TX. GBP management, local keyword targeting, citation building & SEO content for Plano businesses.`,
    url: `${SITE_URL}/${slug}`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `Local SEO Services in ${city}, TX | Clarion Solutions` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Get found first in ${city}, TX. GBP management, local keyword targeting, citation building & SEO content for Plano businesses.`,
  },
};

const localContext = {
  heading: "The Plano Market",
  body: [
    "Plano has one of the most educated and financially active consumer bases in North Texas. From the Legacy West district to the dense residential corridors along Preston Road and Spring Creek Parkway, Plano customers expect quality and research their options thoroughly before committing. For local businesses, this means the stakes are high and so is the reward for showing up first.",
    "The categories that generate the most local search volume in Plano include healthcare, home services, restaurants, professional services, and fitness. Competition is real in all of them. Many national brands and well-funded regional competitors have established GBP presences here. Beating them requires more than just having a listing. It takes consistent authority, a deep citation footprint, and locally relevant content that Google can connect to specific Plano neighborhoods.",
    "We help Plano businesses build that kind of presence. Our approach starts with understanding your specific corner of Plano, whether that is near Legacy Business Park, East Plano, or Old Town, and targeting the searches most likely to bring the right customers to your door.",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityLocalSeoPage city={city} intro={intro} localContext={localContext} />
    </>
  );
}
