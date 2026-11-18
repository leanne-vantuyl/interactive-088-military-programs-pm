/*META{"phase":"Turnover and Closeout","badge":"CHAPTER 15 &middot; TURNOVER &amp; CLOSEOUT","chapter":"Chapter 15"}META*/
var CASE={
n:'15',title:'Turnover Is Not the End',
titleHtml:`Turnover Is<br><em>Not the End.</em>`,
lede:`The building is nearly done and everyone wants to open it. A system test failed, the property package is a draft, and the punch list is one long list. <strong>What has to be true before "complete" means usable, and who decides each part?</strong>`,
doctrine:`Completion conditions, keeping the completion decisions separate, turnover readiness evidence, property documentation, classifying remaining work, warranty knowledge, financial reconciliation and the path to closure (Chapter 15).`,
skill:`Saying "not yet" to a leader who wants a ribbon cutting, and keeping a customer informed while others hold the authority to accept.`,
minutes:'30',
figures:`The 25-day and $700,000 utility exposure remains a planning assumption from earlier case files. No settlement, funding approval or revised baseline is assumed, and no calendar dates are stated here.`,
cast:[`<strong>Nora Delgado</strong>, project manager (you)`,`<strong>Rafael Soto</strong>, Construction; <strong>Wen Zhao</strong>, Contracting Officer`,`<strong>Anita Kapoor</strong>, Real Estate and property; <strong>Marcus Reyes</strong>, Resource Management`,`<strong>Maj. Teresa Hollis</strong>, end user; <strong>Lorraine Beck</strong>, installation DPW`,`<strong>Calvin Osei</strong>, DPM; <strong>Gerald Voss</strong>, sponsor representative`],
trainingTitle:`Seven Completion Decisions, Seven Records`,
training:`<div class="card"><div class="card-label">Chapter 15 &middot; Turnover and Closeout</div>
<p>Start with <strong>what is being delivered, who receives it, and what each receiving party needs</strong>. Ask the customer what will happen right after transfer: moving people in, installing equipment, storing material and opening for operations create different access, safety, utility and security needs. A ribbon-cutting is a communications event. It is not evidence that turnover conditions are met.</p>
<p>Several decisions occur close together. <strong>Never assume one signature settles every decision.</strong></p>
<div class="table-wrap"><table class="ref"><thead><tr><th>Event</th><th>Evidence</th></tr></thead><tbody>
<tr><td>Beneficial occupancy (BOD)</td><td>The agreed project-specific condition is achieved, with verified readiness and an authorized determination</td></tr>
<tr><td>Possession or use</td><td>KO-controlled arrangements and a remaining-work record. Use before completion is not acceptance.</td></tr>
<tr><td>Contractual acceptance</td><td>Acceptance by an authorized official under the clause and delegation</td></tr>
<tr><td>Property acceptance</td><td>Signed transfer and acceptance of real property accountability</td></tr>
<tr><td>Operational activation</td><td>Customer confirms personnel, equipment and operating readiness</td></tr>
<tr><td>Contract closeout</td><td>Administrative actions complete, by the KO or contract administration</td></tr>
<tr><td>Financial and project closure</td><td>Reconciliation and continuing duties resolved through authorized processes</td></tr>
</tbody></table></div></div>
<div class="card"><div class="card-label">Readiness Is Evidence</div>
<p>Ask what was tested, what failed, what correction remains and who can confirm the result. A successful equipment startup may not show integrated performance. Training should be usable by the actual operators, and a sign-in sheet is weak evidence of learning. <strong>Do not offer a general "conditional occupancy" for a failed mandatory requirement.</strong> Ask the authorized officials whether a lawful, restricted or phased use exists, and obtain their documented decision.</p>
<p>Property documentation is a prerequisite, not an afterthought. A draft property package that has not been reconciled can block beneficial occupancy even when the technical retest succeeds.</p></div>
<div class="card"><div class="card-label">Classify Remaining Work</div>
<p>Separate contract deficiencies, unfinished deliverables, customer activation tasks, additional requested features, disputed matters and property or administrative actions. Each has a different owner and route. Classification is a coordinated determination, not a way to move unwanted work to another office. Close an item only when the designated reviewer verifies the evidence. A contractor's statement that a repair is finished is not the closure record. A completed BOD actual should coexist with a truthful remaining-work forecast.</p>
<span class="proc-tag">CHAPTER 15</span><span class="proc-tag">DD 1354</span><span class="proc-tag">PROC4000</span><span class="proc-tag">WARRANTY</span></div>
<div class="card people-card"><div class="card-label">People Skill &middot; Slowing Down a Leader Who Wants to Open the Building</div>
<p>Give the leader something to say yes to. "We cannot open it today. Here is the retest date, here is what the installation needs from us, and here is the earliest lawful way to use the building before then, if one exists." Respect their urgency by turning it into a short list of dated actions.</p></div>`,
domain:'Executing',
hook:`Notice where urgency tempts you to treat one favorable signature or event as if it settled everything.`,
reflections:[
`Have you ever seen a facility opened before it was ready? What decision was actually missing?`,
`When a punch list arrives as one list, how do you decide whose item each one is?`,
`What do you do when a leader asks you to find a way to open something that failed a test?`],
scenario:{label:'Near Turnover',text:`<p><strong>Project Ridgeway</strong> is nearing turnover. The Contracting Officer, <strong>Wen Zhao</strong>, and Construction, <strong>Rafael Soto</strong>, administer the contract. The end user, <strong>Maj. Teresa Hollis</strong>, has a unit waiting. The installation's public works representative, <strong>Lorraine Beck</strong>, will receive the facility.</p>
<p>The Chapter 11 mechanical system failed a test and is not yet corrected. The utility matter from earlier remains open. Leaders are asking when the building will open.</p>`},
decisions:[
{context:`<p>Maj. Hollis wants to start moving equipment into a ready area while the failed system is being corrected. The sponsor suggests a ribbon-cutting next week "to keep momentum." A senior leader says, "Can we just call it conditional occupancy?"</p>`,
prompt:`What do you do?`,
options:[
{id:'a',text:`Get the correction and retest path and update the forecast. Refer the equipment request to Construction and the KO, and treat the ribbon-cutting as communications.`},
{id:'b',text:`Agree to conditional occupancy since leadership asked, and make clear it is temporary so the customer can begin preparing the space.`},
{id:'c',text:`Tell Maj. Hollis to go ahead with the equipment. It is only a ready area, and early placement will save time when occupancy begins.`},
{id:'d',text:`Refuse all discussion until the retest passes, so nobody takes a statement as a commitment before the condition is resolved.`}],
cons:{
a:{s:`Kept the decisions separate and referred each to its owner.`,t:`<p>Wen and Rafael evaluate the equipment request and decide the area can be used under defined arrangements, with the affected system separated. No general conditional occupancy is offered for the failed system. You brief the retest path and an updated forecast, with the commitment still shown. The ribbon-cutting is scheduled for a date tied to verified readiness.</p>`,i:`<strong>What this reveals:</strong> Do not offer a general conditional occupancy for a failed mandatory requirement. Leadership interest in opening the building does not supply a technical approval or contracting action. Possession is a KO-controlled arrangement.`},
b:{s:`Offered a blanket status for a failed requirement.`,t:`<p>The label implies a safe use the officials have not determined. If something goes wrong, the record shows no decision behind it.</p>`,i:`<strong>What this reveals:</strong> Ask the authorized officials whether lawful restricted or phased use is available and get their documented decision.`},
c:{s:`Allowed access without the KO's arrangements.`,t:`<p>Possession can shift risk and entitlement. The contractor raises damage and delay questions you now have to answer.</p>`,i:`<strong>What this reveals:</strong> Coordinate proposed access with Construction and the KO before promising entry.`},
d:{s:`Refused to engage with a legitimate operational need.`,t:`<p>The unit's need is real. The leaders conclude the PM is an obstacle, and the possession discussion happens without you.</p>`,i:`<strong>What this reveals:</strong> Staying useful means offering a dated path and the lawful options, not only a no.`}}},
{context:`<p>The retest succeeds. The property package, however, is still a draft: the property record identifier and the expenditure information have not been reconciled. Operator training was held, and the sign-in sheet shows full attendance, but the operators were on a shift change for part of the session.</p>`,
prompt:`How do you handle the readiness decision?`,
options:[
{id:'a',text:`Bring the missing property information and signature route into the readiness decision, check operators can find the manual, and report BOD only when authorized.`},
{id:'b',text:`Record BOD because the retest passed, since the building is functionally complete and the remaining items are administrative details.`},
{id:'c',text:`Treat the sign-in sheet as proof of training and skip the follow-up, since the operators attended and the record shows it was delivered.`},
{id:'d',text:`Complete the property package yourself so the date holds, since you know the facts and the paperwork should not hold the building up, and you already know the details.`}],
cons:{
a:{s:`Tested readiness against property documentation and actual operator capability.`,t:`<p>Anita identifies the reconciliation needed and the signature route, and gives a realistic date. A short follow-up session is held for the shift that missed part of the training, and the operators can find and use the manual. The readiness brief shows what is complete and what remains, and BOD is recorded when authorized.</p>`,i:`<strong>What this reveals:</strong> A successful retest does not establish readiness for beneficial occupancy. Make property documentation a prerequisite, and treat a sign-in sheet as weak evidence.`},
b:{s:`Let one successful test stand for readiness.`,t:`<p>BOD is recorded and the property documentation is not ready. The record has to be corrected and the customer's expectations reset.</p>`,i:`<strong>What this reveals:</strong> Readiness is the whole set of prerequisites, not the last test.`},
c:{s:`Accepted attendance as learning.`,t:`<p>In the first month the operators call for help on routine tasks, and the warranty contacts are unfamiliar.</p>`,i:`<strong>What this reveals:</strong> Operational information and training should be usable by the actual operators. Arrange attendance around shifts.`},
d:{s:`Took on a property official's work.`,t:`<p>Property accountability is established by the proper official and signature. Your version has no standing, and Anita has to redo it.</p>`,i:`<strong>What this reveals:</strong> The PM gathers and sequences the evidence. The property official determines and signs.`}}},
{context:`<p>The building is handed off under agreed arrangements. A single punch list of forty items arrives, mixing contract deficiencies, items the customer will do, a request for a new storage cage, and a disputed finish. A month later an operator reports a recurring system failure. Someone suggests, "Call it a new requirement so we can fund a quick fix."</p>`,
prompt:`What do you do?`,
options:[
{id:'a',text:`Classify the list by type with owners and closure evidence. For the failure, follow the defect path and let Construction and the KO determine notice.`},
{id:'b',text:`Leave the list as one list and work through it in order, which keeps it simple and ensures every item gets attention eventually.`},
{id:'c',text:`Describe the failure as a new requirement to get funds, since the existing money is tied up and a new line may be the only path.`},
{id:'d',text:`Tell the customer the building is complete and further issues are theirs, since turnover happened and warranty channels exist for what remains, and it ends a long closeout.`}],
cons:{
a:{s:`Classified the remaining work and used the defect path, and kept closure items open.`,t:`<p>The forty items sort into six categories with owners. The storage cage is an additional request that goes to the program, and the finish dispute goes to Construction, the KO and Counsel. The operator's failure follows the agreed defect path, with evidence of symptom and date, and Wen and Rafael determine the contract action. At the monthly review you report the actual turnover condition alongside the remaining actions.</p>`,
th:function(d){return d[1]==='a'?'<p>Because the property package and training were handled before BOD, the remaining items are about the work, not the paper.</p>':'';},
i:`<strong>What this reveals:</strong> A single undifferentiated list hides different decisions. Classification is a coordinated determination. Do not describe a report as a new requirement merely to find money for a quick repair.`},
b:{s:`Worked an undifferentiated list.`,t:`<p>Items bounce between offices because nobody has classified who owes them. The cage request and the disputed finish stay in the queue as if they were routine defects.</p>`,i:`<strong>What this reveals:</strong> Link each item to the requirement or decision that establishes who owes it.`},
c:{s:`Mislabeled a defect to find a funding path.`,t:`<p>If it is a defect, the contract and warranty route applies. Calling it a new requirement distorts the record and can raise legal and fiscal questions.</p>`,i:`<strong>What this reveals:</strong> The response starts with the agreed defect-reporting path and the evidence of the symptom.`},
d:{s:`Declared completion while the record had open items.`,t:`<p>The warranty path, the open utility matter and the property closeout all still have owners. Declaring the project complete orphans them.</p>`,i:`<strong>What this reveals:</strong> A completed BOD milestone should coexist with a truthful remaining-work forecast. Retain the open matters in the closure plan until the right offices determine their disposition.`}}}
],
debrief:{
title:`Complete and Usable`,
html:`<p>The decisions here separated things that tend to merge under pressure: opening, possession, acceptance, property, activation and closure. The PM's contribution was to keep each with its owner, to measure readiness by evidence, and to stay useful to a customer who needed the facility.</p>`,
ledger:[[`Mechanical system`,`Retest passed and verified by responsible officials.`],[`Possession`,`Defined arrangements decided by the KO. No general conditional occupancy.`],[`Property package`,`Reconciliation owned. BOD recorded when authorized.`],[`Remaining work`,`Classified with owners and closure evidence.`],[`Utility matter`,`Open. Retained in the closure plan pending determination.`],[`Closure`,`Not yet. Financial reconciliation and project closure follow.`]],
handoffTitle:`Hand-off to Chapter 16`,
handoff:`<p>The last case file steps back from the lifecycle to the person at the center of it: the PM who has to communicate, hold ethical lines and lead teams across all of these decisions. Case File 16 puts it together.</p>`},
kc:[
{tag:'Doctrine',text:`Does a ribbon-cutting date provide evidence that turnover conditions are met?`,options:[`Yes`,`No. It is a communications event and supplies no independent evidence of readiness`,`Only for MILCON`,`Only with leadership attendance`],correct:1,explain:`Define completion conditions before the final inspection and base readiness on evidence.`},
{tag:'Doctrine',text:`Possession or use of work before completion is equivalent to...`,options:[`Contractual acceptance`,`Not acceptance. The KO controls the arrangements and the remaining-work record`,`Property acceptance`,`Operational activation`],correct:1,explain:`When the applicable clause is incorporated, use before completion does not constitute acceptance.`},
{tag:'Judgment',text:`A leader asks for "conditional occupancy" for a facility with a failed mandatory system. What is the right response?`,options:[`Grant it`,`Do not offer a general conditional occupancy. Ask authorized officials whether lawful restricted or phased use exists and document their decision`,`Refuse to discuss`,`Let the contractor decide`],correct:1,explain:`Leadership interest does not supply a technical approval or contracting action.`},
{tag:'Judgment',text:`The retest passed but the property package is a draft. What should the PM do?`,options:[`Record BOD`,`Bring the missing information, owner, signature route and realistic date into the readiness decision`,`Complete the package personally`,`Ignore it`],correct:1,explain:`A successful retest does not establish readiness when property prerequisites are open.`},
{tag:'Doctrine',text:`How should a long punch list be handled?`,options:[`As one list in order`,`Classify items by who owes them (contract deficiency, unfinished deliverable, customer task, additional request, dispute, administrative action) and assign owners and closure evidence`,`Give it all to the contractor`,`Give it all to the customer`],correct:1,explain:`Classification is a coordinated determination, not a way to move unwanted work.`},
{tag:'Judgment',text:`An operator reports a recurring system failure after handoff. What is the best first step?`,options:[`Call it a new requirement to get funds`,`Follow the agreed defect-reporting path with evidence of the symptom and date, and let Construction and the KO determine notice and correction`,`Ignore it`,`Replace the system`],correct:1,explain:`Do not describe a report as a new requirement merely to find money for a quick repair.`}],
commit:`Which completion decision in your project is currently being treated as if it settled several others? Who owns each?`
};
