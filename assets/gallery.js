const GALLERY_URL='assets/gallery.json';
async function loadGallery(){try{const res=await fetch(GALLERY_URL);const data=await res.json();renderGallery(data.items||[]);}catch(e){console.error(e);}}
function getLang(){return document.documentElement.lang||'ru';}
function renderGallery(items){const grid=document.getElementById('galleryGrid');grid.innerHTML='';const lang=getLang();items.forEach(it=>{const fig=document.createElement('figure');const cap=it[lang]?.caption||'';fig.innerHTML=`<img src="${it.thumb}" alt=""><figcaption style="display:none">${cap}</figcaption>`;fig.querySelector('img').addEventListener('click',()=>openLightbox(it.src,cap));grid.appendChild(fig);});}
function openLightbox(src,caption){const lb=document.getElementById('lightbox');document.getElementById('lightboxImg').src=src;document.getElementById('lightboxCaption').textContent=caption||'';lb.setAttribute('aria-hidden','false');}
document.getElementById('lightbox').querySelector('.lightbox__close').addEventListener('click',()=>document.getElementById('lightbox').setAttribute('aria-hidden','true'));
document.addEventListener('DOMContentLoaded',loadGallery);document.querySelectorAll('.lang').forEach(b=>b.addEventListener('click',()=>setTimeout(loadGallery,0)));
