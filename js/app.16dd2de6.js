(function(t){function e(e){for(var o,r,i=e[0],l=e[1],d=e[2],p=0,m=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(e);while(m.length)m.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(o=!1)}o&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},s={app:0},n=[];function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"4ac0":function(t,e,a){"use strict";var o=a("57bb"),s=a.n(o);s.a},"57bb":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"row"},[a("ordered-list",{attrs:{title:"Food prompts","standard-prompt-types":t.standardFoodPrompts,"modal-id":"foodPromptsModal"}}),a("ordered-list",{attrs:{title:"Meal prompts","standard-prompt-types":t.standardMealPrompts,"modal-id":"mealPromptsModal"}}),a("ordered-list",{attrs:{title:"Recall prompts","standard-prompt-types":t.standardRecallPrompts,"modal-id":"recallPromptsModal"}})],1)])},n=[],r=a("d4ec"),i=a("262e"),l=a("2caf"),d=a("9ab4"),c=a("60a3"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper col-12 col-md-6"},[a("h3",[t._v(t._s(t.title))]),a("ul",t._l(t.activePrompts,(function(e,o){return a("li",{class:{mandatory:!(void 0==e.optional||e.optional)}},[t._v(" "+t._s(e.name)+" "),a("span",{staticClass:"float-right"},[a("button",{staticClass:"btn btn-sm",on:{click:function(e){return t.moveUp(o)}}},[a("span",{staticClass:"fa fa-caret-up"})]),a("button",{staticClass:"btn btn-sm",on:{click:function(e){return t.moveDown(o)}}},[a("span",{staticClass:"fa fa-caret-down"})]),a("button",{staticClass:"btn btn-sm",on:{click:function(e){return t.showSettings(o)}}},[a("span",{staticClass:"fa fa-cog"})]),e.optional?a("button",{staticClass:"btn btn-sm",on:{click:function(e){return t.remove(o)}}},[a("span",{staticClass:"fa fa-trash"})]):t._e()])])})),0),a("button",{staticClass:"btn",attrs:{"data-toggle":"modal","data-target":"#"+t.modalId}},[a("span",{staticClass:"fa fa-plus"}),t._v(" Add prompt ")]),a("div",{staticClass:"modal fade",attrs:{id:t.modalId,tabindex:"-1",role:"dialog","aria-labelledby":t.modalId+"Label","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title",attrs:{id:t.modalId+"Label"}},[t._v("Select prompt type")]),t._m(0)]),a("div",{staticClass:"modal-body"},[t.getAvailableStandardPrompts().length>0?a("h5",[t._v("Standard prompts")]):t._e(),a("ul",t._l(t.getAvailableStandardPrompts(),(function(e){return a("li",{class:{selected:null!=t.selectedStandardPromptType&&e.type==t.selectedStandardPromptType.type},on:{click:function(a){return t.selectStandardPromptType(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0),a("h5",[t._v("Custom prompts")]),a("ul",t._l(t.customPromptTypes,(function(e){return a("li",{class:{selected:null!=t.selectedCustomPromptType&&e.type==t.selectedCustomPromptType.type},on:{click:function(a){return t.selectCustomPromptType(e)}}},[t._v(t._s(e.name)+" ")])})),0)]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{disabled:null==t.selectedStandardPromptType&&null==t.selectedCustomPromptType,type:"button"},on:{click:function(e){return t.addSelectedPromptType()}}},[t._v("Add selected prompt ")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:t.modalId+"Settings",tabindex:"-1",role:"dialog","aria-labelledby":t.modalId+"SettingsLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title",attrs:{id:t.modalId+"SettingsLabel"}},[t._v("Prompt settings")]),t._m(1)]),null!=this.settingsFor&&"StandardPrompt"==this.settingsFor.kind?a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Prompt name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.settingsFor.name,expression:"settingsFor.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.settingsFor.name},on:{input:function(e){e.target.composing||t.$set(t.settingsFor,"name",e.target.value)}}})]),t._m(2),t._m(3)]),t._m(4)]):t._e(),null==this.settingsFor||"CustomPrompt"!=this.settingsFor.kind||"SingleChoice"!=this.settingsFor.type&&"MultipleChoice"!=this.settingsFor.type?t._e():a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Prompt name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.settingsFor.name,expression:"settingsFor.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.settingsFor.name},on:{input:function(e){e.target.composing||t.$set(t.settingsFor,"name",e.target.value)}}})]),t._m(5),t._m(6),t._m(7),t._m(8)]),t._m(9)]),null!=this.settingsFor&&"CustomPrompt"==this.settingsFor.kind&&"FreeText"==this.settingsFor.type?a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Prompt name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.settingsFor.name,expression:"settingsFor.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.settingsFor.name},on:{input:function(e){e.target.composing||t.$set(t.settingsFor,"name",e.target.value)}}})]),t._m(10),t._m(11),t._m(12)]),t._m(13)]):t._e()])])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("Language")]),a("select",{staticClass:"form-control"},[a("option",[t._v("English (UK)")]),a("option",[t._v("Arabic (UAE)")]),a("option",[t._v("Portuguese (Portugal)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("Question text")]),a("textarea",{staticClass:"form-control"},[t._v("Question text placeholder blah blah blah")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Save changes")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("Data field ID")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"fieldId"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("Language")]),a("select",{staticClass:"form-control"},[a("option",[t._v("English (UK)")]),a("option",[t._v("Arabic (UAE)")]),a("option",[t._v("Portuguese (Portugal)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("Question text")]),a("textarea",{staticClass:"form-control"},[t._v("Question text placeholder blah blah blah")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("Options:")]),a("ul",[a("li",[t._v("Option 1")]),a("li",[t._v("Option 2")]),a("li",[t._v("Option 3")]),a("li",[t._v("Option 4")]),a("li",[t._v("Option 5")]),a("li",[t._v("Option 6")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Save changes")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("Data field ID")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"fieldId"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("Language")]),a("select",{staticClass:"form-control"},[a("option",[t._v("English (UK)")]),a("option",[t._v("Arabic (UAE)")]),a("option",[t._v("Portuguese (Portugal)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("Question text")]),a("textarea",{staticClass:"form-control"},[t._v("Question text placeholder blah blah blah")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Save changes")])])}],u=(a("4160"),a("45fc"),a("a434"),a("159b"),a("5530")),v=a("bee2"),f=a("1157"),b=a.n(f),h=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.call(this),t.selectedStandardPromptType=null,t.selectedCustomPromptType=null,t.settingsFor=null,t.customPromptTypes=[{kind:"CustomPrompt",type:"SingleChoice",name:"Single-choice question"},{kind:"CustomPrompt",type:"MultipleChoice",name:"Multiple-choice question"},{kind:"CustomPrompt",type:"FreeText",name:"Free text question"}],t.activePrompts=[],t.standardPromptTypes.forEach((function(e){e.optional||t.activePrompts.push(Object(u["a"])({},e))})),t}return Object(v["a"])(a,[{key:"remove",value:function(t){this.activePrompts.splice(t,1)}},{key:"moveUp",value:function(t){if(t>0){var e=this.activePrompts[t];this.activePrompts[t]=this.activePrompts[t-1],this.activePrompts[t-1]=e,this.$forceUpdate()}}},{key:"moveDown",value:function(t){if(t<this.activePrompts.length-1){var e=this.activePrompts[t];this.activePrompts[t]=this.activePrompts[t+1],this.activePrompts[t+1]=e,this.$forceUpdate()}}},{key:"showSettings",value:function(t){this.settingsFor=this.activePrompts[t],b()("#"+this.modalId+"Settings").modal("show")}},{key:"addSelectedPromptType",value:function(){null!=this.selectedStandardPromptType?this.activePrompts.push(Object(u["a"])({},this.selectedStandardPromptType)):null!=this.selectedCustomPromptType&&this.activePrompts.push(Object(u["a"])({},this.selectedCustomPromptType)),b()("#"+this.modalId).modal("hide")}},{key:"selectStandardPromptType",value:function(t){this.selectedStandardPromptType=t,this.selectedCustomPromptType=null}},{key:"selectCustomPromptType",value:function(t){this.selectedStandardPromptType=null,this.selectedCustomPromptType=t}},{key:"getAvailableStandardPrompts",value:function(){var t=this,e=Array();return this.standardPromptTypes.forEach((function(a){t.activePrompts.some((function(t){return t.type==a.type}))||e.push(Object(u["a"])({},a))})),e}}]),a}(c["c"]);Object(d["a"])([Object(c["b"])()],h.prototype,"modalId",void 0),Object(d["a"])([Object(c["b"])()],h.prototype,"title",void 0),Object(d["a"])([Object(c["b"])()],h.prototype,"standardPromptTypes",void 0),h=Object(d["a"])([c["a"]],h);var y=h,_=y,g=(a("4ac0"),a("2877")),P=Object(g["a"])(_,p,m,!1,null,"524b9741",null),C=P.exports,S=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.standardFoodPrompts=[{kind:"StandardPrompt",type:"FoodLookup",name:"Select food from database",optional:!1},{kind:"StandardPrompt",type:"PortionSizeEstimationMethod",name:"Select portion size estimation method",optional:!1},{kind:"StandardPrompt",type:"PortionSizeEstimation",name:"Estimate portion size",optional:!1},{kind:"StandardPrompt",type:"SameAsBefore",name:"Ask if same as before",optional:!0},{kind:"StandardPrompt",type:"ReadyMeal",name:"Ask if food was from a ready meal",optional:!0},{kind:"StandardPrompt",type:"BrandName",name:"Ask for brand name",optional:!0}],t.standardMealPrompts=[{kind:"StandardPrompt",type:"MealTime",name:"Confirm meal time",optional:!1},{kind:"StandardPrompt",type:"FreeTextFoods",name:"Free text food entry",optional:!1},{kind:"StandardPrompt",type:"DrinksReminder",name:"Suggest drinks if none entered",optional:!0},{kind:"StandardPrompt",type:"AssociatedFoodsManual",name:"Suggest associated foods (manual)",optional:!0},{kind:"StandardPrompt",type:"AssociatedFoodsAutomated",name:"Suggest associated foods (automated)",optional:!0}],t.standardRecallPrompts=[{kind:"StandardPrompt",type:"FinalPage",name:"Confirm and submit",optional:!1},{kind:"StandardPrompt",type:"FinalReminder",name:"Final foods reminder",optional:!0},{kind:"StandardPrompt",type:"EnergyCheck",name:"Low calorie intake check",optional:!0},{kind:"StandardPrompt",type:"TimeGap",name:"Time gap check",optional:!0}],t}return a}(c["c"]);S=Object(d["a"])([Object(c["a"])({components:{OrderedList:C}})],S);var k=S,O=k,F=Object(g["a"])(O,s,n,!1,null,null,null),T=F.exports;a("4989"),a("ab8b"),a("becf");o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(T)}}).$mount("#app")}});
//# sourceMappingURL=app.16dd2de6.js.map