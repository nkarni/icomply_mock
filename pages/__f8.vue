<template>
  <b-container>
    <b-row>
      <b-col cols="8">
        <h3 class="text-primary">Unfair dismissal claim</h3>
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
            <h5>About you</h5>
            <span>Some details we need know</span>
          </template>
          <f-8-about-you :form="form"></f-8-about-you>
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
            <h5>The employment</h5>
            <span>Details about your employment</span>
          </template>
          <f-8-employment :form="form"></f-8-employment>
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
          <f-8-dismissal :form="form"></f-8-dismissal>
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

    <b-row class="mt-4" v-if="tabIndex !== 2">
      <b-col cols="12" class="text-right">
        <b-button
          variant="primary"
          v-if="tabIndex > 0"
          @click="tabIndex--"
          class="mr-2"
          >Save & Prev</b-button
        >
        <b-button variant="primary" v-if="tabIndex < 5" @click="tabIndex++"
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
import f8AboutYou from "../components/f8/f8AboutYou.vue";
import f8Employment from "../components/f8/f8Employment.vue";
import f2ContactDetails from "../components/f2/f2ContactDetails.vue";
import f2EmployerDetails from "../components/f2/f2EmployerDetails.vue";
import f8Dismissal from "../components/f8/f8Dismissal.vue";
import f2Attachments from "../components/f2/f2Attachments.vue";
import f2Rev from "../components/f2/f2Rev.vue";

export default {
  components: {
    f8AboutYou,
    f2ContactDetails,
    f2EmployerDetails,
    f8Dismissal,
    f2Attachments,
    f2Rev,
    f8Employment,
  },
  layout: "form",
  data() {
    return {
      form: {
        applyingForSelf: true, // this form is only for the applicant use
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
          orgName: "",
        },
        formFiller: {
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
          orgName: "",
          relationshipToApplicant: "",
        },
        applicant: {
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
          over18: null,
          needsInterpreter: null,
          needsInterpreterLanguage: "",
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
        perceivedDismissalReasons: [],
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
};
</script>
