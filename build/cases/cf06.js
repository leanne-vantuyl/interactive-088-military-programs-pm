/*META{"phase":"Schedule","badge":"CHAPTER 6 &middot; SCHEDULE MANAGEMENT","chapter":"Chapter 6"}META*/
var CASE={
n:'06',title:'The Date Everyone Believes',
titleHtml:`The Date<br><em>Everyone Believes.</em>`,
lede:`A template gives you a schedule in an afternoon. A sponsor gives you a date. A dashboard gives you a verdict. <strong>Which of them can you trust, and what does the logic actually say?</strong>`,
doctrine:`Schedule templates and tailoring, scope-to-schedule traceability, external dependencies as schedule milestones, desired versus predicted dates, contingency, updating and schedule health (Chapter 6).`,
skill:`Holding a credible date against a popular one, and giving a sponsor early warning without assigning blame.`,
minutes:'30',
figures:`No dates or durations are assumed in this case file. Template and review requirements are treated as items to verify against the controlling source.`,
cast:[`<strong>Nora Delgado</strong>, project manager (you)`,`<strong>Priya Natarajan</strong>, project scheduler`,`<strong>Dana Whitfield</strong>, Program Manager`,`<strong>Wen Zhao</strong>, Contracting; <strong>Rafael Soto</strong>, Construction`,`<strong>Gerald Voss</strong>, sponsor representative; <strong>Lorraine Beck</strong>, installation DPW`],
trainingTitle:`A Credible Schedule`,
training:`<div class="card"><div class="card-label">Chapter 6 &middot; Schedule Management</div>
<p>A schedule is a model of how work will actually unfold. It has to implement the <strong>authorized scope</strong>, represent the <strong>real sequence</strong> of work and decisions, and reflect the <strong>capacity</strong> to do it. Military Programs projects start from controlled templates, but a template is a starting point. Tailoring is a management decision, and it must not degrade the standard or add activities the controlling instrument does not authorize. A schedule milestone is not authority to obligate funds or begin work.</p></div>
<div class="card"><div class="card-label">What the Schedule Must Show</div>
<div class="table-wrap"><table class="ref"><thead><tr><th>Topic</th><th>Practice</th></tr></thead><tbody>
<tr><td>Scope-to-schedule traceability</td><td>Every major authorized deliverable has schedule work and completion evidence.</td></tr>
<tr><td>External dependencies</td><td>Show stakeholder-controlled milestones, such as a directive, funding authority, stable scope, site access and environmental decisions, with the responsible party. Do not describe another organization's decision as under USACE's unilateral control.</td></tr>
<tr><td>Target versus predicted</td><td>A mission-driven date is a major input, not a substitute for logic. Show the gap, the levers, the cost and risk tradeoffs, and who decides.</td></tr>
<tr><td>Contingency</td><td>Risk-based and transparent, tied to the risk register. Not hidden in padded durations and not double counted.</td></tr>
<tr><td>Updating</td><td>Record actuals and remaining work. Never erase history to make award look earlier.</td></tr>
</tbody></table></div></div>
<div class="card"><div class="card-label">Diagnose, Do Not Merely Grade</div>
<p>Health indicators prompt questions. A milestone past due with no actual may mean work was done but not recorded, or a stale forecast. Excessive constraints may mask a moving critical path. Large unexplained float may mean activities with no successors. Separate data defects from real delivery problems, and assign the correction.</p>
<p>When a sponsor shifts a forecast, update the current schedule, analyze the driving impacts, coordinate downstream commitments and preserve the approved baseline and the correspondence. A logically represented dependency supports explanation. It does not alone establish fault or contractual entitlement.</p>
<span class="proc-tag">CHAPTER 6</span><span class="proc-tag">PROC2030</span><span class="proc-tag">TEMPLATES</span><span class="proc-tag">CONTINGENCY</span></div>
<div class="card people-card"><div class="card-label">People Skill &middot; Early Warning Without Blame</div>
<p>Show the sponsor the dependency on the schedule, name the date it matters, and ask what they can see from their side. "Here is what we need and by when, and here is what it moves if it shifts" invites partnership. "You are late" ends it.</p></div>`,
domain:'Strategic Thinking',
hook:`In this case, watch for where you trust a tidy output (a template, a target, a dashboard) over the logic underneath it.`,
reflections:[
`When have you inherited a schedule that looked ready and was not? What was missing?`,
`When a leader's target date and the schedule logic disagree, how do you present the gap?`,
`How do you tell a sponsor that their milestone is on the critical path without it sounding like blame?`],
scenario:{label:'Building the Date',text:`<p>On <strong>Project Ridgeway</strong>, the PMP is under way and <strong>Priya Natarajan</strong>, the project scheduler, has produced a first schedule from the Military Programs template in a day. It shows completed early milestones and an acquisition activity beginning right away.</p>
<p>The sponsor, <strong>Gerald Voss</strong>, has a date in mind that the command has already heard. The installation, <strong>Lorraine Beck</strong>, has said that a site decision and an operations review are still needed. The team is also waiting on a sponsor-furnished item that feeds acquisition.</p>`},
decisions:[
{context:`<p>You open Priya's schedule. Activities are green, generic review durations look short, and acquisition starts at once. You know the project also needs a security-related review and an installation operations decision that the template does not include.</p>`,
prompt:`What do you do with the schedule?`,
options:[
{id:'a',text:`Ask Priya and the disciplines to validate the template's applicability, remove stale inherited assumptions, add the security review and installation decision as real work with owners, and rebuild a credible sequence before showing any commitment date.`},
{id:'b',text:`Share the schedule with the sponsor as a first look. It is only a draft.`},
{id:'c',text:`Keep the template as is. It is the approved standard, so adding items would be deviating.`},
{id:'d',text:`Add a generic 'other reviews' bar to cover whatever the team might discover.`}],
cons:{
a:{s:`Validated the template and added the real work and its owners.`,t:`<p>Priya adds the two items with their owners and logic. The sequence lengthens, and the schedule now shows what has to happen. The tailoring is documented as a management decision, not a shortcut.</p>`,i:`<strong>What this reveals:</strong> A template is a starting point. Inspect it, validate applicability, remove stale assumptions and add required work. A template can suggest false readiness.`},
b:{s:`Shared a template-based draft that became an expectation.`,t:`<p>Mr. Voss sees early dates and green. "It's only a draft" does not travel with the file. The dates appear in the command's planning notes.</p>`,i:`<strong>What this reveals:</strong> A schedule shown to a sponsor is read as a commitment, whatever the label. Establish a credible sequence before presenting a milestone.`},
c:{s:`Treated the standard as a cage.`,t:`<p>The template is respected and the schedule is wrong. The security review shows up in the field later as a surprise on the critical path.</p>`,i:`<strong>What this reveals:</strong> Tailoring is a management decision to add, modify or remove, made explicitly and not at the expense of the standard.`},
d:{s:`Added a catch-all that hides the work.`,t:`<p>A vague bar with no owner or logic does not tell anyone what must happen, and it cannot be updated meaningfully.</p>`,i:`<strong>What this reveals:</strong> Contingency and unknowns belong in the risk register and in transparent, labeled provisions, not in unexplained generic activities.`}}},
{context:`<p>With the real work in place, the logic predicts a completion date later than the sponsor's. Mr. Voss says, "The command needs it by our date. Just make the schedule show it."</p>`,
prompt:`How do you respond?`,
options:[
{id:'a',text:`Show the gap between desired and predicted dates, the levers that could close it (scope, sequence, resources, acquisition approach), the cost and risk of each, and who must decide. Keep the sponsor's date visible as the target.`},
{id:'b',text:`Compress activity durations until the schedule hits the date.`},
{id:'c',text:`Tell him the date is impossible.`},
{id:'d',text:`Agree to the date and tell the team to find the time.`}],
cons:{
a:{s:`Presented the gap, the levers, the tradeoffs and the decision owner.`,t:`<p>You bring a one-page view: the target, the predicted date, the driving path and three levers. Each lever has a cost or risk, and the decision belongs to Dana and the leaders who can fund or reprioritize. Mr. Voss picks two options to explore.</p>`,i:`<strong>What this reveals:</strong> A service-directed or operational target is a major input but not a substitute for valid logic. Identify the gap, the levers, the tradeoffs and which authority decides.`},
b:{s:`Compressed durations on paper.`,t:`<p>The schedule now shows the date and the team does not believe it. Priya leaves the durations in the file but stops defending them in reviews.</p>`,i:`<strong>What this reveals:</strong> Shortening durations without a change in scope, resources or logic is optimism, and optimism is a repeated forecast failure.`},
c:{s:`Said no without offering a path.`,t:`<p>Mr. Voss hears resistance. The lever discussion that would have helped never starts.</p>`,i:`<strong>What this reveals:</strong> The honest answer is "not on current logic, here is what could change it."`},
d:{s:`Committed to a date the evidence does not support.`,t:`<p>The team is told to find the time. The real constraints do not move, and the date becomes a quiet failure waiting for its month.</p>`,i:`<strong>What this reveals:</strong> Do not claim a schedule is achievable merely because the target date is important.`}}},
{context:`<p>Weeks later, the sponsor-furnished item that feeds acquisition has not arrived by its forecast date. The schedule shows it as a dated milestone with the sponsor as owner. Separately, the dashboard shows Contract Award as past due with no actual date, and Mr. Voss asks why the project looks late.</p>`,
prompt:`What do you do?`,
options:[
{id:'a',text:`Check the dashboard defect (is the milestone aggregate, stale or unrecorded?) and correct the record. Warn the sponsor about the dependency date, update the current schedule, analyze the driving impacts, preserve the approved baseline and correspondence, and do not assert entitlement.`},
{id:'b',text:`Tell Mr. Voss the delay is his fault, since the item is his.`},
{id:'c',text:`Quietly move the baseline date so the dashboard goes green.`},
{id:'d',text:`Ignore the dashboard. Dashboards are noisy.`}],
cons:{
a:{s:`Diagnosed the dashboard, warned the sponsor and preserved the baseline.`,t:`<p>The "past due" flag turns out to be an aggregate milestone with no forecast update, which Priya fixes. The sponsor dependency is real. You share the schedule view, the downstream effect and the date when it begins to bite, and Mr. Voss goes to find the item.</p>`,i:`<strong>What this reveals:</strong> Indicators prompt diagnosis. Separate data defects from genuine delivery problems. A logically represented dependency supports explanation and does not alone establish fault or entitlement.`},
b:{s:`Assigned blame from a schedule report.`,t:`<p>Mr. Voss becomes defensive and stops sharing early information. The item arrives later than it would have.</p>`,i:`<strong>What this reveals:</strong> A dependency on the schedule is an early-warning device, not an accusation.`},
c:{s:`Changed the baseline to fix a display.`,t:`<p>The baseline is an approved commitment. Moving it without authority makes the dashboard green and the record dishonest, and Dana will want to know why.</p>`,i:`<strong>What this reveals:</strong> Preserve the approved baseline. Do not erase history or silently shift dates to make the project look better.`},
d:{s:`Dismissed the dashboard and left the question unanswered.`,t:`<p>The flag goes up the chain unexplained, and the sponsor's question becomes a leadership question.</p>`,i:`<strong>What this reveals:</strong> A flag may be a data issue or a real problem. Diagnose it, correct the record and explain.`}}}
],
debrief:{
title:`What a Schedule Is For`,
html:`<p>Ridgeway's schedule now contains the real work, shows the gap between the sponsor's date and the predicted one with the levers to close it, and carries the sponsor-owned dependency with its date. Each of those makes the schedule less comfortable and more useful.</p>`,
ledger:[[`Template`,`Validated and tailored. Two real reviews added with owners.`],[`Sponsor's target`,`Visible as a target. Predicted date later, with levers and decision owner.`],[`Sponsor-furnished item`,`On the schedule with the sponsor as owner. Impact being analyzed.`],[`Baseline`,`Not yet approved. No dates moved to improve a display.`]],
handoffTitle:`Hand-off to Chapter 7`,
handoff:`<p>A credible schedule needs a credible cost picture to sit beside it. Case File 07 follows the numbers: how an estimate is built, why it moves, and what to do when it does.</p>`},
kc:[
{tag:'Doctrine',text:`How should the PM treat a Military Programs schedule template?`,options:[`As a final schedule`,`As a starting point to inspect, validate for applicability and tailor as a management decision`,`As optional`,`As a contract document`],correct:1,explain:`Tailoring is a management decision. The template must not degrade the standard or add unauthorized work.`},
{tag:'Doctrine',text:`Why should a sponsor-controlled milestone appear on the schedule?`,options:[`To assign fault`,`So the PM can use it as an early-warning device, with the owner identified, and so downstream logic is valid`,`To transfer the work to the sponsor`,`To establish contractual entitlement`],correct:1,explain:`Show external dependencies with the responsible party. A represented dependency supports explanation and does not alone establish fault or entitlement.`},
{tag:'Judgment',text:`The logic predicts a later date than the sponsor wants. What is the best presentation?`,options:[`Compress durations to hit the date`,`Show the gap, the levers, their cost and risk, and who decides`,`Say it is impossible`,`Accept the date`],correct:1,explain:`A target is an input, not a substitute for logic. Present levers and the decision owner.`},
{tag:'Doctrine',text:`How should contingency be treated in the schedule?`,options:[`Hidden in longer durations`,`Transparent, risk-based, tied to the risk register and not double counted`,`Added as an unexplained buffer`,`Omitted`],correct:1,explain:`Contingency must not be hidden in inflated durations or unexplained allowances, and it should link to the risk register.`},
{tag:'Judgment',text:`The dashboard shows Contract Award as past due with no actual date. What is the best first step?`,options:[`Move the baseline`,`Diagnose whether it is unrecorded, stale or an aggregate display, then correct the record and explain`,`Ignore it`,`Blame the sponsor`],correct:1,explain:`Indicators are prompts for diagnosis. Distinguish data defects from real delivery problems.`},
{tag:'Judgment',text:`Which action best preserves the integrity of an approved baseline when a sponsor milestone slips?`,options:[`Silently shift baseline dates`,`Update the current schedule and forecast, analyze impacts, and preserve the approved baseline and correspondence`,`Erase prior activities`,`Assert delay entitlement from a scheduler report`],correct:1,explain:`The baseline records the approved commitment. The current forecast shows what is now expected, and the two are reconciled through controlled change.`}],
commit:`Which date in your portfolio is believed more than the logic supports? What will you show its owner?`
};
