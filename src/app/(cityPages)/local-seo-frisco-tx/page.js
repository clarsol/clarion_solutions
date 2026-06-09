import CityLocalSeoPage from "@/components/CityLocalSeoPage";

const SITE_URL = "https://www.clarionsol.com";
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

const localContext2 = {
  heading: "Frisco's Commercial Districts, Corridor by Corridor",
  body: [
    "Frisco's growth has created distinct commercial pockets with their own search dynamics. The Legacy Corridor along Warren Parkway and Gaylord Parkway is home to corporate campuses and dense office development that drives strong demand for professional services, restaurants, and healthcare. Businesses in this zone compete against regional and national players who have been building their local SEO authority for years. Ranking here requires a strategy built for this level of competition.",
    "Stonebriar Centre and the Preston Road corridor anchor West Frisco's most established residential neighborhoods. The DNT corridor between Main Street and Eldorado Parkway is where the highest concentration of B2B and professional services demand sits. East Frisco, built around FC Dallas and Toyota Stadium, skews younger and entertainment-oriented. Each zone generates distinct search patterns, and the strongest local SEO strategies in Frisco target neighborhood-level specificity rather than just the city name.",
    "Phillips Creek Ranch, Starwood, Newman Village, and Plantation Resort are among Frisco's higher-income residential communities generating consistent search volume for premium services. Businesses able to connect their GBP and content strategy to specific Frisco neighborhoods tend to outperform those targeting broad city-level searches, particularly in categories where trust and local credibility matter most.",
  ],
};

const whyLocalSeo = {
  heading: "Why Frisco Is the Hardest Local Market to Crack",
  body: [
    "Frisco consistently ranks among the highest-income suburban markets in the Dallas metro. The median household income and per-capita spending here mean the customers are worth competing for. It also means your competitors are spending real money on marketing. National chains, regional franchises, and well-funded local operators have been investing in GBP authority and local citations for years. Ranking in Frisco's most competitive categories requires a strategy built for that level of competition, not one designed for a less contested market.",
    "The businesses that dominate Frisco's map pack today started their SEO work years ago. The businesses that will dominate it in three years are starting now. Waiting is not a neutral decision. Every month without a local SEO strategy is a month of authority your competitors are accumulating. Frisco rewards sustained, well-executed SEO work. It does not wait for businesses that are not ready to compete.",
  ],
};

const faq = [
  {
    q: "How long does local SEO take in Frisco, TX?",
    a: "Most Frisco businesses see ranking movement within 60 to 90 days. Because Frisco is one of the most competitive local markets in North Texas, reaching sustained top-three map pack positions in high-demand categories typically takes 4 to 6 months of consistent execution. The payoff is proportional to how competitive the category is.",
  },
  {
    q: "Do I need a Frisco address to rank in Frisco?",
    a: "A Frisco address is a significant asset for map pack rankings. Without one, strong organic rankings and GBP service area coverage can still capture Frisco searches. We have helped businesses located in Plano and McKinney rank effectively for Frisco searches with targeted, well-built strategy.",
  },
  {
    q: "How much does local SEO cost in Frisco, TX?",
    a: "Clarion Solutions offers local SEO starting at $2,000 per month as part of our AI + Local SEO package. In Frisco's competitive environment, we recommend at least 6 months of consistent execution to see the full return. Free strategy call before any commitment. No long-term contracts.",
  },
  {
    q: "What makes Clarion Solutions different from other Frisco SEO agencies?",
    a: "We are a veteran-owned agency based in McKinney, TX, 15 minutes from Frisco. We work in this market every day and have the depth of strategy that Frisco's competition demands. National franchises and remote agencies treat Frisco like any other zip code. We know the specific corridors, competitors, and search dynamics here.",
  },
];

const definitionBlock = "Local SEO in Frisco, TX means ranking in Google's map pack and local search results when nearby customers search for your services. Clarion Solutions helps Frisco businesses get found before their competitors in one of the most competitive and fastest-growing commercial markets in North Texas.";

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
