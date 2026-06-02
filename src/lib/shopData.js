export const SERVICES = [ // v2

  // ── RECURRING ────────────────────────────────────────────────────────────
  {
    id: "ai_automation",
    name: "AI Automation",
    price: 1500,
    priceLabel: "$1,500/mo",
    type: "recurring",
    badge: "MOST POPULAR",
    description:
      "Missed call text-back, lead nurture sequences, Conversation AI bot, appointment reminders, and post-service follow-up running 24/7.",
    includes: [
      "Missed call text-back within 60 seconds",
      "Multi-step SMS/email nurture sequence",
      "Conversation AI bot (SMS + web chat)",
      "Appointment reminder automation",
      "Review request workflow",
      "Monthly performance report",
    ],
  },
  {
    id: "local_seo",
    name: "Local SEO & AEO",
    price: 750,
    priceLabel: "$750/mo",
    type: "recurring",
    badge: null,
    description:
      "Google Business Profile management, local keyword targeting, citation building, and AI-optimized content monthly.",
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
    id: "ai_local_seo_bundle",
    name: "AI + Local SEO Bundle",
    price: 2000,
    priceLabel: "$2,000/mo",
    type: "recurring",
    badge: "SAVE $250/MO",
    description:
      "Missed call text-back, lead nurture, Conversation AI, and full local SEO management — bundled at a discount.",
    includes: [
      "Everything in AI Automation",
      "Everything in Local SEO & AEO",
      "Unified monthly performance report",
      "Save $250/mo vs buying separately",
    ],
  },
  {
    id: "clarion_complete_stack",
    name: "Clarion Complete Stack",
    price: 4500,
    priceLabel: "$4,500/mo",
    type: "recurring",
    badge: "BEST VALUE",
    description:
      "The done-for-you growth system. AI automation, local SEO, content production, and professional media under one contract.",
    includes: [
      "Everything in AI Automation",
      "Everything in Local SEO & AEO",
      "Monthly content production (2 videos + photography)",
      "Priority support and direct Slack access",
      "Quarterly strategy review",
      "All future service additions at no extra cost",
    ],
  },
  {
    id: "managed_ai",
    name: "Managed AI Services",
    price: 1500,
    priceLabel: "$1,500/mo",
    type: "recurring",
    badge: null,
    description:
      "Ongoing management, monitoring, and optimization of your deployed AI systems. Monthly reporting, workflow tuning, and continuous improvement.",
    includes: [
      "Monthly performance monitoring and reporting",
      "Workflow tuning and optimization",
      "AI vendor management",
      "Priority issue resolution",
      "Continuous improvement cycles",
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
    description:
      "Custom CRM system built around your business with pipeline management, automated follow-ups, Conversation AI, and full tool integration.",
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
    name: "AI Readiness Audit",
    price: 250,
    priceLabel: "$250 one-time",
    type: "onetime",
    badge: "START HERE",
    description:
      "A full assessment of your business operations to identify where AI can have the highest impact. Includes written report, 90-day roadmap, and a 1-hour readout call with Stan.",
    includes: [
      "Workflow assessment across your key departments/processes",
      "Automation opportunity mapping",
      "AI tool recommendations (vendor-neutral)",
      "Written findings report",
      "90-day implementation roadmap",
      "1-hour readout call with Stan",
    ],
  },
  {
    id: "web_design_starter",
    name: "Web Design — Starter",
    price: 2500,
    priceLabel: "$2,500 one-time",
    type: "onetime",
    badge: null,
    description:
      "A fast, mobile-first, SEO-structured website built in Next.js. Up to 5 pages, optimized for local search and lead generation.",
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
    name: "Web Design — Pro",
    price: 5000,
    priceLabel: "$5,000 one-time",
    type: "onetime",
    badge: "RECOMMENDED",
    description:
      "A full custom website build with unlimited pages, advanced SEO architecture, animations, and full automation platform integration.",
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
    conflicts: ["ai_automation", "local_seo", "ai_local_seo_bundle", "crm_workflows", "managed_ai"],
    message:
      "Clarion Complete Stack already includes this service. It's been removed to avoid duplication.",
  },
  {
    trigger: "ai_local_seo_bundle",
    conflicts: ["ai_automation", "local_seo", "clarion_complete_stack"],
    message:
      "AI + Local SEO Bundle includes these services. Individual items have been removed.",
  },
  {
    trigger: "ai_automation",
    conflicts: ["clarion_complete_stack"],
    message:
      "AI Automation is already included in the Clarion Complete Stack.",
  },
  {
    trigger: "local_seo",
    conflicts: ["clarion_complete_stack"],
    message: "Local SEO & AEO is already included in the Clarion Complete Stack.",
  },
  {
    trigger: "crm_workflows",
    conflicts: ["clarion_complete_stack"],
    message: "CRM & AI Workflows is already included in the Clarion Complete Stack.",
  },
  {
    trigger: "managed_ai",
    conflicts: ["clarion_complete_stack"],
    message: "Managed AI Services is already included in the Clarion Complete Stack.",
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

// When both ai_automation + local_seo are in cart, suggest stack upgrade
export const STACK_UPGRADE_TRIGGER = ["ai_automation", "local_seo"];
export const STACK_UPGRADE_MESSAGE =
  "You have AI Automation + Local SEO selected. Bundle them together for $2,000/mo and save $250/mo.";

export const UPSELL_RULES = [
  {
    if_contains: "ai_audit",
    not_contains: ["crm_workflows"],
    suggest: "crm_workflows",
    message:
      "Ready to act on your audit? Add CRM & AI Workflows setup and we'll implement your top recommendations.",
  },
  {
    if_contains: "crm_workflows",
    not_contains: ["ai_automation"],
    suggest: "ai_automation",
    message:
      "Keep the momentum going. Add AI Automation to manage and optimize your new system monthly.",
  },
  {
    if_contains: "web_design_starter",
    not_contains: ["local_seo"],
    suggest: "local_seo",
    message:
      "A new site needs traffic. Add Local SEO & AEO to start ranking in McKinney and surrounding cities.",
  },
  {
    if_contains: "web_design_pro",
    not_contains: ["local_seo"],
    suggest: "local_seo",
    message:
      "A new site needs traffic. Add Local SEO & AEO to start ranking in McKinney and surrounding cities.",
  },
  {
    if_contains: "managed_ai",
    not_contains: ["ai_automation", "crm_workflows"],
    suggest: "ai_automation",
    message:
      "Managed AI Services works best when paired with an active automation package.",
  },
];

export const STRIPE_PRICE_IDS = {
  ai_automation:          "price_1TTp6qJna7IpsZuzPpWl4NtV",
  local_seo:              "price_1Tdj5zJna7IpsZuzXbVNKGiq",
  clarion_complete_stack: "price_1TToyFJna7IpsZuzu2wo5IE9",
  managed_ai:             "price_1Tdj6iJna7IpsZuzIMYNNId8",
  ai_local_seo_bundle:    "price_1TTowhJna7IpsZuzBxUUvVWI",
  crm_workflows:          "price_1Tdj1UJna7IpsZuzBiLDUV16",
  ai_audit:               "price_1Tdy5xJna7IpsZuzulHydivX",
  web_design_starter:     "price_1Tdj2WJna7IpsZuzVkGb8TWf",
  web_design_pro:         "price_1Tdj3dJna7IpsZuziJri50W7",
};
