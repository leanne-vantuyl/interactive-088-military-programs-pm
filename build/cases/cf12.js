/*META{"phase":"Monitoring, Control and Change","badge":"CHAPTER 12 &middot; CONTROL &amp; CHANGE","chapter":"Chapter 12"}META*/
var CASE={
n:'12',title:'Change Has a Gate',
titleHtml:`Change Has<br><em>a Gate.</em>`,
lede:`A contract modification is signed, the forecast moves, and a schedule edit makes the date look better. <strong>Which of those changed the baseline, and which only changed what you know?</strong>`,
doctrine:`The baseline, the current forecast, contract terms and financial records as separate things, corrective action versus formal change, thresholds and early warning, the baseline change request, and one change that drives three different decisions (Chapter 12).`,
skill:`Telling leadership the truth about a forecast before the approval process catches up, and resisting a tempting schedule improvement you cannot explain.`,
minutes:'30',
figures:`The $700,000 and 25-day figures are scenario assumptions from the manuscript's Ridgeway episode. They are possible impacts, not approved changes, and no calendar dates are stated here. The manuscript notes these need reconciling with earlier case records.`,
cast:[`<strong>Nora Delgado</strong>, project manager (you)`,`<strong>Priya Natarajan</strong>, scheduler`,`<strong>Wen Zhao</strong>, Contracting Officer; <strong>Rafael Soto</strong>, Construction`,`<strong>Dana Whitfield</strong>, Program Manager; <strong>Calvin Osei</strong>, DPM`,`<strong>Gerald Voss</strong>, sponsor representative`],
trainingTitle:`Four Things That Look Alike`,
training:`<div class="card"><div class="card-label">Chapter 12 &middot; Monitoring, Control and Change</div>
<p>Four items are easy to confuse, and each changes by a different authority.</p>
<div class="table-wrap"><table class="ref"><thead><tr><th>Item</th><th>What it represents</th><th>What changes it</th></tr></thead><tbody>
<tr><td>Approved baseline</td><td>Scope, performance commitments, milestone dates and measures approved through PMP governance</td><td>An authorized baseline change under thresholds and policy</td></tr>
<tr><td>Current schedule and forecast</td><td>The best supported view of remaining work and likely dates</td><td>Progress, logic, remaining durations. It does not amend the baseline.</td></tr>
<tr><td>Contract terms</td><td>Legal rights and obligations under the executed instrument</td><td>An authorized Contracting Officer action</td></tr>
<tr><td>Funding and accounting records</td><td>Obligations, expenditures, accruals, availability</td><td>Authorized financial transactions</td></tr>
</tbody></table></div>
<p><strong>An updated forecast or a signed contract modification does not by itself approve a new project baseline.</strong> Preserve the original commitment even after a revision is approved.</p></div>
<div class="card"><div class="card-label">Corrective Action Before Formal Change</div>
<p>Not every variance needs a change to the plan. First ask whether management action can protect the approved baseline: resequence, resolve a delayed decision, apply planned risk responses, obtain resources, or evaluate the contractor's documented recovery. Fix data errors without changing the baseline. If thresholds or commitments are exceeded, assemble a baseline change request for the designated authority. If a validated threat exceeds the early-warning conditions, <strong>notify command before the request reaches an approval queue</strong>.</p>
<p>The PM does not wait for a modification signature to report a credible threat. <strong>Forecast accuracy comes before baseline decisions.</strong></p>
<span class="proc-tag">CHAPTER 12</span><span class="proc-tag">BASELINE</span><span class="proc-tag">BCR</span><span class="proc-tag">CCIR</span><span class="proc-tag">FORECAST</span></div>
<div class="card people-card"><div class="card-label">People Skill &middot; Reporting a Threat Before It Is Official</div>
<p>Say it early, say what you know and what you do not, and say what you are doing. "I am telling you now because a decision may be needed, and I would rather you hear it from me with the facts than from a report with the date." Leaders reward early, bounded honesty and punish late tidiness.</p></div>`,
domain:'Executing',
hook:`Look for where you are tempted to let a signature, a field edit or a tidy chart stand in for an approval.`,
reflections:[
`When did you last treat something signed by someone else as if it settled an approval that was yours to make?`,
`What is your threshold for telling leadership about a forecast threat before you are certain?`,
`How do you respond when a schedule edit makes a problem go away on paper?`],
scenario:{label:'A Change Moves the Numbers',text:`<p>On <strong>Project Ridgeway</strong>, the utility conflict from the field has been evaluated. The Contracting Officer has determined a contract path. Engineering and Construction estimate a possible <strong>$700,000</strong> added cost and a possible <strong>25-day</strong> effect on the occupancy date (illustrative scenario assumptions).</p>
<p>The project's approved baseline for occupancy has not changed. The scheduler, <strong>Priya Natarajan</strong>, is preparing the monthly update.</p>`},
decisions:[
{context:`<p>Wen executes a contract modification. In the weekly meeting someone says, "The mod is signed, so the baseline is updated. We are fine." Another says, "We should hold the forecast until the numbers are final."</p>`,
prompt:`How do you handle the modification and the forecast?`,
options:[
{id:'a',text:`Treat them as three decisions, because the KO's modification changes the contract, the forecast shows variance, and a baseline change needs its own authority.`},
{id:'b',text:`Accept that the signed modification updates the baseline and report the new date as the commitment, since the contract controls and a second approval would only slow things.`},
{id:'c',text:`Hold the forecast until the numbers are final, so the report does not show a date that might change before it is confirmed.`},
{id:'d',text:`Edit the baseline dates in the schedule to match the forecast, so the report shows the plan and the current view in agreement.`}],
cons:{
a:{s:`Separated the contract action, the forecast and the baseline.`,t:`<p>Priya updates the forecast with the pending change and its uncertainty. The report shows the 25-day variance against the approved baseline, which has not moved. Dana notes that no decision on a baseline change has been made.</p>`,i:`<strong>What this reveals:</strong> The modification changes the contract. The forecast reflects the best supported facts as soon as they are known. A signed modification does not independently amend the approved baseline.`},
b:{s:`Let a contract signature stand in for a baseline approval.`,t:`<p>The new date is reported as a commitment that nobody with baseline authority approved. When Mr. Osei asks which decision created it, there is none.</p>`,i:`<strong>What this reveals:</strong> Authority to change a contract is not authority to change the project baseline.`},
c:{s:`Waited for finality while the threat grew.`,t:`<p>The first report that shows the problem arrives after the decision window has closed.</p>`,i:`<strong>What this reveals:</strong> The PM does not wait for a modification signature before reporting a credible delivery threat.`},
d:{s:`Rewrote the commitment to match the forecast.`,t:`<p>The variance disappears, and with it the evidence that anything changed. The record no longer shows what was originally approved.</p>`,i:`<strong>What this reveals:</strong> Preserve historical commitments. A forecast edit is not a baseline approval.`}}},
{context:`<p>While updating, Priya removes a Finish-to-Start relationship between two activities, and the occupancy forecast moves back inside the approved target. She says, "That tie was probably wrong anyway."</p>`,
prompt:`What do you ask?`,
options:[
{id:'a',text:`Ask whether the removed relationship was really erroneous and the new sequence feasible, because reporting can be mistaken for performance.`},
{id:'b',text:`Accept it. The forecast is better, and the scheduler is the expert on logic and has already reviewed and approved the change.`},
{id:'c',text:`Tell her to restore the tie without asking why, since the original logic was approved and any change should be justified first.`},
{id:'d',text:`Report the improved date to leadership immediately, since good news should travel fast, the team deserves credit, and leaders can brief the new date upward.`}],
cons:{
a:{s:`Tested the logic edit against physical reality before accepting the improvement.`,t:`<p>Rafael explains that the two activities do share a crew and the tie reflected a real dependency. The date moves back to where it was. Priya is a little deflated and, a month later, glad the date was not reported.</p>`,i:`<strong>What this reveals:</strong> A reporting improvement is not a performance improvement. Ask whether the removed relationship was erroneous and whether the sequence is feasible.`},
b:{s:`Accepted a better date without a reason.`,t:`<p>The better date goes into the update. It will not survive contact with the work.</p>`,i:`<strong>What this reveals:</strong> Logic edits change the model. They do not change the work.`},
c:{s:`Reversed her edit without the conversation.`,t:`<p>The forecast is right by accident, and Priya learns to stop explaining her edits.</p>`,i:`<strong>What this reveals:</strong> The question is the useful part. Ask it so the answer improves the model and the team.`},
d:{s:`Reported an unverified improvement upward.`,t:`<p>Leadership hears good news that you cannot explain, and the later correction is awkward.</p>`,i:`<strong>What this reveals:</strong> Forecast accuracy must precede baseline and leadership decisions.`}}},
{context:`<p>The validated forecast now shows the occupancy date 25 days beyond the approved baseline. Contingency consumed and recovery options have been tested. The Change Management Plan thresholds appear to be exceeded, and a BCR would take weeks to move through governance. Mr. Voss asks, "Do I need to tell the command?"</p>`,
prompt:`What do you do?`,
options:[
{id:'a',text:`Document the root cause and test whether contingency absorbs the delay, so command is notified early. Assemble the BCR with the baseline preserved.`},
{id:'b',text:`Wait for the BCR to be approved, then inform the command, so the message goes out with a decision rather than a pending request.`},
{id:'c',text:`Tell the command the baseline has moved, since the delay is real and the command should plan for the new date right away.`},
{id:'d',text:`Absorb the delay by quietly resequencing and never report it, which keeps the baseline intact, avoids needless alarm, and lets the team stay focused on the work.`}],
cons:{
a:{s:`Warned command early and prepared the BCR with the original baseline preserved.`,t:`<p>Your notice says what you know, what you do not, what recovery you tested and what decision is coming. Mr. Osei appreciates hearing it before the BCR. The package documents root cause, thresholds, cost and scope consequences. Until a change is approved, the approved baseline remains the comparison.</p>`,
th:function(d){return d[0]==='a'?'<p>Because you kept the contract action, forecast and baseline distinct from the first meeting, the notice and the BCR do not have to untangle them.</p>':'';},
i:`<strong>What this reveals:</strong> If a validated threat exceeds the early-warning conditions, notify command before the BCR reaches an approval queue. Even after approval, retain the prior approved performance record.`},
b:{s:`Let the approval process set the pace of the warning.`,t:`<p>The command hears of a 25-day slip after the fact, from a report, and asks why they were not told.</p>`,i:`<strong>What this reveals:</strong> Early warning is not contingent on the approval of the change.`},
c:{s:`Told the command the baseline had moved.`,t:`<p>It has not. A request has not been approved. You have overstated what the record shows.</p>`,i:`<strong>What this reveals:</strong> Until a permitted change is approved, the current approved baseline remains the comparison point.`},
d:{s:`Hid a threshold breach.`,t:`<p>The forecast, the contract and the record do not agree, and the first person to compare them finds the discrepancy.</p>`,i:`<strong>What this reveals:</strong> Recovery actions belong in the forecast and the record. Silence is not recovery.`}}}
],
debrief:{
title:`Four Things, Four Owners`,
html:`<p>The common thread was ownership. The KO owns the contract, the PM and scheduler own the forecast, the designated authority owns the baseline, and RM and accounting staff own the financial record. The PM's discipline was to refuse to let one signature or one edit do the work of the others, and to report early so decisions could be made in time.</p>`,
ledger:[[`Contract`,`Modification executed by the KO. Not a baseline change.`],[`Forecast`,`25-day variance (illustrative) shown against the approved baseline, with assumptions.`],[`Schedule logic`,`Edit tested. Dependency verified with Construction.`],[`Baseline`,`Unchanged. BCR prepared for the designated authority. Command notified early.`],[`Financial record`,`Earned-work item verified separately before any accrual action.`]],
handoffTitle:`Hand-off to Chapter 13`,
handoff:`<p>Control information has to travel upward in a form leaders can use. Case File 13 follows Ridgeway into governance and reporting, where a clean monthly review can hide what matters.</p>`},
kc:[
{tag:'Doctrine',text:`Does a signed contract modification by itself approve a new project baseline?`,options:[`Yes`,`No. It changes the contract. A baseline change is a separate decision by the designated authority`,`Only for MILCON`,`Only if the cost is below a threshold`],correct:1,explain:`An updated forecast or a signed contract modification does not by itself approve a new project baseline.`},
{tag:'Doctrine',text:`What does the current schedule and forecast represent?`,options:[`The approved commitment`,`The best supported view of remaining work and likely milestone dates, which does not by itself amend the baseline`,`The contract terms`,`The financial record`],correct:1,explain:`The forecast changes with progress, logic and remaining work. The baseline changes only through authorized change.`},
{tag:'Judgment',text:`A contract modification is expected but not yet signed, and a credible delivery threat exists. What should the PM do about the forecast?`,options:[`Wait for the signature`,`Update the forecast with the pending change and its uncertainty as soon as the facts are supported`,`Edit the baseline`,`Ignore it`],correct:1,explain:`The PM does not wait for a modification signature before reporting a credible delivery threat.`},
{tag:'Judgment',text:`A logic edit moves the occupancy forecast back inside the target. What is the best response?`,options:[`Report the improvement`,`Ask whether the removed relationship was erroneous and whether the sequence is feasible, and keep the old logic until verified`,`Reverse it without discussion`,`Celebrate`],correct:1,explain:`A reporting improvement is not a performance improvement.`},
{tag:'Doctrine',text:`When should command be notified about a validated threat that exceeds the early-warning conditions?`,options:[`After the BCR is approved`,`Before the BCR reaches an approval queue`,`Never`,`After the modification is signed`],correct:1,explain:`Early warning is not contingent on approval of the change.`},
{tag:'Judgment',text:`Until a baseline change is approved, what is the comparison point for variance?`,options:[`The current forecast`,`The current approved baseline`,`The contractor's report`,`The modification`],correct:1,explain:`Even after approval, retain the prior approved performance record.`}],
commit:`Name one decision in your project where a signature or an edit is being treated as an approval it is not. Who actually owns it?`
};
