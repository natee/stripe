System.register(["./vendor-legacy.24ecafe1.js","./_commonjsHelpers-legacy.276244f2.js","./Footer-legacy.9fc7572c.js","./index-legacy.23a91666.js","./index-legacy.5ecf109a.js"],(function(e){"use strict";var t,a,l,s,n,i,o,d,c,u,r,m,v,f,x,g,y,p,b,h,w,j,k,S;return{setters:[function(e){t=e.C,a=e.o,l=e.f,s=e.t,n=e.u,i=e.n,o=e.e,d=e.G,c=e.m,u=e.p,r=e.r,m=e.h,v=e.g,f=e.J,x=e.K,g=e.j,y=e.M,p=e.w,b=e.k},function(e){h=e.i},function(e){w=e._,j=e.F},function(e){k=e.b,S=e.c},function(){}],execute:function(){const C=["disabled"],T={props:{maxSecondNum:{type:Number,default:60},buttonText:{type:String,default:"获取验证码"},loadingText:{type:String,default:"发送中"},loading:{type:Boolean,default:!1}},setup(e,{emit:o}){const d=e,c=t({timing:!1,count:0}),u=()=>{c.timing=!0,c.count=d.maxSecondNum;const e=setInterval((()=>{const{count:t}=c;t>0&&t<=d.maxSecondNum?c.count--:(c.timing=!1,clearInterval(e),c.count=0)}),1e3)};return(t,d)=>(a(),l("button",{class:i(["btn-indigo w-full",{"btn-indigo--disabled":n(c).timing}]),disabled:n(c).timing,onClick:d[0]||(d[0]=e=>o("start",e,u))},s(e.loading?e.loadingText:n(c).timing?e.buttonText+"("+n(c).count+")":e.buttonText),11,C))}},N={class:"h-full flex items-center justify-center flex-col"},D={class:"w-full flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},F={class:"w-full max-w-lg space-y-8"},I={class:"rounded shadow sm:rounded-md sm:overflow-hidden sm:p-16 bg-white p-8 pt-4"},L=m("h2",{class:"mt-6 text-left text-xl font-medium text-gray-900"},"Sign in to your account",-1),_={class:"mt-8"},B={class:"rounded-md shadow-sm"},E=m("label",{for:"email-address",class:"block text-sm font-medium text-gray-700"},"Email",-1),U={key:0,href:"#",class:"font-medium text-indigo-600 hover:text-indigo-500"},V={class:"mt-4"},A={key:0,class:"mt-8"},G={class:"rounded-md shadow-sm"},H=b('<div class="flex items-center justify-between"><div class="flex items-center"><label for="code" class="block text-sm font-medium text-gray-700">Code</label></div><div class="text-sm"><a href="#" class="text-sm text-indigo-600 hover:text-indigo-500"> Didn’t receive the email? 30s </a></div></div>',1),J={class:"mt-8"},K=["disabled"],M={class:"flex items-center justify-between"},W={class:"text-sm"},$=m("span",{class:"text-sm text-gray-900"},"Don't have an account?",-1),q=g(" Sign up ");e("default",{setup(e){o({CountDownButton:T,Logo:w,Footer:j});const t=d(),b=c(""),C=c(""),z=c(!1),O=u((()=>b.value&&h(b.value))),P=async(e,t)=>{if(O.value)try{z.value=!0;const e=await k(b.value);0===e.code?(C.value=e.data.code,z.value=!1,"function"==typeof t&&t()):console.error("发送失败")}catch(a){console.error(a.message)}else console.error(`email invalid: ${b.value}`)},Q=async()=>{try{const{code:e}=await S(b.value,C.value);0===e&&t.push("/dashboard")}catch(e){console.error(e.message)}};return(e,t)=>{const o=r("router-link");return a(),l("div",N,[m("div",D,[m("div",F,[v(w),m("div",I,[L,m("div",_,[m("div",B,[E,f(m("input",{name:"email",type:"email",autocomplete:"email",class:"input",placeholder:"Email address","onUpdate:modelValue":t[0]||(t[0]=e=>b.value=e)},null,512),[[x,b.value]])]),m("div",{class:i(["mt-2 w-full text-gray-500 text-xs",{visible:b.value,invisible:!b.value}])},[g(s(n(O)?"🎉  Awesome stuff. We sent you a code to confirm your email":b.value&&!n(O)?"Invalid email address. Did we make a mistake?":" ")+" ",1),b.value&&!n(O)?(a(),l("a",U,"Let us know")):y("",!0)],2),m("div",V,[v(T,{buttonText:"Send Code",maxSecondNum:30,loading:z.value,onStart:P},null,8,["loading"])])]),n(O)?(a(),l("div",A,[m("div",G,[H,f(m("input",{name:"code",type:"text",class:"input","onUpdate:modelValue":t[1]||(t[1]=e=>C.value=e)},null,512),[[x,C.value]])]),m("div",J,[m("button",{type:"button",class:i(["btn-indigo w-full",{"btn-indigo--disabled":!b.value||!C.value}]),disabled:!b.value||!C.value,onClick:Q}," Login ",10,K)])])):y("",!0)]),m("div",M,[m("div",W,[$,v(o,{to:"/register",class:"text-indigo-600 hover:text-indigo-500"},{default:p((()=>[q])),_:1})])])])]),v(j)])}}})}}}));
