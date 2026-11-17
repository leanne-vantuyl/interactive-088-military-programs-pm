/*META{"phase":"Initiation and Funding Receipt","badge":"CHAPTER 4 &middot; INITIATION &amp; FUNDS","chapter":"Chapter 4"}META*/
var CASE={
n:'04',title:'Two Records, One Project',
titleHtml:`Two Records,<br><em>One Project.</em>`,
lede:`The project now exists in the project system and in the financial system. Both look healthy. <strong>What does each record actually prove, and what does it not?</strong>`,
doctrine:`Project initiation (PROC1030), receipt of funds (PROC1040), the four fiscal authority tests, customer order versus funding authorization document, and the separate gates for work, funds, plan and baseline (Chapter 4).`,
skill:`Correcting a confident colleague without making them wrong, and refusing to let a status color stand in for a record.`,
minutes:'25',
figures:`This case file uses no dollar amounts. It follows the manuscript's teaching branch in which an approved funding authorization is less than the current estimated total cost. It does not assume that any budget is approved.`,
cast:[`<strong>Nora Delgado</strong>, project manager (you)`,`<strong>Dana Whitfield</strong>, Program Manager`,`<strong>Marcus Reyes</strong>, Resource Management Office analyst`,`<strong>Tamika Brooks</strong>, program analyst`,`<strong>Gerald Voss</strong>, sponsor representative`],
trainingTitle:`Records, Authority and Gates`,
training:`<div class="card"><div class="card-label">Chapter 4 &middot; Project Initiation and Funding Receipt</div>
<p>A project exists in <strong>two connected records</strong>. PROC1030 establishes it in the project-management workspace and creates the funded work item (FWI) through the interface with the financial system. The financial record does not replace the source of program authority, and the project record does not replace the Resource Management Office's acceptance or recording of funds. The PM keeps a traceable line from the customer requirement through the accepted work package, project identifier, appropriation or agreement, financial work item and planned scope. Do not build competing "official" records in spreadsheets or briefing decks.</p></div>
<div class="card"><div class="card-label">Four Separate Fiscal Tests</div>
<div class="table-wrap"><table class="ref"><thead><tr><th>Test</th><th>Question</th></tr></thead><tbody>
<tr><td>Authority</td><td>Is there legal authority and an accepted assignment for this mission?</td></tr>
<tr><td>Purpose and scope</td><td>Do the proposed activities match the funding purpose and authorized scope?</td></tr>
<tr><td>Time</td><td>Are the funds within their period of availability for this type of obligation?</td></tr>
<tr><td>Amount and controls</td><td>Are sufficient funds and valid administrative controls in place for the amount contemplated?</td></tr>
</tbody></table></div>
<p>These are instructional guardrails, not a substitute for fiscal-law advice. RMO records and validates funds. Contracting and Counsel address legal and contractual consequences. Identify the actual appropriation and fiscal year. Do not presume one period fits all Military Programs work.</p></div>
<div class="card"><div class="card-label">Two Branches of Receipt of Funds</div>
<div class="table-wrap"><table class="ref"><thead><tr><th>Control question</th><th>Customer order</th><th>Funding authorization document (FAD)</th></tr></thead><tbody>
<tr><td>Source document</td><td>Accepted agreement or order</td><td>Approved FAD or distribution instruction</td></tr>
<tr><td>RMO function</td><td>Financial approval and acceptance</td><td>Registration of funding authority</td></tr>
<tr><td>PM concern</td><td>Valid scope, acceptance, customer conditions</td><td>Distribution versus approved project amount</td></tr>
</tbody></table></div>
<p>Authorization, receipt, distribution, obligation and disbursement are different events. An authorization is not a cash allocation, a distribution is not a contractual obligation, and a disbursement does not show the original obligation was proper.</p></div>
<div class="card"><div class="card-label">Funding and Baseline Are Separate Gates</div>
<p>Approved scope, forecast cost and funded amount are three different measures. A baseline represents an approved performance plan and does not add funds. Funding arrival does not validate logic, resource loading, contingency or risk, and does not approve a baseline. Flag each gate separately: accepted work, created project, registered funds, plan endorsed or approved, baseline approved, procurement package executable.</p>
<span class="proc-tag">CHAPTER 4</span><span class="proc-tag">PROC1030</span><span class="proc-tag">PROC1040</span><span class="proc-tag">FWI</span><span class="proc-tag">31 USC 1501</span></div>
<div class="card people-card"><div class="card-label">People Skill &middot; Correcting Without Contradicting</div>
<p>When a respected colleague states something the record does not support, ask a question that lets them find the gap: "Which record shows that?" It protects their standing and keeps the conversation about evidence. Offer the answer only if they cannot find it, and credit the question to the team.</p></div>`,
domain:'Executing',
hook:`Watch for the moments in this case when a tidy status tempts you to stop checking the underlying record.`,
reflections:[
`Where in your work does a status color, a dashboard or a project number stand in for a record you have not actually looked at?`,
`Think of a time funding arrived and the team treated it as permission to proceed. What else had to be true?`,
`How do you usually correct a senior colleague who is mistaken? What has worked?`],
scenario:{label:'The Project Exists',text:`<p><strong>Project Ridgeway</strong> has been accepted with conditions, and you are the assigned PM. The project record has been created, and the funded work item is linked.</p>
<p>The program analyst, <strong>Tamika Brooks</strong>, is preparing the monthly status. The resource management analyst, <strong>Marcus Reyes</strong>, has notified you that a funding authorization has been received. The sponsor, <strong>Gerald Voss</strong>, is eager to see work begin.</p>
<p>This case follows the direct-funded teaching branch. The approved amount is <strong>less than the current estimated total cost</strong>. No figures are assumed.</p>`},
decisions:[
{context:`<p>Mr. Voss calls: "I see Ridgeway has a project number now. So we're funded and we can move to award, right?"</p>`,
prompt:`What do you say?`,
options:[
{id:'a',text:`Explain that the project number shows the project exists in the record. Funding is a separate record, so you will confirm with RMO what authority has been registered, for what amount and purpose, and what it allows before anyone talks about award.`},
{id:'b',text:`Agree. A project number means the money is in place.`},
{id:'c',text:`Tell him you cannot discuss funding because that belongs to RMO.`},
{id:'d',text:`Tell him award is eight months away, so it is too early to discuss funding.`}],
cons:{
a:{s:`Separated the project record from the funding record and committed to confirm the facts.`,t:`<p>Mr. Voss says he assumed the two were the same. You ask Marcus for the registered authority, amount, purpose and conditions, and share a plain summary with Mr. Voss the next day.</p>`,i:`<strong>What this reveals:</strong> The financial record does not substitute for program authority, and the project record does not substitute for RMO's recording of funds. A traceable chain connects requirement, accepted work, project identifier, appropriation or agreement and the financial work item.`},
b:{s:`Let a project number stand in for funding.`,t:`<p>Mr. Voss tells the command that Ridgeway is funded and moving to award. When Marcus confirms the authority is less than the estimated cost, the briefing has to be corrected upward, in front of the same audience.</p>`,i:`<strong>What this reveals:</strong> Creating a project does not create funds. Report funding status from the funding record.`},
c:{s:`Deflected a question that needed a coordinated answer.`,t:`<p>Mr. Voss hears a wall and asks Dana directly. Dana, without the facts, gives a hopeful answer you will later have to qualify.</p>`,i:`<strong>What this reveals:</strong> RMO records and validates funds, but the PM must understand and communicate their meaning to delivery. Coordinate the answer rather than hand it off.`},
d:{s:`Deferred a question that already mattered for planning.`,t:`<p>Funding conditions shape what can be procured and when. By postponing the discussion you give up the chance to align the sponsor's expectations early.</p>`,i:`<strong>What this reveals:</strong> The funding schedule and conditions feed the PMP and acquisition planning. Early alignment is cheaper than late correction.`}}},
{context:`<p>Marcus sends the details. The funding authorization is registered and loaded. It is <strong>less than the current estimated total cost</strong>, and it carries conditions on use. Tamika, building the status, asks, "Can I mark funding green? Funds are in."</p>`,
prompt:`What do you tell Tamika?`,
options:[
{id:'a',text:`Report authority, registered amount and conditions as facts, show the gap to the current estimate, and mark funding not fully funded. List who must act next and what procurement it affects. Distribute to the work item only as the instruction directs.`},
{id:'b',text:`Mark it green. The funds arrived and the gap can be explained verbally.`},
{id:'c',text:`Mark it red and call the project unfunded.`},
{id:'d',text:`Leave funding blank until the gap is resolved.`}],
cons:{
a:{s:`Reported funding as it is: registered, conditional and short of the estimate.`,t:`<p>Tamika's status shows the authority received, its conditions, the gap and the owners of the next actions. Dana appreciates that nobody can read "funded" into it.</p>`,
th:function(d){return d[1]==='b'?'<p>It also corrects the earlier impression you left with Mr. Voss, a little awkwardly, but cleanly.</p>':'';},
i:`<strong>What this reveals:</strong> Do not call the project fully funded when the approved amount is below the estimate. Identify the gap and its procurement implications, and keep the record the source of truth.`},
b:{s:`Let green stand for "money arrived."`,t:`<p>Green travels to the monthly review. Leadership reads "funded." Contracting, planning an award sequence, asks why the funding was never raised as a gap.</p>`,i:`<strong>What this reveals:</strong> A report that looks favorable because a condition was not updated undermines planning and trust. Funding arrival is not funding sufficiency.`},
c:{s:`Overstated the problem.`,t:`<p>Red tells leadership the project has nothing, which is not true. Resources exist, conditioned and partial. You spend a meeting restoring the facts.</p>`,i:`<strong>What this reveals:</strong> Accuracy runs in both directions. The status should say what is registered, what it allows, and what remains unfunded.`},
d:{s:`Hid the problem in silence.`,t:`<p>A blank field invites assumptions. Leadership fills it in with the favorable one.</p>`,i:`<strong>What this reveals:</strong> A visible gap with owners is more useful than a blank. Unresolved funding dependencies belong in the plan and the status.`}}},
{context:`<p>At the monthly review a manager says, "Funds are in, so the baseline must be approved too, and procurement can proceed." A shared spreadsheet in the room shows "Baselined and funded" for Ridgeway. Nobody can say who last edited it.</p>`,
prompt:`How do you respond?`,
options:[
{id:'a',text:`Ask which record shows baseline approval. State the gates separately: accepted work, project created, funds registered, plan status, baseline status, procurement package. Offer to confirm each from its source and fix the spreadsheet to point at them.`},
{id:'b',text:`Say nothing. The meeting is moving and the spreadsheet is probably close enough.`},
{id:'c',text:`Tell the manager flatly that they are wrong in front of the group.`},
{id:'d',text:`Approve the baseline yourself to make the status true.`}],
cons:{
a:{s:`Asked for the record and separated the gates without embarrassing anyone.`,t:`<p>You ask, "Which record shows the baseline approval?" Nobody can name it. You lay out the gates and say you will confirm each from its source. The manager agrees and Tamika offers to change the spreadsheet to link to the source records instead of holding its own status.</p>`,i:`<strong>What this reveals:</strong> Funding arrival does not validate logic ties, resource loading, contingency or risk, and does not approve a baseline. A reporting edit cannot replace the required funding or contract action.`},
b:{s:`Let a competing record stand.`,t:`<p>The spreadsheet's "Baselined and funded" is copied into an upward brief. Weeks later the real status surfaces and the discrepancy is blamed on the PM's silence.</p>`,i:`<strong>What this reveals:</strong> Competing "official" records in spreadsheets or decks erode the traceable chain. Silence is a choice.`},
c:{s:`Corrected the person instead of the record.`,t:`<p>The manager is right to feel embarrassed, and the discussion shifts to whose fault it was. The gates still never get listed.</p>`,i:`<strong>What this reveals:</strong> A question about the record corrects the same error and protects the relationship.`},
d:{s:`Tried to make the status true by acting outside your authority.`,t:`<p>A baseline is approved by the proper official on a valid plan. Doing it yourself would be both unauthorized and invalid, and it would be your signature on it.</p>`,i:`<strong>What this reveals:</strong> Do not change a status by performing an action you are not authorized to perform. Close the gate through the owner, or report that it is open.`}}}
],
debrief:{
title:`What Each Record Proves`,
html:`<p>Each decision asked what a given record actually proves. The project number proves a project exists. The funding authorization proves some authority is registered, with conditions. Neither proves the plan is approved, the baseline is valid or the procurement package is executable.</p>
<div class="table-wrap"><table class="ref"><thead><tr><th>Gate</th><th>What closes it</th></tr></thead><tbody>
<tr><td>Accepted work</td><td>Acceptance decision by the authorized official</td></tr>
<tr><td>Project created</td><td>Project record and funded work item through initiation</td></tr>
<tr><td>Funds registered</td><td>RMO recording, with conditions noted</td></tr>
<tr><td>Plan and baseline</td><td>Endorsed or approved plan and an approved baseline, later chapters</td></tr>
<tr><td>Procurement executable</td><td>Funds, scope and acquisition plan reconciled with Contracting and RMO</td></tr>
</tbody></table></div>`,
ledger:[[`Project record`,`Created, with funded work item linked.`],[`Funding authorization`,`Registered with conditions. Less than the current estimate.`],[`Funding gap`,`Visible in status, with owners for next actions.`],[`Baseline`,`Not approved. Funding arrival does not approve it.`],[`Spreadsheet record`,`Replaced by links to source records.`]],
handoffTitle:`Hand-off to Chapter 5`,
handoff:`<p>The financial facts now have to be carried into an executable plan. Case File 05 takes the same project into the Project Management Plan, where authority, funding limits and stakeholder commitments become an agreement the team can follow.</p>`},
kc:[
{tag:'Doctrine',text:`Which statement about the project record and the financial record is correct?`,options:[`They are the same record under different names`,`Each is a connected but separate record. Neither substitutes for the other or for the source of program authority`,`The financial record controls scope`,`The project record controls the funding amount`],correct:1,explain:`PROC1030 creates the project and its funded work item through the interface, but the records answer different questions and the PM keeps a traceable chain among them.`},
{tag:'Doctrine',text:`Which describes an obligation, as distinguished from a distribution?`,options:[`Resources placed against funded work items`,`A Government legal liability supported by required documents, subject to purpose, time, amount and authority tests`,`Payment for work performed`,`Receipt of a funding instrument`],correct:1,explain:`A distribution or allocation is not itself a contractual obligation, and a disbursement does not show the original obligation was proper.`},
{tag:'Doctrine',text:`Which pair correctly matches the two PROC1040 branches?`,options:[`Customer order: Steps 6 to 9. FAD: Steps 2 to 5`,`Customer order: technical and financial approval and acceptance. FAD: PM distribution instructions, registration and distribution to the work item`,`Both branches are identical`,`Customer orders skip RMO`],correct:1,explain:`After Step 1 the branches differ. Both converge on permissions and confirmation that the work item is funded.`},
{tag:'Judgment',text:`The approved funding authorization is below the current estimated total cost. How should status read?`,options:[`Fully funded`,`Authority and conditions reported, gap to the estimate shown, not fully funded, with owners for next actions`,`Unfunded`,`Blank until the gap is resolved`],correct:1,explain:`Accurate reporting says what is registered, what it allows and what remains unfunded.`},
{tag:'Doctrine',text:`Does funding arrival approve a baseline?`,options:[`Yes, automatically`,`No. Funding does not validate the plan's logic, resource loading, contingency or risk, and a baseline is a separate approval`,`Yes, if funds exceed the estimate`,`Only for reimbursable work`],correct:1,explain:`Approved scope, forecast cost and funded amount are three measures, and funding and baseline are separate gates.`},
{tag:'Judgment',text:`A shared spreadsheet says "Baselined and funded" and no one knows who edited it. What is the best response?`,options:[`Leave it, it is close enough`,`Ask which record shows each gate, confirm from sources, and replace the spreadsheet's status with links to the source records`,`Correct the manager publicly`,`Approve the baseline to match`],correct:1,explain:`Do not maintain competing official records. A question about the record corrects the error and keeps the relationship.`}],
commit:`Which status, dashboard or tracker in your work currently stands in for a record you have not checked? What will you check first?`
};
