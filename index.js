import{a as v,S,i}from"./assets/vendor-Rdv7LHNr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const C="46868133-33c4a6dc591014855bc3379a8",g={image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};async function p(t,e=1){var r;try{return(await v.get("https://pixabay.com/api/",{params:{key:C,q:t,page:e,...g}})).data}catch(a){throw new Error(((r=a.response)==null?void 0:r.status)||a.message)}}const y=t=>Math.ceil(t.totalHits/g.per_page),f=document.querySelector(".gallery");function b(){f.insertAdjacentHTML("beforeend",'<li class="loadText loader-item"><span class="loader"></span></li>')}function c(){const t=document.querySelector(".loader-item");t&&t.remove()}const L=t=>{console.log(t);const e=t.hits.map(r=>`<li class="gallery-list-item">
      <a href="${r.largeImageURL}"><img src="${r.webformatURL}" alt="${r.tags}" /></a>
    <table>
      <tr>
        <th>Likes</th>
        <th>Views</th>
        <th>Comments</th>
        <th>Downloads</th>
      </tr>
      <tr>
        <td>${r.likes}</td>
        <td>${r.views}</td>
        <td>${r.comments}</td>
        <td>${r.downloads}</td>
      </tr>
    </table>
  </li>`).join("");n===1?f.innerHTML=e:f.insertAdjacentHTML("beforeend",e)},P=document.querySelector(".form"),w=document.querySelector(".gallery"),d=document.querySelector("#loadMore");let m=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const l={backgroundColor:"#ef4040",maxWidth:"432px",position:"topRight",icon:"fa-regular fa-times-circle",iconColor:"#fafafb",messageColor:"#fafafb",close:!1,closeOnClick:!0};let h,n=1;P.addEventListener("submit",async t=>{t.preventDefault(),w.innerHTML="",h=t.target.elements.search.value.trim().split(" ").join("+"),n=1,b();try{const e=await p(h,n);c(),L(e),m.refresh(),e.total!=0?d.classList.remove("visually-hidden"):i.error({message:"Sorry, there are no images matching your search query. Please try again!",...l}),n===y(e)&&(d.classList.add("visually-hidden"),i.info({message:"We're sorry, but you've reached the end of search results.",...l,backgroundColor:"blue"}))}catch{c(),i.error({message:"Something went wrong. Please try again!",...l})}});d.addEventListener("click",async t=>{t.preventDefault(),n++,b();try{const e=await p(h,n);c(),L(e),m.refresh(),n===y(e)&&(d.classList.add("visually-hidden"),i.info({message:"We're sorry, but you've reached the end of search results.",...l,backgroundColor:"blue"}));const r=w.lastElementChild;if(r){const a=r.getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"})}}catch{c(),i.error({message:"Something went wrong. Please try again!",...l})}});m.on("show.simplelightbox",()=>{console.log("SimpleLightbox opened")});
//# sourceMappingURL=index.js.map
