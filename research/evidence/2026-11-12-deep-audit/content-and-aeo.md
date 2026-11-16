# Content + AEO evidence, 2026-11-12 (Verified in Chrome unless marked)

## Social / content counts
| Business | Instagram | TikTok | Facebook | YouTube | Linked from site? |
|---|---|---|---|---|---|
| USA Body Shop | @usabodyshop_ 46 followers, 8 posts, newest 2026-04-27, oldest 2025-10-06; real repair photos and video; bio lists Melissa + "Anna, TX 5005 Private Rd" | @zee19810 titled "USA BODY SHOP IN MELISSA TX": 93 followers, 215 likes, 14 videos dated 2022-07-04 to 2023-07-03, views 207 to 1,029 each | "USA Body Shop" 6 followers | none found | No social links on site |
| Magnolia Ridge | @magnoliaridgedentistry 59K followers, 897 posts; bio "Kids Airway Dentist / N Dallas ... McKinney area", "Comment EXPAND" lead magnet; reels several a week (newest 2026-11-09), views 974 to 126K | none found | 19K followers (first visible post Apr 20, pinned or latest: Open; FB login wall) | @magnoliaridgedentistry75 9 subscribers, 38 videos, newest "1y ago" | FB, IG, YT |
| Melissa Med Spa | @melissamedspa 1,022 followers, 639 posts; active this week (Veterans Day); mostly flyers/graphics, before-and-afters on Alma (device maker) templates labeled Melissa Med Spa, some stock imagery | none found | melissa.med.spa 3K followers, posted 2026-11-11; has tour and CoolSculpting videos (Google index) | none found | FB only (footer) |
| Dental Studio | @lenasmilesdds 463 followers, 76 posts | @melissadental 1,361 followers, 5,189 likes; only 1 video visible, dated 2025-10-25 (Likely: lazy load) | melissadentalstudio 58 followers, newest ~13w | none | FB, IG, TikTok, LinkedIn, Yelp |
| Exodus | @exodusmechanical 94 followers, 184 posts | @exodus.mechanical 613 followers, 32 videos, newest 2026-11-11, weekly | 1.3K followers, posted ~1h before check | none | FB only |
| Adon | @adoncomplete 151 followers, 740 posts | none | linked (adoncomplete) | none | FB, IG, LinkedIn |
| Dental Wellness of Anna | @dentalwellnessanna 22 followers, 276 posts; Google shows an IG post "Big news from MB2 Dental!" (Likely: MB2 Dental affiliation) | none | 89 followers | none | FB only |

## Site crawl notes
- Magnolia: 59 sitemap URLs (crawl in `magnolia-crawl.json`). 45ish service pages, almost all updated 2026-11-02. FAQ markup only on /frenectomy/ and /myofunctional-therapy/. Blog: 12 posts dated 2025-07-21/22 (national-audience lead-magnet style, titles with typo "AND AND"), 1 post 2026-02-12. /ppc/ and /fbthankyou/ (132-135 words) and /404-not-found/ are in the sitemap with no noindex. /before-and-after-photos/ 268 words, /patient-stories/ 299, /dental-video-library/ 357. Booking via FlexBook; GTM installed. No llms.txt.
- Melissa Med Spa: Cloudflare 403 to scripts and to sitemap.xml even from in-browser fetch; rapid in-browser fetches got a Cloudflare block page (my crawl rate). Sampled: CoolSculpting page 1,268 words with FAQPage, MedicalProcedure, AggregateRating, Review schema. Before-and-after gallery with 14 nonsurgical cases plus injectables, filterable by age/gender. Blog posts weekly (10/10, 10/17/2026) by "Kerri Haziri, APRN-CNP". Site phone 469-727-6138.
- USA Body Shop: unchanged from 11-10 (one page, no images, no schema).

## AI answers (Google AI Mode unless noted; ChatGPT runs are from Stan's account and are personalized; it referenced "your Clarion Solutions research")
- USA Body Shop: "best body shop in Melissa TX" named 2nd (after Classic Colors). "collision repair shop Melissa TX that works with insurance" named 2nd (after Caliber), "Staff members manage claim details and communicate directly with auto insurance providers". "auto paint and dent repair near Anna TX" names the Anna listing: USA Body Shop Collision & Repair Center 5.0 (25), Auto body shop, 4922 Private Rd 5989. ChatGPT "best body shop for collision repair in Melissa TX": 2nd after Caliber, "4.9/5, 114 reviews on one directory" (AutoRepairEstimate.ai).
- Magnolia: "pediatric airway dentist near McKinney TX" NOT named (Bear Pediatric, More Than Smiles, Blossom, Stonebrook). "tongue tie frenectomy for kids Melissa TX" named 2nd. "TMJ dentist Melissa TX" named 1st.
- Melissa Med Spa: "laser hair removal Melissa TX" 1st (Harmony XL Pro, NP-led). "CoolSculpting near Melissa TX" 1st. ChatGPT (11-12 earlier) named injector "Kerri Seymour, APRN-CNP"; site says Kerri Haziri.
