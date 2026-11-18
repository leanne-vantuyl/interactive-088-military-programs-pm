const {JSDOM}=require('jsdom');const fs=require('fs');const path=require('path');
const dir=process.argv[2];
const files=fs.readdirSync(dir).filter(f=>/^CaseFile\d+_.*\.html$/.test(f)).sort();
const ALL=['Analytical','Context','Futuristic','Ideation','Input','Intellection','Learner','Strategic','Adaptability','Connectedness','Developer','Empathy','Harmony','Includer','Individualization','Positivity','Relator','Activator','Command','Communication','Competition','Maximizer','Self-Assurance','Significance','Woo','Achiever','Arranger','Belief','Consistency','Deliberative','Discipline','Focus','Responsibility','Restorative'];
const themes=ALL.slice().sort(()=>Math.random()-.5).slice(0,5);
console.log('Student: Jordan Rivera | CliftonStrengths top 5:',themes.join(', '));
let store={};const issues=[];const log=[];
const rnd=n=>Math.floor(Math.random()*n);
function open(f){
  const html=fs.readFileSync(path.join(dir,f),'utf8').replace(/<link[^>]*fonts[^>]*>/g,'');
  const errs=[];
  const dom=new JSDOM(html,{runScripts:'dangerously',url:'https://x.test/'+f,pretendToBeVisual:true,beforeParse(w){
    w.scrollTo=()=>{};w.Element.prototype.scrollIntoView=()=>{};
    for(const k in store)w.localStorage.setItem(k,store[k]);
    w.addEventListener('error',e=>errs.push(e.message));}});
  return {w:dom.window,d:dom.window.document,errs};
}
function save(w){for(let i=0;i<w.localStorage.length;i++){const k=w.localStorage.key(i);store[k]=w.localStorage.getItem(k);}}
files.forEach((f,idx)=>{
  const {w,d,errs}=open(f);const tag=f.slice(0,10);
  // Welcome
  const first=idx===0;
  const hasName=!!d.getElementById('name-input');
  if(first){
    // try empty submit first (validation)
    w.startCase();
    const msg=d.getElementById('form-msg');
    if(!msg||!msg.textContent.trim())issues.push(tag+': empty welcome gives no validation message');
    d.getElementById('name-input').value='Jordan Rivera';
    themes.forEach((t,i)=>{const s=d.getElementById('theme-select-'+(i+1));s.value=t;});
    w.startCase();
  }else{
    const prof=d.body.textContent.includes('Jordan Rivera');
    if(!prof)issues.push(tag+': returning student not recognized on welcome');
    if(hasName&&d.getElementById('name-input').value!=='Jordan Rivera'){ /* profile card shown instead of input maybe */ }
    try{w.startCase();}catch(e){issues.push(tag+': startCase threw '+e.message);}
  }
  if(!/Training|training/.test(d.getElementById('main-content').textContent))issues.push(tag+': did not reach Training');
  w.completeSection('training','discussion');
  const lens=d.getElementById('main-content').textContent;
  const shown=themes.filter(t=>lens.includes(t));
  if(shown.length===0)issues.push(tag+': Strengths Lens shows none of the student themes');
  d.getElementById('r1').value='I would first confirm the facts before committing.';
  w.saveReflectionsAndContinue();w.caseNext();
  const N=w.CASE.decisions.length;let picks=[];
  for(let i=0;i<N;i++){
    const opts=[...d.querySelectorAll('.choice-option')];
    const o=opts[rnd(opts.length)];o.click();picks.push(o.id.replace('opt-',''));
    const c=d.getElementById('case-consequence').textContent;
    if(c.length<80)issues.push(tag+': thin consequence on decision '+(i+1));
    if(/undefined|NaN|\[object/.test(c))issues.push(tag+': bad text in consequence '+(i+1));
    w.caseNext();
  }
  const deb=d.getElementById('main-content').textContent;
  if(/undefined|NaN|\[object/.test(deb))issues.push(tag+': bad text in debrief');
  w.completeSection('casestudy','kc');
  // KC: first answer 3 wrong to test fail+retake, then pass
  const Q=w.KC_QUESTIONS;
  Q.forEach((q,qi)=>{const ci=w.kcOrder[qi].indexOf(q.correct);const wrong=(ci+1)%w.kcOrder[qi].length;w.selectKCAnswer(qi,qi<3?wrong:ci);});
  w.submitKC();
  const failed=w.CS.kcScore;
  const btn=d.getElementById('kc-btn-row').textContent;
  if(failed<4&&!/Retake/.test(btn))issues.push(tag+': no retake offered after fail');
  w.goSection('kc');
  Q.forEach((q,qi)=>{w.selectKCAnswer(qi,w.kcOrder[qi].indexOf(q.correct)-0);});
  w.submitKC();
  if(w.CS.kcScore!==Q.length)issues.push(tag+': retake score '+w.CS.kcScore);
  w.goSection('complete');
  d.getElementById('commitment').value='I will confirm authority before I commit.';
  w.saveCommitment();
  const done=d.getElementById('main-content').textContent;
  const link=[...d.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')).filter(h=>!h.startsWith('#')&&!h.startsWith('http'));
  link.forEach(h=>{if(!fs.existsSync(path.join(dir,h)))issues.push(tag+': broken link '+h);});
  if(idx<files.length-1&&!link.some(h=>h===files[idx+1]))issues.push(tag+': next link does not point to '+files[idx+1]);
  if(errs.length)issues.push(tag+': JS errors '+errs.join('|'));
  save(w);
  log.push(tag+' picks '+picks.join('')+' firstKC '+failed+'/6 lens '+shown.length+'/5 themes');
});
// Home
{const html=fs.readFileSync(path.join(dir,'index.html'),'utf8').replace(/<link[^>]*fonts[^>]*>/g,'');
 const errs=[];const dom=new JSDOM(html,{runScripts:'dangerously',url:'https://x.test/index.html',pretendToBeVisual:true,beforeParse(w){for(const k in store)w.localStorage.setItem(k,store[k]);w.addEventListener('error',e=>errs.push(e.message));}});
 const t=dom.window.document.body.textContent;
 log.push('Home: mentions Jordan '+t.includes('Jordan')+', done markers '+(t.match(/Complete|✓|&#10003;/g)||[]).length+', errors '+errs.length);
 [...dom.window.document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')).filter(h=>/\.html$/.test(h)).forEach(h=>{if(!fs.existsSync(path.join(dir,h)))issues.push('Home: broken link '+h);});
}
console.log(log.join('\n'));
console.log('ISSUES ('+issues.length+'):\n'+issues.join('\n'));
