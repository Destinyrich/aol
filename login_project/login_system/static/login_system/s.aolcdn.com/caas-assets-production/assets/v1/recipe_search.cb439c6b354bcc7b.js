!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("CAAS_AOLCOM",[],e):"object"==typeof exports?exports.CAAS_AOLCOM=e():t.CAAS_AOLCOM=e()}(self,(function(){return function(){var t={39356:function(t){function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var r={rapidInit:"rapid:init"};t.exports={events:r,rapidReady:function(t){window.rapidInstance?t(window.rapidInstance):document.addEventListener(r.rapidInit,(function(){t(window.rapidInstance)}),{passive:!0,once:!0})},ylkStringToObj:function(){var t=["itc","cpos","pos"];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(";").filter(Boolean).reduce((function(r,n){var o,i,a=(o=n.split(":"),i=2,function(t){if(Array.isArray(t))return t}(o)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(o,i)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],c=a[1];return r[u]=t.includes(u)?parseInt(c,10):c,r}),{})},ylkObjToString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).map((function(e){return"".concat(e,":").concat(t[e])})).join(";")}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return function(){"use strict";r.r(n),r.d(n,{default:function(){return f}});var t=r(39356);function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,u(n.key),n)}}function u(t){var r=function(t){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(r)?r:r+""}var c,l=(c=function(){return e=function t(e){var r=this,n=e.selector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.elems=function(t,e,r){if(e&&!Array.isArray(e)&&"number"==typeof e.length){var n=e.length;return i(e,n)}return t(e,r)}(o,document.querySelectorAll(n)),this.elems.length&&this.elems.forEach((function(t){return r.init(t)}))},r=[{key:"init",value:function(t){this.addEventListeners(t)}},{key:"addEventListeners",value:function(e){var r=e.querySelector(".recipe__search-form");r.addEventListener("submit",(function(t){t.preventDefault();var e=r.search_title.value;window.location=0!==e.length?"/food/search/".concat(encodeURIComponent(e),"/"):"/food/search/"})),window.wafer.ready((function(){wafer.on("autocomplete:open",(function(e){var r=e.elem;if(r.classList.contains("m-recipe-search--input")){var n=r.closest('div[data-rapid="true"]');(0,t.rapidReady)((function(t){t.refreshModule(n.id)}))}}))}))}}],r&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r}(),c),f=new l({selector:".m-recipe-search"})}(),n}()}));
//# sourceMappingURL=recipe_search.js.map