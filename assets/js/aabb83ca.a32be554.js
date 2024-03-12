"use strict";(self.webpackChunkmintdocs=self.webpackChunkmintdocs||[]).push([[8938],{2557:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=s(4848),t=s(8453);const o={id:"error-status-code",title:"Error/Status Codes",sidebar_position:4},a="Error / Status Codes",c={id:"mpay/error-status-code",title:"Error/Status Codes",description:"In terms of error handling there will be 2 cases of errors",source:"@site/versioned_docs/version-2.0.0/mpay/error-status-code.md",sourceDirName:"mpay",slug:"/mpay/error-status-code",permalink:"/mintdocs/docs/2.0.0/mpay/error-status-code",draft:!1,unlisted:!1,tags:[],version:"2.0.0",sidebarPosition:4,frontMatter:{id:"error-status-code",title:"Error/Status Codes",sidebar_position:4},sidebar:"mpaySidebar",previous:{title:"Transaction Status",permalink:"/mintdocs/docs/2.0.0/mpay/transaction-status"}},i={},d=[];function u(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"error--status-codes",children:"Error / Status Codes"}),"\n",(0,r.jsx)(n.p,{children:"In terms of error handling there will be 2 cases of errors"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"200 OK"})}),"\n",(0,r.jsx)(n.li,{children:"Purchase Successful"}),"\n",(0,r.jsxs)(n.li,{children:["not an ERROR",(0,r.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(n.li,{children:"Purchase Declined ERRORsNon 200 ERRORs"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"After a call of an endpoint checking the HTTP response code will indicate if the transaction was OK or not."}),"\n",(0,r.jsx)(n.p,{children:"In case of the 200 response, the status has to be checked to determine APPROVED from DECLINED. All non 200 response codes indicate a failure."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"HTTP 200 Purchase Successful"})}),"\n",(0,r.jsx)(n.p,{children:"That is not an error but just an example of the response you can expect if transaction was processed correctly"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n    "card": {\n        "brand": "visa",\n        "funding": "credit",\n        "country": "US",\n        "number": "400000******0259",\n        "holder_name": "John Doe"\n    },\n    "purchase": {\n            "transaction_time_utc": "2020-03-26 02:08:38 AM",\n            "status": "APPROVED",\n            "purchase_reference": "846577135053848833",\n            "amount": 110.2,\n            "surcharge_amount": 0.0,\n            "total_amount": 110.2,\n            "currency": "AUD"\n    },\n    "response_code": "success",\n    "response_message": "Your request has been successfully processed."\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"HTTP 200 Error - Purchase Declined"})}),"\n",(0,r.jsx)(n.p,{children:"With all \u2018200 errors\u2019 the status of the transaction will be \u2018declined\u2019. The response of the \u2018200 errors\u2019 will contain the pair response_code and response_message which will have a detailed description of the problem."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"response_code": "generic_decline",\n"response_message": "The card has been declined. Please use a different card."\n'})}),"\n",(0,r.jsx)(n.p,{children:"In the most cases here the credit card is not suitable to be used and the best approach would be to use a different card rather then re-trying which will result in the same declined transaction."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'/** Sample : generic decline **/\n{\n    "card": {\n        "brand": "visa",\n        "funding": "credit",\n        "country": "US",\n        "number": "400000******0002",\n        "holder_name": "John Doe"\n    },\n    "purchase": {\n        "transaction_time_utc": "2020-03-26 01:50:51 AM",\n        "status": "DECLINED",\n        "purchase_reference": "335287298017947771",\n        "amount": 110.2,\n        "surcharge_amount": 0.0,\n        "total_amount": 0.0,\n        "currency": "AUD"\n    },\n    "response_code": "generic_decline",\n    "response_message": "The card has been declined. Please use a different card."\n}\n/** Sample : Stolen card **/\n \n\n{\n    "card": {\n        "brand": "visa",\n        "funding": "credit",\n        "country": "US",\n        "number": "400000******9979",\n        "holder_name": "John Doe"\n    },\n    "purchase": {\n        "transaction_time_utc": "2020-03-26 01:57:31 AM",\n        "status": "DECLINED",\n        "purchase_reference": "247915481936229025",\n        "amount": 110.2,\n        "surcharge_amount": 0,\n        "total_amount": null,\n        "currency": "AUD"\n    },\n        "response_code": "stolen_card",\n        "response_message": "A stolen card is being used. Please use a different card."\n}\n\n\n/** Sample : Insufficient funds **/\n \n{\n    "card": {\n        "brand": "visa",\n        "funding": "credit",\n        "country": "US",\n        "number": "400000******9995",\n        "holder_name": "John Doe"\n    },\n    "purchase": {\n        "transaction_time_utc": "2020-03-26 02:06:39 AM",\n        "status": "DECLINED",\n        "purchase_reference": "864559968685000961",\n        "amount": 110.2,\n        "surcharge_amount": 0,\n        "total_amount": null,\n        "currency": "AUD"\n    },\n    "response_code": "insufficient_funds",\n    "response_message": "The card has insufficient funds to process this transaction. Please use a different card."\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var r=s(6540);const t={},o=r.createContext(t);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);