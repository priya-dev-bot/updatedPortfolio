
const V=[...document.querySelectorAll('[data-view]')];
function route(){const h=location.hash;if(h&&!h.startsWith('#/'))return;const k=h==='#/rr'?'rr':h==='#/commission'?'commission':h==='#/delivery'?'delivery':'home';
V.forEach(v=>v.classList.toggle('on',v.dataset.view===k));
if(h.startsWith('#/'))window.scrollTo(0,0)}
addEventListener('hashchange',route);route();
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const id=a.getAttribute('href');if(id.startsWith('#/')||id==='#')return;
const t=document.querySelector(id),v=t&&t.closest('[data-view]');if(!v||v.classList.contains('on'))return;e.preventDefault();history.pushState(null,'','#/');route();setTimeout(()=>t.scrollIntoView(),0)});

const bar=document.getElementById('bar');
addEventListener('scroll',()=>{const h=document.documentElement;bar.style.transform='scaleX('+(h.scrollTop/((h.scrollHeight-h.clientHeight)||1))+')'},{passive:true});
document.querySelectorAll('.pipe').forEach(p=>{const a=p.dataset.s.split('|');p.style.setProperty('--c',a.length);p.innerHTML=a.map((t,i)=>'<div class="n" style="--i:'+i+'"><i>'+(i+1)+'</i><span>'+t+'</span></div>').join('')});
document.querySelectorAll('.stats div,.proj,.card,.app,.feat,.cs section,.pipe,.flowrow,.tree,.branch,.tile,.doc,.cmp figure,.rl div').forEach(e=>{e.classList.add('rv');e.style.setProperty('--d',((([...e.parentNode.children].indexOf(e))%4)*.08)+'s')});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);setTimeout(()=>x.target.style.setProperty('--d','0s'),1300)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));

(function(){const b=document.getElementById('tg'),r=document.documentElement;
try{const v=localStorage.getItem('theme');if(v)r.setAttribute('data-theme',v)}catch(e){}
if(b)b.addEventListener('click',()=>{const t=r.getAttribute('data-theme');const dark=t?t==='dark':matchMedia('(prefers-color-scheme:dark)').matches;const n=dark?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}})})();
