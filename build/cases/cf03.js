/*META{"phase":"Work Acceptance","badge":"CHAPTER 3 &middot; WORK ACCEPTANCE","chapter":"Chapter 3"}META*/
var CASE={
n:'03',title:'Before You Say Yes',
titleHtml:`Before You<br><em>Say Yes.</em>`,
lede:`USACE has a request, a hopeful sponsor and a screening-level picture. <strong>What does the evidence actually support, and what has to be written down before the work is accepted and you are assigned?</strong>`,
doctrine:`The 18-step work acceptance process, screening-level workload and feasibility, the PgMP, reimbursable work and agreements, acceptance with conditions, and the hand-off to project initiation (Chapter 3).`,
skill:`Telling a customer what USACE can and cannot yet substantiate, and keeping a dependency with the party that owns it.`,
minutes:'30',
figures:`Dollar figures in this case file are illustrative training inputs taken from the chapter's worked example. They are not an approved Ridgeway budget, and the manuscript notes that its early figures remain to be reconciled.`,
cast:[`<strong>Nora Delgado</strong>, supporting intake, later assigned PM (you)`,`<strong>Dana Whitfield</strong>, Program Manager; <strong>Calvin Osei</strong>, DPM and accepting official`,`<strong>Gerald Voss</strong>, sponsor representative; <strong>Lorraine Beck</strong>, installation DPW`,`<strong>Ingrid Larsen</strong>, Engineering`],
trainingTitle:`Acceptance Is an Informed Management Decision`,
training:`<div class="card"><div class="card-label">Chapter 3 &middot; Work Acceptance</div>
<p>Work acceptance is an <strong>informed management decision</strong>, not a courtesy to the customer. The <strong>PgM leads the acceptance analysis and coordination</strong>. The <strong>DPM or designated Work Acceptance Official decides</strong> under the applicable delegation, and then assigns the PM. Read the official PROC1000 process before using any job aid. Title alone does not establish signature authority.</p>
<div class="table-wrap"><table class="ref"><thead><tr><th>Steps</th><th>The question</th></tr></thead><tbody>
<tr><td>4 to 6</td><td>Is this inside USACE responsibility and the right MSC? Geography, sponsorship and assignment are related but not interchangeable. A customer preference alone does not change who executes.</td></tr>
<tr><td>7 and 8</td><td>Does the PgMP cover this work and customer? An active agreement is evidence of terms, not proof that a task is funded or authorized.</td></tr>
<tr><td>9 and 10</td><td>Can USACE actually provide the resources? Workforce on a chart is not delivery feasibility.</td></tr>
<tr><td>11 to 13</td><td>What is the authority, the agreement that implements it, and the document that specifies the funded requirement? These are different things.</td></tr>
<tr><td>14 to 16</td><td>If resources are short, coordinate across the region, then USACE. If not accepted, the commander informs the stakeholder on an evidence-based recommendation.</td></tr>
<tr><td>17 and 18</td><td>Accept, notify, preserve commitments, assign the PM.</td></tr>
</tbody></table></div></div>
<div class="card"><div class="card-label">Screening-Level Honesty</div>
<p>Write a minimum viable assessment: requested output, requested date, skill sets, provisional level of effort, assumptions, source freshness, options and unresolved issues. State that it is screening-level. A proposed confidence statement helps: <strong>high</strong> where recent data and analogous work support it, <strong>moderate</strong> where key disciplines are consulted but dependencies remain, <strong>low</strong> where scope, staffing, approach or agreement are incomplete. These labels are instructional aids, not official ratings.</p>
<p>"We have general capacity to begin authorized planning" is materially different from "We can award by the customer's date for the customer's price." A recommendation should say which claim the evidence supports.</p></div>
<div class="card"><div class="card-label">Accepted With Conditions</div>
<p>A proposed stakeholder commitment memorandum can record accepted work, scope and exclusions, authority, preliminary assumptions, sponsor responsibilities, open conditions and the effect of failure. If USACE cannot meet a requested cost or milestone, record the USACE assessment and the sponsor's acknowledgment without manufacturing a baseline. If another party must obtain land access, list that organization as owner with its deliverable. Do not let the dependency become an undocumented USACE responsibility.</p>
<p>A condition is not closed because a project number exists. Give each a custodian, evidence standard, due event and escalation trigger. If legal prerequisites are absent, the disposition remains pending.</p>
<span class="proc-tag">CHAPTER 3</span><span class="proc-tag">PROC1000</span><span class="proc-tag">PROC1030</span><span class="proc-tag">PgMP</span></div>
<div class="card people-card"><div class="card-label">People Skill &middot; Delivering a Disappointing Assessment</div>
<p>Lead with what the customer can rely on, then what cannot yet be supported and why. End with the path: what would change the answer, who owns it, and by when. Customers forgive a hard "not yet" far more readily than a soft "yes" that later breaks.</p></div>`,
domain:'Strategic Thinking',
hook:`Look for the places in this case where the evidence points one way and the pressure points another.`,
reflections:[
`Think of a time you were asked to confirm something you could only partly support. How did you separate what was known from what was hoped?`,
`When a customer's preferred price sits well below what analogous work suggests, how do you say so without damaging the relationship?`,
`Who, in your experience, ends up owning a dependency that was never written down?`],
scenario:{label:'The Acceptance Package',text:`<p>Back on <strong>Project Ridgeway</strong>, <strong>Dana Whitfield</strong> is leading the acceptance analysis for the Deputy, <strong>Calvin Osei</strong>. She has asked you to help prepare the screening-level assessment. You are still not the assigned PM.</p>
<p>Here is what the evidence looks like so far (illustrative training inputs):</p>
<div class="table-wrap"><table class="ref"><thead><tr><th>Variable</th><th>Observation</th></tr></thead><tbody>
<tr><td>Scope</td><td>Requirements about 30% defined</td></tr>
<tr><td>Schedule</td><td>Sponsor requests an 8-month award; acquisition and reviews not validated</td></tr>
<tr><td>Staffing</td><td>The staffing system lists two engineers; availability unverified</td></tr>
<tr><td>Site access</td><td>License or access agreement pending with the installation</td></tr>
<tr><td>Funding</td><td>Customer target $24M; analogous projects suggest $27M to $31M</td></tr>
</tbody></table></div>`},
decisions:[
{context:`<p>Dana asks you to draft the feasibility paragraph for Mr. Osei. A colleague suggests, "Two engineers are listed, so capacity is fine. Just say we can support it."</p>`,
prompt:`What do you write?`,
options:[
{id:'a',text:`State that evidence supports beginning authorized planning, not the requested date and price. Give a low confidence statement, list the staffing, scope, access and funding limits, and name what would raise confidence.`},
{id:'b',text:`State that capacity exists and USACE can support the request, since two engineers are listed.`},
{id:'c',text:`Say nothing about feasibility until the scope is fully defined.`},
{id:'d',text:`Recommend non-acceptance because so many items are unresolved.`}],
cons:{
a:{s:`Wrote a screening-level assessment that said which claim the evidence supports.`,t:`<p>Your paragraph separates "we can begin authorized planning" from "we can award in eight months for $24M," marks confidence <strong>low</strong>, and names the staffing, scope, access and funding limits, each with what would improve it.</p><p>Dana adds one line on regional resource coordination and sends it up.</p>`,i:`<strong>What this reveals:</strong> The greatest hazard at this stage is turning limited evidence into a firm cost or schedule commitment. A screening-level assessment is honest about its own limits and still moves the decision forward.`},
b:{s:`Treated names on a chart as delivery feasibility.`,t:`<p>The note says capacity exists. Two weeks later you learn one engineer is committed elsewhere and the other cannot cover the specialty. The assessment has to be walked back in front of the sponsor.</p>`,i:`<strong>What this reveals:</strong> Staffing records can be incomplete, and availability is not feasibility. Feasibility needs scope definition and a credible cost and schedule review.`},
c:{s:`Declined to assess until scope was complete, leaving the decision official with nothing.`,t:`<p>Mr. Osei needs something to decide on. Dana writes the paragraph herself, at short notice, and the next request to you comes with less latitude.</p>`,i:`<strong>What this reveals:</strong> A minimum viable assessment is expected even when the PDT does not yet exist. State that it is screening-level and say what is unknown.`},
d:{s:`Recommended non-acceptance without an evidence-based case.`,t:`<p>A non-acceptance recommendation has to state the constraints, the coordination done, viable alternatives and options to reconsider. Yours has none of the coordination yet, so Dana sets it aside and asks for the missing steps first.</p>`,i:`<strong>What this reveals:</strong> An unexplained "no" is no better than an unsupported "yes." Unresolved items are conditions to be managed and owned, not automatically grounds to decline.`}}},
{context:`<p>Mr. Voss calls you directly. He says, "The command's number is $24 million. Can you confirm that works?" You know the analogous range is higher, and you have no cost estimate.</p>`,
prompt:`How do you respond?`,
options:[
{id:'a',text:`Explain that USACE cannot yet substantiate the target, share that comparable work suggests a higher range as a screening observation, and propose that the assessment and his acknowledgment be recorded so the number is not treated as a baseline. Offer to walk through what would firm it up.`},
{id:'b',text:`Confirm that it works, and plan to adjust the scope later.`},
{id:'c',text:`Say you cannot discuss cost with him.`},
{id:'d',text:`Offer a revised number of your own, midway in the range.`}],
cons:{
a:{s:`Was candid, framed the range as a screening observation and kept it from becoming a baseline.`,t:`<p>Mr. Voss is quiet, then asks what would narrow the range. You walk through scope definition, site conditions and acquisition approach. He agrees the sponsor should acknowledge the USACE assessment in the commitment memorandum.</p><p>He is not delighted, but he now has an accurate message to take to the command.</p>`,i:`<strong>What this reveals:</strong> Customers forgive a hard assessment more readily than a soft yes that later breaks. Recording the USACE view and the sponsor's acknowledgment avoids manufacturing a baseline.`},
b:{s:`Confirmed an unsupported figure.`,t:`<p>The $24M appears in the command's brief as "confirmed by USACE." Months later, when scope is defined, the estimate lands in the analogous range and the gap is read as a USACE failure.</p>`,i:`<strong>What this reveals:</strong> A cost commitment that the evidence cannot support will be paid for later, with interest, in credibility.`},
c:{s:`Refused to discuss cost and lost a useful conversation.`,t:`<p>Mr. Voss hears a wall. Without a USACE view, the command keeps the $24M and treats it as agreed.</p>`,i:`<strong>What this reveals:</strong> You can decline to commit and still be candid about what is known. Silence lets the customer's number stand unchallenged.`},
d:{s:`Invented a middle number with no estimate behind it.`,t:`<p>Your midpoint becomes the new target in Mr. Voss's notes. It has no basis in scope or acquisition, and now it is USACE's number.</p>`,i:`<strong>What this reveals:</strong> A range from analogous work is a screening observation. Picking a point in it creates a baseline nobody has validated.`}}},
{context:`<p>Mr. Osei accepts the work with conditions and assigns you as PM. You receive the package. It lists four open conditions: scope development by the end user, site access by the sponsor, a funding gap to be resolved by the sponsor and resource management, and specialty design support from the USACE PgM. A project number has been created in the system.</p>`,
prompt:`What is your first move as the newly assigned PM?`,
options:[
{id:'a',text:`Verify the authority, program owner, stakeholder contacts, scope, agreements and next permitted action. For each condition, confirm a custodian, evidence standard, due event and escalation trigger, and note what is restricted until it closes.`},
{id:'b',text:`Treat the conditions as closed now that a project number exists, and begin full planning.`},
{id:'c',text:`Take on all four conditions yourself so nothing is missed.`},
{id:'d',text:`Wait for the sponsor to tell you when the conditions are met.`}],
cons:{
a:{s:`Verified the package and turned each condition into an owned, evidence-based item.`,t:`<p>You confirm who signed for what, who owns each condition and what proof will close it. The site access dependency stays with the sponsor, with a note that surveys and site activity wait until an access instrument exists. The funding gap stays with the sponsor and resource management: nothing is obligated beyond legally available authority.</p><p>Dana appreciates that the next permitted action is stated plainly.</p>`,i:`<strong>What this reveals:</strong> A condition is not closed because a project number has been created. A new PM verifies the acceptance package and the next permitted action before acting.`},
b:{s:`Treated record creation as condition closure.`,t:`<p>You schedule a site survey. It turns out the access instrument has not been executed, and the survey team arrives at a gate that does not open. The funding gap, meanwhile, goes unnoticed until the first obligation request.</p>`,i:`<strong>What this reveals:</strong> The project record preserves the decision. It does not satisfy the conditions. Open conditions carry restrictions on what may proceed.`},
c:{s:`Absorbed dependencies that belong to other owners.`,t:`<p>Within a month you are chasing the installation for access paperwork and the end user for requirements. The sponsor and end user stop treating them as theirs, and delays are now yours.</p>`,i:`<strong>What this reveals:</strong> If another party must provide land access or requirements, list that party as owner with its deliverable. Do not let the dependency become an undocumented USACE responsibility.`},
d:{s:`Waited for a customer to volunteer status.`,t:`<p>Weeks pass. No one reports, because no one was asked for a date or a form of evidence. The 30-day scope condition lapses unnoticed.</p>`,i:`<strong>What this reveals:</strong> Each condition needs a due event, a closure standard and an escalation trigger. Without them nobody has to report.`}}}
],
debrief:{
title:`Acceptance, Honestly Recorded`,
html:`<p>The three decisions share a theme. Each asked whether the record said what the evidence supported, and whether each dependency was owned by the right party. Ridgeway now has an accepted-with-conditions record and an assigned PM, and no approved baseline.</p>`,
ledger:[[`Work acceptance`,`Accepted with conditions by the DPM. PM assigned after acceptance.`],[`Scope`,`About 30% defined. Condition C-01 open with the end user.`],[`Site access`,`Owned by the sponsor. Activities needing access wait.`],[`Funding`,`Gap noted. Illustrative figures only. Nothing obligated beyond legal authority.`],[`Baseline`,`None approved. Cost and schedule remain preliminary.`]],
handoffTitle:`Hand-off to Chapter 4`,
handoff:`<p>The next step is initiation: setting up the project record so that every later decision can find its authority and source. Case File 04 follows the data and documents that make Ridgeway auditable.</p>`},
kc:[
{tag:'Doctrine',text:`Who leads the acceptance analysis, who decides, and when is the PM assigned?`,options:[`PM leads, PgM decides, PM is assigned before acceptance`,`PgM leads analysis and coordination, the DPM or designated Work Acceptance Official decides, and the PM is assigned after acceptance`,`The sponsor decides and the PgM assigns the PM`,`The commander decides everything`],correct:1,explain:`This is the course's role distinction. Title alone does not establish signature authority, so confirm the delegation.`},
{tag:'Doctrine',text:`An active reimbursable agreement with a partner shows what?`,options:[`That a specific task is funded and legally authorized`,`Evidence of terms with a partner, not proof that a particular task is funded or authorized`,`That USACE has accepted the work`,`That scope is final`],correct:1,explain:`Authority, agreement and funded requirement are different things. The agreement is part of the evidence, not all of it.`},
{tag:'Judgment',text:`The staffing system lists two engineers whose availability you have not verified. Which statement is best supported?`,options:[`Capacity is adequate to meet the requested award date`,`Staffing is a data limitation. Evidence may support beginning authorized planning, but not yet the date and price, and confidence is low`,`Staffing is irrelevant at screening level`,`USACE should decline`],correct:1,explain:`Workforce on a chart is not delivery feasibility. Document data limitations rather than treating them as proof of capacity.`},
{tag:'Judgment',text:`A sponsor asks you to confirm a $24M target when analogous work suggests a higher range and no estimate exists. What is the best approach?`,options:[`Confirm it and adjust scope later`,`Offer your own midpoint`,`Explain that USACE cannot yet substantiate it, share the range as a screening observation, and record the assessment and sponsor acknowledgment without creating a baseline`,`Refuse to discuss cost`],correct:2,explain:`Candor with a path forward preserves trust and avoids creating an unvalidated baseline.`},
{tag:'Doctrine',text:`The sponsor must obtain site access. How should the acceptance record treat it?`,options:[`As a USACE responsibility, to be safe`,`List the sponsor as owner with its deliverable, and restrict activities that need access until it exists`,`Ignore it until construction`,`Leave it out of the record`],correct:1,explain:`Do not let the dependency become an undocumented USACE responsibility. Record the owner, deliverable and restricted activities.`},
{tag:'Judgment',text:`You are newly assigned as PM after acceptance with conditions. What is the best first move?`,options:[`Begin full planning since a project number exists`,`Verify authority, owners and the next permitted action, and give each condition a custodian, evidence standard, due event and escalation trigger`,`Own every condition yourself`,`Wait for the customer to report`],correct:1,explain:`A condition is not closed merely because a record exists. Verify and assign before acting.`}],
commit:`Name one assessment you have been asked to give soon. What does the evidence actually support, and how will you say so?`
};
