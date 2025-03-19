import{r as s,j as e,S as p}from"./app-CCaHcxlW.js";import{A as V}from"./AdminLayout-Bl1EIZ6y.js";import{T as F,a as R,b as f,c as g,d as T,e as j}from"./table-DjSdKAOu.js";import{P as k}from"./phone-CFDrv4D5.js";import{C as y}from"./code-CuTvdcvE.js";import{C as z}from"./circle-alert-C8jz7lCm.js";import"./x-DomxVi1l.js";import"./createLucideIcon-Blvautya.js";import"./utils-CiMRq3MP.js";import"./clsx-B-dksMZM.js";const K=({apiData:N,dbData:v,error:w,mobile:o="",queryData:P=null})=>{const[r,n]=s.useState({mobile:o||"",aadhaar_no:""}),[d,u]=s.useState(!1),[l,h]=s.useState({}),[i,S]=s.useState(N),[m,A]=s.useState(v),[c,b]=s.useState(w);s.useEffect(()=>{o&&n(a=>({...a,mobile:o}))},[o]);const D=()=>{const a={};return(!r.mobile||!/^[0-9]{10}$/.test(r.mobile))&&(a.mobile="Please enter a valid 10-digit mobile number"),(!r.aadhaar_no||!/^[0-9]{12}$/.test(r.aadhaar_no))&&(a.aadhaar_no="Please enter a valid 12-digit Aadhaar number"),a},_=a=>{a.preventDefault();const t=D();if(Object.keys(t).length>0){h(t);return}u(!0),h({}),b(null),p.post("/admin/remitter-adhaar-verify",r,{preserveState:!0,preserveScroll:!0,onSuccess:x=>{S(x.props.apiData),A(x.props.dbData)},onError:x=>{b("Failed to verify Aadhaar")},onFinish:()=>u(!1)})},C=()=>{p.visit("/admin/remitter2/register-remitter",{method:"get",data:{mobile:r.mobile,aadhaarData:i,dbData:m},preserveState:!0,preserveScroll:!0})},E=a=>typeof a=="object"&&a!==null?JSON.stringify(a):a;return e.jsx(V,{children:e.jsx("div",{className:"max-w-full",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-md overflow-hidden border border-gray-100",children:[e.jsx("div",{className:"bg-gradient-to-tr from-gray-400 to-black py-4 px-6",children:e.jsx("h2",{className:"text-3xl font-semibold text-white",children:"Remitter Aadhaar Verification"})}),e.jsxs("form",{onSubmit:_,className:"p-6",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-6 mb-6",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"mobile",className:"flex items-center text-sm font-medium text-gray-600 mb-1",children:[e.jsx(k,{size:20,className:"mr-2 text-yellow-500"}),"Mobile Number"]}),e.jsx("input",{id:"mobile",type:"text",name:"mobile",value:r.mobile,onChange:a=>n(t=>({...t,mobile:a.target.value})),className:`w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all ${l.mobile?"border-red-500":""}`,required:!0,placeholder:"Enter 10-digit mobile number",maxLength:10}),l.mobile&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:l.mobile})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"aadhaar_no",className:"flex items-center text-sm font-medium text-gray-600 mb-1",children:[e.jsx(y,{size:20,className:"mr-2 text-yellow-500"}),"Aadhaar Number"]}),e.jsx("input",{id:"aadhaar_no",type:"text",name:"aadhaar_no",value:r.aadhaar_no,onChange:a=>n(t=>({...t,aadhaar_no:a.target.value})),className:`w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all ${l.aadhaar_no?"border-red-500":""}`,required:!0,placeholder:"Enter 12-digit Aadhaar number",maxLength:12}),l.aadhaar_no&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:l.aadhaar_no})]})]}),e.jsx("button",{type:"submit",disabled:d||!r.mobile||!r.aadhaar_no,className:"w-full bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium",children:d?e.jsxs("span",{className:"flex items-center justify-center",children:[e.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Verifying..."]}):"Verify Aadhaar"})]}),e.jsxs("div",{className:"px-6 pb-6",children:[c&&e.jsx("div",{className:"mt-4 p-4 bg-red-50 border border-red-100 rounded-lg",children:e.jsxs("p",{className:"text-red-600 text-sm flex items-center",children:[e.jsx(z,{size:16,className:"mr-2"}),c]})}),i&&e.jsxs("div",{className:"mt-4",children:[e.jsxs("h3",{className:"font-medium text-sm text-gray-700 mb-2 flex items-center",children:[e.jsx(y,{size:16,className:"mr-2"}),"API Response:"]}),e.jsx("div",{className:"border border-gray-200 rounded-lg shadow-md overflow-hidden",children:e.jsxs(F,{className:"w-full border-collapse",children:[e.jsx(R,{className:"bg-gray-100 text-white",children:e.jsxs(f,{children:[e.jsx(g,{className:"px-4 py-2 text-left",children:"Field"}),e.jsx(g,{className:"px-4 py-2 text-left",children:"Value"})]})}),e.jsx(T,{children:Object.entries(i).map(([a,t])=>e.jsxs(f,{className:"border-b border-gray-200",children:[e.jsx(j,{className:"px-4 py-2 font-medium",children:a}),e.jsx(j,{className:"px-4 py-2",children:E(t)})]},a))})]})})]}),m&&e.jsx("div",{className:"mt-4",children:e.jsx("button",{onClick:C,className:"mt-4 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium",children:"Next Step: Register Remitter →"})}),!i&&!m&&!c&&!d&&e.jsx("p",{className:"text-gray-500 text-sm italic",children:"Enter mobile and Aadhaar numbers and click verify to see details"})]})]})})})};export{K as default};
