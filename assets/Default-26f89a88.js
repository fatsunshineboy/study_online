import{u as k}from"./cookie-bd6a42a2.js";import{u as b}from"./user-b6f68d3a.js";import{d as y,u as x,r as C,a as w,c as n,b as s,e as o,f as r,t as S,n as u,g as j,o as i,p as I,h as z,_ as q}from"./index-02ae53aa.js";const B=""+new URL("default_portrait-903b3d7b.svg",import.meta.url).href,e=d=>(I("data-v-af7b9fb4"),d=d(),z(),d),D={class:"flex-col page"},L={class:"flex-row"},N={class:"leftContent"},V={id:"left"},$={key:0,class:"image",src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621899878224.png"},O={key:1,class:"info"},R={class:"name"},U=e(()=>s("div",{class:"identity"},"学生",-1)),E={key:2,class:"image notLoginImage",src:B},H={key:3,class:"notLogin info"},T=e(()=>s("div",{class:"notLoginText"},"请登录",-1)),A=[T],F=e(()=>s("img",{class:"arrow image_3 image_4",src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621966608102.png"},null,-1)),G={class:"flex-col group navigator"},J={class:"flex-row group_3"},K={class:"flex-col section_2 space-y-38"},M=e(()=>s("img",{class:"image_8",src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998622040960638.png"},null,-1)),P=e(()=>s("span",{class:"title"},"主页",-1)),Q=[M,P],W=e(()=>s("img",{class:"self-start image_8",src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998622026608258.png"},null,-1)),X=e(()=>s("span",{class:"title"},"课程",-1)),Y=[W,X],Z=e(()=>s("img",{class:"self-start image_9",src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998622014720929.png"},null,-1)),ss=e(()=>s("span",{class:"title"},"设置",-1)),es=[Z,ss],os=e(()=>s("span",{class:"text"},"退出登录",-1)),ts=[os],cs={id:"content"},as=y({__name:"Default",setup(d){const t=k(),m=b(),l=x();let c=C(1);const _=f=>{switch(f){case 1:l.push("/home"),c.value=1;break;case 2:l.push("/course"),c.value=2;break;case 3:l.push("/setting"),c.value=3;break}},g=()=>{t.cookie?(l.push("/setting"),c.value=3):l.push("/login")},h=()=>{localStorage.removeItem("cookie"),t.removeCookie()};return(f,a)=>{const v=w("router-view");return i(),n("div",D,[s("div",L,[s("div",N,[s("div",V,[s("div",{id:"info",class:"flex-row items-center section space-x-197",onClick:g},[o(t).cookie?(i(),n("img",$)):r("",!0),o(t).cookie?(i(),n("div",O,[s("div",R,S(o(m).name),1),U])):r("",!0),o(t).cookie?r("",!0):(i(),n("img",E)),o(t).cookie?r("",!0):(i(),n("div",H,A)),F]),s("div",G,[s("div",J,[s("div",K,[s("div",{class:u([{button:o(c)===1},"flex-col justify-start items-start nav"]),onClick:a[0]||(a[0]=p=>_(1))},Q,2),s("div",{class:u([{button:o(c)===2},"flex-col justify-start items-start nav"]),onClick:a[1]||(a[1]=p=>_(2))},Y,2),s("div",{class:u([{button:o(c)===3},"flex-col justify-start items-start nav"]),onClick:a[2]||(a[2]=p=>_(3))},es,2)])])]),o(t).cookie?(i(),n("div",{key:0,id:"loginOutButton",onClick:h},ts)):r("",!0)])]),s("div",cs,[j(v)])])])}}});const rs=q(as,[["__scopeId","data-v-af7b9fb4"]]);export{rs as default};