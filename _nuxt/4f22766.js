(window.webpackJsonp=window.webpackJsonp||[]).push([[10,23,26],{297:function(e,t,o){var content=o(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(50).default)("3ee8f6df",content,!0,{sourceMap:!1})},299:function(e,t,o){"use strict";o.r(t);var r={name:"notice",props:{message:{type:String,default:""},borderClass:{type:String,default:"green"}},data:function(){return{}},computed:{},methods:{}},n=(o(301),o(35)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.borderClass+" notice p-2",domProps:{innerHTML:e._s(e.message)}})}),[],!1,null,"c04a35ec",null);t.default=component.exports},301:function(e,t,o){"use strict";o(297)},302:function(e,t,o){var r=o(49)(!1);r.push([e.i,".notice[data-v-c04a35ec]{background:var(--grey-100)!important;color:var(--grey-500)!important}.green[data-v-c04a35ec]{border-left:4px solid var(--success)!important}.blue[data-v-c04a35ec]{border-left:4px solid var(--primary)!important}",""]),e.exports=r},306:function(e,t,o){var content=o(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(50).default)("67ddb8ef",content,!0,{sourceMap:!1})},314:function(e,t,o){"use strict";o(306)},315:function(e,t,o){var r=o(49)(!1);r.push([e.i,".notice[data-v-68254308]{border-left:4px solid var(--success)!important;background:var(--grey-100)!important;color:var(--grey-500)!important}",""]),e.exports=r},319:function(e,t,o){"use strict";o.r(t);o(225);var r={name:"notice",props:{form:{type:Object,default:function(){return{}}},numOfFiles:{type:Number,default:1},file:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{},methods:{}},n=(o(314),o(35)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",e._l(e.files,(function(t,r){return o("div",{key:r,staticClass:"mb-2 courts pl-3 mb-4",attrs:{id:r}},[o("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:t.uploadedFile,callback:function(o){e.$set(t,"uploadedFile",o)},expression:"file.uploadedFile"}})],1)})),0)}),[],!1,null,"68254308",null);t.default=component.exports},358:function(e,t,o){"use strict";o.r(t);var r,n=o(0),l=(o(99),o(100),o(299)),c={components:{uploadFiles:o(319).default,Notice:l.default},name:"attachments",props:{form:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:(r={files:function(){var e=[{type:"Mockup sample with comments",comments:"This will not be part of the form, only added so it shows how comments will appear."}];return!0===this.form.authToDisclose&&e.push({type:"Authority to disclose form"}),"Employed"!==this.form.entities.applicant.incomeAssets.employmentType&&"Self employed"!==this.form.entities.applicant.incomeAssets.employmentType||e.push({type:this.yourString+" Pay Slips (last 4)"}),"Employed"!==this.form.entities.fap.incomeAssets.employmentType&&"Self employed"!==this.form.entities.fap.incomeAssets.employmentType||e.push({type:this.form.entities.fap.firstName+" "+this.form.entities.fap.lastName+" Pay Slip",multi:!0}),!0===this.form.entities.applicant.benefits.receivesBenefit&&!0===this.form.entities.applicant.benefits.maxPayment&&e.push({type:this.yourString+" Bank Statement",multi:!0}),!0===this.form.entities.applicant.benefits.receivesBenefit&&!0===this.form.entities.applicant.benefits.maxPayment&&e.push({type:this.form.entities.fap.firstName+" "+this.form.entities.fap.lastName+"'s Bank Statement",multi:!0}),!1===this.form.entities.applicant.benefits.maxPayment&&e.push({type:this.yourString+" Centrelink Statement"}),!1===this.form.entities.fap.receivesMaxBenefits&&e.push({type:this.form.entities.fap.firstName+" "+this.form.entities.fap.lastName+"'s Centrelink Statement"}),"Self employed"===this.form.entities.applicant.incomeAssets.employmentType&&e.push({type:this.yourString+" Profit & Loss Statement"}),"Self employed"===this.form.entities.fap.incomeAssets.employmentType&&e.push({type:this.form.entities.fap.firstName+" "+this.form.entities.fap.lastName+"/s Profit & Loss Statement"}),"Self employed"!==this.form.entities.applicant.incomeAssets.employmentType&&!0!==this.form.entities.applicant.incomeAssets.isPrimaryProducer||e.push({type:this.yourString+" Tax Return"}),"Self employed"!==this.form.entities.fap.incomeAssets.employmentType&&!0!==this.form.entities.fap.incomeAssets.isPrimaryProducer||e.push({type:this.form.entities.fap.firstName+" "+this.form.entities.fap.lastName+"/s Tax Return"}),!0===this.form.entities.applicant.incomeAssets.hasLegalFeesBeenPaid&&e.push({type:"Paid legal fees Receipts",multi:!0}),!0===this.form.problem.dcp.hasDcpDocuments&&(e.push({type:"Court Order",multi:!0}),e.push({type:"DCP Documents",multi:!0})),this.form.problem.problemType.includes("Family Law problem")&&e.push({type:"Family Documents",multi:!0}),!0===this.form.problem.familyLaw.beenToCounseling&&(e.push({type:"Family Dispute Resolution Certificate"}),e.push({type:"Heads of Agreement"})),this.form.problem.problemType.includes("Criminal Law problem")&&e.push({type:"Criminal Documents",multi:!0}),this.form.problem.problemType.includes("Civil/General Law problem")&&e.push({type:"Civil/General Documents",multi:!0}),!0===this.form.prevRepresented&&""===this.form.coverLetterDetails&&e.push({type:"Covering Letter"}),e},youString:function(){return"self"===this.form.repType?"you":"the Applicant"},yourString:function(){return"self"===this.form.repType?"your":"the Applicant's"},AreYouString:function(){return"self"===this.form.repType?"are you":"is the Applicant"},DoYouString:function(){return"self"===this.form.repType?"do you":"is the Applicant"},DoYouStringCont:function(){return"self"===this.form.repType?"do you":"does the Applicant"},youAreString:function(){return"self"===this.form.repType?"you are":"the Applicant is"},wereYouString:function(){return"self"===this.form.repType?"were you":"was the Applicant"}},Object(n.a)(r,"AreYouString",(function(){return"self"===this.form.repType?"are you":"the Applicant is"})),Object(n.a)(r,"AreYouStringReverse",(function(){return"self"===this.form.repType?"are you":"is the Applicant"})),Object(n.a)(r,"additionalS",(function(){return"self"===this.form.repType?"":"s"})),Object(n.a)(r,"yoursString",(function(){return"self"===this.form.repType?"yours":"the Applicant/'s"})),Object(n.a)(r,"haveYouString",(function(){return"self"===this.form.repType?"have you":"has the Applicant"})),r),methods:{}},m=o(35),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("section",{staticClass:"border-bottom border-secondary mb-4 pb-2"},[o("b-row",[o("b-col",[o("h6",[e._v("Attachments")]),e._v(" "),o("p",[e._v("\n          Please upload all required documents. If you wish to add comments to\n          a file, click on the pencil icon.\n        ")]),e._v(" "),o("notice",{attrs:{message:"Prototype notes: <br>Not all functionality is enabled in the prototype.<br>Clicking on the comment icon will open a popup with a text area. When submitted a comment - it will be displayed below the file upload field (see example below).<br>Clicking on Add another {{ docType }} will add another file input in the same doc type row."}}),e._v(" "),o("small")],1)],1),e._v(" "),o("b-row",[o("b-col",[o("b-form-group",[o("table",{staticClass:"table table-bordered"},[o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[e._v("Document Type")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("File")])])]),e._v(" "),o("tbody",e._l(e.files,(function(t,r){return o("tr",{key:r,attrs:{id:r}},[o("td",[e._v(e._s(t.type))]),e._v(" "),o("td",[o("b-row",[o("b-col",{staticClass:"col-9"},[o("b-form-group",{attrs:{description:"Click on the chat icon to add comments about this file (optional)"}},[o("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."}})],1)],1),e._v(" "),o("b-col",{staticClass:"text-right",attrs:{col1:""}},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"p-0",attrs:{variant:"link",title:"Add/Edit a Comment"},on:{click:function(e){e.preventDefault()}}},[o("b-icon",{attrs:{icon:"pencil"}})],1)],1),e._v(" "),o("b-col",{staticClass:"text-right",attrs:{col1:""}},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"p-0",attrs:{variant:"link",title:"Remove"},on:{click:function(e){e.preventDefault()}}},[o("b-icon",{attrs:{icon:"x-circle"}})],1)],1)],1),e._v(" "),t.comments?o("b-row",[o("b-col",[o("notice",{attrs:{message:"Your comments: "+t.comments,borderClass:"blue"}})],1)],1):e._e(),e._v(" "),o("b-row",[o("b-col",{staticClass:"text-right"},[t.multi?o("b-button",{staticClass:"p-0 mt-3",attrs:{variant:"link"},on:{click:function(e){e.preventDefault()}}},[e._v("Click here to add another "+e._s(t.type))]):e._e()],1)],1)],1)])})),0)])])],1)],1)],1)])}),[],!1,null,"5937afcc",null);t.default=component.exports}}]);