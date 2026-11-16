export const SERVICES = [ // v2

  // ── RECURRING ────────────────────────────────────────────────────────────
  {
    id: "local_seo",
    name: "Essential: Local SEO & AEO",
    price: 750,
    priceLabel: "$750/mo",
    type: "recurring",
    badge: null,
    terms: "No setup fee. 3-month initial term, then month-to-month.",
    description:
      "Get found first when customers search, including on Google's AI results. We handle your Google Business Profile, local keywords, and citations so the right people find you before your competitors.",
    includes: [
      "Google Business Profile management (4 posts/mo)",
      "Local keyword tracking and reporting",
      "Citation building and cleanup",
      "Monthly blog/content article",
      "Answer Engine Optimization (AEO) for AI search",
      "Monthly ranking report",
    ],
  },
  {
    id: "growth",
    name: "Growth: AI + Local SEO",
    price: 1750,
    priceLabel: "$1,750/mo",
    type: "recurring",
    badge: "MOST POPULAR",
    terms: "No setup fee. Most popular.",
    foundingNote: "Founding clients: $1,500 per month locked 6 months. 10 spots. Founding pricing is applied at signup.",
    description:
      "Capture more leads and rank higher at the same time. An AI layer answers every inbound message in seconds, day or night, working alongside complete local SEO management.",
    includes: [
      "Everything in Essential",
      "Missed call text-back within 60 seconds",
      "Multi-step SMS/email nurture sequence",
      "Conversation AI bot (SMS + web chat)",
      "Appointment reminder automation",
      "Review request workflow",
      "Unified monthly performance report",
    ],
  },
  {
    id: "content_package",
    name: "Content Package (Essential Add-On)",
    price: 2500,
    priceLabel: "+$2,500/mo",
    type: "recurring",
    badge: "ADD-ON",
    terms: "Adds to Essential: $3,250 per month total.",
    description:
      "A monthly on-site media shoot plus content creation, delivered ready for you to post. Social media management and AI automation are not included. For $250 more, Complete adds AI automation and managed social posting.",
    includes: [
      "Monthly on-site media shoot",
      "Content creation from every shoot",
      "You post it on your own channels",
    ],
  },
  {
    id: "clarion_complete_stack",
    name: "Complete",
    price: 3500,
    priceLabel: "$3,500/mo",
    type: "recurring",
    badge: null,
    terms: "No setup fee.",
    foundingNote: "Founding clients: $3,000 per month locked 6 months. 10 spots. Founding pricing is applied at signup.",
    description:
      "AI automation, local SEO, monthly content, managed social posting on Instagram and Facebook, and a monthly on-site media shoot under one contract. Want TikTok, daily community management, and paid ads? See the Ads tier.",
    includes: [
      "Everything in Growth",
      "Monthly on-site media shoot (photos + video)",
      "Monthly content production (2 videos + photography)",
      "Managed posting on Instagram + Facebook",
      "Priority support and direct Slack access",
      "Quarterly strategy review",
      "All future service additions at no extra cost",
    ],
  },
  {
    id: "ads",
    name: "Ads: Complete + Paid Ads",
    price: 5500,
    priceLabel: "$5,500/mo",
    type: "recurring",
    badge: null,
    terms: "No setup fee.",
    description:
      "Everything in Complete plus TikTok, daily community management, and paid ads management on any two platforms you choose. We recommend the two that fit your business. $1,200 per month in ad spend is included.",
    includes: [
      "Everything in Complete",
      "TikTok",
      "Daily community management",
      "Paid ads management on two platforms of your choice (Meta, TikTok, Google, ChatGPT)",
      "$1,200/mo ad spend included, split across your two platforms",
      "All-in price: $1,200 ad spend + $4,300 management",
      "More than two platforms quoted per client",
    ],
  },
  {
    id: "custom",
    name: "Custom: Multi-Location & Enterprise",
    price: 0,
    priceLabel: "Priced per scope",
    type: "recurring",
    badge: null,
    inquiryOnly: true,
    terms: "Let's talk.",
    description:
      "Multiple locations or enterprise needs? We scope the work to your business and price it to match.",
    includes: [],
  },
  {
    id: "web_maintenance",
    name: "Website Maintenance Retainer",
    price: 200,
    priceLabel: "$200/mo",
    type: "recurring",
    badge: null,
    description:
      "Keep your site current without thinking about it. Monthly updates, fresh content, blog and GBP posts, and priority support so your site never goes stale.",
    includes: [
      "Up to 4 content updates per month",
      "Media uploads (photos & videos)",
      "Promotional content and seasonal updates",
      "Blog post publishing",
      "Google Business Profile posts (2/mo)",
      "Monthly site health check",
      "Priority response within 24 hours",
    ],
  },

  // ── ONE-TIME ─────────────────────────────────────────────────────────────
  {
    id: "crm_workflows",
    name: "CRM & AI Workflows Setup",
    price: 2500,
    priceLabel: "$2,500 one-time",
    type: "onetime",
    badge: null,
    inquiryOnly: true,
    description:
      "Stop losing leads in spreadsheets and inboxes. We build a CRM around how your business actually works, with automated follow-up and Conversation AI wired into your existing tools.",
    includes: [
      "CRM sub-account setup and configuration",
      "Custom pipeline stages for your business type",
      "Up to 3 automated workflows",
      "Conversation AI bot setup and training",
      "Integrations with existing tools",
      "Staff training and documentation handoff",
    ],
  },
  {
    id: "ai_audit",
    name: "Revenue Leak Assessment",
    price: 250,
    priceLabel: "$250 one-time",
    type: "onetime",
    badge: "START HERE",
    inquiryOnly: true,
    description:
      "Find exactly where your business is losing leads and revenue before you spend a dollar fixing it. A full assessment of your lead capture, follow-up, and online presence, a written 90-day action plan, and a one-hour readout call with Stan.",
    includes: [
      "Lead capture and follow-up audit across your customer journey",
      "Missed revenue opportunity mapping",
      "Tool and automation recommendations (vendor-neutral)",
      "Written findings report",
      "90-day revenue recovery roadmap",
      "1-hour readout call with Stan",
    ],
  },
  {
    id: "web_design_starter",
    name: "Web Design: Starter",
    price: 800,
    priceLabel: "$800 one-time",
    type: "onetime",
    badge: null,
    description:
      "A fast, professional site that actually brings in leads. Up to 5 pages, mobile-first, and structured for local search from day one.",
    includes: [
      "Up to 5 pages (Home, About, Services, Blog, Contact)",
      "Mobile-first responsive design",
      "SEO structure and schema markup",
      "Google Analytics integration",
      "Contact form + CRM integration",
      "30 days post-launch support",
    ],
  },
  {
    id: "web_design_pro",
    name: "Web Design: Pro",
    price: 1200,
    priceLabel: "$1,200 one-time",
    type: "onetime",
    badge: "RECOMMENDED",
    description:
      "A custom site built to win your market and feed your pipeline. Unlimited pages, advanced SEO architecture, and full integration with your automation platform.",
    includes: [
      "Unlimited pages",
      "Custom design system and animations",
      "Advanced SEO architecture",
      "Full chat widget + booking integration",
      "Blog setup with schema markup",
      "Google Analytics + GSC setup",
      "60 days post-launch support",
    ],
  },
];

export const CONFLICT_RULES = [
  {
    trigger: "clarion_complete_stack",
    conflicts: ["local_seo", "growth", "content_package", "ads"],
    message: "Complete already includes this service. It's been removed to avoid duplication.",
  },
  {
    trigger: "ads",
    conflicts: ["local_seo", "growth", "content_package", "clarion_complete_stack"],
    message: "Ads includes everything in Complete. Individual items have been removed.",
  },
  {
    trigger: "growth",
    conflicts: ["local_seo", "content_package", "clarion_complete_stack", "ads"],
    message: "Growth includes everything in Essential. Pick one tier.",
  },
  {
    trigger: "local_seo",
    conflicts: ["growth", "clarion_complete_stack", "ads"],
    message: "Pick one tier. The other tier has been removed.",
  },
  {
    trigger: "content_package",
    conflicts: ["growth", "clarion_complete_stack", "ads"],
    message: "The Content Package adds to Essential only. Complete already includes a monthly media shoot.",
  },
  {
    trigger: "web_design_starter",
    conflicts: ["web_design_pro"],
    message: "Please select one web design tier. Web Design Pro has been removed.",
  },
  {
    trigger: "web_design_pro",
    conflicts: ["web_design_starter"],
    message: "Please select one web design tier. Web Design Starter has been removed.",
  },
];

// Add-ons that only attach to a base tier. Adding one adds its base tier;
// removing the base tier removes the add-on.
export const ADDON_REQUIRES = {
  content_package: "local_seo",
};

// Essential + Content Package ($3,250) is $250 short of Complete ($3,500),
// which adds AI automation and managed social posting.
export const STACK_UPGRADE_TRIGGER = ["local_seo", "content_package"];
export const STACK_UPGRADE_TARGET = "clarion_complete_stack";
export const STACK_UPGRADE_MESSAGE =
  "Essential + Content Package is $3,250/mo. For $250 more, Complete adds AI automation and managed social posting.";

export const UPSELL_RULES = [
  {
    if_contains: "web_design_starter",
    not_contains: ["local_seo", "growth", "clarion_complete_stack", "ads"],
    suggest: "local_seo",
    message:
      "A new site needs traffic. Add Essential (Local SEO & AEO) to start ranking in McKinney and surrounding cities.",
  },
  {
    if_contains: "web_design_pro",
    not_contains: ["local_seo", "growth", "clarion_complete_stack", "ads"],
    suggest: "local_seo",
    message:
      "A new site needs traffic. Add Essential (Local SEO & AEO) to start ranking in McKinney and surrounding cities.",
  },
  {
    if_contains: "web_design_starter",
    not_contains: ["web_maintenance"],
    suggest: "web_maintenance",
    message:
      "Keep your new site fresh. Add Website Maintenance for $200/mo. We handle all updates, media, and promotions.",
  },
  {
    if_contains: "web_design_pro",
    not_contains: ["web_maintenance"],
    suggest: "web_maintenance",
    message:
      "Keep your new site fresh. Add Website Maintenance for $200/mo. We handle all updates, media, and promotions.",
  },
];

// Checkout only sells items listed here. Inquiry-only items (Custom, CRM & AI
// Workflows Setup, Revenue Leak Assessment) have no Stripe price.
export const STRIPE_PRICE_IDS = {
  local_seo:              "price_1Tdj5zJna7IpsZuzXbVNKGiq",
  growth:                 "price_1Tdj6iJna7IpsZuzIMYNNId8",
  content_package:        "price_1TTowhJna7IpsZuzBxUUvVWI",
  clarion_complete_stack: "price_1UcWqEJna7IpsZuzuw2zzczB",
  ads:                    "price_1Tf2AsJna7IpsZuzOcsB1Y9P",
  web_design_starter:     "price_1Tdj2WJna7IpsZuzVkGb8TWf",
  web_design_pro:         "price_1Tdj3dJna7IpsZuziJri50W7",
  web_maintenance:        "price_1Tdz7UJna7IpsZuzPCRkvvjH",
};
