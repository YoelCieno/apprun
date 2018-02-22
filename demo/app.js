!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.apprun=t():e.apprun=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(4),u=n(6);t.Component=u.Component;var l=n(7),a=n(2);t.on=a.on,t.update=a.update,r.default.createElement=o.createElement,r.default.render=o.render,r.default.start=function(e,t,n,r,o){var l=Object.assign(o||{},{render:!0,global_event:!0}),a=new u.Component(t,n,r);return a.mount(e,l),a};var i=r.default;"object"==typeof window&&(window.app&&window.app.start?i=window.app:(window.app=i,document.addEventListener("DOMContentLoaded",function(){return new l.default}))),t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._events={}}return e.prototype.on=function(e,t,n){void 0===n&&(n={}),n.debug&&console.log("on: "+e),this._events[e]=this._events[e]||[],this._events[e].push({fn:t,options:n})},e.prototype.run=function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this._events[e];console.assert(!!o,"No subscriber for event: "+e),o&&(this._events[e]=o.filter(function(r){var o=r.fn,u=r.options;return u.delay?t.delay(e,o,n,u):(u.debug&&console.log("run: "+e,n),o.apply(t,n)),!r.options.once}))},e.prototype.delay=function(e,t,n,r){var o=this;r._t&&clearTimeout(r._t),r._t=setTimeout(function(){clearTimeout(r._t),r.debug&&console.log("run-delay "+r.delay+":"+e,n),t.apply(o,n)},r.delay)},e}();t.App=r,t.default=new r},function(e,t,n){"use strict";function r(e,n){return void 0===n&&(n={}),function(r,o,u){return e=o+(e?","+e:""),t.Reflect.defineMetadata("apprun-update:"+e,{name:e,action:[u.value,n]},r),u}}function o(e,n){return void 0===n&&(n={}),function(n,r){e=r+(e?","+e:""),t.Reflect.defineMetadata("apprun-update:"+e,{name:e,key:r},n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Reflect={meta:new WeakMap,defineMetadata:function(e,t,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[e]=t},getMetadataKeys:function(e){return e=Object.getPrototypeOf(e),this.meta.get(e)?Object.keys(this.meta.get(e)):[]},getMetadata:function(e,t){return t=Object.getPrototypeOf(t),this.meta.get(t)?this.meta.get(t)[e]:null}},t.update=r,t.on=o},function(e,t,n){"use strict";function r(e,t){f=0,t&&e&&(e.firstChild?u(e.firstChild,t):e.appendChild(a(t)))}function o(e,t){return e.nodeName===(""+(t.tag||"")).toUpperCase()}function u(e,t){if(console.assert(!!e),!o(e,t))return void e.parentNode.replaceChild(a(t),e);for(var n=Math.min(e.childNodes.length,t.children.length),r=0;r<n;r++){var i=t.children[r],d=e.childNodes[r];if("string"==typeof i)d.textContent!==i&&(3===d.nodeType?d.textContent=i:e.replaceChild(l(i),d));else{var s=i.props&&i.props.key;if(s)if(d.key===s)u(e.childNodes[r],i);else{var f=s&&p[s];f?(e.replaceChild(f,d),e.appendChild(d),u(e.childNodes[r],i)):(e.appendChild(a(t),d),u(e.childNodes[r],i))}else u(e.childNodes[r],i)}}for(var h=e.childNodes.length;h>n;)e.removeChild(e.lastChild),h--;if(t.children.length>n){for(var m=document.createDocumentFragment(),r=n;r<t.children.length;r++)m.appendChild(a(t.children[r]));e.appendChild(m)}c(e,t.props)}function l(e){if(0===e.indexOf("_html:")){var t=document.createElement("div");return t.insertAdjacentHTML("afterbegin",e.substring(6)),t}return document.createTextNode(e)}function a(e){if(console.assert(null!==e&&void 0!==e),"string"==typeof e)return l(e);if(!e.tag)return l(JSON.stringify(e));var t="svg"===e.tag?document.createElementNS("http://www.w3.org/2000/svg",e.tag):document.createElement(e.tag);return c(t,e.props),e.children&&e.children.forEach(function(e){return t.appendChild(a(e))}),t}function i(e,t){var n={};return e&&Object.keys(e).forEach(function(e){return n[e]=""}),t&&Object.keys(t).forEach(function(e){return n[e]=t[e]}),n}function c(e,t){console.assert(!!e);var n=e[s]||{};t=i(n,t),e[s]=t;for(var r in t){var o=t[r];if(n[r]!==o)if("style"===r){e.style.cssText&&(e.style.cssText="");for(var u in o)e.style[u]!==o[u]&&(e.style[u]=o[u])}else e[r]!==o&&(e[r]=o),"key"===r&&o&&(p[o]=e)}}Object.defineProperty(t,"__esModule",{value:!0});var d=n(5),s="_props";t.createElement=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=[],u=function(e){null!==e&&void 0!==e&&""!==e&&o.push("function"==typeof e||"object"==typeof e?e:""+e)};if(n.forEach(function(e){Array.isArray(e)?e.forEach(function(e){return u(e)}):u(e)}),"string"==typeof e)return{tag:e,props:t,children:o};if(Object.getPrototypeOf(e).name){var l=t&&t.id||"_"+e.name+"_"+ ++f;return d.default(e,l,t)}return e(t,o)};var f=0,p={};t.updateElement=r,t.render=r,t.default={createElement:t.createElement,updateElement:t.updateElement}},function(e,t,n){"use strict";function r(e,t){console.assert(!!e),o.updateElement(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3);t.createElement=o.createElement,t.render=r},function(e,t,n){"use strict";function r(e,t,n){var r=u[t]?u[t]:u[t]=new e(n).mount(t);return o.default.createElement("div",{id:t},r.render&&r.render())}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u={};t.default=r},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=n(2),l=function(){function e(e,t,n,u){var l=this;this.state=e,this.view=t,this.update=n,this.options=u,this._app=new o.App,this._history=[],this._history_idx=-1,this.start=function(e,t){return void 0===e&&(e=null),void 0===t&&(t={render:!0}),l.mount(e,r({},t,{render:!0}))},this.render=function(){return l.view(l.state)}}return e.prototype.renderState=function(e){if(this.view){var t=this.view(e),n="string"==typeof this.element?document.getElementById(this.element):this.element;n&&(n._component=this),n&&o.default.render&&(o.default.render(n,t),this.rendered&&this.rendered(this.state))}},e.prototype.setState=function(e,t){var n=this;if(e instanceof Promise)e.then(function(e){n.setState(e,t)}).catch(function(e){throw console.error(e),e});else{if(null==e)return;this.state=e,!1!==t.render&&this.renderState(e),!1!==t.history&&this.enable_history&&(this._history=this._history.concat([e]),this._history_idx=this._history.length-1),"function"==typeof t.callback&&t.callback(this.state)}},e.prototype.mount=function(e,t){var n=this;if(void 0===e&&(e=null),console.assert(!this.element,"Component already mounted."),this.options=t=Object.assign(this.options||{},t),this.element=e,this.global_event=t.global_event,this.enable_history=!!t.history,this.enable_history){var r=function(){n._history_idx--,n._history_idx>=0?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=0},o=function(){n._history_idx++,n._history_idx<n._history.length?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=n._history.length-1};this.on(t.history.prev||"history-prev",r),this.on(t.history.next||"history-next",o)}return this.add_actions(),void 0===this.state&&(this.state=this.model||{}),t.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),this},e.prototype.is_global_event=function(e){return e&&(e.startsWith("#")||e.startsWith("/"))},e.prototype.add_action=function(e,t,n){var r=this;void 0===n&&(n={}),t&&"function"==typeof t&&this.on(e,function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];var u=t.apply(void 0,[r.state].concat(e));r.setState(u,n)},n)},e.prototype.add_actions=function(){var e=this,t=this.update||{};u.Reflect.getMetadataKeys(this).forEach(function(n){if(n.startsWith("apprun-update:")){var r=u.Reflect.getMetadata(n,e);t[r.name]=r.action||e[r.key]}});var n={};Object.keys(t).forEach(function(e){var r=t[e];("function"==typeof r||Array.isArray(r))&&e.split(",").forEach(function(e){return n[e.trim()]=r})}),Object.keys(n).forEach(function(t){var r=n[t];"function"==typeof r?e.add_action(t,r):Array.isArray(r)&&e.add_action(t,r[0],r[1])})},e.prototype.run=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return this.global_event||this.is_global_event(e)?o.default.run.apply(o.default,[e].concat(t)):(r=this._app).run.apply(r,[e].concat(t));var r},e.prototype.on=function(e,t,n){return this.global_event||this.is_global_event(e)?o.default.on(e,t,n):this._app.on(e,t,n)},e}();t.Component=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(){function e(){var e=this;r.default.on("route",function(t){return e.route(t)}),window.onpopstate=function(t){return e.route(location.hash)},this.route(location.hash)}return e.prototype.route=function(e){if(e||(e="#"),e.indexOf("/")>0){var t=e.split("/"),n=t[0],o=t.slice(1);r.default.run.apply(r.default,[n].concat(o)),r.default.run.apply(r.default,["//",n].concat(o))}else r.default.run(e),r.default.run("//",e)},e}();t.default=o},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).default.on("//",function(e){for(var t=document.querySelectorAll(".navbar-nav li"),n=0;n<t.length;++n)t[n].classList.remove("active");var r=document.querySelector("[href='"+e+"']");r&&r.parentElement.classList.add("active")});var r=n(12),o=n(13),u=n(14),l=n(15),a=n(16),i=n(17),c=n(18),d=n(19),s=n(21),f=document.getElementById("my-app");[r.default,s.default,a.default,o.default,u.default,l.default,i.default,c.default,d.default].forEach(function(e){return e(f)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0);o.default.on("#",function(){r.innerHTML="<div></div>",$(r.firstChild).load("demo/components/home.html")}),t.default=function(e){return r=e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return r.default.createElement("div",null,r.default.createElement("h1",null,e),r.default.createElement("button",{onclick:function(){return r.default.run("DECREASE")}},"-1"),r.default.createElement("button",{onclick:function(){return r.default.run("INCREASE")}},"+1"))},u={"#counter":function(e){return e},INCREASE:function(e){return e+1},DECREASE:function(e){return e-1}};t.default=function(e){return r.default.start(e,0,o,u)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=[],u=function(e){var t=e.num,n=e.idx;return r.default.createElement("div",null,r.default.createElement("h1",null,t),r.default.createElement("button",{onclick:function(){return r.default.run("-1",n)}},"-1"),r.default.createElement("button",{onclick:function(){return r.default.run("+1",n)}},"+1"),r.default.createElement("button",{onclick:function(){return r.default.run("remove-counter",n)}},"x"))},l=function(e){return e.counters.map(function(e,t){return r.default.createElement(u,{num:e,idx:t})})},a=function(e){return console.log(e),r.default.createElement("div",null,r.default.createElement("div",null,r.default.createElement("button",{onclick:function(){return r.default.run("history-prev")}}," << "),r.default.createElement("button",{onclick:function(){return r.default.run("history-next")}}," >> "),r.default.createElement("button",{onclick:function(){return r.default.run("add-counter")}},"add counter"),r.default.createElement("button",{onclick:function(){return r.default.run("remove-counter",e.length-1)},disabled:e.length<=0},"remove counter")),r.default.createElement("br",null),r.default.createElement(l,{counters:e}))},i={"#counters":function(e){return e},"add-counter":function(e){return e.concat([0])},"remove-counter":function(e,t){return e.slice(0,t).concat(e.slice(t+1))},"+1":function(e,t){return e.slice(0,t).concat([e[t]+1],e.slice(t+1))},"-1":function(e,t){return e.slice(0,t).concat([e[t]-1],e.slice(t+1))}};t.default=function(e){return r.default.start(e,o,a,i,{history:!0})}},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=function(){},l={dragging:!1,position:{x:100,y:100},start:{x:0,y:0}},a=function(e){var t={userSelect:"none",cursor:"move",position:"absolute",padding:"50px",border:"1px solid black",color:e.dragging?"gold":"white","background-color":"#3C8D2F",left:e.position.x+"px",top:e.position.y+"px"};return o.default.createElement("div",{onmousedown:function(e){return o.default.run("drag",e)},onmousemove:function(e){return o.default.run("move",e)},onmouseup:function(e){return o.default.run("drop")},style:t}," Drag me!")},i={"#dragdrop":function(e){return e},drag:function(e,t){return r({},e,{dragging:!0,start:{x:t.pageX,y:t.pageY}})},move:function(e,t){if(!e.dragging)return r({},e,{view:u});var n={x:t.pageX,y:t.pageY},o={x:e.position.x+t.pageX-e.start.x,y:e.position.y+t.pageY-e.start.y};return r({},e,{start:n,position:o})},drop:function(e){return r({},e,{dragging:!1})}};t.default=function(e){return o.default.start(e,l,a,i)}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(e,t,n,r){var o,u=arguments.length,l=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(u<3?o(l):u>3?o(t,n,l):o(t,n))||l);return u>3&&l&&Object.defineProperty(t,n,l),l};Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),l=function(e){var t=e.id,n=e.title;return u.default.createElement("div",{className:"panel panel-default"},u.default.createElement("div",{className:"panel-heading"},n,u.default.createElement("span",{className:"pull-right"},u.default.createElement("a",{href:"#",onclick:function(e){e.preventDefault(),u.default.run("#clear-panel",t)}},"x"))),u.default.createElement("div",{className:"panel-body",id:t}))},a=0,i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state=a,t.view=function(e){return u.default.createElement("div",null,u.default.createElement("h1",null,e))},t._render=function(e){return e},t}return r(t,e),o([u.on("render")],t.prototype,"_render",void 0),t}(u.Component),c=function(){var e=""+ ++a,t=(new i).mount(e);u.default.run("#add-panel",{id:e,title:"#"+a,component:t})},d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={panels:{}},t.view=function(e){var n=Object.keys(e.panels).map(function(t){return e.panels[t]});return u.default.createElement("div",null,u.default.createElement("div",null,u.default.createElement("button",{onclick:function(){return t.run("clear")}},"Clear All")," ",u.default.createElement("button",{onclick:function(){return c()}},"Add blade")),u.default.createElement("br",null),u.default.createElement("div",{className:"row panel-container"},n.map(function(e){return u.default.createElement(l,{id:e.id,title:e.title})})))},t.rendered=function(){Object.keys(t.state.panels).map(function(e){return t.state.panels[e]}).forEach(function(e){return e&&e.component&&e.component.run("render")});var e=document.querySelector(".panel-container");e.scrollLeft=e.scrollWidth-e.clientWidth},t.update={"#blade":function(e){return e},"#add-panel":function(e,t,n){return e.panels[t.id]=t,n&&n.forEach(function(t){return delete e.panels[t]}),e},"#clear-panel":function(e,t){return delete e.panels[t],e},clear:function(e){return a=0,{panels:{}}}},t}return r(t,e),t}(u.Component);t.BladeHostComponent=d,t.default=function(e){return(new d).mount(e)}},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var o,u=n(0);!function(e){e[e.all=0]="all",e[e.todo=1]="todo",e[e.done=2]="done"}(o||(o={}));var l={filter:0,todos:[]},a=function(e){var t=e.todo,n=e.idx;return u.default.createElement("li",{onclick:function(){return s.run("toggle",n)},style:{color:t.done?"green":"red",textDecoration:t.done?"line-through":"none",cursor:"pointer"}},t.value)},i=function(e){var t=function(t){return{"font-weight":e.filter===t?"bold":"normal",cursor:"pointer"}};return u.default.createElement("div",null,u.default.createElement("h1",null,"Todo"),u.default.createElement("div",null,u.default.createElement("span",null,"Show:"),u.default.createElement("span",null," ",u.default.createElement("a",{style:t(0),onclick:function(){return s.run("filter",0)}},"All"))," |",u.default.createElement("span",null," ",u.default.createElement("a",{style:t(1),onclick:function(){return s.run("filter",1)}},"Todo"))," |",u.default.createElement("span",null," ",u.default.createElement("a",{style:t(2),onclick:function(){return s.run("filter",2)}},"Done"))),u.default.createElement("ul",null,e.todos.filter(function(t){return 0===e.filter||1===e.filter&&!t.done||2===e.filter&&t.done}).map(function(e,t){return u.default.createElement(a,{todo:e,idx:t})})),u.default.createElement("div",null,u.default.createElement("input",{id:"new-todo",placeholder:"add todo",onkeyup:function(e){return c(e.keyCode)}}),u.default.createElement("button",{onclick:function(e){return c(13)}},"Add"),u.default.createElement("button",{onclick:function(){return s.run("clear")}},"Clear")),u.default.createElement("br",null),u.default.createElement("div",null,u.default.createElement("button",{onclick:function(){return s.run("todo-undo")}}," Undo "),u.default.createElement("button",{onclick:function(){return s.run("todo-redo")}}," Redo ")))},c=function(e){var t=document.getElementById("new-todo");13===e&&t.value&&(s.run("add",t.value),t.value="")},d={"#todo":function(e){return e},add:function(e,t){return r({},e,{todos:e.todos.concat([{value:t,done:!1}])})},toggle:function(e,t){return r({},e,{todos:e.todos.slice(0,t).concat([r({},e.todos[t],{done:!e.todos[t].done})],e.todos.slice(t+1))})},filter:function(e,t){return r({},e,{filter:t})},clear:function(e){return r({},e,{todos:[]})}},s=new u.Component(l,i,d);t.default=function(e){return s.mount(e,{history:{prev:"todo-undo",next:"todo-redo"}})}},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u={input:"",selectIdx:-1,selected:[],options:[]},l=function(e){return o.default.createElement("div",{className:"typeahead multi-selection"},o.default.createElement("div",null,o.default.createElement("ul",{className:"selections"},e.selected.map(function(e,t){return o.default.createElement("li",null,e,o.default.createElement("i",{className:"icon-delete",onclick:function(){return o.default.run("de-select",t)}},"x"))})),o.default.createElement("input",{value:e.input,oninput:function(e){return o.default.run("input",e)},onkeyup:function(e){return o.default.run("keyup",e)}})),o.default.createElement("ul",{className:"options"},e.options.map(function(t,n){return o.default.createElement("li",{className:n===e.selectIdx?"selected":"",onclick:function(){return o.default.run("select",t)}},t)})))},a={"#multi-selection":function(e){return e},input:function(e,t){return r({},e,{input:t.target.value,selectIdx:-1,options:d(t.target.value)})},keyup:function(e,t){switch(t.keyCode){case 38:return i(e,e.selectIdx-1);case 40:return i(e,e.selectIdx+1);case 13:return c(e,t.target.value);default:return e}},select:function(e,t){return c(e,t)},"de-select":function(e,t){return r({},e,{selected:e.selected.slice(0,t).concat(e.selected.slice(t+1))})}},i=function(e,t){return t<0&&(t=0),t>=e.options.length&&(t=e.options.length-1),r({},e,{selectIdx:t,input:e.options[t]})},c=function(e,t){return r({},e,{input:"",options:[],selected:e.selected.concat([t])})},d=function(e){return e?[1,2,3,4,5].map(function(t){return e+t}):[]};t.default=function(e){return o.default.start(e,u,l,a)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,u=n(0),l=n(20),a=function(e){r=performance.now(),o=e},i=function(){window.setTimeout(function(){var e=performance.now();console.log(o+" took "+(e-r))},0)},c=new l.default,d={"#benchmark":function(e){return e},run:function(e){return e.run(),e},add:function(e){return e.add(),e},remove:function(e,t){return t==e.selected&&this.unselect(e),e.delete(t),document.getElementById(t).remove(),e.no_render=!0,e},select:function(e,t){return e.selected&&(document.getElementById(e.selected).className="",e.selected=null),e.select(t),document.getElementById(t).className="danger",e.no_render=!0,e},updaterow:function(e){return e.update(),e},runlots:function(e){return e.runLots(),e},clear:function(e){return e.clear(),e},swaprows:function(e){return e.swapRows(),e}},s=function(e){if(e.no_render)return void delete e.no_render;var t=e.data.map(function(t){var n=t.id==e.selected?"danger":"",r=t.id;return u.default.createElement("tr",{className:n,id:r,key:r},u.default.createElement("td",{className:"col-md-1"},r),u.default.createElement("td",{className:"col-md-4"},u.default.createElement("a",{className:"lbl"},t.label)),u.default.createElement("td",{className:"col-md-1"},u.default.createElement("a",{className:"remove"},u.default.createElement("span",{className:"glyphicon glyphicon-remove remove","aria-hidden":"true"}))),u.default.createElement("td",{className:"col-md-6"}))});return u.default.createElement("div",null,u.default.createElement("div",null,u.default.createElement("button",{type:"button",id:"run"},"Create 1,000 rows"),u.default.createElement("button",{type:"button",id:"runlots"},"Create 10,000 rows"),u.default.createElement("button",{type:"button",id:"add"},"Append 1,000 rows"),u.default.createElement("button",{type:"button",id:"updaterow"},"Update every 10th row"),u.default.createElement("button",{type:"button",id:"clear"},"Clear"),u.default.createElement("button",{type:"button",id:"swaprows"},"Swap Rows")),u.default.createElement("br",null),u.default.createElement("table",{className:"table table-hover table-striped test-data",id:"main-table"},u.default.createElement("tbody",null,t)))},f=function(e){for(;e;){if("TR"===e.tagName)return e.id;e=e.parentNode}};document.body.addEventListener("click",function(e){var t=e.target;t&&("BUTTON"===t.tagName&&t.id?(e.preventDefault(),a(t.id),p.run(t.id),i()):t.matches(".remove")?(e.preventDefault(),a("remove"),p.run("remove",f(t)),i()):t.matches(".lbl")&&(e.preventDefault(),a("select"),p.run("select",f(t)),i()))});var p=new u.Component(c,s,d);t.default=function(e){return p.mount(e)}},function(e,t,n){"use strict";function r(e){return Math.round(1e3*Math.random())%e}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.data=[],this.backup=null,this.selected=null,this.id=1}return e.prototype.buildData=function(e){void 0===e&&(e=1e3);for(var t=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],n=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],o=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"],u=[],l=0;l<e;l++)u.push({id:this.id++,label:t[r(t.length)]+" "+n[r(n.length)]+" "+o[r(o.length)]});return u},e.prototype.updateData=function(e){void 0===e&&(e=10);for(var t=0;t<this.data.length;t+=10)this.data[t].label+=" !!!"},e.prototype.delete=function(e){this.data=this.data.filter(function(t,n){return t.id!=e})},e.prototype.run=function(){this.data=this.buildData(),this.selected=null},e.prototype.add=function(){this.data=this.data.concat(this.buildData(1e3)),this.selected=null},e.prototype.update=function(){this.updateData(),this.selected=null},e.prototype.select=function(e){this.selected=e},e.prototype.hideAll=function(){this.backup=this.data,this.data=[],this.selected=null},e.prototype.showAll=function(){this.data=this.backup,this.backup=null,this.selected=null},e.prototype.runLots=function(){this.data=this.buildData(1e4),this.selected=null},e.prototype.clear=function(){this.data=[],this.selected=null},e.prototype.swapRows=function(){if(this.data.length>998){var e=this.data[1];this.data[1]=this.data[998],this.data[998]=e}},e}();t.default=o},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(e,t,n,r){var o,u=arguments.length,l=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(u<3?o(l):u>3?o(t,n,l):o(t,n))||l);return u>3&&l&&Object.defineProperty(t,n,l),l};Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),l=u.default.createElement,a=function(e){return function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return n&&Object.keys(n).forEach(function(t){if(t.startsWith("on")&&"function"!=typeof event){var r=n[t];"boolean"==typeof r?n[t]=function(n){return e.run(t,n)}:"string"==typeof r?n[t]=function(t){return e.run(r,t)}:r instanceof u.Component?n[t]=function(e){return r.run(t,e)}:Array.isArray(r)&&(n[t]=function(e){return r[0].run(r[1]||t,e)})}}),l.apply(void 0,[t,n].concat(r))}},i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.model="world",t.view=function(e){return u.default.createElement("div",null,u.default.createElement("h1",null,"Hello: ",e),u.default.createElement("input",{oninput:function(e){return t.run("input",e)}}))},t.hello=function(e){return e},t.oninput=function(e,t){return t.target.value},t}return r(t,e),o([u.on("#hello")],t.prototype,"hello",void 0),o([u.on("input")],t.prototype,"oninput",void 0),t}(u.Component);t.HelloComponent=i;var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.model="world",t.view=function(e){return u.default.createElement("div",null,u.default.createElement("div",null,"Test push state"),u.default.createElement("h1",null,"Hello: ",e),u.default.createElement("input",{oninput:function(e){return t.run("input",e)}}))},t.hello=function(e,t){return t||e},t.oninput=function(e,t){return history.pushState(null,null,"#hello-pushstate/"+t.target.value),t.target.value},t}return r(t,e),o([u.on("#hello-pushstate")],t.prototype,"hello",void 0),o([u.on("input")],t.prototype,"oninput",void 0),t}(u.Component);t.HelloStateComponent=c;var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.model="world",t.view=function(e){return u.default.createElement("div",null,u.default.createElement("div",null,"Test delayed event (1s)"),u.default.createElement("h1",null,"Hello: ",e),u.default.createElement("input",{oninput:function(e){return t.run("input",e)}}))},t.hello=function(e){return e},t.update={input:[function(e,t){return t.target.value},{delay:1e3,debug:!0}]},t}return r(t,e),o([u.on("#hello-delayed")],t.prototype,"hello",void 0),t}(u.Component);t.HelloDelayComponent=d;var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.model="world",t.view=function(e){u.default.createElement=a(t);var n=u.default.createElement("div",null,u.default.createElement("div",null,"Test directive"),u.default.createElement("h1",null,"Hello: ",e),u.default.createElement("table",null,u.default.createElement("tr",null,u.default.createElement("td",null,"Default event:"),u.default.createElement("td",null,"<input oninput />"),u.default.createElement("td",null,u.default.createElement("input",{value:e,oninput:!0}))),u.default.createElement("tr",null,u.default.createElement("td",null,"Named event:"),u.default.createElement("td",null,"<input oninput='oninput' />"),u.default.createElement("td",null,u.default.createElement("input",{value:e,oninput:"oninput"}))),u.default.createElement("tr",null,u.default.createElement("td",null,"Set target:"),u.default.createElement("td",null,"<input oninput=","{this}"," />"),u.default.createElement("td",null,u.default.createElement("input",{value:e,oninput:t}))),u.default.createElement("tr",null,u.default.createElement("td",null,"Set target and name:"),u.default.createElement("td",null,"<input oninput=",'{[this, "oninput"]}'," />"),u.default.createElement("td",null,u.default.createElement("input",{value:e,oninput:[t,"oninput"]})))));return u.default.createElement=l,n},t.hello=function(e){return e},t.oninput=function(e,t){return t.target.value},t}return r(t,e),o([u.on("#hello-directive")],t.prototype,"hello",void 0),o([u.on("oninput")],t.prototype,"oninput",void 0),t}(u.Component);t.HelloDirectiveComponent=s,t.default=function(e){(new i).mount(e),(new c).mount(e),(new d).mount(e),(new s).mount(e)}}])});
//# sourceMappingURL=app.js.map