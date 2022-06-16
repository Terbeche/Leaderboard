"use strict";(self.webpackChunkleaderboard=self.webpackChunkleaderboard||[]).push([[179],{426:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(81),o=r.n(t),a=r(645),s=r.n(a)()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Crete+Round&family=Dancing+Script:wght@700&family=Inter:wght@400;500;700&family=Poppins&family=Roboto:wght@700&display=swap);"]),s.push([e.id,"body {\r\n  box-sizing: border-box;\r\n  margin-top: 5rem;\r\n  font-family: 'Dancing Script', sans-serif;\r\n}\r\n\r\n#score {\r\n  margin: auto;\r\n  margin-top: 2rem;\r\n  background-color: #a1e0e3;\r\n  width: fit-content;\r\n  padding: 2rem;\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n#header-title {\r\n  margin: auto;\r\n  text-align: center;\r\n  border: #b96de8 solid 1rem;\r\n  border-radius: 25%;\r\n  width: fit-content;\r\n  padding: 0.5rem;\r\n  font-size: 5rem;\r\n}\r\n\r\n#add-score {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-input {\r\n  margin-bottom: 1rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n#recent-score-header {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n#refresh {\r\n  width: fit-content;\r\n}\r\n\r\n#score-board {\r\n  border: 0.3rem black solid;\r\n  padding: 1rem;\r\n}\r\n\r\nh2 {\r\n  font-size: 2rem;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nbutton {\r\n  color: #2035bd;\r\n  background-color: #b96de8;\r\n  padding: 0.5rem;\r\n  border: none;\r\n  font-size: 1rem;\r\n}\r\n\r\n.score-div {\r\n  font-size: 1.5rem;\r\n}\r\n",""]);const i=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(t)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);t&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],l=t.base?c[0]+t.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=r(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,t);t.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=r(a[s]);n[i].references--}for(var c=t(e,o),l=0;l<a.length;l++){var d=r(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},479:(e,n,r)=>{var t=r(379),o=r.n(t),a=r(795),s=r.n(a),i=r(569),c=r.n(i),l=r(565),d=r.n(l),u=r(216),p=r.n(u),f=r(589),m=r.n(f),h=r(426),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=p(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const y=document.getElementById("score-form"),g=y.name,b=y.score,w=document.getElementById("score-board"),x="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jfhjHJHKU544MSLgjsk54arzy4e7f/scores/",E=async()=>{const e=await async function(){try{const e=await fetch(x);return await e.json()}catch(e){return console.log(e),!1}}();w.innerHTML="",e.result.forEach((e=>{const n=document.createElement("li");n.classList.add("score-div");const r=document.createElement("label");r.innerHTML=`${e.user} : ${e.score}`,n.append(r),w.append(n)}))},T=document.getElementById("score-form"),C=document.getElementById("refresh");T.onsubmit=e=>{e.preventDefault(),(async()=>{try{const e=await fetch(x,{method:"POST",body:JSON.stringify({user:g.value,score:b.value}),headers:{"Content-type":"application/json; charset=UTF-8"}});g.value="",b.value="",E(),e.json()}catch(e){return console.log(e),!1}})()},C.onclick=e=>{e.preventDefault(),E()},window.onload=e=>{e.preventDefault(),E()}}},e=>{e(e.s=479)}]);