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
      "Stop losing leads to missed calls and slow follow-up. An AI layer answers every inbound message in seconds, day or night, and works every lead until they book.",
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
    id: "ai_local_seo_bundle",
    name: "AI + Local SEO Bundle",
    price: 2000,
    priceLabel: "$2,000/mo",
    type: "recurring",
    badge: "SAVE $250/MO",
    description:
      "Capture more leads and rank higher at the same time, for $250 less than buying both separately. The full lead-capture system plus complete local SEO management, working together.",
    includes: [
      "Everything in AI Automation",
      "Everything in Local SEO & AEO",
      "Unified monthly performance report",
      "Save $250/mo vs buying separately",
    ],
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
  {
    id: "clarion_complete_stack",
    name: "Clarion Complete Stack",
    price: 4500,
    priceLabel: "$4,500/mo",
    type: "recurring",
    badge: null,
    description:
      "Everything handled, so you can run your business instead of your marketing. AI automation, local SEO, content, and professional media under one roof and one contract.",
    includes: [
      "Everything in AI Automation",
      "Everything in Local SEO & AEO",
      "Monthly on-site media shoot (photos + video)",
      "Monthly content production (2 videos + photography)",
      "Priority support and direct Slack access",
      "Quarterly strategy review",
      "All future service additions at no extra cost",
    ],
  },
  {
    id: "managed_ai",
    name: "AI Automation Retainer",
    price: 1500,
    priceLabel: "$1,500/mo",
    type: "recurring",
    badge: null,
    description:
      "Already had your AI system built? We keep it running. Ongoing monitoring, tuning, and improvements to the automations and CRM workflows we set up, with monthly reporting so everything keeps performing as your business grows. Pairs with the one-time CRM & AI Workflows Setup. If you want the system built and run together from day one, AI Automation is the simpler path.",
    includes: [
      "Monthly performance monitoring and reporting",
      "Workflow tuning and optimization",
      "AI vendor management",
      "Priority issue resolution",
      "Continuous improvement cycles",
    ],
  },
  {
    id: "presence_takeover",
    name: "Total Online Presence Takeover",
    price: 9500,
    priceLabel: "$9,500/mo",
    type: "recurring",
    badge: "BEST VALUE",
    description:
      "Own your market completely, with zero effort on your end. Every channel managed, every asset produced, every lead captured. You focus on the work, we run the entire presence.",
    includes: [
      "Everything in Clarion Complete Stack",
      "Monthly on-site media shoot (photos + video)",
      "Short-form video editing (Reels, TikTok, Shorts)",
      "Social media management (IG + FB + TikTok)",
      "Caption writing + hashtag strategy",
      "Content calendar and posting schedule",
      "DM and comment monitoring",
      "Google Ads management",
      "Meta Ads management",
      "TikTok Ads management",
      "$3,000/mo ad spend included",
      "Landing page optimization",
      "Retargeting setup and management",
      "Weekly performance optimization",
      "Unified performance dashboard",
      "Dedicated point of contact",
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
    name: "AI Readiness Audit",
    price: 250,
    priceLabel: "$250 one-time",
    type: "onetime",
    badge: "START HERE",
    description:
      "Know exactly where AI will make you money before you spend a dollar on it. A full assessment of your operations, a written 90-day roadmap, and a one-hour readout call with Stan.",
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
    name: "Web Design — Pro",
    price: 2000,
    priceLabel: "$2,000 one-time",
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
    conflicts: ["ai_automation", "local_seo", "ai_local_seo_bundle", "crm_workflows", "managed_ai", "presence_takeover"],
    message:
      "Clarion Complete Stack already includes this service. It's been removed to avoid duplication.",
  },
  {
    trigger: "presence_takeover",
    conflicts: ["clarion_complete_stack", "ai_automation", "local_seo", "ai_local_seo_bundle", "managed_ai"],
    message:
      "Total Online Presence Takeover includes all of these services. Individual items have been removed.",
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
    message: "AI Automation Retainer is already included in the Clarion Complete Stack.",
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
      "AI Automation Retainer works best when paired with an active automation package.",
  },
  {
    if_contains: "web_design_starter",
    not_contains: ["web_maintenance"],
    suggest: "web_maintenance",
    message:
      "Keep your new site fresh. Add Website Maintenance for $200/mo — we handle all updates, media, and promotions.",
  },
  {
    if_contains: "web_design_pro",
    not_contains: ["web_maintenance"],
    suggest: "web_maintenance",
    message:
      "Keep your new site fresh. Add Website Maintenance for $200/mo — we handle all updates, media, and promotions.",
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
  web_maintenance:        "price_1Tdz7UJna7IpsZuzPCRkvvjH",
  presence_takeover:      "price_1Tf2AsJna7IpsZuzOcsB1Y9P",
};
