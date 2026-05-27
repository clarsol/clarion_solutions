import CityLocalSeoPage from "@/components/CityLocalSeoPage";

const SITE_URL = "https://www.clarionsol.com";
const slug = "local-seo-celina-tx";
const city = "Celina";

const intro =
  "Celina is one of the fastest-growing cities in Texas, and the businesses establishing their local SEO presence now along Preston Road and the US-380 corridor will own their categories before competition catches up. With new residential developments arriving at a pace few North Texas cities can match, the window to rank first in Celina is still wide open. Clarion Solutions helps Celina businesses build that foundation before the market fills in.";

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
  description: `Get ahead in ${city}, TX before the market fills up. GBP management, keyword targeting, citation building & local SEO content for Celina businesses. Free strategy call.`,
  alternates: { canonical: `${SITE_URL}/${slug}` },
  openGraph: {
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Get ahead in ${city}, TX before the market fills up. GBP management, keyword targeting, citation building & local SEO content for Celina businesses.`,
    url: `${SITE_URL}/${slug}`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `Local SEO Services in ${city}, TX | Clarion Solutions` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `Get ahead in ${city}, TX before the market fills up. GBP management, keyword targeting, citation building & local SEO content for Celina businesses.`,
  },
};

const localContext = {
  heading: "The Celina Market",
  body: [
    "Celina has been one of the fastest-growing cities in the entire United States for several consecutive years. The Preston Road corridor from US-380 north through Celina has become one of the most active development zones in Collin County, with master-planned communities, retail corridors, and commercial construction all accelerating in parallel. Every new household arriving on this corridor is a potential customer searching Google for services they need.",
    "The competitive landscape in Celina is still relatively open compared to more established Collin County markets. Most categories here do not yet have dominant local players with deep SEO histories. A business that builds its local search presence now can establish map pack and organic rankings that will be extremely difficult to displace as the city continues to grow. This is the same first-mover window that closed in Frisco and Allen years ago.",
    "We work with Celina businesses who understand that planting the flag today means owning the market tomorrow. Our approach focuses on getting your GBP right, building citation authority across the directories that matter, and creating content that positions you as the clear answer for your category in Celina and the surrounding corridor.",
  ],
};

const localContext2 = {
  heading: "Celina's Growth Corridors and Search Geography",
  body: [
    "Celina's commercial development has concentrated along Preston Road and the US-380 corridor, with Light Farms, Mustang Lakes, and other large master-planned communities driving residential density north and west of the historic downtown. These residents arrive from established Collin County cities and bring digital-first habits. They search for local services from the moment they move in, and most Celina businesses are not yet positioned to capture that demand.",
    "The Preston Road frontage from US-380 north is seeing consistent new commercial development, including medical offices, dental practices, service businesses, and retail. The businesses establishing a local SEO presence here now are building authority before their competitors even open their doors. That gap between a fast-growing search audience and limited optimized competition is exactly the kind of first-mover opportunity that closes as markets mature.",
    "Celina's proximity to McKinney, Frisco, and Prosper means some residents search with location modifiers that extend beyond Celina's city limits. An effective local SEO strategy accounts for this by targeting both explicit Celina searches and the broader corridor searches that capture residents regardless of the specific city name they use.",
  ],
};

const whyLocalSeo = {
  heading: "The Celina First-Mover Advantage",
  body: [
    "In most Collin County markets, the window to establish first-mover search dominance has already closed. In Celina, it has not. The city's population growth rate has ranked among the fastest in Texas for multiple consecutive years, and residential development is still accelerating along the Preston Road corridor. Businesses that build authoritative GBP listings, consistent local citations, and city-specific content today are creating positions that will be progressively harder to displace as more competitors arrive.",
    "What costs a modest investment to establish today could cost significantly more in two or three years when the market has established players with years of accumulated SEO authority. The businesses that waited in Frisco and Allen are now fighting uphill. Celina businesses have the opportunity to be on the other side of that equation, building from the top rather than chasing their way up.",
  ],
};

const faq = [
  {
    q: "How long does local SEO take in Celina, TX?",
    a: "Celina businesses often see ranking movement faster than businesses in more competitive markets. Most clients see measurable results within 45 to 60 days. Because the local search landscape in Celina is still relatively open, the path to top map pack positions is shorter than in more established Collin County cities like Frisco or Plano.",
  },
  {
    q: "Do I need a Celina address to rank in Celina?",
    a: "A local Celina address helps significantly for map pack rankings, particularly for searches with explicit Celina, TX location modifiers. If you serve Celina from nearby McKinney or Frisco, we can build GBP service area coverage and locally targeted content that improves your visibility for Celina searches.",
  },
  {
    q: "How much does local SEO cost in Celina, TX?",
    a: "Clarion Solutions offers local SEO starting at $2,500 per month as part of our AI + Local SEO package. Celina's lower competitive density means the investment works harder here than in more saturated markets. Free strategy call before any commitment.",
  },
  {
    q: "What makes Clarion Solutions different from other Celina SEO agencies?",
    a: "We are a veteran-owned agency based in McKinney, TX, directly south of Celina on the Preston Road corridor. We understand the North Collin County growth market from the inside and work with businesses throughout it. We combine local SEO with AI automation, report clearly every month, and keep a small enough client base to give every business consistent, real attention.",
  },
];

const definitionBlock = "Local SEO in Celina, TX means ranking in Google's map pack and local search results when nearby customers search for your services. Clarion Solutions helps Celina businesses establish their local search presence early in one of the fastest-growing markets in Texas, where businesses that show up first now will hold that position as the city continues its rapid expansion along the Preston Road corridor.";

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
