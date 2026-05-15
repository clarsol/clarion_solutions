import CityLocalSeoPage from "@/components/CityLocalSeoPage";

const SITE_URL = "https://www.clarionsol.com";
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

const localContext2 = {
  heading: "Plano's Business Districts and Search Geography",
  body: [
    "Plano's commercial geography breaks into three distinct zones, each with its own search character. West Plano, built around Legacy West and the corporate campuses along the Dallas North Tollway, draws an affluent professional demographic that researches every purchase decision before committing. This is where competition for map pack placement is most intense and where strong local SEO delivers the highest per-customer value for service businesses.",
    "Central Plano, anchored by the Preston Road and Spring Creek Parkway corridors, contains the bulk of the city's established residential neighborhoods. Businesses serving these areas compete for a customer base embedded in the community that tends to stay loyal once they find a trusted provider. Getting found first is the critical step. East Plano, including the areas around Haggard Park and downtown Plano, has a growing dining and arts character that generates its own distinct local search patterns.",
    "Old Town Plano deserves specific attention for businesses operating in that pocket. The walkable commercial district has a loyal local following and generates search behavior distinct from the rest of the city. Neighborhood-specific searches originating from Old Town can outperform broader Plano-wide targeting for the right category. Understanding where your customers actually are in Plano shapes a meaningfully better strategy.",
  ],
};

const whyLocalSeo = {
  heading: "Why Plano Requires a More Sophisticated SEO Approach",
  body: [
    "Plano's consumer base includes a high concentration of corporate professionals who apply the same research standards to local service decisions that they bring to business choices. They read reviews thoroughly, compare multiple providers, and make decisions based on visible expertise and credibility signals. Showing up in the map pack is necessary, but it is not sufficient on its own. Your GBP needs strong reviews, accurate information, and consistent activity. Your website needs to signal local authority at a level that matches what Plano customers expect.",
    "Plano also has years of established SEO history among its strongest local competitors. Displacing them requires a systematic, patient approach, not a one-month sprint. The businesses winning in Plano's search results have been consistent for a long time. The path to joining them is the same: build the right foundation, create relevant content, and stay consistent. Plano rewards that work more generously than almost any other market in North Texas because the customers here are worth more per transaction.",
  ],
};

const faq = [
  {
    q: "How long does local SEO take in Plano, TX?",
    a: "Most Plano businesses see ranking movement within 60 to 90 days. Plano's established competitive landscape means that sustainable top positions in high-demand categories like healthcare, legal services, or home services typically take 4 to 6 months of consistent execution. The advantage once established is significant and defensible.",
  },
  {
    q: "Do I need a Plano address to rank in Plano?",
    a: "A Plano address is a strong asset for map pack rankings. Plano's geographic size also means we can target specific neighborhoods like Legacy West, Old Town, or East Plano depending on where your business operates and which customers represent the most value for your category.",
  },
  {
    q: "How much does local SEO cost in Plano, TX?",
    a: "Clarion Solutions offers local SEO starting at $2,500 per month as part of our AI + Local SEO package. Plano's competitive environment rewards consistency. We recommend at least 3 to 6 months before evaluating results, and we are transparent about rankings and progress every month. Free strategy call before any commitment.",
  },
  {
    q: "What makes Clarion Solutions different from other Plano SEO agencies?",
    a: "We are a veteran-owned agency based in McKinney, directly adjacent to Plano on US-75. We work with North Dallas businesses specifically and understand Plano's distinct commercial zones at a level that remote or national agencies cannot match. We combine local SEO with AI automation and report clearly every month.",
  },
];

const definitionBlock = "Local SEO in Plano, TX means ranking in Google's map pack and local search results when nearby customers search for your services. Clarion Solutions helps Plano businesses get found before their competitors in a dense, competitive market where strong local search presence directly drives calls and booked appointments.";

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
