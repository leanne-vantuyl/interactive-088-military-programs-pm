const {JSDOM}=require('jsdom');const fs=require('fs');
const html=fs.readFileSync('/home/claude/p088/index.html','utf8').replace(/<link[^>]*fonts[^>]*>/g,'');
const errs=[];
const dom=new JSDOM(html,{runScripts:'dangerously',url:'https://x.test/',beforeParse(w){w.addEventListener('error',e=>errs.push(e.message));w.localStorage.setItem('p088_cf01_v1',JSON.stringify({name:'T',section:'complete',kcScore:5}));}});
const d=dom.window.document;
console.log('cards',d.querySelectorAll('.case-card').length,'links',d.querySelectorAll('a.case-card').length,'done',d.querySelectorAll('.case-num.done').length);
console.log(d.getElementById('overall-text').textContent);
dom.window.toggleTheme();console.log('dark?',d.body.classList.contains('dark-mode'));
console.log('errs',errs);
