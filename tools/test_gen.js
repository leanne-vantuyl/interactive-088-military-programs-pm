const {JSDOM}=require('jsdom');const fs=require('fs');
const file=process.argv[2];
const html=fs.readFileSync(file,'utf8').replace(/<link[^>]*fonts[^>]*>/g,'');
let errors=[];
function fresh(){return new JSDOM(html,{runScripts:'dangerously',url:'https://x.test/',pretendToBeVisual:true,beforeParse(w){w.scrollTo=()=>{};w.Element.prototype.scrollIntoView=()=>{};w.addEventListener('error',e=>errors.push(e.message));}});}
const N=fresh().window.CASE.decisions.length;
const ids=['a','b','c','d'];let combos=[[]];
for(let i=0;i<N;i++){const nc=[];for(const c of combos)for(const x of ids)nc.push(c.concat(x));combos=nc;}
let paths=0;
for(const combo of combos){
  const w=fresh().window,d=w.document;
  d.getElementById('name-input').value='Test Learner';d.getElementById('na-checkbox').checked=true;
  w.startCase();w.completeSection('training','discussion');
  d.getElementById('r1').value='x';w.saveReflectionsAndContinue();w.caseNext();
  for(let i=0;i<N;i++){
    const opt=d.getElementById('opt-'+combo[i]);if(!opt)throw new Error('no opt '+combo[i]);
    opt.click();
    if(d.getElementById('case-consequence').textContent.length<80)throw new Error('empty consequence');
    w.caseNext();
  }
  if(!/Your Path Through Ridgeway/.test(d.getElementById('main-content').textContent))throw new Error('no debrief');
  w.completeSection('casestudy','kc');
  w.KC_QUESTIONS.forEach((q,qi)=>{w.selectKCAnswer(qi,w.kcOrder[qi].indexOf(q.correct));});
  w.submitKC();
  if(w.CS.kcScore!==w.KC_QUESTIONS.length)throw new Error('score');
  w.goSection('complete');
  if(!/Complete/.test(d.getElementById('main-content').textContent))throw new Error('no complete');
  paths++;
}
const bad=fs.readFileSync(file,'utf8').match(/—|–|&mdash;|&ndash;/g);
console.log(file.split('/').pop(),'paths',paths,'errors',errors,'dashes',bad?bad.length:0);
