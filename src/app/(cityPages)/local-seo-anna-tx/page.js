import CityLocalSeoPage from "@/components/CityLocalSeoPage";

const SITE_URL = "https://www.clarionsol.com";
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

const localContext2 = {
  heading: "Anna's Developing Neighborhoods and Search Geography",
  body: [
    "Anna's growth has concentrated in master-planned communities along the US-75 North corridor. Villages of Hurricane Creek, Sherley Heritage Park, and subdivisions off FM 455 have added thousands of households in recent years. These residents are relocating from more established Collin County cities and arrive with digital-first habits for finding local services. They are searching for providers the moment they move in, and most Anna businesses are not yet positioned to capture that demand.",
    "The US-75 frontage road through Anna remains the primary commercial corridor, with the FM 455 and Standridge Drive intersection seeing the most active commercial development. New service businesses are opening regularly along this stretch, but the majority are not yet investing in local SEO. That gap between a fast-growing search audience and limited optimized competition is exactly the kind of opportunity that closes quickly as markets mature.",
    "Anna's proximity to McKinney and Melissa means some residents search with location modifiers that extend beyond Anna's city limits. An effective local SEO strategy accounts for this by targeting both explicit Anna searches and the broader corridor searches that capture residents regardless of the specific city name they use. Understanding how Anna residents actually search is the foundation of a strategy that works.",
  ],
};

const whyLocalSeo = {
  heading: "The Anna First-Mover Advantage",
  body: [
    "In most Collin County markets, the window to establish first-mover search dominance has already closed. In Anna, it has not. The city's population has roughly doubled in the last five years, and residential development is still accelerating. Businesses that build authoritative GBP listings, consistent local citations, and city-specific content today are creating positions that will be progressively harder to displace as more competitors arrive.",
    "What costs a modest investment to establish today could cost three to five times as much in three years when the market has established players and more competitive search dynamics. The businesses that waited in Frisco and Allen are now fighting uphill against years of accumulated authority. Anna businesses have the opportunity to be on the other side of that equation, building from the top rather than chasing their way up.",
  ],
};

const faq = [
  {
    q: "How long does local SEO take in Anna, TX?",
    a: "Anna businesses often see ranking movement faster than businesses in more competitive markets. Most clients see measurable results within 45 to 60 days. Because the local search landscape in Anna is still relatively open, the path to top map pack positions is shorter than in more established Collin County cities.",
  },
  {
    q: "Do I need an Anna address to rank in Anna?",
    a: "A local Anna or Collin County address helps for map pack rankings, particularly for searches with explicit Anna, TX location modifiers. If you serve Anna from nearby McKinney or Melissa, we can build GBP service area coverage and locally targeted content that improves your visibility for Anna searches without an Anna storefront.",
  },
  {
    q: "How much does local SEO cost in Anna, TX?",
    a: "Clarion Solutions offers local SEO starting at $2,500 per month as part of our AI + Local SEO package. Anna's lower competitive density means the investment works harder here than in more saturated markets. What takes months and significant budget in Frisco can often be accomplished faster and more efficiently in Anna's current market conditions. Free strategy call before any commitment.",
  },
  {
    q: "What makes Clarion Solutions different from other Anna SEO agencies?",
    a: "We are a veteran-owned agency based in McKinney, TX, directly south of Anna on US-75. We understand the US-75 growth corridor from the inside and work with businesses throughout it. We combine local SEO with AI automation, report clearly every month, and keep a small enough client base to give every business consistent, real attention.",
  },
];

const definitionBlock = "Local SEO in Anna, TX means ranking in Google's map pack and local search results when nearby customers search for your services. Clarion Solutions helps Anna businesses establish their local search presence early in a rapidly growing market where businesses that show up first now will hold that position as the city continues to expand.";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityLocalSeoPage city={city} intro={intro} localContext={localContext} localContext2={localContext2} whyLocalSeo={whyLocalSeo} faq={faq} definitionBlock={definitionBlock} />
    </>
  );
}
