(()=>{"use strict";var e={893:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return dayjs().diff(e,"year")}},159:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=dayjs((0,r.default)(e)).format("YYYY-DD-MM");return dayjs(t).diff(dayjs(),"day")+1};var d,r=(d=a(348))&&d.__esModule?d:{default:d}},348:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return dayjs(e).add((0,r.default)(e)+1,"year").format("DD/MM/YYYY")};var d,r=(d=a(893))&&d.__esModule?d:{default:d}}},t={};function a(d){var r=t[d];if(void 0!==r)return r.exports;var n=t[d]={exports:{}};return e[d](n,n.exports,a),n.exports}(()=>{var e=r(a(893)),t=r(a(348)),d=r(a(159));function r(e){return e&&e.__esModule?e:{default:e}}var n=document.getElementById("result-area");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=document.createElement(e);return r.innerText=t,r.id=a,r.className=d,r}document.getElementById("calcBtn").addEventListener("click",(function(a){a.preventDefault();var r=document.getElementById("birthday").value,u=l("label","Sua idade: "+(0,e.default)(r),"ageLabel","descLabel"),o=l("label","Seu próximo aniversário será em "+(0,t.default)(r),"next-birthday","descLabel"),i=l("label","Dias até seu aniversário: "+(0,d.default)(r),"days-difference","descLabel");document.getElementById("ageLabel")&&(document.getElementById("ageLabel").remove(),document.getElementById("next-birthday").remove(),document.getElementById("days-difference").remove()),n.append(u,o,i)}))})()})();