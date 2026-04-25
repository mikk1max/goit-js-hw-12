import{a as v,S,i}from"./assets/vendor-Rdv7LHNr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const C="46868133-33c4a6dc591014855bc3379a8",g={image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};async function m(o,e=1){var t;try{return(await v.get("https://pixabay.com/api/",{params:{key:C,q:o,page:e,...g}})).data}catch(a){throw new Error(((t=a.response)==null?void 0:t.status)||a.message)}}const p=o=>Math.ceil(o.totalHits/g.per_page),P=document.querySelector(".gallery"),y=document.querySelector(".loader");function b(){y.classList.remove("is-hidden")}function c(){y.classList.add("is-hidden")}const L=o=>{const e=o.hits.map(t=>`<li class="gallery-list-item">
      <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" /></a>
    <table>
      <tr>
        <th>Likes</th>
        <th>Views</th>
        <th>Comments</th>
        <th>Downloads</th>
      </tr>
      <tr>
        <td>${t.likes}</td>
        <td>${t.views}</td>
        <td>${t.comments}</td>
        <td>${t.downloads}</td>
      </tr>
    </table>
  </li>`).join("");P.insertAdjacentHTML("beforeend",e)},x=document.querySelector(".form"),w=document.querySelector(".gallery"),d=document.querySelector("#loadMore");let f=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const l={backgroundColor:"#ef4040",maxWidth:"432px",position:"topRight",icon:"fa-regular fa-times-circle",iconColor:"#fafafb",messageColor:"#fafafb",close:!1,closeOnClick:!0};let h,n=1;x.addEventListener("submit",async o=>{o.preventDefault(),w.innerHTML="",h=o.target.elements.search.value.trim().split(" ").join("+"),n=1,b();try{const e=await m(h,n);c(),L(e),f.refresh(),e.total!=0?d.classList.remove("visually-hidden"):i.error({message:"Sorry, there are no images matching your search query. Please try again!",...l}),n===p(e)&&(d.classList.add("visually-hidden"),i.info({message:"We're sorry, but you've reached the end of search results.",...l,backgroundColor:"blue"}))}catch{c(),i.error({message:"Something went wrong. Please try again!",...l})}});d.addEventListener("click",async o=>{o.preventDefault(),n++,b();try{const e=await m(h,n);c(),L(e),f.refresh(),n===p(e)&&(d.classList.add("visually-hidden"),i.info({message:"We're sorry, but you've reached the end of search results.",...l,backgroundColor:"blue"}));const t=w.lastElementChild;if(t){const a=t.getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"})}}catch{c(),i.error({message:"Something went wrong. Please try again!",...l})}});f.on("show.simplelightbox",()=>{console.log("SimpleLightbox opened")});
//# sourceMappingURL=index.js.map
