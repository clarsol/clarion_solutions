"""
Two-page AI-focused walk-in handouts (USA Body Shop layout).

Usage:
    python3 build.py            # renders every entry in content.json to html/ and pdf/

Page 1: reputation, what's working, three opportunities.
Page 2: how AI answers about this business, market stats, practical AI jobs.
"""
import html
import json
import os
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
CONTACT = "Stan Wilder | stanw@clarionsol.com | (214) 799-1868"

MARKET_STATS = [
    ("45%", "of consumers used AI tools like ChatGPT to find local businesses, up from 6% a year earlier.", "BrightLocal, 2026"),
    ("76%", "of small businesses already use AI. 93% of them say it has helped.", "Goldman Sachs, 2026"),
    ("39.4%", "of U.S. desktop Google searches showed an AI Overview in June 2026.", "Comscore, 2026"),
]

SOURCES = (
    "Sources: BrightLocal Local Consumer Review Survey 2026 (1,002 U.S. adults); Goldman Sachs 10,000 Small Businesses "
    "Voices, March 2026; Comscore Q2 2026 AI Intelligence Report (desktop only). AI answers are a snapshot, not a full study."
)

CSS = """
@page { size: letter; margin: 14mm 16mm; }
* { box-sizing: border-box; }
:root { --ink:#1b1b1b; --muted:#5a5a5a; --gold:#a8812a; --bar:#c9a646; --cream:#f5f0e6; --rule:#d6d1c4; }
html, body { margin:0; padding:0; background:#fff; color:var(--ink);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size:10.5pt; line-height:1.4; }
.page { height: 250mm; position: relative; page-break-after: always; break-after: page; }
.page:last-child { page-break-after: auto; break-after: auto; }
.bar { height: 2.2mm; background: var(--bar); margin-bottom: 5mm; }
.top { display:flex; justify-content:space-between; align-items:baseline; }
.brand { font-weight:800; font-size:15pt; letter-spacing:.02em; }
.brand span { font-weight:400; font-size:9.5pt; color:var(--muted); margin-left:8px; letter-spacing:.05em; }
.eyebrow { color:var(--gold); font-weight:700; font-size:9pt; letter-spacing:.06em; margin:4mm 0 1.5mm; }
h1 { font-size:24pt; line-height:1.1; margin:0 0 1.5mm; }
.addr { color:var(--muted); font-size:10.5pt; margin:0 0 5mm; }
.hero { background:var(--cream); padding:4mm 6mm; margin-bottom:4mm; border-left:1.2mm solid var(--bar); }
.hero h2 { font-size:17pt; margin:0 0 1.5mm; line-height:1.15; }
.hero p { margin:0; }
.stats { display:flex; gap:6mm; padding-bottom:4mm; border-bottom:1px solid var(--rule); margin-bottom:4mm; }
.stat { flex:1; }
.stat .n { font-size:22pt; font-weight:800; line-height:1.1; }
.stat .l { color:var(--muted); font-size:9.5pt; }
h3 { font-size:13pt; margin:0 0 2.5mm; }
ul.work { margin:0 0 4mm; padding-left:5mm; }
ul.work li { margin-bottom:1mm; }
.opp { display:flex; gap:4mm; margin-bottom:3.5mm; }
.opp .num { color:var(--gold); font-weight:800; font-size:12pt; min-width:8mm; }
.opp .t { font-weight:700; font-size:11.5pt; margin-bottom:.8mm; }
.foot { position:absolute; bottom:0; left:0; right:0; border-top:1px solid var(--rule); padding-top:2mm;
  display:flex; justify-content:space-between; font-size:9pt; font-weight:700; }
.foot .pg { color:var(--muted); font-weight:400; }
.note { font-size:8.5pt; color:var(--muted); margin-top:2mm; }
.mstats { display:flex; gap:4mm; margin-bottom:4mm; }
.mstat { flex:1; border-top:.8mm solid var(--bar); padding-top:2mm; }
.mstat .n { font-size:19pt; font-weight:800; line-height:1.1; }
.mstat .d { font-size:9.5pt; }
.mstat .s { font-size:8pt; color:var(--muted); margin-top:1mm; }
.explain { margin:0 0 3mm; }
table.ai { width:100%; border-collapse:collapse; margin-bottom:3mm; }
table.ai td { border-top:1px solid var(--rule); padding:2mm 2mm 2mm 0; vertical-align:top; }
table.ai tr:last-child td { border-bottom:1px solid var(--rule); }
table.ai .tool { font-weight:700; white-space:nowrap; width:21mm; font-size:9.5pt; }
table.ai .q { font-style:italic; width:62mm; }
.take { font-weight:700; margin:0 0 4mm; }
.job { background:var(--cream); padding:3.5mm 6mm; margin-bottom:3mm; }
.job h3 { margin-bottom:1.5mm; }
.job ul { margin:0; padding-left:5mm; }
.job li { margin-bottom:1mm; }
.cta h3 { margin-bottom:1mm; }
.cta p { margin:0 0 2mm; }
.checked { font-size:9.5pt; color:var(--muted); margin-top:3mm; padding-top:2mm; border-top:1px solid var(--rule); }
"""


def e(s):
    return html.escape(s, quote=False)


def page_one(b):
    stats = "".join(f'<div class="stat"><div class="n">{e(n)}</div><div class="l">{e(l)}</div></div>' for n, l in b["stats"])
    work = "".join(f"<li>{e(w)}</li>" for w in b["working"])
    opps = "".join(
        f'<div class="opp"><div class="num">0{i}</div><div><div class="t">{e(t)}</div><div>{e(d)}</div></div></div>'
        for i, (t, d) in enumerate(b["opportunities"], 1)
    )
    return f"""
<section class="page">
  <div class="bar"></div>
  <div class="top"><div class="brand">CLARION<span>SOLUTIONS</span></div></div>
  <div class="eyebrow">ONLINE PRESENCE AND AI REVIEW / {e(b["city"])}</div>
  <h1>{e(b["name"])}</h1>
  <p class="addr">{e(b["address"])}</p>
  <div class="hero"><h2>{e(b["headline"])}</h2><p>{e(b["sub"])}</p></div>
  <div class="stats">{stats}</div>
  <h3>What's working</h3>
  <ul class="work">{work}</ul>
  <h3>Three opportunities worth fixing first</h3>
  {opps}
  <div class="note">{e(b["footnote"])}</div>
  <div class="checked"><strong>How we checked:</strong> we asked {e(b.get("tools", "Google's AI Mode and ChatGPT"))} the questions on the back on Nov. 12, 2026, {e(b["checked"])}.</div>
  <div class="note">{e(SOURCES)}</div>
  <div class="foot"><div>CLARIONSOL.COM | (214) 799-1868</div><div class="pg">01 / 02</div></div>
</section>"""


def page_two(b):
    mstats = "".join(
        f'<div class="mstat"><div class="n">{e(n)}</div><div class="d">{e(d)}</div><div class="s">{e(s)}</div></div>'
        for n, d, s in MARKET_STATS
    )
    rows = "".join(
        f'<tr><td class="tool">{e(t)}</td><td class="q">"{e(q)}"</td><td>{e(r)}</td></tr>' for t, q, r in b["ai_rows"]
    )
    jobs = "".join(f"<li>{e(j)}</li>" for j in b.get("box_items", b.get("ai_jobs", [])))
    box_title = b.get("box_title", "AI should have a practical job.")
    return f"""
<section class="page">
  <div class="bar"></div>
  <div class="top"><div class="brand">CLARION<span>SOLUTIONS</span></div></div>
  <div class="eyebrow">HOW AI SEES YOUR BUSINESS</div>
  <h3 style="font-size:17pt;margin-bottom:3mm">Your customers are asking AI who to call.</h3>
  <div class="mstats">{mstats}</div>
  <p class="explain">AI tools read your Google listing, reviews, directory sites and website, then name a handful of businesses. They repeat what those sources say, good or bad, and favor businesses whose details match everywhere and whose common questions are answered in plain words.</p>
  <h3>We asked AI the way your customers do</h3>
  <table class="ai">{rows}</table>
  <p class="take">{e(b["takeaway"])}</p>
  <div class="job"><h3>{e(box_title)}</h3><ul>{jobs}</ul><div class="note">{e(b["ai_note"])} Measure calls, bookings and response time. AI mentions are not guaranteed.</div></div>
  <div class="cta"><h3>Start with a short conversation.</h3><p>{e(CONTACT)}</p></div>
  <div class="foot"><div>CLARIONSOL.COM | (214) 799-1868</div><div class="pg">02 / 02</div></div>
</section>"""


def render(b):
    doc = f"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>{e(b["name"])} | Clarion Solutions</title><style>{CSS}</style></head>
<body>{page_one(b)}{page_two(b)}</body></html>"""
    for d in ("html", "pdf"):
        os.makedirs(os.path.join(HERE, d), exist_ok=True)
    hp = os.path.join(HERE, "html", f"{b['file']}.html")
    pp = os.path.join(HERE, "pdf", f"{b['file']}.pdf")
    open(hp, "w").write(doc)
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                    f"--print-to-pdf={pp}", "file://" + hp], check=True, capture_output=True)
    pages = open(pp, "rb").read().count(b"/Type /Page") - open(pp, "rb").read().count(b"/Type /Pages")
    print(f"{b['file']}: {pages} pages -> {pp}")


if __name__ == "__main__":
    only = set(sys.argv[1:])
    for b in json.load(open(os.path.join(HERE, "content.json"))):
        if only and b["file"] not in only:
            continue
        assert "—" not in json.dumps(b, ensure_ascii=False), b["file"]
        render(b)
