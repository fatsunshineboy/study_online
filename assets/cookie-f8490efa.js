import{x as t,r}from"./index-f44a6f42.js";const a=t("cookie",()=>{const o=r(localStorage.getItem("cookie")||"");return{cookie:o,setCookie:e=>{o.value=e,localStorage.setItem("cookie",e)},removeCookie:()=>{o.value="",localStorage.removeItem("cookie")}}});export{a as u};
