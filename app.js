'use strict';
const data=window.VULCAN_CONTENT;
const escapeHTML=(value)=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const statusLabels={concept:'구상',planned:'추진계획',developing:'개발 중',available:'제공 중'};
const solutionTarget=document.querySelector('#solution-cards');
solutionTarget.innerHTML=data.solutions.map(item=>`<article class="solution-card"><div class="card-upper"><div class="card-icon" aria-hidden="true">${escapeHTML(item.icon)}</div><span class="card-number">${escapeHTML(item.number)}</span></div><h3>${escapeHTML(item.title)}</h3><div class="en">${escapeHTML(item.en)}</div><p>${escapeHTML(item.description)}</p><div class="card-tags">${item.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div><div class="card-bottom"><span class="status">${escapeHTML(statusLabels[item.status]||'상태 확인 필요')}</span><a href="${escapeHTML(item.href)}">자세히 보기 →</a></div></article>`).join('');
const gallery=document.querySelector('#gallery');
function renderGallery(filter='all'){
  const items=data.gallery.filter(item=>filter==='all'||item.category===filter);
  gallery.innerHTML=items.map(item=>`<button type="button" class="gallery-card" data-image-id="${escapeHTML(item.id)}" aria-label="${escapeHTML(item.title)} 이미지 확대"><img loading="lazy" src="${escapeHTML(item.image)}" alt="${escapeHTML(item.alt)}"><span class="zoom" aria-hidden="true">⤢</span><div class="gallery-text"><small>${escapeHTML(item.subtitle)}</small><strong>${escapeHTML(item.title)}</strong></div></button>`).join('');
}
renderGallery();
const dialog=document.querySelector('#image-dialog');
let previousFocus=null;
gallery.addEventListener('click',event=>{
  const card=event.target.closest('[data-image-id]'); if(!card)return;
  const item=data.gallery.find(x=>x.id===card.dataset.imageId);if(!item)return;
  previousFocus=card;
  document.querySelector('#dialog-image').src=item.image;
  document.querySelector('#dialog-image').alt=item.alt;
  document.querySelector('#dialog-caption').textContent=`${item.title} · ${item.subtitle}`;
  if(typeof dialog.showModal==='function')dialog.showModal();
});
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
dialog.addEventListener('close',()=>previousFocus?.focus());
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter-btn').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});
  btn.classList.add('active');btn.setAttribute('aria-pressed','true');renderGallery(btn.dataset.filter);
}));
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#primary-nav');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','메뉴 열기');nav.classList.remove('open')}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'메뉴 열기':'메뉴 닫기');nav.classList.toggle('open',!open)});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
const toTop=document.querySelector('.back-to-top');
window.addEventListener('scroll',()=>toTop.classList.toggle('visible',window.scrollY>500),{passive:true});
toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.querySelector('#year').textContent=new Date().getFullYear();
