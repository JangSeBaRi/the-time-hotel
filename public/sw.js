if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/972-ff18d55bb6edca69.js",revision:"ff18d55bb6edca69"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-8d9ac97d0bd9260b.js",revision:"8d9ac97d0bd9260b"},{url:"/_next/static/chunks/pages/_app-9b28dafc77c4438b.js",revision:"9b28dafc77c4438b"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/index-932eac6751619959.js",revision:"932eac6751619959"},{url:"/_next/static/chunks/pages/sign-up-824ec2af33aece21.js",revision:"824ec2af33aece21"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6ef43a8d4a395f49.js",revision:"6ef43a8d4a395f49"},{url:"/_next/static/css/9cc7915865bf0111.css",revision:"9cc7915865bf0111"},{url:"/_next/static/roYzGpke5-FJcbhgCSqPf/_buildManifest.js",revision:"1cd7d1bad692d461736064c6ae6ac721"},{url:"/_next/static/roYzGpke5-FJcbhgCSqPf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/icons/android-icon-144x144.png",revision:"cd444d582889dcaee5876a36ff7ae343"},{url:"/assets/icons/android-icon-192x192.png",revision:"621ac477884c1b5533b83d2cc59c619e"},{url:"/assets/icons/android-icon-36x36.png",revision:"f23e8f392d33fe2d25f3b6709fef8a78"},{url:"/assets/icons/android-icon-48x48.png",revision:"0925f1e32770b3af49525d00487522aa"},{url:"/assets/icons/android-icon-72x72.png",revision:"4ace9d197d055f9f71b5e67459802642"},{url:"/assets/icons/android-icon-96x96.png",revision:"95d20621d421b6dfffb4d2916713bdd2"},{url:"/assets/icons/apple-icon-114x114.png",revision:"fa1037a102e5b378a6c423fe4e0a5499"},{url:"/assets/icons/apple-icon-120x120.png",revision:"5a5d7289bb5d68fd750d07194ada9ef2"},{url:"/assets/icons/apple-icon-144x144.png",revision:"cd444d582889dcaee5876a36ff7ae343"},{url:"/assets/icons/apple-icon-152x152.png",revision:"484d134a414e599a2c92e420c0d514f9"},{url:"/assets/icons/apple-icon-180x180.png",revision:"d41fdb939712b2074fef19197ee56310"},{url:"/assets/icons/apple-icon-57x57.png",revision:"a9bf824f24c6de412b4494a729c4be6e"},{url:"/assets/icons/apple-icon-60x60.png",revision:"43f9b5d2448c13747ef50536585daa29"},{url:"/assets/icons/apple-icon-72x72.png",revision:"4ace9d197d055f9f71b5e67459802642"},{url:"/assets/icons/apple-icon-76x76.png",revision:"08ee69194647bddf59b022a14e491cda"},{url:"/assets/icons/apple-icon-precomposed.png",revision:"1c0b45cdc8b86c699183055919d6498d"},{url:"/assets/icons/apple-icon.png",revision:"1c0b45cdc8b86c699183055919d6498d"},{url:"/assets/icons/favicon-16x16.png",revision:"b8d58af52b58366317fe3fc5ab0e0c26"},{url:"/assets/icons/favicon-32x32.png",revision:"af744ddf4a213f842275f2099529db4c"},{url:"/assets/icons/favicon-96x96.png",revision:"95d20621d421b6dfffb4d2916713bdd2"},{url:"/assets/icons/ms-icon-144x144.png",revision:"cd444d582889dcaee5876a36ff7ae343"},{url:"/assets/icons/ms-icon-150x150.png",revision:"b50c19fb55e4caf151de8628d177aebe"},{url:"/assets/icons/ms-icon-310x310.png",revision:"6be7dd43fb89fd59758886f28f4107b7"},{url:"/assets/icons/ms-icon-70x70.png",revision:"09dec6be1c821c27abcb545cec30503d"},{url:"/favicon.ico",revision:"cc4c04e06eef43552731bce240846444"},{url:"/manifest.json",revision:"232d14ba0e3db9a886c5ad6ddaf0caa5"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/static/images/main_bg.png",revision:"9ee5fb12e335f3d55dacb5ba49728f6b"},{url:"/static/images/title.webp",revision:"885711480bde672c509bcf6ea126a5f6"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));