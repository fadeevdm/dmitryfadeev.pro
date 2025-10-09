const dict={
  ru:{brandName:"Дмитрий Фадеев",navAbout:"Обо мне",navServices:"Мои услуги",navBlog:"Блог",navGallery:"Галерея",navContact:"Контакты",
      heroTitle:"Эффективная цепь поставок - ваш ключ к росту продаж и прибыли",heroLead:"20+ лет в логистике, операциях и закупках в международных компаниях. Выстраиваю S&OP, снижаю TDC, повышаю OTIF и ускоряю оборот капитала.",
      aboutTitle:"Обо мне",servicesTitle:"Мои услуги",srv1Title:"Диагностика и дорожная карта",srv2Title:"Внедрение S&OP",srv3Title:"Склад и транспорт",srv4Title:"Data & BI",srv5Title:"Операции компаний прямых продаж",srv6Title:"ВЭД (внешнеэкономическая деятельность)",
      blogTitle:"Блог",readMore:"Читать далее",commentsTitle:"Комментарии",galleryTitle:"Галерея",contactTitle:"Контакты"},
  en:{brandName:"Dmitry Fadeev",navAbout:"About",navServices:"Services",navBlog:"Blog",navGallery:"Gallery",navContact:"Contact",
      heroTitle:"Efficient supply chain — your key to sales and profit growth",heroLead:"20+ years in logistics, operations and procurement at international companies. I implement S&OP, reduce TDC, improve OTIF and accelerate working capital turns.",
      aboutTitle:"About",servicesTitle:"Services",srv1Title:"Diagnostics & Roadmap",srv2Title:"S&OP Implementation",srv3Title:"Warehouse & Transport",srv4Title:"Data & BI",srv5Title:"Direct Selling Operations",srv6Title:"Foreign Trade",
      blogTitle:"Blog",readMore:"Read more",commentsTitle:"Comments",galleryTitle:"Gallery",contactTitle:"Contact"}
};
const els=document.querySelectorAll("[data-i18n]");const langButtons=document.querySelectorAll(".lang");let current="ru";
function apply(lang){current=lang;langButtons.forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.lang===lang)));els.forEach(el=>{const key=el.getAttribute("data-i18n");if(dict[lang][key])el.textContent=dict[lang][key];});document.documentElement.lang=lang;document.title= lang==="en" ? "Dmitry Fadeev — APICS CSCP - Certified Supply Chain Professional":"Дмитрий Фадеев — APICS CSCP - Certified Supply Chain Professional";}
langButtons.forEach(b=>b.addEventListener('click',()=>apply(b.dataset.lang)));apply(current);
