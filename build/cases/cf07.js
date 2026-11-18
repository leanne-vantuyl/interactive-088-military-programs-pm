/*META{"phase":"Cost and Funding","badge":"CHAPTER 7 &middot; COST &amp; FUNDING","chapter":"Chapter 7"}META*/
var CASE={
n:'07',title:'The Number That Moved',
titleHtml:`The Number<br><em>That Moved.</em>`,
lede:`The estimate came back higher than the program number, and the engineering spend is climbing while a milestone stays open. <strong>Is that a problem, and compared with what?</strong>`,
doctrine:`The common financial vocabulary, Programmed Amount versus the current working estimate, keeping construction and planning-and-design funding apart, funding sufficiency, resource loading and expenditure monitoring (Chapter 7).`,
skill:`Explaining a cost signal to a leader without overstating it, and asking for a decision instead of absorbing a gap.`,
minutes:'30',
figures:`Dollar figures in this case file are illustrative teaching inputs from the chapter's own worked examples. They are not an approved Ridgeway budget, and the manuscript flags that its early figures remain to be reconciled across chapters.`,
cast:[`<strong>Nora Delgado</strong>, project manager (you)`,`<strong>Dana Whitfield</strong>, Program Manager`,`<strong>Marcus Reyes</strong>, Resource Management Office analyst`,`<strong>Ingrid Larsen</strong>, Engineering; <strong>Elena Ortiz</strong>, cost engineer`,`<strong>Gerald Voss</strong>, sponsor representative`],
trainingTitle:`Comparing Like With Like`,
training:`<div class="card"><div class="card-label">Chapter 7 &middot; Cost and Funding Management</div>
<p>A cost signal is only useful when the two numbers being compared contain <strong>equivalent authorized components</strong>. For MILCON, compare the construction-funded Programmed Amount with a corresponding construction-funded current working estimate. Exclude separately funded planning and design from <em>both</em>. A mismatched comparison can create a false cost-pressure signal, or hide a real one.</p>
<div class="table-wrap"><table class="ref"><thead><tr><th>Term</th><th>Caution</th></tr></thead><tbody>
<tr><td>Programmed Amount</td><td>The congressional MILCON construction amount. It is not a cradle-to-grave total and not a synonym for financial authority.</td></tr>
<tr><td>Authorized Amount in the financial system</td><td>Reflects authority recorded there. Do not present it as the program amount or a current estimate.</td></tr>
<tr><td>District estimate versus HQ estimate field</td><td>Verify the source and calculation of any field simply called "current working estimate."</td></tr>
<tr><td>Contingency versus management reserve</td><td>Different allowances with different owners and release rules. Do not blend them.</td></tr>
</tbody></table></div></div>
<div class="card"><div class="card-label">Illustrative Worked Example (From the Chapter)</div>
<p>Illustrative MILCON: the approved construction Programmed Amount is <strong>$24 million</strong>. Separate pre-award planning and design funding is <strong>$2 million</strong>. The current construction estimate on the same component basis is <strong>$29 million</strong>. The <strong>$5 million</strong> difference indicates potential cost pressure. The $2 million must not be added to only one side of the comparison.</p>
<div class="table-wrap"><table class="ref"><thead><tr><th>Option to analyze</th><th>Test</th></tr></thead><tbody>
<tr><td>Revalidate the estimate</td><td>Assumptions, market, quantities, contingency reviewed?</td></tr>
<tr><td>Reassess scope or approach</td><td>Does it still satisfy the approved requirement and scope authority?</td></tr>
<tr><td>Change acquisition or phasing</td><td>Sound, lawful and likely to help?</td></tr>
<tr><td>Seek program or stakeholder direction</td><td>Which authority can adjust funding, authorization, scope or commitment?</td></tr>
<tr><td>Reset forecasts and communicate</td><td>What is the credible outcome pending a decision?</td></tr>
</tbody></table></div>
<p>Funding sufficiency is a <strong>second</strong> test. Even when the estimate is within the program amount, compare legally available funds with the remaining work.</p></div>
<div class="card"><div class="card-label">Monitoring During Execution</div>
<p>Compare planned and actual expenditures by meaningful cost account against milestones. If spending runs above plan while a milestone stays open, ask whether it is productive effort, rework, added reviews, changed scope or accounting timing. It is a <strong>leading indicator that needs investigation</strong>, not proof of a variance. Loading all hours on one summary activity can hide the problem. Load resources on several meaningful activities so spending can be tied to completed work.</p>
<span class="proc-tag">CHAPTER 7</span><span class="proc-tag">PA vs CWE</span><span class="proc-tag">PROC2040</span><span class="proc-tag">P&amp;D SPEND PLAN</span></div>
<div class="card people-card"><div class="card-label">People Skill &middot; Bringing Bad Numbers Upward</div>
<p>Lead with what you know and what you do not. Say what the number is and is not, show the options and who can decide, and say what you will do until they do. Leaders can act on a clear, bounded problem. They cannot act on a surprise.</p></div>`,
domain:'Influencing',
hook:`Notice how you carry a worrying number: do you underplay it, inflate it, or bound it and ask for a decision?`,
reflections:[
`Recall a time two numbers were compared that were not built on the same basis. What happened?`,
`How do you decide whether a spending trend is a warning or noise?`,
`How do you tell a leader about a cost problem when you do not yet know its size?`],
scenario:{label:'Numbers in Motion',text:`<p>On <strong>Project Ridgeway</strong>, planning is under way, and you have two cost items on your desk.</p>
<p>First, the cost engineer, <strong>Elena Ortiz</strong>, has produced a current working estimate. Second, the end-of-month report shows engineering spending above plan while a design-validation milestone is still open.</p>
<p>The figures below are illustrative teaching values, not an approved budget.</p>
<div class="table-wrap"><table class="ref"><thead><tr><th>Item</th><th>Illustrative value</th></tr></thead><tbody>
<tr><td>Construction Programmed Amount</td><td>$24 million</td></tr>
<tr><td>Separate planning and design funding</td><td>$2 million</td></tr>
<tr><td>Current construction estimate, same basis</td><td>$29 million</td></tr>
<tr><td>Engineering spend, end of May: planned / actual</td><td>$650,000 / $790,000</td></tr>
</tbody></table></div>`},
decisions:[
{context:`<p>A manager looks at the sheet and says, "Total estimate is $31 million against a $24 million program. That is a $7 million overrun."</p>`,
prompt:`How do you respond?`,
options:[
{id:'a',text:`Explain that the $31 million adds the funded $2 million to one side only, so like for like it is $29 million against $24 million, about $5 million.`},
{id:'b',text:`Agree. A bigger number is the more conservative warning to give leadership, and overstating the gap is a safer habit than being caught short later in the year.`},
{id:'c',text:`Say the comparison cannot be made until the estimate is final, because any figure shared now could be treated as the official cost position.`},
{id:'d',text:`Add the $2 million to the program amount as well and report no pressure, so both sides of the comparison use the same total.`}],
cons:{
a:{s:`Re-based the comparison so both sides contained the same components.`,t:`<p>The manager pauses, then asks you to put the like-for-like comparison on one page. The pressure is smaller than first stated and still real, and it now has a defined size and a list of options to analyze.</p>`,i:`<strong>What this reveals:</strong> Cost pressure is useful only when both values contain equivalent authorized components. For MILCON, keep construction and separately funded planning and design out of each other's comparison.`},
b:{s:`Used a mismatched, inflated metric.`,t:`<p>The $7 million figure appears in a brief. When corrected, leadership asks which of your numbers to believe, including the genuine $5 million.</p>`,i:`<strong>What this reveals:</strong> A mismatched metric creates a false signal and costs credibility when it is corrected. Conservative does not mean wrong.`},
c:{s:`Declined to compare until the estimate was final.`,t:`<p>Leadership needs to know about the pressure now so they can plan options. Waiting costs the options their lead time.</p>`,i:`<strong>What this reveals:</strong> An early, bounded signal with stated maturity is more useful than silence. Estimates mature; early warning does not wait.`},
d:{s:`Adjusted both sides until the signal vanished.`,t:`<p>The planning and design funding is a separate fence. Adding it to the program amount misstates what Congress approved and hides the real gap.</p>`,i:`<strong>What this reveals:</strong> Keep the funding fences intact. Do not blend separately funded amounts to make a comparison come out.`}}},
{context:`<p>The comparison stands at about $5 million of potential pressure. Mr. Voss asks, "So what are we going to do? I need to tell the command."</p>`,
prompt:`What do you bring him and Dana?`,
options:[
{id:'a',text:`Bring the bounded signal and the options with their tests, so program direction on funding can be sought. State what the forecast shows.`},
{id:'b',text:`Tell him you will cut scope to fit the program amount, so the project stays inside its funding and no one has to ask for more.`},
{id:'c',text:`Tell him the project will be fine, since estimates usually come down as design matures, and there is no reason to alarm anyone early.`},
{id:'d',text:`Tell him you will ask the contractor to absorb the difference, since the contractor has room to find savings and the customer cannot pay more than the program amount.`}],
cons:{
a:{s:`Brought a bounded signal, tested options and a decision owner.`,t:`<p>Dana appreciates that the options each carry a test and an owner. She asks Elena to revalidate assumptions and quantities, and schedules the program-level conversation about direction. Mr. Voss has a measured message for the command.</p>`,i:`<strong>What this reveals:</strong> Present the options, the management test for each, who can decide, and the credible forecast pending a decision.`},
b:{s:`Decided to cut scope on your own authority.`,t:`<p>Scope is set by the controlling instrument and the requirement owner. Cutting it to fit a number changes what the end user receives, and the user finds out second-hand.</p>`,i:`<strong>What this reveals:</strong> Scope changes must still satisfy the approved requirement and scope authority. Cost pressure alone does not authorize them.`},
c:{s:`Offered reassurance the evidence does not support.`,t:`<p>"Estimates come down" is sometimes true and often not. When the estimate holds, you have promised an outcome you cannot deliver.</p>`,i:`<strong>What this reveals:</strong> Hope is not an option analysis. Bound the problem and test the options.`},
d:{s:`Promised an outcome that depends on a process you do not control.`,t:`<p>The contractor is not yet selected, and the price is what the competition produces. A promise to have them absorb a gap is not one you can make.</p>`,i:`<strong>What this reveals:</strong> Do not commit contractor behavior or contract terms you do not control. Coordinate with Contracting on acquisition strategy instead.`}}},
{context:`<p>The end-of-month report: planned engineering expenditures are $650,000 and actual are $790,000, while the design-validation milestone remains open. All engineering hours are loaded on a single summary activity. Dana asks, "Are we overrunning design?"</p>`,
prompt:`What do you tell her?`,
options:[
{id:'a',text:`Say it is a leading indicator, not a verdict, so ask Ingrid what drives it, verify milestone status, and request the forecast for remaining work.`},
{id:'b',text:`Say yes, we are overrunning, and ask for more money now, so funds are in place before the shortfall shows up in the monthly report.`},
{id:'c',text:`Say it is probably just accounting timing, so nothing needs to be done now, and the numbers will settle by themselves once next period's charges post.`},
{id:'d',text:`Say it is probably just accounting timing, so nothing needs to be done now, and the numbers will settle by themselves next period.`}],
cons:{
a:{s:`Treated the trend as an investigation and fixed the data that hid the cause.`,t:`<p>Ingrid explains that two extra review cycles were added by a late customer comment. That is changed scope, not inefficiency, and it needs to go through change control. Priya splits the loading into design, technical review and RFP preparation so next month shows where the money goes.</p>`,i:`<strong>What this reveals:</strong> Expenditures rising while progress stalls is a leading indicator requiring investigation. Resource loading on several meaningful activities lets the PM tie spending to completed work.`},
b:{s:`Declared a variance and requested funds on an unverified signal.`,t:`<p>You ask for money before knowing whether it is productive, rework or a scope change. Dana sends you back to find out first.</p>`,i:`<strong>What this reveals:</strong> A leading indicator is not proof of a variance. Establish cause before requesting resources.`},
c:{s:`Read overspend as progress.`,t:`<p>The milestone is open. Spending is up and progress is not, and the reasoning would make any overrun look like speed.</p>`,i:`<strong>What this reveals:</strong> Compare expenditures against milestone achievement, not against hope. Verify actual status.`},
d:{s:`Assumed the cause without checking.`,t:`<p>Accounting timing is sometimes the answer. Without checking, you will not know, and the next month's number will look the same.</p>`,i:`<strong>What this reveals:</strong> Ask the team to substantiate the forecast with remaining work, available resources and forecast spend.`}}}
],
debrief:{
title:`Numbers With Context`,
html:`<p>All three decisions were about context. The first number was misbuilt, the second needed an owner for each option, and the third was a trend that needed a cause. In each case the PM's value was not the number itself but what it meant and who had to act.</p>`,
ledger:[[`Cost pressure`,`About $5 million, on a like-for-like basis (illustrative). Options identified with tests and owners.`],[`Planning and design funding`,`Kept separate from construction in both values.`],[`Engineering spend`,`Leading indicator under investigation. Cause: added review cycles, to go through change control (if the earlier decision was followed).`],[`Funding sufficiency`,`Second test still to be run against legally available funds.`]],
handoffTitle:`Hand-off to Chapter 8`,
handoff:`<p>Cost pressure and schedule pressure both converge on one decision: how to buy the project. Case File 08 follows Ridgeway into acquisition planning and the choice of path to award.</p>`},
kc:[
{tag:'Doctrine',text:`For MILCON, which comparison correctly shows cost pressure?`,options:[`Construction Programmed Amount against a total estimate that includes separately funded planning and design`,`Construction Programmed Amount against a construction-funded estimate on the same component basis, with planning and design excluded from both`,`Authorized Amount in the financial system against the program amount`,`Any two numbers that are labeled estimates`],correct:1,explain:`Cost pressure is useful only when both values contain equivalent authorized components.`},
{tag:'Doctrine',text:`In the chapter example, the construction Programmed Amount is $24 million and the same-basis estimate is $29 million. What does the difference indicate?`,options:[`A confirmed overrun of $5 million`,`Potential cost pressure of $5 million before considering permitted alternatives, authorizations and approvals`,`A $7 million overrun`,`No concern`],correct:1,explain:`The difference indicates potential pressure to investigate with the available options. The $2 million planning and design amount is not added to one side only.`},
{tag:'Judgment',text:`A manager reports a $7 million overrun by adding separately funded planning and design to the estimate only. What is the best response?`,options:[`Agree, since higher is safer`,`Re-base both sides on the same construction components and present the corrected pressure with options`,`Add the planning and design amount to the program amount too`,`Refuse to compare`],correct:1,explain:`Keep the funding fences intact and correct the comparison without dismissing the real pressure.`},
{tag:'Doctrine',text:`Why is funding sufficiency a second management test?`,options:[`It is the same as the estimate comparison`,`Even when the estimate is within the program amount, legally available funds must still cover the remaining planned work`,`It only applies to reimbursable work`,`It replaces the cost estimate`],correct:1,explain:`Compare funds available under the receipt controls with commitments and remaining work, keeping construction and planning-and-design separate.`},
{tag:'Judgment',text:`Actual engineering spend exceeds plan while a milestone is open. What is the best first step?`,options:[`Declare an overrun and request funds`,`Treat it as a leading indicator, determine whether it reflects productive effort, rework, added reviews, scope change or timing, and verify milestone status`,`Assume it is progress`,`Ignore it`],correct:1,explain:`It is a leading indicator needing investigation, not proof of a variance.`},
{tag:'Doctrine',text:`Why load engineering hours on several meaningful activities instead of one summary activity?`,options:[`To make the budget larger`,`So spending can be connected to completed work and the cause of a trend can be seen`,`Because summary activities are prohibited`,`To replace earned value`],correct:1,explain:`Meaningful loading supports planned-versus-actual analysis without requiring granular budgets for every template line.`}],
commit:`Which cost comparison in your work might be built on mismatched components? How will you check?`
};
