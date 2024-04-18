import{j as e,a as w,d as a}from"./app-b90402a7.js";import{L as p}from"./ApplicationLogo-f49cb3f4.js";function x(){return e.jsx("div",{className:"rounded-md custum__container-print",children:e.jsx("img",{src:"",alt:"Print da tela Principal da aplicação web"})})}function t({children:s,centered:i}){return e.jsx("h2",{className:i?"text-3xl font-bold text-center":"text-3xl font-bold mb-8 w-1/2",children:s})}function n({typeInput:s,placeholderInput:i,typeBtn:o,valueBtn:d,btnBgColor:c,btnTextColor:m,inputBorder:u}){return e.jsxs("div",{class:"input-group",children:[e.jsx("input",{type:s,placeholder:i,class:"input",id:"Email",name:"Email",autocomplete:"off",style:{border:u}}),e.jsx("input",{typeBtn:o,value:d,class:"button--submit",style:{backgroundColor:c,color:m}})]})}function q({title:s}){return e.jsx("h3",{className:"text-xl mb-2 font-medium",children:s})}function r({namePlan:s,preco:i,paraQuem:o,funcionalidade1:d,funcionalidade2:c,funcionalidade3:m,backgroundColor:u,color:g,buttonBackgroundColor:b,buttonColor:v,btnBorder:N}){return e.jsxs("div",{className:"card-planos hover:scale-105 ease-in duration-300",style:{backgroundColor:u,color:g},children:[e.jsx("p",{children:s}),e.jsxs("h3",{className:"text-5xl font-bold mt-2 mb-4",children:[i," ",e.jsx("span",{className:"font-normal text-sm",children:"/ mês"})]}),e.jsx("p",{className:"mb-8 font-light",children:o}),e.jsxs("div",{className:"grid mb-8",children:[e.jsxs("div",{className:"mt-4 flex",children:[e.jsx("svg",{className:"mt-2 mr-4",xmlns:"http://www.w3.org/2000/svg",height:"12",width:"10.5",viewBox:"0 0 448 512",children:e.jsx("path",{d:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"})}),e.jsx("p",{className:"w-3/4",children:d})]}),e.jsxs("div",{className:"mt-4 flex",children:[e.jsx("svg",{className:"mt-2 mr-4",xmlns:"http://www.w3.org/2000/svg",height:"12",width:"10.5",viewBox:"0 0 448 512",children:e.jsx("path",{d:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"})}),e.jsx("p",{className:"w-3/4",children:c})]}),e.jsxs("div",{className:"mt-4 flex",children:[e.jsx("svg",{className:"mt-2 mr-4",xmlns:"http://www.w3.org/2000/svg",height:"12",width:"10.5",viewBox:"0 0 448 512",children:e.jsx("path",{d:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"})}),e.jsx("p",{className:"w-3/4",children:m})]})]}),e.jsx("button",{className:"font-semibold custum__btn-planos",style:{backgroundColor:b,color:v,border:N},children:"Começar agora"})]})}const h="/build/assets/installAppStore-ae6d9820.png",j="/build/assets/installGooglePlay-a2c588df.png",f="/build/assets/mockup-home-mobile-c5018d15.png";function l({text:s,title:i}){return e.jsxs("div",{className:"card-funcionalidades onhover px-4 py-2 mb-8",children:[e.jsx(q,{title:i}),e.jsx("p",{children:s})]})}function P({auth:s,laravelVersion:i,phpVersion:o}){return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Bem Vindo"}),e.jsx("div",{className:" bg-center bg-corPrincipal selection:bg-red-500 selection:text-white",children:e.jsx("header",{children:e.jsx("div",{className:"w-fullr",children:s.user?e.jsxs("div",{className:"bg-img",children:[e.jsxs("nav",{className:"py-4 nav__landing-page",children:[e.jsx("div",{children:e.jsx(a,{children:e.jsx(p,{})})}),e.jsxs("div",{children:[e.jsx(a,{href:"#home",className:"ms-4 font-medium text-white hover:text-neutral-500 uppercase border-link",children:"Home"}),e.jsx(a,{href:"#funcionalidades",className:"ms-4 font-medium text-white  hover:text-neutral-500 uppercase border-link",children:"Funcionalidades"}),e.jsx(a,{href:"#planos",className:"ms-4 font-medium text-white text-base  hover:text-neutral-500 uppercase",children:"Planos"})]}),e.jsxs("div",{children:[e.jsx(a,{href:route("login"),className:"ms-4 font-medium text-white  hover:text-neutral-500",children:"Entrar"}),e.jsx(a,{href:route("register"),className:"font-medium text-white  hover:text-neutral-500",id:"btnRegistrar",children:"Registrar"})]})]}),e.jsxs("main",{children:[e.jsxs("section",{id:"home",children:[e.jsx("h1",{className:"text-4xl font-bold text-white text-center mt-48 mb-32",children:"Conectando mentes, expandindo horizontes."}),e.jsx(n,{typeInput:"email",placeholderInput:"logus@study.com",typeBtn:"submit",valueBtn:"Obtenha o Lógus grátis"})]}),e.jsx(x,{}),e.jsxs("section",{id:"home",className:"container__app-mobile mt-16",children:[e.jsxs("div",{className:"mt-40",children:[e.jsx(t,{children:"Baixe também nosso aplicativo mobile"}),e.jsx("p",{className:"mt-4",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, facere autem veritatis pariatur, minus est fugit molestiae quisquam perferendis, temporibus optio possimus aliquam qui illo! Minima libero et magnam odio?"}),e.jsxs("div",{className:"flex justify-left gap-32 mt-16",children:[e.jsx("a",{href:"",children:e.jsx("img",{className:"w-32",src:j,alt:"Link para baixar o aplicativo android"})}),e.jsx("a",{href:"",children:e.jsx("img",{className:"w-32",src:h,alt:"Link para baixar o aplicativo IOS"})})]})]}),e.jsx("img",{className:"w-3/4",src:f,alt:""})]}),e.jsxs("section",{id:"funcionalidades",className:"mt-32 w-3/4 m-auto",children:[e.jsx(t,{centered:!0,children:"FUNCIONALIDADES"}),e.jsx("p",{className:"text-center mt-4 mb-24 w-auto",children:"Passe o mouse por cima dos titulos e veja nossas principais funcionalidades. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat perspiciatis ducimus modi. "}),e.jsxs("div",{className:"container__funcionalidades-grid",children:[e.jsxs("div",{children:[e.jsx(l,{title:"Postagem de Materiais",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid"}),e.jsx(l,{title:"Agenda",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid"}),e.jsx(l,{title:"Método Pomodoro",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid"})]}),e.jsx("img",{src:"",alt:"Print das funcionalidades"})]})]}),e.jsxs("section",{id:"planos",className:"mb-32",children:[e.jsx(t,{centered:!0,children:"PLANOS"}),e.jsx("p",{className:"text-center mb-24",children:"Escolha o plano perfeito para você"}),e.jsxs("div",{className:"grid grid-cols-3 w-4/5 m-auto gap-10",children:[e.jsx(r,{namePlan:"Free",preco:"R$ 0",paraQuem:"ldsfasdfasdfasdfasdfasdLorem ipsum dolor sit amet, consectetur adipiscing elit. ",funcionalidade1:"Número ilimitado de postagens e downloads",funcionalidade2:"Sem anúncios",funcionalidade3:"terceira funcionalidade"}),e.jsx(r,{backgroundColor:"#820AD1",color:"white",buttonBackgroundColor:"white",buttonColor:"#009379",btnBorder:"1px solid #009379",namePlan:"Premium",preco:"R$ 9,90",paraQuem:"O plano perfeito para estudantes que querem experimentar ao máximo seus estudos",funcionalidade1:"Número ilimitado de postagens e downloads",funcionalidade2:"Sem anúncios",funcionalidade3:"terceira funcionalidade"}),e.jsx(r,{namePlan:"Empresarial",preco:"R$ 120,00",paraQuem:"O plano ideial para empresas, principalmente escolas e facultades, de médio e grande porte",funcionalidade1:"Número ilimitado de postagens e downloads",funcionalidade2:"Sem anúncios",funcionalidade3:"terceira funcionalidade"})]})]})]}),e.jsxs("footer",{children:[e.jsxs("div",{className:"bg-[#820AD1] py-4",children:[e.jsx("h3",{className:"font-semibold text-xl text-white text-center my-8",children:"O que está esperando para se cadastrar??"}),e.jsx(n,{typeInput:"email",placeholderInput:"logus@study.com",typeBtn:"submit",valueBtn:"Obtenha o Lógus grátis",btnBgColor:"white",btnTextColor:"#830AD1",inputBorder:"1px solid #E3E3E3",placeholderColor:"white"})]}),e.jsx("div",{className:"bg-[#533680] text-white h-40",children:"footer"})]})]}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"bg-img",children:[e.jsxs("nav",{className:"py-4 nav__landing-page",children:[e.jsx("div",{children:e.jsx(a,{children:e.jsx(p,{})})}),e.jsxs("div",{children:[e.jsx(a,{href:"#home",className:"ms-4 font-medium text-white hover:text-neutral-500 uppercase border-link",children:"Home"}),e.jsx(a,{href:"#funcionalidades",className:"ms-4 font-medium text-white  hover:text-neutral-500 uppercase border-link",children:"Funcionalidades"}),e.jsx(a,{href:"#planos",className:"ms-4 font-medium text-white text-base  hover:text-neutral-500 uppercase",children:"Planos"})]}),e.jsxs("div",{children:[e.jsx(a,{href:route("login"),className:"ms-4 font-medium text-white  hover:text-neutral-500",children:"Entrar"}),e.jsx(a,{href:route("register"),className:"font-medium text-white  hover:text-neutral-500",id:"btnRegistrar",children:"Registrar"})]})]}),e.jsxs("main",{children:[e.jsxs("section",{id:"home",children:[e.jsx("h1",{className:"text-4xl font-bold text-white text-center mt-48 mb-32",children:"Conectando mentes, expandindo horizontes."}),e.jsx(n,{typeInput:"email",placeholderInput:"logus@study.com",typeBtn:"submit",valueBtn:"Obtenha o Lógus grátis"})]}),e.jsx(x,{}),e.jsxs("section",{id:"home",className:"container__app-mobile mt-16",children:[e.jsxs("div",{className:"mt-40",children:[e.jsx(t,{children:"Baixe também nosso aplicativo mobile"}),e.jsx("p",{className:"mt-4",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, facere autem veritatis pariatur, minus est fugit molestiae quisquam perferendis, temporibus optio possimus aliquam qui illo! Minima libero et magnam odio?"}),e.jsxs("div",{className:"flex justify-left gap-32 mt-16",children:[e.jsx("a",{href:"",children:e.jsx("img",{className:"w-32",src:j,alt:"Link para baixar o aplicativo android"})}),e.jsx("a",{href:"",children:e.jsx("img",{className:"w-32",src:h,alt:"Link para baixar o aplicativo IOS"})})]})]}),e.jsx("img",{className:"w-3/4",src:f,alt:""})]}),e.jsxs("section",{id:"funcionalidades",className:"mt-32 w-3/4 m-auto",children:[e.jsx(t,{centered:!0,children:"FUNCIONALIDADES"}),e.jsx("p",{className:"text-center mt-4 mb-24 w-auto",children:"Passe o mouse por cima dos titulos e veja nossas principais funcionalidades. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat perspiciatis ducimus modi. "}),e.jsxs("div",{className:"container__funcionalidades-grid",children:[e.jsxs("div",{children:[e.jsx(l,{title:"Postagem de Materiais",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid"}),e.jsx(l,{title:"Agenda",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid"}),e.jsx(l,{title:"Método Pomodoro",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid"})]}),e.jsx("img",{src:"",alt:"Print das funcionalidades"})]})]}),e.jsxs("section",{id:"planos",className:"mb-32",children:[e.jsx(t,{centered:!0,children:"PLANOS"}),e.jsx("p",{className:"text-center mb-24",children:"Escolha o plano perfeito para você"}),e.jsxs("div",{className:"grid grid-cols-3 w-4/5 m-auto gap-10",children:[e.jsx(r,{namePlan:"Free",preco:"R$ 0",paraQuem:"ldsfasdfasdfasdfasdfasdLorem ipsum dolor sit amet, consectetur adipiscing elit. ",funcionalidade1:"Número ilimitado de postagens e downloads",funcionalidade2:"Sem anúncios",funcionalidade3:"terceira funcionalidade"}),e.jsx(r,{backgroundColor:"#820AD1",color:"white",buttonBackgroundColor:"white",buttonColor:"#009379",btnBorder:"1px solid #009379",namePlan:"Premium",preco:"R$ 9,90",paraQuem:"O plano perfeito para estudantes que querem experimentar ao máximo seus estudos",funcionalidade1:"Número ilimitado de postagens e downloads",funcionalidade2:"Sem anúncios",funcionalidade3:"terceira funcionalidade"}),e.jsx(r,{namePlan:"Empresarial",preco:"R$ 120,00",paraQuem:"O plano ideial para empresas, principalmente escolas e facultades, de médio e grande porte",funcionalidade1:"Número ilimitado de postagens e downloads",funcionalidade2:"Sem anúncios",funcionalidade3:"terceira funcionalidade"})]})]})]}),e.jsxs("footer",{children:[e.jsxs("div",{className:"bg-[#820AD1] py-4",children:[e.jsx("h3",{className:"font-semibold text-xl text-white text-center my-8",children:"O que está esperando para se cadastrar??"}),e.jsx(n,{typeInput:"email",placeholderInput:"logus@study.com",typeBtn:"submit",valueBtn:"Obtenha o Lógus grátis",btnBgColor:"white",btnTextColor:"#830AD1",inputBorder:"1px solid #E3E3E3",placeholderColor:"white"})]}),e.jsx("div",{className:"bg-[#533680] text-white h-40",children:"footer"})]})]})})})})})]})}export{P as default};