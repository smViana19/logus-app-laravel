import{q as h,W as v,j as e,d as j}from"./app-3877ee08.js";import{T as o,I as n}from"./TextInput-b0614c10.js";import{I as m}from"./InputLabel-a527fc15.js";import{B as g}from"./BotaoPrincipal-47fd8898.js";import{q as N}from"./transition-ce534070.js";function F({mustVerifyEmail:l,status:u,className:c=""}){const s=h().props.auth.user,{data:t,setData:i,patch:d,errors:r,processing:x,recentlySuccessful:f}=v({name:s.name,email:s.email}),p=a=>{a.preventDefault(),d(route("profile.update"))};return e.jsxs("section",{className:c,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Informações pessoais"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Atualize seu email e seu usuário."})]}),e.jsxs("form",{onSubmit:p,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"name",value:"Name"}),e.jsx(o,{id:"name",className:"mt-1 block w-full",value:t.name,onChange:a=>i("name",a.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e.jsx(n,{className:"mt-2",message:r.name})]}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"email",value:"Email"}),e.jsx(o,{id:"email",type:"email",className:"mt-1 block w-full",value:t.email,onChange:a=>i("email",a.target.value),required:!0,autoComplete:"username"}),e.jsx(n,{className:"mt-2",message:r.email})]}),l&&s.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm mt-2 text-gray-800",children:["Seu email nao foi verificado corretamente! Tente Novamente",e.jsx(j,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Clique aqui para receber novamente a confirmação do email."})]}),u==="verification-link-sent"&&e.jsx("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A nova verificação foi enviada ao seu email."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(g,{disabled:x,children:"Atualizar"}),e.jsx(N,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-green-600",children:"Salvo com sucesso."})})]})]})]})}export{F as default};
