import json
import html
import os

BASE = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(BASE, "briefs.json")) as f:
    briefs = json.load(f)

with open(os.path.join(BASE, "template.html")) as f:
    template = f.read()

def esc(s):
    return html.escape(s, quote=False)

for b in briefs:
    working_html = "\n".join(f"    <li>{esc(w)}</li>" for w in b["working"])
    costs_html = "\n".join(
        f'  <div class="cost-item">\n'
        f'    <div class="headline">{esc(c["headline"])}</div>\n'
        f'    <div class="detail">{esc(c["detail"])}</div>\n'
        f'    <div class="cost">{esc(c["cost"])}</div>\n'
        f'  </div>'
        for c in b["costs"]
    )
    actions_html = "\n".join(f"    <li>{esc(a)}</li>" for a in b["actions"])

    out = template
    out = out.replace("__NAME__", esc(b["name"]))
    out = out.replace("__ADDRESS__", esc(b["address"]))
    out = out.replace("__WORKING__", working_html)
    out = out.replace("__COSTS__", costs_html)
    out = out.replace("__ACTIONS__", actions_html)
    out = out.replace("__HOWCHECKED__", esc(b["howChecked"]))

    out_path = os.path.join(BASE, f"{b['file']}.html")
    with open(out_path, "w") as f:
        f.write(out)
    print(f"wrote {out_path}")
