import{r,j as e,d as p}from"./app-97db538b.js";import{q as x}from"./transition-6e6f1912.js";const c=r.createContext(),i=({children:t})=>{const[o,n]=r.useState(!1),s=()=>{n(a=>!a)};return e.jsx(c.Provider,{value:{open:o,setOpen:n,toggleOpen:s},children:e.jsx("div",{className:"relative",children:t})})},u=({children:t})=>{const{open:o,setOpen:n,toggleOpen:s}=r.useContext(c);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:s,children:t}),o&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)})]})},m=({align:t="left",width:o="48",contentClasses:n="py-1 bg-white",children:s})=>{const{open:a,setOpen:g}=r.useContext(c);let l="origin-top";t==="left"?l="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(l="ltr:origin-top-right rtl:origin-top-left end-0");let d="";return o==="48"&&(d="w-48"),e.jsx(e.Fragment,{children:e.jsx(x,{as:r.Fragment,show:a,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${l} ${d}`,onClick:()=>g(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+n,children:s})})})})},f=({className:t="",children:o,...n})=>e.jsx(p,{...n,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+t,children:o});i.Trigger=u;i.Content=m;i.Link=f;const v=i;export{v as D};
