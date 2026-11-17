# Interactive 088: Military Programs PM in USACE

Interactive, scenario-based companion to PROSPECT 088 (Military Programs PM). Sixteen case files follow the fictional Project Ridgeway from a customer request to closeout, one per manuscript chapter. The Course Home is `index.html`.

All content is fictional and instructional, and follows the PROSPECT 088 consolidated manuscript v0.10 (peer review draft). It is not validated for production. Dollar figures in Case Files 03, 07 and 10 are illustrative inputs from different chapters, not one approved budget.

## Use
Keep all HTML files in one folder (for example a SharePoint library) so the navigation links work. Open `index.html`. Learner progress is stored in the browser only.

## Rebuild
Case content lives in `build/cases/cfNN.js`. The shared engine is `build/engine.js` and styles are `build/style.html`.

```
cd build && python3 build.py        # writes CaseFileNN_*.html one level up (adjust OUT in build.py if needed)
node tools/test_gen.js CaseFile02_WhoseCallIsIt.html   # needs jsdom
```
