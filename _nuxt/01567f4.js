(window.webpackJsonp=window.webpackJsonp||[]).push([[25,14],{298:function(e,r,t){"use strict";t.r(r);t(1),t(38);var o={name:"entityAddress",props:{addressLabel:{type:String,default:"Address"},showAddress:{type:Boolean,default:!0},idPrefix:{type:String,default:"entity-form"},addressHelp:{type:String,default:"Start typing your address and select one of the options"},addressString:{type:String,default:""},address:{type:Object,default:function(){return{line1:"",line2:"",suburb:"",postcode:"",state:"",country:""}}}},data:function(){return{modalId:Math.random().toString(36).substring(7)}},computed:{},methods:{}},n=t(35),component=Object(n.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("b-form-group",{staticClass:"mb-0",attrs:{label:e.addressLabel,description:e.addressHelp}},[t("b-form-input",{attrs:{id:e.idPrefix+"-address",name:e.idPrefix+"-address"},model:{value:e.addressString,callback:function(r){e.addressString=r},expression:"addressString"}})],1),e._v(" "),t("div",{staticClass:"text-right"},[t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"manual-address-"+e.modalId,expression:"`manual-address-${modalId}`"}],staticClass:"p-0 mb-4",attrs:{variant:"link"}},[e._v("\n      Click here if you cannot find the right address\n    ")])],1),e._v(" "),t("b-modal",{attrs:{id:"manual-address-"+e.modalId,title:"BootstrapVue"},scopedSlots:e._u([{key:"modal-header",fn:function(r){var o=r.close;return[t("h6",[e._v("Address "+e._s(e.modalId))]),e._v(" "),t("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"bi bi-x fs-3 removeIcon",attrs:{title:"Close"},on:{click:function(e){return o()}}})]}}])},[e._v(" "),t("b-form-group",{attrs:{label:"Address line 1"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-line1",name:e.idPrefix+"-line1"},model:{value:e.address.line1,callback:function(r){e.$set(e.address,"line1",r)},expression:"address.line1"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Address line 2"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-line2",name:e.idPrefix+"-line2"},model:{value:e.address.line2,callback:function(r){e.$set(e.address,"line2",r)},expression:"address.line2"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Suburb"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-Suburb",name:e.idPrefix+"-Suburb"},model:{value:e.address.suburb,callback:function(r){e.$set(e.address,"suburb",r)},expression:"address.suburb"}})],1),e._v(" "),t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"Postcode"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-Postcode",name:e.idPrefix+"-Postcode"},model:{value:e.address.postcode,callback:function(r){e.$set(e.address,"postcode",r)},expression:"address.postcode"}})],1)],1),e._v(" "),t("b-col",[t("b-form-group",{attrs:{label:"State"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-State",name:e.idPrefix+"-State"},model:{value:e.address.state,callback:function(r){e.$set(e.address,"state",r)},expression:"address.state"}})],1)],1)],1),e._v(" "),t("b-form-group",{attrs:{label:"Country"}},[t("b-form-select",{attrs:{id:e.idPrefix+"-country",name:e.idPrefix+"-country",options:[{value:"Australia",text:"Australia"}]},model:{value:e.address.country,callback:function(r){e.$set(e.address,"country",r)},expression:"address.country"}})],1)],1)],1)}),[],!1,null,"0fde8926",null);r.default=component.exports},356:function(e,r,t){"use strict";t.r(r);var o,n=t(0),l={components:{entityAddress:t(298).default},name:"entity",props:{idPrefix:{type:String,default:"entity-form"},property:{type:Object,default:function(){return{}}},form:{type:Object,default:function(){return{}}},showCoOwners:{type:Boolean,default:!0}},data:function(){return{boolOptions:[{text:"Yes",value:!0},{text:"No",value:!1}]}},computed:(o={youString:function(){return"self"===this.form.repType?"you":"the Applicant"},yourString:function(){return"self"===this.form.repType?"your":"the Applicant's"},AreYouString:function(){return"self"===this.form.repType?"are you":"is the Applicant"},DoYouString:function(){return"self"===this.form.repType?"do you":"is the Applicant"},DoYouStringCont:function(){return"self"===this.form.repType?"do you":"does the Applicant"},youAreString:function(){return"self"===this.form.repType?"you are":"the Applicant is"},wereYouString:function(){return"self"===this.form.repType?"were you":"was the Applicant"}},Object(n.a)(o,"AreYouString",(function(){return"self"===this.form.repType?"are you":"the Applicant is"})),Object(n.a)(o,"AreYouStringReverse",(function(){return"self"===this.form.repType?"are you":"is the Applicant"})),Object(n.a)(o,"additionalS",(function(){return"self"===this.form.repType?"":"s"})),o),methods:{}},d=t(35),component=Object(d.a)(l,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("entity-address",{attrs:{addressLabel:"Property address",address:e.property.propertyAddress}}),e._v(" "),t("b-form-group",{attrs:{label:"Current market value"}},[t("b-input-group",{attrs:{prepend:"$"}},[t("b-form-input",{model:{value:e.property.homeCurrentValue,callback:function(r){e.$set(e.property,"homeCurrentValue",r)},expression:"property.homeCurrentValue"}})],1)],1),e._v(" "),t("b-form-group",{attrs:{label:"Current mortgage owing"}},[t("b-input-group",{attrs:{prepend:"$"}},[t("b-form-input",{model:{value:e.property.homeMortgageOwing,callback:function(r){e.$set(e.property,"homeMortgageOwing",r)},expression:"property.homeMortgageOwing"}})],1)],1),e._v(" "),e.showCoOwners?t("div",[t("b-form-group",{attrs:{label:e.AreYouStringReverse+" the sole owner of the property?"}},[t("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.property.homeSoleOwner,callback:function(r){e.$set(e.property,"homeSoleOwner",r)},expression:"property.homeSoleOwner"}})],1),e._v(" "),!1===e.property.homeSoleOwner?t("div",[t("b-form-group",{attrs:{label:"What percentage "+e.DoYouStringCont+" own?"}},[t("b-input-group",{attrs:{append:"%"}},[t("b-form-input",{model:{value:e.property.homeOwnershipShare,callback:function(r){e.$set(e.property,"homeOwnershipShare",r)},expression:"property.homeOwnershipShare"}})],1)],1),e._v(" "),t("b-form-group",{attrs:{label:"How many co-owners?"}},[t("b-form-input",{model:{value:e.property.homeCoOwners,callback:function(r){e.$set(e.property,"homeCoOwners",r)},expression:"property.homeCoOwners"}})],1),e._v(" "),t("b-form-group",{attrs:{"b-form-group":"",label:"Co-owner's relationship to "+e.youString+"?"}},[t("b-form-radio-group",{attrs:{stacked:"",options:["Spouse or Defacto","Ex-spouse or ex-defacto","Other"]},model:{value:e.property.homeCoOwnersRelationship,callback:function(r){e.$set(e.property,"homeCoOwnersRelationship",r)},expression:"property.homeCoOwnersRelationship"}})],1),e._v(" "),"Other"===e.property.homeCoOwnersRelationship?t("b-form-group",{attrs:{label:"Provide details"}},[t("b-form-input",{model:{value:e.property.homeCoOwnersRelationshipDetail,callback:function(r){e.$set(e.property,"homeCoOwnersRelationshipDetail",r)},expression:"property.homeCoOwnersRelationshipDetail"}})],1):e._e()],1):e._e()],1):e._e()],1)}),[],!1,null,"58666166",null);r.default=component.exports}}]);