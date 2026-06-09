import CityLocalSeoPage from "@/components/CityLocalSeoPage";

const SITE_URL = "https://www.clarionsol.com";
const slug = "local-seo-mckinney-tx";
const city = "McKinney";

const intro =
  "McKinney is Clarion Solutions' home market, and we know it better than any agency in the area. From the historic downtown square to the growing developments along US-380 and Eldorado Parkway, McKinney businesses are competing for customers who research everything online before picking up the phone. We help McKinney businesses rank first, dominate the map pack, and turn local Google searches into booked calls and appointments.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/${slug}/#service`,
      name: `Local SEO Services in ${city}, TX`,
      description: `Local SEO for businesses in ${city}, TX: Google Business Profile optimization, local keyword targeting, citation building, and monthly content. Clarion Solutions is based in McKinney, TX.`,
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
  description: `${city}'s local SEO agency. GBP management, keyword targeting, citation building & monthly SEO content for McKinney businesses. Veteran-owned. Book a free strategy call.`,
  alternates: { canonical: `${SITE_URL}/${slug}` },
  openGraph: {
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `${city}'s local SEO agency. GBP management, keyword targeting, citation building & monthly SEO content for McKinney businesses. Veteran-owned.`,
    url: `${SITE_URL}/${slug}`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `Local SEO Services in ${city}, TX | Clarion Solutions` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Local SEO Services in ${city}, TX | Clarion Solutions`,
    description: `${city}'s local SEO agency. GBP management, keyword targeting, citation building & monthly SEO content for McKinney businesses. Veteran-owned.`,
  },
};

const localContext = {
  heading: "The McKinney Market",
  body: [
    "McKinney has built one of the most diverse and active small business ecosystems in Collin County. From established service businesses in the historic downtown square to the newer commercial corridors opening along US-380 and Craig Ranch Parkway, there is no shortage of opportunity. But there is also no shortage of competition. Businesses that rank well on Google in McKinney tend to stay booked. Those that do not end up relying on referrals and hoping the phone rings.",
    "We work with McKinney businesses across home services, healthcare, fitness, restaurants, and professional services. The categories that see the most search volume locally are plumbing, HVAC, dental, roofing, landscaping, and auto repair. The ranking fundamentals are the same regardless of category: Google Business Profile authority, citation consistency, and locally relevant content are the foundation of every position we build.",
    "Because McKinney is our home base, we have a ground-level understanding of what customers here are actually searching for and which competitors are showing up. That local knowledge accelerates results and shapes better strategy for every business we work with in this market.",
  ],
};

const localContext2 = {
  heading: "McKinney's Neighborhoods and Commercial Zones",
  body: [
    "McKinney's geography creates distinct local search markets within the city limits. The historic downtown square, surrounded by restaurants, boutiques, and professional offices anchored by the Collin County courthouse, generates a high volume of experience-driven and near-me searches. Businesses located downtown, or those able to credibly associate with the downtown area, benefit from a strong local identity that translates directly to map pack rankings and organic visibility.",
    "Craig Ranch and the commercial corridors along Stonebridge Drive serve McKinney's most affluent western neighborhoods. Stonebridge Ranch residents are high-frequency local service buyers with strong online research habits. The US-380 corridor running east-west across northern McKinney is where the city's commercial growth edge currently sits, with significant retail and service development filling in alongside rapid residential expansion. Businesses establishing themselves along US-380 now are entering a corridor that will carry substantially more traffic in five years.",
    "Eldorado Parkway, Virginia Parkway, and Lake Forest Drive serve established mid-McKinney neighborhoods that generate consistent search volume across all service categories. East McKinney, where newer affordable developments are bringing in younger families, is an underserved market in terms of local business visibility. Businesses that establish their Google presence in east McKinney are positioning ahead of the development curve.",
  ],
};

const whyLocalSeo = {
  heading: "Why McKinney's Growth Creates a Continuing SEO Opportunity",
  body: [
    "McKinney has been among the fastest-growing large cities in the United States for the better part of a decade, and that growth has not plateaued. New residents arrive constantly, the majority relocating from other states with no existing relationships with local service providers. Every new McKinney household is a fresh local search customer who will find their plumber, dentist, landscaper, and gym the same way they find everything else: Google. The businesses already ranking when these residents search fill their calendars.",
    "McKinney's growth also creates ongoing first-mover opportunity in the newer commercial corridors. US-380, east McKinney, and the areas around Highways 5 and 121 are all in active development. A local SEO strategy built today around an expanding market earns authority as the market grows, which means the investment compounds rather than simply maintaining position. McKinney rewards early movers at both the city-wide and corridor-specific level.",
  ],
};

const faq = [
  {
    q: "How long does local SEO take in McKinney, TX?",
    a: "Most McKinney businesses see measurable ranking movement within 60 to 90 days. As our home market, we have a particularly clear view of McKinney's competitive landscape and tend to identify keyword opportunities faster here. Sustained top-three positions in competitive categories typically take 4 to 6 months.",
  },
  {
    q: "Do I need a McKinney address to rank in McKinney?",
    a: "A McKinney address is a strong asset for map pack rankings. For service businesses operating nearby who serve McKinney customers, we build GBP service areas and locally targeted content that improves your visibility for McKinney searches. We know this market well enough to get results on both sides of that equation.",
  },
  {
    q: "How much does local SEO cost in McKinney, TX?",
    a: "Clarion Solutions offers local SEO starting at $2,000 per month as part of our AI + Local SEO package. McKinney is our home market, which means we start with real competitive intelligence rather than having to learn your landscape from scratch. Free strategy call before any commitment.",
  },
  {
    q: "What makes Clarion Solutions different from other McKinney SEO agencies?",
    a: "McKinney is where we are based. We know this market the way a local business owner knows their neighborhood, because we are one. We combine local SEO with AI automation, report transparently every month, and limit our client roster so every business gets genuine strategic attention, not just a report.",
  },
];

const definitionBlock = "Local SEO in McKinney means showing up when residents search for businesses like yours on Google. With McKinney growing faster than almost any city in Texas, the businesses that establish their search presence now fill their pipelines with customers who have no existing provider relationships and are ready to book.";

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
