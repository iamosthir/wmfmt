(self.webpackChunk=self.webpackChunk||[]).push([[148],{7757:(t,r,e)=>{t.exports=e(3076)},3076:t=>{var r=function(t){"use strict";var r,e=Object.prototype,o=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function c(t,r,e,o){var n=r&&r.prototype instanceof v?r:v,a=Object.create(n.prototype),i=new P(o||[]);return a._invoke=function(t,r,e){var o=f;return function(n,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===n)throw a;return j()}for(e.method=n,e.arg=a;;){var i=e.delegate;if(i){var s=C(i,e);if(s){if(s===h)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===f)throw o=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=p;var l=u(t,r,e);if("normal"===l.type){if(o=e.done?d:m,l.arg===h)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(o=d,e.method="throw",e.arg=l.arg)}}}(t,e,i),a}function u(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f="suspendedStart",m="suspendedYield",p="executing",d="completed",h={};function v(){}function y(){}function w(){}var g={};l(g,a,(function(){return this}));var _=Object.getPrototypeOf,F=_&&_(_(N([])));F&&F!==e&&o.call(F,a)&&(g=F);var x=w.prototype=v.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function e(n,a,i,s){var l=u(t[n],t,a);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"==typeof f&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,i,s)}),(function(t){e("throw",t,i,s)})):r.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,s)}))}s(l.arg)}var n;this._invoke=function(t,o){function a(){return new r((function(r,n){e(t,o,r,n)}))}return n=n?n.then(a,a):a()}}function C(t,e){var o=t.iterator[e.method];if(o===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=u(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:r,done:!0}}return y.prototype=w,l(x,"constructor",w),l(w,"constructor",y),y.displayName=l(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),l(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,o,n,a){void 0===a&&(a=Promise);var i=new b(c(r,e,o,n),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),l(x,s,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},t.values=N,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(o,n){return s.type="throw",s.arg=t,e.next=o,n&&(e.method="next",e.arg=r),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var o=e.completion;if("throw"===o.type){var n=o.arg;k(e)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:N(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=r),h}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},1148:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>s});var o=e(7757),n=e.n(o);function a(t,r,e,o,n,a,i){try{var s=t[a](i),l=s.value}catch(t){return void e(t)}s.done?r(l):Promise.resolve(l).then(o,n)}const i={data:function(){return{profileForm:new Form({name:"",email:"",role:"",password:"",adminId:this.$route.params.adminId,allowEmail:!1})}},methods:{getProfileInfo:function(){var t=this;axios.get("/admin/api/get-admin-data",{params:{adminId:this.$route.params.adminId}}).then((function(t){return t.data})).then((function(r){"ok"==r.status?(t.profileForm.name=r.data.name,t.profileForm.email=r.data.email,t.profileForm.role=r.data.role,t.profileForm.allowEmail="true"==r.data.allow_emails):t.$router.push({name:"admin-list"})})).catch((function(r){console.error(r.response.data),t.$router.push({name:"admin-list"})}))},createProfile:function(){var t,r=this;return(t=n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.profileForm.post("/admin/api/update-admin").then((function(t){return t.data})).then((function(t){"ok"==t.status&&swal.fire("Success","New admin was updated successfully","success")})).catch((function(t){console.error(t.response.data)}));case 2:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(o,n){var i=t.apply(r,e);function s(t){a(i,o,n,s,l,"next",t)}function l(t){a(i,o,n,s,l,"throw",t)}s(void 0)}))})()}},created:function(){this.getProfileInfo()}};const s=(0,e(1900).Z)(i,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"section"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header d-flex justify-content-between"},[e("h4",{staticClass:"text-muted"},[t._v("Edit admin")]),t._v(" "),e("router-link",{staticClass:"raise-button",attrs:{to:{name:"admin-list"}}},[e("i",{staticClass:"fas fa-arrow-left"}),t._v(" Go back")])],1),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8"},[e("legend",[t._v("Edit admin")]),t._v(" "),e("form",{attrs:{id:"prfForm"},on:{submit:function(r){return r.preventDefault(),t.createProfile.apply(null,arguments)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 form-group"},[e("label",{attrs:{for:""}},[t._v("Full Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.profileForm.name,expression:"profileForm.name"}],staticClass:"form-control",class:{"is-invalid":t.profileForm.errors.has("name")},attrs:{type:"text",placeholder:"Your full name",required:""},domProps:{value:t.profileForm.name},on:{input:function(r){r.target.composing||t.$set(t.profileForm,"name",r.target.value)}}}),t._v(" "),e("HasError",{attrs:{form:t.profileForm,field:"name"}})],1),t._v(" "),e("div",{staticClass:"col-md-12 form-group"},[e("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.profileForm.email,expression:"profileForm.email"}],staticClass:"form-control",class:{"is-invalid":t.profileForm.errors.has("email")},attrs:{type:"email",placeholder:"Your valid email",required:""},domProps:{value:t.profileForm.email},on:{input:function(r){r.target.composing||t.$set(t.profileForm,"email",r.target.value)}}}),t._v(" "),e("HasError",{attrs:{form:t.profileForm,field:"email"}})],1),t._v(" "),e("div",{staticClass:"col-md-12 form-group"},[e("label",{attrs:{for:""}},[t._v("Change Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.profileForm.password,expression:"profileForm.password"}],staticClass:"form-control",class:{"is-invalid":t.profileForm.errors.has("password")},attrs:{type:"password",placeholder:"Password"},domProps:{value:t.profileForm.password},on:{input:function(r){r.target.composing||t.$set(t.profileForm,"password",r.target.value)}}}),t._v(" "),e("HasError",{attrs:{form:t.profileForm,field:"password"}})],1),t._v(" "),e("div",{staticClass:"col-md-12 form-group"},[e("label",{attrs:{for:""}},[t._v("User Type")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.profileForm.role,expression:"profileForm.role"}],staticClass:"form-control",on:{change:function(r){var e=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.profileForm,"role",r.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",hidden:"",disabled:""}},[t._v("Select User Type")]),t._v(" "),e("option",{attrs:{value:"super"}},[t._v("Super Admin")]),t._v(" "),e("option",{attrs:{value:"tech"}},[t._v("Technician")])]),t._v(" "),e("HasError",{attrs:{form:t.profileForm,field:"role"}})],1),t._v(" "),e("div",{staticClass:"col-md-12 form-group"},[e("label",{staticClass:"custom-switch p-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.profileForm.allowEmail,expression:"profileForm.allowEmail"}],staticClass:"custom-switch-input",attrs:{type:"checkbox",name:"custom-switch-checkbox"},domProps:{checked:Array.isArray(t.profileForm.allowEmail)?t._i(t.profileForm.allowEmail,null)>-1:t.profileForm.allowEmail},on:{change:function(r){var e=t.profileForm.allowEmail,o=r.target,n=!!o.checked;if(Array.isArray(e)){var a=t._i(e,null);o.checked?a<0&&t.$set(t.profileForm,"allowEmail",e.concat([null])):a>-1&&t.$set(t.profileForm,"allowEmail",e.slice(0,a).concat(e.slice(a+1)))}else t.$set(t.profileForm,"allowEmail",n)}}}),t._v(" "),e("span",{staticClass:"custom-switch-indicator"}),t._v(" "),e("span",{staticClass:"custom-switch-description"},[t._v("Allow to Recieve Emails For New Bookings")])])]),t._v(" "),e("div",{staticClass:"col-md-12 form-group"},[e("Button",{staticClass:"btn btn-success",attrs:{form:t.profileForm}},[t._v("Update")])],1)])])])])])])])])])}),[],!1,null,null,null).exports}}]);