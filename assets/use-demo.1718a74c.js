import{L as i,v as o,x as c}from"./vendor.c36f4494.js";import{i as n}from"./index.f60cb61f.js";import{a as m}from"./index.d552dd83.js";function R(){const u=i(),s=o(!1),e=o(""),r=o(""),a=o(""),l=c(()=>e.value&&n(e.value));return{email:e,discord:r,phone:a,getDemo:()=>{u.push("/demo")},submitRequest:async()=>{if(!s.value)if(l.value&&!!r.value&&!!a.value)try{s.value=!0,(await m(e.value,r.value,a.value)).code===0&&console.log("Request demo success.")}catch(t){console.error(t.message)}finally{s.value=!1}else console.error("form fields error.")}}}export{R as u};
