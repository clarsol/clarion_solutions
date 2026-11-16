# Walk-In Brief Claims Audit — October 2026

Audit of every finalized walk-in brief (Sept 2026 batch: 14 businesses; Oct 2026 batch: 8 businesses, T L Central excluded as never finalized). Each specific, falsifiable claim was checked against the backing `research/*.json` file where one exists, and spot-checked live (WebSearch / curl) for the highest-stakes claims (website existence/liveness, specific search-ranking assertions, specific competitor numbers).

Classification: **CONFIRMED FALSE** (directly contradicted by evidence) · **LIKELY FALSE/OVERSTATED** (asserts more than the evidence supports) · **UNVERIFIED** (no local evidence, not independently checked, but plausible) · **OK** (matches verified evidence).

---

## 🔴 HIGH RISK — pull or fix before handing out

### Rock Solid Heating & Cooling (Sept AND Oct batches)
**Risk: HIGH — do not hand out either version as-is.**
- "No website turned up anywhere" / "no website, no listing, no reviews" — **CONFIRMED FALSE**. `research/rock-solid-heating-cooling.json` documents a live site, `rocksolidac.com`, scored 42/100 with detailed per-page findings (missing meta descriptions, etc.). The site exists and was clearly researched — the brief just didn't use that research.
- Oct brief's competitor claim ("Bucks Heating and Air... 46 reviews and a 4.9 rating") — **OK**, live-verified (Bucks Heating and Air, 129 Avalon Dr, Princeton, 4.9/46 — matches exactly), though this specific competitor isn't in the local research JSON (research file lists D.R. Heating and Cooling, Aire Serv of McKinney, CROSS AIR LLC instead — a process gap, not a factual error).

### Dent Ops (Sept AND Oct batches)
**Risk: HIGH — do not hand out either version as-is.**
- "No website" — **CONFIRMED FALSE**. `research/dent-ops.json` documents a live site, `dent-ops.com`, scored 43/100, with a real title tag ("Dent Ops | Veteran Owned Paintless Dent Repair"), meta description, H1, and mobile viewport all confirmed present via direct fetch.
- Oct brief's other claims (ranks for "paintless dent repair Anna TX" but not "hail repair Anna Texas") are not contradicted by anything found — not independently re-verified, but internally consistent with a real site existing.

### Butler Automotive — Sept version specifically
**Risk: HIGH — Sept PDF should not be used; Oct version is the corrected one.**
- "No website found anywhere" — **CONFIRMED FALSE**. `research/butler-automotive.json` documents `butlerautorepair.com`, live, scored 54/100. User independently confirmed the site is real and current.
- Note: the Oct batch's Butler brief was already rewritten to use the real findings (hours mismatch, canonical-tag bug) — see below for a remaining issue in that version.

### Butler Automotive — Oct version
**Risk: MEDIUM-HIGH — one claim must be removed or softened before use.**
- "You don't show up when someone searches 'auto repair Princeton TX'... Valvoline and Jiffy Lube showed up. You didn't." — **CONFIRMED FALSE / OVERSTATED**. User ran the exact search; Butler Automotive appears at position ~7 (after 2 sponsored + 5 organic), 4.7★/123 reviews. They do show up, just not in the first few results. The real, defensible version of this claim is "you're not in the top 5" — not "you don't show up."
- Remaining claims (Google-hours mismatch, canonical tag pointing at a dead domain) are well-sourced in `research/butler-automotive.json`'s `website_seo` factor notes, citing direct fetches — **OK**.

### Crown Plumbing Service (Sept)
**Risk: HIGH — do not hand out as-is.**
- "No website found anywhere" — **CONFIRMED FALSE**. Live site found at `crownplumbingservice.com` (HTTP 200, title "Plumber in Prosper, TX | Crown Plumbing Service", repeated "Prosper" mentions matching the business's city). No research JSON exists for this business at all (see ungrounded-claims section below), so this wasn't even a dropped finding — it looks like the site was simply never searched for.
- "903 reviews at 4.9 stars" — **OK**, independently confirmed via live search (BuildZoom/ContractorFinder both cite 4.9/903).

---

## 🟡 MEDIUM RISK — ungrounded claims (no research file exists at all)

Six Sept-batch businesses have **`sourceResearchFile: null` and `overallScore: null`** in `walk-in-briefs-sept2026/briefs.json`, and no corresponding file exists anywhere in `research/` or elsewhere in the repo: **Green Hail, CTX Plumbing & Electrical, Injectology Medical Spa, The Aesthetic Code, Crown Plumbing Service, THT Air Solutions.** Their briefs nonetheless make specific claims phrased as directly verified ("we checked directly and it fails to connect"), with no saved evidence trail. I spot-checked the riskiest claims live:

### Green Hail: Auto Dent and Hail Repair
**Risk: MEDIUM** — the one specific claim checked is accurate, but nothing else in the brief has any backing file.
- "Your website doesn't load... we checked directly and it fails to connect" — **OK**, live-verified: `green-hail.com` fails SSL handshake on https, returns HTTP 409 on http, both with and without `www`. Consistent with "down," not a search-finding error.
- "No reviews or secondary listing found anywhere" — **UNVERIFIED**, not independently re-checked.

### The Aesthetic Code (Prosper)
**Risk: MEDIUM** — same pattern as Green Hail.
- "Your website doesn't load... the connection fails outright" — **OK**, live-verified: `theaestheticcodetx.com` fails SSL handshake on https, HTTP 409 on http. Note: third-party directories (practicefinder.newpatientsinc.com) have cached/aggregated content describing the practice in detail, which could read as "the site has content" if someone glances at a search result — worth being ready to explain that the *practice's own* site is down even though directory listings about them aren't.
- "5.0 rating across all 10 reviews" — **OK**, matches live search (5/5, 10 Google reviews via directory).

### Injectology Medical Spa (Celina)
**Risk: MEDIUM.**
- "No reviews visible online" — **LIKELY FALSE/OVERSTATED**. Found 93 reviews at 5 stars on a public booking platform (lantern.llc), including a detailed named review. Reviews *are* visible online — just not on Google/Yelp specifically. The brief's framing ("no reviews visible online") is too absolute.
- "No website found anywhere" — **UNVERIFIED**. No owned domain surfaced in search; a guessed domain (injectology.com) redirects to an unrelated generic landing page, not evidence either way.

### CTX Plumbing & Electrical (Celina)
**Risk: MEDIUM, leaning OK but unverified.**
- "No website found anywhere" — **UNVERIFIED (plausible)**. No owned domain surfaced in search or domain guesses (ctxplumbing.com redirects to an unrelated company, "gtxplumbing.com"). No evidence it's false, but also no evidence trail confirming it was actually checked.
- "4.9 stars across 191 reviews" — **OK**, independently confirmed via live search (ServiceForge listing: 4.9/191, matches exactly).

### THT Air Solutions Heating & Cooling (Prosper)
**Risk: MEDIUM, leaning OK but unverified.**
- "No website found anywhere" — **UNVERIFIED (plausible)**. No owned domain surfaced in search. Not contradicted.
- "4.8 stars across 60 reviews" — **OK**, matches live search exactly.

---

## 🟢 LOW RISK / CLEAN — claims check out

### Anna Automotive (Sept)
No website, no reviews, no hours listed — **OK**, matches `research/anna-automotive.json` review_findings and search_observations exactly (multiple independent search passes found nothing).

### Ray's Emergency Air Conditioning and Heating (Sept + Oct)
No website, zero reviews — **OK**, matches `research/rays-emergency-ac.json`. Oct's competitor claim ("Brandon's Comfort Specialists... 477 reviews, 4.9 rating") is close to the Sept master list's figure (4.9/475) — normal review-count drift over ~5 weeks, not an error.

### Kwik Kar of Melissa (Sept + Oct)
"4.9 stars across 275 reviews, no working website" — **OK**, matches `research/kwik-kar-melissa.json` exactly (275 reviews, 4.9 avg, no site or GBP found despite a confirmed physical address).

### JM Electric Co. (Sept + Oct)
"Website is a free Google Sites page that 404s" — **OK**, matches `research/jm-electric.json` (website_seo score 0/100, direct navigation confirmed a 404).

### TechBridge Pacific HVAC Corp (Sept + Oct)
Live site, dual business-name branding (Thermogrid vs TechBridge), personal Gmail contact, zero reviews under either name — **OK**, matches `research/techbridge-pacific-hvac.json` closely, including the website_seo score (69/100) and the dual-branding finding.

### Leader Transmission & Automotive (Oct, new this batch)
- "Your website doesn't load... leaderautocenter.com... every single one failed" — **OK**, live-verified: SSL handshake failure on https, HTTP 409 on http, both www and non-www.
- "You don't show up when someone searches 'auto repair Anna TX'" — **UNVERIFIED (plausible)**, not re-checked with the same local-pack screenshot method the user used for Butler; a generic web search also didn't surface them, which is consistent but not conclusive the same way the Butler screenshot was.
- Scattered review counts (105/97/75/5 across platforms) — **OK**, matches `research/leader-transmission-automotive.json` review_findings exactly.

### T L Central Heating and Air (Oct — never finalized into `final/`, lower priority)
Research shows no website, no reviews, competitor Air Rescue Heating and Cooling with 412 reviews — internally consistent with the brief draft, not independently re-verified since this one was never printed. No action needed unless Stan decides to finish it.

---

## Bottom line

- **Must fix or pull before any site visit:** Rock Solid Heating & Cooling (both batches), Dent Ops (both batches), Butler Automotive Sept version (use the Oct version instead, after removing the "doesn't show up in search" line), Crown Plumbing Service.
- **Should re-verify in person or soften claims before using:** Green Hail, The Aesthetic Code, Injectology Medical Spa, CTX Plumbing & Electrical, THT Air Solutions — all built on zero saved research, so even the claims that checked out here were just lucky, not verified at the time.
- ~~Safe to use as printed~~ **NOT verified safe (follow-up check 2026-10-09):** the "clean" verdicts below mostly compared briefs to their own research files, which come from the same process that produced the errors. A spot-check found:
  - Kwik Kar Oct brief cites "754 reviews on Birdeye", "roughly 280 on Carfax", Saturday hours, and "five doors down" from Christian Brothers. None of these are in `research/kwik-kar-melissa.json` (Birdeye isn't mentioned at all). Its "franchise doesn't list you" claim does check out.
  - Anna Automotive (9016 W White St, no phone, no site, no reviews) and Leader Transmission (916 W White St) may be the same shop. A state permit record shows a 10-bay repair shop at 9016 W White St. Confirm on Google Maps before visiting either.
  - Leader Transmission's "you don't show up for 'auto repair Anna TX'" is the same claim type that was false for Butler, and was never checked.
  - TechBridge: Google Maps shows 5.0 / 50 reviews (checked 2026-10-09). The brief's "zero reviews on Google" claim is false.
  - Ray's: not independently re-checked. JM Electric: website redirect to Google sign-in confirmed live.
