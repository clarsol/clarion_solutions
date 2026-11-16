"""
Shared renderer for walk-in audit briefs (Layer 2 -> Layer 3).

Usage:
    python3 audit-system/render.py walk-in-briefs-oct2026

Reads <batch>/briefs.json, renders each entry's front and back page using the
shared templates in audit-system/templates/, and writes
<batch>/rendered/<slug>-front.html and <batch>/rendered/<slug>-back.html.

Score-visibility rule (CLIENT-BRIEF-SPEC.md): overallScore is only ever shown
on the front page when it is >= 30. Below that, or when it is null, the score
block is replaced by heroEvidence. Never both.
"""
import json
import html
import os
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AUDIT_SYSTEM = os.path.join(REPO_ROOT, "audit-system")
TEMPLATES = os.path.join(AUDIT_SYSTEM, "templates")
QR_PLACEHOLDER = os.path.join(AUDIT_SYSTEM, "assets", "qr-placeholder.svg")
SCORE_VISIBILITY_THRESHOLD = 30


def esc(s):
    return html.escape(s or "", quote=False)


def build_score_block(brief):
    score = brief.get("overallScore")
    if score is not None and score >= SCORE_VISIBILITY_THRESHOLD:
        return (
            '  <div class="score-block">\n'
            f'    <span class="number">{esc(str(score))}/100</span>\n'
            '    <span class="label">Online Visibility Score</span>\n'
            '  </div>'
        )
    hero = brief.get("heroEvidence")
    if not hero:
        raise ValueError(
            f"{brief.get('file')}: overallScore is null/<{SCORE_VISIBILITY_THRESHOLD} but "
            "heroEvidence is empty. Per SCHEMA.md, heroEvidence is required whenever the "
            "score is suppressed."
        )
    return f'  <div class="hero-evidence">{esc(hero)}</div>'


def build_costs(costs):
    return "\n".join(
        '  <div class="cost-item">\n'
        f'    <div class="headline">{esc(c["headline"])}</div>\n'
        f'    <div class="detail">{esc(c["detail"])}</div>\n'
        f'    <div class="cost">{esc(c["cost"])}</div>\n'
        "  </div>"
        for c in costs
    )


def build_opportunities(brief):
    opportunities = brief.get("topOpportunities") or []
    if opportunities:
        return "\n".join(
            f'    <li>{esc(o["title"])}<span class="why">{esc(o["whyItMatters"])}</span></li>'
            for o in opportunities
        )
    # Fall back to the plain actions[] list for brief records that predate topOpportunities.
    return "\n".join(f"    <li>{esc(a)}</li>" for a in brief.get("actions", []))


def build_competitor_note(brief):
    note = brief.get("competitorNote")
    if not note:
        return ""
    return f'  <div class="competitor-note">{esc(note)}</div>'


def render_batch(batch_dir):
    briefs_path = os.path.join(batch_dir, "briefs.json")
    with open(briefs_path) as f:
        briefs = json.load(f)

    with open(os.path.join(TEMPLATES, "brief-front.html")) as f:
        front_template = f.read()
    with open(os.path.join(TEMPLATES, "brief-back.html")) as f:
        back_template = f.read()

    out_dir = os.path.join(batch_dir, "rendered")
    os.makedirs(out_dir, exist_ok=True)

    for b in briefs:
        working_html = "\n".join(f"    <li>{esc(w)}</li>" for w in b["working"])

        front = front_template
        front = front.replace("__NAME__", esc(b["name"]))
        front = front.replace("__ADDRESS__", esc(b["address"]))
        front = front.replace("__WORKING__", working_html)
        front = front.replace("__SCORE_BLOCK__", build_score_block(b))
        front = front.replace("__COSTS__", build_costs(b["costs"]))

        back = back_template
        back = back.replace("__NAME__", esc(b["name"]))
        back = back.replace("__OPPORTUNITIES__", build_opportunities(b))
        back = back.replace("__COMPETITOR_NOTE__", build_competitor_note(b))
        back = back.replace("__HOWCHECKED__", esc(b["howChecked"]))
        qr_image = os.path.join(REPO_ROOT, b["qrImage"]) if b.get("qrImage") else QR_PLACEHOLDER
        back = back.replace("__QR_IMAGE__", os.path.relpath(qr_image, out_dir))
        back = back.replace("__QR_TARGET_SHORT__", esc(b.get("qrTarget", "")))

        front_path = os.path.join(out_dir, f"{b['file']}-front.html")
        back_path = os.path.join(out_dir, f"{b['file']}-back.html")
        with open(front_path, "w") as f:
            f.write(front)
        with open(back_path, "w") as f:
            f.write(back)
        print(f"wrote {front_path}")
        print(f"wrote {back_path}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("usage: python3 audit-system/render.py <batch-dir>")
        sys.exit(1)
    render_batch(sys.argv[1])
