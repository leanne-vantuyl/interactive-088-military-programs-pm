/*META{"phase":"Governance and Reporting","badge":"CHAPTER 13 &middot; GOVERNANCE &amp; REPORTING","chapter":"Chapter 13"}META*/
var CASE={
n:'13',title:'What the Monthly Review Does Not Show',
titleHtml:`What the Monthly<br><em>Review Does Not Show.</em>`,
lede:`The monthly review is tomorrow. The charts are green in places and contradictory in others, and a decision is needed that nobody has asked for yet. <strong>How do you make a review change what happens next?</strong>`,
doctrine:`The reporting rhythm, a common evidence cutoff, milestone condition before color, writing a decision request, escalating while options remain, early warning, customer communication, and verifying that an action actually closed (Chapter 13).`,
skill:`Asking leaders for a specific decision they can make, and not letting a closed email stand for a solved problem.`,
minutes:'30',
figures:`The $700,000 and 25-day effects are inherited scenario assumptions from the manuscript's Ridgeway episode, not approved changes. The latest useful decision date must come from the schedule analysis, so none is invented here.`,
cast:[`<strong>Nora Delgado</strong>, project manager (you)`,`<strong>Dana Whitfield</strong>, Program Manager; <strong>Calvin Osei</strong>, DPM`,`<strong>Priya Natarajan</strong>, scheduler; <strong>Marcus Reyes</strong>, Resource Management`,`<strong>Rafael Soto</strong>, Construction; <strong>Ingrid Larsen</strong>, Engineering`,`<strong>Gerald Voss</strong>, sponsor representative; <strong>Lorraine Beck</strong>, installation DPW`],
trainingTitle:`Governance Is a Delivery Decision`,
training:`<div class="card"><div class="card-label">Chapter 13 &middot; Governance and Reporting</div>
<p>Governance exists to <strong>make delivery decisions at the right level at the right time</strong>. The PM builds the reporting rhythm into the PMP and prepares each review so that a leader can decide something. Leaders need the evidence, but they also need to know what is being asked of them.</p>
<div class="table-wrap"><table class="ref"><thead><tr><th>Practice</th><th>What it looks like</th></tr></thead><tbody>
<tr><td>A common evidence cutoff</td><td>State the reporting period and the data cutoff, separate from the dashboard refresh time. Two systems may reflect different periods.</td></tr>
<tr><td>Check the grain</td><td>Confirm records describe the same work. One contract's date applied to a whole project misrepresents it.</td></tr>
<tr><td>Walk discrepancies to their source</td><td>Correct the originating record through its owner. Editing a slide leaves the problem unresolved. If it cannot be resolved, state the competing values, owners and expected resolution.</td></tr>
<tr><td>Milestone condition before color</td><td>A green date is incomplete unless it says whether it is achieved, forecast on time or merely outside a filter. Do not invent an actual, delete a record or move a date to improve status.</td></tr>
</tbody></table></div></div>
<div class="card"><div class="card-label">A Decision Request Someone Can Act On</div>
<p>Lead with the <strong>decision needed, the recommended action and the latest useful decision date</strong>. Explain the mission consequence. Name who can act and what is within that official's authority. Distinguish a resource commitment from a funding action, a customer requirement from contractual direction, and endorsement from formal approval. Present realistic alternatives, including the consequence of no new action, and the uncertainties that could change the recommendation. <strong>The briefing date is an administrative event. The decision date is a delivery constraint.</strong></p></div>
<div class="card"><div class="card-label">Escalate While Options Remain, and Verify Closure</div>
<p>Escalate when an issue exceeds authority, crosses boundaries, needs resources the PDT cannot commit, or threatens a governing commitment. Do not wait for certainty when delay is costly. Give a preliminary account, mark estimates as estimates and say when the next update comes. An early-warning notification gives command visibility. It does not authorize contingency, change a contract, certify funds or revise the baseline.</p>
<p>Closure means the required action occurred and produced the intended result. Sending a request closes the request, not the delivery issue behind it. If staffing was assigned but equipment is unavailable, the risk remains, so report the remaining constraint.</p>
<span class="proc-tag">CHAPTER 13</span><span class="proc-tag">QUAD CHART</span><span class="proc-tag">CCIR #8</span><span class="proc-tag">DECISION BRIEF</span></div>
<div class="card people-card"><div class="card-label">People Skill &middot; Making the Ask Easy to Say Yes To</div>
<p>A leader can only say yes to something specific. Name the person who can act, the action in plain words, the date it must happen by, and what happens if it does not. Then stop talking and let them think.</p></div>`,
domain:'Influencing',
hook:`Notice how you carry a review: as a performance for the room, or as a request to someone who can act.`,
reflections:[
`In your most recent review, what decision did you actually need, and did you ask for it directly?`,
`When two systems disagree, how do you present it without losing the room's confidence?`,
`Think of an action you closed because a message was sent. Was the underlying problem solved?`],
scenario:{label:'The Night Before the Review',text:`<p>On <strong>Project Ridgeway</strong>, the utility conflict from earlier is moving through the process. Preliminary analysis suggests up to <strong>$700,000</strong> and <strong>25 days</strong> of possible effect on the occupancy commitment (inherited scenario assumptions). Utility testing needs specialist support that is a regional resource, and no commitment has been made.</p>
<p>The monthly review with <strong>Dana Whitfield</strong> and <strong>Calvin Osei</strong> is tomorrow. You are assembling the status package.</p>`},
decisions:[
{context:`<p>The dashboard shows Ridgeway's construction award milestone with a different completion value than Construction's own report, and a count of activities appears to include a duplicate. The dashboard refreshed this morning, but the schedule update behind it is older than the field progress report.</p>`,
prompt:`How do you build the package?`,
options:[
{id:'a',text:`Set a stated data cutoff and trace each discrepancy to its owner, so unresolved competing values are shown rather than hidden.`},
{id:'b',text:`Use the dashboard as is. It is the official view, and reconciling it by hand would create a second version of the truth for leaders to question.`},
{id:'c',text:`Edit the slide to show the value you believe is right and remove the duplicate, so leadership sees one clean number and not a confusing mix of data.`},
{id:'d',text:`Cancel the status section until the systems agree, because any number shown now might be wrong, and a missing section is better than a misleading one.`}],
cons:{
a:{s:`Set a cutoff, walked discrepancies to their owners and disclosed what stayed unresolved.`,t:`<p>The analyst explains that the dashboard pulled one contract's date for the whole project and the duplicate is a transfer artifact. Construction corrects its record. One value remains unresolved, so the slide shows both values, their dates and the owner. Dana notes that she can trust what you say about confidence.</p>`,i:`<strong>What this reveals:</strong> A report refreshed today may carry an older source update. Correct the originating record through its owner, and brief a bounded uncertainty instead of unsupported precision.`},
b:{s:`Presented a view you knew was inconsistent.`,t:`<p>The review debates which number is correct instead of the decision. Your credibility takes the hit.</p>`,i:`<strong>What this reveals:</strong> A dashboard's authority does not cure a mismatched grain or an older source.`},
c:{s:`Edited the slide, not the record.`,t:`<p>The slide looks clean and the record is unchanged. The next review shows the original discrepancy and the question of what else was edited.</p>`,i:`<strong>What this reveals:</strong> Editing a slide or dashboard label alone leaves the underlying problem unresolved.`},
d:{s:`Withheld status.`,t:`<p>The review has nothing to react to. Unsupported precision is a failure, and so is silence.</p>`,i:`<strong>What this reveals:</strong> If a discrepancy cannot be resolved, state it. A clear limitation is more useful than no report.`}}},
{context:`<p>You are drafting the decision slide. The PDT has a chronology of the utility issue, a testing window that closes on a date in the schedule analysis, and a need for a qualified regional resource. Priya says, "Let's walk through the whole timeline first so they have context."</p>`,
prompt:`How do you open the request?`,
options:[
{id:'a',text:`Lead with the decision, because leaders have little time: request regional testing support before the window closes, and show options including no action.`},
{id:'b',text:`Walk through the timeline first and arrive at the request at the end, so leadership understands the full context before being asked to decide.`},
{id:'c',text:`Ask leadership to approve the Ridgeway change, since a short, simple ask is easy to act on and respects their limited time in the meeting.`},
{id:'d',text:`Tell leadership regional support will recover the full 25 days, since a clear and confident benefit makes the request easier to approve.`}],
cons:{
a:{s:`Led with a specific decision, an owner and a latest useful date.`,t:`<p>Mr. Osei can answer in a sentence. The request separates the resource commitment, the funding path and the contract determination, each with its owner. The forecast is stated as at risk until prerequisites are confirmed. You also give a CCIR #8 early warning through the prescribed route, so the command is not surprised.</p>`,i:`<strong>What this reveals:</strong> Lead with the decision, the recommended action and the latest useful decision date. Do not compress several authorities into one request. The briefing date is administrative. The decision date is a delivery constraint.`},
b:{s:`Buried the request at the end of a chronology.`,t:`<p>The review spends its time on the story and runs out before it gets to the ask. Mr. Osei leaves unsure what you need.</p>`,i:`<strong>What this reveals:</strong> A chronology may explain cause, but it should not force the leader to discover the request at the end.`},
c:{s:`Asked for a blanket approval.`,t:`<p>Mr. Osei asks which authority you want him to exercise. He cannot approve a contract action, a funding action and a baseline change in one statement.</p>`,i:`<strong>What this reveals:</strong> A single statement that the change is approved would obscure the boundaries between resource, contract, funding and baseline decisions.`},
d:{s:`Promised a recovery the team cannot show.`,t:`<p>The testing prerequisites are not confirmed, the funding path is not confirmed, and no resource is committed. The 25-day recovery is a hope.</p>`,i:`<strong>What this reveals:</strong> Do not announce that regional support will recover the full delay. Identify the window, qualifications, prerequisites and potential benefit.`}}},
{context:`<p>Leadership supports the request. Two weeks later an email arrives: "A tester has been assigned." Your action tracker has a box labeled "Obtain testing support." Engineering mentions quietly that the test equipment is booked elsewhere for the same window.</p>`,
prompt:`What do you do?`,
options:[
{id:'a',text:`Do not close the issue, because the equipment is still booked elsewhere. Verify personnel, prerequisites and equipment and keep the action open.`},
{id:'b',text:`Close the action. The tester was assigned, which was what the action asked for, and tracking it further would add paperwork without new value.`},
{id:'c',text:`Tell the customer the delay is recovered, since the testing resource is now in place and the customer has been waiting for good news on this.`},
{id:'d',text:`Send another reminder email and wait, since the people who must act already know what is needed and have it in writing.`}],
cons:{
a:{s:`Verified implementation and reported the remaining constraint.`,t:`<p>You record that the staffing action succeeded and the delivery risk remains. Engineering and Construction work on the equipment, and the forecast shows the real picture for the next cycle. Mr. Osei learns of the constraint from you, not from a late test.</p>`,
th:function(d){return d[1]==='a'?'<p>Because you separated the resource, funding and contract decisions in the original request, the follow-up can name exactly which one is still incomplete.</p>':'';},
i:`<strong>What this reveals:</strong> Closure should demonstrate that the required action occurred and produced the intended result. If staffing was assigned but testing cannot occur because equipment is unavailable, the original delivery risk remains.`},
b:{s:`Closed an action on the strength of an email.`,t:`<p>The tracker is green and the test cannot occur. The risk resurfaces at the worst time with no one assigned to it.</p>`,i:`<strong>What this reveals:</strong> Sending or answering a request closes the request, not the delivery issue behind it.`},
c:{s:`Overstated the result to the customer.`,t:`<p>The customer plans around a recovered date. When it slips, the customer's trust and your project's are both affected.</p>`,i:`<strong>What this reveals:</strong> Customer communication must match the project record. Explain the cause, the options, what remains uncertain and when the next update comes.`},
d:{s:`Waited for the next reminder cycle.`,t:`<p>The window shrinks while you wait for a reply that does not address the constraint.</p>`,i:`<strong>What this reveals:</strong> Repeated reminders are not a plan. Identify the blocking constraint and bring in the person who can remove it.`}}}
],
debrief:{
title:`Reviews That Change Something`,
html:`<p>All three decisions asked whether the review would change what happened next. A package built on a common cutoff can be trusted, a request with an owner and a date can be acted on, and a closure that checks the result keeps the risk from reappearing. The PM's job in governance is to make the next decision easy and to follow it to the work.</p>`,
ledger:[[`Status package`,`Data cutoff stated. Discrepancies walked to owners. One unresolved value shown with owner.`],[`Decision request`,`Specific regional testing support request with owner and latest useful date. Early warning given.`],[`Action`,`Staffing complete. Equipment constraint open. Delivery risk remains.`],[`Baseline`,`Unchanged by the review. Any change is a separate decision.`]],
handoffTitle:`Hand-off to Chapter 14`,
handoff:`<p>Ridgeway is a Military Programs project with a particular customer and mission. Case File 14 looks at how business-line requirements and customer-specific obligations overlay everything the PM has been doing so far.</p>`},
kc:[
{tag:'Doctrine',text:`Why separate the data cutoff from the dashboard refresh time?`,options:[`They are always the same`,`A report refreshed today may contain an older source update, and different systems may reflect different periods`,`Refresh time is not important`,`Cutoff is a policy term only`],correct:1,explain:`State the reporting period and data cutoff, and disclose refresh time where it affects the decision.`},
{tag:'Doctrine',text:`What should the PM do with a discrepancy between systems that cannot be resolved before the review?`,options:[`Hide it`,`State the competing values, dates, owner and expected resolution, and explain which value supports the present decision`,`Pick one`,`Cancel the review`],correct:1,explain:`Unsupported precision is less useful than a clear limitation.`},
{tag:'Doctrine',text:`What should a decision request lead with?`,options:[`A full chronology`,`The decision needed, the recommended action and the latest useful decision date`,`The history of the issue`,`A list of risks`],correct:1,explain:`A chronology may explain cause, but it should not force the leader to find the request at the end.`},
{tag:'Judgment',text:`Leadership asks you to "approve the change." What is the problem with asking this way?`,options:[`Nothing`,`It compresses several authorities (resource, funding, contract, baseline) into one ambiguous request`,`It is too specific`,`It is too early`],correct:1,explain:`Distinguish a resource commitment from a funding action, and endorsement from formal approval.`},
{tag:'Doctrine',text:`Does an early-warning notification authorize use of contingency or change the baseline?`,options:[`Yes`,`No. It gives command visibility and is separate from the resource, contract, fiscal and baseline decisions`,`Only for MILCON`,`Only if approved by the sponsor`],correct:1,explain:`Keep the early-warning communication separate from the decisions that manage the threat.`},
{tag:'Judgment',text:`A tester has been assigned, but needed test equipment is unavailable. What is the right action status?`,options:[`Closed`,`Staffing action complete, delivery risk remains open, and the constraint is reported`,`Cancelled`,`Escalate to the sponsor only`],correct:1,explain:`Closure should demonstrate that the required action produced the intended result.`}],
commit:`What decision do you actually need from leadership at your next review? Write the sentence that asks for it.`
};
