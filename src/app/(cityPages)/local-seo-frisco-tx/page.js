import CityLocalSeoPage from "@/components/CityLocalSeoPage";

const SITE_URL = "https://clarionsol.com";
const slug = "local-seo-frisco-tx";
const city = "Frisco";

const intro =
  "Frisco is one of the fastest-growing cities in North Texas and one of the most competitive markets for local businesses. With major employers, a booming population, and a consumer base that researches online before they call, showing up in Google isn't optional. It's how you stay competitive. Clarion Solutions helps Frisco businesses dominate the local map pack and rank for the searches that bring in real customers.";

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
  description: `Dominate local search in ${city}, TX. Google Business Profile management, keyword targeting, citation building & monthly SEO content for Frisco businesses. Book a free strategy call.`,
  alternates: { canonical: `${SITE_URL}/${slug}` },
  openGraph: {
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Dominate local search in ${city}, TX. Google Business Profile management, keyword targeting, citation building & monthly SEO content for Frisco businesses.`,
    url: `${SITE_URL}/${slug}`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `Local SEO Services in ${city}, TX | Clarion Solutions` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Dominate local search in ${city}, TX. GBP management, keyword targeting, citation building & monthly SEO content for Frisco businesses.`,
  },
};

const localContext = {
  heading: "The Frisco Market",
  body: [
    "Frisco generates more local Google searches per square mile than almost any city in North Texas. With Legacy West, The Star, and the DNT corridor bringing in national chains and well-funded regional competitors, local businesses have to work harder to appear alongside or ahead of brands with full-time marketing teams. Local SEO is the lever that levels that playing field.",
    "The consumer base here skews younger, higher income, and highly research-oriented. Before someone in Frisco calls a contractor, books a dentist, or hires a landscaper, they have already read the reviews and compared the top options on Google. If your business is not showing up in the map pack for the searches that matter most in your category, those customers are going to your competitors.",
    "We help Frisco businesses build the Google presence that competes at the level this market demands. That means comprehensive GBP optimization, hyper-local keyword targeting across Frisco's distinct neighborhoods, and consistent monthly content that builds domain authority over time.",
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
