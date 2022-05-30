"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[745],{1745:(t,o,e)=>{e.r(o),e.d(o,{default:()=>a});const r={data:function(){return{form:new Form({title:"",manufacturer:"",model:"",bottom:"",top:"",label:"",machinePhoto:"",customerName:"",customerLocation:"",customerNumber:"",customerPhoto:""})}},methods:{machinePhoto:function(t){var o=t.target.files[0];this.form.machinePhoto=o||null},customerPhoto:function(t){var o=t.target.files[0];this.form.customerPhoto=o||null},submitForm:function(){var t=this;this.form.post("/admin/api/add-new-machine-data").then((function(t){return t.data})).then((function(o){"ok"==o.status&&(swal.fire("Success",o.msg,"success"),t.form.reset(),$('input[type="file"]').val(""))})).catch((function(t){console.error(t.response.data)}))}}};const a=(0,e(1900).Z)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-8"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("form",{on:{submit:function(o){return o.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[t._m(1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Machine Title")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("title")},attrs:{type:"text",placeholder:"Machine Title..."},domProps:{value:t.form.title},on:{input:function(o){o.target.composing||t.$set(t.form,"title",o.target.value)}}}),t._v(" "),e("HasError",{attrs:{form:t.form,field:"title"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Mnufacturer")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.manufacturer,expression:"form.manufacturer"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("manufacturer")},attrs:{type:"text",placeholder:"Manufacturer Name..."},domProps:{value:t.form.manufacturer},on:{input:function(o){o.target.composing||t.$set(t.form,"manufacturer",o.target.value)}}}),t._v(" "),e("HasError",{attrs:{form:t.form,field:"manufacturer"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Model Number")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.model,expression:"form.model"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("model")},attrs:{type:"text",placeholder:"Model Number..."},domProps:{value:t.form.model},on:{input:function(o){o.target.composing||t.$set(t.form,"model",o.target.value)}}}),t._v(" "),e("HasError",{attrs:{form:t.form,field:"model"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Bottom Serial")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.bottom,expression:"form.bottom"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bottom")},attrs:{type:"text",placeholder:"Bottom Serial Number..."},domProps:{value:t.form.bottom},on:{input:function(o){o.target.composing||t.$set(t.form,"bottom",o.target.value)}}}),t._v(" "),e("HasError",{attrs:{form:t.form,field:"bottom"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Top Serial Number")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.top,expression:"form.top"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("top")},attrs:{type:"text",placeholder:"Top Serial Number..."},domProps:{value:t.form.top},on:{input:function(o){o.target.composing||t.$set(t.form,"top",o.target.value)}}}),t._v(" "),e("HasError",{attrs:{form:t.form,field:"top"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Label Number")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.label,expression:"form.label"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("label")},attrs:{type:"text",placeholder:"Label Number..."},domProps:{value:t.form.label},on:{input:function(o){o.target.composing||t.$set(t.form,"label",o.target.value)}}}),t._v(" "),e("HasError",{attrs:{form:t.form,field:"label"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[t._m(2),t._v(" "),e("input",{staticClass:"form-control-file",attrs:{type:"file",accept:"image/*"},on:{change:t.machinePhoto}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[t._m(3),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Customer Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.customerName,expression:"form.customerName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customerName")},attrs:{type:"text",placeholder:"Customer name..."},domProps:{value:t.form.customerName},on:{input:function(o){o.target.composing||t.$set(t.form,"customerName",o.target.value)}}}),t._v(" "),e("HasError",{attrs:{form:t.form,field:"customerName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Customer Location / Address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.customerLocation,expression:"form.customerLocation"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customerLocation")},attrs:{type:"text",placeholder:"Location / Address..."},domProps:{value:t.form.customerLocation},on:{input:function(o){o.target.composing||t.$set(t.form,"customerLocation",o.target.value)}}}),t._v(" "),e("HasError",{attrs:{form:t.form,field:"customerLocation"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Contact Number")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.customerNumber,expression:"form.customerNumber"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customerNumber")},attrs:{type:"text",placeholder:"Customer name..."},domProps:{value:t.form.customerNumber},on:{input:function(o){o.target.composing||t.$set(t.form,"customerNumber",o.target.value)}}}),t._v(" "),e("HasError",{attrs:{form:t.form,field:"customerNumber"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[t._m(4),t._v(" "),e("input",{staticClass:"form-control-file",attrs:{type:"file",accept:"image/*"},on:{change:t.customerPhoto}})])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("Button",{staticClass:"btn btn-success",attrs:{form:t.form}},[t._v("Submit")])],1)])])])])])])])}),[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"col-12"},[e("div",{staticClass:"content-header"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"col-sm-6"},[e("h1",{staticClass:"m-0"},[t._v("Add new machine data")])]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("ol",{staticClass:"breadcrumb float-sm-right"},[e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),e("li",{staticClass:"breadcrumb-item active"},[t._v("Add new machine")])])])])])])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"form-group"},[e("h5",[t._v("Machine Info")]),t._v(" "),e("hr")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("label",[t._v("Machine Photograph "),e("small",[t._v("(optional)")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"form-group"},[e("h5",[t._v("Customer Info")]),t._v(" "),e("hr")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("label",[t._v("Customer Photograph "),e("small",[t._v("(optional)")])])}],!1,null,null,null).exports}}]);