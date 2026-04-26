import CityLocalSeoPage from "@/components/CityLocalSeoPage";

const SITE_URL = "https://clarionsol.com";
const slug = "local-seo-melissa-tx";
const city = "Melissa";

const intro =
  "Melissa sits right in the path of North Texas' growth corridor, and businesses planting their flag early have a real advantage. With new residential development bringing thousands of new residents to the area, demand for local services is outpacing the supply of businesses that are actually visible online. Clarion Solutions helps Melissa businesses get found on Google and capture that demand before the competition does.";

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
  description: `Establish your presence in ${city}, TX before the competition arrives. GBP management, keyword targeting, citation building & SEO content for Melissa businesses. Free call.`,
  alternates: { canonical: `${SITE_URL}/${slug}` },
  openGraph: {
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Establish your presence in ${city}, TX before the competition arrives. GBP management, keyword targeting & SEO content for Melissa businesses.`,
    url: `${SITE_URL}/${slug}`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `Local SEO Services in ${city}, TX | Clarion Solutions` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Establish your presence in ${city}, TX before the competition arrives. GBP management, keyword targeting & SEO content for Melissa businesses.`,
  },
};

const localContext = {
  heading: "The Melissa Market",
  body: [
    "Melissa has shifted from a quiet bedroom community to an actively developing city in a relatively short window. New residential developments are bringing significant population growth, and the local business infrastructure is still catching up to the demand. That gap between growing consumer demand and limited local supply online is exactly where businesses that invest in local SEO gain a disproportionate advantage.",
    "Most searches for services in Melissa follow US-75 and the FM 2933 corridor. Home services, childcare, healthcare, and restaurants are among the highest-demand categories with the fewest well-optimized competitors. A business that owns the top map pack results for those searches in Melissa is capturing the majority of that demand by default.",
    "We help Melissa businesses get into position while that window is still open. Our process builds the Google Business Profile authority, citation footprint, and local content that search engines need to rank you consistently. As the market grows, your position grows with it.",
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
