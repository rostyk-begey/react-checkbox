/*! For license information please see main.8d5fe2dd.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-checkbox-hook-example"]=this["webpackJsonpreact-checkbox-hook-example"]||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),r=n(1),c=n.n(r);function l(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,o,r=n.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)c.push(i.value)}catch(l){o={error:l}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return c}function u(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(l(arguments[e]));return t}function d(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return u(new Set(u(t,e)))}function a(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=new Set(t);return e.forEach((function(t){i.delete(t)})),u(i)}var p=function(t,e,n){if(!e.options||0===e.options.length)return t;var i=function t(e){return e.reduce((function(e,n){var i=n.id,o=n.options;return u(e,t(void 0===o?[]:o),[i])}),[])}(e.options);return n?d.apply(void 0,u([t],i)):a.apply(void 0,u([t],i))},s=function(t,e){return function t(e){return e.reduce((function(e,n){var i;return(null===n||void 0===n?void 0:n.options)&&(null===(i=null===n||void 0===n?void 0:n.options)||void 0===i?void 0:i.length)>0&&(e.unshift(n),e.unshift.apply(e,u(t(n.options)))),e}),[])}(e).reduce((function(t,e){var n=t.selectedOptions,i=t.indeterminateOptions,o=e.id,r=function(t,e){var n=t.options,i=null===n||void 0===n?void 0:n.some((function(t){var n=t.id;return e.includes(n)})),o=null===n||void 0===n?void 0:n.some((function(t){var n=t.id;return!e.includes(n)}));return{isChecked:!o,isIndeterminate:i&&o}}(e,n),c=r.isChecked,l=r.isIndeterminate;return{selectedOptions:c?d(n,o):a(n,o),indeterminateOptions:l?d(i,o):a(i,o)}}),{selectedOptions:t,indeterminateOptions:[]})},f=function(t){var e=t.options,n=t.defaultSelectedOptions,o=void 0===n?[]:n,r=Object(i.useRef)(o),c=l(Object(i.useState)([]),2),u=c[0],f=c[1],v=l(Object(i.useState)([]),2),O=v[0],h=v[1];Object(i.useEffect)((function(){var t=s(o,e),n=t.selectedOptions,i=t.indeterminateOptions;f(n),h(i),r.current=o}),[o===r.current]);var m=Object(i.useCallback)((function(t,n){var i,o,r=u;r=function(t,e,n){var i=e.id;return n?d(t,i):a(t,i)}(r,t,n),r=p(r,t,n),r=(i=s(r,e)).selectedOptions,o=i.indeterminateOptions,f(r),h(o)}),[e,u]);return{selectedOptions:u,indeterminateOptions:O,handleOptionChange:m}},v=function(t){var e=t.children,n=t.indeterminate,r=t.checked,c=t.onChange,l=Object(i.useRef)();return Object(i.useEffect)((function(){l.current&&(l.current.indeterminate=n)}),[r,n]),o.a.createElement("label",null,o.a.createElement("input",{ref:l,type:"checkbox",checked:r,onChange:c}),e)},O=function(){var t=[{id:-1,title:"All",options:[{id:0,title:"Option 1"},{id:1,title:"Option 2"},{id:2,title:"Option 3"},{id:3,title:"Option 4",options:[{id:30,title:"Option 4.1"},{id:31,title:"Option 4.2"},{id:32,title:"Option 4.3"},{id:33,title:"Option 4.4",options:[{id:330,title:"Option 4.4.1"},{id:331,title:"Option 4.4.2"},{id:332,title:"Option 4.4.3"},{id:333,title:"Option 4.4.4",options:[{id:3330,title:"Option 4.4.4.1"},{id:3331,title:"Option 4.4.4.2"},{id:3332,title:"Option 4.4.4.3"},{id:3333,title:"Option 4.4.4.4"}]}]}]}]}],e=f({options:t,defaultSelectedOptions:[3330,3331,3332]}),n=e.selectedOptions,i=e.indeterminateOptions,r=e.handleOptionChange;return o.a.createElement("div",null,function t(e){return e.map((function(e){var c;return o.a.createElement("div",{key:e.id},o.a.createElement(v,{checked:n.includes(e.id),indeterminate:i.includes(e.id),onChange:function(t){return r(e,t.target.checked)}},e.title),o.a.createElement("br",null),(null===(c=e.options)||void 0===c?void 0:c.length)>0&&t(e.options))}))}(t))};n(9);c.a.render(o.a.createElement(O,null),document.getElementById("root"))},2:function(t,e,n){t.exports=n(10)},9:function(t,e,n){}},[[2,1,2]]]);
//# sourceMappingURL=main.8d5fe2dd.chunk.js.map