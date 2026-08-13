let language=localStorage.getItem('matecana-language')||'en';
function translate(){document.documentElement.lang=language;document.querySelectorAll('[data-en]').forEach(el=>el.textContent=el.dataset[language]);document.querySelectorAll('.lang').forEach(el=>el.textContent=language==='en'?'ES':'EN')}
document.querySelectorAll('.lang').forEach(btn=>btn.addEventListener('click',()=>{language=language==='en'?'es':'en';localStorage.setItem('matecana-language',language);translate()}));
const toggle=document.querySelector('.menu-toggle'),links=document.querySelector('.links');if(toggle)toggle.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());translate();
