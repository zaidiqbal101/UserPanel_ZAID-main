import{r as t,j as e,a as C}from"./app-gHG3FWNm.js";import{A as T}from"./AdminLayout-ig8rvVGB.js";import{T as A,a as D,b as y,c as N,d as R,e as v}from"./table-DDhMHMcC.js";import{S as z}from"./signal-fnnmHLcX.js";import{P as k}from"./phone-CZS1T7DA.js";import{B as F}from"./banknote-DTU_Ny7O.js";import{C as M}from"./circle-alert-CoVS4sQd.js";import{C as B}from"./circle-check-big-CM-pD5Qt.js";import{C as E}from"./code-DL1hqGf3.js";import"./x-Dij5_qHA.js";import"./createLucideIcon-Cehs4-sn.js";import"./utils-CiMRq3MP.js";import"./clsx-B-dksMZM.js";const X=()=>{const[a,u]=t.useState({operator:"",canumber:"",amount:""}),[x,p]=t.useState(!1),[b,o]=t.useState(""),[g,i]=t.useState(""),[c,h]=t.useState(null),w=[{label:"Airtel",value:11},{label:"Airtel Digital TV",value:12},{label:"BSNL",value:13},{label:"Dish TV",value:14},{label:"Idea",value:4},{label:"Jio",value:18},{label:"MTNL",value:35},{label:"MTNL Delhi",value:33},{label:"MTNL Mumbai",value:34},{label:"Sun Direct",value:27},{label:"Tata Sky",value:8},{label:"Videocon D2H",value:10},{label:"Vodafone",value:22}],m=(r,l)=>{u(n=>({...n,[r]:l})),o(""),i("")},S=async r=>{var l,n,f,j;r.preventDefault(),p(!0),o(""),i(""),h(null);try{const s=await C.post("/admin/recharge/process",{operator:parseInt(a.operator),canumber:a.canumber,amount:parseInt(a.amount)});console.log("API Response:",s.data),h(s.data),s.data.status?(i("Recharge processed successfully!"),u({operator:"",canumber:"",amount:""})):o(s.data.message||"Failed to process recharge")}catch(s){console.error("Error submitting form:",s);const d=((n=(l=s.response)==null?void 0:l.data)==null?void 0:n.message)||((j=(f=s.response)==null?void 0:f.data)==null?void 0:j.errors)||"Failed to process recharge";o(typeof d=="object"?JSON.stringify(d):d)}finally{p(!1)}};return e.jsx(T,{children:e.jsx("div",{className:"max-w-full",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-md overflow-hidden border border-gray-100",children:[e.jsx("div",{className:"bg-gradient-to-tr from-gray-400 to-black py-4 px-6",children:e.jsx("h2",{className:"text-3xl font-semibold text-white",children:"Do Recharge"})}),e.jsxs("form",{onSubmit:S,className:"p-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"operator",className:"flex items-center text-sm font-medium text-gray-600 mb-1",children:[e.jsx(z,{size:20,className:"mr-2 text-green-500"}),"Operator"]}),e.jsxs("select",{id:"operator",value:a.operator,onChange:r=>m("operator",r.target.value),className:"w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all",required:!0,children:[e.jsx("option",{value:"",children:"Select Operator"}),w.map(r=>e.jsx("option",{value:r.value,children:r.label},r.value))]})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"canumber",className:"flex items-center text-sm font-medium text-gray-600 mb-1",children:[e.jsx(k,{size:20,className:"mr-2 text-yellow-500"}),"Number"]}),e.jsx("input",{id:"canumber",type:"text",value:a.canumber,onChange:r=>m("canumber",r.target.value),className:"w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all",required:!0,placeholder:"Enter Mobile Number"})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"amount",className:"flex items-center text-sm font-medium text-gray-600 mb-1",children:[e.jsx(F,{size:20,className:"mr-2 text-blue-500"}),"Amount"]}),e.jsx("input",{id:"amount",type:"number",value:a.amount,onChange:r=>m("amount",r.target.value),className:"w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all",required:!0,min:"1",placeholder:"Enter Amount"})]})]}),e.jsx("button",{type:"submit",disabled:x,className:"w-full bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium",children:x?e.jsxs("span",{className:"flex items-center justify-center",children:[e.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Processing..."]}):"Process Recharge"})]}),e.jsxs("div",{className:"px-6 pb-6",children:[b&&e.jsx("div",{className:"mt-4 p-4 bg-red-50 border border-red-100 rounded-lg",children:e.jsxs("p",{className:"text-red-600 text-sm flex items-center",children:[e.jsx(M,{size:16,className:"mr-2"}),b]})}),g&&e.jsx("div",{className:"mt-4 p-4 bg-green-50 border border-green-100 rounded-lg",children:e.jsxs("p",{className:"text-green-600 text-sm flex items-center",children:[e.jsx(B,{size:16,className:"mr-2"}),g]})}),c&&c&&e.jsxs("div",{className:"mt-4",children:[e.jsxs("h3",{className:"font-medium text-sm text-gray-700 mb-2 flex items-center",children:[e.jsx(E,{size:16,className:"mr-2"}),"API Response :"]}),e.jsx("div",{className:"border border-gray-200 rounded-lg shadow-md overflow-hidden",children:e.jsxs(A,{className:"w-full border-collapse",children:[e.jsx(D,{className:"bg-sky-500 text-white",children:e.jsxs(y,{children:[e.jsx(N,{className:"px-4 py-2 text-left",children:"Key"}),e.jsx(N,{className:"px-4 py-2 text-left",children:"Value"})]})}),e.jsx(R,{children:Object.entries(c).map(([r,l])=>e.jsxs(y,{className:"border-b border-gray-200",children:[e.jsx(v,{className:"px-4 py-2 font-medium",children:r}),e.jsx(v,{className:"px-4 py-2",children:String(l)})]},r))})]})})]})]})]})})})};export{X as default};
