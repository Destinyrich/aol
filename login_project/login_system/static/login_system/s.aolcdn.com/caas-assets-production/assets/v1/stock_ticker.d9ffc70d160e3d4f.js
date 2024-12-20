/*! For license information please see stock_ticker.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("CAAS_AOLCOM",[],e):"object"==typeof exports?exports.CAAS_AOLCOM=e():t.CAAS_AOLCOM=e()}(self,(function(){return function(){var t={39356:function(t){function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var r={rapidInit:"rapid:init"};t.exports={events:r,rapidReady:function(t){window.rapidInstance?t(window.rapidInstance):document.addEventListener(r.rapidInit,(function(){t(window.rapidInstance)}),{passive:!0,once:!0})},ylkStringToObj:function(){var t=["itc","cpos","pos"];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(";").filter(Boolean).reduce((function(r,n){var o,i,a=(o=n.split(":"),i=2,function(t){if(Array.isArray(t))return t}(o)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(o,i)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],u=a[1];return r[c]=t.includes(c)?parseInt(u,10):u,r}),{})},ylkObjToString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).map((function(e){return"".concat(e,":").concat(t[e])})).join(";")}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return function(){"use strict";r.r(n),r.d(n,{default:function(){return v}});var t=r(39356);function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(){o=function(){return r};var t,r={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new P(n||[]);return a(i,"_invoke",{value:_(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var v="suspendedStart",d="suspendedYield",y="executing",m="completed",g={};function b(){}function w(){}function k(){}var L={};f(L,u,(function(){return this}));var O=Object.getPrototypeOf,x=O&&O(O(C([])));x&&x!==n&&i.call(x,u)&&(L=x);var E=k.prototype=b.prototype=Object.create(L);function S(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,r){function n(o,a,c,u){var s=h(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==e(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function _(e,r,n){var o=v;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?m:d,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function T(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function C(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(e(r)+" is not iterable")}return w.prototype=k,a(E,"constructor",{value:k,configurable:!0}),a(k,"constructor",{value:w,configurable:!0}),w.displayName=f(k,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,f(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},S(j.prototype),f(j.prototype,s,(function(){return this})),r.AsyncIterator=j,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new j(p(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),f(E,l,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=C,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=f(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)}))}}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function f(t){var r=function(t){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(r)?r:r+""}var p,h=(p=function(){return e=function t(e){var r=e.selector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.elem=document.querySelector(r),this.elem&&(this.currentFocus,this.form=this.elem.querySelector(".m-stock-ticker__form"),this.searchTextFieldWrapper=this.form.firstChild,this.searchTextField=this.elem.querySelector(".m-stock-ticker__input"),this.suggestionDropdown(),this.init())},r=[{key:"init",value:function(){var t=this;this.form&&this.form.addEventListener("submit",(function(e){t.submitHandler(e)})),this.elem.querySelector(".m-stock-ticker__submit").addEventListener("click",this.submitFormOnSearchBtn.bind(this)),document.addEventListener("click",(function(e){t.closeAllLists(e.target)}))}},{key:"submitFormOnSearchBtn",value:function(t){this.form.submit()}},{key:"submitHandler",value:(i=s(o().mark((function e(r){var n,i,c,u,s,l,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),r.stopPropagation(),n=this.searchTextField,i=this.emitRapidBeacon,c=n.value,e.next=6,this.getSuggestionOptionData(c);case 6:u=e.sent,s=u.quotes,l=r.target,this.checkInputValue(s,n.value)?(f=a({},(0,t.ylkStringToObj)(l.dataset.ylk)),i(f.slk,f.elmt,f),this.redirect()):(this.closeAllLists(),l.reset());case 10:case"end":return e.stop()}}),e,this)}))),function(t){return i.apply(this,arguments)})},{key:"emitRapidBeacon",value:function(e,r,n){var o=n.itc,i=n.elm;(0,t.rapidReady)((function(t){t.beaconClick("ticker-widget",e,1,{itc:o,elmt:r,elm:i},"Interaction")}))}},{key:"checkInputValue",value:function(t,e){return t.find((function(t){return t.symbol.toLowerCase()===e.toLowerCase()}))||!1}},{key:"suggestionDropdown",value:function(){this.keyStrokeEvent(),this.suggestionDropdownLayout(),this.dropDownSelectionEvent()}},{key:"keyStrokeEvent",value:function(){var e=this;this.searchTextField.addEventListener("input",(function(r){var n=a({},(0,t.ylkStringToObj)(r.target.dataset.ylk));e.emitRapidBeacon(n.slk,n.elmt,n)}),{once:!0})}},{key:"debounce",value:function(t,e){var r;return function(){clearTimeout(r),r=setTimeout((function(){return t()}),e)}}},{key:"suggestionDropdownLayout",value:function(){var t=this,e=this.searchTextField;e.addEventListener("input",this.debounce(function(){var r=s(o().mark((function r(n){var i,a,c;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.value){r.next=4;break}return t.closeAllLists(),r.abrupt("return",!1);case 4:return r.next=6,t.getSuggestionOptionData(i);case 6:if(a=r.sent,c=a.quotes,t.currentFocus=-1,t.closeAllLists(),c.length){r.next=12;break}return r.abrupt("return",!1);case 12:return t.inputClassToggle(e,"open"),e.parentNode.appendChild(t.createSuggestionBox(c,i)),r.abrupt("return",!0);case 15:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),300))}},{key:"inputClassToggle",value:function(t,e){var r,n;"open"===e?(t.classList.add("m-stock-ticker__input-selected"),null===(r=this.searchTextFieldWrapper)||void 0===r||r.classList.add("pos-inital"),t.classList.remove("m-stock-ticker__input")):(t.classList.remove("m-stock-ticker__input-selected"),null===(n=this.searchTextFieldWrapper)||void 0===n||n.classList.remove("pos-inital"),t.classList.add("m-stock-ticker__input"))}},{key:"getSuggestionOptionData",value:(n=s(o().mark((function t(e){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/nex/modules/stock_ticker/v1/?isXHR=true&m_mode=json&symbol=".concat(encodeURIComponent(e)));case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n.data.response);case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),function(t){return n.apply(this,arguments)})},{key:"createSuggestionBox",value:function(t,e){var r=this,n=document.createElement("div");n.setAttribute("id","autocomplete-list"),n.setAttribute("class","autocomplete-items");var o=this.createHtmlELement("UL",{class:"autocomplete-option-UL"}),i=this.createHtmlELement("STRONG",{class:"symbol"});return i.innerText="Symbols",o.appendChild(i),t.forEach((function(t){if(t.symbol.substr(0,e.length).toUpperCase()===e.toUpperCase()){var n=r.createSuggestionOption(t);o.appendChild(n)}})),n.appendChild(o),n}},{key:"createSuggestionOption",value:function(e){var r=this,n=this.createHtmlELement("LI",{class:"autocomplete-option-value",tabindex:0});n.setAttribute("data-value",e.symbol);var o=this.createHtmlELement("DIV",{class:"option-left"});if(e.symbol){var i=this.createHtmlELement("P",{class:"option-left__symbol"});i.innerText="".concat(e.symbol),o.append(i)}if(e.shortname){var c=this.createHtmlELement("P",{class:"option-left__shortname"});c.innerText="".concat(e.shortname),o.append(c)}var u=this.createHtmlELement("DIV",{class:"option-right"}),s=this.createHtmlELement("P",{class:"option-right__exchange"});return s.innerText="".concat(e.typeDisp,"-").concat(e.exchange),u.append(s),n.append(o),n.append(u),n.addEventListener("click",(function(e){var n=e.currentTarget;r.searchTextField.value=n.dataset.value;var o=a({},(0,t.ylkStringToObj)(r.form.dataset.ylk));r.emitRapidBeacon(o.slk,"srch-asst",o),r.redirect()})),n}},{key:"createHtmlELement",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=document.createElement(t);return e&&Object.keys(e).forEach((function(t){r.setAttribute(t,e[t])})),r}},{key:"redirect",value:function(){var t=this.searchTextField.value,e=this.form.action,r="".concat(e).concat(t,"?p=").concat(t),n=window.open();n.opener=null,n.document.location.replace(r)}},{key:"dropDownSelectionEvent",value:function(){var t=this;this.form.addEventListener("keydown",(function(e){var r=document.getElementById("autocomplete-list");return r&&(r=r.getElementsByClassName("autocomplete-option-value")),"ArrowDown"===e.key?(t.currentFocus+=1,void t.addActive(r)):"ArrowUp"===e.key?(t.currentFocus-=1,void t.addActive(r)):e.shiftKey&&"Tab"===e.key?(t.currentFocus-=1,void t.changeFocus(r)):"Tab"===e.key?(t.currentFocus+=1,void t.changeFocus(r)):void("Enter"===e.key&&t.currentFocus>-1&&r&&(r[t.currentFocus].click(),e.preventDefault()))}))}},{key:"changeFocus",value:function(t){this.currentFocus>=t.length&&(this.currentFocus=0),this.currentFocus<0&&(this.currentFocus=t.length-1)}},{key:"addActive",value:function(t){return!!t&&(this.changeFocus(t),t[this.currentFocus].focus(),!0)}},{key:"removeActive",value:function(t){Object.values(t).forEach((function(t){t.classList.remove("autocomplete-active")}))}},{key:"closeAllLists",value:function(t){var e=this,r=this.searchTextField,n=document.getElementsByClassName("autocomplete-items");Object.values(n).forEach((function(n){t!==n&&t!==r&&(document.querySelector("#autocomplete-list").remove(),e.inputClassToggle(r,"close"))}))}}],r&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r,n,i}(),p),v=new h({selector:".m-stock-ticker"})}(),n}()}));
//# sourceMappingURL=stock_ticker.js.map