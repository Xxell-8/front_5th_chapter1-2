var q=Object.defineProperty;var T=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var E=(e,t,r)=>T(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const O=()=>{const e=new Set;return{subscribe:o=>e.add(o),notify:()=>e.forEach(o=>o())}},W=(e,t)=>{const{subscribe:r,notify:o}=O();let s={...e};const a=c=>{s={...s,...c},o()},l=()=>({...s}),i=Object.fromEntries(Object.entries(t).map(([c,p])=>[c,(...v)=>a(p(l(),...v))]));return{getState:l,setState:a,subscribe:r,actions:i}},G=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:a=>t.setItem(e,JSON.stringify(a)),reset:()=>t.removeItem(e)}),m={value:null,get(){return this.value},set(e){this.value=e}},P="/front_5th_chapter1-2",_=e=>{const{subscribe:t,notify:r}=O(),o=()=>{const l=window.location.pathname;return l.startsWith(P)?l.slice(P.length):l},s=()=>e[o()],a=l=>{window.history.pushState(null,null,P+l),r()};return window.addEventListener("popstate",()=>r()),{get path(){return o()},push:a,subscribe:t,getTarget:s}},h=e=>e.reduce((t,r)=>(Array.isArray(r)?t.push(...h(r)):t.push(r),t),[]),j=e=>typeof e>"u"||e===null||typeof e=="boolean",C=e=>e.startsWith("on"),M=e=>e.slice(2).toLowerCase(),B=e=>e==="key"?null:e==="className"?"class":e,V=1e3,L=V*60,U=L*60,J=U*24,R=e=>{const t=Date.now()-e;return t<L?"방금 전":t<U?`${Math.floor(t/L)}분 전`:t<J?`${Math.floor(t/U)}시간 전`:new Date(e).toLocaleString()};function n(e,t,...r){return{type:e,props:t,children:h(r).filter(o=>!j(o))}}const d={};function Y(e){Object.keys(d).forEach(t=>{e.addEventListener(t,Q)})}function $(e,t,r){d[t]||(d[t]=new WeakMap),d[t].set(e,r)}function z(e,t){var r;(r=d[t])!=null&&r.has(e)&&d[t].delete(e)}function Q(e){var t,r;return(r=(t=d[e.type])==null?void 0:t.get(e.target))==null?void 0:r(e)}function f(e){if(j(e))return document.createTextNode("");if(typeof e=="string"||typeof e=="number")return document.createTextNode(String(e));if(Array.isArray(e)){const t=document.createDocumentFragment();return h(e).forEach(r=>t.appendChild(f(r))),t}if(typeof e=="object"){const{type:t,props:r,children:o}=e,s=document.createElement(t);return X(s,r),h(o).forEach(a=>{s.appendChild(f(a))}),s}return document.createElement(e.type)}function X(e,t){if(!t)return e;Object.entries(t).forEach(([r,o])=>{if(C(r))$(e,M(r),o);else{const s=B(r);if(!s)return;e.setAttribute(s,o)}})}function y(e){if(j(e))return"";if(typeof e=="string"||typeof e=="number")return String(e);if(Array.isArray(e))return e.map(y);if(typeof e=="object"){const{type:t,props:r,children:o}=e;typeof t=="function"&&(e=y(t({...r,children:o}))),e.children=h(e.children).map(y).filter(s=>s!=="")}return e}function Z(e,t,r){new Set([...Object.keys(t),...Object.keys(r)]).forEach(s=>{const a=t[s];if(a!==r[s])if(C(s)){const l=M(s);z(e,l),$(e,l,a)}else{const l=B(s);if(!l)return;a?e.setAttribute(l,a):e.removeAttribute(l)}})}function I(e,t,r,o=0){if(!e)return;if(!t&&r){e.removeChild(e.childNodes[o]);return}if(t&&!r){e.appendChild(f(t));return}const s=e.childNodes[o];if(typeof t=="string"&&typeof r=="string"){t!==r&&(s.textContent=t);return}if(t.type!==r.type){s.replaceWith(f(t));return}t.type===r.type&&Z(s,t.props||{},r.props||{});const a=t.children||[],l=r.children||[];if(a.every(i=>{var c;return(c=i.props)==null?void 0:c.key})&&l.every(i=>{var c;return(c=i.props)==null?void 0:c.key}))ee(s,a,l);else{const i=Math.max(a.length,l.length);for(let c=0;c<i;c++)I(s,a[c],l[c],c)}}function ee(e,t,r){const o=new Map;r.forEach((s,a)=>{s.props.key&&o.set(s.props.key,{node:s,index:a})}),t.forEach((s,a)=>{const l=s.props.key;if(o.has(l)){const{node:i,index:c}=o.get(l),p=e.childNodes[c];c!==a&&e.insertBefore(p,e.childNodes[a]||null),I(e,s,i,a),o.delete(l)}else{const i=f(s);e.insertBefore(i,e.childNodes[a]||null)}}),[...o.values()].map(({index:s})=>s).sort((s,a)=>a-s).forEach(s=>{e.removeChild(e.childNodes[s])})}function te(e,t){const r=y(e),o=t._oldNode;o?I(t,r,o):t.appendChild(f(r)),Y(t),t._oldNode=r}const b=G("user"),re=1e3,g=re*60,ne=g*60,u=W({currentUser:b.get(),loggedIn:!!b.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*g,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*g,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*g,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*g,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*ne,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(e){return b.reset(),{...e,currentUser:null,loggedIn:!1}},createPost(e,t){const{currentUser:r,posts:o}=e;return{...e,posts:[{...t,id:Math.max(...o.map(s=>s.id))+1,author:r.username,time:Date.now(),likeUsers:[]},...o]}},toggleLikePost(e,t){const{posts:r,currentUser:o}=e;return{...e,posts:r.map(s=>s.id===t?{...s,likeUsers:s.likeUsers.includes(o.username)?s.likeUsers.filter(a=>a!==o.username):[...s.likeUsers,o.username]}:s)}}}),se=({id:e,author:t,time:r,content:o,likeUsers:s})=>{const{loggedIn:a,currentUser:l}=u.getState(),{toggleLikePost:i}=u.actions,c=l&&s.includes(l.username),p=v=>{if(!a){alert("로그인 후 이용해주세요");return}i(v)};return n("div",{key:e,className:"bg-white rounded-lg shadow p-4 mb-4"},n("div",{className:"flex items-center mb-2"},n("div",null,n("div",{className:"font-bold"},t),n("div",{className:"text-gray-500 text-sm"},R(r)))),n("p",null,o),n("div",{className:"mt-2 flex justify-between text-gray-500"},n("span",{className:`like-button cursor-pointer${c?" text-blue-500":""}`,onClick:()=>p(e)},"좋아요 ",s.length),n("span",null,"댓글"),n("span",null,"공유")))},oe=()=>{const{currentUser:e}=u.getState(),{createPost:t}=u.actions;return n("form",{className:"mb-4 bg-white rounded-lg shadow p-4",onSubmit:o=>{o.preventDefault();const s=document.getElementById("post-content").value;t({content:s}),document.getElementById("post-content").value=""}},n("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),n("button",{id:"post-submit",type:"submit",className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded"},"게시"))},K=()=>n("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},n("h1",{className:"text-2xl font-bold"},"항해플러스")),F=()=>n("footer",{className:"bg-gray-200 p-4 text-center"},n("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),A=e=>{const t=window.location.pathname;return(BASE_PATH&&t.startsWith(BASE_PATH)?t.slice(BASE_PATH.length):t)===e?"text-blue-600 font-bold":"text-gray-600"};function k({onClick:e,children:t,...r}){return n("a",{onClick:s=>{s.preventDefault(),e==null||e(),m.get().push(s.target.href.replace(window.location.origin,""))},...r},t)}const H=()=>{const{loggedIn:e}=u.getState(),{logout:t}=u.actions;return n("nav",{className:"bg-white shadow-md p-2 sticky top-14"},n("ul",{className:"flex justify-around"},n("li",null,n(k,{href:"/",className:A("/")},"홈")),!e&&n("li",null,n(k,{href:"/login",className:A("/login")},"로그인")),e&&n("li",null,n(k,{href:"/profile",className:A("/profile")},"프로필")),e&&n("li",null,n("a",{href:"#",id:"logout",className:"text-gray-600",onClick:r=>{r.preventDefault(),t()}},"로그아웃"))))},ae=()=>{const{posts:e,loggedIn:t}=u.getState();return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(K,null),n(H,null),n("main",{className:"p-4"},t&&n(oe,null),n("div",{id:"posts-container",className:"space-y-4"},[...e].sort((r,o)=>o.time-r.time).map(r=>n(se,{...r})))),n(F,null)))};function le(e){const t={username:e,email:"",bio:""};u.setState({currentUser:t,loggedIn:!0}),b.set(t)}const ce=()=>n("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},n("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),n("form",{id:"login-form",onSubmit:t=>{t.preventDefault();const r=document.getElementById("username").value;le(r)}},n("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),n("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded"},"로그인")),n("div",{className:"mt-4 text-center"},n("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),n("hr",{className:"my-6"}),n("div",{className:"text-center"},n("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기")))),ie=()=>n("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},n("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),n("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),n("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),n("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),n("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function ue(e){const t={...u.getState().currentUser,...e};u.setState({currentUser:t}),b.set(t),alert("프로필이 업데이트되었습니다.")}const de=()=>{const{loggedIn:e,currentUser:t}=u.getState(),{username:r="",email:o="",bio:s=""}=t??{};return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(K,null),n(H,{loggedIn:e}),n("main",{className:"p-4"},n("div",{className:"bg-white p-8 rounded-lg shadow-md"},n("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),n("form",{id:"profile-form",onSubmit:l=>{l.preventDefault();const i=new FormData(l.target),c=Object.fromEntries(i);ue(c)}},n("div",{className:"mb-4"},n("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),n("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:r,required:!0})),n("div",{className:"mb-4"},n("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),n("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:o,required:!0})),n("div",{className:"mb-6"},n("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),n("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},s)),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),n(F,null)))},S=class S extends Error{constructor(){super(S.MESSAGE)}};E(S,"MESSAGE","ForbiddenError");let x=S;const N=class N extends Error{constructor(){super(N.MESSAGE)}};E(N,"MESSAGE","UnauthorizedError");let w=N;function D(){const e=m.get().getTarget()??ie,t=document.querySelector("#root");try{te(n(e,null),t)}catch(r){if(r instanceof x){m.get().push("/");return}if(r instanceof w){m.get().push("/login");return}console.error(r)}}m.set(_({"/":ae,"/login":()=>{const{loggedIn:e}=u.getState();if(e)throw new x;return n(ce,null)},"/profile":()=>{const{loggedIn:e}=u.getState();if(!e)throw new w;return n(de,null)}}));function me(){m.get().subscribe(D),u.subscribe(D),D()}me();
