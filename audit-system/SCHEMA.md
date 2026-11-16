# Walk-In Audit System — Schema & Methodology

This is the durable reference for every batch. It defines the two data layers, the scoring
methodology, the curation checklist, and the fields reserved for Phase 2 automation. Read this
before producing a new research record or brief, and before changing any weight below — the
whole point of this document is that the methodology stays the same across every business.

## File layout

```
/research/<slug>.json              Layer 1 — one research record per business, grows forever
/research/<slug>/screenshots/      evidence images referenced by path from that record
/audit-system/SCHEMA.md            this file
/audit-system/templates/           brief-front.html, brief-back.html (shared across all batches)
/audit-system/render.py            shared renderer
/audit-system/prospects.json       shared prospect registry
/walk-in-briefs-<batch>/           per-batch output (briefs.json + rendered HTML + final/*.pdf)
```

`<slug>` is a stable kebab-case id derived from the business name (e.g. `t-l-central-heating-and-air`).
Every layer and future system (outcomes tracking, etc.) joins on this slug. Never change a slug
once a research record exists for it.

---

## Layer 1 — Research Record (`/research/<slug>.json`)

```json
{
  "business": {
    "slug": "",
    "name": "",
    "address": "",
    "city": "",
    "industry": "",
    "website": "",
    "phone": "",
    "audit_date": ""
  },
  "scores": {
    "overall": 0,
    "website_seo": { "score": 0, "factors": [ { "name": "", "points_possible": 0, "points_awarded": 0, "confidence": "", "note": "" } ] },
    "local_google": { "score": 0, "factors": [ ] },
    "reviews_reputation": { "score": 0, "factors": [ ] },
    "aeo_ai": { "score": 0, "factors": [ ] }
  },
  "technical_findings": [ { "finding": "", "evidence": "", "source": "", "confidence": "", "collection_method": "manual-research" } ],
  "local_findings": [ ],
  "aeo_findings": [ ],
  "review_findings": [ ],
  "competitors": [
    {
      "name": "", "address": "", "website": "",
      "why_selected": "",
      "discovery_method": "manual",
      "comparison_points": [ "" ]
    }
  ],
  "search_observations": [
    { "query": "", "date_checked": "", "observed": "", "source": "" }
  ],
  "screenshots": [ { "path": "", "caption": "", "source": "" } ],
  "sources": [ "" ],
  "methodology_notes": "",
  "review_status": "collected"
}
```

Field notes:

- **`confidence`** on every finding/factor is one of: `Verified` (observed directly from the
  primary source — the live site, the listing page itself), `Likely` (strong secondary evidence —
  a search snippet, a third-party aggregator), `Hypothesis` (an informed estimate, explicitly
  marked as such), `Unknown` (could not be assessed). Never state a `Hypothesis` or `Unknown`
  finding as fact.
- **`collection_method`** on every finding and **`discovery_method`** on every competitor exist so
  Phase 2 automation can write into this exact structure later without a schema change: values are
  `manual-research` / `automated-crawl` / `api:<name>` (findings) or `manual` / `automated-serp`
  (competitors). Everything produced by hand today is `manual-research` / `manual`. This costs
  nothing now and means Phase 2 is additive, not a migration.
- **`review_status`** is `collected` → `reviewed` → `approved_for_curation`. v1 sets this by hand.
  When Phase 2 automation exists, it still only ever produces `collected` records — the human
  review gate before anything feeds Layer 2 does not move.
- **`methodology_notes`** is where environment limitations get stated plainly (what couldn't be
  checked and why — no Search Console/GBP Insights access, no live Maps ranking API, etc.). This
  is required whenever a category score leans on `Likely`/`Hypothesis` evidence.

---

## Scoring Methodology

Four categories, **weighted equally at 25% each** — this is a universal weighting applied to every
business regardless of industry, so the methodology never has to be re-argued per batch. (If a
future batch shows a category is systematically uninformative for a whole industry, that's a
reason to revisit this document deliberately, not to quietly reweight one audit.)

**Overall score = simple average of the four category scores.**

### 1. Website / SEO (25%)
- If no independently-owned, live website exists: **category score = 0.** Do not attempt to
  average sub-factors against a site that doesn't exist — this mirrors what's already true in
  practice (a business with no site has no SEO fundamentals to partially credit).
- If a website exists, score out of 100 across:
  - Core on-page SEO present — title tags, meta description, H1, mobile-friendly rendering (30 pts)
  - Structured data / schema present (LocalBusiness or equivalent) (20 pts)
  - Content depth — dedicated service page(s), a location page, any FAQ content (30 pts)
  - Technical health — HTTPS, no broken core links, crawlable (sane robots.txt/sitemap) (20 pts)
  - Any factor that cannot be reliably checked is **excluded from the denominator and the
    remaining factors are renormalized to 100** — missing data is not a penalty unless the
    absence itself is the finding.

### 2. Local / Google Visibility (25%)
- GBP found and reasonably complete — hours, category, correct address (35 pts; 0 if no GBP found)
- NAP consistency across the listings actually found (25 pts; excluded from denominator if fewer
  than 2 listings exist to compare — consistency needs at least two data points)
- Appears in results for the primary local query tested in this audit (40 pts) — label this
  `Likely` (snippet/search-result presence), never `Verified`, since live Maps rank position is
  not reliably fetchable with current tooling (see `methodology_notes`).

### 3. Reviews / Reputation (25%)
- Review volume **relative to the competitor set identified in this same audit** (35 pts) — relative,
  not an absolute threshold, since a "good" count varies by city and industry
- Rating (25 pts)
- Recency — at least one review in roughly the last 6 months (20 pts)
- Owner responses present on any reviews (20 pts)
- If zero reviews are found anywhere: **category score = 0** (this is the finding, not a null).

### 4. AEO / AI Search Readiness (25%)
This category measures **crawlable readiness**, not actual AI recommendation behavior — no
finding here may claim to know how any specific AI model ranks or recommends a business. Every
finding in this category carries a confidence label, and most will be `Likely` or `Hypothesis`.
- Business identity (name, services, location) stated clearly and consistently somewhere crawlable (30 pts)
- Structured data or at minimum consistent NAP across sources an AI system could read (25 pts)
- Content directly answering likely customer questions exists anywhere crawlable (25 pts)
- No contradictory facts found across the sources actually checked — hours/address/services agree
  everywhere (20 pts)

---

## Layer 2 — Brief Record (`briefs.json`, per batch)

Extends the existing shape so the Sept 2026 batch migrates without breaking anything already
printed.

```json
{
  "file": "",
  "name": "",
  "address": "",
  "city": "",
  "industry": "",
  "sourceResearchFile": "research/<slug>.json",
  "overallScore": null,
  "heroEvidence": "",
  "working": [ "" ],
  "costs": [ { "headline": "", "detail": "", "cost": "" } ],
  "competitorNote": "",
  "actions": [ "" ],
  "topOpportunities": [ { "title": "", "whyItMatters": "" } ],
  "howChecked": "",
  "qrTarget": ""
}
```

- **`overallScore`**: populate **only when the Layer 1 overall score is ≥ 30**; otherwise leave
  `null`. This is a direct application of the standing `CLIENT-BRIEF-SPEC.md` rule — never print a
  score alongside another score, and never hand an owner a single-digit grade on their own
  business as the opening move.
- **`heroEvidence`**: when `overallScore` is `null`, this is what fills that space on the front
  page instead — the single strongest evidence-based problem, a competitor comparison, or a
  screenshot caption. Required whenever `overallScore` is `null`.
- **`competitorNote`**: optional, one line, only included when it's a specific, real comparison
  ("your customer searches X and this competitor shows up instead") — never filler.
- Existing fields (`working`, `costs`, `actions`, `howChecked`) keep their current meaning and
  CLIENT-BRIEF-SPEC limits: 2-4 working items, **exactly 3** costs, ordered by impact.

### Curation checklist — Layer 1 → Layer 2

Selecting the top 3 problems and top 3 opportunities is a judgment call, applied consistently via
this checklist (not a formula):

1. Potential business impact
2. Confidence/evidence quality (prefer `Verified`/`Likely` over `Hypothesis` for anything printed)
3. Urgency
4. Ease of explaining to a non-technical owner in one sentence
5. Visual impact (does evidence exist that could be shown, not just stated)
6. Competitive significance (is a named competitor benefiting from this specific gap)
7. Ease/feasibility of fixing

The strongest findings on this checklist are not automatically the most technically severe. A
missing canonical tag is never worth a slot; "there is no website for your customers to find" is.

### Competitor-selection rule

A competitor belongs in `competitors[]` because it **competes for the same customer and the same
search visibility** — confirmed by it actually appearing in results for the primary query tested,
not because it's merely nearby. Document `why_selected` for each one. 2-3 competitors per audit.

---

## Phase 2 (not built in v1 — architecture reserved for it)

The long-term goal is handing the system a business or batch and getting back research, evidence,
competitor discovery, and scores with minimal manual work, reviewed by a human before anything is
curated into Layer 2. v1 performs all research manually (live web search/fetch/browser) because
reliability outranks automation in priority — but every hook needed for Phase 2 already exists
above: `collection_method`, `discovery_method`, and `review_status`. Automated collection is a new
value written into an existing field, not a restructuring.
