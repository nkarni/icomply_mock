<template>
  <div>
    <!-- A CONTAINER OF THE NAVIGATION ITEMS AND THE FLOW BASED ON POSITION IN THE FLOW -->

    <b-container v-if="form.userRole !== '' && newFlow">
      <!-- FORM HEADER -->
      <b-row>
        <b-col cols="8">
          <h3 class="text-primary">
            Application for an entry permit
            <span v-if="form.permitHolder.firstName !== ''">
              for {{ form.permitHolder.firstName }}
              {{ form.permitHolder.lastName }}<br
            /></span>
            <small style="font-size: 16px">({{ roleName }} view)</small>
          </h3>
        </b-col>
        <b-col cols="4" class="text-right">
          <b-button>Reference: YCFRU</b-button>
          <b-button variant="primary">Save for later</b-button>
        </b-col>
      </b-row>

      <!-- GLOBAL NAV -->
      <b-row class="mt-4">
          <b-tabs
            v-model="tabIndex"
            vertical
            nav-wrapper-class="w-30"
            class="w-100"
            active-nav-item-class="text-primary laap-nav-item-active"
            nav-class="laap-nav"
            content-class="card p-3"
          >
          <div v-for="(tab, index) in currentWorkflow">
            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>{{ tab.label }}</h5>
                <!-- <span>How it works and what is expected of you</span> -->
              </template>

              <div v-for="comp in tab.comps">
                <component :is="comp" :form="form"></component>
              </div>
            </b-tab>
          
          </div>
          </b-tabs>
        </b-row>

   
    



    </b-container>

    <!-- MOCKUP CONTROL FOR REVIEW AND DEBUGGING OF THE PROCESS (TEMPORARY) -->
    <b-container>
      <b-row class="mt-4">
        <b-col>
          <p>
            Follow the logical life cycle of the form by clicking on each phase
            below. Do take the time to fill in the data in each phase to get to
            correct impression.
          </p>
          <b-form-group label="Form life cycle control:">
            <b-form-radio-group>
              <ol>
                <li>
                  <b-button
                    variant="link"
                    @click.prevent="
                      form.userRole = 'admin';
                      tabIndex = 0;
                    "
                  >
                    Contact Person
                    <span
                      class="currentRole"
                      v-if="
                        form.userRole === 'admin' && form.userRolePhase === ''
                      "
                    >
                      (current)</span
                    >
                  </b-button>

                  <ul>
                    <li>starts the form</li>
                    <li>fills it and sends to PPH</li>
                    <li>
                      note: if admin is also the PPH then the form is sent
                      straight to the Comm member (step 4) skipping steps 2 & 3)
                    </li>
                  </ul>
                </li>
                <li v-if="!form.adminUserRolesArray.includes('pph')">
                  <b-button
                    variant="link"
                    @click.prevent="
                      form.userRole = 'permitHolder';
                      tabIndex = 0;
                    "
                  >
                    PPH
                    <span
                      class="currentRole"
                      v-if="form.userRole === 'permitHolder'"
                    >
                      (current)</span
                    >
                  </b-button>
                  <ul>
                    <li>reviews and add corrections, missing information</li>
                    <li>fills in declaration</li>
                    <li>when submitted the form - admin is informed</li>
                  </ul>
                </li>
                <li v-if="!form.adminUserRolesArray.includes('pph')">
                  <b-button
                    variant="link"
                    @click.prevent="
                      form.userRole = 'admin';
                      form.userRolePhase = 'pphInfoReview';
                      tabIndex = 0;
                    "
                  >
                    Contact Person (PPH info review)
                    <span
                      class="currentRole"
                      v-if="
                        form.userRole === 'admin' &&
                        form.userRolePhase === 'pphInfoReview'
                      "
                    >
                      (current)</span
                    >
                  </b-button>
                  <ul>
                    <li>
                      reviews data entered by PPH, any mismatch with their
                      previous information entered initially by admin is
                      highlighted
                    </li>
                    <li>
                      confirms they corrected their own records if required (off
                      form).
                    </li>
                    <li>
                      note: if admin is also the comm member, then steps 4 & 5
                      ADMIN STILL NEEDS TO FILL IN DECLARATION are skipped and
                      the form is submitted to FWC (caseHQ)
                    </li>
                  </ul>
                </li>
                <li v-if="!form.adminUserRolesArray.includes('member')">
                  <b-button
                    variant="link"
                    @click.prevent="
                      form.userRole = 'committeeMember';
                      tabIndex = 0;
                    "
                  >
                    Comm member
                    <span
                      class="currentRole"
                      v-if="form.userRole === 'committeeMember'"
                    >
                      (current)</span
                    >
                  </b-button>
                  <ul>
                    <li>reviews and add corrections, missing information</li>
                    <li>fills in declaration</li>
                    <li>when submitted the form - admin is informed</li>
                  </ul>
                </li>
                <li>
                  <b-button
                    variant="link"
                    @click.prevent="
                      form.userRole = 'admin';
                      form.userRolePhase = 'adminMemberReview';
                      tabIndex = 0;
                    "
                  >
                    Contact Person (Comm member info review and final
                    submission)
                    <span
                      class="currentRole"
                      v-if="
                        form.userRole === 'admin' &&
                        form.userRolePhase === 'adminMemberReview'
                      "
                    >
                      (current)</span
                    >
                  </b-button>

                  <ul>
                    <li>
                      reviews data entered by Comm member, any mismatch with
                      their previous information entered initially by admin is
                      highlighted
                    </li>
                    <li>
                      confirms they corrected their own records if required (off
                      form).
                    </li>
                    <li>Submits the form to FWC (caseHQ)</li>
                  </ul>
                </li>
              </ol>
            </b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>

    <!-- MOCKUP FOOTER -->
    <b-container v-if="form.userRole !== ''">
      <!-- <b-row class="mt-4">
        <b-col cols="12">
          <b-card>
            <p>Validation information and limitations of this mockup:</p>
            <ul>
              <li>
                The purpose of this prototype is to verify the logic of
                conditionally hidden fields, labels and text, and user flow. It
                does not apply validation.
              </li>
              <li>
                The data is not saved in a database - the form data will reset
                every time the browser window is refreshed. When testing
                different use cases, it would be good to refresh the browser
                window and start with a fresh form when switching from on use
                case to another (to avoid confusion).
              </li>

              <li>
                Each tab will be validated before the user can go to the next
                tab (this ensures they don't have to go back and forth to pass
                validation). This mockup doesn't affect validation however the
                rule is that All visible fields are mandatory unless they are
                marked as optional.
              </li>

              <li>
                The section below shows the data as it exists in the form and is
                updated in real time. The data structure is temporary and may be
                changed when actual development starts. However, I thought it
                may help you in seeing what data exists in the form as you test
                it.
              </li>
              <li>
                With regards to tabs navigation, the following items will be
                completed when we build the site and do not work in the
                prototype because they depend on validation:
                <ul>
                  <li>
                    Tab navigation links will change colour depending on the
                    state of that tab (currently open has blue tag, completed is
                    in green, etc)
                  </li>
                </ul>
              </li>
            </ul>
          </b-card>
        </b-col>
      </b-row> -->
      <b-row class="mt-4">
        <b-col cols="12">
          <b-card>
            <p>Current data:</p>

            <pre>{{ form }}</pre>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import cpProcessTab from "../components/f42/comps/cpProcessTab.vue";
import f42OrgSearch from "../components/f42/comps/f42OrgSearch.vue";
import cpIdentity from "../components/f42/comps/cpIdentity.vue";
import cpPphDetailsTab from "../components/f42/comps/cpPphDetailsTab.vue";
import cpMcmDetailsTab from "../components/f42/comps/cpMcmDetailsTab.vue";
import cpSubmitTab from "../components/f42/comps/cpSubmitTab.vue";

import pphProcessTab from "../components/f42/comps/pphProcessTab.vue";
import pphYourDetailsTab from "../components/f42/comps/pphYourDetailsTab.vue";
import pphPhotoSignatureTab from "../components/f42/comps/pphPhotoSignatureTab.vue";
import pphPqmTab from "../components/f42/comps/pphPqmTab.vue";

import cpPphReviewTab from "../components/f42/comps/cpPphReviewTab.vue";
import mcmProcessTab from "../components/f42/comps/mcmProcessTab.vue";

import mcmYourDetailsTab from "../components/f42/comps/mcmYourDetailsTab.vue";
import mcmAboutPphTab from "../components/f42/comps/mcmAboutPphTab.vue";
import mcmPhotoSignatureTab from "../components/f42/comps/mcmPhotoSignatureTab.vue";
import mcmPqmTab from "../components/f42/comps/mcmPqmTab.vue";

import cpPphFinalReviewTab from "../components/f42/comps/cpPphFinalReviewTab.vue";
import cpMcmFinalReviewTab from "../components/f42/comps/cpMcmFinalReviewTab.vue";

import cpAndPphPphYourDetailsTab from "../components/f42/comps/cpAndPphPphYourDetailsTab.vue";
import cpAndPphSubmitTab from "../components/f42/comps/cpAndPphSubmitTab.vue";
import cpAndPphPphPqmTab from "../components/f42/comps/cpAndPphPphPqmTab.vue";

import cpAndMcmSubmitTab from "../components/f42/comps/cpAndMcmSubmitTab.vue";
import cpAndMcmFinalReviewTab from "../components/f42/comps/cpAndMcmFinalReviewTab.vue";
import cpAndMcmPphReviewTab from "../components/f42/comps/cpAndMcmPphReviewTab.vue";


/********* Un Reviewed items */
import f42MemberViewSubmit from "../components/f42/member/f42MemberViewSubmit.vue";
import f42MemberViewPph from "../components/f42/member/f42MemberViewPph.vue";
import f42MemberViewDetails from "../components/f42/member/f42MemberViewDetails.vue";
import f42MemberViewProcess from "../components/f42/member/f42MemberViewProcess.vue";
import f42HolderViewSubmit from "../components/f42/pph/f42HolderViewSubmit.vue";
import f42HolderViewId from "../components/f42/archive/f42HolderViewId.vue";
import f42HolderViewPhoto from "../components/f42/archive/f42HolderViewPhoto.vue";
import f42HolderViewTraining from "../components/f42/archive/f42HolderViewTraining.vue";
import f42HolderViewDetails from "../components/f42/pph/f42HolderViewDetails.vue";
import f42ProcessHolder from "../components/f42/pph/f42HolderViewProcess.vue";
import f42AdminSubmit from "../components/f42/admin/f42AdminSubmit.vue";
import f42AdminPphReviewSubmit from "../components/f42/adminPphDetailsReview/f42AdminPphReviewSubmit.vue";
import f42CommitteeMember from "../components/f42/admin/f42CommitteeMember.vue";
import f42ProgressBar from "../components/f42/common/f42ProgressBar.vue";
import f42HolderDetails from "../components/f42/admin/f42HolderDetails.vue";
import f42YourDetails from "../components/f42/admin/f42YourDetails.vue";
import F3Circumstances from "../components/f3/f3Circumstances.vue";
import F3Dismissal from "../components/f3/f3Dismissal.vue";
import f3EmployeeDetails from "../components/f3/f3EmployeeDetails.vue";
import F3OtherInfo from "../components/f3/f3Objections.vue";
import F3Review from "../components/f3/f3Review.vue";
import F3files from "../components/f3/f3files.vue";
import f42AdminMemberReviewSubmit from "../components/f42/adminMemberReview/f42AdminMemberReviewSubmit.vue";
import f42AdminAsPphDecVue from "../components/f42/admin/f42AdminAsPphDec.vue";


export default {
  components: {
    cpProcessTab,
    f42OrgSearch,
    cpIdentity,
    cpPphDetailsTab,
    cpMcmDetailsTab,
    cpSubmitTab,
    pphProcessTab,
    pphYourDetailsTab,
    pphPhotoSignatureTab,
    pphPqmTab,
    cpPphReviewTab,
    mcmProcessTab,
    mcmYourDetailsTab,
    mcmAboutPphTab,
    mcmPhotoSignatureTab,
    mcmPqmTab,
    cpPphFinalReviewTab,
    cpMcmFinalReviewTab,
    cpAndPphPphYourDetailsTab,
    cpAndPphSubmitTab,
    cpAndPphPphPqmTab,
    cpAndMcmSubmitTab,
    cpAndMcmFinalReviewTab,
    cpAndMcmPphReviewTab,

    /*****/
    f42MemberViewSubmit,
    f42MemberViewPph,
    f42MemberViewDetails,
    f42MemberViewProcess,
    f42HolderViewSubmit,
    f42HolderViewId,
    f42HolderViewPhoto,
    f42HolderViewDetails,
    f42HolderViewTraining,
    f42ProgressBar,

    f42YourDetails,
    f42HolderDetails,
    f42CommitteeMember,
    f42AdminSubmit,
    f42ProcessHolder,
    f3EmployeeDetails,
    F3Circumstances,
    F3Dismissal,
    F3OtherInfo,
    F3Review,
    F3files,
    f42AdminPphReviewSubmit,
    f42AdminMemberReviewSubmit,
    f42AdminAsPphDecVue,
  },
  layout: "form",
  data() {
    return {
      newFlow: true,
      workFlows: {
        cpTabs: [
          {
            label: "Process",
            comps: ["cpProcessTab"],
          },
          {
            label: "Your details",
            comps: ["f42OrgSearch", "cpIdentity"],
          },
          {
            label: "About the proposed permit holder",
            comps: ["cpPphDetailsTab"],
          },
          {
            label: "About the member of Committee of Management",
            comps: ["cpMcmDetailsTab"],
          },
          {
            label: "Review and submit",
            comps: ["cpSubmitTab"],
          },
        ],
        pphTabs: [
          {
            label: "Process",
            comps: ["pphProcessTab"],
          },
          {
            label: "Your details",
            comps: ["pphYourDetailsTab"],
          },
          {
            label: "Photo and signature",
            comps: ["pphPhotoSignatureTab"],
          },
          {
            label: "Permit qualifications matters",
            comps: ["pphPqmTab"],
          },
        ],
        cpPphReviewTabs: [
        {
            label: "The proposed permit holder",
            comps: ["cpPphReviewTab"],
          },
        ],
        mcmTabs: [
          {
            label: "Process",
            comps: ["mcmProcessTab"],
          },
          {
            label: "Your details",
            comps: ["mcmYourDetailsTab"],
          },
          {
            label: "About the proposed permit holder",
            comps: ["mcmAboutPphTab"],
          },
          
          {
            label: "Photo and signature",
            comps: ["mcmPhotoSignatureTab"],
          },
          {
            label: "Permit qualifications matters",
            comps: ["mcmPqmTab"],
          },
        ],
        cpFinalReviewTabs: [
        {
            label: "The proposed permit holder",
            comps: ["cpPphFinalReviewTab"],
          },
          {
            label: "The committee member",
            comps: ["cpMcmFinalReviewTab"],
          },
        ],
        cpAndPphTabs: [
          {
            label: "Process",
            comps: ["cpProcessTab"],
          },
          {
            label: "Organisation details",
            comps: ["f42OrgSearch"],
          },
          {
            label: "Your details and training",
            comps: ["cpAndPphPphYourDetailsTab"],
          },
          {
            label: "Photo and signature",
            comps: ["pphPhotoSignatureTab"],
          },
          {
            label: "Permit qualifications matters",
            comps: ["cpAndPphPphPqmTab"],
          },
          {
            label: "About the member of Committee of Management",
            comps: ["cpMcmDetailsTab"],
          },
          {
            label: "Review and submit",
            comps: ["cpAndPphSubmitTab"],
          },
        ],
        cpAndMcmTabs: [
          {
            label: "Process",
            comps: ["cpProcessTab"],
          },
          {
            label: "Your details",
            comps: ["f42OrgSearch", "cpIdentity"],
          },
          {
            label: "About the proposed permit holder",
            comps: ["cpPphDetailsTab"],
          },
          {
            label: "Review and submit",
            comps: ["cpAndMcmSubmitTab"],
          },
        ],
        cpAndMcmFinalReviewTabs: [
        
          {
            label: "About the proposed permit holder",
            comps: ["cpAndMcmPphReviewTab"],
          },
          
          
          {
            label: "Permit qualifications matters",
            comps: ["mcmPqmTab"],
          },
          {
            label: "Review and submit",
            comps: ["cpAndMcmFinalReviewTab"],
          },
        ],
      },
      form: {
        userRole: "",
        userRolePhase: "",
        adminUserRolesArray: [],
        admin: {
          hasDifferentPostalAddress: false,
          otherAddress: "33 main street, Sydney NSW 2000 (hard coded)",
          confirmAuthorised: false,
          firstName: "",
          middleName: "",
          hasMiddleName: null,
          lastName: "",
          email: "",
          position: "",
          postalAddress: {
            line1: "",
            line2: "",
            suburb: "",
            postcode: "",
            state: "",
            country: "",
          },
          phones: [
            {
              number: "",
              type: "",
            },
          ],
          hasHolderTrainingInfo: null,
          hasHolderPhoto: null,
          permitHolderDataEnteredByAdmin: {
            isSameAsAdmin: false,
            hasDigitalId: null,
            infoCorrection: "",
            confirmInfo: null,
            firstName: "",
            middleName: "",
            lastName: "",
            preferredName: "",
            hasOtherNames: null,
            hasPreferredName: null,
            otherNames: [
              {
                firstName: "",
                lastName: "",
              },
            ],
            hasOtherNames: null,
            email: "",
            phones: [
              {
                number: "",
                type: "",
              },
            ],
            mobilePhone: "",
            employeeOrOfficeHolder: null,
            positionOrOfficeHeld: "",
            previouslyHeldAnEntryPermit: null,
            previousPermitReturned: null,
            previousPermitNumber: "",
            previousPermitNotReturnedReason: "",
            previousPermitReturnedOnTime: null,
            previousPermitStatDecFile: "",
            photoFile: null,
            trainings: [
              {
                trainingName: "",
                trainingMethod: "",
                trainingCompletionDate: "",
                trainingFile: null,
                trainingNameDetails: "",
              },
            ],
            adminPhotoIsCorrect: null,
            correctPhoto2: null,
            confirmDetails: null,
            dec: {
              didAboveTraining: null,
              convictedIndustrialLaw: null,
              convictedIndustrialLawDetails: "",
              convictedOther: null,
              convictedOtherDetails: "",
              orderedToPay: null,
              orderedToPayDetails: "",
              hadRevoked: null,
              hadRevokedDetails: "",
              hadConditionsImposed: null,
              hadConditionsImposedDetails: "",
              beenDisqualified: null,
              beenDisqualifiedDetails: "",
              awareOfMatters: null,
              awareOfMattersDetails: "",
              signedName: "",
              signedDate: "",
              beenDisqualified: null,
              beenDisqualifiedDetails: "",
              signature: {
                name: "",
                date: "",
              },
            },
            confirmPhotoSignatureDeclaration: false,
          },
          committeeMemberDataEnteredByAdmin: {},
          dec: {
            signature: {
              name: "",
              date: "",
            },
          },
        },
        permitHolder: {
          isSameAsAdmin: false,
          hasDigitalId: null,
          infoCorrection: "",
          confirmInfo: null,
          firstName: "",
          middleName: "",
          lastName: "",
          preferredName: "",
          hasOtherNames: null,
          hasPreferredName: null,
          otherNames: [
            {
              firstName: "",
              lastName: "",
            },
          ],
          hasOtherNames: null,
          email: "",
          phones: [
            {
              number: "",
              type: "",
            },
          ],
          mobilePhone: "",
          employeeOrOfficeHolder: null,
          positionOrOfficeHeld: "",
          previouslyHeldAnEntryPermit: null,
          previousPermitReturned: null,
          previousPermitNumber: "",
          previousPermitNotReturnedReason: "",
          previousPermitReturnedOnTime: null,
          previousPermitStatDecFile: "",
          photoFile: null,
          trainings: [
            {
              trainingName: "",
              trainingMethod: "",
              trainingCompletionDate: "",
              trainingFile: null,
              trainingNameDetails: "",
            },
          ],
          adminPhotoIsCorrect: null,
          correctPhoto2: null,
          confirmDetails: null,
          dec: {
            didAboveTraining: null,
            convictedIndustrialLaw: null,
            convictedIndustrialLawDetails: "",
            convictedOther: null,
            convictedOtherDetails: "",
            orderedToPay: null,
            orderedToPayDetails: "",
            hadRevoked: null,
            hadRevokedDetails: "",
            hadConditionsImposed: null,
            hadConditionsImposedDetails: "",
            beenDisqualified: null,
            beenDisqualifiedDetails: "",
            awareOfMatters: null,
            awareOfMattersDetails: "",
            signedName: "",
            signedDate: "",
            beenDisqualified: null,
            beenDisqualifiedDetails: "",
            signature: {
              name: "",
              date: "",
            },
          },
          confirmPhotoSignatureDeclaration: false,
        },
        committeeMember: {
          officeHeld: "",
          selectedName: "",
          email: "",
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          inquiries: "",
          confirmedPphId: false,
          files: [
            {
              docType: "",
              file: "",
            },
          ],
          phones: [
            {
              number: "",
              type: "",
            },
          ],
          pphPhotoSignature: {
            name: "",
            date: "",
          },

          dec: {
            confirm: null,
            convictedIndustrialLaw: null,
            convictedIndustrialLawDetails: "",
            convictedOther: null,
            convictedOtherDetails: "",
            orderedToPay: null,
            orderedToPayDetails: "",
            hadRevoked: null,
            hadRevokedDetails: "",
            hadConditionsImposed: null,
            hadConditionsImposedDetails: "",
            beenDisqualified: null,
            beenDisqualifiedDetails: "",
            awareOfMatters: null,
            awareOfMattersDetails: "",
            inquiries: "",
            viewedDocs: "",
            signedName: "",
            signedDate: "",
            signature: {
              name: "",
              date: "",
            },
          },
        },

        businessDetailsCorrect: null,
        businessDetails: {
          businessDetailsString: "ABC pty ltd Trading as MY ABC, ABN: 12345678",
          name: "",
          address: "",
        },
      },
      tabIndex: 0,
    };
  },
  mounted: function () {},
  methods: {},
  computed: {
    roleName: function () {
      return this.form.userRole === "admin"
        ? "Contact Person"
        : this.form.userRole;
    },
    currentWorkflow: function() {
      if(this.form.userRole === 'admin' && this.form.userRolePhase === '' && this.form.adminUserRolesArray.length < 2){
        // An admin (Cp = contact person) is starting an application (and they are not the pph or mcm)
        return this.workFlows.cpTabs
      }

      if(this.form.userRole === 'admin' && this.form.adminUserRolesArray.includes('pph')){
        // An admin (Cp = contact person) who is also the PPH is starting an application
        return this.workFlows.cpAndPphTabs
      }

      if(this.form.userRole === 'admin' && this.form.adminUserRolesArray.includes('member') && this.form.userRolePhase === ''){
        // An admin (Cp = contact person) who is also the PPH is starting an application
        return this.workFlows.cpAndMcmTabs
      }
      if(this.form.userRole === 'admin' && this.form.adminUserRolesArray.includes('member') && this.form.userRolePhase === 'adminMemberReview'){
        // An admin (Cp = contact person) who is also the PPH is starting an application
        return this.workFlows.cpAndMcmFinalReviewTabs
      }
      

      if(this.form.userRole === 'permitHolder'){
        return this.workFlows.pphTabs
      }

      if(this.form.userRole === 'admin' && this.form.userRolePhase === 'pphInfoReview'){
        // PPH has entered their details for review by CP
        return this.workFlows.cpPphReviewTabs
      }

      if(this.form.userRole === 'committeeMember'){
        return this.workFlows.mcmTabs
      }
      if(this.form.userRole === 'admin' && this.form.userRolePhase === 'adminMemberReview'){
        // MCM has entered their details for review by CP
        return this.workFlows.cpFinalReviewTabs
      }

    

      
     
      
      console.log(this.form.userRolePhase)
      

    }
  },
  watch: {
    // COPY DATA ENTERED BY ADMIN FROM THE PPH/MEMBER TO admin.permitHolderDataEnteredByAdmin
    // DEV NOTE: FOR THE REAL FORM DO NOT USE WATCH, DO THIS OR SIMILAR CHECK WHEN A TAB IS SUBMITTED OR MAKE THE ADMIN PAGES SAVE TO permitHolderDataEnteredByAdmin ETC. Talk to me about it :) ...
    tabIndex(newValue, oldValue) {
      if (
        oldValue === 2 &&
        this.form.userRole === "admin" &&
        this.form.userRolePhase === ""
      ) {
        this.form.admin.permitHolderDataEnteredByAdmin = JSON.parse(
          JSON.stringify(this.form.permitHolder)
        );
      }
      if (
        oldValue === 3 &&
        this.form.userRole === "admin" &&
        this.form.userRolePhase === ""
      ) {
        this.form.admin.committeeMemberDataEnteredByAdmin = JSON.parse(
          JSON.stringify(this.form.committeeMember)
        );
      }
    },
  },
};
</script>
<style scoped>
.currentRole {
  padding-left: 10px;
  color: red;
  font-weight: bold;
}
</style>
