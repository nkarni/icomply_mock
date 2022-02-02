(window.webpackJsonp=window.webpackJsonp||[]).push([[9,13,14,23,24],{297:function(e,t,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(50).default)("3ee8f6df",content,!0,{sourceMap:!1})},298:function(e,t,r){"use strict";r.r(t);r(1),r(38);var o={name:"entityAddress",props:{addressLabel:{type:String,default:"Address"},showAddress:{type:Boolean,default:!0},idPrefix:{type:String,default:"entity-form"},addressHelp:{type:String,default:"Start typing your address and select one of the options"},addressString:{type:String,default:""},address:{type:Object,default:function(){return{line1:"",line2:"",suburb:"",postcode:"",state:"",country:""}}}},data:function(){return{modalId:Math.random().toString(36).substring(7)}},computed:{},methods:{}},n=r(35),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-form-group",{staticClass:"mb-0",attrs:{label:e.addressLabel,description:e.addressHelp}},[r("b-form-input",{attrs:{id:e.idPrefix+"-address",name:e.idPrefix+"-address"},model:{value:e.addressString,callback:function(t){e.addressString=t},expression:"addressString"}})],1),e._v(" "),r("div",{staticClass:"text-right"},[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"manual-address-"+e.modalId,expression:"`manual-address-${modalId}`"}],staticClass:"p-0 mb-4",attrs:{variant:"link"}},[e._v("\n      Click here if you cannot find the right address\n    ")])],1),e._v(" "),r("b-modal",{attrs:{id:"manual-address-"+e.modalId,title:"BootstrapVue"},scopedSlots:e._u([{key:"modal-header",fn:function(t){var o=t.close;return[r("h6",[e._v("Address "+e._s(e.modalId))]),e._v(" "),r("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"bi bi-x fs-3 removeIcon",attrs:{title:"Close"},on:{click:function(e){return o()}}})]}}])},[e._v(" "),r("b-form-group",{attrs:{label:"Address line 1"}},[r("b-form-input",{attrs:{id:e.idPrefix+"-line1",name:e.idPrefix+"-line1"},model:{value:e.address.line1,callback:function(t){e.$set(e.address,"line1",t)},expression:"address.line1"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"Address line 2"}},[r("b-form-input",{attrs:{id:e.idPrefix+"-line2",name:e.idPrefix+"-line2"},model:{value:e.address.line2,callback:function(t){e.$set(e.address,"line2",t)},expression:"address.line2"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"Suburb"}},[r("b-form-input",{attrs:{id:e.idPrefix+"-Suburb",name:e.idPrefix+"-Suburb"},model:{value:e.address.suburb,callback:function(t){e.$set(e.address,"suburb",t)},expression:"address.suburb"}})],1),e._v(" "),r("b-row",[r("b-col",[r("b-form-group",{attrs:{label:"Postcode"}},[r("b-form-input",{attrs:{id:e.idPrefix+"-Postcode",name:e.idPrefix+"-Postcode"},model:{value:e.address.postcode,callback:function(t){e.$set(e.address,"postcode",t)},expression:"address.postcode"}})],1)],1),e._v(" "),r("b-col",[r("b-form-group",{attrs:{label:"State"}},[r("b-form-input",{attrs:{id:e.idPrefix+"-State",name:e.idPrefix+"-State"},model:{value:e.address.state,callback:function(t){e.$set(e.address,"state",t)},expression:"address.state"}})],1)],1)],1),e._v(" "),r("b-form-group",{attrs:{label:"Country"}},[r("b-form-select",{attrs:{id:e.idPrefix+"-country",name:e.idPrefix+"-country",options:[{value:"Australia",text:"Australia"}]},model:{value:e.address.country,callback:function(t){e.$set(e.address,"country",t)},expression:"address.country"}})],1)],1)],1)}),[],!1,null,"0fde8926",null);t.default=component.exports},299:function(e,t,r){"use strict";r.r(t);var o={name:"notice",props:{message:{type:String,default:""},borderClass:{type:String,default:"green"}},data:function(){return{}},computed:{},methods:{}},n=(r(301),r(35)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.borderClass+" notice p-2",domProps:{innerHTML:e._s(e.message)}})}),[],!1,null,"c04a35ec",null);t.default=component.exports},300:function(e,t,r){"use strict";r.r(t);r(160),r(17);var o={components:{entityAddress:r(298).default},name:"entity",props:{idPrefix:{type:String,default:"entity-form"},entity:{type:Object,default:function(){return{}}},orgNameLabel:{type:String,default:"Organisation name"},showOrgName:{type:Boolean,default:!1},orgAddressLabel:{type:String,default:"Organisation address"},showOrgAddress:{type:Boolean,default:!1},firstNameLabel:{type:String,default:"Given name(s)"},showFirstName:{type:Boolean,default:!1},lastNameLabel:{type:String,default:"Family name(s)"},showLastName:{type:Boolean,default:!1},emailLabel:{type:String,default:"Email"},showEmail:{type:Boolean,default:!1},phonesLabel:{type:String,default:"Phone number(s)"},showPhones:{type:Boolean,default:!1},addressLabel:{type:String,default:"Address"},showAddress:{type:Boolean,default:!1},postalAddressLabel:{type:String,default:"Postal Address"},showPostalAddress:{type:Boolean,default:!1},safeAddressLabel:{type:String,default:"Is it safe to send you mail to this address?"},showIsSafeAddress:{type:Boolean,default:!1},safePostalAddressLabel:{type:String,default:"Is it safe to send you mail to this address?"},showIsSafePostalAddress:{type:Boolean,default:!1},safeEmailAddressLabel:{type:String,default:"Is it safe to contact on this email address?"},showIsSafeEmail:{type:Boolean,default:!1},safePhoneLabel:{type:String,default:"Is it safe to contact on this phone number?"},showIsSafePhone:{type:Boolean,default:!1},postalAddessSameLabel:{type:String,default:"Postal address is the same as home address"},showPostalAddessSame:{type:Boolean,default:!1},preferredContactLabel:{type:String,default:"Preferred Contact"},showPreferredContact:{type:Boolean,default:!1}},data:function(){return{firstname:"",lastname:"",firstnameLabel:"",boolOptions:[{text:"Yes",value:!0},{text:"No",value:!1}]}},computed:{preferredContactOptions:function(){var e=[];return this.entity.email.length&&e.push({value:"email",text:"Email"}),this.entity.phones.length&&e.push({value:"phone",text:"Phone"}),this.entity.postalAddress&&e.push({value:"mail",text:"Mail"}),e}},methods:{addPhone:function(){this.entity.phones.push({type:"",number:"",isSafe:null})},removePhone:function(i){this.entity.phones.splice(i,1)},onAddressModalClose:function(){this.addressString=this.entity.addresses[0].join}}},n=r(35),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.showOrgName?r("b-form-group",{attrs:{label:e.orgNameLabel}},[r("b-form-input",{attrs:{id:e.idPrefix+"-orgName",name:e.idPrefix+"-orgName"},model:{value:e.entity.orgName,callback:function(t){e.$set(e.entity,"orgName",t)},expression:"entity.orgName"}})],1):e._e(),e._v(" "),e.showOrgAddress?r("entity-address",{attrs:{addressLabel:e.orgAddressLabel,address:e.entity.orgAddress}}):e._e(),e._v(" "),e.showFirstName?r("b-form-group",{attrs:{label:e.firstNameLabel}},[r("b-form-input",{attrs:{id:e.idPrefix+"-firstName",name:e.idPrefix+"-firstName"},model:{value:e.entity.firstName,callback:function(t){e.$set(e.entity,"firstName",t)},expression:"entity.firstName"}})],1):e._e(),e._v(" "),e.showLastName?r("b-form-group",{attrs:{label:e.lastNameLabel}},[r("b-form-input",{attrs:{id:e.idPrefix+"-lastName",name:e.idPrefix+"-lastName"},model:{value:e.entity.lastName,callback:function(t){e.$set(e.entity,"lastName",t)},expression:"entity.lastName"}})],1):e._e(),e._v(" "),e.showEmail?r("b-form-group",{attrs:{label:e.emailLabel}},[r("b-form-input",{attrs:{id:e.idPrefix+"-email",name:e.idPrefix+"-email"},model:{value:e.entity.email,callback:function(t){e.$set(e.entity,"email",t)},expression:"entity.email"}})],1):e._e(),e._v(" "),e.showIsSafeEmail?r("b-form-group",{attrs:{label:e.safeEmailAddressLabel}},[r("b-form-radio-group",{attrs:{id:"isAEmailSafeToMail",options:e.boolOptions,name:"isAEmailSafeToMail"},model:{value:e.entity.isEmailSafeToMail,callback:function(t){e.$set(e.entity,"isEmailSafeToMail",t)},expression:"entity.isEmailSafeToMail"}})],1):e._e(),e._v(" "),e.showPhones?r("div",[r("label",[e._v(e._s(e.phonesLabel))]),e._v(" "),e._l(e.entity.phones,(function(t,o){return r("div",{key:o,attrs:{id:o}},[r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("b-form-group",[r("b-form-select",{attrs:{id:e.idPrefix+"-phoneType"+o,name:e.idPrefix+"-phoneType"+o,options:[{value:"mobile",text:"Mobile"},{value:"landline",text:"Land line"}]},model:{value:e.entity.phones[o].type,callback:function(t){e.$set(e.entity.phones[o],"type",t)},expression:"entity.phones[index].type"}})],1)],1),e._v(" "),r("b-col",{attrs:{cols:"7"}},[r("b-form-group",[r("b-form-input",{attrs:{id:e.idPrefix+"-phoneNumber"+o,name:e.idPrefix+"-phoneNumber"+o},model:{value:e.entity.phones[o].number,callback:function(t){e.$set(e.entity.phones[o],"number",t)},expression:"entity.phones[index].number"}})],1)],1),e._v(" "),r("b-col",{staticClass:"align-middle",attrs:{cols:"1"}},[r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"p-0 ",attrs:{variant:"link",title:"Remove"},on:{click:function(t){return t.preventDefault(),e.removePhone(o)}}},[r("b-icon",{attrs:{icon:"x-circle"}})],1)],1)],1),e._v(" "),r("b-row",[r("b-col",[e.showIsSafePhone?r("b-form-group",{staticClass:"mb-0",attrs:{label:e.safePhoneLabel}},[r("b-form-radio-group",{attrs:{id:e.idPrefix+"-isSafe"+o,name:e.idPrefix+"-isSafe"+o,options:e.boolOptions},model:{value:e.entity.phones[o].isSafe,callback:function(t){e.$set(e.entity.phones[o],"isSafe",t)},expression:"entity.phones[index].isSafe"}})],1):e._e()],1)],1)],1)})),e._v(" "),r("div",{staticClass:"text-right"},[r("b-button",{staticClass:"p-0 mb-4",attrs:{variant:"link"},on:{click:function(t){return t.preventDefault(),e.addPhone.apply(null,arguments)}}},[e._v("Click here to add another phone number")])],1)],2):e._e(),e._v(" "),e.showAddress?r("entity-address",{attrs:{addressLabel:e.addressLabel,address:e.entity.address,showOrgName:""}}):e._e(),e._v(" "),e.showPostalAddessSame?r("b-form-group",[r("b-form-checkbox",{attrs:{id:"postalAddressSame",name:"postalAddressSame",value:!0,"unchecked-value":!1},model:{value:e.entity.postalAddressSame,callback:function(t){e.$set(e.entity,"postalAddressSame",t)},expression:"entity.postalAddressSame"}},[e._v("\n              "+e._s(e.postalAddessSameLabel)+"\n            ")])],1):e._e(),e._v(" "),e.showPostalAddress&&!e.entity.postalAddressSame?r("entity-address",{attrs:{addressLabel:e.postalAddressLabel,address:e.entity.postalAddress}}):e._e(),e._v(" "),e.showIsSafePostalAddress?r("b-form-group",{attrs:{label:e.safePostalAddressLabel}},[r("b-form-radio-group",{attrs:{id:"isPostalAddressSafeToMail",options:e.boolOptions,name:"isPostalAddressSafeToMail"},model:{value:e.entity.isPostalAddressSafeToMail,callback:function(t){e.$set(e.entity,"isPostalAddressSafeToMail",t)},expression:"entity.isPostalAddressSafeToMail"}})],1):e._e(),e._v(" "),e.showPreferredContact?r("b-form-group",{attrs:{label:e.preferredContactLabel}},[r("b-form-select",{attrs:{id:"preferredContact",name:"preferredContact",options:e.preferredContactOptions},model:{value:e.entity.preferredContact,callback:function(t){e.$set(e.entity,"preferredContact",t)},expression:"entity.preferredContact"}})],1):e._e(),e._v(" "),e._t("additionalFields")],2)}),[],!1,null,"642afd50",null);t.default=component.exports},301:function(e,t,r){"use strict";r(297)},302:function(e,t,r){var o=r(49)(!1);o.push([e.i,".notice[data-v-c04a35ec]{background:var(--grey-100)!important;color:var(--grey-500)!important}.green[data-v-c04a35ec]{border-left:4px solid var(--success)!important}.blue[data-v-c04a35ec]{border-left:4px solid var(--primary)!important}",""]),e.exports=o}}]);