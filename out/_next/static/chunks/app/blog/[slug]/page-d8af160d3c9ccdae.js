(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[308],{4729:function(e,t,r){Promise.resolve().then(r.bind(r,3629)),Promise.resolve().then(r.bind(r,873)),Promise.resolve().then(r.t.bind(r,5878,23)),Promise.resolve().then(r.t.bind(r,2972,23)),Promise.resolve().then(r.bind(r,4273))},3629:function(e,t,r){"use strict";var n=r(7437),s=r(2265),a=r(7261),c=r(4295),o=r(1273),l=r(9089);t.default=e=>{let{selectedBlog:t}=e,[r,i]=(0,s.useState)({name:"",email:"",comment:"",selectedBlog:t}),[u,m]=(0,s.useState)(!0),[d,f]=(0,s.useState)(!1),[p,x]=(0,s.useState)(!1);(0,s.useEffect)(()=>{m(!(r.name.length>=4))},[r]);let h={...r,selectedBlog:t},b=e=>{let{name:t,value:r,type:n,checked:s}=e.target;i(e=>({...e,[t]:"checkbox"===n?s:"name"===t?r.charAt(0).toUpperCase()+r.slice(1):r}))},y=async e=>{e.preventDefault(),f(!0);try{let e=await fetch("https://backend-rtp.onrender.com/api/send-comment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}),r=await e.json();e.ok?(x(!0),i({name:"",email:"",comment:"",selectedBlog:t})):a.Am.error(r.extraDetails||"Error submitting Form")}catch(e){console.error("Error:",e),a.Am.error("An unexpected error occurred. Please try again.")}finally{f(!1)}};return(0,n.jsx)("div",{className:"container contact-container px-0",children:(0,n.jsx)("div",{className:"row d-flex flex-column justify-content-center align-items-center w-100",children:(0,n.jsx)("div",{className:"col-12 w-100 contact-popup",children:p?(0,n.jsxs)("div",{className:"insider mt-3 rounded-4 shadow-none form-success-insider",children:[(0,n.jsxs)("p",{className:"text-center text-capitalize fw-bold p-3 rounded-4 text-black d-flex justify-content-center flex-column gap-2 align-items-center",children:[(0,n.jsx)(o.l_A,{className:"icon-success"}),"submitted successfully"]}),(0,n.jsxs)("p",{className:"text-center text-black mb-0",children:["Contact ",(0,n.jsx)("span",{className:"fw-bold",children:"Mr. Harsh"})," for further assistance:"," "]}),(0,n.jsxs)("div",{className:"w-100 bg-white py-2 d-flex flex-column justify-content-center align-items-center",children:[(0,n.jsxs)("a",{href:"tel:+91-9024337038",target:"_blank",className:"p-3 px-3 fw-bold social-icon w-auto",children:[(0,n.jsx)(c.tkl,{className:"mx-0 bg-black text-white p-2 fs-1 rounded-5 icon"})," ",(0,n.jsx)("span",{className:"px-2"}),"+91-9024337038"]}),(0,n.jsxs)("a",{href:"https://wa.me/919166555888",target:"_blank",className:" p-3 px-3 fw-bold social-icon w-auto",children:[(0,n.jsx)(c.ff9,{className:"mx-0 bg-black text-white p-2 fs-1 rounded-5 icon"})," ",(0,n.jsx)("span",{className:"px-2"}),"+91-9166555888"]}),(0,n.jsxs)("p",{className:"text-center package-form p-2 mx-3 w-100 mt-2",children:[" ",(0,n.jsx)("span",{className:"fw-bold text-uppercase",children:"Thankyou!"})]})]})]}):(0,n.jsxs)("form",{className:"d-flex flex-column gap-2 justify-content-center p-0",onSubmit:y,children:[(0,n.jsxs)("div",{className:"bg-tertary-down mt-3 p-2 rounded-4 d-flex flex-column justify-content-center align-items-center",children:[(0,n.jsx)("span",{className:"color-tertary bg-tertary-down rounded-5 p-2 my-2 d-flex justify-content-center align-items-center",children:(0,n.jsx)(l.diV,{})}),(0,n.jsxs)("h3",{className:"text-center text-capitalize",children:["comments ",(0,n.jsx)("span",{className:"fw-normal"})]}),(0,n.jsx)("p",{children:"No comments yet. Why don’t you start the discussion?"})]}),(0,n.jsxs)("div",{className:"row p-4",children:[(0,n.jsx)("div",{className:"col-12 my-2 w-100",children:(0,n.jsx)("textarea",{placeholder:"write a comment...",name:"comment",className:"w-100",cols:40,rows:2,value:r.comment,onChange:b})}),(0,n.jsx)("div",{className:"col-12 col-lg-4 col-md-4 col-sm-12 my-2",children:(0,n.jsx)("input",{type:"text",placeholder:"Name*",name:"name",required:!0,value:r.name,onChange:b,className:"w-100"})}),(0,n.jsx)("div",{className:"col-12 col-lg-4 col-md-4 my-2",children:(0,n.jsx)("input",{type:"email",placeholder:"Email*",name:"email",required:!0,value:r.email,onChange:b,className:"w-100"})}),(0,n.jsx)("div",{className:"col-12 col-lg-4 col-md-4 my-2",children:(0,n.jsx)("input",{type:"text",placeholder:"website",name:"website",required:!0,value:r.website,onChange:b,className:"w-100"})})]}),(0,n.jsx)("button",{type:"submit",disabled:u||d,className:"btn-submit mx-3 mb-2 ".concat(u||d?"submit-disabled":"submit-active"),children:d?(0,n.jsx)("div",{className:"loading-spinner"}):"Post Comment"})]})})})})}},873:function(e,t,r){"use strict";var n=r(7437),s=r(2265),a=r(2768);t.default=e=>{let{blogs:t,styles:r,autofocus:c=!1,placeholder:o}=e,[l,i]=(0,s.useState)(""),[u,m]=(0,s.useState)([]),d=e=>{window.location.href="/blog/".concat(e)};return(0,n.jsxs)("div",{className:"blog-search-bar w-100",children:[(0,n.jsxs)("div",{className:"w-100 d-flex justify-content-center align-items-center",children:[(0,n.jsx)("input",{type:"text",value:l,onChange:e=>{let r=e.target.value;i(r),r?m(t.filter(e=>e.heading.toLowerCase().includes(r.toLowerCase())||e.description.toLowerCase().includes(r.toLowerCase())||e.category.toLowerCase().includes(r.toLowerCase()))):m([])},placeholder:"".concat(o),className:"".concat(r),autoFocus:c})," ",l&&(0,n.jsx)("button",{className:"bg-tertary rounded-5 d-flex justify-content-center align-items-center p-2 input-clear-button",onClick:()=>{i(""),m([])},children:(0,n.jsx)(a.bjh,{})})]}),u.length>0&&(0,n.jsx)("ul",{className:"search-results mt-3",children:u.map(e=>(0,n.jsxs)("li",{onClick:()=>d(e.slug),className:"search-item",children:[e.heading,(0,n.jsx)("span",{className:"color-tertary fw-bold d-block",children:e.category})]},e.slug))}),l&&0===u.length&&(0,n.jsx)("ul",{className:"search-results mt-3",children:(0,n.jsx)("li",{className:"search-item no-results",children:"No results found"})})]})}},4273:function(e,t,r){"use strict";var n=r(6760),s=r.n(n),a=r(2265),c=r(7701),o=r(7437);let l=a.forwardRef((e,t)=>{let{bsPrefix:r,className:n,striped:a,bordered:l,borderless:i,hover:u,size:m,variant:d,responsive:f,...p}=e,x=(0,c.vE)(r,"table"),h=s()(n,x,d&&"".concat(x,"-").concat(d),m&&"".concat(x,"-").concat(m),a&&"".concat(x,"-").concat("string"==typeof a?"striped-".concat(a):"striped"),l&&"".concat(x,"-bordered"),i&&"".concat(x,"-borderless"),u&&"".concat(x,"-hover")),b=(0,o.jsx)("table",{...p,className:h,ref:t});if(f){let e="".concat(x,"-responsive");return"string"==typeof f&&(e="".concat(e,"-").concat(f)),(0,o.jsx)("div",{className:e,children:b})}return b});t.default=l},7701:function(e,t,r){"use strict";r.d(t,{SC:function(){return l},vE:function(){return o}});var n=r(2265);r(7437);let s=n.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:a,Provider:c}=s;function o(e,t){let{prefixes:r}=(0,n.useContext)(s);return e||r[t]||t}function l(){let{dir:e}=(0,n.useContext)(s);return"rtl"===e}},6760:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=a(t,r));return t}(r)))}return e}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0!==(r=(function(){return s}).apply(t,[]))&&(e.exports=r)}()},6231:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(s),c=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,s;n=t,s=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(m,o({attr:i({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,i({key:r},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var r,{attr:s,size:a,title:l}=e,u=function(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,c),m=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(s)}}},function(e){e.O(0,[7240,5452,7699,5706,6779,5878,7261,2971,2117,1744],function(){return e(e.s=4729)}),_N_E=e.O()}]);