const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CR6EacvA.js","assets/index-BorrnA5E.js","assets/index-_rUtTAo0.css"])))=>i.map(i=>d[i]);
import{_ as pe}from"./index-BorrnA5E.js";const me=Symbol(),ee=Object.getPrototypeOf,Y=new WeakMap,he=e=>e&&(Y.has(e)?Y.get(e):ee(e)===Object.prototype||ee(e)===Array.prototype),ge=e=>he(e)&&e[me]||null,te=(e,t=!0)=>{Y.set(e,t)},z={},F=e=>typeof e=="object"&&e!==null,L=new WeakMap,x=new WeakSet,ye=(e=Object.is,t=(r,g)=>new Proxy(r,g),s=r=>F(r)&&!x.has(r)&&(Array.isArray(r)||!(Symbol.iterator in r))&&!(r instanceof WeakMap)&&!(r instanceof WeakSet)&&!(r instanceof Error)&&!(r instanceof Number)&&!(r instanceof Date)&&!(r instanceof String)&&!(r instanceof RegExp)&&!(r instanceof ArrayBuffer),n=r=>{switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:throw r}},l=new WeakMap,c=(r,g,_=n)=>{const w=l.get(r);if((w==null?void 0:w[0])===g)return w[1];const b=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r));return te(b,!0),l.set(r,[g,b]),Reflect.ownKeys(r).forEach(D=>{if(Object.getOwnPropertyDescriptor(b,D))return;const W=Reflect.get(r,D),A={value:W,enumerable:!0,configurable:!0};if(x.has(W))te(W,!1);else if(W instanceof Promise)delete A.value,A.get=()=>_(W);else if(L.has(W)){const[y,H]=L.get(W);A.value=c(y,H(),_)}Object.defineProperty(b,D,A)}),Object.preventExtensions(b)},d=new WeakMap,f=[1,1],v=r=>{if(!F(r))throw new Error("object required");const g=d.get(r);if(g)return g;let _=f[0];const w=new Set,b=(i,a=++f[0])=>{_!==a&&(_=a,w.forEach(o=>o(i,a)))};let D=f[1];const W=(i=++f[1])=>(D!==i&&!w.size&&(D=i,y.forEach(([a])=>{const o=a[1](i);o>_&&(_=o)})),_),A=i=>(a,o)=>{const h=[...a];h[1]=[i,...h[1]],b(h,o)},y=new Map,H=(i,a)=>{if((z?"production":void 0)!=="production"&&y.has(i))throw new Error("prop listener already exists");if(w.size){const o=a[3](A(i));y.set(i,[a,o])}else y.set(i,[a])},Z=i=>{var a;const o=y.get(i);o&&(y.delete(i),(a=o[1])==null||a.call(o))},ue=i=>(w.add(i),w.size===1&&y.forEach(([o,h],U)=>{if((z?"production":void 0)!=="production"&&h)throw new Error("remove already exists");const k=o[3](A(U));y.set(U,[o,k])}),()=>{w.delete(i),w.size===0&&y.forEach(([o,h],U)=>{h&&(h(),y.set(U,[o]))})}),q=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),R=t(q,{deleteProperty(i,a){const o=Reflect.get(i,a);Z(a);const h=Reflect.deleteProperty(i,a);return h&&b(["delete",[a],o]),h},set(i,a,o,h){const U=Reflect.has(i,a),k=Reflect.get(i,a,h);if(U&&(e(k,o)||d.has(o)&&e(k,d.get(o))))return!0;Z(a),F(o)&&(o=ge(o)||o);let V=o;if(o instanceof Promise)o.then(C=>{o.status="fulfilled",o.value=C,b(["resolve",[a],C])}).catch(C=>{o.status="rejected",o.reason=C,b(["reject",[a],C])});else{!L.has(o)&&s(o)&&(V=v(o));const C=!x.has(V)&&L.get(V);C&&H(a,C)}return Reflect.set(i,a,V,h),b(["set",[a],o,k]),!0}});d.set(r,R);const fe=[q,W,c,ue];return L.set(R,fe),Reflect.ownKeys(r).forEach(i=>{const a=Object.getOwnPropertyDescriptor(r,i);"value"in a&&(R[i]=r[i],delete a.value,delete a.writable),Object.defineProperty(q,i,a)}),R})=>[v,L,x,e,t,s,n,l,c,d,f],[we]=ye();function P(e={}){return we(e)}function j(e,t,s){const n=L.get(e);(z?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");let l;const c=[],d=n[3];let f=!1;const r=d(g=>{c.push(g),l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,r()}}function be(e,t){const s=L.get(e);(z?"production":void 0)!=="production"&&!s&&console.warn("Please use proxy object");const[n,l,c]=s;return c(n,l(),t)}const u=P({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),de={state:u,subscribe(e){return j(u,()=>e(u))},push(e,t){e!==u.view&&(u.view=e,t&&(u.data=t),u.history.push(e))},reset(e){u.view=e,u.history=[e]},replace(e){u.history.length>1&&(u.history[u.history.length-1]=e,u.view=e)},goBack(){if(u.history.length>1){u.history.pop();const[e]=u.history.slice(-1);u.view=e}},setData(e){u.data=e}},m={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return m.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return m.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},formatNativeUrl(e,t,s){if(m.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!m.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;if(n.startsWith("https://t.me")){const c=Buffer.from(t).toString("base64").replace(/[=]/g,"");n.endsWith("/")&&(n=n.slice(0,-1)),this.setWalletConnectDeepLink(n,s);const d=new URL(n);return d.searchParams.set("startapp",c),d.toString()}n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){const s=this.isTelegram()?"_blank":t;window.open(e,s,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(m.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(m.WCM_VERSION,"2.7.0")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=de.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},Ie=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),p=P({enabled:Ie,userSessionId:"",events:[],connectedWalletId:void 0}),_e={state:p,subscribe(e){return j(p.events,()=>e(be(p.events[p.events.length-1])))},initialize(){p.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(p.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){p.connectedWalletId=e},click(e){if(p.enabled){const t={type:"CLICK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},track(e){if(p.enabled){const t={type:"TRACK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},view(e){if(p.enabled){const t={type:"VIEW",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}}},O=P({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:O,subscribe(e){return j(O,()=>e(O))},setChains(e){O.chains=e},setWalletConnectUri(e){O.walletConnectUri=e},setIsCustomDesktop(e){O.isCustomDesktop=e},setIsCustomMobile(e){O.isCustomMobile=e},setIsDataLoaded(e){O.isDataLoaded=e},setIsUiLoaded(e){O.isUiLoaded=e},setIsAuth(e){O.isAuth=e}},B=P({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),$={state:B,subscribe(e){return j(B,()=>e(B))},setConfig(e){var t,s;_e.initialize(),I.setChains(e.chains),I.setIsAuth(!!e.enableAuthMode),I.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),I.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),m.setModalVersionInStorage(),Object.assign(B,e)}};var Oe=Object.defineProperty,se=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ve=(e,t)=>{for(var s in t||(t={}))Ee.call(t,s)&&ne(e,s,t[s]);if(se)for(var s of se(t))We.call(t,s)&&ne(e,s,t[s]);return e};const G="https://explorer-api.walletconnect.com",Q="wcm",X="js-2.7.0";async function K(e,t){const s=ve({sdkType:Q,sdkVersion:X},t),n=new URL(e,G);return n.searchParams.append("projectId",$.state.projectId),Object.entries(s).forEach(([c,d])=>{d&&n.searchParams.append(c,String(d))}),(await fetch(n)).json()}const M={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${G}/w3m/v1/getWalletImage/${e}?projectId=${$.state.projectId}&sdkType=${Q}&sdkVersion=${X}`},getAssetImageUrl(e){return`${G}/w3m/v1/getAssetImage/${e}?projectId=${$.state.projectId}&sdkType=${Q}&sdkVersion=${X}`}};var Ce=Object.defineProperty,re=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,oe=(e,t,s)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ae=(e,t)=>{for(var s in t||(t={}))Le.call(t,s)&&oe(e,s,t[s]);if(re)for(var s of re(t))Pe.call(t,s)&&oe(e,s,t[s]);return e};const ae=m.isMobile(),E=P({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Ne={state:E,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=$.state;if(e==="NONE"||t==="ALL"&&!e)return E.recomendedWallets;if(m.isArray(e)){const n={recommendedIds:e.join(",")},{listings:l}=await M.getAllListings(n),c=Object.values(l);c.sort((d,f)=>{const v=e.indexOf(d.id),r=e.indexOf(f.id);return v-r}),E.recomendedWallets=c}else{const{chains:s,isAuth:n}=I.state,l=s==null?void 0:s.join(","),c=m.isArray(t),d={page:1,sdks:n?"auth_v1":void 0,entries:m.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=ae?await M.getMobileListings(d):await M.getDesktopListings(d);E.recomendedWallets=Object.values(f)}return E.recomendedWallets},async getWallets(e){const t=Ae({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=$.state,{recomendedWallets:l}=E;if(n==="ALL")return E.wallets;l.length?t.excludedIds=l.map(_=>_.id).join(","):m.isArray(s)&&(t.excludedIds=s.join(",")),m.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:d}=e,{listings:f,total:v}=ae?await M.getMobileListings(t):await M.getDesktopListings(t),r=Object.values(f),g=d?"search":"wallets";return E[g]={listings:[...E[g].listings,...r],total:v,page:c??1},{listings:r,total:v}},getWalletImageUrl(e){return M.getWalletImageUrl(e)},getAssetImageUrl(e){return M.getAssetImageUrl(e)},resetSearch(){E.search={listings:[],total:0,page:1}}},T=P({open:!1}),J={state:T,subscribe(e){return j(T,()=>e(T))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:n}=I.state;if(m.removeWalletConnectDeepLink(),I.setWalletConnectUri(e==null?void 0:e.uri),I.setChains(e==null?void 0:e.chains),de.reset("ConnectWallet"),s&&n)T.open=!0,t();else{const l=setInterval(()=>{const c=I.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),T.open=!0,t())},200)}})},close(){T.open=!1}};var Me=Object.defineProperty,ie=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,le=(e,t,s)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,De=(e,t)=>{for(var s in t||(t={}))Se.call(t,s)&&le(e,s,t[s]);if(ie)for(var s of ie(t))je.call(t,s)&&le(e,s,t[s]);return e};function Ue(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const N=P({themeMode:Ue()?"dark":"light"}),ce={state:N,subscribe(e){return j(N,()=>e(N))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(N.themeMode=t),s&&(N.themeVariables=De({},s))}},S=P({open:!1,message:"",variant:"success"}),Re={state:S,subscribe(e){return j(S,()=>e(S))},openToast(e,t){S.open=!0,S.message=e,S.variant=t},closeToast(){S.open=!1}};class Te{constructor(t){this.openModal=J.open,this.closeModal=J.close,this.subscribeModal=J.subscribe,this.setTheme=ce.setThemeConfig,ce.setThemeConfig(t),$.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await pe(()=>import("./index-CR6EacvA.js"),__vite__mapDeps([0,1,2]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),I.setIsUiLoaded(!0)}}}const Ve=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Te},Symbol.toStringTag,{value:"Module"}));export{m as C,Ne as E,J as M,I as O,de as R,ce as T,$ as a,Re as b,_e as c,Ve as i};
