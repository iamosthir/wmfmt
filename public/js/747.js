(self.webpackChunk=self.webpackChunk||[]).push([[747],{7757:(t,e,r)=>{t.exports=r(3076)},3076:t=>{var e=function(t){"use strict";var e,r=Object.prototype,a=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,a){var n=e&&e.prototype instanceof d?e:d,o=Object.create(n.prototype),i=new S(a||[]);return o._invoke=function(t,e,r){var a=f;return function(n,o){if(a===m)throw new Error("Generator is already running");if(a===v){if("throw"===n)throw o;return T()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var s=E(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=m;var c=u(t,e,r);if("normal"===c.type){if(a=r.done?v:h,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=v,r.method="throw",r.arg=c.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",m="executing",v="completed",p={};function d(){}function g(){}function y(){}var _={};c(_,o,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(k([])));b&&b!==r&&a.call(b,o)&&(_=b);var x=y.prototype=d.prototype=Object.create(_);function C(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(n,o,i,s){var c=u(t[n],t,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var n;this._invoke=function(t,a){function o(){return new e((function(e,n){r(t,a,e,n)}))}return n=n?n.then(o,o):o()}}function E(t,r){var a=t.iterator[r.method];if(a===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=u(a,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function k(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=y,c(x,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},C(L.prototype),c(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new L(l(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},C(x),c(x,s,"Generator"),c(x,o,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(a,n){return s.type="throw",s.arg=t,r.next=a,n&&(r.method="next",r.arg=e),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,a){return this.delegate={iterator:k(t),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},1747:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});var a=r(7757),n=r.n(a);function o(t,e,r,a,n,o,i){try{var s=t[o](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(a,n)}const i={data:function(){return{machineData:{},form:new Form({machineId:this.$route.params.machineId,serviceDate:(new Date).toISOString().slice(0,10),serviceType:"",techName:authUserName,desc:"",photos:null})}},methods:{checkData:function(){var t=this;axios.get("/admin/api/get-machine-data",{params:{machineId:this.$route.params.machineId}}).then((function(t){return t.data})).then((function(e){"ok"==e.status?t.machineData=e.machineData:t.$router.push({name:"machine.all-list"})})).catch((function(e){console.error(e.response.data),t.$router.push({name:"machine.all-list"})}))},fileChange:function(t){var e=t.target.files;this.form.photos=e||null},submitForm:function(){var t,e=this;return(t=n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/admin/api/add-service-record").then((function(t){return t.data})).then((function(t){"ok"==t.status&&swal.fire("Success",t.msg,"success").then((function(){e.$router.push({name:"machine.info",params:{id:e.$route.params.machineId}})}))})).catch((function(t){console.error(t.response.data)}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(a,n){var i=t.apply(e,r);function s(t){o(i,a,n,s,c,"next",t)}function c(t){o(i,a,n,s,c,"throw",t)}s(void 0)}))})()}},mounted:function(){this.checkData()}};const s=(0,r(1900).Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"content-header"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row mb-2"},[t._m(0),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("ol",{staticClass:"breadcrumb float-sm-right"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"machine.all-list"}}},[t._v("Listed Machine")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"machine.info",params:{id:t.machineData.id}}}},[t._v(t._s(t.machineData.title))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("Add Service Record")])])])])])])]),t._v(" "),r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h5",[t._v("Basic Machine Info")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"form-group"},[r("span",{staticClass:"badge badge-pill badge-success font18px mt-3 mr-3"},[t._v("Label : "+t._s(t.machineData.label_number))]),t._v(" "),r("span",{staticClass:"badge badge-pill badge-primary font18px mt-3 mr-3"},[t._v("Bottom SL : "+t._s(t.machineData.bottom_sl))]),t._v(" "),r("span",{staticClass:"badge badge-pill badge-secondary font18px mt-3 mr-3"},[t._v("Top SL : "+t._s(t.machineData.top_sl))])])])]),t._v(" "),r("form",{staticClass:"row",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[t._m(1),t._v(" "),r("div",{staticClass:"col-md-4 form-group"},[r("label",{attrs:{for:""}},[t._v("Service Date")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.serviceDate,expression:"form.serviceDate"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("serviceDate")},attrs:{type:"date"},domProps:{value:t.form.serviceDate},on:{input:function(e){e.target.composing||t.$set(t.form,"serviceDate",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"serviceDate"}})],1),t._v(" "),r("div",{staticClass:"col-md-4 form-group"},[r("label",{attrs:{for:""}},[t._v("Service Type")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.serviceType,expression:"form.serviceType"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"serviceType",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select Service")]),t._v(" "),r("option",{attrs:{value:"Diagnostic"}},[t._v("Diagnostic")]),t._v(" "),r("option",{attrs:{value:"PM"}},[t._v("PM")]),t._v(" "),r("option",{attrs:{value:"Repair"}},[t._v("Repair")])]),t._v(" "),r("HasError",{attrs:{form:t.form,field:"serviceType"}})],1),t._v(" "),r("div",{staticClass:"col-md-4 form-group"},[r("label",{attrs:{for:""}},[t._v("Technician Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.techName,expression:"form.techName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("techName")},attrs:{type:"text",placeholder:"Technician name..."},domProps:{value:t.form.techName},on:{input:function(e){e.target.composing||t.$set(t.form,"techName",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"techName"}})],1),t._v(" "),r("div",{staticClass:"col-md-7 form-group"},[r("label",{attrs:{for:""}},[t._v("Service Description")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.desc,expression:"form.desc"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("desc")},attrs:{placeholder:"Write here...",rows:"8"},domProps:{value:t.form.desc},on:{input:function(e){e.target.composing||t.$set(t.form,"desc",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"desc"}})],1),t._v(" "),r("div",{staticClass:"col-md-7 form-group"},[r("label",{attrs:{for:""}},[t._v("Service Photographs")]),t._v(" "),r("input",{staticClass:"form-control-file",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:t.fileChange}})]),t._v(" "),r("div",{staticClass:"col-md-12 form-group"},[r("Button",{staticClass:"btn btn-primary",attrs:{form:t.form,type:"submit"}},[r("i",{staticClass:"fas fa-plus"}),t._v(" Add")])],1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-6"},[r("h1",{staticClass:"m-0"},[t._v("Add Service Record")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"form-group"},[r("h5",[t._v("Service Data")]),t._v(" "),r("hr")])])}],!1,null,null,null).exports}}]);