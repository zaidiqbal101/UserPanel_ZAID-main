import{r as c,a as T,j as e}from"./app-gHG3FWNm.js";import{A as I}from"./AdminLayout-ig8rvVGB.js";import{T as L,a as z,b,c as a,d as R,e as t}from"./table-DDhMHMcC.js";import{c as A}from"./createLucideIcon-Cehs4-sn.js";import{S as F}from"./search-DSrRWYy7.js";import{C as v}from"./circle-alert-CoVS4sQd.js";import{C as M}from"./code-DL1hqGf3.js";import"./x-Dij5_qHA.js";import"./utils-CiMRq3MP.js";import"./clsx-B-dksMZM.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]],w=A("PackageOpen",E),G=()=>{const[n,u]=c.useState(""),[i,g]=c.useState(""),[y,C]=c.useState([]),[d,m]=c.useState([]),[x,j]=c.useState(!1),[p,o]=c.useState(null);c.useEffect(()=>{k()},[]);const k=async()=>{var s,r,f,N;j(!0),o(null);try{const l=await T.get("/rechargetransactions");console.log("Transactions:",l.data),C(l.data.transactions||[]),m(l.data.transactions||[])}catch(l){console.error("Error fetching transactions:",l);const h=((r=(s=l.response)==null?void 0:s.data)==null?void 0:r.message)||((N=(f=l.response)==null?void 0:f.data)==null?void 0:N.errors)||"Failed to fetch transactions";o(typeof h=="object"?JSON.stringify(h):h)}finally{j(!1)}},D=()=>{let s=[...y];n.trim()&&(s=s.filter(r=>r.referenceid.toLowerCase().includes(n.toLowerCase()))),i&&(s=s.filter(r=>new Date(r.created_at).toISOString().split("T")[0]===i)),m(s),s.length===0?o(`No transactions found matching the ${n&&i?"reference ID and date":n?"reference ID":"selected date"}`):o(null)},S=s=>s?new Date(s).toLocaleString():"";return e.jsx(I,{children:e.jsx("div",{className:"max-w-full",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-md overflow-hidden border border-gray-100",children:[e.jsx("div",{className:"bg-gradient-to-tr from-gray-400 to-black py-4 px-6",children:e.jsx("h2",{className:"text-3xl font-semibold text-white",children:"Recharge Transactions"})}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-6 space-y-4",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"referenceId",className:"flex items-center text-sm font-medium text-gray-600 mb-1",children:[e.jsx(w,{size:20,className:"mr-2 text-blue-500"}),"Search by Reference ID"]}),e.jsx("input",{id:"referenceId",type:"text",placeholder:"Enter Reference ID",value:n,onChange:s=>u(s.target.value),className:"w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"dateFilter",className:"flex items-center text-sm font-medium text-gray-600 mb-1",children:[e.jsx(w,{size:20,className:"mr-2 text-blue-500"}),"Search by Date"]}),e.jsx("input",{id:"dateFilter",type:"date",value:i,onChange:s=>g(s.target.value),className:"w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:D,className:"bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium flex items-center",children:[e.jsx(F,{size:16,className:"mr-2"}),"Search"]}),e.jsx("button",{onClick:()=>{u(""),g(""),m(y),o(null)},className:"bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-colors font-medium",children:"Clear"})]})]}),x&&e.jsx("div",{className:"flex justify-center my-6",children:e.jsxs("svg",{className:"animate-spin h-8 w-8 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),p&&!x&&e.jsx("div",{className:"p-4 my-4 bg-red-50 border border-red-100 rounded-lg",children:e.jsxs("p",{className:"text-red-600 text-sm flex items-center",children:[e.jsx(v,{size:16,className:"mr-2"}),p]})}),!x&&d.length>0&&e.jsxs("div",{className:"mt-4 overflow-x-auto",children:[e.jsxs("h3",{className:"font-medium text-sm text-gray-700 mb-2 flex items-center",children:[e.jsx(M,{size:16,className:"mr-2"}),"Recharge Transactions (",d.length,")"]}),e.jsxs(L,{className:"w-full border-collapse",children:[e.jsx(z,{className:"bg-sky-500 text-white",children:e.jsxs(b,{children:[e.jsx(a,{className:"px-4 py-2 text-left",children:"ID"}),e.jsx(a,{className:"px-4 py-2 text-left",children:"Operator"}),e.jsx(a,{className:"px-4 py-2 text-left",children:"CA Number"}),e.jsx(a,{className:"px-4 py-2 text-left",children:"Amount"}),e.jsx(a,{className:"px-4 py-2 text-left",children:"Reference ID"}),e.jsx(a,{className:"px-4 py-2 text-left",children:"Status"}),e.jsx(a,{className:"px-4 py-2 text-left",children:"Response Code"}),e.jsx(a,{className:"px-4 py-2 text-left",children:"Operator ID"}),e.jsx(a,{className:"px-4 py-2 text-left",children:"Ack No"}),e.jsx(a,{className:"px-4 py-2 text-left",children:"Message"}),e.jsx(a,{className:"px-4 py-2 text-left",children:"Date"})]})}),e.jsx(R,{children:d.map(s=>e.jsxs(b,{className:"border-b border-gray-200 hover:bg-gray-50",children:[e.jsx(t,{className:"px-4 py-2",children:s.id}),e.jsx(t,{className:"px-4 py-2",children:s.operator}),e.jsx(t,{className:"px-4 py-2",children:s.canumber}),e.jsxs(t,{className:"px-4 py-2",children:["₹",parseFloat(s.amount).toFixed(2)]}),e.jsx(t,{className:"px-4 py-2",children:s.referenceid}),e.jsx(t,{className:"px-4 py-2",children:e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${s.status==="success"?"bg-green-100 text-green-800":s.status==="failed"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:s.status})}),e.jsx(t,{className:"px-4 py-2",children:s.response_code}),e.jsx(t,{className:"px-4 py-2",children:s.operatorid}),e.jsx(t,{className:"px-4 py-2",children:s.ackno}),e.jsx(t,{className:"px-4 py-2",children:s.message}),e.jsx(t,{className:"px-4 py-2",children:S(s.created_at)})]},s.id))})]})]}),!x&&d.length===0&&!p&&e.jsxs("div",{className:"text-center py-10 text-gray-500",children:[e.jsx("div",{className:"flex justify-center mb-4",children:e.jsx(v,{size:40,className:"text-gray-400"})}),e.jsx("p",{children:"No transactions found."})]})]})]})})})};export{G as default};
