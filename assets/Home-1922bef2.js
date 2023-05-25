import{_ as S}from"./cover-439ea6e8.js";import{u as J}from"./cookie-f8490efa.js";import{b as U,d as P,u as G,w as K,c as Q,a as X,e as Z,f as ss,_ as es,E as ts,g as os}from"./base-58a04796.js";import{d as I,i as r,j as as,k as z,o as p,c as _,n as l,e as t,b as s,l as y,m as F,f as j,t as N,q as D,w as cs,s as ns,r as E,g as w,v as x,p as A,h as H,_ as L,u as is}from"./index-f44a6f42.js";const ds=U({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:i=>i>=0&&i<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:P(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:P([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:P(Function),default:i=>`${i}%`}}),rs=["aria-valuenow"],ls={viewBox:"0 0 100 100"},ps=["d","stroke","stroke-width"],us=["d","stroke","opacity","stroke-linecap","stroke-width"],fs={key:0},_s=I({name:"ElProgress"}),hs=I({..._s,props:ds,setup(i){const o=i,k={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},a=G("progress"),u=r(()=>({width:`${o.percentage}%`,animationDuration:`${o.duration}s`,backgroundColor:T(o.percentage)})),m=r(()=>(o.strokeWidth/o.width*100).toFixed(1)),g=r(()=>["circle","dashboard"].includes(o.type)?Number.parseInt(`${50-Number.parseFloat(m.value)/2}`,10):0),c=r(()=>{const e=g.value,h=o.type==="dashboard";return`
          M 50 50
          m 0 ${h?"":"-"}${e}
          a ${e} ${e} 0 1 1 0 ${h?"-":""}${e*2}
          a ${e} ${e} 0 1 1 0 ${h?"":"-"}${e*2}
          `}),d=r(()=>2*Math.PI*g.value),C=r(()=>o.type==="dashboard"?.75:1),q=r(()=>`${-1*d.value*(1-C.value)/2}px`),V=r(()=>({strokeDasharray:`${d.value*C.value}px, ${d.value}px`,strokeDashoffset:q.value})),W=r(()=>({strokeDasharray:`${d.value*C.value*(o.percentage/100)}px, ${d.value}px`,strokeDashoffset:q.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),M=r(()=>{let e;return o.color?e=T(o.percentage):e=k[o.status]||k.default,e}),O=r(()=>o.status==="warning"?K:o.type==="line"?o.status==="success"?Q:X:o.status==="success"?Z:ss),R=r(()=>o.type==="line"?12+o.strokeWidth*.4:o.width*.111111+2),B=r(()=>o.format(o.percentage));function Y(e){const h=100/e.length;return e.map((v,$)=>z(v)?{color:v,percentage:($+1)*h}:v).sort((v,$)=>v.percentage-$.percentage)}const T=e=>{var h;const{color:b}=o;if(as(b))return b(e);if(z(b))return b;{const v=Y(b);for(const $ of v)if($.percentage>e)return $.color;return(h=v[v.length-1])==null?void 0:h.color}};return(e,h)=>(p(),_("div",{class:l([t(a).b(),t(a).m(e.type),t(a).is(e.status),{[t(a).m("without-text")]:!e.showText,[t(a).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[e.type==="line"?(p(),_("div",{key:0,class:l(t(a).b("bar"))},[s("div",{class:l(t(a).be("bar","outer")),style:y({height:`${e.strokeWidth}px`})},[s("div",{class:l([t(a).be("bar","inner"),{[t(a).bem("bar","inner","indeterminate")]:e.indeterminate},{[t(a).bem("bar","inner","striped")]:e.striped},{[t(a).bem("bar","inner","striped-flow")]:e.stripedFlow}]),style:y(t(u))},[(e.showText||e.$slots.default)&&e.textInside?(p(),_("div",{key:0,class:l(t(a).be("bar","innerText"))},[F(e.$slots,"default",{percentage:e.percentage},()=>[s("span",null,N(t(B)),1)])],2)):j("v-if",!0)],6)],6)],2)):(p(),_("div",{key:1,class:l(t(a).b("circle")),style:y({height:`${e.width}px`,width:`${e.width}px`})},[(p(),_("svg",ls,[s("path",{class:l(t(a).be("circle","track")),d:t(c),stroke:`var(${t(a).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-width":t(m),fill:"none",style:y(t(V))},null,14,ps),s("path",{class:l(t(a).be("circle","path")),d:t(c),stroke:t(M),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":t(m),style:y(t(W))},null,14,us)]))],6)),(e.showText||e.$slots.default)&&!e.textInside?(p(),_("div",{key:2,class:l(t(a).e("text")),style:y({fontSize:`${t(R)}px`})},[F(e.$slots,"default",{percentage:e.percentage},()=>[e.status?(p(),D(t(ts),{key:1},{default:cs(()=>[(p(),D(ns(t(O))))]),_:1})):(p(),_("span",fs,N(t(B)),1))])],6)):j("v-if",!0)],10,rs))}});var vs=es(hs,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const ms=os(vs);const n=i=>(A("data-v-f603229c"),i=i(),H(),i),gs={class:"homeSideBar"},bs=x('<div class="head" data-v-f603229c><div class="search" data-v-f603229c><input class="searchInput" placeholder="搜索" type="text" data-v-f603229c><img class="searchIcon" width="20" src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621993524527.png" data-v-f603229c></div><div class="info" data-v-f603229c><img width="48" src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/cdf706f19be881670bb5e412bc0ae602.png" data-v-f603229c></div></div>',1),$s={class:"content"},ys=n(()=>s("div",{class:"title"}," Lessons ",-1)),ks={class:"info scrollbarModify"},ws={class:"infoItem"},xs={class:"container"},Ss=n(()=>s("div",{class:"icon"},[s("img",{width:"64",src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/6533f4ea7ff57d5aea04389fb3e6745f.png"})],-1)),Is={class:"detail"},Cs=n(()=>s("div",{class:"time"},"- 0 h 55 min",-1)),Ps=n(()=>s("div",{class:"title"},"Introduction & Basics",-1)),js=n(()=>s("div",{class:"intro"},"Learn all the basics that you need to know to get started.",-1)),qs={class:"progress"},Bs={class:"infoItem"},Ts={class:"container"},zs=n(()=>s("div",{class:"icon"},[s("img",{width:"64",src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/6416ab3bd17b7ba9ad1cf03824bb5102.png"})],-1)),Fs={class:"detail"},Ns=n(()=>s("div",{class:"time"},"- 1 h 15 min",-1)),Ds=n(()=>s("div",{class:"title"},"Terminology",-1)),Es=n(()=>s("div",{class:"intro"},"Start getting to know all the terminology.",-1)),As={class:"progress"},Hs={class:"infoItem"},Ls={class:"container"},Vs=n(()=>s("div",{class:"icon"},[s("img",{width:"64",src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/5b136fce0737f5b7403031d6c2a21e55.png"})],-1)),Ws={class:"detail"},Ms=n(()=>s("div",{class:"time"},"- 0 h 25 min",-1)),Os=n(()=>s("div",{class:"title"},"Advanced Apps",-1)),Rs=n(()=>s("div",{class:"intro"},"Your first step to building an advanced web app.",-1)),Ys={class:"progress"},Js={class:"infoItem"},Us={class:"container"},Gs=n(()=>s("div",{class:"icon"},[s("img",{width:"64",src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/dd0f98ff0fd0a44603d53766323da295.png"})],-1)),Ks={class:"detail"},Qs=n(()=>s("div",{class:"time"},"- 0 h 35 min",-1)),Xs=n(()=>s("div",{class:"title"},"Final Assessment",-1)),Zs=n(()=>s("div",{class:"intro"},"Your first step to building an advanced web app.",-1)),se={class:"progress"},ee=I({__name:"HomeSideBar",setup(i){E(20);const o=[{color:"#52C3FF",percentage:20},{color:"#FFCB57",percentage:40},{color:"#FC77A0",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}];return(k,a)=>{const u=ms;return p(),_("div",gs,[bs,s("div",$s,[ys,s("div",ks,[s("div",ws,[s("div",xs,[Ss,s("div",Is,[Cs,Ps,js,s("div",qs,[w(u,{percentage:50,color:o})])])])]),s("div",Bs,[s("div",Ts,[zs,s("div",Fs,[Ns,Ds,Es,s("div",As,[w(u,{percentage:20,color:o})])])])]),s("div",Hs,[s("div",Ls,[Vs,s("div",Ws,[Ms,Os,Rs,s("div",Ys,[w(u,{percentage:90,color:o})])])])]),s("div",Js,[s("div",Us,[Gs,s("div",Ks,[Qs,Xs,Zs,s("div",se,[w(u,{percentage:10,color:o})])])])])])])])}}});const te=L(ee,[["__scopeId","data-v-f603229c"]]),f=i=>(A("data-v-05c28dc1"),i=i(),H(),i),oe={class:"homePage"},ae={class:"left"},ce={key:0,class:"welcome"},ne=f(()=>s("div",{class:"hello"},"Hello,",-1)),ie=f(()=>s("div",{class:"name"},"John Smith",-1)),de=[ne,ie],re=f(()=>s("div",{class:"self-start group"},[s("span",{class:"text"},"Courses")],-1)),le={class:"flex-row justify-between equal-division"},pe=f(()=>s("img",{class:"image",src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/40355c1818bab41429a6314048e067de.png"},null,-1)),ue=f(()=>s("span",{class:"navText"},"全部",-1)),fe=[pe,ue],_e=f(()=>s("img",{class:"image",src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/4cf5b42708ffc8f6bcc4de12e4f42533.png"},null,-1)),he=f(()=>s("span",{class:"navText"},"C语言",-1)),ve=[_e,he],me=f(()=>s("img",{class:"image",src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/24866b96262ff0d9ba4c72464a4018e4.png"},null,-1)),ge=f(()=>s("span",{class:"navText"},"数据结构",-1)),be=[me,ge],$e=f(()=>s("img",{class:"image",src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/7d9f1f3bfa4a408ce8372b3db479e1f0.png"},null,-1)),ye=f(()=>s("span",{class:"navText"},"算法",-1)),ke=[$e,ye],we={class:"group_2 space-y-32"},xe={id:"course"},Se=x('<div class="flex-col section_3" data-v-05c28dc1><div class="section_2" data-v-05c28dc1><img id="cover" width="229" height="137" src="'+S+'" data-v-05c28dc1></div><span class="self-start font_1 text_3" data-v-05c28dc1>- 5 h 30 min</span><span class="self-start font_2 text_4" data-v-05c28dc1>PowerPoint</span><span class="self-start font_3 text_5" data-v-05c28dc1>Enhance your presentation skills.</span></div>',1),Ie=[Se],Ce=x('<div class="flex-col section_3" data-v-05c28dc1><div class="section_2" data-v-05c28dc1><img id="cover" width="229" height="137" src="'+S+'" data-v-05c28dc1></div><span class="self-start font_1 text_3" data-v-05c28dc1>- 5 h 30 min</span><span class="self-start font_2 text_4" data-v-05c28dc1>PowerPoint</span><span class="self-start font_3 text_5" data-v-05c28dc1>Enhance your presentation skills.</span></div>',1),Pe=[Ce],je=x('<div class="flex-col section_3" data-v-05c28dc1><div class="section_2" data-v-05c28dc1><img id="cover" width="229" height="137" src="'+S+'" data-v-05c28dc1></div><span class="self-start font_1 text_3" data-v-05c28dc1>- 5 h 30 min</span><span class="self-start font_2 text_4" data-v-05c28dc1>PowerPoint</span><span class="self-start font_3 text_5" data-v-05c28dc1>Enhance your presentation skills.</span></div>',1),qe=[je],Be=x('<div class="flex-col section_3" data-v-05c28dc1><div class="section_2" data-v-05c28dc1><img id="cover" width="229" height="137" src="'+S+'" data-v-05c28dc1></div><span class="self-start font_1 text_3" data-v-05c28dc1>- 5 h 30 min</span><span class="self-start font_2 text_4" data-v-05c28dc1>PowerPoint</span><span class="self-start font_3 text_5" data-v-05c28dc1>Enhance your presentation skills.</span></div>',1),Te=[Be],ze={class:"right"},Fe=I({__name:"Home",setup(i){const o=is(),k=J();let a=E(1);const u=g=>{a.value=g},m=g=>{o.push(`/lesson/${g}`)};return(g,c)=>(p(),_("div",oe,[s("div",ae,[t(k).cookie?(p(),_("div",ce,de)):j("",!0),re,s("div",le,[s("div",{class:l([{selected:t(a)===1},"flex-col justify-start items-center equal-division-item"]),onClick:c[0]||(c[0]=d=>u(1))},fe,2),s("div",{class:l([{selected:t(a)===2},"flex-col justify-start items-center equal-division-item"]),onClick:c[1]||(c[1]=d=>u(2))},ve,2),s("div",{class:l([{selected:t(a)===3},"flex-col justify-start items-center equal-division-item"]),onClick:c[2]||(c[2]=d=>u(3))},be,2),s("div",{class:l([{selected:t(a)===4},"flex-col justify-start items-center equal-division-item"]),onClick:c[3]||(c[3]=d=>u(4))},ke,2)]),s("div",we,[s("div",xe,[s("div",{class:"cursorItem",onClick:c[4]||(c[4]=d=>m(1))},Ie),s("div",{class:"cursorItem",onClick:c[5]||(c[5]=d=>m(2))},Pe),s("div",{class:"cursorItem",onClick:c[6]||(c[6]=d=>m(3))},qe),s("div",{class:"cursorItem",onClick:c[7]||(c[7]=d=>m(4))},Te)])])]),s("div",ze,[w(te)])]))}});const He=L(Fe,[["__scopeId","data-v-05c28dc1"]]);export{He as default};