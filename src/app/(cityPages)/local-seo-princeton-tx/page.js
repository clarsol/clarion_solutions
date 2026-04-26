import CityLocalSeoPage from "@/components/CityLocalSeoPage";

const SITE_URL = "https://clarionsol.com";
const slug = "local-seo-princeton-tx";
const city = "Princeton";

const intro =
  "Princeton is in the middle of one of the biggest residential growth explosions in Collin County. New homeowners and growing families are searching Google for everything from contractors to dentists, and the businesses showing up first are the ones getting the calls. Clarion Solutions helps Princeton businesses build the local SEO foundation that captures this demand now and compounds over time as the market continues to grow.";

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
  description: `Capture the growth in ${city}, TX. GBP management, keyword targeting, citation building & local SEO content for Princeton businesses. North Dallas growth corridor. Free strategy call.`,
  alternates: { canonical: `${SITE_URL}/${slug}` },
  openGraph: {
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Capture the growth in ${city}, TX. GBP management, keyword targeting, citation building & local SEO content for Princeton businesses.`,
    url: `${SITE_URL}/${slug}`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `Local SEO Services in ${city}, TX | Clarion Solutions` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Capture the growth in ${city}, TX. GBP management, keyword targeting, citation building & local SEO content for Princeton businesses.`,
  },
};

const localContext = {
  heading: "The Princeton Market",
  body: [
    "Princeton has become one of the more talked-about growth stories in Collin County. New subdivisions off Beauchamp Boulevard, FM 982, and the US-380 corridor have added thousands of residents in recent years and the pace has not slowed. These are households actively looking for local services, from HVAC and roofing to dentists and restaurants, and the businesses that show up on Google are the ones getting the calls.",
    "The local search landscape in Princeton is still in its early stages. Most categories have limited competition among well-optimized local businesses, which means the investment required to rank at the top is significantly lower here than in more established markets. That is a real opportunity for Princeton businesses that want to build a durable customer acquisition channel without competing against years of SEO history from entrenched players.",
    "We help Princeton businesses move fast on that opportunity. A well-built local SEO foundation, strong GBP, consistent citations, and relevant local content, positions your business to capture the bulk of local search demand now and defend that position as the market matures.",
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
