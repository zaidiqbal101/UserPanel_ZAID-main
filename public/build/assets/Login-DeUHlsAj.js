import{r as a,m as N,j as e,a as k}from"./app-3K-Dplk5.js";import{C as h}from"./circle-alert-SpE3nw4N.js";import{E,a as S}from"./eye-C215ke2q.js";import{L as f}from"./loader-circle-fq1L7mLA.js";import"./createLucideIcon-8NaSl7cU.js";function A(){var g;const[l,p]=a.useState(!1),[b,i]=a.useState("idle"),[m,c]=a.useState(null),{data:n,setData:o,errors:d,setError:j,clearErrors:w}=N({email:"",password:"",remember:!1,gps_location:null,device_id:null}),[u,x]=a.useState(!1);(g=document.head.querySelector('meta[name="csrf-token"]'))==null||g.content,a.useEffect(()=>{o("device_id",(()=>{const s=window.navigator,t=window.screen,v=[s.userAgent,t.height,t.width,t.colorDepth,new Date().getTimezoneOffset()];return btoa(v.join("|")).substring(0,32)})())},[]),a.useEffect(()=>{navigator.geolocation?(i("loading"),navigator.geolocation.getCurrentPosition(r=>{const s=`${r.coords.latitude},${r.coords.longitude}`;o("gps_location",s),i("success")},r=>{console.error("Error getting location:",r.message),i("error")},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):(console.log("Geolocation is not supported by this browser."),i("error"))},[]);const y=async r=>{r.preventDefault(),x(!0),c(null),w();try{const s=await k.post("/auth/check",{...n});s.data.status==="OK"&&(window.location.href=s.data.redirect)}catch(s){console.error("Error during login:",s),s.response?s.response.data.errors?Object.keys(s.response.data.errors).forEach(t=>{j(t,s.response.data.errors[t][0])}):s.response.data.message&&c(s.response.data.message):c("Network error. Please try again.")}finally{x(!1)}};return e.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4",children:e.jsxs("div",{className:"max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"mt-2 text-center text-3xl font-extrabold text-gray-900",children:"Welcome to User Panel"}),e.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Please sign in to your account"})]}),m&&e.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(h,{className:"h-5 w-5 mr-2"}),e.jsx("span",{className:"block sm:inline",children:m})]})}),Object.keys(d).length>0&&e.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(h,{className:"h-5 w-5 mr-2"}),e.jsx("span",{className:"block sm:inline",children:d.email||d.password||"Please correct the errors below"})]})}),e.jsxs("form",{className:"mt-8 space-y-6",onSubmit:y,children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),e.jsx("input",{id:"email",type:"email",required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:n.email,onChange:r=>o("email",r.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{id:"password",type:l?"text":"password",required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:n.password,onChange:r=>o("password",r.target.value)}),e.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>p(!l),children:l?e.jsx(E,{className:"h-5 w-5 text-gray-400"}):e.jsx(S,{className:"h-5 w-5 text-gray-400"})})]})]})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{id:"remember",type:"checkbox",className:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded",checked:n.remember,onChange:r=>o("remember",r.target.checked)}),e.jsx("label",{htmlFor:"remember",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]})}),b==="loading"&&e.jsxs("div",{className:"flex items-center justify-center text-sm text-gray-500",children:[e.jsx(f,{className:"h-4 w-4 mr-2 animate-spin"}),e.jsx("span",{children:"Getting location..."})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",disabled:u,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50",children:u?e.jsx(f,{className:"h-5 w-5 animate-spin"}):"Sign in"})})]})]})})}export{A as default};
