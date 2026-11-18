import os, re, sys, json

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.dirname(HERE)

FILES = {
 '01': ('CaseFile01_ARequestNotAProject.html', 'A Request, Not a Project'),
 '02': ('CaseFile02_WhoseCallIsIt.html', 'Whose Call Is It?'),
 '03': ('CaseFile03_BeforeYouSayYes.html', 'Before You Say Yes'),
 '04': ('CaseFile04_TwoRecordsOneProject.html', 'Two Records, One Project'),
 '05': ('CaseFile05_ThePlanIsAnAgreement.html', 'The Plan Is an Agreement'),
 '06': ('CaseFile06_TheDateEveryoneBelieves.html', 'The Date Everyone Believes'),
 '07': ('CaseFile07_TheNumberThatMoved.html', 'The Number That Moved'),
 '08': ('CaseFile08_ChoosingThePathToAward.html', 'Choosing the Path to Award'),
 '09': ('CaseFile09_CommentsNobodyResolved.html', 'Comments Nobody Resolved'),
 '10': ('CaseFile10_AwardDay.html', 'Award Day'),
 '11': ('CaseFile11_WhatTheFieldFound.html', 'What the Field Found'),
 '12': ('CaseFile12_ChangeHasAGate.html', 'Change Has a Gate'),
 '13': ('CaseFile13_WhatTheMonthlyReviewDoesNotShow.html', 'What the Monthly Review Does Not Show'),
 '14': ('CaseFile14_OneCustomerManyRequirements.html', 'One Customer, Many Requirements'),
 '15': ('CaseFile15_TurnoverIsNotTheEnd.html', 'Turnover Is Not the End'),
 '16': ('CaseFile16_PuttingItTogether.html', 'Putting It Together'),
}

style = open(os.path.join(HERE, 'style.html')).read()
engine = open(os.path.join(HERE, 'engine.js')).read()

def quicknav(cur):
    parts = ['<a href="index.html" class="cqn-link">Home</a><span class="cqn-sep">&middot;</span>']
    for n, (f, t) in FILES.items():
        cls = 'cqn-link current' if n == cur else 'cqn-link'
        parts.append('<a href="%s" class="%s" title="%s">CF%s</a>' % (f, cls, t.replace('"', ''), n))
    return ''.join(parts)

def build(n, only_check=False):
    case_js = open(os.path.join(HERE, 'cases', 'cf%s.js' % n)).read()
    f, title = FILES[n]
    meta = json.loads(re.search(r'/\*META(.*?)META\*/', case_js, re.S).group(1))
    nxt = '%02d' % (int(n) + 1)
    # inject next-file info
    extra = ''
    if nxt in FILES:
        extra = "CASE.nextFile='%s';CASE.nextN='%s';" % (FILES[nxt][0], nxt)
    else:
        extra = "CASE.nextFile=null;"
    html = TEMPLATE
    html = html.replace('{{TITLE}}', 'Case File %s | %s | Interactive 088 Military Programs PM in USACE' % (n, title))
    html = html.replace('{{HEADER_SUB}}', 'Case File %s &middot; %s' % (n, meta['phase']))
    html = html.replace('{{BADGE}}', meta['badge'])
    html = html.replace('{{QUICKNAV}}', quicknav(n))
    html = html.replace('{{FOOTER_DOC}}', 'PROSPECT 088 %s &middot; Case File %s v0.1 preview &middot; Fictional scenario for instruction only' % (meta['chapter'], n))
    html = html.replace('{{STYLE}}', style)
    html = html.replace('{{SCRIPT}}', case_js + '\n' + extra + '\n' + engine)
    out = os.path.join(OUT, f)
    open(out, 'w').write(html)
    return out

TEMPLATE = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{TITLE}}</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
{{STYLE}}
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
<header role="banner">
  <div class="header-inner">
    <div class="logo-block">
      <div class="logo-seal">088</div>
      <div>
        <div class="logo-primary">Interactive 088: Military Programs PM in USACE</div>
        <div class="logo-sub">{{HEADER_SUB}}</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
      <span class="case-badge">{{BADGE}}</span>
      <button class="hdr-btn" id="font-toggle" onclick="toggleFontSize()">Text: M</button>
      <button class="hdr-btn" id="theme-toggle" onclick="toggleTheme()">Dark Mode</button>
    </div>
  </div>
</header>

<nav class="case-quicknav" aria-label="Case files"><div class="cqn-inner">{{QUICKNAV}}</div></nav>

<div class="progress-bar-wrap" id="progress-bar-wrap" style="display:none;">
  <div class="progress-inner">
    <div class="progress-track" role="progressbar" aria-label="Case file progress" aria-valuemin="0" aria-valuemax="100"><div class="progress-fill" id="progress-fill" style="width:0%"></div></div>
    <div class="progress-labels"><span class="progress-text" id="progress-label">Training</span><span class="progress-pct" id="progress-pct">0%</span></div>
  </div>
</div>

<main class="main" id="main-content" tabindex="-1"></main>

<footer>
  <div class="footer-inner">
    <span class="footer-attr">Interactive 088 &middot; PPM Community of Practice</span>
    <span class="footer-doc">{{FOOTER_DOC}}</span>
  </div>
</footer>

<script>
{{SCRIPT}}
</script>
</body>
</html>
'''

if __name__ == '__main__':
    ns = sys.argv[1:] or sorted(FILES)
    for n in ns:
        p = os.path.join(HERE, 'cases', 'cf%s.js' % n)
        if os.path.exists(p):
            print('built', build(n))
        else:
            print('skip', n)
