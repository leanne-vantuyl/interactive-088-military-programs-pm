/*META{"phase":"Business Lines and Customers","badge":"CHAPTER 14 &middot; OVERLAYS &amp; CUSTOMERS","chapter":"Chapter 14"}META*/
var CASE={
n:'14',title:'One Customer, Many Requirements',
titleHtml:`One Customer,<br><em>Many Requirements.</em>`,
lede:`"The customer approved it." That sentence hides at least four different people, three kinds of authority and a property question nobody has asked. <strong>What did each of them actually approve?</strong>`,
doctrine:`Project identity, who can commit the customer, the overlay review (MILCON, SRM, IIS, Environmental, Real Estate), turning requirements into deliverable conditions, the completion definition, and control of change across agreements and contracts (Chapter 14).`,
skill:`Pinning down exactly who committed to what, and saying "I will record that, and here is who decides" to a customer you want to keep.`,
minutes:'30',
figures:`The $700,000 and 25-day figures are inherited planning assumptions, not an approved modification. The access and feature comparisons are illustrative and not findings about any real parcel. This case file adds no contract value, appropriation or baseline.`,
cast:[`<strong>Nora Delgado</strong>, project manager (you)`,`<strong>Maj. Teresa Hollis</strong>, end user; <strong>Lorraine Beck</strong>, installation DPW`,`<strong>Gerald Voss</strong>, sponsor representative`,`<strong>Anita Kapoor</strong>, Real Estate; <strong>Wen Zhao</strong>, Contracting Officer`,`<strong>Dana Whitfield</strong>, Program Manager; <strong>Ingrid Larsen</strong>, Engineering`],
trainingTitle:`The Customer Is Several People`,
training:`<div class="card"><div class="card-label">Chapter 14 &middot; Business Lines and Customer Requirements</div>
<p>Begin with <strong>project identity</strong>: the work, the location, the user, the capability, the scope and the deliverable, and who is requesting, who can authorize and who pays. A business-line label routes work to a program owner. It is not spending authority. Acceptance of support, receipt of funds, readiness to advertise and authority to award are separate decisions, and a project can pass one and still fail the next.</p>
<p><strong>"The customer approved it" is too imprecise.</strong> Identify what the person approved, their role, their authority and the record. A user may validate a workflow. A sponsor may set priority. A funds official may provide financial documentation. An installation official may approve an outage. All may be necessary, and none alone authorizes a contract change. Record the difference between <strong>technical concurrence</strong> and an <strong>authorized commitment</strong>.</p></div>
<div class="card"><div class="card-label">The Overlay Review</div>
<div class="table-wrap"><table class="ref"><thead><tr><th>Overlay</th><th>First PM question</th></tr></thead><tbody>
<tr><td>MILCON</td><td>What complete and usable facility is authorized and funded?</td></tr>
<tr><td>Installation support and SRM</td><td>How is each work element classified and funded?</td></tr>
<tr><td>IIS</td><td>Under what authority and agreement can USACE provide this support?</td></tr>
<tr><td>Environmental and FUDS</td><td>What program and decision establish the authorized environmental outcome?</td></tr>
<tr><td>Real Estate</td><td>What property right or accountable action is needed, and by when?</td></tr>
</tbody></table></div>
<p>Turn what you find into <strong>conditions tied to decisions</strong>: a right of entry belongs before the survey it enables, and an approved layout belongs before the design that depends on it. Listing them in a risk register does not establish dependencies or owners. Repeat the review when scope, funding, delivery arrangement or completion condition changes.</p></div>
<div class="card"><div class="card-label">Deliverable Conditions and Change Across Instruments</div>
<p>The PMP should state the boundary between USACE-delivered work and customer-provided work, with an owner and date for each customer dependency. Use the <strong>approved scope and the PMP definition</strong> of beneficial occupancy. Safety or required building systems cannot be excluded by calling them customer IT. Track mission readiness separately when customer activation follows.</p>
<p>A customer request can affect several records. An <strong>agreement amendment</strong>, a <strong>contract modification</strong> and an approved <strong>baseline change</strong> serve different purposes and none completes the others. An urgent customer need is evidence of mission importance, not a fiscal determination.</p>
<span class="proc-tag">CHAPTER 14</span><span class="proc-tag">OVERLAYS</span><span class="proc-tag">REAL ESTATE</span><span class="proc-tag">BOD DEFINITION</span></div>
<div class="card people-card"><div class="card-label">People Skill &middot; "Who Else Needs to Say Yes?"</div>
<p>When a customer says "approved," respond warmly and ask who else needs to be part of it. Frame it as protecting their decision: "I want to make sure what you have approved can actually be delivered. Who else needs to say yes?" It is a service to them, and it reveals the unresolved handoff before it becomes a conflict.</p></div>`,
domain:'Relationship Building',
hook:`Notice, in this case, whether you hear "approved" as a fact or as a prompt to ask who and what.`,
reflections:[
`Recall a time "the customer approved it" turned out to mean something narrower. Who had approved what?`,
`How do you describe where USACE-delivered work ends and customer-provided work begins?`,
`When a customer wants to add something while a required remedy is under way, how do you keep the two apart?`],
scenario:{label:'Many Voices, One Project',text:`<p><strong>Project Ridgeway</strong> is in execution. The end user is <strong>Maj. Teresa Hollis</strong>, the installation's public works representative is <strong>Lorraine Beck</strong>, and the sponsor representative is <strong>Gerald Voss</strong>. Real Estate is represented by <strong>Anita Kapoor</strong>.</p>
<p>The utility conflict is still under evaluation (preliminary $700,000 and 25 days, planning assumptions only). The customer side keeps raising things.</p>`},
decisions:[
{context:`<p>Maj. Hollis tells you, "We've approved the added communications equipment room. Ms. Beck said fine, too." You have no document, and Mr. Voss has not mentioned it.</p>`,
prompt:`How do you handle "we approved it"?`,
options:[
{id:'a',text:`Thank her and ask what each person approved and in what capacity, so validation is recorded as such and routed as a request to the approving officials.`},
{id:'b',text:`Take it as approved and tell Engineering to design the room, since the customer and installation have both signaled agreement and time is short.`},
{id:'c',text:`Tell her she has no authority to approve anything, so it is clear from the start that the project will not move on informal approvals.`},
{id:'d',text:`Say nothing and wait to see whether it comes up again, since a stray remark in a meeting may not need any formal response.`}],
cons:{
a:{s:`Pinned down who approved what and routed the request correctly.`,t:`<p>Maj. Hollis confirms she validated the workflow need. Ms. Beck says she agreed the room is operationally reasonable but did not approve funding. You record each and send the request to Dana and the program officials, with Wen and Ingrid evaluating contract and technical effects. Maj. Hollis understands where the request stands.</p>`,i:`<strong>What this reveals:</strong> Record the difference between technical concurrence and an authorized commitment. Reopening a requirement is a change request to evaluate, not an instruction to start more design.`},
b:{s:`Treated user and installation concurrence as authority.`,t:`<p>Engineering starts design on a scope nobody authorized or funded. Weeks later the request is rejected and the design is wasted.</p>`,i:`<strong>What this reveals:</strong> A facility user may validate a workflow. No single customer role authorizes a contract change.`},
c:{s:`Dismissed a stakeholder's role in front of the team.`,t:`<p>Maj. Hollis stops volunteering information. She does have authority in her lane, and you needed it.</p>`,i:`<strong>What this reveals:</strong> Customer representatives hold real authority in their own functions. The point is to be precise, not to deny.`},
d:{s:`Waited and left an unresolved handoff.`,t:`<p>The request returns later as "you agreed," and two organizations each believe the other is handling it.</p>`,i:`<strong>What this reveals:</strong> The purpose of identifying who can commit the customer is to prevent an unresolved handoff.`}}},
{context:`<p>Near the end of design review, the question of beneficial occupancy comes up. The approved scope includes certain building systems. A colleague suggests, "Let's call the controls and network cabling 'customer IT,' move them outside BOD, and our date holds."</p>`,
prompt:`What do you do?`,
options:[
{id:'a',text:`Use the approved scope and the PMP definition of BOD, so required building systems stay in. Give true customer-provided items an owner and date.`},
{id:'b',text:`Move the items out of BOD to protect the date, since they are customer-related and the building itself would still be complete on time.`},
{id:'c',text:`Redefine BOD to whatever the customer prefers, since they are the ones who will use the building and know when it is ready for them.`},
{id:'d',text:`Avoid the topic until the end of construction, when the actual condition of the building will make the discussion simpler and avoid a premature argument.`}],
cons:{
a:{s:`Held BOD to the approved scope and tracked customer work separately.`,t:`<p>Ingrid confirms which systems are part of the authorized scope. A short list of true customer dependencies (furniture, operations staffing, designated equipment) gets owners and dates. The PDT, customer and reporting organizations all use the same BOD definition.</p>`,i:`<strong>What this reveals:</strong> Use the actual approved scope and PMP definition. Safety or required building systems cannot simply be excluded by calling them customer IT. Do not move required project work outside BOD merely to preserve a favorable date.`},
b:{s:`Re-labeled required work to hold a date.`,t:`<p>The date holds on paper, the facility cannot be used, and the mission effect arrives at occupancy.</p>`,i:`<strong>What this reveals:</strong> The milestone label does not establish readiness for the agreed handoff.`},
c:{s:`Let the customer redefine a project milestone.`,t:`<p>The definition shifts depending on who is in the room. Reports disagree.</p>`,i:`<strong>What this reveals:</strong> A changed milestone definition is a management issue requiring disposition, not a preference.`},
d:{s:`Deferred the definition and its dependencies.`,t:`<p>Customer-provided items surface late with no owner or date, and occupancy slides.</p>`,i:`<strong>What this reveals:</strong> Customer and business-line conditions must be known before turnover planning begins.`}}},
{context:`<p>One technically feasible alignment for the utility remedy would cross an area where property access has not been verified (an illustrative comparison assumption). It is also the fastest on paper. Separately, the customer wants to install an additional operational feature while the area is open.</p>`,
prompt:`How do you proceed?`,
options:[
{id:'a',text:`Ask Real Estate for the right needed and alternatives, so access is real before work. Record the customer feature separately from the utility remedy.`},
{id:'b',text:`Select the fastest alignment and sort out access later, since the utility route is the schedule driver and access work can run in parallel.`},
{id:'c',text:`Bundle the customer feature into the utility remedy to save mobilization, since one combined action is simpler and cheaper to manage than two separate ones, and the schedule benefits.`},
{id:'d',text:`Treat the whole thing as a different business line so it fits an easier process, since the standard path was not built for this kind of case.`}],
cons:{
a:{s:`Put property and environmental conditions ahead of the work and kept the customer feature separate.`,t:`<p>Ms. Kapoor explains the right needed and how long it typically takes to establish, which makes a second alignment the faster delivery option. The environmental lead notes no further evaluation is needed for either alignment but will be alert to suspect conditions. The customer feature goes through its own evaluation. You explain the decision path to Maj. Hollis without promising inclusion.</p>`,
th:function(d){return d[0]==='a'?'<p>Because the customer\'s authority had already been clarified, Maj. Hollis understands that the feature request is a separate path and does not read it as a refusal.</p>':'';},
i:`<strong>What this reveals:</strong> A faster technical solution may not be the faster delivery option if access takes longer. Combining physical work does not remove the need to determine authorized scope, funding and baseline effects. A request affects several records and each needs its own action.`},
b:{s:`Picked the fast alignment without the property right.`,t:`<p>Work waits at the boundary while access is negotiated, and the "fast" option is now the slowest.</p>`,i:`<strong>What this reveals:</strong> A right of entry belongs before the work it enables in the schedule.`},
c:{s:`Bundled a discretionary feature with a required remedy.`,t:`<p>The scope, funding source and approvals differ. Combined paperwork hides which cost is required and which is a customer preference.</p>`,i:`<strong>What this reveals:</strong> Combining the paperwork must not hide scope or funding differences.`},
d:{s:`Relabeled the project to find an easier path.`,t:`<p>Ridgeway is a MILCON project. A business-line label is not authority and does not change identity. Counsel and the program owner would have to rule on any reclassification.</p>`,i:`<strong>What this reveals:</strong> Establish project identity before choosing the process. Do not relabel to fit a convenient process.`}}}
],
debrief:{
title:`Overlay Thinking`,
html:`<p>The three decisions share one skill: asking what is actually authorized, by whom, in which record. Customer approvals were sorted into validation, concurrence and commitment. Completion was held to the approved scope. Property and environmental conditions were scheduled ahead of the work they enable, and a customer wish was evaluated on its own path.</p>`,
ledger:[[`Communications room request`,`Workflow validation and installation concurrence recorded. Authority to approve scope and funding sits elsewhere. Under evaluation.`],[`BOD definition`,`Held to approved scope and PMP definition. Customer dependencies owned and dated.`],[`Utility alignment`,`Property right and status requested from Real Estate. Precedes affected work in the schedule.`],[`Customer feature`,`Separate evaluation path. No promise of inclusion.`],[`Baseline`,`Unchanged.`]],
handoffTitle:`Hand-off to Chapter 15`,
handoff:`<p>The customer's use of the facility is the point of everything so far. Case File 15 follows Ridgeway through turnover, where deficiencies, training, property and warranty determine whether "complete" means usable.</p>`},
kc:[
{tag:'Doctrine',text:`Does a business-line label establish spending authority?`,options:[`Yes`,`No. It routes work to a program owner and is not itself spending authority`,`Only for MILCON`,`Only for reimbursable work`],correct:1,explain:`Establish who requests, who authorizes and who pays.`},
{tag:'Doctrine',text:`What distinguishes technical concurrence from an authorized commitment?`,options:[`Nothing`,`Concurrence says a request is technically reasonable. A commitment requires the authority to approve scope, funds or contract action`,`Commitments are verbal`,`Concurrence is binding`],correct:1,explain:`Record the difference. A facility user may validate a workflow without authorizing a contract change.`},
{tag:'Judgment',text:`A user says "we approved it" about added scope. What is the best response?`,options:[`Direct design to start`,`Ask who approved what and in what capacity, record it accurately and route the request to the authorities who decide`,`Tell the user they have no authority`,`Wait`],correct:1,explain:`Reopening a requirement is a change request to evaluate, not an instruction to start work.`},
{tag:'Judgment',text:`A colleague proposes moving required building systems out of BOD by calling them customer IT. What is right?`,options:[`Do it`,`Use the approved scope and PMP definition. Safety or required building systems cannot be excluded by relabeling`,`Let the customer decide`,`Remove the milestone`],correct:1,explain:`Do not move required project work outside BOD merely to preserve a favorable date.`},
{tag:'Doctrine',text:`An agreement amendment, a contract modification and a baseline change are...`,options:[`The same action`,`Different actions serving different purposes, none of which automatically completes the others`,`Interchangeable`,`Only needed for IIS`],correct:1,explain:`Each has its own authority and record. Sequence them so work begins only when required conditions are met.`},
{tag:'Judgment',text:`A faster technical alignment crosses an area with unverified property access. What is the best approach?`,options:[`Choose it anyway`,`Ask Real Estate for the right needed, status and alternatives and place the property condition ahead of the work in the schedule`,`Skip Real Estate`,`Reclassify the project`],correct:1,explain:`A technically faster option may be the slower delivery option if access takes longer to establish.`}],
commit:`Think of one "approved" you rely on. Who approved it, in what capacity, and what record shows it?`
};
