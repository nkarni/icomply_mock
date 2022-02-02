(window.webpackJsonp=window.webpackJsonp||[]).push([[19,23],{297:function(e,t,o){var content=o(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(50).default)("3ee8f6df",content,!0,{sourceMap:!1})},299:function(e,t,o){"use strict";o.r(t);var n={name:"notice",props:{message:{type:String,default:""},borderClass:{type:String,default:"green"}},data:function(){return{}},computed:{},methods:{}},r=(o(301),o(35)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.borderClass+" notice p-2",domProps:{innerHTML:e._s(e.message)}})}),[],!1,null,"c04a35ec",null);t.default=component.exports},301:function(e,t,o){"use strict";o(297)},302:function(e,t,o){var n=o(49)(!1);n.push([e.i,".notice[data-v-c04a35ec]{background:var(--grey-100)!important;color:var(--grey-500)!important}.green[data-v-c04a35ec]{border-left:4px solid var(--success)!important}.blue[data-v-c04a35ec]{border-left:4px solid var(--primary)!important}",""]),e.exports=n},311:function(e,t,o){var content=o(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(50).default)("de7d5a40",content,!0,{sourceMap:!1})},326:function(e,t,o){"use strict";o(311)},327:function(e,t,o){var n=o(49)(!1);n.push([e.i,".notice[data-v-58e3c681]{border-left:4px solid var(--success)!important;background:var(--grey-100)!important;color:var(--grey-500)!important}",""]),e.exports=n},354:function(e,t,o){"use strict";o.r(t);var n,r=o(0),l=(o(160),{name:"incomeAssetsApplicant",components:{Notice:o(299).default},props:{form:{type:Object,default:function(){return{}}}},data:function(){return{boolOptions:[{text:"Yes",value:!0},{text:"No",value:!1}],benefitsOptions:["Age Pension","ABSTUDY","Austudy","Department of Veteran Affairs Payments","Disability Support Pension","JobSeeker Payment","Parenting Payment","Youth Allowance","None of the above"],usualJobOption:["Accommodation and Food Services","Administrative and Support Services","Agriculture, Forestry, Fishing","Arts and Recreation Services","Construction","Education and Training","Electricity, Gas, Water, Waste Services","Financial and Insurance Services","Health Care and Social Assistance","Information Media and Telecommunications","Manufacturing","Mining","Other Services","Professional, Scientific, Technical Services","Public Administration and Safety","Rental, Hiring and Real Estate Services","Retail Trade","Transport, Postal and Warehousing","Wholesale Trade"]}},computed:(n={youString:function(){return"self"===this.form.repType?"you":"the Applicant"},yourString:function(){return"self"===this.form.repType?"your":"the Applicant's"},AreYouString:function(){return"self"===this.form.repType?"are you":"is the Applicant"},DoYouString:function(){return"self"===this.form.repType?"do you":"is the Applicant"},DoYouStringCont:function(){return"self"===this.form.repType?"do you":"does the Applicant"},youAreString:function(){return"self"===this.form.repType?"you are":"the Applicant is"},wereYouString:function(){return"self"===this.form.repType?"were you":"was the Applicant"}},Object(r.a)(n,"AreYouString",(function(){return"self"===this.form.repType?"are you":"the Applicant is"})),Object(r.a)(n,"AreYouStringReverse",(function(){return"self"===this.form.repType?"are you":"is the Applicant"})),Object(r.a)(n,"additionalS",(function(){return"self"===this.form.repType?"":"s"})),Object(r.a)(n,"yoursString",(function(){return"self"===this.form.repType?"yours":"the Applicant/'s"})),Object(r.a)(n,"haveYouString",(function(){return"self"===this.form.repType?"have you":"has the Applicant"})),Object(r.a)(n,"noIncomeLabel",(function(){return"self"===this.form.repType?"If you do not receive any income, please give details of how you are supported":"If the Applicant does not receive any income, please give details of how they are supported"})),Object(r.a)(n,"paymentsLabel",(function(){return"self"===this.form.repType?"Enter the net amount of any other income or payment (after tax) you receive and how often you receive it":"Enter the net amount of any other income or payment (after tax) the Applicant receives and how often they receive it"})),n),methods:{addCar:function(){this.form.entities.applicant.incomeAssets.vehicles.push({make:"",model:"",year:"",value:"",owing:""})},removeCar:function(i){this.form.entities.applicant.incomeAssets.vehicles.splice(i,1)}}}),c=(o(326),o(35)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("section",{staticClass:"border-bottom border-secondary mb-4 pb-2"},[o("b-row",[o("b-col",{attrs:{cols:"4"}},[o("h6",[e._v("Income Details")]),e._v(" "),o("p",[e._v("All fields are mandatory unless marked as optional.")])]),e._v(" "),o("b-col",[o("b-form-group",{attrs:{label:e.AreYouString+" currently employed?"}},[o("b-form-radio-group",{attrs:{stacked:"",options:["Employed","Self employed","Unemployed"]},model:{value:e.form.entities.applicant.incomeAssets.employmentType,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"employmentType",t)},expression:"form.entities.applicant.incomeAssets.employmentType"}})],1),e._v(" "),"Self employed"===e.form.entities.applicant.incomeAssets.employmentType?o("b-form-group",{attrs:{label:e.AreYouString+" a primary producer (farmer, grazier etc)?"}},[o("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.form.entities.applicant.incomeAssets.isPrimaryProducer,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"isPrimaryProducer",t)},expression:"form.entities.applicant.incomeAssets.isPrimaryProducer"}})],1):e._e(),e._v(" "),"Unemployed"!==e.form.entities.applicant.incomeAssets.employmentType?o("b-form-group",{attrs:{label:"Net weekly wages or earnings",description:"The amount paid after tax, the cash income."}},[o("b-input-group",{attrs:{prepend:"$"}},[o("b-form-input",{model:{value:e.form.entities.applicant.incomeAssets.benefitsAmount,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"benefitsAmount",t)},expression:"form.entities.applicant.incomeAssets.benefitsAmount"}})],1)],1):e._e(),e._v(" "),"Employed"===e.form.entities.applicant.incomeAssets.employmentType?o("notice",{staticClass:"mb-4",attrs:{message:"A copy of "+e.yourString+" last 4 payslips will be required in the attachments page."}}):e._e(),e._v(" "),"Self employed"===e.form.entities.applicant.incomeAssets.employmentType?o("notice",{staticClass:"mb-4",attrs:{message:"A copy of "+e.yourString+" last tax return and Profit & Loss statement will be required in the attachments page."}}):e._e(),e._v(" "),"Employed"===e.form.entities.applicant.incomeAssets.employmentType?o("b-form-group",{attrs:{label:e.yourString+" usual job"}},[o("b-form-select",{attrs:{options:e.usualJobOption},model:{value:e.form.entities.applicant.incomeAssets.usualJob,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"usualJob",t)},expression:"form.entities.applicant.incomeAssets.usualJob"}})],1):e._e(),e._v(" "),"Unemployed"===e.form.entities.applicant.incomeAssets.employmentType?o("b-form-group",{attrs:{label:"When did "+e.youString+" last do paid work? (optional)",description:"Enter the month and year."}},[o("b-form-input",{model:{value:e.form.entities.applicant.incomeAssets.lasWorked,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"lasWorked",t)},expression:"form.entities.applicant.incomeAssets.lasWorked"}})],1):e._e(),e._v(" "),o("b-form-group",{attrs:{label:e.paymentsLabel}},[o("table",{staticClass:"table table-bordered"},[o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[e._v("Income")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("Frequency")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("Amount")])])]),e._v(" "),o("tbody",e._l(e.form.entities.applicant.incomeAssets.incomePayments,(function(t,n){return o("tr",{key:n,attrs:{id:n}},[o("td",[e._v("\n                  "+e._s(t.type)+"\n                ")]),e._v(" "),o("td",{attrs:{align:"right"}},[o("b-form-select",{attrs:{options:["Weekly","fortnightly","Monthly"]},model:{value:t.incomePayments,callback:function(o){e.$set(t,"incomePayments",o)},expression:"income.incomePayments"}})],1),e._v(" "),o("td",{attrs:{align:"right"}},[o("b-input-group",{attrs:{prepend:"$"}},[o("b-form-input",{model:{value:t.amount,callback:function(o){e.$set(t,"amount",o)},expression:"income.amount"}})],1)],1)])})),0)])]),e._v(" "),o("b-form-group",{attrs:{label:e.noIncomeLabel,description:"This field is mandatory if no other income was indicated."}},[o("b-form-input",{model:{value:e.form.entities.applicant.incomeAssets.noIncomeExplanation,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"noIncomeExplanation",t)},expression:"form.entities.applicant.incomeAssets.noIncomeExplanation"}})],1)],1)],1)],1),e._v(" "),o("section",{staticClass:"border-bottom border-secondary mb-4 pb-2"},[o("b-row",[o("b-col",{attrs:{cols:"4"}},["Self"===e.form.repType?o("h6",[e._v("Your Expenses")]):o("h6",[e._v("The Applicant's Expenses")])]),e._v(" "),o("b-col",[o("b-form-group",{attrs:{label:"Enter the amount of "+e.yourString+" expenses and how frequently they are paid"}},[o("table",{staticClass:"table table-bordered"},[o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[e._v("Expense")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("Frequency")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("Amount")])])]),e._v(" "),o("tbody",e._l(e.form.entities.applicant.incomeAssets.expensePayments,(function(t,n){return o("tr",{key:n,attrs:{id:n}},[o("td",[e._v("\n                  "+e._s(t.type)+"\n                ")]),e._v(" "),o("td",{attrs:{align:"right"}},[o("b-form-select",{attrs:{options:["Weekly","fortnightly","Monthly"]},model:{value:t.frequency,callback:function(o){e.$set(t,"frequency",o)},expression:"expense.frequency"}})],1),e._v(" "),o("td",{attrs:{align:"right"}},[o("b-input-group",{attrs:{prepend:"$"}},[o("b-form-input",{model:{value:t.amount,callback:function(o){e.$set(t,"amount",o)},expression:"expense.amount"}})],1)],1)])})),0)])])],1)],1)],1),e._v(" "),o("section",{staticClass:"border-bottom border-secondary mb-4 pb-2"},[o("b-row",[o("b-col",{attrs:{cols:"4"}},[o("h6",[e._v("Vehicles")]),e._v(" "),o("p",[e._v("\n          We need to know about any motor vehicles where\n          "+e._s(e.yoursString)+" equity is more than $30,000.\n        ")])]),e._v(" "),o("b-col",[o("b-form-group",{attrs:{label:e.DoYouStringCont+" own any motor vehicles with equity greater than $30,000?"}},[o("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.form.entities.applicant.incomeAssets.hasVehicles,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"hasVehicles",t)},expression:"form.entities.applicant.incomeAssets.hasVehicles"}})],1)],1)],1),e._v(" "),o("b-row",[o("b-col",[!0===e.form.entities.applicant.incomeAssets.hasVehicles?o("b-form-group",{attrs:{label:"Please list "+e.yourString+" vehicles"}},[o("table",{staticClass:"table table-bordered"},[o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[e._v("Make")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("Model")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("Year")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("Sale value")]),e._v(" "),o("th",{attrs:{scope:"col"}},[e._v("Amount owing")]),e._v(" "),o("td",{attrs:{scope:"col"}},[e._v(" ")])])]),e._v(" "),o("tbody",e._l(e.form.entities.applicant.incomeAssets.vehicles,(function(t,n){return o("tr",{key:n,attrs:{id:n}},[o("td",{attrs:{align:"right"}},[o("b-form-input",{model:{value:t.make,callback:function(o){e.$set(t,"make",o)},expression:"car.make"}})],1),e._v(" "),o("td",{attrs:{align:"right"}},[o("b-form-input",{model:{value:t.model,callback:function(o){e.$set(t,"model",o)},expression:"car.model"}})],1),e._v(" "),o("td",{attrs:{align:"right"}},[o("b-form-input",{model:{value:t.year,callback:function(o){e.$set(t,"year",o)},expression:"car.year"}})],1),e._v(" "),o("td",{attrs:{align:"right"}},[o("b-input-group",{attrs:{prepend:"$"}},[o("b-form-input",{model:{value:t.value,callback:function(o){e.$set(t,"value",o)},expression:"car.value"}})],1)],1),e._v(" "),o("td",{attrs:{align:"right"}},[o("b-input-group",{attrs:{prepend:"$"}},[o("b-form-input",{model:{value:t.owing,callback:function(o){e.$set(t,"owing",o)},expression:"car.owing"}})],1)],1),e._v(" "),o("td",{staticClass:"align-middle"},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"p-0",attrs:{variant:"link",title:"Remove"},on:{click:function(t){return t.preventDefault(),e.removeCar(n)}}},[o("b-icon",{attrs:{icon:"x-circle"}})],1)],1)])})),0)]),e._v(" "),o("div",{staticClass:"text-right"},[o("b-button",{staticClass:"p-0 mb-4",attrs:{variant:"link"},on:{click:function(t){return t.preventDefault(),e.addCar.apply(null,arguments)}}},[e._v("Click here to add another vehicle")])],1)]):e._e()],1)],1)],1),e._v(" "),o("section",{staticClass:"border-bottom border-secondary mb-4 pb-2"},[o("b-row",[o("b-col",{attrs:{cols:"4"}},[o("h6",[e._v("Other Information")])]),e._v(" "),o("b-col",[o("b-form-group",{attrs:{label:e.yourString+" current bank balance",description:"Enter combined total if more than one account."}},[o("b-input-group",{attrs:{prepend:"$"}},[o("b-form-input",{model:{value:e.form.entities.applicant.incomeAssets.bankBalance,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"bankBalance",t)},expression:"form.entities.applicant.incomeAssets.bankBalance"}})],1)],1),e._v(" "),o("b-form-group",{attrs:{label:e.DoYouStringCont+" own any shares/investments/cryptocurrency?"}},[o("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.form.entities.applicant.incomeAssets.hasInvestments,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"hasInvestments",t)},expression:"form.entities.applicant.incomeAssets.hasInvestments"}})],1),e._v(" "),!0===e.form.entities.applicant.incomeAssets.hasInvestments?o("b-form-group",{attrs:{label:"Please provide net value if sold today",description:"Enter combined total."}},[o("b-input-group",{attrs:{prepend:"$"}},[o("b-form-input",{model:{value:e.form.entities.applicant.incomeAssets.investmentsValue,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"investmentsValue",t)},expression:"form.entities.applicant.incomeAssets.investmentsValue"}})],1)],1):e._e(),e._v(" "),o("b-form-group",{attrs:{label:e.haveYouString+" or any person or group paid any of "+e.yourString+" legal fees for this case?"}},[o("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.form.entities.applicant.incomeAssets.hasLegalFeesBeenPaid,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"hasLegalFeesBeenPaid",t)},expression:"\n              form.entities.applicant.incomeAssets.hasLegalFeesBeenPaid\n            "}})],1),e._v(" "),e.form.entities.applicant.incomeAssets.hasLegalFeesBeenPaid?o("notice",{staticClass:"mb-4",attrs:{form:e.form,message:"A copy of the receipts will be required in the attachments step. "}}):e._e(),e._v(" "),o("b-form-group",{attrs:{label:"Please provide details"}},[o("b-form-textarea",{attrs:{rows:"3","max-rows":"6"},model:{value:e.form.entities.applicant.incomeAssets.hasLegalFeesBeenPaidDetails,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"hasLegalFeesBeenPaidDetails",t)},expression:"\n              form.entities.applicant.incomeAssets.hasLegalFeesBeenPaidDetails\n            "}})],1),e._v(" "),o("b-form-group",{attrs:{label:e.haveYouString+" sold or given away money or real estate property in the last 12 months worth more than $1,000?"}},[o("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.form.entities.applicant.incomeAssets.gaveAwayMoneyOrProperty,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"gaveAwayMoneyOrProperty",t)},expression:"\n              form.entities.applicant.incomeAssets.gaveAwayMoneyOrProperty\n            "}})],1),e._v(" "),o("b-form-group",{attrs:{label:"Please provide details"}},[o("b-form-textarea",{attrs:{rows:"3","max-rows":"6"},model:{value:e.form.entities.applicant.incomeAssets.gaveAwayMoneyOrPropertyDetails,callback:function(t){e.$set(e.form.entities.applicant.incomeAssets,"gaveAwayMoneyOrPropertyDetails",t)},expression:"\n              form.entities.applicant.incomeAssets\n                .gaveAwayMoneyOrPropertyDetails\n            "}})],1)],1)],1)],1)])}),[],!1,null,"58e3c681",null);t.default=component.exports}}]);