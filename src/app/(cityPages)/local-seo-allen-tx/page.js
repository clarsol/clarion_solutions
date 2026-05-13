import CityLocalSeoPage from "@/components/CityLocalSeoPage";

const SITE_URL = "https://www.clarionsol.com";
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

const localContext2 = {
  heading: "Allen's Growth Corridors and Key Business Districts",
  body: [
    "Allen's commercial activity centers on two primary corridors: the US-75 service road from Bethany Drive to Exchange Parkway, and the Stacy Road and McDermott Drive corridor running east-west through the heart of the city. Exchange Parkway, anchored by the Allen Premium Outlets and the Watters Creek district, draws significant regional traffic and is Allen's most recognized commercial destination. Businesses near these corridors benefit from high ambient awareness but still need local SEO to convert that traffic into direct customer relationships online.",
    "Allen's residential neighborhoods west of US-75, including Twin Creeks, Rivercrest, and Montgomery Farm, contain some of the highest household incomes in Collin County. These buyers research service providers thoroughly before calling. Businesses that rank in searches originating from these neighborhoods have access to some of the most valuable local customers in the North Dallas market. Reaching them through Google is more reliable than any other channel.",
    "East Allen, along Alma Drive and Jupiter Road, has been developing steadily with newer residential and commercial builds. The mix of young families and established households in this corridor generates strong demand for home services, childcare, healthcare, and restaurants. Local SEO visibility in this part of Allen is still achievable with relatively modest investment compared to the western US-75 corridor.",
  ],
};

const whyLocalSeo = {
  heading: "Allen's Positioning Advantage for Local Businesses",
  body: [
    "Allen sits in a positioning sweet spot that few cities in North Texas can match. It carries Collin County buying power without the degree of national chain saturation seen in Frisco, and without the volume of well-funded competitors that dominate Plano's map pack. Local businesses that build their SEO presence here can reach customers who are actively spending, in a market where first-mover advantage still exists in most service categories.",
    "Allen also benefits from its location on US-75, which makes it a natural service destination for commuters traveling between McKinney and Dallas. Local SEO captures that intent at exactly the right moment, when someone is searching from their car or office for a business they plan to visit or call that day. The combination of residential buying power and corridor traffic makes Allen one of the more efficient local SEO markets in North Texas for the right business category.",
  ],
};

const faq = [
  {
    q: "How long does local SEO take in Allen, TX?",
    a: "Most Allen businesses see measurable ranking movement within 60 to 90 days. Allen sits between the high competition of Frisco and the lower saturation of smaller Collin County cities, so results in most categories arrive faster than in the largest markets. Sustained top-three positions typically come at the 3 to 5 month mark.",
  },
  {
    q: "Do I need an Allen address to rank in Allen?",
    a: "A Collin County or Allen address helps for map pack rankings. Allen businesses serving customers along the US-75 corridor carry natural geographic authority that we build on directly. If you are located in a neighboring city but serve Allen, we can target Allen through your GBP service area and location-specific content.",
  },
  {
    q: "How much does local SEO cost in Allen, TX?",
    a: "Clarion Solutions offers local SEO starting at $2,500 per month as part of our AI + Local SEO package. Allen represents one of the better value opportunities in North Dallas: real buying power, manageable competition, and a market that rewards consistent execution. Free strategy call before any commitment.",
  },
  {
    q: "What makes Clarion Solutions different from other Allen SEO agencies?",
    a: "We are a veteran-owned agency based in McKinney, TX, ten minutes from Allen on US-75. We serve Allen businesses specifically and understand the US-75 corridor dynamics from the inside. We combine local SEO with AI automation, report transparently every month, and keep our client base small enough to give every business real attention.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityLocalSeoPage city={city} intro={intro} localContext={localContext} localContext2={localContext2} whyLocalSeo={whyLocalSeo} faq={faq} />
    </>
  );
}
