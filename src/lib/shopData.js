export const SERVICES = [
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
    price: 2500,
    priceLabel: "$2,500 one-time",
    type: "onetime",
    badge: "START HERE",
    description:
      "A full assessment of your business operations to identify where AI can have the highest impact. Includes written report and 90-day roadmap.",
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
    conflicts: ["ai_automation", "local_seo", "crm_workflows", "managed_ai"],
    message:
      "Clarion Complete Stack already includes this service. It's been removed to avoid duplication.",
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
  "You've selected AI Automation + Local SEO. The Clarion Complete Stack includes both plus media production for $4,500/mo — saving you $750/mo.";

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

// Stripe price IDs — fill these in after creating products in Stripe dashboard
export const STRIPE_PRICE_IDS = {
  ai_automation: "price_XXXX",
  local_seo: "price_XXXX",
  clarion_complete_stack: "price_XXXX",
  managed_ai: "price_XXXX",
  crm_workflows: "price_XXXX",
  ai_audit: "price_XXXX",
  web_design_starter: "price_XXXX",
  web_design_pro: "price_XXXX",
};
