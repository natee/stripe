import{c as _,a as m,r as p,o as f,b as h,d as v}from"./vendor.f96fd762.js";function $(){import("data:text/javascript,")}const y=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};y();const g="modulepreload",a={},L="/demo/",c=function(i,n){return!n||n.length===0?i():Promise.all(n.map(t=>{if(t=`${L}${t}`,t in a)return;a[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":g,e||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),e)return new Promise((u,d)=>{o.addEventListener("load",u),o.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>i())},E=()=>c(()=>import("./index.55773eea.js"),["assets/index.55773eea.js","assets/index.c71d1318.css","assets/vendor.f96fd762.js","assets/use-demo.226c0209.js"]),O=()=>c(()=>import("./home.de53c235.js"),["assets/home.de53c235.js","assets/home.1bf059d0.css","assets/vendor.f96fd762.js","assets/use-demo.226c0209.js"]),P=()=>c(()=>import("./demo.5a52601d.js"),["assets/demo.5a52601d.js","assets/demo.87b6a0b4.css","assets/vendor.f96fd762.js","assets/use-demo.226c0209.js"]),A=()=>c(()=>import("./404.480bc625.js"),["assets/404.480bc625.js","assets/vendor.f96fd762.js"]),b=[{path:"/",component:E,redirect:"/home",children:[{path:"/home",name:"Landing",component:O},{path:"/demo",name:"Demo",component:P}]},{path:"/:w+",name:"404",component:A,meta:{title:"\u6682\u65E0\u6743\u9650",hidden:!0}}];var x=_({history:m(),routes:b});var k=(s,i)=>{const n=s.__vccOpts||s;for(const[t,e]of i)n[t]=e;return n};const w={};function D(s,i){const n=p("router-view");return f(),h(n)}var R=k(w,[["render",D]]);const l=v(R);l.use(x);l.mount("#app");export{k as _,$ as __vite_legacy_guard};
