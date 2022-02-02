(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{339:function(e,t,o){var content=o(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(50).default)("4cc8e376",content,!0,{sourceMap:!1})},362:function(e,t,o){"use strict";o(339)},363:function(e,t,o){var r=o(49)(!1);r.push([e.i,"h6[data-v-64425c07]:first-letter{text-transform:uppercase}",""]),e.exports=r},387:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o(300),l=o(299),m={components:{entity:n.default,Notice:l.default},name:"applicantDetails",props:{form:{type:Object,default:function(){return{}}}},data:function(){return{repTypeOptions:[{text:"I am the Applicant (submitting for myself)",value:"self"},{text:"I am the Applicant's solicitor",value:"solicitor"},{text:"I am submitting this form on behalf of the Applicant",value:"other"}],boolOptions:[{text:"Yes",value:!0},{text:"No",value:!1}],aboriginalityOptions:[{text:"Yes, Aboriginal",value:"aboriginal"},{text:"Yes, Torres Strait Islander",value:"islander"},{text:"Both Aboriginal and Torres Strait Islander",value:"both"},{text:"No",value:"no"}]}},computed:Object(r.a)({youString:function(){return"self"===this.form.repType?"you":"the Applicant"},yourString:function(){return"self"===this.form.repType?"your":"the Applicant's"},AreYouString:function(){return"self"===this.form.repType?"are you":"is the Applicant"},DoYouString:function(){return"self"===this.form.repType?"do you":"is the Applicant"},DoYouStringCont:function(){return"self"===this.form.repType?"do you":"does the Applicant"},youAreString:function(){return"self"===this.form.repType?"you are":"the Applicant is"},wereYouString:function(){return"self"===this.form.repType?"were you":"was the Applicant"}},"AreYouString",(function(){return"self"===this.form.repType?"are you":"the Applicant is"})),methods:{onNumDepnedantsChange:function(){if(!(this.form.entities.applicant.details.numOfDependants<0))if(this.form.entities.applicant.details.numOfDependants<this.form.entities.applicant.details.dependants.length)for(;this.form.entities.applicant.details.numOfDependants<this.form.entities.applicant.details.dependants.length;)this.form.entities.applicant.details.dependants.pop();else if(this.form.entities.applicant.details.numOfDependants>this.form.entities.applicant.details.dependants.length)for(;this.form.entities.applicant.details.numOfDependants>this.form.entities.applicant.details.dependants.length;)this.form.entities.applicant.details.dependants.push({firstName:"",lastName:"",dob:"",relationship:"",stayOvernight:null,involvedInLegalIssue:null})}}},d=(o(362),o(35)),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-form",[o("section",{staticClass:"border-bottom border-secondary mb-4 pb-2"},[o("b-row",[o("b-col",{attrs:{cols:"4"}},[o("h6",[e._v("Are you the Applicant?")]),e._v("\n          Applicant is the person who needs legal help. If you are not the\n          Applicant please provide some details about yourself.\n        ")]),e._v(" "),o("b-col",[o("b-form-group",{attrs:{label:"Are you making this application for yourself, or for someone else?"}},[o("b-form-radio-group",{attrs:{id:"repType",options:e.repTypeOptions,name:"repType"},model:{value:e.form.repType,callback:function(t){e.$set(e.form,"repType",t)},expression:"form.repType"}})],1),e._v(" "),"solicitor"===e.form.repType?o("b-form-group",{attrs:{label:"Are you a LSC panel lawyer?"}},[o("b-form-radio-group",{attrs:{id:"isLscPanelMember",options:e.boolOptions,name:"isLscPanelMember"},model:{value:e.form.isLscPanelMember,callback:function(t){e.$set(e.form,"isLscPanelMember",t)},expression:"form.isLscPanelMember"}})],1):e._e(),e._v(" "),"solicitor"===e.form.repType&&e.form.isLscPanelMember?o("b-form-group",{attrs:{label:"Have you previously represented this client (the applicant)?"}},[o("b-form-radio-group",{attrs:{id:"prevRepresented",options:e.boolOptions,name:"prevRepresented"},model:{value:e.form.prevRepresented,callback:function(t){e.$set(e.form,"prevRepresented",t)},expression:"form.prevRepresented"}})],1):e._e(),e._v(" "),"solicitor"===e.form.repType?o("entity",{attrs:{entity:e.form.entities.repSolicitor,orgNameLabel:"Your firm or organisation name",orgAddressLabel:"Firm or organisation address",idPrefix:"repSolicitor",showOrgName:"",showFirstName:"",showLastName:"",showEmail:"",showOrgAddress:""}}):e._e(),e._v(" "),"other"===e.form.repType?o("entity",{attrs:{entity:e.form.entities.repSolicitor,idPrefix:"repOther",showFirstName:"",showLastName:"",showEmail:""}}):e._e(),e._v(" "),"other"===e.form.repType?o("div",[o("b-form-group",{attrs:{label:"Your relationship to "+e.youString}},[o("b-form-select",{attrs:{id:"repRelation",name:"repRelation",options:[{value:"Power of attorney",text:"Power of attorney"},{value:"Parent",text:"Parent"},{value:"Guardian",text:"Guardian"},{value:"Child",text:"Child"},{value:"Social worker",text:"Social worker"},{value:"Friend",text:"Friend"},{value:"Other",text:"Other"}]},model:{value:e.form.repRelation,callback:function(t){e.$set(e.form,"repRelation",t)},expression:"form.repRelation"}})],1),e._v(" "),"Other"===e.form.repRelation?o("b-form-group",{attrs:{label:"Provide details"}},[o("b-form-input",{attrs:{id:"repRelationDetail",name:"repRelationDetail"},model:{value:e.form.repRelationDetail,callback:function(t){e.$set(e.form,"repRelationDetail",t)},expression:"form.repRelationDetail"}})],1):e._e()],1):e._e()],1)],1)],1),e._v(" "),e.form.repType?o("section",{staticClass:"border-bottom border-secondary mb-4 pb-2"},[o("b-row",["self"===e.form.repType?o("b-col",{attrs:{cols:"4"}},[o("h6",[e._v("Your personal information")]),e._v("\n          Please provide details about yourself.\n        ")]):o("b-col",{attrs:{cols:"4"}},[o("h6",[e._v("Applicant information")]),e._v("\n          Please provide details about the applicant (the person this form is\n          about).\n        ")]),e._v(" "),o("b-col",[o("entity",{attrs:{entity:e.form.entities.applicant,idPrefix:"applicant",showFirstName:"",firstNameLabel:e.yourString+" given name(s)",showLastName:"",lastNameLabel:e.yourString+" family name(s)"}}),e._v(" "),"self"===e.form.repType?o("b-form-group",{attrs:{label:"Have you been known by any other name?"}},[o("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.form.entities.applicant.details.hasOtherNames,callback:function(t){e.$set(e.form.entities.applicant.details,"hasOtherNames",t)},expression:"form.entities.applicant.details.hasOtherNames"}})],1):e._e(),e._v(" "),"other"===e.form.repType?o("b-form-group",{attrs:{label:"Has the Applicant been known by any other name?"}},[o("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.form.entities.applicant.details.hasOtherNames,callback:function(t){e.$set(e.form.entities.applicant.details,"hasOtherNames",t)},expression:"form.entities.applicant.details.hasOtherNames"}})],1):e._e(),e._v(" "),e.form.entities.applicant.details.hasOtherNames?o("b-form-group",{attrs:{label:"Other given names"}},[o("b-form-input",{model:{value:e.form.entities.applicant.details.otherGivenName,callback:function(t){e.$set(e.form.entities.applicant.details,"otherGivenName",t)},expression:"form.entities.applicant.details.otherGivenName"}})],1):e._e(),e._v(" "),e.form.entities.applicant.details.hasOtherNames?o("b-form-group",{attrs:{label:"Other family names"}},[o("b-form-input",{attrs:{id:"otherFamilyName",name:"otherFamilyName"},model:{value:e.form.entities.applicant.details.otherFamilyName,callback:function(t){e.$set(e.form.entities.applicant.details,"otherFamilyName",t)},expression:"form.entities.applicant.details.otherFamilyName"}})],1):e._e(),e._v(" "),o("b-form-group",{attrs:{label:e.yourString+" date of birth"}},[o("b-form-datepicker",{model:{value:e.form.entities.applicant.details.dob,callback:function(t){e.$set(e.form.entities.applicant.details,"dob",t)},expression:"form.entities.applicant.details.dob"}})],1),e._v(" "),"solicitor"===e.form.repType&&e.form.prevRepresented?o("div",[o("b-form-group",{attrs:{label:"LSC File number",description:"Either a LSC file number or a cover letter is required"}},[o("b-form-input",{attrs:{id:"entities.applicant.details.lscFileNumber",name:"entities.applicant.details.lscFileNumber"},model:{value:e.form.entities.applicant.details.lscFileNumber,callback:function(t){e.$set(e.form.entities.applicant.details,"lscFileNumber",t)},expression:"form.entities.applicant.details.lscFileNumber"}})],1),e._v(" "),o("b-form-group",{attrs:{label:"If no LSC file number is provided, please provide covering letter details (or you can upload a document in the uploads section)"}},[o("b-form-textarea",{attrs:{rows:"3","max-rows":"6"},model:{value:e.form.coverLetterDetails,callback:function(t){e.$set(e.form,"coverLetterDetails",t)},expression:"form.coverLetterDetails"}})],1)],1):e._e(),e._v(" "),"solicitor"===e.form.repType&&!1===e.form.prevRepresented?o("div",[o("b-form-group",{attrs:{label:"Please provide covering letter details (or you can upload a document in the uploads section)"}},[o("b-form-textarea",{attrs:{rows:"3","max-rows":"6"},model:{value:e.form.coverLetterDetails,callback:function(t){e.$set(e.form,"coverLetterDetails",t)},expression:"form.coverLetterDetails"}})],1)],1):e._e()],1)],1)],1):e._e(),e._v(" "),e.form.repType?o("section",{staticClass:"border-bottom border-secondary mb-4 pb-2"},[o("b-row",[o("b-col",{attrs:{cols:"4"}},[o("h6",[e._v("Contact details")]),e._v("\n          We need at least one address (Home address, postal address or email\n          address) so we can contact you. "),o("br"),o("br"),e._v(" "),o("strong",[e._v("Please only provide contact information that feels safe to\n            provide.")])]),e._v(" "),o("b-col",[o("b-form-group",{attrs:{label:e.AreYouString+" homeless or at risk of homelessness?"}},[o("b-form-radio-group",{attrs:{id:"homeless",options:e.boolOptions,name:"homeless"},model:{value:e.form.entities.applicant.details.homeless,callback:function(t){e.$set(e.form.entities.applicant.details,"homeless",t)},expression:"form.entities.applicant.details.homeless"}})],1),e._v(" "),o("b-form-group",{attrs:{label:e.DoYouStringCont+" live on the APY lands?"}},[o("b-form-radio-group",{attrs:{id:"apyLands",options:e.boolOptions,name:"apyLands"},model:{value:e.form.entities.applicant.details.apyLands,callback:function(t){e.$set(e.form.entities.applicant.details,"apyLands",t)},expression:"form.entities.applicant.details.apyLands"}})],1),e._v(" "),o("entity",{attrs:{entity:e.form.entities.applicant,idPrefix:"applicant",showAddress:"",showPostalAddress:"",showPostalAddessSame:"",showIsSafePostalAddress:"",showPhones:"",showEmail:"",showIsSafeEmail:"",showPreferredContact:"",showIsSafePhone:"",addressLabel:e.yourString+" Home address (even if "+e.youAreString+" in custody)",emailLabel:e.yourString+" email",phonesLabel:e.yourString+" phone number(s)",safeEmailAddressLabel:"is it safe to contact "+e.youString+" on this email address?",safePhoneLabel:"is it safe to contact "+e.youString+" on this phone number?",safePostalAddressLabel:"is it safe to send "+e.youString+" mail to this address?",postalAddressLabel:e.yourString+" postal address"}})],1)],1)],1):e._e(),e._v(" "),e.form.repType?o("section",{staticClass:"border-bottom border-secondary mb-4 pb-2"},[o("b-row",[o("b-col",{attrs:{cols:"4"}},[o("h6",[e._v(e._s(e.yourString)+" circumstances")])]),e._v(" "),o("b-col",[o("b-form-group",{attrs:{label:e.DoYouStringCont+" identify as Aboriginal or Torres Strait Islander?"}},[o("b-form-radio-group",{attrs:{stacked:"",id:"aboriginality",options:e.aboriginalityOptions,name:"aboriginality"},model:{value:e.form.entities.applicant.details.aboriginality,callback:function(t){e.$set(e.form.entities.applicant.details,"aboriginality",t)},expression:"form.entities.applicant.details.aboriginality"}})],1),e._v(" "),o("b-form-group",{attrs:{label:e.AreYouString+" in prison or detention?"}},[o("b-form-radio-group",{attrs:{id:"inPrison",options:e.boolOptions,name:"inPrison"},model:{value:e.form.entities.applicant.details.inPrison,callback:function(t){e.$set(e.form.entities.applicant.details,"inPrison",t)},expression:"form.entities.applicant.details.inPrison"}})],1),e._v(" "),e.form.entities.applicant.details.inPrison?o("b-form-group",{attrs:{label:"Where"}},[o("b-form-input",{attrs:{id:"prisonName",name:"prisonName"},model:{value:e.form.entities.applicant.details.prisonName,callback:function(t){e.$set(e.form.entities.applicant.details,"prisonName",t)},expression:"form.entities.applicant.details.prisonName"}})],1):e._e(),e._v(" "),e.form.entities.applicant.details.inPrison?o("b-form-group",{attrs:{label:"Section (optional)"}},[o("b-form-input",{attrs:{id:"prisonSection",name:"prisonSection"},model:{value:e.form.entities.applicant.details.prisonSection,callback:function(t){e.$set(e.form.entities.applicant.details,"prisonSection",t)},expression:"form.entities.applicant.details.prisonSection"}})],1):e._e(),e._v(" "),e.form.entities.applicant.details.inPrison?o("b-form-group",{attrs:{label:"Idnetification number (optional)"}},[o("b-form-input",{attrs:{id:"prisonId",name:"prisonId"},model:{value:e.form.entities.applicant.details.prisonId,callback:function(t){e.$set(e.form.entities.applicant.details,"prisonId",t)},expression:"form.entities.applicant.details.prisonId"}})],1):e._e(),e._v(" "),o("b-form-group",{attrs:{label:e.wereYouString+" born overseas?"}},[o("b-form-radio-group",{attrs:{id:"bornOs",options:e.boolOptions,name:"bornOs"},model:{value:e.form.entities.applicant.details.bornOs,callback:function(t){e.$set(e.form.entities.applicant.details,"bornOs",t)},expression:"form.entities.applicant.details.bornOs"}})],1),e._v(" "),e.form.entities.applicant.details.bornOs?o("b-form-group",{attrs:{label:"Where "+e.wereYouString+" born?"}},[o("b-form-input",{attrs:{id:"bornWhere",name:"bornWhere"},model:{value:e.form.entities.applicant.details.bornWhere,callback:function(t){e.$set(e.form.entities.applicant.details,"bornWhere",t)},expression:"form.entities.applicant.details.bornWhere"}})],1):e._e(),e._v(" "),o("b-form-group",{attrs:{label:"What is the main language spoken at home?"}},[o("b-form-select",{attrs:{id:"homeLanguage",name:"homeLanguage",options:[{value:"english",text:"English"},{value:"mandarin",text:"Mandarin"}]},model:{value:e.form.entities.applicant.details.homeLanguage,callback:function(t){e.$set(e.form.entities.applicant.details,"homeLanguage",t)},expression:"form.entities.applicant.details.homeLanguage"}})],1),e._v(" "),o("b-form-group",{attrs:{label:e.DoYouStringCont+" require an interpreter?"}},[o("b-form-radio-group",{attrs:{id:"requireInterpreter",options:e.boolOptions,name:"requireInterpreter"},model:{value:e.form.entities.applicant.details.requireInterpreter,callback:function(t){e.$set(e.form.entities.applicant.details,"requireInterpreter",t)},expression:"form.entities.applicant.details.requireInterpreter"}})],1),e._v(" "),e.form.entities.applicant.details.requireInterpreter?o("b-form-group",{attrs:{label:"What language/dialect?"}},[o("b-form-select",{attrs:{id:"language",name:"language",options:[{value:"english",text:"English"},{value:"mandarin",text:"Mandarin"}]},model:{value:e.form.entities.applicant.details.language,callback:function(t){e.$set(e.form.entities.applicant.details,"language",t)},expression:"form.entities.applicant.details.language"}})],1):e._e(),e._v(" "),o("b-form-group",{attrs:{label:e.DoYouStringCont+" have a disability?"}},[o("b-form-select",{attrs:{id:"disability",name:"disability",options:[{value:"none",text:"No - I don’t have a disability"},{value:"Intelectual",text:"Intelectual"},{value:"Psychological/Psychiatric",text:"Psychological/Psychiatric"},{value:"Sensory (including speech)",text:"Sensory (including speech)"},{value:"Head injury/stroke/brain damage",text:"Head injury/stroke/brain damage"},{value:"Physical",text:"Physical"},{value:"Other",text:"Other"}]},model:{value:e.form.entities.applicant.details.disability,callback:function(t){e.$set(e.form.entities.applicant.details,"disability",t)},expression:"form.entities.applicant.details.disability"}})],1),e._v(" "),"Other"===e.form.entities.applicant.details.disability?o("b-form-group",{attrs:{label:"Provide details"}},[o("b-form-input",{attrs:{id:"disabilityDetail",name:"disabilityDetail"},model:{value:e.form.entities.applicant.details.disabilityDetail,callback:function(t){e.$set(e.form.entities.applicant.details,"disabilityDetail",t)},expression:"form.entities.applicant.details.disabilityDetail"}})],1):e._e(),e._v(" "),o("b-form-group",{attrs:{label:e.DoYouStringCont+" require extra or practical help to access our services?"}},[o("b-form-radio-group",{attrs:{id:"requireExtraHelp",options:e.boolOptions,name:"requireExtraHelp"},model:{value:e.form.entities.applicant.details.requireExtraHelp,callback:function(t){e.$set(e.form.entities.applicant.details,"requireExtraHelp",t)},expression:"form.entities.applicant.details.requireExtraHelp"}})],1),e._v(" "),e.form.entities.applicant.details.requireExtraHelp?o("b-form-group",{attrs:{label:"Provide details"}},[o("b-form-input",{attrs:{id:"extraHelpDetail",name:"extraHelpDetail"},model:{value:e.form.entities.applicant.details.extraHelpDetail,callback:function(t){e.$set(e.form.entities.applicant.details,"extraHelpDetail",t)},expression:"form.entities.applicant.details.extraHelpDetail"}})],1):e._e(),e._v(" "),o("b-form-group",{attrs:{label:e.AreYouString+" under 18?"}},[o("b-form-radio-group",{attrs:{id:"under18",options:e.boolOptions,name:"under18"},model:{value:e.form.entities.applicant.details.under18,callback:function(t){e.$set(e.form.entities.applicant.details,"under18",t)},expression:"form.entities.applicant.details.under18"}})],1),e._v(" "),o("b-form-group",{attrs:{label:"Relationship status"}},[o("b-form-select",{attrs:{id:"relationshipStatus",name:"relationshipStatus",options:[{value:"Never married",text:"Never married"},{value:"Married/DeFacto",text:"Married/DeFacto"},{value:"Separated",text:"Separated"},{value:"Divorced",text:"Divorced"},{value:"Widowed",text:"Widowed"},{value:"Other",text:"Other"}]},model:{value:e.form.relationshipStatus,callback:function(t){e.$set(e.form,"relationshipStatus",t)},expression:"form.relationshipStatus"}})],1),e._v(" "),"Other"===e.form.relationshipStatus?o("b-form-group",{attrs:{label:"Provide details"}},[o("b-form-input",{attrs:{id:"relationshipStatusDetail",name:"relationshipStatusDetail"},model:{value:e.form.relationshipStatusDetail,callback:function(t){e.$set(e.form,"relationshipStatusDetail",t)},expression:"form.relationshipStatusDetail"}})],1):e._e(),e._v(" "),o("b-form-group",{attrs:{label:e.AreYouString+" currently experiencing or at risk of family violence?"}},[o("b-form-radio-group",{attrs:{id:"riskOfViolence",options:e.boolOptions,name:"riskOfViolence"},model:{value:e.form.entities.applicant.details.riskOfViolence,callback:function(t){e.$set(e.form.entities.applicant.details,"riskOfViolence",t)},expression:"form.entities.applicant.details.riskOfViolence"}})],1),e._v(" "),o("b-form-group",{attrs:{label:"Has an allegation of family violence been made against "+e.youString+"?"}},[o("b-form-radio-group",{attrs:{id:"familyViolenceAllegation",options:e.boolOptions,name:"familyViolenceAllegation"},model:{value:e.form.entities.applicant.details.familyViolenceAllegation,callback:function(t){e.$set(e.form.entities.applicant.details,"familyViolenceAllegation",t)},expression:"\n                form.entities.applicant.details.familyViolenceAllegation\n              "}})],1),e._v(" "),o("b-form-group",{attrs:{label:e.AreYouString+" experiencing or at risk of elder abuse?",description:"Elder abuse is any act occurring within a relationship where there is an expectation of trust, which results in harm to an older person (65 or over). Abuse can include physical, sexual, financial, psychological or social abuse can include neglect."}},[o("b-form-radio-group",{attrs:{id:"riskOfElderAbuse",options:e.boolOptions,name:"riskOfElderAbuse"},model:{value:e.form.entities.applicant.details.riskOfElderAbuse,callback:function(t){e.$set(e.form.entities.applicant.details,"riskOfElderAbuse",t)},expression:"form.entities.applicant.details.riskOfElderAbuse"}})],1),e._v(" "),o("b-form-group",{attrs:{label:"Has an allegation of elder abuse been made against "+e.youString+"?"}},[o("b-form-radio-group",{attrs:{id:"elderAbuseAllegation",options:e.boolOptions,name:"elderAbuseAllegation"},model:{value:e.form.elderAbuseAllegation,callback:function(t){e.$set(e.form,"elderAbuseAllegation",t)},expression:"form.elderAbuseAllegation"}})],1)],1)],1)],1):e._e(),e._v(" "),e.form.repType&&"solicitor"!=e.form.repType?o("section",{staticClass:"border-bottom border-secondary mb-4 pb-2"},[o("b-row",[o("b-col",{attrs:{cols:"4"}},[o("h6",[e._v(e._s(e.yourString)+" dependents")]),e._v("\n          Dependents are people you are financially responsible for.\n        ")]),e._v(" "),o("b-col",[o("b-form-group",{attrs:{label:"How many people "+e.AreYouString+" financially responsible for?"}},[o("b-form-input",{attrs:{id:"numOfDependants",name:"numOfDependants",type:"number",min:"0"},on:{change:e.onNumDepnedantsChange},model:{value:e.form.entities.applicant.details.numOfDependants,callback:function(t){e.$set(e.form.entities.applicant.details,"numOfDependants",t)},expression:"form.entities.applicant.details.numOfDependants"}})],1),e._v(" "),e.form.entities.applicant.details.dependants.length>0?o("div",e._l(e.form.entities.applicant.details.dependants,(function(t,r){return o("div",{key:r,staticClass:"border-5 border-start ps-3 mb-4",attrs:{id:r}},[o("h6",[e._v("Dependant "+e._s(r+1))]),e._v(" "),o("b-row",[o("b-col",[o("entity",{attrs:{entity:e.form.entities.applicant.details.dependants[r],idPrefix:"dep0",showFirstName:"",showLastName:"",firstNameLabel:"Dependant "+(r+1)+" given name(s)",lastNameLabel:"Dependant "+(r+1)+" family name(s)"},scopedSlots:e._u([{key:"additionalFields",fn:function(){return[o("b-form-group",{attrs:{label:"Dependant "+(r+1)+" relationship to you"}},[o("b-form-select",{attrs:{id:"relationship",name:"relationship",options:[{value:"Spouse",text:"Spouse"},{value:"Defacto",text:"Defacto"},{value:"Partner",text:"Partner"},{value:"Child",text:"Child"},{value:"StepChild",text:"Step Child"},{value:"Parent",text:"Parent"},{value:"Other",text:"Other"}]},model:{value:e.form.entities.applicant.details.dependants[r].relationship,callback:function(t){e.$set(e.form.entities.applicant.details.dependants[r],"relationship",t)},expression:"\n                            form.entities.applicant.details.dependants[index]\n                              .relationship\n                          "}})],1),e._v(" "),o("b-form-group",{attrs:{label:"Dependant "+(r+1)+" Date of birth"}},[o("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"dep0dob"},model:{value:e.form.entities.applicant.details.dependants[r].dob,callback:function(t){e.$set(e.form.entities.applicant.details.dependants[r],"dob",t)},expression:"\n                            form.entities.applicant.details.dependants[index]\n                              .dob\n                          "}})],1),e._v(" "),o("b-form-group",{attrs:{label:"Do they stay overnight with you at least once a week?"}},[o("b-form-radio-group",{attrs:{id:"stayOvernight",options:e.boolOptions,name:"stayOvernight"},model:{value:e.form.entities.applicant.details.dependants[r].stayOvernight,callback:function(t){e.$set(e.form.entities.applicant.details.dependants[r],"stayOvernight",t)},expression:"\n                            form.entities.applicant.details.dependants[index]\n                              .stayOvernight\n                          "}})],1),e._v(" "),o("b-form-group",{attrs:{label:"Are they involved in your legal problem?"}},[o("b-form-radio-group",{attrs:{id:"involvedInLegalIssue",options:e.boolOptions,name:"involvedInLegalIssue"},model:{value:e.form.entities.applicant.details.dependants[r].involvedInLegalIssue,callback:function(t){e.$set(e.form.entities.applicant.details.dependants[r],"involvedInLegalIssue",t)},expression:"\n                            form.entities.applicant.details.dependants[index]\n                              .involvedInLegalIssue\n                          "}})],1)]},proxy:!0}],null,!0)})],1)],1)],1)})),0):e._e()],1)],1)],1):e._e(),e._v(" "),e.form.repType&&"solicitor"!=e.form.repType?o("section",{staticClass:"border-bottom border-secondary mb-4 pb-2"},[o("b-row",[o("b-col",{attrs:{cols:"4"}},[o("h6",[e._v("Authority to disclose")]),e._v("\n          This will only apply to the application for aid, not the legal\n          matter. If there is a conflict with the person that is nominated, we\n          reserve the right to overide the authority\n          "),o("br"),o("br"),e._v("This authority will be in place for 12 months. If you\n          would like to remove the authority please email\n          "),o("a",{attrs:{href:""}},[e._v("grants@lsc.sa.gov.au")]),e._v(".\n        ")]),e._v(" "),o("b-col",[o("b-form-group",{attrs:{label:e.DoYouStringCont+" authorise us to provide information to another person about your Legal Aid application? "}},[o("b-form-radio-group",{attrs:{id:"authToDisclose",options:e.boolOptions,name:"authToDisclose"},model:{value:e.form.authToDisclose,callback:function(t){e.$set(e.form,"authToDisclose",t)},expression:"form.authToDisclose"}})],1),e._v(" "),e.form.authToDisclose?o("b-form-group",{attrs:{label:"Their given names(s)"}},[o("b-form-input",{attrs:{id:"authToDiscloseGivenName",name:"authToDiscloseGivenName"},model:{value:e.form.authToDiscloseGivenName,callback:function(t){e.$set(e.form,"authToDiscloseGivenName",t)},expression:"form.authToDiscloseGivenName"}})],1):e._e(),e._v(" "),e.form.authToDisclose?o("b-form-group",{attrs:{label:"Their family names(s)"}},[o("b-form-input",{attrs:{id:"authToDiscloseLastName",name:"authToDiscloseLastName"},model:{value:e.form.authToDiscloseLastName,callback:function(t){e.$set(e.form,"authToDiscloseLastName",t)},expression:"form.authToDiscloseLastName"}})],1):e._e(),e._v(" "),e.form.authToDisclose?o("b-form-group",{attrs:{label:"Their relationship to "+e.youString}},[o("b-form-select",{attrs:{id:"relationship",name:"relationship",options:[{value:"Spouse",text:"Spouse"},{value:"Defacto",text:"Defacto"},{value:"Partner",text:"Partner"},{value:"Child",text:"Child"},{value:"StepChild",text:"Step Child"},{value:"Parent",text:"Parent"},{value:"Other",text:"Other"}]},model:{value:e.form.authToDiscloseRelationship,callback:function(t){e.$set(e.form,"authToDiscloseRelationship",t)},expression:"form.authToDiscloseRelationship"}})],1):e._e(),e._v(" "),e.form.authToDisclose?o("b-form-group",{attrs:{label:"Their contact details"}},[o("b-form-textarea",{attrs:{id:"authToDiscloseContactDetail",name:"authToDiscloseContactDetail",rows:"3","max-rows":"6"},model:{value:e.form.authToDiscloseContactDetail,callback:function(t){e.$set(e.form,"authToDiscloseContactDetail",t)},expression:"form.authToDiscloseContactDetail"}})],1):e._e(),e._v(" "),!0===e.form.authToDisclose?o("notice",{attrs:{message:"Please download and sign the\n            <a href=''>Authority to Discolose form</a>. You will be asked to\n            upload it in the Attachments step."}}):e._e()],1)],1)],1):e._e()])],1)}),[],!1,null,"64425c07",null);t.default=component.exports}}]);