<template>
  <b-container>
    <b-row>
      <b-col cols="8">
        <h3 class="text-primary">Unfair dismissal claim</h3>
      </b-col>
      <b-col cols="4" class="text-right">
        <b-button>Reference: YCFRU</b-button>
        <b-button variant="primary">Save for later</b-button>
      </b-col>
    </b-row>
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
            { 'laap-nav-item-complete': true },
          ]"
        >
          <template #title>
            <h5>Introduction</h5>
            <span>Information about the process</span>
          </template>
          <f-2-intro :form="form"></f-2-intro>ç
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
            <h5>Contact details</h5>
            <span>Your contact details</span>
          </template>
          <f-2-contact-details :form="form"></f-2-contact-details>
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
            <h5>About {{youString}}</h5>
            <span>Some details we need know</span>
          </template>
          <f-2-about-you :form="form"></f-2-about-you>
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
            <h5>Former employer</h5>
            <span>Details about the employer</span>
          </template>
          <f-2-employer-details :form="form"></f-2-employer-details>
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
            <h5>The dismissal</h5>
            <span>Details about your employment and the dismissal</span>
          </template>
          <f-2-dismissal :form="form"></f-2-dismissal>
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
            <h5>Attachments</h5>
            <span>Upload documents</span>
          </template>

          <f-2-attachments :form="form"></f-2-attachments>
        </b-tab>

        <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-4',
            { 'laap-nav-item-complete': false },
          ]"
        >
          <template #title>
            <h5>Review and submit</h5>
            <span>Review your information and lodge the form</span>
          </template>
          <f-2-rev :form="form"></f-2-rev>
        </b-tab>
      </b-tabs>
    </b-row>

    <b-row class="mt-4" >
      <b-col cols="12" class="text-right">
        <b-button
          variant="primary"
          v-if="tabIndex > 0"
          @click="tabIndex--"
          class="mr-2"
          >Save & Prev</b-button
        >
        <b-button variant="primary" v-if="tabIndex < 6" @click="tabIndex++"
          >Save & Next</b-button
        >
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
import f2Intro from "../components/f2/f2Intro.vue";
import F2AboutYou from "../components/f2/f2AboutYou.vue";
import f2ContactDetails from "../components/f2/f2ContactDetails.vue";
import f2EmployerDetails from "../components/f2/f2EmployerDetails.vue";
import f2Dismissal from "../components/f2/f2Dismissal.vue";
import f2Attachments from "../components/f2/f2Attachments.vue";
import f2Rev from "../components/f2/f2Rev.vue";

export default {
  components: {
    F2AboutYou,
    f2ContactDetails,
    f2EmployerDetails,
    f2Dismissal,
    f2Attachments,
    f2Rev,
    f2Intro,
  },
  layout: "form",
  data() {
    return {
      form: {
        applyingForSelf: null,
        rep: {
          title: "",
          preferredPronoun: '',
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
          orgName: "",
        },
        formFiller: {
          title: "",
          preferredPronoun: '',
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
          orgName: "",
          relationshipToApplicant: "",
          relationshipToApplicant: ""
        },
        applicant: {
          title: "",
          preferredPronoun: '',
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
          over18: null,
          needsInterpreter: null,
          needsInterpreterLanguage: "",
          needsInterpreterLanguageDetails: '',
          needsInterpreterLanguageNotFound: false,
          needsAccessibility: null,
          needsAccessibilityDetails: "",
          researchConsent: null,
          doesNotHaveAnAddress: null,
          hasRep: null,
        },
        employerBusinessDetails: {
          businessDetailsString: "ABC pty ltd Trading as MY ABC, ABN: 12345678",
          name: "",
          tradingName: "",
          abn: "",
          postalAddress: {
            line1: "",
            line2: "",
            suburb: "",
            postcode: "",
            state: "",
            country: "",
          },
          postalAddressString: "",
          contactPerson: {
            role: "",
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
          businessAddressIsEmploymentAddress: null,
          employmentAddress: {
            line1: "",
            line2: "",
            suburb: "",
            postcode: "",
            state: "",
            country: "",
          },
        },
        employmentStart: {
          date: "",
          dateDay: "",
          dateMonth: "",
          dateYear: "",
          unknownDate: false,
        },
        effectiveDismissalDate: {
          date: "",
          dateDay: "",
          dateMonth: "",
          dateYear: "",
          unknownDate: false,
        },
        wasToldAboutDismissal: null,
        dismissalTold: {
          date: "",
          dateDay: "",
          dateMonth: "",
          dateYear: "",
          unknownDate: false,
        },

        lodgingWithin21DaysLimit: null,
        lodgingWithin21DaysLimitDetails: "",
        startedOtherClaims: null,
        startedOtherClaimsDetails: "",
        employeeDescOfWhatHappened: "",
        employeeDesiredOutcomes: "",
        signatureConfirm: null,
        requireFeeWaiver: null,
        feePaidBy: "",
        paymentMethod: "",
        cardName: "",
        cardNumber: "",
        cardExpiry: "",
        cardCvv: "",
      },
      tabIndex: 0,
    };
  },
  mounted: function () {},
  methods: {
    changeTabIndex(index) {
      this.tabIndex = index;
      console.log("changed to index", index);
    },
  },
    computed: {
    youString: function () {
      return this.form.applyingForSelf ? "you" : "the Applicant";
    },
    yourString: function () {
      return this.form.applyingForSelf ? "your" : "the Applicant's";
    },
    AreYouString: function () {
      return this.form.applyingForSelf ? "are you" : "is the Applicant";
    },
    DoYouString: function () {
      return this.form.applyingForSelf ? "do you" : "is the Applicant";
    },
    DoYouStringCont: function () {
      return this.form.applyingForSelf ? "do you" : "does the Applicant";
    },
    youAreString: function () {
      return this.form.applyingForSelf ? "you are" : "the Applicant is";
    },
    wereYouString: function () {
      return this.form.applyingForSelf ? "were you" : "was the Applicant";
    },
    AreYouString: function () {
      return this.form.applyingForSelf ? "are you" : "the Applicant is";
    },
  },
};
</script>
