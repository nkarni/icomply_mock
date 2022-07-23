<template>
  <b-container>
    <b-row>
      <b-col cols="8">
        <h3 class="text-primary">Respond to an unfair dismissal claim</h3>
      </b-col>
      <b-col cols="4" class="text-right">
        <!-- <NuxtLink to="/home" class="text-right pr-0">
          Back to dashboard
        </NuxtLink> -->
        <b-button>Reference: YCFRU</b-button>
        <b-button variant="primary">Save for later</b-button>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-tabs v-model="tabIndex" vertical nav-wrapper-class="w-30" class="w-100"
        active-nav-item-class="text-primary laap-nav-item-active" nav-class="laap-nav" content-class="card p-3">
        <b-tab :title-link-class="[
          'laap-title-link',
          'mb-2',
          'p-3',
          { 'laap-nav-item-complete': true },
        ]">
          <template #title>
            <h5>Introduction</h5>
            <span>Information about the process</span>
          </template>
          <f-3-intro :form="form"></f-3-intro>
        </b-tab>
        <b-tab :title-link-class="[
          'laap-title-link',
          'mb-2',
          'p-3',
          { 'laap-nav-item-complete': false },
        ]">
          <template #title>
            <h5>Contact details</h5>
            <span>Contact and other details</span>
          </template>
          <f-3-contact-details :form="form"></f-3-contact-details>
        </b-tab>
        <!-- <b-tab :title-link-class="[
          'laap-title-link',
          'mb-2',
          'p-3',
          { 'laap-nav-item-complete': false },
        ]">
          <template #title>
            <h5>The business</h5>
            <span>Information about the business</span>
          </template>
          <f-3-business-details :form="form"></f-3-business-details>
        </b-tab> -->

        <b-tab :title-link-class="[
          'laap-title-link',
          'mb-2',
          'p-3',
          { 'laap-nav-item-complete': false },
        ]">
          <template #title>
            <h5>About the Applicant</h5>
            <span>Details of Applicant’s engagement </span>
          </template>
          <f-3-employee-details :form="form"></f-3-employee-details>
        </b-tab>

        <b-tab :title-link-class="[
          'laap-title-link',
          'mb-2',
          'p-3',
          { 'laap-nav-item-complete': false },
        ]">
          <template #title>
            <h5>The dismissal</h5>
            <span>Information about the dismissal</span>
          </template>
          <f-3-dismissal :form="form"></f-3-dismissal>
        </b-tab>

        <b-tab :title-link-class="[
          'laap-title-link',
          'mb-2',
          'p-4',
          { 'laap-nav-item-complete': false },
        ]">
          <template #title>
            <h5>Objections</h5>
            <span>Objections to the application</span>
          </template>
          <f-3-other-info :form="form"></f-3-other-info>
        </b-tab>
        <b-tab :title-link-class="[
          'laap-title-link',
          'mb-2',
          'p-3',
          { 'laap-nav-item-complete': false },
        ]">
          <template #title>
            <h5>Attachments</h5>
            <span>Upload relevant documents</span>
          </template>
          <F3Attachments :form="form"></F3Attachments>
        </b-tab>
        <b-tab :title-link-class="[
          'laap-title-link',
          'mb-2',
          'p-4',
          { 'laap-nav-item-complete': false },
        ]">
          <template #title>
            <h5>Review and submit</h5>
            <span>Confirm details and submit the form</span>
          </template>
          <f-3-review :form="form"></f-3-review>
        </b-tab>
      </b-tabs>
    </b-row>

    <b-row class="mt-4" v-if="tabIndex ">
      <b-col cols="12" class="text-right">
        <b-button variant="primary" v-if="tabIndex > 0" @click="tabIndex--" class="mr-2">Save & Prev</b-button>
        <b-button variant="primary" v-if="tabIndex < 5" @click="tabIndex++">Save & Next</b-button>
      </b-col>
    </b-row>

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
              every time the browser window is refreshed. When testing different
              use cases, it would be good to refresh the browser window and
              start with a fresh form when switching from on use case to another
              (to avoid confusion).
            </li>

            <li>
              Each tab will be validated before the user can go to the next tab
              (this ensures they don't have to go back and forth to pass
              validation). This mockup doesn't affect validation however the
              rule is that All visible fields are mandatory unless they are
              marked as optional.
            </li>

            <li>
              The section below shows the data as it exists in the form and is
              updated in real time. The data structure is temporary and may be
              changed when actual development starts. However, I thought it may
              help you in seeing what data exists in the form as you test it.
            </li>
            <li>
              With regards to tabs navigation, the following items will be
              completed when we build the site and do not work in the prototype
              because they depend on validation:
              <ul>
                <li>
                  Tab navigation links will change colour depending on the state
                  of that tab (currently open has blue tag, completed is in
                  green, etc)
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
</template>

<script>
import f3AboutYou from "../components/f3/f3AboutYou.vue";
import F3Circumstances from "../components/f3/f3Circumstances.vue";
import F3Dismissal from "../components/f3/f3Dismissal.vue";
import f3EmployeeDetails from "../components/f3/f3EmployeeDetails.vue";
import F3OtherInfo from "../components/f3/f3OtherInfo.vue";
import F3Review from "../components/f3/f3Review.vue";
import F3files from "../components/f3/f3files.vue";
export default {
  components: {
    f3AboutYou,
    f3EmployeeDetails,
    F3Circumstances,
    F3Dismissal,
    F3OtherInfo,
    F3Review,
    F3files,
  },
  layout: "form",
  data() {
    return {
      form: {
        employeeProvidedBusinessNameString: "Sydney Bins ABN 12345678",
        employeeProvidedBusinessIsCorrect: null,
        businessDetails: {
          businessDetailsString: "ABC pty ltd Trading as MY ABC, ABN: 12345678",
          name: "",
          abn: "",
          tradingName: "",
          postalAddress: {
            line1: "",
            line2: "",
            suburb: "",
            postcode: "",
            state: "",
            country: "",
          },
          postalAddressString: "",
          industryDetails: "",
          industry: "",
          contactPerson: {
            title: "",
            titleDetails: "",
            firstName: "",
            lastName: "",
            email: "",
            phones: [
              {
                type: "",
                number: "",
                isSafe: null,
              },
            ],
          },
          numberOfEmployeesIsUnder: 0,
        },
        applicantStillWorksForBusiness: null,
        isRespondentContactPerson: null,
        needsInterpreter: null,
        needsInterpreterLanguage: "",
        needsAccessibility: null,
        needsAccessibilityDetails: "",
        researchConsent: null,
        hasRep: null,
        repType: null,
        repTypeDetails: '',
        rep: {
          title: "",
          titleDetails: "",
          firstName: "",
          lastName: "",
          email: "",
          phones: [
            {
              type: "",
              number: "",
              isSafe: null,
            },
          ],
          postalAddress: {
            line1: "",
            line2: "",
            suburb: "",
            postcode: "",
            state: "",
            country: "",
          },
        },
        formFillerPersona: '',
        formFillerPersonaDetails: '',
        engagementType: null,
        engagementTypeDetails: '',
        engagementCommitment: '',
        engagementRegularCasual: null,
        employeeFirstName: "John",
        employeeLastName: "Smith",
        caseNumber: "ABC123",
        jurisdictionalObjections: [],
        employeeWage: "",
        employeeWeeklyWageFrequency: "",
        averageWeeklyHours: "",
        wasDismissed: null,
        employeeHasOtherBenefits: null,
        employeeHasOtherBenefitsDetails: "",
        employeeHasAwardAgreement: null,
        employeeAwardAgreementName: "",
        employeeAwardAgreementNumber: "",
        followedCode: "",
        employeeDescOfWhatHappened: "Their input will show here....",
        employerDescOfWhatHappened: "",
        independentContractor: null,
        employmentStartDate: "",
        employmentDismissedDate: "",
        employmentEndDate: "",
        mostRecentShift: '',
        otherInfo: "",
        wantsConciliation: null,
        objections: [
          {
            text: 'The application is out of time (ie lodged more than 21 days after the dismissal took effect)',
            selected: null,
            details: ''
          },
          {
            text: 'The Applicant was not an employee',
            selected: null,
            details: ''
          },
          {
            text: 'The Applicant was not dismissed',
            selected: null,
            details: ''
          },
          {
            text: 'The dismissal was a case of genuine redundancy',
            selected: null,
            details: ''
          },
          {
            text: 'The Applicant’s employment does not meet the minimum employment period',
            selected: null,
            details: ''
          },
          {
            text: 'The Applicant earned more than the high income threshold ',
            selected: null,
            details: ''
          },
          {
            text: 'The employer is a small business employer and the employer complied with the Small Business Fair Dismissal Code',
            selected: null,
            details: ''
          },
          {
            text: 'Other',
            selected: null,
            details: ''
          },
        ]
      },

      tabIndex: 0,
    };
  },
  mounted: function () { },
  methods: {
    changeTabIndex(index) {
      this.tabIndex = index;
      console.log("changed to index", index);
    },
  },
};
</script>
