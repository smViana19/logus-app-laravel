import{j as e,d as i,r as o}from"./app-6feb8627.js";import{L as d}from"./ApplicationLogo-159a7d87.js";import"./Dropdown-0840b961.js";function t({active:a=!1,className:s="",children:n,...r}){return e.jsx(i,{...r,className:"inline-flex items-center px-1 pt-1 leading-5 transition duration-150 ease-in-out focus:outline-none"+(a?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+s,children:n})}function h({user:a,header:s,children:n}){o.useState(!1);const r=window.location.pathname;return e.jsx("div",{className:"min-h-screen bg-gray-100",children:e.jsx("nav",{className:"bg-white border-b border-gray-100",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"flex justify-between h-16",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(i,{href:"/",children:e.jsx(d,{className:"block h-9 w-auto fill-current text-gray-800"})})}),e.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:[e.jsx(t,{borderPage:r==="/"?"1px solid black":"none",href:route("dashboard"),active:route().current("dashboard"),children:"Tela Principal"}),e.jsx(t,{borderPage:r==="/agenda"?"1px solid black":"none",href:route("agenda"),active:route().current("agenda"),children:"Agenda"})]})]})})})})})}export{h as A};
