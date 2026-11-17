/*META{"phase":"Design and Technical Management","badge":"CHAPTER 9 &middot; DESIGN MANAGEMENT","chapter":"Chapter 9"}META*/
var CASE={
n:'09',title:'Comments Nobody Resolved',
titleHtml:`Comments Nobody<br><em>Resolved.</em>`,
lede:`The milestone is reported achieved, the comment log is mostly closed, and the RFP is due. <strong>How do you know the design is actually ready, and who decides when it is not?</strong>`,
doctrine:`Design management as PM integration, design-start readiness, who is responsible for design under Design-Build, producer QC, independent review and BCOES, comment resolution, and the Ready to Advertise readiness decision (Chapter 9).`,
skill:`Asking the question behind a status ("how do you know?") and keeping a team honest about a gate without making them defensive.`,
minutes:'30',
figures:`No funding amounts or dates are assumed. Ridgeway remains on the conventional FAR Design-Build baseline. The manuscript's comparison method is not available to it on the facts given.`,
cast:[`<strong>Nora Delgado</strong>, project manager (you)`,`<strong>Ingrid Larsen</strong>, Technical Lead, Engineering`,`<strong>Rafael Soto</strong>, Construction`,`<strong>Wen Zhao</strong>, Contracting Officer`,`<strong>Gerald Voss</strong>, sponsor representative`,`<strong>Maj. Teresa Hollis</strong>, end user`],
trainingTitle:`Design Maturity Is Evidence, Not a Percentage`,
training:`<div class="card"><div class="card-label">Chapter 9 &middot; Design and Technical Management</div>
<p>The PM integrates design with scope, cost, schedule, acquisition and construction. Under conventional FAR Design-Build the Government prepares a technically sufficient, performance-based RFP and the contractor then develops the contract design. The <strong>Design-Build contractor and its Designer of Record remain responsible for the contract-assigned design</strong>. Government review assesses compliance and the Government's interests, and a comment or no-objection does not ordinarily assume the designer's professional responsibility. Only the <strong>Contracting Officer</strong> exercises delegated contract authority.</p></div>
<div class="card"><div class="card-label">Quality Is Layered</div>
<div class="table-wrap"><table class="ref"><thead><tr><th>Layer</th><th>What it does</th></tr></thead><tbody>
<tr><td>Producer quality control</td><td>Done by the design producer.</td></tr>
<tr><td>Independent technical review</td><td>A separate assessment where the quality plan and technical policy require it.</td></tr>
<tr><td>BCOES review</td><td>Tests whether documents are biddable, constructible, operable, and environmentally and sustainably coordinated. It does not replace producer QC.</td></tr>
</tbody></table></div>
<p>Distinguish an <strong>advisory preference</strong>, a <strong>mandatory criteria deficiency</strong>, a <strong>scope interpretation</strong> and a <strong>possible contract change</strong>. Escalate the last three through the responsible technical, sponsor or contracting channel before they silently alter the required product. A closed electronic comment alone is not evidence that a defect was corrected. The revised product has to show the disposition, and consequential corrections need a backcheck.</p></div>
<div class="card"><div class="card-label">Ready to Advertise Is a Decision</div>
<p>RTA requires more than a finished draft or a date on the schedule. Test five dimensions: technical sufficiency, acquisition readiness, site and environmental readiness, cost and funding, and governance. If a requirement remains unresolved, document the consequence, owner and decision authority. <strong>Do not relabel a required item as optional or delete an inconvenient milestone to declare the RFP ready.</strong> A milestone is achieved when its criteria are met, not when the percent-complete field is favorable.</p>
<span class="proc-tag">CHAPTER 9</span><span class="proc-tag">BCOES</span><span class="proc-tag">RTA</span><span class="proc-tag">QMP</span></div>
<div class="card people-card"><div class="card-label">People Skill &middot; Asking "How Do You Know?"</div>
<p>When a status sounds too clean, ask the person who reported it how they would show it. "What would a reviewer see if they opened it?" is a question about evidence, not about their honesty. People who have done the work usually welcome it.</p></div>`,
domain:'Executing',
hook:`Notice, in this case, where you would take a favorable status at face value because challenging it feels like distrust.`,
reflections:[
`Think of a milestone you accepted as complete that was not. What would have shown it?`,
`How do you tell an advisory comment from one that changes scope?`,
`When the schedule says "ready" and your instinct says "not yet," whom do you tell, and how?`],
scenario:{label:'Pre-Final and RTA',text:`<p>On <strong>Project Ridgeway</strong>, the conventional FAR Design-Build path is set and the Technical Lead, <strong>Ingrid Larsen</strong>, is leading the Government's technical package for the RFP. The pre-final RFP package has been submitted. The Contracting Officer, <strong>Wen Zhao</strong>, is preparing the solicitation. The end user, <strong>Maj. Teresa Hollis</strong>, has given comments.</p>
<p>The sponsor, <strong>Gerald Voss</strong>, is watching the schedule for the RTA date.</p>`},
decisions:[
{context:`<p>The weekly report shows the pre-final milestone achieved, "95 percent complete." Rafael reads the package for constructability and finds an unresolved utility relocation and a conflict between the plans and the specifications.</p>`,
prompt:`What do you do?`,
options:[
{id:'a',text:`Ask the Technical Lead to document the defects and a closure plan, quantify the schedule and cost exposure, and decide with her whether the milestone is truly complete under its criteria.`},
{id:'b',text:`Accept the report. The milestone date was met, and Construction can raise concerns later.`},
{id:'c',text:`Tell Rafael to fix the plans and specifications himself.`},
{id:'d',text:`Tell the sponsor the milestone was missed without checking the details.`}],
cons:{
a:{s:`Tested the milestone against its criteria and made the defects owned and sized.`,t:`<p>Ingrid logs both defects, with owners and a closure plan. The utility relocation has a schedule and cost exposure that you quantify with Elena. The pre-final milestone is shown as achieved with open items under conditions, not as complete, and RTA is not promised on the favorable percentage.</p>`,i:`<strong>What this reveals:</strong> The PM does not authorize RTA solely because the calendar date or the percent-complete field is favorable. Ask for a documented defect and closure plan and quantify the exposure.`},
b:{s:`Let a favorable percentage stand for readiness.`,t:`<p>The defects travel into the RFP and offerors price different assumptions. The utility relocation becomes a change after award.</p>`,i:`<strong>What this reveals:</strong> Construction involvement exists to catch exactly this. Their finding is evidence, not noise.`},
c:{s:`Moved design work to the wrong role.`,t:`<p>Construction reviews, and the producer corrects. Rafael is not the Designer of Record, and a fix without the Technical Lead's disposition bypasses quality control.</p>`,i:`<strong>What this reveals:</strong> Each design producer resolves assigned comments, and responsible reviewers verify disposition. Respect the roles in the quality plan.`},
d:{s:`Reported a miss before establishing the facts.`,t:`<p>Mr. Voss tells the command, and a day later the picture is more nuanced. The correction is worse than a clear first message would have been.</p>`,i:`<strong>What this reveals:</strong> Establish what is actually open and what it means before reporting upward.`}}},
{context:`<p>The comment log shows most comments closed. A backcheck of a few consequential ones finds that the revised drawings do not reflect the agreed corrections. Separately, Maj. Hollis has a comment asking for an additional work bay, and a reviewer has noted a preference for a different cladding material.</p>`,
prompt:`How do you handle the comments?`,
options:[
{id:'a',text:`Sort comments by type. Reopen the ones where the product does not show the correction. Treat the extra bay as a scope interpretation and possible contract change and take it to the sponsor and KO. Record the cladding as advisory with a disposition.`},
{id:'b',text:`Trust the log. Closed means closed.`},
{id:'c',text:`Have Engineering add the bay, since the end user asked.`},
{id:'d',text:`Treat every comment as mandatory and require all to be adopted.`}],
cons:{
a:{s:`Sorted comments by type and routed each through the right channel.`,t:`<p>Three comments are reopened for backcheck. The additional bay goes to Mr. Voss and Wen as a scope question. The cladding comment is recorded as advisory with a reasoned disposition. Maj. Hollis hears clearly where her request is going and why.</p>`,i:`<strong>What this reveals:</strong> A closed electronic comment is not evidence that a defect was corrected. Escalate scope interpretations and possible contract changes through the responsible channel before they silently alter the product.`},
b:{s:`Accepted closed comments as corrected defects.`,t:`<p>The uncorrected drawings go into the RFP. The defects appear in proposals and, later, in design submittals.</p>`,i:`<strong>What this reveals:</strong> Closure in a tool is bookkeeping. The revised product must demonstrate the disposition.`},
c:{s:`Added scope on an end user's request.`,t:`<p>The bay exceeds the authorized scope and affects cost. Nobody with the authority approved it, and now Ingrid has designed it.</p>`,i:`<strong>What this reveals:</strong> A preferred feature does not become authorized scope because the end user values it. Route scope changes through the decision channel.`},
d:{s:`Treated every comment as mandatory.`,t:`<p>The team drowns in preferences and loses the ability to separate the ones that matter. The reviewer's cladding preference now drives cost.</p>`,i:`<strong>What this reveals:</strong> Distinguish an advisory preference from a mandatory criteria deficiency. Not every comment demands adoption.`}}},
{context:`<p>The RTA date is next week. The RFP draft is complete. Environmental documentation is pending and one site datum in the technical package conflicts with the survey. A colleague suggests, "Mark the environmental item as optional for now and delete the BCOES milestone. We can get to RTA on the date."</p>`,
prompt:`What do you do?`,
options:[
{id:'a',text:`Run the five-dimension RTA readiness check with the TL, KO, Counsel and RM. For each open item, document the consequence, owner and decision authority, and bring the decision to the official who can make it. Do not relabel or delete.`},
{id:'b',text:`Follow the colleague's suggestion to reach the date.`},
{id:'c',text:`Declare RTA ready since the RFP is drafted.`},
{id:'d',text:`Cancel the RTA date and wait for everything to be perfect.`}],
cons:{
a:{s:`Ran the readiness check and routed each open item to its decision authority.`,t:`<p>The check shows technical sufficiency nearly there, acquisition ready, environmental documentation pending and a datum conflict to resolve. Wen and you agree on what is mandatory before RTA under the selected route. You give Dana the evidence and the decision options, and RTA is re-forecast with the consequence documented rather than forced.</p>`,
th:function(d){return d[0]==='a'?'<p>Because the earlier defects were logged and owned, the open-items list is short and credible.</p>':'';},
i:`<strong>What this reveals:</strong> RTA is a readiness milestone supported by evidence. If a requirement remains unresolved, document the consequence, owner and decision authority. Do not relabel a required requirement as optional or delete an inconvenient milestone.`},
b:{s:`Relabeled and deleted to reach a date.`,t:`<p>The RFP goes out with a missing environmental basis and no BCOES review. A protest or a post-award change is a matter of time, and the record shows that you knew.</p>`,i:`<strong>What this reveals:</strong> Mandated technical checks are not waived merely by deleting a schedule line.`},
c:{s:`Equated a draft with readiness.`,t:`<p>The draft exists. The site datum is wrong, and the missing environmental determination blocks advertisement under the selected route.</p>`,i:`<strong>What this reveals:</strong> Readiness requires technical sufficiency, contracting readiness, fiscal readiness and any delegated authorization. A completed draft is only one.`},
d:{s:`Waited for perfection.`,t:`<p>Nothing requires perfection, and delay has its own cost. The question is what must be true, by when, and who is closing each item.</p>`,i:`<strong>What this reveals:</strong> Determine which items are mandatory before RTA and close those, with owners and dates. Do not wait for everything.`}}}
],
debrief:{
title:`Evidence for a Gate`,
html:`<p>Each decision asked what the evidence actually showed. A percentage was not completeness, a closed comment was not a corrected drawing, and a drafted RFP was not a ready one. The PM's work was to ask how the team knew, route each item to the person who decides, and refuse to make the schedule look better by changing the criteria.</p>`,
ledger:[[`Pre-final milestone`,`Achieved with open items under conditions, not shown as complete.`],[`Comments`,`Reopened where the product did not show the correction. Scope request routed to sponsor and KO.`],[`RTA readiness`,`Five-dimension check run. Open items owned. Forecast revised, not forced.`],[`Design responsibility`,`Contractor and Designer of Record keep contract design responsibility after award.`]],
handoffTitle:`Hand-off to Chapter 10`,
handoff:`<p>When the RFP is ready, the project moves from planning to the procurement. Case File 10 follows Ridgeway through award readiness, where the pressure to close is highest.</p>`},
kc:[
{tag:'Doctrine',text:`Under conventional FAR Design-Build, who remains responsible for the contract-assigned design after award?`,options:[`The Government reviewer who commented`,`The Design-Build contractor and its Designer of Record`,`The PM`,`The sponsor`],correct:1,explain:`A Government review, comment or no-objection does not ordinarily assume the designer's professional responsibility.`},
{tag:'Doctrine',text:`Which best describes BCOES review?`,options:[`A replacement for producer QC`,`A test of whether documents are biddable, constructible, operable, and environmentally and sustainably coordinated, not a replacement for other required review`,`A contract negotiation step`,`A funding review`],correct:1,explain:`BCOES does not replace producer QC or other mandated review.`},
{tag:'Judgment',text:`A report shows pre-final "95 percent complete" while Construction finds an unresolved utility relocation and a plan and specification conflict. What is best?`,options:[`Accept the percentage`,`Ask the TL for a documented defect and closure plan, quantify the exposure and test the milestone against its criteria`,`Have Construction fix the drawings`,`Report a miss immediately`],correct:1,explain:`The PM does not authorize RTA solely because the date or percent-complete field is favorable.`},
{tag:'Judgment',text:`The end user requests an additional work bay during review. How should it be handled?`,options:[`Add it`,`Treat it as a scope interpretation and possible contract change, and route it through the sponsor and KO`,`Ignore it`,`Make it advisory`],correct:1,explain:`Scope interpretations and possible contract changes are escalated before they silently alter the product.`},
{tag:'Doctrine',text:`Is a closed electronic comment evidence that the underlying defect was corrected?`,options:[`Yes`,`No. The revised product must demonstrate the disposition, and consequential corrections need a backcheck`,`Only for architectural comments`,`Only if the reviewer agrees`],correct:1,explain:`Closure in a tool is not proof of correction.`},
{tag:'Judgment',text:`The RTA date is next week and required items are open. What should the PM do?`,options:[`Relabel required items optional`,`Run a readiness check across technical, acquisition, site, cost and governance, document consequence, owner and decision authority for open items, and revise the forecast`,`Declare ready because the draft is complete`,`Wait for perfection`],correct:1,explain:`RTA is a readiness decision supported by evidence. Do not relabel required items or delete milestones.`}],
commit:`Which milestone or status in your project do you accept because of its percentage or date? What would you ask the owner to show you?`
};
