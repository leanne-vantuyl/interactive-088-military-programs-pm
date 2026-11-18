/*META{"phase":"Acquisition Planning","badge":"CHAPTER 8 &middot; ACQUISITION STRATEGY","chapter":"Chapter 8"}META*/
var CASE={
n:'08',title:'Choosing the Path to Award',
titleHtml:`Choosing the<br><em>Path to Award.</em>`,
lede:`Someone has found a faster way to buy the project, and someone else has found a gap in the requirement. <strong>What has to be true before a delivery method is a strategy and not just a label?</strong>`,
doctrine:`Acquisition strategy as a PM decision, requirements before vehicle, conventional FAR Design-Build and Design-Bid-Build, delivery approach versus contract type, authority before label for novel methods, and a defensible acquisition schedule (Chapter 8).`,
skill:`Asking for the authority behind an attractive idea without killing it, and working with a Contracting Officer who holds the decision you do not.`,
minutes:'30',
figures:`No funding amounts or dates are assumed. This case file concludes with a conventional FAR Design-Build path, consistent with the manuscript's continuing case.`,
cast:[`<strong>Nora Delgado</strong>, project manager (you)`,`<strong>Wen Zhao</strong>, Contracting Officer`,`<strong>Ingrid Larsen</strong>, Engineering; <strong>Rafael Soto</strong>, Construction`,`<strong>Dana Whitfield</strong>, Program Manager; <strong>Gerald Voss</strong>, sponsor representative`],
trainingTitle:`Strategy Follows Facts`,
training:`<div class="card"><div class="card-label">Chapter 8 &middot; Acquisition Planning</div>
<p>The PM does not hold the Contracting Officer's statutory authority to obligate the Government, but the PM is <strong>accountable for integrating the acquisition strategy with the mission outcome</strong>. The delivery method affects when design is mature enough to solicit construction, who holds technical responsibility, the nature of competition, risk allocation, cost certainty and stakeholder decision points. Decisions that look purely contractual can move the program amount, the estimate, Ready to Advertise, award and beneficial occupancy.</p>
<p><strong>Decision rule:</strong> no procurement strategy is executable merely because it is faster in a briefing. It must be legally available, affordable, supportable by the market, and feasible with the PDT and customer resources.</p></div>
<div class="card"><div class="card-label">Requirements First, Vehicle Second</div>
<p>A delivery method cannot cure an ambiguous requirement. Confirm operational outcomes, approved scope, interfaces, siting, permits, security, utilities, occupancy, commissioning and turnover. For MILCON, align with the authorized DD Form 1391. Choosing a novel method does not expand scope.</p>
<div class="table-wrap"><table class="ref"><thead><tr><th>Approach</th><th>PM considerations</th></tr></thead><tbody>
<tr><td>Design-Bid-Build</td><td>Government obtains a design first. Clear bid requirements and design control, with design completion on the pre-award critical path.</td></tr>
<tr><td>Design-Build</td><td>One industry contract for design and construction under performance requirements. Greater importance on defining outcomes, evaluation criteria, technical governance and evaluation resources. Government review does not transfer design responsibility.</td></tr>
<tr><td>Contract type</td><td>A separate decision. The KO selects it. A delivery label is not permission to choose any pricing structure.</td></tr>
</tbody></table></div></div>
<div class="card"><div class="card-label">Authority First, Label Second</div>
<p>Novel methods and Other Transactions need an actual statute, an eligibility fact pattern and an approval pathway before they are offered as options. If those are absent, evaluate legally authorized alternatives. Labeling a desired contract with a novel name does not create authority.</p>
<p>An unstaffed date is not an executable commitment. If the schedule assumes evaluation capacity the Resource Provider cannot staff, the PDT and KO revisit the schedule and record the consequences for award and occupancy forecasts.</p>
<span class="proc-tag">CHAPTER 8</span><span class="proc-tag">PROC2050</span><span class="proc-tag">FAR</span><span class="proc-tag">DESIGN-BUILD</span></div>
<div class="card people-card"><div class="card-label">People Skill &middot; Partnering With the Contracting Officer</div>
<p>Bring the KO your requirements, your risk evidence and your constraints early, and ask what they need to make the decision. Do not announce a method to the customer before the acquisition professionals have tested it. A KO who sees your work as input rather than pressure becomes your best ally.</p></div>`,
domain:'Relationship Building',
hook:`Look for where your instinct is to argue the idea's merits and where a question about its authority would serve you better.`,
reflections:[
`When someone brings you an attractive shortcut, what is your first question?`,
`What do you bring to a Contracting Officer before the strategy is chosen? What do you wish you had brought earlier?`,
`How do you handle a requirement you know is ambiguous when the team wants to move on?`],
scenario:{label:'The Acquisition Planning Meeting',text:`<p>On <strong>Project Ridgeway</strong>, the acquisition planning team meets. The Contracting Officer, <strong>Wen Zhao</strong>, chairs. Engineering (<strong>Ingrid Larsen</strong>), Construction (<strong>Rafael Soto</strong>), the PgM (<strong>Dana Whitfield</strong>) and you are present.</p>
<p>The draft requirements describe the facility's capability in general terms. The sponsor, <strong>Gerald Voss</strong>, has asked whether there is a faster way to buy it than the conventional approach.</p>`},
decisions:[
{context:`<p>Reading the draft requirements, Ingrid notes that responsibility for utility connections to the installation systems is not stated. Wen asks whether the team is ready to compare delivery methods. A colleague says, "Let's pick Design-Build now and clarify the utilities during the proposal period."</p>`,
prompt:`What do you recommend?`,
options:[
{id:'a',text:`Close the utility interface and other ambiguities with Engineering, Construction and the installation first, so methods are compared on real conditions.`},
{id:'b',text:`Select Design-Build now and let offerors state their assumptions on utilities, which moves the schedule forward and lets the market price the risk.`},
{id:'c',text:`Remove the utility connections from the estimate so it matches the program amount, and handle the connections as a separate action later.`},
{id:'d',text:`Delay all acquisition planning until the requirement is perfect, since any method chosen now might need to change when details are finalized.`}],
cons:{
a:{s:`Closed the requirement gap before choosing a vehicle.`,t:`<p>Rafael and Ingrid draft the utility interface responsibilities with the installation. Wen agrees the comparison is now meaningful. The team defines acceptance conditions without over-prescribing the solution.</p>`,i:`<strong>What this reveals:</strong> A delivery method cannot cure an ambiguous requirement. Establish requirements before choosing the vehicle.`},
b:{s:`Let the offerors fill the gap with their own assumptions.`,t:`<p>Proposals arrive pricing different utility assumptions, and the comparison is not apples to apples. The PM has to coordinate clarifications and the cost and schedule consequences before the prices can be relied on.</p>`,i:`<strong>What this reveals:</strong> When a solicitation omits a critical interface, proposals price different assumptions and the price comparison fails.`},
c:{s:`Reduced the estimate by omitting an essential requirement.`,t:`<p>The number now fits the program amount and the facility does not work. The omission returns later as a change, with a price.</p>`,i:`<strong>What this reveals:</strong> Reducing the estimate by omitting an essential requirement is not risk management.`},
d:{s:`Waited for perfection and lost the schedule.`,t:`<p>Requirements will always have open items. The team needs a defined, proportionate threshold of clarity, not endless refinement.</p>`,i:`<strong>What this reveals:</strong> The goal is measurable acceptance conditions and closed critical interfaces, not a perfect document.`}}},
{context:`<p>Mr. Voss tells you privately that someone told him "an Other Transaction can get you to award in half the time." He asks you to put it on the options list and tell the command it is being considered.</p>`,
prompt:`How do you handle it?`,
options:[
{id:'a',text:`Ask for the statute, facts and approval pathway and take it to Wen, so Mr. Voss hears it is being tested and nothing is decided.`},
{id:'b',text:`Add it to the options list and tell the command it is under consideration, which shows responsiveness without committing to anything.`},
{id:'c',text:`Tell Mr. Voss that Other Transactions are not allowed, because a firm answer now saves everyone time and ends a distracting idea.`},
{id:'d',text:`Ask Wen to label the Ridgeway contract an OT so it moves faster, since the label affects speed and the work would remain the same.`}],
cons:{
a:{s:`Asked for the authority first and kept the customer informed without raising expectations.`,t:`<p>Wen explains that eligibility for the method turns on facts the Ridgeway project does not present, and no approval pathway exists for this fact pattern. The team documents why and proceeds with the authorized options. Mr. Voss appreciates being told the reasons.</p>`,i:`<strong>What this reveals:</strong> Ask for the actual statute, eligibility and approval pathway. If they are absent, evaluate legally authorized alternatives, and do not label a desired contract with a novel name.`},
b:{s:`Offered a method before its authority was tested.`,t:`<p>The command now expects an OT. When it cannot be used, the retraction costs more than the original question would have.</p>`,i:`<strong>What this reveals:</strong> Specific legal authority and approval boundaries must be established before a method is offered as a choice.`},
c:{s:`Dismissed a method you had not examined.`,t:`<p>You may be right, but your assertion has no basis and Mr. Voss goes elsewhere for an opinion.</p>`,i:`<strong>What this reveals:</strong> The honest answer is "authority and eligibility decide, and here is how we are testing it." Authority first, label second.`},
d:{s:`Asked the KO to attach a label that does not fit the facts.`,t:`<p>Wen declines, politely, and the exchange costs you some of the trust you need for the rest of the strategy.</p>`,i:`<strong>What this reveals:</strong> The Contracting Officer's authority and judgment are their own. A label does not create authority.`}}},
{context:`<p>The team settles on conventional FAR Design-Build. The acquisition schedule forecasts award 45 days after proposals are received. Rafael checks with the Resource Provider and learns that technical evaluators will not be available for three weeks after proposal receipt.</p>`,
prompt:`What do you do?`,
options:[
{id:'a',text:`Take it to Wen, because the staffing is real. Revisit the evaluation period, examine alternatives, and record the effect on award and occupancy forecasts.`},
{id:'b',text:`Keep the 45 days. The evaluators will find a way, and changing the period now would signal doubt about the team's ability to deliver.`},
{id:'c',text:`Shorten the evaluation period to fit the date, since a tighter timeline protects the planned award and evaluators can focus on the key factors alone.`},
{id:'d',text:`Tell Mr. Voss award will be three weeks late and leave it there, so he has the facts and can decide how his command wants to respond.`}],
cons:{
a:{s:`Revised the schedule with the KO around real evaluation capacity and recorded the consequences.`,t:`<p>Wen and you agree on a feasible evaluation period, ask the Resource Provider about regional support for two evaluators, and update the forecast. The baseline is preserved and the change in forecast is documented.</p>`,
th:function(d){return d[2]==='a'?'<p>Because you closed the utility interface early, the evaluation criteria are clear, which helps the evaluators work faster once they are available.</p>':'';},
i:`<strong>What this reveals:</strong> An unstaffed date is not an executable commitment. The PDT and KO revisit the schedule, examine alternatives and record consequences for award and occupancy forecasts.`},
b:{s:`Held a date the staffing could not meet.`,t:`<p>Proposals arrive, evaluators do not, and the 45 days passes with nothing to show for it. Everyone learns the date was not real.</p>`,i:`<strong>What this reveals:</strong> Hope that someone will find a way is not a plan. Test the schedule against actual resources.`},
c:{s:`Compressed an evaluation to fit a date.`,t:`<p>Rushed evaluations invite protest and error. The schedule looks better and the risk increases, and neither the KO nor the evaluators agreed to it.</p>`,i:`<strong>What this reveals:</strong> The evaluation period is a KO-led, capacity-dependent step. Shortening it on paper does not make it safe.`},
d:{s:`Reported the slip without options.`,t:`<p>Mr. Voss has a worse date and no path. Dana asks what you recommended, and you had nothing.</p>`,i:`<strong>What this reveals:</strong> Bring the consequence with the options and the decision owner, not the consequence alone.`}}}
],
debrief:{
title:`A Strategy You Can Defend`,
html:`<p>Ridgeway now has a conventional FAR Design-Build path, chosen against a requirement with its interfaces closed, with a faster alternative tested for authority rather than assumed, and an acquisition schedule that matches evaluation capacity. None of those decisions was the PM's alone. The PM brought the facts, kept the customer informed and let the Contracting Officer decide what is theirs to decide.</p>`,
ledger:[[`Requirement`,`Interfaces closed with the installation. Acceptance conditions defined.`],[`Delivery approach`,`Conventional FAR Design-Build, selected with the KO.`],[`Alternative method`,`Tested for authority. Not available on this fact pattern.`],[`Evaluation schedule`,`Revised to match staffing. Baseline preserved. Forecast documented.`],[`Contract type`,`The KO's decision. Not assumed here.`]],
handoffTitle:`Hand-off to Chapter 9`,
handoff:`<p>With a path to award chosen, the team has to define what it is buying. Case File 09 follows Ridgeway into design and technical review, where unresolved comments quietly become risk.</p>`},
kc:[
{tag:'Doctrine',text:`Who holds the authority to obligate the Government through a procurement contract, and what is the PM's role in strategy?`,options:[`The PM holds it and chooses the strategy alone`,`The Contracting Officer holds the authority. The PM is accountable for integrating the strategy with the mission outcome and supplies requirements and risk evidence`,`The sponsor holds it`,`The PgM holds it`],correct:1,explain:`The PM does not hold the KO's statutory authority but must integrate acquisition strategy with the mission outcome.`},
{tag:'Judgment',text:`The draft requirement omits who is responsible for utility connections. What is the best action before choosing a delivery method?`,options:[`Choose Design-Build and let offerors assume`,`Close the interface and define acceptance conditions first`,`Delete the utilities from the estimate`,`Delay all planning`],correct:1,explain:`A method cannot cure an ambiguous requirement. Reducing the estimate by omitting an essential requirement is not risk management.`},
{tag:'Doctrine',text:`Is the choice between Design-Build and fixed-price the same decision?`,options:[`Yes`,`No. Delivery approach and contract pricing type are separate decisions, and the KO selects contract type`,`Only for MILCON`,`The PM selects both`],correct:1,explain:`A delivery label is not permission to select any pricing structure.`},
{tag:'Judgment',text:`A sponsor says a novel method could halve procurement time. What should the PM ask first?`,options:[`How soon can we start`,`What is the actual statute, eligibility fact pattern and approval pathway`,`Which vendor offers it`,`Can the KO attach the label`],correct:1,explain:`Authority first, label second. If it is absent, evaluate legally authorized alternatives.`},
{tag:'Doctrine',text:`In conventional FAR Design-Build, does Government review of the contractor's design transfer design responsibility to the Government?`,options:[`Yes`,`No. After award the contractor develops the contract-required design, and Government reviews do not transfer design responsibility`,`Only above a certain size`,`Only for reviews after 35 percent`],correct:1,explain:`This matters for how the PM and Engineering frame review comments and for risk allocation.`},
{tag:'Judgment',text:`The schedule assumes evaluation capacity that the Resource Provider cannot staff for three weeks. What is the best response?`,options:[`Keep the date`,`Revisit the evaluation period with the KO, examine alternatives and record the effect on award and occupancy forecasts`,`Shorten the evaluation`,`Report the slip only`],correct:1,explain:`An unstaffed date is not an executable commitment.`}],
commit:`What is one acquisition assumption in your project that you have not yet tested with the Contracting Officer?`
};
