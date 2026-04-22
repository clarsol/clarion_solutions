export const serviceList = [
  { slug: "clarion-complete-stack",   name: "Clarion Complete Stack"   },
  { slug: "local-seo",                name: "Local SEO"                },
  { slug: "ai-automation",            name: "AI Automation"            },
  { slug: "web-design",               name: "Web Design"               },
  { slug: "media-production",         name: "Media Production"         },
  { slug: "ai-workflows",             name: "AI Workflows"             },
];

export const services = {
  "local-seo": {
    slug: "local-seo",
    name: "Local SEO",
    eyebrow: "Local SEO · McKinney, TX",
    headline: "Local SEO McKinney TX.",
    headlineItalic: "Get Found First.",
    subtext:
      "We help North Dallas businesses dominate Google search and the local map pack — so the right customers find you before they find anyone else.",

    includes: [
      { title: "Google Business Profile", desc: "Full optimization and ongoing management of your GBP — photos, posts, Q&A, categories, and service areas." },
      { title: "Local Keyword Research",  desc: "We find the exact terms your customers use to search for businesses like yours in McKinney, Frisco, Allen, and beyond." },
      { title: "On-Page SEO",             desc: "Title tags, meta descriptions, header structure, and content optimization across every page of your site." },
      { title: "Technical SEO",           desc: "Site speed, mobile usability, crawlability, schema markup, and Core Web Vitals — cleaned up and kept current." },
      { title: "Citation Building",       desc: "Consistent business listings across Yelp, Apple Maps, Bing, and hundreds of relevant directories." },
      { title: "Monthly Content",         desc: "GBP posts, local landing pages, and blog content that targets your keywords and builds local authority over time." },
      { title: "Competitor Tracking",     desc: "We monitor your top competitors' rankings and identify gaps so you always know where the next opportunity is." },
      { title: "Monthly Reports",         desc: "Plain-English reporting on rankings, traffic, and GBP performance — the things that matter, clearly explained." },
    ],

    whoFor: {
      intro: "Local SEO is built for businesses that depend on customers in a specific area finding them online.",
      points: [
        "Service businesses — contractors, plumbers, HVAC, electricians, roofers",
        "Medical, dental, legal, and professional practices",
        "Retail and brick-and-mortar businesses in McKinney, Frisco, Allen, or Plano",
        "Businesses currently getting outranked by competitors with worse services",
        "New businesses that need to establish a local presence fast",
      ],
    },

    process: [
      { num: "01", title: "Audit & Baseline",     desc: "We analyze your current rankings, GBP setup, technical health, and citation landscape — then benchmark against your top competitors." },
      { num: "02", title: "Foundation Build",      desc: "We fix technical issues, fully optimize your GBP, and build citation consistency across the web. This is the work that makes everything else land." },
      { num: "03", title: "Content & Authority",   desc: "We create local content targeting your best keyword opportunities and building topical authority over time — consistent and compounding." },
      { num: "04", title: "Track & Refine",        desc: "Monthly ranking reports, GBP insights, and strategy adjustments based on what's moving and what isn't. No guessing." },
    ],

    pricing: [
      {
        badge: "Always Free",
        title: "Free SEO Audit",
        price: "$0",
        priceNote: "included with every discovery call",
        features: [
          "Current rankings review",
          "Google Business Profile audit",
          "Competitor landscape snapshot",
          "Keyword opportunity identification",
          "Recommendations & action plan",
        ],
        cta: "Book a Call",
        ctaStyle: "primary",
      },
      {
        badge: "Best Value",
        title: "AI + Local SEO",
        price: "$2,500",
        priceNote: "per month · no setup fee · cancel anytime",
        features: [
          "Google Business Profile management",
          "Local SEO — keywords, citations, content",
          "Monthly content creation & GBP posts",
          "Competitor gap analysis",
          "AI lead capture & follow-up included",
          "Full SEO & AI performance reporting",
        ],
        cta: "Get Started",
        ctaStyle: "primary",
      },
    ],

    faq: [
      { q: "How long does it take to see results from local SEO?",         a: "Most clients start seeing ranking movement within 60–90 days. Meaningful results — more calls, more map pack appearances — typically show up around the 3–6 month mark. Local SEO compounds over time, so the longer you stay consistent, the stronger your position becomes." },
      { q: "Do I need to be based in McKinney for you to work with me?",   a: "No. We serve businesses throughout the North Dallas corridor — Frisco, Allen, Plano, Anna, and surrounding areas. If you're a local service business anywhere in the region, we can help you rank for the areas you actually serve." },
      { q: "What's the difference between local SEO and regular SEO?",     a: "Regular SEO focuses on broad organic rankings. Local SEO specifically targets the map pack, location-based searches, and 'near me' queries — the searches with the highest intent and the most direct path to a call or visit." },
      { q: "Will you manage my Google Business Profile?",                   a: "Yes. GBP management is a core part of what we do — not an add-on. We handle posts, photos, Q&A, service updates, and monitoring for issues that could suppress your listing." },
      { q: "Do I need to sign a long-term contract?",                      a: "No. Our local SEO service is month-to-month. We'd rather earn your business every month than lock you in. That said, SEO builds over time — we recommend at least 3 months before evaluating results." },
    ],

    metaTitle: "Local SEO McKinney TX | North Dallas | Clarion Solutions",
    metaDesc:  "Local SEO for McKinney TX and North Dallas businesses. GBP management, keyword targeting, citation building. No contracts. Book a free strategy call.",
    serviceDescription: "Local SEO services including Google Business Profile optimization, local keyword targeting, citation building, technical SEO, and monthly content for North Dallas businesses.",
  },

  "ai-automation": {
    slug: "ai-automation",
    name: "AI Automation",
    eyebrow: "AI Automation · McKinney, TX",
    headline: "AI Automation Dallas TX.",
    headlineItalic: "Running Smarter.",
    subtext:
      "We install an AI layer into your business that captures leads 24/7, follows up automatically, and handles the communication your team can't always keep pace with.",

    includes: [
      { title: "AI Lead Capture",         desc: "Every web form, chat widget, and inbound message gets an instant, intelligent response — day or night, weekday or weekend." },
      { title: "Follow-Up Sequences",     desc: "Automated email and SMS follow-up that nurtures leads based on how they came in and where they are in the decision process." },
      { title: "Missed Call Text-Back",   desc: "Every missed call gets an automatic text within seconds — so you never lose a lead just because you were busy or on another job." },
      { title: "Appointment Automation",  desc: "Booking confirmation, reminders, and pre-appointment prep messages — automated and personalized." },
      { title: "No-Show Recovery",        desc: "Automatic follow-up for missed appointments with rebooking prompts that recover revenue without requiring any manual work." },
      { title: "Review Management",       desc: "Automatic review request sequences after completed jobs — boosting your Google rating on autopilot." },
      { title: "CRM Pipeline Setup",      desc: "We configure your CRM so every lead is tracked, staged, and visible. No more leads lost in a spreadsheet or email inbox." },
      { title: "Monthly Reports",         desc: "Lead volume, conversion rates, response times, and automation performance — all in one clear monthly snapshot." },
    ],

    whoFor: {
      intro: "AI automation is for businesses that are getting leads — but losing too many of them to slow response times, dropped follow-up, and manual processes.",
      points: [
        "Service businesses with high lead volume and lean teams",
        "Businesses getting calls they can't always answer during busy hours",
        "Owners spending evenings manually following up with prospects",
        "Businesses with a CRM they're not fully using",
        "Any business in McKinney, Frisco, Allen, or Plano that wants to respond like a large company without the overhead",
      ],
    },

    process: [
      { num: "01", title: "Lead Flow Audit",   desc: "We map every touchpoint where leads come in, and every place where they can fall through the cracks. Most businesses are surprised by what we find." },
      { num: "02", title: "System Design",     desc: "We design the automation stack specific to how your business works — your services, your sales cycle, your existing tools." },
      { num: "03", title: "Build & Connect",   desc: "We build and connect everything — forms, phone, CRM, email, SMS. Most clients are live and running within two weeks." },
      { num: "04", title: "Monitor & Tune",    desc: "The first 30 days we watch everything closely, making real-time adjustments as leads flow through. Then monthly performance reports going forward." },
    ],

    pricing: [
      {
        badge: "Always Free",
        title: "Free Workflow Assessment",
        price: "$0",
        priceNote: "included with every discovery call",
        features: [
          "Current operations review",
          "Lead flow mapping",
          "Automation opportunity identification",
          "Tool stack assessment",
          "Recommendations & action plan",
        ],
        cta: "Book a Call",
        ctaStyle: "primary",
      },
      {
        badge: "Most Popular",
        title: "AI Foundation",
        price: "$1,500",
        priceNote: "per month · no setup fee · cancel anytime",
        features: [
          "AI lead capture & 24/7 response",
          "Automated follow-up sequences",
          "Missed call text-back",
          "Appointment reminders & no-show follow-up",
          "Reputation & review management",
          "Monthly performance report",
        ],
        cta: "Get Started",
        ctaStyle: "primary",
      },
      {
        badge: "Best Value",
        title: "AI + Local SEO",
        price: "$2,500",
        priceNote: "per month · no setup fee · cancel anytime",
        features: [
          "Everything in AI Foundation",
          "Google Business Profile management",
          "Local SEO — keywords, citations, content",
          "Monthly content creation & GBP posts",
          "Competitor gap analysis",
          "Full SEO & AI performance reporting",
        ],
        cta: "See Full Package",
        ctaStyle: "ghost",
      },
    ],

    faq: [
      { q: "How quickly can you get this up and running?",                          a: "Most clients are live within two weeks of signing on. We handle the full build and setup — you don't need to configure anything yourself." },
      { q: "Will this work with the tools I already use?",                          a: "In most cases, yes. We design the automation stack around your existing phone system, CRM, and website. If you don't have a CRM yet, we'll set one up as part of onboarding." },
      { q: "What happens to leads that come in at 2am?",                            a: "They get an immediate, intelligent response — the same as if it were 10am on a Tuesday. That's the point. Your AI layer doesn't sleep, take breaks, or get overwhelmed during busy seasons." },
      { q: "Do I need a long-term contract?",                                       a: "No. Both AI Foundation and AI + Local SEO are month-to-month. We earn your business every month." },
      { q: "How is this different from just setting up email automations myself?",  a: "The difference is in the design. Most DIY automations are too generic or break partway through the funnel. We build sequences specific to your business and your customers, and we monitor them ongoing so they keep working." },
    ],

    metaTitle: "AI Automation McKinney TX | North Dallas | Clarion Solutions",
    metaDesc:  "AI-powered lead capture, automated follow-up & business automation for North Dallas businesses. Never miss a lead again. McKinney TX. Book a free call.",
    serviceDescription: "AI automation services including lead capture, automated follow-up sequences, missed call text-back, appointment automation, and reputation management for North Dallas small businesses.",
  },

  "web-design": {
    slug: "web-design",
    name: "Web Design",
    eyebrow: "Web Design · McKinney, TX",
    headline: "Web Design McKinney TX.",
    headlineItalic: "Actually Works.",
    subtext:
      "Custom websites built in Next.js that load fast, rank in Google, and turn visitors into customers — no templates, no builders, no compromises.",

    includes: [
      { title: "Custom Development",    desc: "Every site is built from scratch in Next.js — no themes, no page builders. Your site performs like custom code because it is custom code." },
      { title: "Mobile-First Design",   desc: "More than half your visitors are on a phone. We design for mobile first and make sure every interaction works on every screen size." },
      { title: "SEO Architecture",      desc: "Title tags, schema markup, page speed, and URL structure built correctly from day one — so SEO isn't an afterthought you bolt on later." },
      { title: "Content & Copywriting", desc: "We write the copy for every page. Clear, service-specific, and optimized for both Google and the real people reading it." },
      { title: "Analytics Setup",       desc: "Google Analytics 4 and Search Console fully configured, with goal tracking so you can see exactly how the site performs." },
      { title: "CRM Integration",       desc: "Forms, phone tracking, and lead capture connected directly to your CRM — no leads lost between your website and your inbox." },
      { title: "Hosting & Launch",      desc: "We handle hosting setup, domain configuration, and the full launch process. You don't have to touch a server." },
      { title: "30-Day Support",        desc: "The first 30 days after launch we're on call for fixes, tweaks, and questions. Launches are the beginning, not the end." },
    ],

    whoFor: {
      intro: "A custom website makes the biggest difference when your current site is actively costing you business.",
      points: [
        "Businesses with outdated sites that load slowly or look unprofessional on mobile",
        "Service businesses losing leads to competitors with better-looking websites",
        "New businesses in McKinney, Frisco, or North Dallas that need a professional presence from day one",
        "Businesses planning to invest in SEO — a technically sound site makes every SEO dollar work harder",
        "Companies ready to stop paying for a site that doesn't do anything",
      ],
    },

    process: [
      { num: "01", title: "Discovery",           desc: "We learn your business, your customers, and what you want the site to accomplish. We don't start designing until we understand what success looks like for you." },
      { num: "02", title: "Copy & Design",        desc: "We write the copy first — then design the layout around it. Words drive structure. Most agencies do this backwards and it shows." },
      { num: "03", title: "Build & Optimize",     desc: "We build in Next.js, optimize for Core Web Vitals, and test across every major device and browser before anything goes live." },
      { num: "04", title: "Launch & Hand Off",    desc: "We handle the full launch, set up your analytics, and walk you through how to use and update your site. Everything documented." },
    ],

    pricing: [
      {
        badge: "Always Free",
        title: "Free Site Review",
        price: "$0",
        priceNote: "included with every discovery call",
        features: [
          "Site speed audit",
          "SEO health check",
          "Conversion issue identification",
          "Mobile experience review",
          "Recommendations & action plan",
        ],
        cta: "Book a Call",
        ctaStyle: "primary",
      },
      {
        badge: "Project-Based",
        title: "Custom Website",
        price: "Custom",
        priceNote: "scoped per project · or monthly retainer",
        features: [
          "Custom Next.js development",
          "Full copywriting & content",
          "SEO-optimized architecture",
          "Mobile-first responsive design",
          "Analytics & goal tracking setup",
          "CRM & GHL integration",
          "Hosting setup & launch",
          "30-day post-launch support",
        ],
        cta: "Get a Quote",
        ctaStyle: "primary",
      },
    ],

    faq: [
      { q: "How long does a custom website take to build?",                     a: "Most projects take 3–5 weeks from kickoff to launch. Larger or more complex sites can take 6–8 weeks. We move fast and keep you in the loop at every stage." },
      { q: "Do you write the copy or do I need to provide it?",                 a: "We write it. Full copywriting is included in every website project. You'll review and approve everything, but you won't be staring at a blank page." },
      { q: "Will my site rank on Google?",                                      a: "A technically sound site is a prerequisite for ranking — and we build that in from the start. If you want an active SEO campaign on top of the build, we can layer in our Local SEO service." },
      { q: "What platform do you build on?",                                    a: "Next.js. It's faster than WordPress, more flexible than website builders, and purpose-built for performance and SEO. Your site will outperform the competition technically before we've touched keyword targeting." },
      { q: "Can you redesign an existing site, or do you start from scratch?",  a: "Both. Redesigns start with an audit of what's working and what isn't — we keep what's performing and rebuild what isn't." },
    ],

    metaTitle: "Web Design McKinney TX | Custom Next.js | Clarion Solutions",
    metaDesc:  "Custom Next.js websites for McKinney TX & North Dallas businesses. Fast, SEO-ready, mobile-first. Full copywriting included. No templates. Book a free call.",
    serviceDescription: "Custom Next.js website development for North Dallas businesses — mobile-first, SEO-optimized, with full copywriting, CRM integration, and analytics setup.",
  },

  "media-production": {
    slug: "media-production",
    name: "Media Production",
    eyebrow: "Media Production · McKinney, TX",
    headline: "Media Production,",
    headlineItalic: "North Dallas.",
    subtext:
      "Professional photo and video content that reflects the real quality of your work — built for Google, social media, and your website.",

    includes: [
      { title: "Business Photography",    desc: "Professional photos of your work, your team, your location, and your process — edited and delivered ready to use anywhere." },
      { title: "Short-Form Video",        desc: "Reels and short-form videos that show your work in action, build trust on social, and perform on Google Business Profile." },
      { title: "GBP Content",            desc: "Photos and videos formatted specifically for Google Business Profile, where visual content directly influences your local ranking." },
      { title: "Social Content Packages",desc: "Monthly batches of ready-to-post content for Instagram, Facebook, and other platforms — planned, shot, edited, and captioned." },
      { title: "Brand Assets",           desc: "Logos, banners, profile photos, and other brand materials that look consistent and professional across every platform." },
      { title: "Post-Production",        desc: "Full editing, color grading, captioning, and optimization for each platform's specs. You get finished files, not raw footage." },
      { title: "Content Calendar",       desc: "Monthly content planning so every shoot is purposeful and you always know what's going out and when." },
      { title: "Distribution Support",   desc: "We can post directly to your GBP and social channels on your behalf, or hand you fully formatted, ready-to-post files." },
    ],

    whoFor: {
      intro: "Media production makes the most difference for businesses that do great work but don't look like it online.",
      points: [
        "Contractors and trades whose work speaks for itself — but nobody's seen it",
        "Businesses still using iPhone photos on their website and Google Business Profile",
        "Service businesses that want a real social presence without doing it themselves",
        "Businesses preparing to launch or relaunch their website and need current photography",
        "Any North Dallas business that wants their online presence to match the quality of their work",
      ],
    },

    process: [
      { num: "01", title: "Content Planning", desc: "We build a monthly content plan around your services, upcoming promotions, and platform goals. Every shoot has a purpose before we show up." },
      { num: "02", title: "On-Site Shoot",    desc: "We come to you — your location, your jobsite, wherever your work happens. We serve McKinney, Frisco, Allen, Plano, and the surrounding area." },
      { num: "03", title: "Edit & Deliver",   desc: "Full post-production handled on our end. Finished, formatted photos and videos delivered within the agreed turnaround window." },
      { num: "04", title: "Post & Distribute",desc: "We can post everything to your accounts on a schedule, or hand you the files to use however you like. Your call." },
    ],

    pricing: [
      {
        badge: "Always Free",
        title: "Free Content Consultation",
        price: "$0",
        priceNote: "included with every discovery call",
        features: [
          "Current content assessment",
          "Platform strategy review",
          "Content gap identification",
          "Production plan outline",
          "Recommendations & action plan",
        ],
        cta: "Book a Call",
        ctaStyle: "primary",
      },
      {
        badge: "Add-On Service",
        title: "Media Production",
        price: "Custom",
        priceNote: "project-based · or monthly retainer",
        features: [
          "Professional business photography",
          "Short-form video & reels",
          "Google Business Profile content",
          "Social media content packages",
          "Full editing & post-production",
          "Brand asset creation",
          "Content calendar & planning",
          "Distribution support (optional)",
        ],
        cta: "Get a Quote",
        ctaStyle: "primary",
      },
    ],

    faq: [
      { q: "How often do you come out to shoot?",                                a: "Most clients start with a monthly shoot. Some do quarterly shoots with content repurposed from a larger library. We'll build a plan that matches your needs and budget." },
      { q: "Do I need to be in McKinney for you to come out?",                   a: "No. We shoot throughout the North Dallas area — Frisco, Allen, Plano, Anna, and surrounding cities. If you're in the region, we can come to you." },
      { q: "What if I only need photos for my website, not ongoing content?",    a: "Totally fine. We do one-time project shoots for website launches, rebrands, and new service additions — no ongoing commitment required." },
      { q: "Will you post to my social media accounts?",                         a: "If you want us to, yes. We can post to your accounts on a schedule as part of a monthly package, or hand you finished files and you post on your own timing." },
      { q: "How does this work with your other services?",                       a: "Media production layers cleanly with everything else we do. Photos and videos we create go straight into your GBP management, your website, and your content strategy — handled by the same team." },
    ],

    metaTitle: "Media Production North Dallas | Clarion Solutions",
    metaDesc:  "Professional photography & video for McKinney TX & North Dallas businesses. Monthly content packages for Google, social media & your site. Book a free call.",
    serviceDescription: "Professional photography, short-form video production, and monthly content packages for North Dallas businesses — optimized for Google Business Profile, social media, and websites.",
  },

  "clarion-complete-stack": {
    slug: "clarion-complete-stack",
    name: "Clarion Complete Stack",
    eyebrow: "Clarion Complete Stack · McKinney, TX",
    headline: "The Complete",
    headlineItalic: "Clarion Stack.",
    subtext:
      "Our complete done-for-you growth system — AI automation, local SEO, content production, and professional media. Four services. One team. One contract.",

    includes: [
      { title: "AI Lead Automation",    desc: "24/7 lead capture, missed call text-back, automated follow-up sequences, and appointment reminders — every lead handled, nothing slipping through." },
      { title: "Local SEO Management",  desc: "Full local SEO — GBP optimization, keyword targeting, citation building, technical audits, and monthly content that builds your authority over time." },
      { title: "Google Business Profile",desc: "Complete GBP management including posts, photos, Q&A, service updates, and monitoring — the single most visible asset for local search." },
      { title: "Content Production",    desc: "Monthly content creation: GBP posts, local landing pages, and blog content that targets your keywords and compounds your rankings." },
      { title: "Media Production",      desc: "Professional photography and short-form video built for your GBP, social media, and website — shot monthly, delivered ready to use." },
      { title: "Reputation Management", desc: "Automated review request sequences that grow your Google rating consistently — without requiring any manual follow-up from your team." },
      { title: "CRM & Pipeline Setup",  desc: "Your CRM configured, connected, and maintained so every lead is tracked and no opportunity disappears into a spreadsheet or email chain." },
      { title: "Unified Reporting",     desc: "One clear monthly report covering AI performance, SEO rankings, GBP insights, and content results — in plain English, not agency-speak." },
    ],

    whoFor: {
      intro: "The Clarion Complete Stack is for businesses that are done doing things halfway.",
      points: [
        "Owners tired of managing five different vendors for marketing, SEO, and content",
        "Service businesses in McKinney, Frisco, Allen, or Plano ready to dominate their local market",
        "Businesses currently outranked by competitors who are spending more and doing less",
        "Companies that want one team, one contract, and one clear strategy — no gaps, no handoffs",
        "Businesses that do great work and need their online presence to match it",
      ],
    },

    process: [
      { num: "01", title: "Strategy Call",     desc: "We learn your market, your goals, and your current gaps. We build a clear 90-day roadmap before a single dollar is spent on execution." },
      { num: "02", title: "Foundation Build",  desc: "AI system built, GBP optimized, technical SEO fixed, CRM pipeline configured. The foundation that makes everything else compound." },
      { num: "03", title: "Content & Media",   desc: "First shoot scheduled within 30 days. Monthly content calendar running. Your brand starts showing up where it wasn't before." },
      { num: "04", title: "Grow & Report",     desc: "Monthly reporting across every channel — rankings, leads, AI performance, content. You always know what's working and what's next." },
    ],

    pricing: [
      {
        badge: "Always Free",
        title: "Free Strategy Session",
        price: "$0",
        priceNote: "included with every discovery call",
        features: [
          "Full business growth audit",
          "Current tool stack review",
          "Automation & SEO opportunity mapping",
          "90-day growth plan outline",
          "Recommendations & action plan",
        ],
        cta: "Book a Call",
        ctaStyle: "primary",
      },
      {
        badge: "Complete Package",
        title: "Clarion Complete Stack",
        price: "$4,500",
        priceNote: "per month · no setup fee · cancel anytime",
        features: [
          "AI lead capture & automated follow-up",
          "Missed call text-back & appointment reminders",
          "Full local SEO management",
          "Google Business Profile management",
          "Monthly content creation & GBP posts",
          "Professional photography & video",
          "Reputation & review management",
          "Unified monthly performance report",
        ],
        cta: "Book a Call",
        ctaStyle: "primary",
      },
    ],

    faq: [
      { q: "What makes this different from buying each service separately?",   a: "Integration. When one team owns your AI, your SEO, and your content, everything works together. Your SEO content fuels your GBP. Your media feeds your website and your social. Your AI handles the leads your SEO drives in. It compounds in a way that separate vendors who never talk to each other simply can't replicate." },
      { q: "Is there a setup fee?",                                            a: "No. The $4,500/month covers everything — onboarding, setup, and ongoing management. No hidden costs, no upfront project fees on top." },
      { q: "How long before I see results?",                                   a: "AI results show up within the first two weeks — leads being captured and followed up automatically. SEO results show meaningful movement at 60–90 days. Media and content compound over time. You'll have a clear picture of performance from month one." },
      { q: "Can I cancel at any time?",                                        a: "Yes. No long-term contracts. We'd rather earn your business every month. That said, an integrated system like this builds momentum — most clients see compounding results the longer they stay in." },
      { q: "Will I have one point of contact or be passed around?",            a: "One team, one point of contact. You'll work directly with the same people throughout — not a support ticket queue. You'll know who to call, and you'll hear from us proactively." },
    ],

    metaTitle: "Clarion Complete Stack | Full-Service Marketing McKinney TX",
    metaDesc:  "AI automation, local SEO, content, and media production under one contract. $4,500/mo, no setup fee. The complete Clarion system for North Dallas businesses.",
    serviceDescription: "The Clarion Complete Stack combines AI automation, local SEO, content production, and professional media into one integrated monthly system for North Dallas businesses.",
  },

  "ai-workflows": {
    slug: "ai-workflows",
    name: "AI Workflows",
    eyebrow: "AI Workflows · McKinney, TX",
    headline: "AI Workflow Automation,",
    headlineItalic: "Dallas TX.",
    subtext:
      "We design and build custom AI workflows that connect your existing tools, automate your operations, and eliminate the manual work that's quietly costing you time and money.",

    includes: [
      { title: "Workflow Audit",              desc: "We map your current operations, identify every manual process and disconnected handoff, and prioritize automation opportunities by ROI. Free with every discovery call." },
      { title: "Custom Workflow Design",      desc: "We design your automation architecture from scratch — tailored to your business, your team size, and how work actually flows through your organization." },
      { title: "Lead Handling Automation",    desc: "From first contact to closed deal — capture, qualification, follow-up, scheduling, and handoff to your team, all automated." },
      { title: "Internal Operations",         desc: "Task assignment, status updates, approvals, and notifications — the internal work eating your team's time, automated intelligently." },
      { title: "Customer Communication",      desc: "Outgoing touchpoints that feel personal and arrive at the right moment — throughout the customer lifecycle, without requiring manual effort." },
      { title: "Reporting & Dashboards",      desc: "Automated data collection and reporting so you always have a clear picture of business performance without assembling it yourself." },
      { title: "Tool Integration",            desc: "We connect your existing tools and make them work together intelligently — your CRM, scheduling software, phone system, email, and more." },
      { title: "Documentation & Handoff",     desc: "Every workflow we build is fully documented so your team understands how it works and you're not dependent on us for every change." },
    ],

    whoFor: {
      intro: "Custom AI workflows deliver the biggest ROI for businesses that have grown faster than their systems.",
      points: [
        "Businesses doing $1M+ in revenue still running on spreadsheets, email chains, and manual handoffs",
        "Operations managers spending 10+ hours a week on tasks that should be automatic",
        "Businesses with multiple tools that don't talk to each other",
        "Teams that have scaled up headcount to handle volume that should be handled by automation",
        "North Dallas businesses in Frisco, Plano, McKinney, or Allen ready to operate like a larger company",
      ],
    },

    process: [
      { num: "01", title: "Workflow Audit",    desc: "Free with every discovery call. We spend time understanding your current operations, mapping your tool stack, and identifying the 3–5 workflows that will have the biggest impact on your business." },
      { num: "02", title: "Design & Scope",   desc: "We build your custom workflow architecture and give you a clear scope — what we'll build, how long it takes, and what it costs. No surprises." },
      { num: "03", title: "Build & Deploy",   desc: "We build everything, test it with real data, and deploy to your live environment. Most workflows are built and running within 1–2 weeks of kickoff." },
      { num: "04", title: "Manage & Optimize",desc: "Ongoing management retainer available for performance monitoring, adjustments as your business changes, and continued workflow development." },
    ],

    pricing: [
      {
        badge: "Always Free",
        title: "Workflow Audit",
        price: "$0",
        priceNote: "included with every discovery call",
        features: [
          "Current operations mapping",
          "Tool stack review",
          "Automation opportunity identification",
          "ROI prioritization",
          "Build scope & recommendation",
        ],
        cta: "Book a Call",
        ctaStyle: "primary",
      },
      {
        badge: "One-Time Build",
        title: "Custom Workflow",
        price: "$2,500–$8,000",
        priceNote: "one-time · scoped per project",
        features: [
          "Custom workflow design",
          "Full build & deployment",
          "Integration with existing tools",
          "Testing with real data",
          "Full documentation & team training",
          "30-day post-launch support",
        ],
        cta: "Get a Quote",
        ctaStyle: "ghost",
      },
      {
        badge: "Retainer",
        title: "Workflow Management",
        price: "$500–$1,500",
        priceNote: "per month · cancel anytime",
        features: [
          "Performance monitoring",
          "Ongoing optimization",
          "Changes as your business evolves",
          "Priority support",
          "Continued workflow development",
        ],
        cta: "Learn More",
        ctaStyle: "ghost",
      },
    ],

    faq: [
      { q: "What kinds of businesses benefit most from AI workflows?",                  a: "Businesses doing $1M+ in revenue that are still relying on manual processes to keep things running. If your team is spending meaningful time on repetitive tasks — data entry, follow-up emails, status updates, scheduling — there's almost certainly a workflow that eliminates most of that." },
      { q: "How long does it take to build and deploy a workflow?",                     a: "Most custom workflows are built and live within 1–2 weeks of kickoff. More complex, multi-system builds can take 3–4 weeks. We scope everything upfront so you know what to expect before we start." },
      { q: "Will this work with the tools I already use?",                              a: "In most cases, yes. We design workflows around your existing tool stack wherever possible. If a tool doesn't support integration, we'll tell you upfront and discuss the options — including whether it's worth switching." },
      { q: "What happens after the workflow is built — do I manage it myself?",         a: "You can. We document everything thoroughly so your team can make basic changes without needing us. If you want us to own it ongoing, our monthly management retainer covers monitoring, optimization, and continued development." },
      { q: "How is this different from just using Zapier or Make?",                     a: "Off-the-shelf automation tools are great for simple, linear tasks. What we build is different — it's designed around the specific logic, edge cases, and decision points of your business. We design the workflow strategy, not just the technical connections. And unlike a tool you manage yourself, we're accountable for making sure it keeps working." },
    ],

    metaTitle: "AI Workflow Automation McKinney TX | Clarion Solutions",
    metaDesc:  "Custom AI workflows for North Dallas businesses — automate operations, connect tools, eliminate manual work. Built for $1M+ businesses. Free audit.",
    serviceDescription: "Custom AI workflow design and development for North Dallas businesses — automating lead handling, internal operations, customer communication, and reporting for businesses doing $1M+ in revenue.",
  },
};
