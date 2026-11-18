/*META{"phase":"Project Management Plan","badge":"CHAPTER 5 &middot; THE PMP","chapter":"Chapter 5"}META*/
var CASE={
n:'05',title:'The Plan Is an Agreement',
titleHtml:`The Plan Is<br><em>an Agreement.</em>`,
lede:`The team is staffed on paper, the sponsor has a date, and the plan has fourteen sections to fill. <strong>What makes a Project Management Plan something the team can actually follow?</strong>`,
doctrine:`The PMP as a management agreement, PROC2000 and its place in the lifecycle, the planning inputs, PDT competency, capacity and coordination, Construction from the start, and the acceptance-quality review of a plan (Chapter 5).`,
skill:`Surfacing a conflict inside a document instead of smoothing it over, and holding a plan back when it is internally inconsistent.`,
minutes:'30',
figures:`No funding amounts, dates or approvals are assumed. The sponsor's requested award timing is treated as a customer need.`,
cast:[`<strong>Nora Delgado</strong>, project manager (you)`,`<strong>Dana Whitfield</strong>, Program Manager`,`<strong>Ingrid Larsen</strong>, Engineering; <strong>Rafael Soto</strong>, Construction`,`<strong>Wen Zhao</strong>, Contracting; <strong>Hal Brennan</strong>, senior technical reviewer`,`<strong>Gerald Voss</strong>, sponsor representative`],
trainingTitle:`A Management Agreement, Not a Binder`,
training:`<div class="card"><div class="card-label">Chapter 5 &middot; Planning the Project (PROC2000)</div>
<p>A PMP is the organizing <strong>agreement</strong> for the delivery team. It says what will be delivered, how, who is accountable, what resources are needed, how change is controlled, and how the team will know whether the project is on course. A PMP that compiles forms without resolving the conflicts among them has little operational value, and it is a living document.</p>
<p><strong>If the sponsor asks for an award date that the scope development and acquisition strategy cannot support, the PMP must expose the conflict, assign a resolution owner and obtain an informed decision.</strong> Entering a requested date in the system does not make it achievable.</p></div>
<div class="card"><div class="card-label">An Executable Team: Three Questions</div>
<div class="table-wrap"><table class="ref"><thead><tr><th>Question</th><th>What to test</th></tr></thead><tbody>
<tr><td>Competency</td><td>Can the team perform the work to the required standard? Nominal availability is not proficiency.</td></tr>
<tr><td>Capacity</td><td>Can they perform it when needed, given existing assignments?</td></tr>
<tr><td>Coordination</td><td>Can members and stakeholders make timely, integrated decisions?</td></tr>
</tbody></table></div>
<p>Resource Providers ordinarily assign and balance personnel. The PM leads the team and determines the competencies needed. The PM does not unilaterally replace Resource Provider personnel or treat an unconfirmed offer as an assigned resource. Document a gap with a recommended remedy and escalate through authorized staffing channels. Do not wait for a monthly review.</p>
<p><strong>Construction belongs on the PDT from the start.</strong> "Day 0" means early functional participation, proportionate to the project, with a representative, a planned effort, review dates and a backup.</p></div>
<div class="card"><div class="card-label">Is the Plan Executable? Seven Tests</div>
<div class="table-wrap"><table class="ref"><thead><tr><th>Test</th><th>Ask</th></tr></thead><tbody>
<tr><td>Coverage</td><td>Can a reviewer find all fourteen content areas?</td></tr>
<tr><td>Authority</td><td>Do scope, funding and obligations trace to controlling sources and qualified decisions?</td></tr>
<tr><td>Integration</td><td>Do scope, WBS, risk, contingency, resources, acquisition and reviews describe the same delivery strategy?</td></tr>
<tr><td>Ownership</td><td>Are leads, Resource Providers and approvers identified, with commitments?</td></tr>
<tr><td>Controls</td><td>Are planned, approved baseline, current forecast and change thresholds distinct?</td></tr>
<tr><td>Execution</td><td>Are design, procurement, construction, safety, quality, turnover and reporting actionable?</td></tr>
<tr><td>Publication</td><td>Is the approved version accessible, with endorsements and links to records?</td></tr>
</tbody></table></div>
<p>If a test fails, return the section to the PDT for reconciliation. Do not collect endorsements for an internally inconsistent plan. Approval of a PMP documents a credible plan. It does not release funds, award a contract or establish a new baseline.</p>
<span class="proc-tag">CHAPTER 5</span><span class="proc-tag">PROC2000</span><span class="proc-tag">PROC2020</span><span class="proc-tag">REF8005G</span><span class="proc-tag">ECIFP</span></div>
<div class="card people-card"><div class="card-label">People Skill &middot; Running a Planning Meeting That Resolves Things</div>
<p>Ask each specialist what could make delivery difficult, and give every concern an owner before the meeting ends. Notice who has not spoken. Close with who will do what by when, and read it back.</p></div>`,
domain:'Executing',
hook:`As you work through the case, notice where you favor keeping the meeting smooth over getting the conflict onto the page.`,
reflections:[
`Think of a plan you have seen that looked complete but could not be followed. What was inconsistent?`,
`When someone offers a resource that is not yet confirmed, how do you record it?`,
`How do you decide when a plan section goes back to the team rather than forward for signature?`],
scenario:{label:'The Planning Kickoff',text:`<p>You are <strong>Nora Delgado</strong>, the assigned PM on <strong>Project Ridgeway</strong>. Acceptance with conditions is done and the project record exists. Now the team must produce the PMP.</p>
<p>The sponsor, <strong>Gerald Voss</strong>, has asked that the plan show award within the timeframe he has requested. Engineering (<strong>Ingrid Larsen</strong>), Construction (<strong>Rafael Soto</strong>) and Contracting (<strong>Wen Zhao</strong>) are on the team roster. The Design-Build acquisition approach is under discussion.</p>
<p>The program analyst keeps asking when the plan will be "done."</p>`},
decisions:[
{context:`<p>Ingrid and Wen walk through the scope development timeline and the acquisition steps. Together they believe the sponsor's requested award timing cannot be supported unless scope is defined much earlier than currently expected.</p>`,
prompt:`How does the PMP handle the sponsor's date?`,
options:[
{id:'a',text:`Record the requested date as a customer need, show its conflict with scope and acquisition steps, assign an owner, and request an informed decision.`},
{id:'b',text:`Enter the sponsor's date in the schedule so the plan matches the request, and note the risks in the risk register for the team to watch.`},
{id:'c',text:`Write a plan date that you think is realistic and keep working to it, rather than reopen a conversation the sponsor already considers settled.`},
{id:'d',text:`Leave the date out of the plan for now, since the conflict is likely to resolve itself as scope and acquisition steps become clearer.`}],
cons:{
a:{s:`Exposed the date conflict in the plan, with an owner and a decision request.`,t:`<p>The PMP's assumptions section records the requested timing as a need and shows exactly where it collides with scope development and acquisition. Dana is named as the owner for the decision request, and Mr. Voss sees the conflict on paper with the options to resolve it.</p><p>He does not like it, but he understands the path.</p>`,i:`<strong>What this reveals:</strong> The PMP must expose the conflict, assign a resolution owner and obtain an informed decision. Entering a requested date does not make it achievable.`},
b:{s:`Let the plan show a date the team does not believe.`,t:`<p>The schedule matches the request and nobody on the team trusts it. Months later it slips, the risk register is read as proof the PM knew, and the plan is dismissed as paperwork.</p>`,i:`<strong>What this reveals:</strong> A plan that compiles incompatible commitments has little operational value. Putting a risk beside an unsupportable date does not resolve it.`},
c:{s:`Quietly substituted your own date.`,t:`<p>Mr. Voss notices the difference at the review and asks why no one told him. The honest content of your date is lost in the conversation about secrecy.</p>`,i:`<strong>What this reveals:</strong> A realistic date is not the issue. The decision belongs to those with the authority, and it needs to be visible to the customer.`},
d:{s:`Omitted the hardest fact from the plan.`,t:`<p>The plan has a gap where the key constraint should be. Every reader fills it with their own assumption.</p>`,i:`<strong>What this reveals:</strong> An agreement that omits the central conflict is not yet an agreement.`}}},
{context:`<p>The roster arrives. It lists names across all disciplines. One specialty design reviewer is shown as "50 percent" but you know from earlier work that the same person is committed to another large project during your design window. The Resource Provider says, "We've assigned someone."</p>`,
prompt:`What do you do?`,
options:[
{id:'a',text:`Test competency, capacity and coordination. Log the specialty gap with a recommended remedy and escalate through the staffing channel.`},
{id:'b',text:`Accept the roster. The Resource Provider has said it is assigned, and second-guessing their assignments would strain the working relationship.`},
{id:'c',text:`Remove the person from the roster and substitute someone you prefer, since you know the work and can judge who is a better fit.`},
{id:'d',text:`Hold the issue until the monthly review, where it can be raised with the other items and the right people will be in the room.`}],
cons:{
a:{s:`Tested the roster against competency, capacity and coordination and escalated a documented gap.`,t:`<p>You ask the Resource Provider for confirmed time and timing, and you share the conflict you know about. A gap log records the shortfall, a recommended remedy, and the consequence for schedule and cost if it is not closed. The Resource Provider agrees to look at regional support, and Dana helps with the escalation.</p>`,i:`<strong>What this reveals:</strong> An organization chart is not proof of executable commitments. The PM documents the gap with a remedy and escalates, and does not unilaterally replace Resource Provider personnel.`},
b:{s:`Accepted an unconfirmed assignment as a commitment.`,t:`<p>Design begins, and the specialty review is late because the person is elsewhere. The root cause is a roster that said "assigned" about a resource who was not available.</p>`,i:`<strong>What this reveals:</strong> Nominal labor availability is not proof of technical proficiency or available time. Confirm skills, capacity and timing of availability.`},
c:{s:`Overrode the Resource Provider.`,t:`<p>Replacing personnel is the Resource Provider's call. Your substitute is unavailable, the Resource Provider objects to the way it was handled, and the working relationship you need is damaged.</p>`,i:`<strong>What this reveals:</strong> The PM leads the team and states the competencies needed. Assignment and balancing belong to the Resource Providers.`},
d:{s:`Waited for the next review while the design window approached.`,t:`<p>By the review, a month has gone by. The gap is a late-breaking schedule problem, not a managed risk.</p>`,i:`<strong>What this reveals:</strong> A monthly review should not delay necessary coordination. Unresolved concerns are documented and escalated when found.`}}},
{context:`<p>The draft PMP is nearly done and the endorsements are scheduled. Reading it end to end, you notice that the schedule assumes a Design-Build award sequence that the acquisition strategy section does not describe, and the risk-based contingency is not reflected in the cost section. The program analyst says, "Everyone's reviewed their own section. Let's just get the signatures."</p>`,
prompt:`What do you do?`,
options:[
{id:'a',text:`Hold the endorsements. Return the sections to the PDT to reconcile schedule, strategy, risk and cost, then seek endorsements on one plan.`},
{id:'b',text:`Collect the signatures now and fix the inconsistencies in the next update, so the plan is not held up while the team debates wording.`},
{id:'c',text:`Quietly fix the inconsistencies yourself and send out the revised sections, which saves the owners time and avoids a lengthy meeting.`},
{id:'d',text:`Skip the issue. Approval will release the funds and the contract anyway, and the details can be sorted out once work is underway.`}],
cons:{
a:{s:`Held the plan until its sections described one strategy.`,t:`<p>The PDT meets for an hour. Wen aligns the acquisition section with the schedule, Ingrid and you reflect the contingency in cost, and Rafael adds the access dependency to the schedule logic. The analyst is mildly annoyed about the date and relieved by the result.</p>`,
th:function(d){return d[1]==='a'?'<p>The staffing gap log from earlier now appears in the plan as an owned risk with a schedule consequence, so every section tells the same story.</p>':'';},
i:`<strong>What this reveals:</strong> If an integration test fails, return the section to the PDT for reconciliation rather than obtain endorsements for an internally inconsistent plan.`},
b:{s:`Collected endorsements on an inconsistent plan.`,t:`<p>Signed endorsements now sit on a plan whose parts disagree. The next change request exposes it and the signatures suggest everyone approved the inconsistency.</p>`,i:`<strong>What this reveals:</strong> Endorsement is not reconciliation. A plan that contradicts itself is not executable, whoever signs.`},
c:{s:`Rewrote other people's sections without them.`,t:`<p>Wen finds her acquisition section changed and objects. The sections now disagree about who wrote what, and your fix is rejected on process even though it was right.</p>`,i:`<strong>What this reveals:</strong> Reconciliation is a team activity. Each lead owns their section and must agree to the integrated result.`},
d:{s:`Assumed approval would carry the plan.`,t:`<p>Approval of a PMP documents a credible, sufficiently developed plan. It does not release funds, award a contract or establish a baseline, so the inconsistency remains and so does the unfunded gap.</p>`,i:`<strong>What this reveals:</strong> Approval is not execution authority. The funds, the contract and the baseline each need their own action.`}}}
],
debrief:{
title:`A Plan the Team Can Follow`,
html:`<p>All three decisions asked the same question: would a stranger reading this plan find one delivery strategy and one set of commitments? Ridgeway now has a PMP in progress that records the sponsor's date as a need with an owner, a roster tested against competency, capacity and coordination, and sections that agree.</p>
<p>Construction was on the roster from the start in this case, which is why Rafael's access dependency reached the schedule logic early.</p>`,
ledger:[[`Sponsor's requested date`,`Recorded as a customer need. Conflict and decision owner shown in the plan.`],[`Specialty design coverage`,`Gap logged with remedy and escalation. Not yet closed.`],[`PMP sections`,`Reconciled to one delivery strategy before endorsement.`],[`Baseline and funds`,`Not established by the plan. Separate actions.`]],
handoffTitle:`Hand-off to Chapter 6`,
handoff:`<p>The plan now needs a schedule people can trust. Case File 06 takes up the date everyone believes: how a schedule is built, tested and kept honest.</p>`},
kc:[
{tag:'Doctrine',text:`Which describes the PMP best?`,options:[`A binder of forms completed for compliance`,`The organizing agreement for the delivery team, covering what, how, who, resources, change control and how the team will know it is on course`,`A contract with the customer`,`A one-time document that is not updated`],correct:1,explain:`The PMP is a living management agreement. A plan that compiles forms without resolving conflicts has little operational value.`},
{tag:'Judgment',text:`The sponsor asks for an award date the scope and acquisition steps cannot support. What should the PMP do?`,options:[`Enter the date and note a risk`,`Expose the conflict, assign a resolution owner and obtain an informed decision`,`Use a date you prefer without telling anyone`,`Omit the date`],correct:1,explain:`Entering a requested date does not make it achievable. The PMP should make the conflict visible and owned.`},
{tag:'Doctrine',text:`Which three questions define an executable PDT?`,options:[`Cost, schedule and scope`,`Competency, capacity and coordination`,`Authority, funding and approval`,`Roster, charter and plan`],correct:1,explain:`Competency (can they do it), capacity (when needed) and coordination (timely integrated decisions).`},
{tag:'Judgment',text:`A Resource Provider says a reviewer is "assigned" but you know the reviewer is committed elsewhere. What is the best action?`,options:[`Accept the assignment`,`Replace the person yourself`,`Test it, log the gap with a remedy, and escalate through authorized channels`,`Wait for the monthly review`],correct:2,explain:`The PM states needed competencies and documents gaps. Resource Providers assign and balance personnel, and a monthly review should not delay coordination.`},
{tag:'Doctrine',text:`What does "Day 0" Construction participation mean?`,options:[`Assigning full-time field staff to every new project`,`Early functional participation proportionate to the project, with a representative, planned effort, review dates and a backup`,`Construction joins after award`,`Construction signs the PMP instead of the PM`],correct:1,explain:`Construction belongs on the PDT from the start. Day 0 does not mean a full-time field presence.`},
{tag:'Judgment',text:`In your end-to-end review the schedule, acquisition strategy and cost sections do not agree. What next?`,options:[`Collect signatures and fix it later`,`Return sections to the PDT to reconcile, then seek endorsement`,`Rewrite others' sections quietly`,`Assume approval will resolve it`],correct:1,explain:`Do not obtain endorsements for an internally inconsistent plan. Approval of a PMP does not release funds, award a contract or set a baseline.`}],
commit:`Name one plan or agreement you manage that has a conflict hiding between its sections. What will you do to surface it?`
};
