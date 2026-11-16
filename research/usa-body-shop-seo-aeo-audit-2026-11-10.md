# USA Body Shop (USABODYSHOP LLC): SEO + AEO audit, 2026-11-10

Internal audit, not a walk-in brief. Evidence in `research/evidence/2026-11-10-usa-body-shop/`.
"Verified" = checked directly and saved. "Likely" = from a search snippet or third-party summary. "Open" = not checked yet.

## Business snapshot
- Name on site: USABODYSHOP LLC. Directories: "USA Body Shop Collision Repair Center".
- 5604 N McDonald St, **Ste B**, Melissa TX 75454 (the site omits "Ste B"). Phone 469-258-1552 (matches directories).
- Site email: usabodyshopnorthdallas@gmail.com. Facebook email: usabodyshopbyzee@gmail.com (Likely). Two different emails, and "North Dallas" in a Melissa shop's email.
- Domain registered 2025-08-02 at GoDaddy, hosted on GoDaddy cPanel. Site last modified 2025-08-07 (Verified, `rdap.json`, response headers).
- Manta says opened 2014, about 3 employees (Likely, unclaimed listing).

## Provisional scores (SCHEMA 4 x 25%)
| Category | Score | Notes |
|---|---|---|
| Website SEO | 15 | Live and HTTPS, but one page, about 140 words, no meta tags, no schema |
| Local / Google | 72 | Ranks #1 and #2 on Maps; About section is thin; add Auto body shop as secondary |
| Reviews | 62 | 4.9 / 115 and owner replies, but only 1 new review in about 10 months |
| AEO / AI | 12 | Not named in AI answers for Melissa body shops; no structured data |

**Overall: 40.** The Google listing carries the business; the website and AI visibility don't.

## Website: technical SEO (all Verified, `home.html`, `probe-*.txt`)
1. **Every URL returns the homepage with a 200.** /robots.txt, /llms.txt, /services and a made-up URL all return the same 8,408-byte HTML. This means:
   - There is no real robots.txt, so crawlers get HTML where they expect rules.
   - Soft 404s everywhere. Google can index junk URLs as duplicates of the homepage.
2. **Sitemap** is GoDaddy's auto "Managed SSL" stub with one URL and an invalid date (`2025-8-5T...`, which should be `2025-08-05`).
3. **Title tag is just "USABODYSHOP LLC".** No service ("collision repair", "auto body") and no city ("Melissa").
4. **Missing:** meta description, canonical, Open Graph tags, favicon, and any JSON-LD schema (no AutoBodyShop or LocalBusiness markup).
5. **Zero images.** There's no photo of the shop, the work, or the team, and no before-and-after shots.
6. **Thin content.** About 140 visible words. Services are an 11-item list with no pages and no descriptions.
7. **Broken markup.** A second `<script>` block sits after `</html>` and references element IDs that don't exist (`name`, `message`). It's leftover duplicate code.
8. **The review form is fake by design.** Submitted reviews are saved to the visitor's own browser (`localStorage`). Nobody else ever sees them and the owner never receives them. They also render through `innerHTML`, which is a self-XSS. A customer who leaves a review there thinks it posted, and it went nowhere.
9. **Appointment form** posts to formsubmit.co, which forwards to a Gmail address. It works, but it has no confirmation page and no CRM. Leads land in a Gmail inbox. (The formsubmit.co behavior is Likely: it wasn't test-submitted, on purpose.)
10. **An empty "Cars for Sale" section** says "Currently no vehicles listed." It's dead space, and it confuses what the business is.
11. **Positioning is muddled.** The name says body shop, but the first services listed are engine, transmission and brakes. Collision is item 7.
12. Good: HTTPS is valid (GoDaddy DV cert, expires 2027-01-01). The site loads fast (0.2s, tiny page). It works on mobile (viewport set) and has a click-to-call phone link.

## Local / Google (Verified 2026-11-10, Google Maps in Chrome; screenshots `maps-*.jpg`)
- Listing name: **"USA Body Shop Collision & Repair Center"**. 4.9 / 115. 5604 N McDonald St **Ste b**. (469) 258-1552. Links to usabodyshop.com. It has owner photos and a Videos tab.
- **Primary category is "Car repair and maintenance service".** That fits the site, where 7 of 11 listed services are mechanical. But the shop name, most reviews (collision, paint, bumpers, insurance) and the #1 collision rank point to body work. Johnson Auto Body (category Auto body shop) outranks them for "auto body shop". **Decision (Stan): keep the primary as is, since it already ranks #1. Add Auto body shop as a secondary if it isn't there already** (secondary categories aren't visible publicly).
- **Rank (map centered on Melissa):**
  - "collision repair melissa tx": **#1 non-sponsored**, under 2 ads (Caliber, CT Concepts).
  - "auto body shop melissa tx": **#2 non-sponsored**, under 2 ads, behind Johnson Auto Body (12 reviews, correct category). Classic Colors (Ste a) is #5.
- **About tab is nearly empty.** It lists only wheelchair access, onsite service and cards. There's no description, and no mention of free estimates, towing or insurance.
- **The name appears 4 ways:** "USABODYSHOP LLC" (site), "USA Body Shop" (Facebook, MapQuest), "USA Body Shop Collision Repair Center" (Yelp, Yahoo, Manta), and "USA Body Shop Collision & Repair Center" (Google).
- Other NAP issues: the suite is missing on the website. Hours differ on Yahoo (Likely). The emails differ: site northdallas@ vs Facebook byzee@ (Likely). MapQuest has two listings.
- Yelp reportedly links to an old Google business.site page (Likely). Google shut those down in 2024. Exact URL Open.

## Reviews (Verified, sorted Newest, `maps-reviews-newest.jpg`)
- Google 4.9 / 115. Review tags: pricing (22), insurance handling (9), honest staff (5), truck repair (4).
- Customers name the owner **"Zee"** again and again. They mention fair prices, paint and color matching, help with insurance, and fast turnaround.
- **Reviews have stalled.** Newest-first:
  - 1 review a week ago.
  - 2 reviews 10 months ago.
  - Everything else a year ago or older.
- **Reviews from the building next door land on this listing.** Two 4-star reviews from 10 months ago (Gen Hudson, Lame Anderson) describe bad experiences. The owner replied to both that they never worked on those cars and that "there are multiple businesses in this complex." Customers mix up the shops in this building (Classic Colors is in Ste a). Consistent naming and signage photos help with this.
- The owner replies to most reviews. Nobody has replied to the newest one (a week old) yet.
- Yelp 5.0 / 2. Facebook 0 (Likely).

## Competitors (Likely, from Birdeye and search summaries)
- **Classic Colors Collision Repair, 5604 N McDonald St, Ste a.** Same building. 5.0 / 67 on Google (Verified). It ranks below USA on Maps but shows up in AI answers.
- Caliber Collision, 1735 McKinney St, Melissa: 4.8 / 467 on Google, and it runs Maps ads for both searches (Verified).
- Johnson Auto Body, 940 Milrany Ln: 5.0 / 12, "Auto body shop". It outranks USA for "auto body shop" with about a tenth of the reviews (Verified).
- In McKinney: Texas Collision Centers 5.0 / 674 and Tomes Collision 4.8 / 708 (Google, per search summary). Crash Champions NW McKinney lists Melissa in its service area.

## AEO / AI answers
- For "best body shop near Melissa TX 75454" and "auto body shop collision repair Melissa TX", the AI-generated search summaries named Caliber, Classic Colors, Johnson Auto Body, Kwik Kar and others. **USA Body Shop was not mentioned in either.** Its neighbor in Suite A was. (Likely: one search engine, 2026-11-10.)
- Why: an AI has nothing to quote. There are no service pages, no FAQ, no schema, no reviews on the site, and the business facts conflict across sources.
- No llms.txt (the URL returns the homepage).

## Priority fixes
1. **Google listing:** keep the primary category. Add Auto body shop (and Collision repair) as secondary categories. Write the description, and add free estimates, towing and insurance claims.
2. **Restart reviews:** text a review link after every job (GHL). There are 115 happy customers behind this listing and the new reviews have mostly stopped.
3. **Remove the fake review widget.** Replace it with a "Review us on Google" link and real reviews pulled in.
4. **Fix the crawl basics:** a real robots.txt, a proper sitemap, real 404s, a title like "Collision Repair & Auto Body in Melissa, TX | USA Body Shop", a meta description, and AutoBodyShop schema with NAP, hours and geo.
5. **Build pages:** collision repair, frame straightening, paint and refinishing, insurance claims, and mechanical. Include a before-and-after gallery and an FAQ ("Do you work with my insurance?", "Free estimates?", "Towing?"). Facebook claims free towing and free estimates, but the site doesn't mention either.
6. **Clean up citations:** one name, "Ste B" everywhere, one set of hours, one email, and merge the duplicate MapQuest listings.
7. Move the forms into GHL so leads get an auto-text and are tracked, instead of going to a Gmail inbox.
8. Drop the "Cars for Sale" section, or make it real.

## Pitch angle
Zee already wins Google Maps on reputation: #1 for collision repair in Melissa with 4.9 from 115 reviews. Three things hold the shop back:
- **They're missing body-shop searches.** A 12-review shop beats them for "auto body shop". Adding it as a secondary category, without touching the primary, is the low-risk fix.
- **The website looks unfinished.** Its review box throws reviews away, and AI tools mention the shop next door instead.
- **New reviews have almost stopped.** Some of the recent ones were meant for a neighbor in the same building.

Lead with these: restart reviews, add the secondary category, and build a real site with before-and-after work. Media fit: customers praise the paint and color matching, which makes it ideal for before-and-after video.

Ask in person, don't assert:
- Are USA Body Shop and Classic Colors related?
- Is the "North Dallas" email from an older location?
- Who built the site?

## Still open
- Facebook follower count and last post date.
- Business.site URL on Yelp.
