import{j as u,r as s}from"./app-a2da0922.js";function a({message:t,className:r="",...e}){return t?u.jsx("p",{...e,className:"text-sm text-yellow-600 "+r,children:t}):null}const x=s.forwardRef(function({type:r="text",className:e="",isFocused:c=!1,...f},n){const o=n||s.useRef();return s.useEffect(()=>{c&&o.current.focus()},[]),u.jsx("input",{...f,type:r,className:"border-gray-300 focus:border-indigo-00 focus:ring-indigo-500 rounded-md shadow-sm "+e,ref:o})});export{a as I,x as T};
