import CityLocalSeoPage from "@/components/CityLocalSeoPage";

const SITE_URL = "https://clarionsol.com";
const slug = "local-seo-allen-tx";
const city = "Allen";

const intro =
  "Allen has grown steadily into one of Collin County's most active commercial markets, and with that growth comes real competition for local businesses. Customers along the US-75 corridor and throughout Allen's neighborhoods research online before they call. Local SEO is how you make sure your business is the one they find. Clarion Solutions helps Allen businesses rank in the map pack and show up at the top for the searches that drive real revenue.";

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
  description: `Rank higher in ${city}, TX. Google Business Profile management, local keyword targeting, citation building & monthly SEO content for Allen businesses. Free strategy call.`,
  alternates: { canonical: `${SITE_URL}/${slug}` },
  openGraph: {
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Rank higher in ${city}, TX. GBP management, local keyword targeting, citation building & monthly SEO content for Allen businesses.`,
    url: `${SITE_URL}/${slug}`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `Local SEO Services in ${city}, TX | Clarion Solutions` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Rank higher in ${city}, TX. GBP management, local keyword targeting, citation building & monthly SEO content for Allen businesses.`,
  },
};

const localContext = {
  heading: "The Allen Market",
  body: [
    "Allen has grown steadily into one of Collin County's most active commercial zones without attracting the same level of national attention that Frisco and Plano have. That is an advantage for local businesses. The competition in most service categories here is still manageable, and the customers are real. Families along the US-75 corridor and in Allen's newer residential neighborhoods are active service buyers who research online before they call.",
    "The Watters Creek district and the Allen Premium Outlets area drive significant foot traffic, but the highest-volume local searches tend to be for home services, healthcare, and restaurants in established neighborhoods like Twin Creeks and Rivercrest. Ranking in those searches requires the same fundamentals: a well-optimized GBP, consistent local citations, and content that signals relevance to Allen specifically.",
    "We approach Allen with the same rigor we bring to more competitive markets because the businesses here deserve to grow. A strong local SEO foundation built now will compound as the city continues to develop and more searches flow through this market.",
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
