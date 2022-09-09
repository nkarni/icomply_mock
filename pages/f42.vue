<template>
  <div>
    <b-container v-if="form.userRole !== ''">
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
      <!-- <b-row class="mt-4">
        <b-col>
          <f-42-progress-bar :form="form"></f-42-progress-bar>
                 </b-col>
      </b-row> -->
      <!-- ADMIN START VIEW -->
      <div v-if="form.userRole === 'admin' && form.userRolePhase === ''">
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
            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>The process</h5>
                <!-- <span>How it works and what is expected of you</span> -->
              </template>
              <f-42-process-admin :form="form"></f-42-process-admin>
            </b-tab>

            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>Your details</h5>
                <!-- <span>Union organisation and administrator details</span> -->
              </template>
              <f-42-your-details :form="form"></f-42-your-details>
            </b-tab>

            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>About the proposed permit holder</h5>
                <!-- <span>Their details</span> -->
              </template>
              <f-42-holder-details :form="form"></f-42-holder-details>
            </b-tab>

            <b-tab
            v-if="form.permitHolder.isSameAsAdmin"
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>The proposed permit holder declaration</h5>
                <!-- <span>Their details</span> -->
              </template>
              <f-42-admin-as-pph-dec :form="form"></f-42-admin-as-pph-dec>
            </b-tab>

            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>About the member of Committee of Management</h5>
                <!-- <span>Their details</span> -->
              </template>
              <f-42-committee-member :form="form"></f-42-committee-member>
            </b-tab>
            <!-- <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-3',
            { 'laap-nav-item-complete': false },
          ]"
        >
          <template #title>
            <h5>Attachments</h5>
            <span>Upload relevant documents</span>
          </template>
        
        </b-tab> -->
            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>Review and submit</h5>
                <!-- <span>Confirm details and submit the form</span> -->
              </template>
              <f-42-admin-submit :form="form"></f-42-admin-submit>
            </b-tab>
          </b-tabs>
        </b-row>
        <b-row class="mt-4">
          <b-col cols="12" class="text-right">
            <b-button
              variant="primary"
              v-if="tabIndex > 0 && tabIndex < 5"
              @click="tabIndex--"
              class="mr-2"
              >Save & Prev</b-button
            >
            <b-button variant="primary" v-if="tabIndex < 4" @click="tabIndex++"
              >Save & Next</b-button
            >
          </b-col>
        </b-row>
      </div>

      <!-- permitHolder  VIEW -->
      <div v-if="form.userRole === 'permitHolder'">
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
            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>The process</h5>
                <!-- <span>How it works and what is expected of you</span> -->
              </template>
              <f-42-process-holder :form="form"></f-42-process-holder>
            </b-tab>

            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>Your details</h5>
              </template>
              <f-42-holder-view-details :form="form"></f-42-holder-view-details>
            </b-tab>

            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>Photo and signature</h5>
              </template>
              <f-42-holder-view-photo-signature
                :form="form"
              ></f-42-holder-view-photo-signature>
            </b-tab>

            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>Permit qualifications matters</h5>
                <!-- <span>Confirm details and submit the form</span> -->
              </template>
              <f-42-holder-view-submit :form="form"></f-42-holder-view-submit>
            </b-tab>
          </b-tabs>
        </b-row>
        <b-row class="mt-4">
          <b-col cols="12" class="text-right">
            <b-button
              variant="primary"
              v-if="tabIndex > 0 && tabIndex < 6"
              @click="tabIndex--"
              class="mr-2"
              >Save & Prev</b-button
            >
            <b-button variant="primary" v-if="tabIndex < 3" @click="tabIndex++"
              >Save & Next</b-button
            >
          </b-col>
        </b-row>
      </div>

      <!-- committeeMember  VIEW -->
      <div v-if="form.userRole === 'committeeMember'">
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
            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>The process</h5>
                <!-- <span>How it works and what is expected of you</span> -->
              </template>
              <f-42-member-view-process :form="form"></f-42-member-view-process>
            </b-tab>

            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>Your details</h5>
                <!-- <span>Union organisation and administrator details</span> -->
              </template>
              <f-42-member-view-details :form="form"></f-42-member-view-details>
            </b-tab>

            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>About the proposed permit holder</h5>
                <!-- <span>Their details</span> -->
              </template>
              <f-42-member-view-pph :form="form"></f-42-member-view-pph>
            </b-tab>

            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>Photo and signature</h5>
              </template>
              <f-42-member-view-photo-signature
                :form="form"
              ></f-42-member-view-photo-signature>
            </b-tab>

            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>Permit qualification matters</h5>
                <!-- <span>Confirm details and submit the form</span> -->
              </template>
              <f-42-member-view-submit :form="form"></f-42-member-view-submit>
            </b-tab>
          </b-tabs>
        </b-row>
        <b-row class="mt-4">
          <b-col cols="12" class="text-right">
            <b-button
              variant="primary"
              v-if="tabIndex > 0"
              @click="tabIndex--"
              class="mr-2"
              >Save & Prev</b-button
            >
            <b-button variant="primary" v-if="tabIndex < 4" @click="tabIndex++"
              >Save & Next</b-button
            >
          </b-col>
        </b-row>
      </div>

      <!-- adminView phase: PPH Review -->
      <div
        v-if="form.userRole === 'admin' && form.userRolePhase === 'pphInfoReview'"
      >
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
            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>The proposed permit holder</h5>
                <!-- <span>How it works and what is expected of you</span> -->
              </template>
               <f-42-admin-pph-review-submit :form="form"></f-42-admin-pph-review-submit>
            </b-tab>
          </b-tabs>
        </b-row>
      </div>

       <!-- adminView phase: member info Review -->
      <div
        v-if="form.userRole === 'admin' && form.userRolePhase === 'adminMemberReview'"
      >
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
            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>The proposed permit holder</h5>
              </template>
               <f-42-admin-pph-review-submit :form="form"></f-42-admin-pph-review-submit>
              
            </b-tab>
            <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>The committee member</h5>
              </template>
               <f-42-admin-member-review-submit :form="form"></f-42-admin-member-review-submit>
            </b-tab>
          </b-tabs>
        </b-row>
      </div>
    </b-container>

    <b-container>
      <b-row class="mt-4">
        <b-col>
          <p>Follow the logical life cycle of the form by clicking on each phase below. Do take the time to fill in the data in each phase to get to correct impression.</p>
          <b-form-group label="Form life cycle control:">
            <b-form-radio-group>
              <ol>
                <li>
                  <b-button
                    variant="link"
                    @click.prevent="form.userRole = 'admin';tabIndex = 0"
                  >
                    Contact Person
                    <span class="currentRole" v-if="form.userRole === 'admin' && form.userRolePhase === ''">
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
                <li>
                  <b-button
                    variant="link"
                    @click.prevent="form.userRole = 'permitHolder';tabIndex = 0"
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
                <li>
                  <b-button
                    variant="link"
                    @click.prevent="
                      form.userRole = 'admin';
                      form.userRolePhase = 'pphInfoReview';tabIndex = 0;
                    "
                  >
                    Contact Person (PPH info review)
                    <span
                      class="currentRole"
                      v-if="form.userRole === 'admin' && form.userRolePhase === 'pphInfoReview'"
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
                      note: if admin is also the comm member, then steps 4 & 5 ADMIN STILL NEEDS TO FILL IN DECLARATION
                      are skipped and the form is submitted to FWC (caseHQ)
                    </li>
                  </ul>
                </li>
                <li>
                  <b-button
                    variant="link"
                    @click.prevent="form.userRole = 'committeeMember';tabIndex = 0"
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
                      form.userRolePhase = 'adminMemberReview';tabIndex = 0;
                    "
                  >
                    Contact Person (Comm member info review and final submission)
                    <span
                      class="currentRole"
                      v-if="form.userRole === 'admin' && form.userRolePhase === 'adminMemberReview'"
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
      <!-- <b-row class="mt-4">
        <b-col>
          <h4>Select a role:</h4>
          <div v-if="form.userRole != ''">
            Current view is {{ form.userRole }}
          </div>
        </b-col>
      </b-row> -->
      <!-- <b-row class="mt-4">
        <b-col cols="4">
          <b-button
            variant="outline-primary"
            @click.prevent="form.userRole = 'admin'"
          >
            <h4>Administrator view</h4>
            Start an application, or edit an existing one
          </b-button>
        </b-col>
        <b-col cols="4">
          <b-button
            variant="outline-primary"
            @click.prevent="form.userRole = 'permitHolder'"
          >
            <h4>Proposed Permit Holder view</h4>
            Join an application
          </b-button>
        </b-col>
        <b-col cols="4">
          <b-button
            variant="outline-primary"
            @click.prevent="form.userRole = 'committeeMember'"
          >
            <h4>Member of Committee of Management view</h4>
            Join an application
          </b-button>
        </b-col>
      </b-row> -->
    </b-container>
    <b-container v-if="form.userRole !== ''">
      <b-row class="mt-4">
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
      </b-row>
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
import f42ProcessAdmin from "../components/f42/admin/f42ProcessAdmin.vue";
import f42YourDetails from "../components/f42/admin/f42YourDetails.vue";
import F3Circumstances from "../components/f3/f3Circumstances.vue";
import F3Dismissal from "../components/f3/f3Dismissal.vue";
import f3EmployeeDetails from "../components/f3/f3EmployeeDetails.vue";
import F3OtherInfo from "../components/f3/f3OtherInfo.vue";
import F3Review from "../components/f3/f3Review.vue";
import F3files from "../components/f3/f3files.vue";
import f42AdminMemberReviewSubmit from "../components/f42/adminMemberReview/f42AdminMemberReviewSubmit.vue";
import f42AdminAsPphDecVue from "../components/f42/admin/f42AdminAsPphDec.vue";


export default {
  components: {
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
    f42ProcessAdmin,
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
    f42AdminAsPphDecVue
  },
  layout: "form",
  data() {
    return {
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
              name: '',
              date: ''
            }
          },
          confirmPhotoSignatureDeclaration: false,
        },

   
          memberDataEnteredByAdmin: {},
          dec: {
            signature: {
              name: '',
              date: ''
            }
          }
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
              name: '',
              date: ''
            }
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
            viewedDocs: "",
            signedName: "",
            signedDate: "",
            signature: {
              name: '',
              date: ''
            }
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
      return this.form.userRole === 'admin' ? "Contact Person" : this.form.userRole;
    },
  },
  watch: {
    // COPY DATA ENTERED BY ADMIN FROM THE PPH/MEMBER TO admin.permitHolderDataEnteredByAdmin
    // DEV NOTE: FOR THE REAL FORM DO NOT USE WATCH, DO THIS OR SIMILAR CHECK WHEN A TAB IS SUBMITTED OR MAKE THE ADMIN PAGES SAVE TO permitHolderDataEnteredByAdmin ETC. Talk to me about it :) ...
    tabIndex(newValue, oldValue) {
      if (oldValue === 2 && this.form.userRole === "admin" && this.form.userRolePhase === "") {
        this.form.admin.permitHolderDataEnteredByAdmin = JSON.parse(JSON.stringify(this.form.permitHolder));
      }
      if (oldValue === 3 && this.form.userRole === "admin" && this.form.userRolePhase === "") {
        this.form.admin.memberDataEnteredByAdmin = JSON.parse(JSON.stringify(this.form.committeeMember));
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
