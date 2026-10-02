export const serviceList = [
  { slug: "clarion-complete-stack",     name: "Clarion Complete Stack"      },
  { slug: "social-media-management",    name: "Social Media Management"     },
  { slug: "media-production",           name: "Content & Media Production"  },
  { slug: "web-design",                 name: "Branding & Web Design"       },
  { slug: "local-seo",                  name: "Local SEO & AEO"             },
  { slug: "automation-crm",             name: "Automation & CRM"            },
];

export const services = {
  "local-seo": {
    slug: "local-seo",
    name: "Local SEO & AEO",
    eyebrow: "Local SEO & AEO · McKinney, TX",
    headline: "Local SEO & AEO Services.",
    headlineItalic: "Get Found First.",
    subtext:
      "We help North Dallas businesses dominate Google search and the local map pack, so the right customers find you before they find anyone else.",

    definitionBlock: "Local SEO is the practice of optimizing your online presence to rank in location-based search results, including the Google local map pack, near-me searches, and city-specific queries. For McKinney and North Dallas businesses, local SEO determines how many potential customers find you before they find your competitors.",

    includesHeadline: "Local SEO + AI Search.",
    includesHeadlineItalic: "Your Business, Every Platform.",

    aeoPanel: {
      eyebrow: "Why It Matters Now",
      body: "Search is changing. More and more customers are skipping the list of links and asking AI directly. Google's AI Overview, ChatGPT, and Perplexity are now answering local business questions, and only a handful of businesses get cited. AEO is how we make sure yours is one of them.",
      stats: [
        "According to BrightEdge (2024), 58% of Google searches now include an AI-generated result",
        "BrightLocal (2024): businesses with structured, authoritative content are 2x more likely to appear in AI answers",
        "Early movers in AEO are capturing citation spots before competitors know the game has changed",
      ],
    },

    includes: [
      { title: "Answer Engine Optimization", badge: "NEW", desc: "We optimize your content and structure so AI engines like ChatGPT, Perplexity, and Google AI Overviews cite your business when customers ask for recommendations." },
      { title: "Google Business Profile", desc: "Full optimization and ongoing management of your GBP: photos, posts, Q&A, categories, and service areas." },
      { title: "Local Keyword Research",  desc: "We find the exact terms your customers use to search for businesses like yours in McKinney, Frisco, Allen, and beyond." },
      { title: "On-Page SEO",             desc: "Title tags, meta descriptions, header structure, and content optimization across every page of your site." },
      { title: "Technical SEO",           desc: "Site speed, mobile usability, crawlability, schema markup, and Core Web Vitals. Cleaned up and kept current." },
      { title: "Citation Building",       desc: "Consistent business listings across Yelp, Apple Maps, Bing, and hundreds of relevant directories." },
      { title: "Monthly Content",         desc: "GBP posts, local landing pages, and blog content that targets your keywords and builds local authority over time." },
      { title: "Competitor Tracking",     desc: "We monitor your top competitors' rankings and identify gaps so you always know where the next opportunity is." },
      { title: "Monthly Reports",         desc: "Plain-English reporting on rankings, traffic, and GBP performance. The things that matter, clearly explained." },
    ],

    whoFor: {
      intro: "Local SEO is built for businesses that depend on customers in a specific area finding them online.",
      points: [
        "Service businesses: contractors, plumbers, HVAC, electricians, roofers",
        "Medical, dental, legal, and professional practices",
        "Retail and brick-and-mortar businesses in McKinney, Frisco, Allen, or Plano",
        "Businesses currently getting outranked by competitors with worse services",
        "New businesses that need to establish a local presence fast",
      ],
    },

    process: [
      { num: "01", title: "Audit & Baseline",   desc: "We analyze your current rankings, GBP setup, technical health, and citation landscape, then benchmark against your top competitors." },
      { num: "02", title: "Foundation Build",    desc: "We fix technical issues, fully optimize your GBP, and build citation consistency across the web. This is the work that makes everything else land." },
      { num: "03", title: "Content & Authority", desc: "We create local content targeting your best keyword opportunities and building topical authority over time. Consistent and compounding." },
      { num: "04", title: "Track & Refine",      desc: "Monthly ranking reports, GBP insights, and strategy adjustments based on what's moving and what isn't. No guessing." },
    ],

    pricing: [
      {
        badge: "ENTRY TIER",
        title: "Local SEO Essentials",
        price: "$750",
        priceNote: "per month · no setup fee · cancel anytime after 3-month minimum",
        features: [
          "Google Business Profile optimization",
          "On-page SEO for up to 5 pages",
          "Keyword targeting",
          "Local citation building",
          "Monthly rankings report",
        ],
        cta: "Get Started",
        ctaStyle: "primary",
      },
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
        price: "$2,000",
        priceNote: "per month · no setup fee · cancel anytime after 3-month minimum",
        features: [
          "Google Business Profile management",
          "Local SEO: keywords, citations, content",
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
      { q: "How long does it take to see results from local SEO?",       a: "Most clients start seeing ranking movement within 60-90 days. Meaningful results, including more calls and more map pack appearances, typically show up around the 3-6 month mark. Local SEO compounds over time, so the longer you stay consistent, the stronger your position becomes." },
      { q: "Do I need to be based in McKinney for you to work with me?", a: "No. We serve businesses throughout the North Dallas corridor: Frisco, Allen, Plano, Anna, and surrounding areas. If you're a local service business anywhere in the region, we can help you rank for the areas you actually serve." },
      { q: "What's the difference between local SEO and regular SEO?",   a: "Regular SEO focuses on broad organic rankings. Local SEO specifically targets the map pack, location-based searches, and 'near me' queries, the searches with the highest intent and the most direct path to a call or visit." },
      { q: "Will you manage my Google Business Profile?",                 a: "Yes. GBP management is a core part of what we do, not an add-on. We handle posts, photos, Q&A, service updates, and monitoring for issues that could suppress your listing." },
      { q: "Do I need to sign a long-term contract?",                    a: "We require a 3-month minimum commitment to give the work enough time to show real results. After that, it's month-to-month with 30 days notice to cancel. No long-term lock-ins beyond the initial term." },
    ],

    metaTitle: "Local SEO & AEO Services | McKinney, TX | Clarion Solutions",
    metaDesc:  "Local SEO and Answer Engine Optimization for McKinney and North Dallas businesses. Get found on Google, ChatGPT, Perplexity and AI Overviews. No contracts. Book a free strategy call.",
    serviceDescription: "Local SEO services including Google Business Profile optimization, local keyword targeting, citation building, technical SEO, and monthly content for North Dallas businesses.",
  },

  "social-media-management": {
    slug: "social-media-management",
    name: "Social Media Management",
    eyebrow: "Social Media Management · McKinney, TX",
    headline: "Social Media Management,",
    headlineItalic: "North Dallas.",
    subtext:
      "We plan, write, and post content on your business accounts so your social media looks active, professional, and consistent, without it taking any of your time.",

    definitionBlock: "Social media management means someone other than you is responsible for what goes out on your business's Instagram and Facebook: planning the content calendar, writing captions, scheduling posts, and keeping the account active week after week. For North Dallas businesses, an active social presence is often the first thing a potential customer checks before they call, and an abandoned account can cost you the job before you ever get the chance to quote it.",

    includesHeadline: "Consistent Content.",
    includesHeadlineItalic: "Zero Effort On Your End.",

    includes: [
      { title: "Content Calendar & Strategy", desc: "A monthly content plan built around your services, your market, and what performs for businesses like yours." },
      { title: "Caption Writing",              desc: "Every caption written in your voice, with the hashtags and calls to action that actually get engagement." },
      { title: "Scheduled Posting",            desc: "Posts go out on schedule across Instagram and Facebook. You approve the plan, we handle the publishing." },
      { title: "Community Management",         desc: "Comments and direct messages monitored and responded to, so engagement doesn't go ignored." },
      { title: "Platform Strategy",            desc: "We track what's working on each platform and adjust the content mix, posting times, and format over time." },
      { title: "Paid Social Ads", badge: "ADD-ON", desc: "Boosted posts and targeted Meta ad campaigns, layered on top of your organic content when you're ready to grow reach with a budget." },
      { title: "Monthly Performance Report",   desc: "A clear, plain-English report on reach, engagement, and follower growth each month." },
    ],

    whoFor: {
      intro: "Social media management makes the biggest difference for businesses with no time, no strategy, or no consistency behind their accounts.",
      points: [
        "Business owners who know they should be posting but never get to it",
        "Businesses with an Instagram or Facebook page that hasn't been touched in months",
        "Service businesses that want to build trust with potential customers before the first call",
        "Businesses that already have photo and video content but nobody managing where it goes",
        "Any North Dallas business ready to look as active online as they are on the job",
      ],
    },

    process: [
      { num: "01", title: "Account Audit", desc: "We review your current accounts, what's working, what isn't, and where the gaps are compared to competitors in your market." },
      { num: "02", title: "Content Plan",  desc: "We build a monthly calendar around your services, your voice, and the platforms that matter most for your business." },
      { num: "03", title: "Post & Manage", desc: "Captions written, posts scheduled, comments and messages monitored. Your accounts stay active without you touching them." },
      { num: "04", title: "Review & Adjust", desc: "Monthly reporting on what's working, with adjustments to content mix and strategy based on real performance." },
    ],

    pricing: [
      {
        badge: "Always Free",
        title: "Free Social Audit",
        price: "$0",
        priceNote: "included with every discovery call",
        features: [
          "Current account review",
          "Platform strategy assessment",
          "Content gap identification",
          "Competitor snapshot",
          "Recommendations & action plan",
        ],
        cta: "Book a Call",
        ctaStyle: "primary",
      },
      {
        badge: "Featured",
        title: "Social & Content",
        price: "$2,500",
        priceNote: "per month · no setup fee · cancel anytime after 3-month minimum",
        features: [
          "1 monthly on-site shoot (within 30 miles of McKinney)",
          "8 reels, edited and ready to post",
          "15-20 edited photos",
          "12 managed posts/month on Instagram + Facebook",
          "Captions and scheduling handled for you",
        ],
        cta: "Get Started",
        ctaStyle: "primary",
      },
    ],

    faq: [
      { q: "Do you post on my accounts, or do I post the content you create?", a: "We can do either. Most clients have us post directly to their Instagram and Facebook on a schedule we build together. If you'd rather post it yourself, we'll hand you fully captioned, ready-to-publish files instead." },
      { q: "How often do you post?",                                          a: "Most clients start around 3 posts per week, roughly 12 per month. We'll build a cadence around your content volume and what each platform tends to reward." },
      { q: "Do you run paid ads too?",                                        a: "Paid social ads are available as an add-on layered on top of your content and posting. We can turn it on once your organic presence is established, or from day one if you want to grow faster." },
      { q: "What if I don't have any photo or video content yet?",            a: "That's what our Content & Media Production service covers. Most clients pair the two: we shoot the content, then manage where it gets posted and how it performs." },
      { q: "Will I review posts before they go out?",                         a: "Yes. You approve the monthly content plan up front, and we handle execution from there. Nothing goes out that you haven't seen." },
    ],

    metaTitle: "Social Media Management McKinney TX | Clarion Solutions",
    metaDesc:  "Social media management for North Dallas businesses. Content calendars, captions, scheduled posting, and community management on Instagram and Facebook. Book a free call.",
    serviceDescription: "Social media management services including content calendar planning, caption writing, scheduled posting, community management, and paid social ads for North Dallas businesses.",
  },

  "automation-crm": {
    slug: "automation-crm",
    name: "Automation & CRM",
    eyebrow: "Automation & CRM · McKinney, TX",
    headline: "AI Automation &",
    headlineItalic: "Custom CRM.",
    subtext:
      "We install an AI layer that captures and follows up on every lead 24/7, and build the custom CRM underneath it so your pipeline, your team, and your tools all run from the same system.",

    definitionBlock: "Automation and CRM for a small business means two things working together: software that captures leads and follows up with customers automatically, and a customer relationship management platform configured around how your business actually operates. For service businesses in McKinney and North Dallas, that typically means missed call text-back, automated follow-up sequences, appointment reminders, and a pipeline that replaces spreadsheets and scattered email chains with one organized system.",

    includesHeadline: "AI Automation.",
    includesHeadlineItalic: "Built On A Real CRM.",

    includes: [
      { title: "AI Lead Capture",        desc: "Every web form, chat widget, and inbound message gets an instant, intelligent response, day or night, weekday or weekend." },
      { title: "Missed Call Text-Back",  desc: "Every missed call gets an automatic text within seconds, so you never lose a lead just because you were busy or on another job." },
      { title: "Follow-Up Sequences",    desc: "Automated email and SMS follow-up that nurtures leads based on how they came in and where they are in the decision process." },
      { title: "Custom CRM Setup",       desc: "Pipelines, stages, contact fields, and user permissions configured specifically for how your business operates, not a generic template." },
      { title: "Appointment Automation", desc: "Booking confirmation, reminders, and no-show recovery, automated and personalized." },
      { title: "Review Management",      desc: "Automatic review request sequences after completed jobs, boosting your Google rating on autopilot." },
      { title: "Tool Integration",       desc: "We connect your CRM to the tools you already use: scheduling software, phone system, email, and more." },
      { title: "Monthly Reports",        desc: "Lead volume, conversion rates, response times, and pipeline health, all in one clear monthly snapshot." },
    ],

    whoFor: {
      intro: "Automation and CRM make the biggest difference for businesses getting leads but losing them to slow follow-up, scattered tools, or processes that haven't kept up with growth.",
      points: [
        "Service businesses with high lead volume and lean teams",
        "Businesses running leads out of spreadsheets, email chains, and manual handoffs",
        "Owners spending evenings manually following up with prospects",
        "Businesses with multiple tools that don't talk to each other",
        "Any McKinney, Frisco, Allen, or Plano business ready to operate like a larger company without the overhead",
      ],
    },

    process: [
      { num: "01", title: "Lead & Workflow Audit", desc: "We map every touchpoint where leads come in, every place they can fall through the cracks, and how your current CRM or spreadsheets are holding up." },
      { num: "02", title: "System Design",         desc: "We design the automation and CRM architecture specific to how your business works: your services, your sales cycle, your existing tools." },
      { num: "03", title: "Build & Connect",       desc: "We build and connect everything: forms, phone, CRM, email, SMS. Most clients are live and running within two weeks." },
      { num: "04", title: "Monitor & Tune",        desc: "The first 30 days we watch everything closely, making real-time adjustments as leads flow through. Then monthly performance reports going forward." },
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
          "CRM and automation opportunity identification",
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
        priceNote: "per month · no setup fee · cancel anytime after 3-month minimum",
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
        badge: "One-Time Build",
        title: "Custom CRM Build",
        price: "$2,500-$8,000",
        priceNote: "one-time · scoped per project",
        features: [
          "Custom CRM design and configuration",
          "Pipeline and contact management setup",
          "Automated follow-up and booking",
          "Integration with existing tools",
          "Full documentation and team training",
          "30-day post-launch support",
        ],
        cta: "Get a Quote",
        ctaStyle: "ghost",
        ctaHref: "/get-a-quote",
      },
    ],

    faq: [
      { q: "How quickly can you get this up and running?",             a: "Most AI Foundation clients are live within two weeks of signing on. Custom CRM builds typically run two to four weeks depending on scope. We handle the full build either way." },
      { q: "Will this work with the tools I already use?",             a: "In most cases, yes. We design everything around your existing phone system, website, and tool stack wherever possible. If you don't have a CRM yet, we'll set one up as part of onboarding." },
      { q: "Do I need a CRM already, or do you build one?",            a: "Either path works. AI Foundation plugs into a CRM you already have or a simple one we set up as part of onboarding. If you need something built from the ground up around your specific pipeline, that's the Custom CRM Build." },
      { q: "Do I need a long-term contract?",                          a: "AI Foundation is month-to-month. Custom CRM Build is a one-time project with a defined scope. No long-term lock-ins on either path." },
      { q: "What happens after the system is built, do I manage it myself?", a: "You can. We document everything and train your team so you can make basic changes without needing us. If you'd rather we own it ongoing, ask about continued management when we scope your project." },
    ],

    metaTitle: "Automation & CRM McKinney TX | Clarion Solutions",
    metaDesc:  "AI automation and custom CRM systems for North Dallas businesses. 24/7 lead capture, automated follow-up, and CRM builds that match how you work. Book a free call.",
    serviceDescription: "AI automation and custom CRM services for North Dallas businesses, including 24/7 lead capture, automated follow-up, missed call text-back, CRM setup, and workflow automation.",
  },

  "web-design": {
    slug: "web-design",
    name: "Web Design",
    eyebrow: "Web Design · McKinney, TX",
    headline: "Web Design McKinney TX.",
    headlineItalic: "Actually Works.",
    subtext:
      "Custom websites built in Next.js that load fast, rank in Google, and turn visitors into customers. No templates, no builders, no compromises.",

    definitionBlock: "Custom web design for a local business means building a site from scratch around your specific services, location, and customers, rather than adapting a pre-built template. For McKinney and North Dallas businesses, a properly built custom website includes SEO-optimized architecture, mobile-first design, full copywriting, and CRM integration, so the site actively generates leads rather than just displaying your services.",

    aeoPanel: {
      eyebrow: "Why Your Website Is Your Most Important Asset",
      body: "Your website is the foundation everything else points back to. A site that loads slowly, looks outdated on mobile, or isn't built for search will undermine every other marketing dollar you spend, including your SEO, your ads, and your Google Business Profile.",
      stats: [
        "Google research shows 53% of mobile site visits are abandoned if a page takes longer than 3 seconds to load",
        "According to BrightEdge (2024), mobile devices now account for 63% of all organic search visits",
        "Stanford Web Credibility research found 75% of users make judgments about a company's credibility based on its website design",
      ],
    },

    includes: [
      { title: "Custom Development",    desc: "Every site is built from scratch in Next.js. No themes, no page builders. Your site performs like custom code because it is custom code." },
      { title: "Mobile-First Design",   desc: "More than half your visitors are on a phone. We design for mobile first and make sure every interaction works on every screen size." },
      { title: "SEO Architecture",      desc: "Title tags, schema markup, page speed, and URL structure built correctly from day one, so SEO isn't an afterthought you bolt on later." },
      { title: "Content & Copywriting", desc: "We write the copy for every page. Clear, service-specific, and optimized for both Google and the real people reading it." },
      { title: "Analytics Setup",       desc: "Google Analytics 4 and Search Console fully configured, with goal tracking so you can see exactly how the site performs." },
      { title: "CRM Integration",       desc: "Forms, phone tracking, and lead capture connected directly to your CRM. No leads lost between your website and your inbox." },
      { title: "Hosting & Launch",      desc: "We handle hosting setup, domain configuration, and the full launch process. You don't have to touch a server." },
      { title: "30-Day Support",        desc: "The first 30 days after launch we're on call for fixes, tweaks, and questions. Launches are the beginning, not the end." },
    ],

    whoFor: {
      intro: "A custom website makes the biggest difference when your current site is actively costing you business.",
      points: [
        "Businesses with outdated sites that load slowly or look unprofessional on mobile",
        "Service businesses losing leads to competitors with better-looking websites",
        "New businesses in McKinney, Frisco, or North Dallas that need a professional presence from day one",
        "Businesses planning to invest in SEO. A technically sound site makes every SEO dollar work harder.",
        "Companies ready to stop paying for a site that doesn't do anything",
      ],
    },

    process: [
      { num: "01", title: "Discovery",        desc: "We learn your business, your customers, and what you want the site to accomplish. We don't start designing until we understand what success looks like for you." },
      { num: "02", title: "Copy & Design",    desc: "We write the copy first, then design the layout around it. Words drive structure. Most agencies do this backwards and it shows." },
      { num: "03", title: "Build & Optimize", desc: "We build in Next.js, optimize for Core Web Vitals, and test across every major device and browser before anything goes live." },
      { num: "04", title: "Launch & Hand Off",desc: "We handle the full launch, set up your analytics, and walk you through how to use and update your site. Everything documented." },
    ],

    pricing: [
      {
        badge: "Starter",
        title: "Web Design: Starter",
        price: "$800",
        priceNote: "one-time · up to 5 pages · 30-day support",
        features: [
          "Up to 5 pages (Home, About, Services, Blog, Contact)",
          "Mobile-first responsive design",
          "SEO structure and schema markup",
          "Google Analytics integration",
          "Contact form + CRM integration",
          "30 days post-launch support",
        ],
        cta: "See Packages",
        ctaStyle: "primary",
        ctaHref: "/shop",
      },
      {
        badge: "Pro",
        title: "Web Design: Pro",
        price: "$2,000",
        priceNote: "one-time · unlimited pages · 60-day support",
        features: [
          "Unlimited pages",
          "Custom design system and animations",
          "Advanced SEO architecture",
          "Full chat widget + booking integration",
          "Blog setup with schema markup",
          "Google Analytics + GSC setup",
          "60 days post-launch support",
        ],
        cta: "See Packages",
        ctaStyle: "primary",
        ctaHref: "/shop",
      },
      {
        badge: "Monthly",
        title: "Website Maintenance",
        price: "$200",
        priceNote: "per month · cancel anytime",
        features: [
          "Up to 4 content updates per month",
          "Media uploads (photos & videos)",
          "Promotional content and seasonal updates",
          "Blog post publishing",
          "Google Business Profile posts (2/mo)",
          "Monthly site health check",
          "Priority response within 24 hours",
        ],
        cta: "See Packages",
        ctaStyle: "primary",
        ctaHref: "/shop",
      },
    ],

    faq: [
      { q: "How long does a custom website take to build?",                    a: "Most projects take 3-5 weeks from kickoff to launch. Larger or more complex sites can take 6-8 weeks. We move fast and keep you in the loop at every stage." },
      { q: "Do you write the copy or do I need to provide it?",                a: "We write it. Full copywriting is included in every website project. You'll review and approve everything, but you won't be staring at a blank page." },
      { q: "Will my site rank on Google?",                                     a: "A technically sound site is a prerequisite for ranking, and we build that in from the start. If you want an active SEO campaign on top of the build, we can layer in our Local SEO service." },
      { q: "What platform do you build on?",                                   a: "Next.js. It's faster than WordPress, more flexible than website builders, and purpose-built for performance and SEO. Your site will outperform the competition technically before we've touched keyword targeting." },
      { q: "Can you redesign an existing site, or do you start from scratch?", a: "Both. Redesigns start with an audit of what's working and what isn't. We keep what's performing and rebuild what isn't." },
    ],

    metaTitle: "Web Design McKinney TX | Custom Next.js | Clarion Solutions",
    metaDesc:  "Custom Next.js websites for McKinney TX & North Dallas businesses. Fast, SEO-ready, mobile-first. Full copywriting included. No templates. Book a free call.",
    serviceDescription: "Custom Next.js website development for North Dallas businesses: mobile-first, SEO-optimized, with full copywriting, CRM integration, and analytics setup.",
  },

  "media-production": {
    slug: "media-production",
    name: "Media Production",
    eyebrow: "Media Production · McKinney, TX",
    headline: "Media Production,",
    headlineItalic: "North Dallas.",
    subtext:
      "Professional photo and video content that reflects the real quality of your work, built for Google, social media, and your website.",

    definitionBlock: "Media production for local businesses means creating professional photos and video content that accurately represents the quality of your work, then formatting that content for your website, Google Business Profile, and social media. For North Dallas service businesses, professional media is one of the clearest signals to potential customers that yours is a serious, established operation.",

    aeoPanel: {
      eyebrow: "Why Visual Content Drives Local Business",
      body: "Potential customers look at photos before they call. A service business with outdated or stock photography is invisible during the part of the decision process that happens before someone picks up the phone. Professional media closes that gap.",
      stats: [
        "According to Google (2024), businesses with photos on their Google Business Profile receive 42% more direction requests than those without",
        "BrightLocal (2024) found that 60% of consumers say visual content is a top factor in their decision to trust a local business",
        "Wyzowl (2024) found 91% of businesses now use video as a marketing tool, citing higher engagement than any other content format",
      ],
    },

    includes: [
      { title: "Business Photography",   desc: "Professional photos of your work, your team, your location, and your process, edited and delivered ready to use anywhere." },
      { title: "Short-Form Video",       desc: "Reels and short-form videos that show your work in action, build trust on social, and perform on Google Business Profile." },
      { title: "GBP Content",           desc: "Photos and videos formatted specifically for Google Business Profile, where visual content directly influences your local ranking." },
      { title: "Social Content Packages",desc: "Monthly batches of ready-to-post content for Instagram, Facebook, and other platforms, planned, shot, edited, and captioned." },
      { title: "Brand Assets",          desc: "Logos, banners, profile photos, and other brand materials that look consistent and professional across every platform." },
      { title: "Post-Production",       desc: "Full editing, color grading, captioning, and optimization for each platform's specs. You get finished files, not raw footage." },
      { title: "Content Calendar",      desc: "Monthly content planning so every shoot is purposeful and you always know what's going out and when." },
      { title: "Distribution Support",  desc: "We can post directly to your GBP and social channels on your behalf, or hand you fully formatted, ready-to-post files." },
    ],

    whoFor: {
      intro: "Media production makes the most difference for businesses that do great work but don't look like it online.",
      points: [
        "Contractors and trades whose work speaks for itself but nobody's seen it",
        "Businesses still using iPhone photos on their website and Google Business Profile",
        "Service businesses that want a real social presence without doing it themselves",
        "Businesses preparing to launch or relaunch their website and need current photography",
        "Any North Dallas business that wants their online presence to match the quality of their work",
      ],
    },

    process: [
      { num: "01", title: "Content Planning",  desc: "We build a monthly content plan around your services, upcoming promotions, and platform goals. Every shoot has a purpose before we show up." },
      { num: "02", title: "On-Site Shoot",     desc: "We come to you: your location, your jobsite, wherever your work happens. We serve McKinney, Frisco, Allen, Plano, and the surrounding area." },
      { num: "03", title: "Edit & Deliver",    desc: "Full post-production handled on our end. Finished, formatted photos and videos delivered within the agreed turnaround window." },
      { num: "04", title: "Post & Distribute", desc: "We can post everything to your accounts on a schedule, or hand you the files to use however you like. Your call." },
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
      { q: "How often do you come out to shoot?",                               a: "Most clients start with a monthly shoot. Some do quarterly shoots with content repurposed from a larger library. We'll build a plan that matches your needs and budget." },
      { q: "Do I need to be in McKinney for you to come out?",                  a: "No. We shoot throughout the North Dallas area: Frisco, Allen, Plano, Anna, and surrounding cities. If you're in the region, we can come to you." },
      { q: "What if I only need photos for my website, not ongoing content?",   a: "Totally fine. We do one-time project shoots for website launches, rebrands, and new service additions. No ongoing commitment required." },
      { q: "Will you post to my social media accounts?",                        a: "If you want us to, yes. We can post to your accounts on a schedule as part of a monthly package, or hand you finished files and you post on your own timing." },
      { q: "How does this work with your other services?",                      a: "Media production layers cleanly with everything else we do. Photos and videos we create go straight into your GBP management, your website, and your content strategy, handled by the same team." },
    ],

    metaTitle: "Media Production McKinney TX | Clarion Solutions",
    metaDesc:  "Professional photography & video for McKinney TX & North Dallas businesses. Monthly content packages for Google, social media & your site. Book a free call.",
    serviceDescription: "Professional photography, short-form video production, and monthly content packages for North Dallas businesses, optimized for Google Business Profile, social media, and websites.",
  },

  "clarion-complete-stack": {
    slug: "clarion-complete-stack",
    name: "Clarion Complete Stack",
    eyebrow: "Clarion Complete Stack · McKinney, TX",
    headline: "The Complete",
    headlineItalic: "Clarion Stack.",
    subtext:
      "Our complete done-for-you growth system: AI automation, local SEO, content production, and professional media. Four services. One team. One contract.",

    definitionBlock: "The Clarion Complete Stack is a done-for-you digital growth system that combines AI lead automation, local SEO, content production, and professional media into one integrated monthly contract. Instead of managing separate vendors for each service, McKinney and North Dallas businesses get a single team handling all four disciplines, with everything coordinated toward the same lead generation goals.",

    aeoPanel: {
      eyebrow: "Why Integration Outperforms Individual Services",
      body: "When your SEO, automation, content, and media are managed by one team, they reinforce each other. SEO content feeds your GBP. Media feeds your website. Automation captures the leads your SEO drives in. Separate vendors working independently rarely achieve this compounding effect.",
      stats: [
        "Aberdeen Group research found companies with integrated marketing tools retain 89% of customers versus 33% for companies using disconnected systems",
        "HubSpot (2024) found businesses with integrated marketing automation convert leads at 2.5x the rate of those using siloed tools",
        "According to BrightEdge (2024), integrated content and SEO strategies produce 5.3x more revenue than siloed approaches",
      ],
    },

    includes: [
      { title: "AI Lead Automation",     desc: "24/7 lead capture, missed call text-back, automated follow-up sequences, and appointment reminders. Every lead handled, nothing slipping through." },
      { title: "Local SEO Management",   desc: "Full local SEO: GBP optimization, keyword targeting, citation building, technical audits, and monthly content that builds your authority over time." },
      { title: "Google Business Profile",desc: "Complete GBP management including posts, photos, Q&A, service updates, and monitoring. The single most visible asset for local search." },
      { title: "Content Production",     desc: "Monthly content creation: GBP posts, local landing pages, and blog content that targets your keywords and compounds your rankings." },
      { title: "Media Production",       desc: "Professional photography and short-form video built for your GBP, social media, and website. Shot monthly, delivered ready to use." },
      { title: "Reputation Management",  desc: "Automated review request sequences that grow your Google rating consistently, without requiring any manual follow-up from your team." },
      { title: "CRM & Pipeline Setup",   desc: "Your CRM configured, connected, and maintained so every lead is tracked and no opportunity disappears into a spreadsheet or email chain." },
      { title: "Unified Reporting",      desc: "One clear monthly report covering AI performance, SEO rankings, GBP insights, and content results, in plain English, not agency-speak." },
    ],

    whoFor: {
      intro: "The Clarion Complete Stack is for businesses that are done doing things halfway.",
      points: [
        "Owners tired of managing five different vendors for marketing, SEO, and content",
        "Service businesses in McKinney, Frisco, Allen, or Plano ready to dominate their local market",
        "Businesses currently outranked by competitors who are spending more and doing less",
        "Companies that want one team, one contract, and one clear strategy. No gaps, no handoffs.",
        "Businesses that do great work and need their online presence to match it",
      ],
    },

    process: [
      { num: "01", title: "Strategy Call",    desc: "We learn your market, your goals, and your current gaps. We build a clear 90-day roadmap before a single dollar is spent on execution." },
      { num: "02", title: "Foundation Build", desc: "AI system built, GBP optimized, technical SEO fixed, CRM pipeline configured. The foundation that makes everything else compound." },
      { num: "03", title: "Content & Media",  desc: "First shoot scheduled within 30 days. Monthly content calendar running. Your brand starts showing up where it wasn't before." },
      { num: "04", title: "Grow & Report",    desc: "Monthly reporting across every channel: rankings, leads, AI performance, content. You always know what's working and what's next." },
    ],

    pricing: [
      {
        badge: "Always Free",
        title: "Free Strategy Session",
        price: "$0",
        priceNote: "included with every discovery call",
        features: [
          "30-minute discovery call",
          "High-level business and growth overview",
          "Identify your top 1-2 automation opportunities",
          "Honest assessment of where you stand",
          "Recommendation on best next steps",
          "No pitch, no pressure",
        ],
        cta: "Book a Call",
        ctaStyle: "primary",
      },
      {
        badge: "Complete Package",
        title: "Clarion Complete Stack",
        price: "$4,500",
        priceNote: "per month · no setup fee · cancel anytime after 3-month minimum",
        features: [
          "AI lead capture & automated follow-up",
          "Missed call text-back & appointment reminders",
          "Full local SEO management",
          "Google Business Profile management",
          "Monthly content creation & GBP posts",
          "Monthly on-site media shoot (photos + video)",
          "Reputation & review management",
          "Unified monthly performance report",
        ],
        cta: "Book a Call",
        ctaStyle: "primary",
      },
    ],

    faq: [
      { q: "What makes this different from buying each service separately?", a: "Integration. When one team owns your AI, your SEO, and your content, everything works together. Your SEO content fuels your GBP. Your media feeds your website and your social. Your AI handles the leads your SEO drives in. It compounds in a way that separate vendors who never talk to each other simply can't replicate." },
      { q: "Is there a setup fee?",                                          a: "No. The $4,500/month covers everything: onboarding, setup, and ongoing management. No hidden costs, no upfront project fees on top." },
      { q: "How long before I see results?",                                 a: "AI results show up within the first two weeks, with leads being captured and followed up automatically. SEO results show meaningful movement at 60-90 days. Media and content compound over time. You'll have a clear picture of performance from month one." },
      { q: "Can I cancel at any time?",                                      a: "Yes. No long-term contracts. We'd rather earn your business every month. That said, an integrated system like this builds momentum. Most clients see compounding results the longer they stay in." },
      { q: "Will I have one point of contact or be passed around?",          a: "One team, one point of contact. You'll work directly with the same people throughout, not a support ticket queue. You'll know who to call, and you'll hear from us proactively." },
    ],

    metaTitle: "Clarion Complete Stack | Full-Service Marketing McKinney TX",
    metaDesc:  "AI automation, local SEO, content, and media production under one contract. $4,500/mo, no setup fee. The complete Clarion system for North Dallas businesses.",
    serviceDescription: "The Clarion Complete Stack combines AI automation, local SEO, content production, and professional media into one integrated monthly system for North Dallas businesses.",
  },

};
