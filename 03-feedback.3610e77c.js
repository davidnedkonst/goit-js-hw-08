function e(e){return e&&e.__esModule?e.default:e}var t,r,n,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof o&&o&&o.Object===Object&&o,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),g=Object.prototype.toString,d=Math.max,y=Math.min,v=function(){return m.Date.now()};function p(e,t,r){var n,o,a,i,f,u,l=0,s=!1,c=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,a=o;return n=o=void 0,l=t,i=e.apply(a,r)}function p(e){return l=e,f=setTimeout(E,t),s?g(e):i}function O(e){var r=e-u;return void 0===u||r>=t||r<0||c&&e-l>=a}function E(){var e=v();if(O(e))return j(e);f=setTimeout(E,function(e){var r=t-(e-u);return c?y(r,a-(e-l)):r}(e))}function j(e){return f=void 0,m&&n?g(e):(n=o=void 0,i)}function k(){var e=v(),r=O(e);if(n=arguments,o=this,u=e,r){if(void 0===f)return p(u);if(c)return f=setTimeout(E,t),g(u)}return void 0===f&&(f=setTimeout(E,t)),i}return t=S(t)||0,b(r)&&(s=!!r.leading,a=(c="maxWait"in r)?d(S(r.maxWait)||0,t):a,m="trailing"in r?!!r.trailing:m),k.cancel=function(){void 0!==f&&clearTimeout(f),l=0,n=u=o=f=void 0},k.flush=function(){return void 0===f?i:j(v())},k}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=f.test(e);return r||u.test(e)?l(e.slice(2),r?2:8):i.test(e)?NaN:+e}t=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),p(e,t,{leading:n,maxWait:t,trailing:o})},refs={key:"feedback-form-state",a:{email:"",message:""},time2:500,form:document.querySelector("form.feedback-form"),formEmail:document.querySelector('input[name="email"]'),formMessage:document.querySelector('textarea[name="message"]')},localStorage.getItem(refs.key)?function(e){refs.formEmail.value=JSON.parse(localStorage.getItem(e)).email,refs.formMessage.value=JSON.parse(localStorage.getItem(e)).message}(refs.key):(r=refs.key,n=refs.a,localStorage.setItem(r,JSON.stringify(n))),refs.form.addEventListener("input",e(t)((function(e){let t=JSON.parse(localStorage.getItem(refs.key));"email"===e.target.name&&(t.email=e.target.value),"message"===e.target.name&&(t.message=e.target.value),localStorage.setItem(refs.key,JSON.stringify(t))}),refs.time2)),refs.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===refs.formEmail.value||""===refs.formMessage.value)return alert("Error"),0;const t=localStorage.getItem(refs.key);return console.log(`Submit: ${t}`),refs.formEmail.value="",refs.formMessage.value="",localStorage.setItem(refs.key,JSON.stringify(refs.a)),1}));
//# sourceMappingURL=03-feedback.3610e77c.js.map