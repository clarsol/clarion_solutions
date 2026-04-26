import CityLocalSeoPage from "@/components/CityLocalSeoPage";

const SITE_URL = "https://clarionsol.com";
const slug = "local-seo-anna-tx";
const city = "Anna";

const intro =
  "Anna is growing faster than almost any city in Collin County, and businesses that establish their local SEO presence now will own the market before the competition catches up. With new neighborhoods and residents arriving constantly along the US-75 corridor, the window to rank first for your category in Anna is still wide open. Clarion Solutions helps Anna businesses build that foundation before the market gets crowded.";

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
  description: `Get ahead in ${city}, TX before the market fills up. GBP management, keyword targeting, citation building & local SEO content for Anna businesses. Free strategy call.`,
  alternates: { canonical: `${SITE_URL}/${slug}` },
  openGraph: {
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Get ahead in ${city}, TX before the market fills up. GBP management, keyword targeting, citation building & local SEO content for Anna businesses.`,
    url: `${SITE_URL}/${slug}`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `Local SEO Services in ${city}, TX | Clarion Solutions` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Get ahead in ${city}, TX before the market fills up. GBP management, keyword targeting, citation building & local SEO content for Anna businesses.`,
  },
};

const localContext = {
  heading: "The Anna Market",
  body: [
    "Anna is one of the fastest-growing cities in all of Collin County. New master-planned communities and subdivisions along US-75 North and FM 455 are bringing thousands of new households into the market every year. Households that need contractors, doctors, dentists, gyms, restaurants, and a dozen other local services. Most of those needs get searched on Google first.",
    "The competitive landscape in Anna is still relatively open. Unlike Frisco or Plano, most categories here do not yet have dominant local players with deep SEO histories. A business that builds its local search presence now can establish map pack and organic rankings that will be extremely difficult to displace as the city fills in. First-mover advantage in a fast-growing market is one of the most undervalued opportunities in local SEO.",
    "We work with Anna businesses who understand that planting the flag today means owning the market tomorrow. Our approach focuses on getting your GBP right, building citation authority across the directories that matter, and creating content that positions you as the clear answer for your category in Anna and the surrounding corridor.",
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
