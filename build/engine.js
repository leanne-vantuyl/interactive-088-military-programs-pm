var STORAGE_KEY='p088_cf'+CASE.n+'_v1';
var CS={name:'',themes:[],section:'welcome',sectionsComplete:{training:false,discussion:false,casestudy:false,kc:false},kcScore:0,decisions:{},caseStep:0};

function saveState(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(CS));}catch(e){}}
function loadState(){try{var raw=localStorage.getItem(STORAGE_KEY);if(!raw)return false;var d=JSON.parse(raw);if(!d||!d.name)return false;CS=d;return true;}catch(e){return false;}}

/* ===== THEME AND TEXT SIZE ===== */
function applyTheme(t){
  if(t==='dark'){document.body.classList.add('dark-mode');}else{document.body.classList.remove('dark-mode');}
  var b=document.getElementById('theme-toggle');
  if(b)b.textContent=(t==='dark')?'Light Mode':'Dark Mode';
  try{localStorage.setItem('pm-course-theme',t);}catch(e){}
}
function toggleTheme(){applyTheme(document.body.classList.contains('dark-mode')?'light':'dark');}
var FONT_SIZES=['font-s','','font-l'];
var FONT_LABELS={'font-s':'Text: S','':'Text: M','font-l':'Text: L'};
function applyFontSize(cls){
  document.documentElement.classList.remove('font-s','font-l');
  if(cls){document.documentElement.classList.add(cls);}
  var b=document.getElementById('font-toggle');
  if(b)b.textContent=FONT_LABELS[cls];
  try{localStorage.setItem('pm-fontsize',cls);}catch(e){}
}
function toggleFontSize(){
  var cur=document.documentElement.classList.contains('font-l')?'font-l':(document.documentElement.classList.contains('font-s')?'font-s':'');
  applyFontSize(FONT_SIZES[(FONT_SIZES.indexOf(cur)+1)%FONT_SIZES.length]);
}
(function(){
  var f='',t='light';
  try{f=localStorage.getItem('pm-fontsize')||'';var s=localStorage.getItem('pm-course-theme')||'';if(s.indexOf('dark')===0)t='dark';}catch(e){}
  applyFontSize(f);applyTheme(t);
})();

/* ===== SECTIONS ===== */
var SECTIONS=['welcome','training','discussion','casestudy','kc','complete'];
var SECTION_LABELS={welcome:'Welcome',training:'Training',discussion:'Discussion',casestudy:'Case Study',kc:'Knowledge Check',complete:'Complete'};
function updateProgress(){
  var idx=SECTIONS.indexOf(CS.section);
  var pct=Math.round((idx/(SECTIONS.length-1))*100);
  document.getElementById('progress-fill').style.width=pct+'%';
  document.getElementById('progress-pct').textContent=pct+'%';
  document.getElementById('progress-label').textContent=SECTION_LABELS[CS.section]||'';
}
function renderNav(){
  var order=['training','discussion','casestudy','kc'];
  var html='<div class="section-nav">';
  order.forEach(function(s,idx){
    var cls='sec-btn'+(CS.section===s?' active':'')+(CS.sectionsComplete[s]?' complete':'');
    var locked=(idx>0 && !CS.sectionsComplete[order[idx-1]] && CS.section!==s);
    if(locked)cls+=' locked';
    html+='<button class="'+cls+'" '+(locked?'disabled':'onclick="goSection(\''+s+'\')"')+'>'+(CS.sectionsComplete[s]?'&#10003; ':'')+SECTION_LABELS[s]+'</button>';
  });
  return html+'</div>';
}
function goSection(s){CS.section=s;saveState();render();}
function completeSection(cur,next){CS.sectionsComplete[cur]=true;CS.section=next;saveState();render();}
function render(){
  var m=document.getElementById('main-content');
  document.getElementById('progress-bar-wrap').style.display=(CS.section==='welcome')?'none':'block';
  if(CS.section==='welcome')m.innerHTML=renderWelcome();
  else if(CS.section==='training')m.innerHTML=renderTraining();
  else if(CS.section==='discussion')m.innerHTML=renderDiscussion();
  else if(CS.section==='casestudy')m.innerHTML=renderCaseStudy();
  else if(CS.section==='kc')m.innerHTML=renderKC();
  else if(CS.section==='complete')m.innerHTML=renderComplete();
  updateProgress();
  window.scrollTo({top:0,behavior:'smooth'});
}
function showMsg(t){var el=document.getElementById('form-msg');if(el){el.textContent=t;el.className='form-msg show';}}

/* ===== LEARNER PROFILE (shared across the course series) ===== */
var THEME_DOMAIN={'Analytical':'Strategic Thinking','Context':'Strategic Thinking','Futuristic':'Strategic Thinking','Ideation':'Strategic Thinking','Input':'Strategic Thinking','Intellection':'Strategic Thinking','Learner':'Strategic Thinking','Strategic':'Strategic Thinking','Adaptability':'Relationship Building','Connectedness':'Relationship Building','Developer':'Relationship Building','Empathy':'Relationship Building','Harmony':'Relationship Building','Includer':'Relationship Building','Individualization':'Relationship Building','Positivity':'Relationship Building','Relator':'Relationship Building','Activator':'Influencing','Command':'Influencing','Communication':'Influencing','Competition':'Influencing','Maximizer':'Influencing','Self-Assurance':'Influencing','Significance':'Influencing','Woo':'Influencing','Achiever':'Executing','Arranger':'Executing','Belief':'Executing','Consistency':'Executing','Deliberative':'Executing','Discipline':'Executing','Focus':'Executing','Responsibility':'Executing','Restorative':'Executing'};
var THEME_OPTIONS='<option value="">Select</option><optgroup label="Strategic Thinking"><option>Analytical</option><option>Context</option><option>Futuristic</option><option>Ideation</option><option>Input</option><option>Intellection</option><option>Learner</option><option>Strategic</option></optgroup><optgroup label="Relationship Building"><option>Adaptability</option><option>Connectedness</option><option>Developer</option><option>Empathy</option><option>Harmony</option><option>Includer</option><option>Individualization</option><option>Positivity</option><option>Relator</option></optgroup><optgroup label="Influencing"><option>Activator</option><option>Command</option><option>Communication</option><option>Competition</option><option>Maximizer</option><option>Self-Assurance</option><option>Significance</option><option>Woo</option></optgroup><optgroup label="Executing"><option>Achiever</option><option>Arranger</option><option>Belief</option><option>Consistency</option><option>Deliberative</option><option>Discipline</option><option>Focus</option><option>Responsibility</option><option>Restorative</option></optgroup>';
function getProfile(){try{var r=localStorage.getItem('pm-learner-profile');return r?JSON.parse(r):null;}catch(e){return null;}}
function saveProfile(name,themes){try{localStorage.setItem('pm-learner-profile',JSON.stringify({name:name,themes:themes,savedAt:new Date().toISOString()}));}catch(e){}}
function clearProfileAndReload(){try{localStorage.removeItem('pm-learner-profile');}catch(e){}render();}
function toggleNAThemes(){document.getElementById('theme-grid').style.display=document.getElementById('na-checkbox').checked?'none':'grid';}
function renderProfileFields(){
  var p=getProfile();
  if(p&&p.name){
    var th=(p.themes&&p.themes[0]!=='N/A')?p.themes.join(', '):'Not provided';
    return '<div class="profile-display"><div class="field-label">Learner</div><div class="profile-value">'+p.name+'</div>'
      +'<div class="field-label" style="margin-top:10px;">Top Five Strengths (optional)</div><div class="profile-value">'+th+'</div>'
      +'<button class="link-btn" onclick="clearProfileAndReload()">Not you, or need to change this? Clear and re-enter</button></div>';
  }
  var sels='';
  for(var i=1;i<=5;i++){sels+='<div class="theme-select-item"><label for="theme-select-'+i+'">Theme '+i+'</label><select class="theme-select" id="theme-select-'+i+'">'+THEME_OPTIONS+'</select></div>';}
  return '<div style="margin-bottom:18px;"><label class="field-label" for="name-input">Your name</label>'
    +'<input class="name-input" id="name-input" type="text" placeholder="First and last name"></div>'
    +'<div class="field-label">Your top five CliftonStrengths themes (optional)</div>'
    +'<label class="na-row"><input type="checkbox" id="na-checkbox" onchange="toggleNAThemes()"> I do not know my themes, or prefer to skip</label>'
    +'<div class="theme-select-grid" id="theme-grid">'+sels+'</div>';
}

/* ===== SEEDED SHUFFLE (option order is fixed per case file, so saved answers stay valid) ===== */
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
var LETTERS=['A','B','C','D'];
(function prepare(){
  var seed=parseInt(CASE.n,10)*1000+7;
  CASE.decisions.forEach(function(d,di){
    var rnd=mulberry(seed+di*31);
    var rest=d.options.filter(function(o){return o.id!=='a';});
    for(var i=rest.length-1;i>0;i--){var j=Math.floor(rnd()*(i+1));var t=rest[i];rest[i]=rest[j];rest[j]=t;}
    var best=d.options.filter(function(o){return o.id==='a';})[0];
    var g=(parseInt(CASE.n,10)-1)*3+di;var pos=(g*3+(g>>2))%d.options.length;
    var a=rest.slice();a.splice(pos,0,best);
    a.forEach(function(o,k){o.letter=LETTERS[k];});
    d.options=a;
  });
})();

/* ===== WELCOME ===== */
function renderWelcome(){
  var saved=loadState();
  var resume=(saved&&CS.name)?'<button class="btn-secondary" onclick="render()" style="margin-left:10px;">Resume as '+CS.name+' &rarr;</button>':'';
  var cast='';
  if(CASE.cast&&CASE.cast.length){cast='<div class="card"><div class="card-label">Who You Will Meet</div><ul>'+CASE.cast.map(function(c){return '<li>'+c+'</li>';}).join('')+'</ul></div>';}
  return '<div class="screen">'
  +'<p class="eyebrow">Interactive 088 &middot; Case File '+CASE.n+'</p>'
  +'<h1 class="title-main">'+CASE.titleHtml+'</h1>'
  +'<p class="lede">'+CASE.lede+'</p>'
  +'<div class="card"><div class="card-label">What This Case File Covers</div>'
  +'<p><strong>Military Programs Doctrine:</strong> '+CASE.doctrine+'</p>'
  +'<p><strong>People Skill:</strong> '+CASE.skill+'</p></div>'
  +cast
  +'<div class="card"><div class="card-label">How This Works</div>'
  +'<p>Training (5 min) &rarr; Reflection &rarr; Case Study ('+CASE.decisions.length+' branching decisions on Project Ridgeway) &rarr; Knowledge Check (6 questions, formative, 4 of 6 to move on). About '+CASE.minutes+' minutes in total. Your answers stay on this device.</p></div>'
  +renderProfileFields()
  +'<div class="form-msg" id="form-msg"></div>'
  +'<div class="btn-row"><button class="btn-primary" onclick="startCase()">Begin Case File &rarr;</button>'+resume+'</div>'
  +'<p class="fine">Project Ridgeway and every person in it are fictional. '+(CASE.figures||'The scenario adds no funding amounts, dates or approvals.')+' Governing regulations, delegations and authoritative records control actual projects.</p>'
  +'</div>';
}
function startCase(){
  var p=getProfile(),name,themes;
  if(p&&p.name){name=p.name;themes=p.themes;}
  else{
    name=document.getElementById('name-input').value.replace(/^\s+|\s+$/g,'');
    if(!name){showMsg('Please enter your name to continue.');return;}
    if(document.getElementById('na-checkbox').checked){themes=['N/A'];}
    else{
      themes=[];
      for(var i=1;i<=5;i++){
        var v=document.getElementById('theme-select-'+i).value;
        if(!v){showMsg('Please select all five themes, or check the box to skip this step.');return;}
        themes.push(v);
      }
    }
    saveProfile(name,themes);
  }
  CS.name=name;CS.themes=themes;CS.section='training';saveState();render();
}

/* ===== TRAINING ===== */
function renderTraining(){
  return '<div class="screen">'+renderNav()
  +'<p class="eyebrow">Training &middot; 5 Minutes</p>'
  +'<h2 class="title-main title-sub">'+CASE.trainingTitle+'</h2>'
  +CASE.training
  +'<div class="nav-row"><span></span><button class="btn-primary" onclick="completeSection(\'training\',\'discussion\')">Continue to Discussion &rarr;</button></div>'
  +'</div>';
}

/* ===== DISCUSSION ===== */
function strengthNote(){
  var themes=(CS.themes||[]).filter(function(t){return t&&t!=='N/A';});
  if(!themes.length)return 'Reflect on how your natural strengths shaped your approach to this scenario. Which choices came naturally, and which took deliberate effort?';
  var t=themes[0],i;
  for(i=0;i<themes.length;i++){if(THEME_DOMAIN[themes[i]]===CASE.domain){t=themes[i];break;}}
  var d=THEME_DOMAIN[t];
  var stem={
   'Strategic Thinking':'Your <strong>'+t+'</strong> likely helps you see how the pieces connect. ',
   'Relationship Building':'Your <strong>'+t+'</strong> likely helps you read the people involved. ',
   'Influencing':'Your <strong>'+t+'</strong> likely helps you move others toward a decision. ',
   'Executing':'Your <strong>'+t+'</strong> likely pushes you to get things done. '
  }[d];
  return stem+CASE.hook;
}
function renderDiscussion(){
  var rq='';
  CASE.reflections.forEach(function(q,i){rq+='<div class="reflect-block"><div class="reflect-q">'+(i+1)+'. '+q+'</div><textarea class="reflect-input" id="r'+(i+1)+'" placeholder="Type your thoughts..."></textarea></div>';});
  return '<div class="screen">'+renderNav()
  +'<p class="eyebrow">Discussion and Reflection</p>'
  +'<h2 class="title-main title-sub">Before You See the Scenario</h2>'
  +'<p class="lede">These reflections are not graded. Answer honestly. Your responses are saved only on this device.</p>'
  +'<div class="card"><div class="card-label">Your Strengths Lens</div><p>'+strengthNote()+'</p></div>'
  +rq
  +'<div class="nav-row"><span></span><button class="btn-primary" onclick="saveReflectionsAndContinue()">Continue to Case Study &rarr;</button></div>'
  +'</div>';
}
function saveReflectionsAndContinue(){
  var r={};
  for(var i=1;i<=CASE.reflections.length;i++){var el=document.getElementById('r'+i);r['r'+i]=el?el.value:'';}
  CS.reflections=r;
  completeSection('discussion','casestudy');
}

/* ===== CASE STUDY ===== */
var NDEC=CASE.decisions.length;
function stepAt(i){
  if(i===0)return {type:'scenario'};
  if(i<=NDEC)return {type:'decision',d:CASE.decisions[i-1],label:'Decision '+i+' of '+NDEC};
  return {type:'debrief'};
}
function bestCount(){var n=0;for(var i=1;i<=NDEC;i++){if(CS.decisions[i]==='a')n++;}return n;}
function renderCaseStudy(){
  var idx=CS.caseStep||0,step=stepAt(idx);
  var html='<div class="screen">'+renderNav()+'<p class="eyebrow">Case Study &middot; Project Ridgeway</p>';
  if(step.type==='scenario'){
    html+='<h2 class="title-main title-sub">'+CASE.scenario.label+'</h2><div class="scenario-box"><div class="scenario-label">Scenario Setup</div><div class="scenario-text">'+CASE.scenario.text+'</div></div>'
    +'<div class="nav-row"><span></span><button class="btn-primary" onclick="caseNext()">Begin Decision 1 &rarr;</button></div>';
  }else if(step.type==='decision'){
    var d=step.d;
    html+='<div class="scenario-label" style="margin-bottom:6px;">'+step.label+'</div>'
    +'<div class="scenario-box"><div class="scenario-text">'+d.context+'</div></div>'
    +'<div class="decision-prompt">'+d.prompt+'</div><div id="case-options" role="radiogroup" aria-label="Decision options">';
    d.options.forEach(function(o){html+='<div class="choice-option" id="opt-'+o.id+'" role="radio" aria-checked="false" tabindex="0" onclick="chooseOption(\''+o.id+'\')"><span class="choice-letter">'+o.letter+'.</span>'+o.text+'</div>';});
    html+='</div><div id="case-consequence" aria-live="polite"></div><div id="case-nav" class="nav-row" style="display:none;"><span></span><button class="btn-primary" onclick="caseNext()" id="case-next-btn">Continue &rarr;</button></div>';
  }else{
    html+=renderDebrief();
  }
  return html+'</div>';
}
function caseNext(){
  CS.caseStep=(CS.caseStep||0)+1;saveState();
  document.getElementById('main-content').innerHTML=renderCaseStudy();
  window.scrollTo({top:0,behavior:'smooth'});
}
function chooseOption(id){
  var idx=CS.caseStep||0,step=stepAt(idx),d=step.d;
  if(document.getElementById('case-nav').style.display==='flex')return;
  CS.decisions[idx]=id;saveState();
  d.options.forEach(function(o){var el=document.getElementById('opt-'+o.id);el.style.pointerEvents='none';el.style.opacity='.55';el.setAttribute('aria-disabled','true');if(o.id===id){el.classList.add('chosen');el.setAttribute('aria-checked','true');}});
  var c=d.cons[id];
  var extra=c.th?c.th(CS.decisions):'';
  document.getElementById('case-consequence').innerHTML='<div class="consequence-box"><div class="consequence-label">What Happens</div><div class="consequence-text">'+c.t+extra+'</div>'
    +'<div class="insight-box"><div class="insight-label">Insight</div><div class="insight-text">'+c.i+'</div></div></div>';
  document.getElementById('case-nav').style.display='flex';
  if(idx===NDEC)document.getElementById('case-next-btn').innerHTML='Continue to Debrief &rarr;';
}
function renderDebrief(){
  var items='';
  for(var i=1;i<=NDEC;i++){
    var d=CASE.decisions[i-1],id=CS.decisions[i];
    if(!id)continue;
    var o=d.options.filter(function(x){return x.id===id;})[0];
    items+='<li><span class="pl-k">Decision '+i+' &middot; you chose '+o.letter+'</span>'+d.cons[id].s+'</li>';
  }
  var n=bestCount();
  var lead=(n===NDEC)?'You took the best-supported route on every decision. The harder skill is holding it when someone is standing in front of you asking for something else.':(n*2>=NDEC?'You took the best-supported route on '+n+' of '+NDEC+' decisions. Look at the others and ask what pressure pulled you off it.':'Several of your choices moved quickly toward what someone was asking for. That is a natural instinct. This case is about staying responsive without getting ahead of the evidence or the authority.');
  var B=CASE.debrief;
  var ledger='';
  if(B.ledger){ledger='<div class="card"><div class="card-label">Ridgeway at the End of Case File '+CASE.n+'</div><div class="table-wrap"><table class="ref"><thead><tr><th>Item</th><th>Status in this case</th></tr></thead><tbody>'+B.ledger.map(function(r){return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td></tr>';}).join('')+'</tbody></table></div></div>';}
  return '<h2 class="title-main title-sub">Case Debrief</h2>'
  +'<div class="card people-card"><div class="card-label">Your Path Through Ridgeway</div><p>'+lead+'</p><ul class="path-list">'+items+'</ul></div>'
  +'<div class="card"><div class="card-label">'+B.title+'</div>'+B.html+'</div>'
  +ledger
  +'<div class="card"><div class="card-label">'+B.handoffTitle+'</div>'+B.handoff+'</div>'
  +'<div class="nav-row"><span></span><button class="btn-primary" onclick="completeSection(\'casestudy\',\'kc\')">Continue to Knowledge Check &rarr;</button></div>';
}

/* ===== KNOWLEDGE CHECK ===== */
var KC_QUESTIONS=CASE.kc;
var kcAnswers={},kcOrder={};
function shuffleArray(arr){var a=arr.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function buildKCOrder(){kcOrder={};KC_QUESTIONS.forEach(function(q,qi){var ix=[];for(var i=0;i<q.options.length;i++)ix.push(i);kcOrder[qi]=shuffleArray(ix);});}
function renderKC(){
  kcAnswers={};buildKCOrder();
  var q='';
  KC_QUESTIONS.forEach(function(Q,qi){
    q+='<div class="question-block" id="kc-q-'+qi+'"><div class="question-num" style="display:inline-block;">QUESTION '+(qi+1)+' OF '+KC_QUESTIONS.length+'</div><span class="question-tag">'+Q.tag+'</span><div class="question-text" style="margin-top:8px;">'+Q.text+'</div>';
    kcOrder[qi].forEach(function(orig,pos){q+='<div class="answer-option" id="kc-opt-'+qi+'-'+pos+'" role="radio" aria-checked="false" tabindex="0" onclick="selectKCAnswer('+qi+','+pos+')"><div class="answer-radio"></div><div>'+Q.options[orig]+'</div></div>';});
    q+='<div class="kc-explain" id="kc-explain-'+qi+'"><strong>Why:</strong> '+Q.explain+'</div></div>';
  });
  return '<div class="screen">'+renderNav()
  +'<p class="eyebrow">Knowledge Check &middot; 6 Questions &middot; Formative</p>'
  +'<h2 class="title-main title-sub">Doctrine and Judgment</h2>'
  +'<p class="lede">Some questions have a single correct doctrinal answer. Others ask what the PM should do. Read the explanation after answering either way. Four of six moves you on.</p>'
  +q+'<div class="kc-feedback" id="kc-feedback" role="status" aria-live="polite"></div>'
  +'<div class="btn-row" id="kc-btn-row"><button class="btn-primary" id="kc-submit-btn" onclick="submitKC()" disabled>Submit Answers</button></div></div>';
}
function selectKCAnswer(qi,pos){
  var n=KC_QUESTIONS[qi].options.length;
  for(var i=0;i<n;i++){document.getElementById('kc-opt-'+qi+'-'+i).classList.remove('selected');}
  kcAnswers[qi]=pos;document.getElementById('kc-opt-'+qi+'-'+pos).classList.add('selected');for(var z=0;z<n;z++){document.getElementById('kc-opt-'+qi+'-'+z).setAttribute('aria-checked',z===pos?'true':'false');}
  if(Object.keys(kcAnswers).length===KC_QUESTIONS.length)document.getElementById('kc-submit-btn').disabled=false;
}
function submitKC(){
  var correct=0;
  KC_QUESTIONS.forEach(function(q,qi){
    var ord=kcOrder[qi],sel=kcAnswers[qi],ok=(ord[sel]===q.correct),cp=ord.indexOf(q.correct);
    if(ok)correct++;
    document.getElementById('kc-opt-'+qi+'-'+sel).classList.remove('selected');
    document.getElementById('kc-opt-'+qi+'-'+sel).classList.add(ok?'correct':'incorrect');
    if(!ok)document.getElementById('kc-opt-'+qi+'-'+cp).classList.add('correct');
    document.getElementById('kc-explain-'+qi).classList.add('show');
  });
  CS.kcScore=correct;
  var passed=(correct/KC_QUESTIONS.length)>=0.6;
  var fb=document.getElementById('kc-feedback');
  fb.className='kc-feedback show '+(passed?'pass':'fail');
  fb.innerHTML='<div class="kc-score">'+correct+'/'+KC_QUESTIONS.length+'</div>'+(passed?'<strong>Well done.</strong> You have completed Case File '+CASE.n+'.':'<strong>Review the explanations above.</strong> This is a formative check, not a grade. The explanations are the learning.');
  var row=document.getElementById('kc-btn-row');
  if(passed){CS.sectionsComplete.kc=true;saveState();row.innerHTML='<button class="btn-primary" onclick="goSection(\'complete\')">Finish Case File &rarr;</button>';}
  else{row.innerHTML='<button class="btn-primary" onclick="goSection(\'kc\')">Retake Knowledge Check</button>';}
  fb.scrollIntoView({behavior:'smooth',block:'center'});
}

/* ===== COMPLETE ===== */
function renderComplete(){
  CS.section='complete';saveState();
  var next=CASE.nextFile?'<a href="'+CASE.nextFile+'" style="color:var(--gold);font-weight:700;">Continue to Case File '+CASE.nextN+' &rarr;</a> &middot; ':'This is the final case file. ';
  return '<div class="screen"><div class="complete-wrap"><div class="complete-seal">&#10003;</div>'
  +'<div class="complete-title">Case File '+CASE.n+' Complete</div>'
  +'<div class="complete-sub">'+CS.name+' &middot; '+CASE.title+' &middot; Score: '+CS.kcScore+'/'+KC_QUESTIONS.length+'</div>'
  +'<div style="text-align:left;max-width:480px;margin:0 auto 20px;"><label class="field-label" for="commitment">'+CASE.commit+'</label>'
  +'<textarea class="reflect-input" id="commitment" placeholder="Type your commitment...">'+(CS.commitment||'')+'</textarea></div>'
  +'<div class="form-msg" id="form-msg" style="text-align:left;"></div>'
  +'<div class="btn-row" style="justify-content:center;"><button class="btn-primary" onclick="saveCommitment()">Save and Finish</button><button class="btn-secondary" onclick="askRestart()">Restart Case File</button></div>'
  +'<div id="restart-confirm" style="display:none;margin-top:14px;" class="form-msg">This clears your progress for this case file. <button class="link-btn" onclick="restartCase()">Yes, restart</button> &middot; <button class="link-btn" onclick="cancelRestart()">Cancel</button></div>'
  +'<p class="fine">'+next+'<a href="index.html" style="color:var(--gold);font-weight:700;">Course Home</a></p></div></div>';
}
function saveCommitment(){
  CS.commitment=document.getElementById('commitment').value;saveState();
  var el=document.getElementById('form-msg');el.style.borderColor='var(--accent)';el.style.background='var(--accent-bg)';el.textContent='Saved on this device. Thank you for completing Case File '+CASE.n+'.';el.className='form-msg show';
}
function askRestart(){var e=document.getElementById('restart-confirm');e.className='form-msg show';e.style.display='block';}
function cancelRestart(){document.getElementById('restart-confirm').style.display='none';}
function restartCase(){try{localStorage.removeItem(STORAGE_KEY);}catch(e){}CS={name:'',themes:[],section:'welcome',sectionsComplete:{training:false,discussion:false,casestudy:false,kc:false},kcScore:0,decisions:{},caseStep:0};render();}

(function init(){render();})();

document.addEventListener('keydown',function(e){
  var t=e.target;
  if(!t||!t.getAttribute||t.getAttribute('role')!=='radio')return;
  if(e.key==='Enter'||e.key===' '){e.preventDefault();t.click();return;}
  if(e.key==='ArrowDown'||e.key==='ArrowRight'||e.key==='ArrowUp'||e.key==='ArrowLeft'){
    e.preventDefault();var grp=[].slice.call(t.parentNode.querySelectorAll('[role=radio]'));
    var i=grp.indexOf(t),step=(e.key==='ArrowDown'||e.key==='ArrowRight')?1:-1;
    var nx=grp[(i+step+grp.length)%grp.length];if(nx)nx.focus();
  }
});
