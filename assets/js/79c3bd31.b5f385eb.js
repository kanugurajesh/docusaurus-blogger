"use strict";(self.webpackChunktataplay_autoupdater=self.webpackChunktataplay_autoupdater||[]).push([[373],{5751:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var t=s(5893),i=s(1151);const r={},d="API Documentation",l={id:"Tata Play Playlist Generator - ForceGT/How It works/apidoc",title:"API Documentation",description:"Rough description of how the API works",source:"@site/docs/Tata Play Playlist Generator - ForceGT/How It works/apidoc.md",sourceDirName:"Tata Play Playlist Generator - ForceGT/How It works",slug:"/Tata Play Playlist Generator - ForceGT/How It works/apidoc",permalink:"/docusaurus-blogger/docs/Tata Play Playlist Generator - ForceGT/How It works/apidoc",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tata Play Playlist Generator - ForceGT/How It works/apidoc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"License and Disclosures",permalink:"/docusaurus-blogger/docs/Tata Play Playlist Generator - ForceGT/licenses"},next:{title:"Authentication",permalink:"/docusaurus-blogger/docs/Tata Play Playlist Generator - ForceGT/How It works/working"}},c={},h=[{value:"Rough description of how the API works",id:"rough-description-of-how-the-api-works",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Channels",id:"channels",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"api-documentation",children:"API Documentation"}),"\n",(0,t.jsx)(n.h2,{id:"rough-description-of-how-the-api-works",children:"Rough description of how the API works"}),"\n",(0,t.jsx)(n.p,{children:"This document seeks to tell you the main endpoints of the API based on whatever I could decipher"}),"\n",(0,t.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Request Type"}),(0,t.jsx)(n.th,{children:"Endpoint"}),(0,t.jsx)(n.th,{children:"Meta"}),(0,t.jsx)(n.th,{children:"Params"}),(0,t.jsx)(n.th,{children:"Headers"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://ts-api.videoready.tv/rest-api/pub/api/v2/login/ott",children:"https://ts-api.videoready.tv/rest-api/pub/api/v2/login/ott"})}),(0,t.jsx)(n.td,{children:"Common API for login via RMN/SubID"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"raw json"}),' authorization,rmn,sid,      loginOption: "PWD"/"OTP",pwd(optional)']}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"required"})," x-api-key,",(0,t.jsx)(n.code,{children:"required"})," x-app-key,",(0,t.jsx)(n.code,{children:"required"})," x-app-id , ",(0,t.jsx)(n.code,{children:"required"})," device_details"]})]})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Detail Info"})," :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["device_details is a json object where keys ",(0,t.jsx)(n.code,{children:"app"}),",",(0,t.jsx)(n.code,{children:"lo"}),",",(0,t.jsx)(n.code,{children:"os"}),",",(0,t.jsx)(n.code,{children:"device_id"}),",",(0,t.jsx)(n.code,{children:"ip"}),", ",(0,t.jsx)(n.code,{children:"dn"}),",",(0,t.jsx)(n.code,{children:"device_type"}),",",(0,t.jsx)(n.code,{children:"device_category"}),",",(0,t.jsx)(n.code,{children:"manufacture"}),",",(0,t.jsx)(n.code,{children:"car"}),",",(0,t.jsx)(n.code,{children:"ma"}),",",(0,t.jsx)(n.code,{children:"pl"}),",",(0,t.jsx)(n.code,{children:"net"}),"\r\nare required for simulating mobile based login ."]}),"\n",(0,t.jsx)(n.li,{children:"Web based logins are different and they need different params"}),"\n",(0,t.jsx)(n.li,{children:"All the code can be found in the code_examples directory"}),"\n",(0,t.jsx)(n.li,{children:"Returns the access token and user entitlements which are of utmost importance in subsequent requests"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Request Type"}),(0,t.jsx)(n.th,{children:"Endpoint"}),(0,t.jsx)(n.th,{children:"Meta"}),(0,t.jsx)(n.th,{children:"Params"}),(0,t.jsx)(n.th,{children:"Headers"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://kong-tatasky.videoready.tv/auth-service/v1/oauth/token-service/token",children:"https://kong-tatasky.videoready.tv/auth-service/v1/oauth/token-service/token"})}),(0,t.jsx)(n.td,{children:"JWT Token generation (needed for licensing)"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"required"})," action , ",(0,t.jsx)(n.code,{children:"required"})," epids"]}),(0,t.jsx)(n.td,{children:"Authorization , x-subscriber-id, x-api-key, x-app-id, x-app-key, x-subscriber-name,x-device-id, x-device-platform, x-device-type"})]})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Detail Info"})," :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Params include information for what episode id (epid) the streaming license is needed"}),"\n",(0,t.jsx)(n.li,{children:"It returns a jwt token which expires in a day"}),"\n",(0,t.jsx)(n.li,{children:"All the code can be found in the code_examples directory"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"OTP Generation"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["a. ",(0,t.jsx)(n.em,{children:"with sid"})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Request Type"}),(0,t.jsx)(n.th,{children:"Endpoint"}),(0,t.jsx)(n.th,{children:"Meta"}),(0,t.jsx)(n.th,{children:"Params"}),(0,t.jsx)(n.th,{children:"Headers"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"GET"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://kong-tatasky.videoready.tv/rest-api/pub/api/v1/subscribers/%7Bsid%7D/otp",children:"https://kong-tatasky.videoready.tv/rest-api/pub/api/v1/subscribers/{sid}/otp"})}),(0,t.jsx)(n.td,{children:"Generate OTP using Sub ID"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"sid"})," : subscriber id"]}),(0,t.jsx)(n.td,{children:"None"})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["b. ",(0,t.jsx)(n.em,{children:"with rmn"})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Request Type"}),(0,t.jsx)(n.th,{children:"Endpoint"}),(0,t.jsx)(n.th,{children:"Meta"}),(0,t.jsx)(n.th,{children:"Params"}),(0,t.jsx)(n.th,{children:"Headers"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"GET"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://kong-tatasky.videoready.tv/rest-api/pub/api/v1/rmn/%7Brmn%7D/otp",children:"https://kong-tatasky.videoready.tv/rest-api/pub/api/v1/rmn/{rmn}/otp"})}),(0,t.jsx)(n.td,{children:"Generate OTP using rmn"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"rmn"})," : registered mobile number"]}),(0,t.jsx)(n.td,{children:"None"})]})})]}),"\n",(0,t.jsx)(n.p,{children:"OTP validation can be done at 1"}),"\n",(0,t.jsx)(n.h3,{id:"channels",children:"Channels"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"All available channels"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Request Type"}),(0,t.jsx)(n.th,{children:"Endpoint"}),(0,t.jsx)(n.th,{children:"Meta"}),(0,t.jsx)(n.th,{children:"Params"}),(0,t.jsx)(n.th,{children:"Headers"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"GET"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://ts-api.videoready.tv/content-detail/pub/api/v1/channels",children:"https://ts-api.videoready.tv/content-detail/pub/api/v1/channels"})}),(0,t.jsx)(n.td,{children:"All available channels on the platform"}),(0,t.jsx)(n.td,{children:"limit = 443, offset"}),(0,t.jsx)(n.td,{children:"none"})]})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Detail Info"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The limit is set to 443 because max channel count is 443 (It may change in future). You can set it to any number"}),"\n",(0,t.jsx)(n.li,{children:"You get a channel id with each channel in the list which can be utilised in the below endpoint"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Channel info"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Request Type"}),(0,t.jsx)(n.th,{children:"Endpoint"}),(0,t.jsx)(n.th,{children:"Meta"}),(0,t.jsx)(n.th,{children:"Params"}),(0,t.jsx)(n.th,{children:"Headers"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"GET"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://kong-tatasky.videoready.tv/content-detail/pub/api/v1/channels/%7B%7BchannelId%7D%7D",children:"https://kong-tatasky.videoready.tv/content-detail/pub/api/v1/channels/{{channelId}}"})}),(0,t.jsx)(n.td,{children:"Links,episodes etc for each channel"}),(0,t.jsx)(n.td,{children:"channelId"}),(0,t.jsx)(n.td,{children:"None"})]})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Detail Info"})," :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The channelId must be substituted from above"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response includes playable dash links, license url, episode ids etc"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMPORTANT"})," License is granted only if the current user entitlements match the channel entitlements . This is a server side check while granting license"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In  the response, ",(0,t.jsx)(n.code,{children:"dashWidewinePlayUrl"})," is the dash playable url and ",(0,t.jsx)(n.code,{children:"dashWidewineLicenseUrl"})," is the license url currently being used everywhere"]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var t=s(7294);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);