<template>
  <b-container>
    <b-row>
      <b-col cols="8">
        <h3 class="text-primary">
          General protections involving dismissal claim
        </h3>
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
          <f-8-intro :form="form"></f-8-intro>
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
          <f-8-contact-details :form="form8"></f-8-contact-details>
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
            <h5>About {{ youString }}</h5>
            <span>Some details we need know</span>
          </template>
          <f-8-about-you :form="form8"></f-8-about-you>
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
          <f-8-employer-details :form="form8"></f-8-employer-details>
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

    <b-row class="mt-4">
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
          <pre>{{ form8 }}</pre>

          <pre>old form:{{ form }}</pre>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import f8Intro from "../components/f8/f8Intro.vue";
import f8AboutYou from "../components/f8/f8AboutYou.vue";
import f8ContactDetails from "../components/f8/f8ContactDetails.vue";
import f8EmployerDetails from "../components/f8/f8EmployerDetails.vue";
import f8Dismissal from "../components/f8/f8Dismissal.vue";
import f8Attachments from "../components/f8/f8Attachments.vue";
import f8Rev from "../components/f8/f8Rev.vue";

export default {
  components: {
    f8AboutYou,
    f8ContactDetails,
    f8EmployerDetails,
    f8Dismissal,
    f8Attachments,
    f8Rev,
    f8Intro,
  },
  layout: "form",
  data() {
    return {
      olsF2Model: {
        aboutTheApplicant: {
          over18: null,
          accessibilityReq: null,
          accessibilityReqDetails: null,
          interpreterReq: null,
          requiredLanguage: "",
          languageIsUnlisted: "",
        },
        dismissal: {
          dismissal: {
            within21Days: "",
            lateReason: "",
            madeOtherClaims: "",
            otherClaimDetails: "",
            whatHappened: "",
            desiredOutcome: "",
            employmentStart: "",
            employmentStartUnknown: "",
            approximateDate: {
              day: "",
              month: "",
              year: "",
            },
            dismissalToldDateUnknown: "",
            dismissalToldApproximateDate: {
              day: "",
              month: "",
              year: "",
            },
            applicantTold: "",
            applicantToldDate: "",
            effectiveDismissalDate: "",
            effectiveDismissalApproximateDate: {
              day: "",
              month: "",
              year: "",
            },
          },
        },
        applicantDetails: {
          applicant: {
            noAddress: "",
            languageIsUnlisted: "",
            unlistedLanguage: "",
            appRep: "",
            applicantType: null,
            details: {
              pronoun: "",
              email: "",
              givenName: "",
              lastName: "",
            },
            mailAddress: {
              address1: "",
              address2: "",
              city: "",
              postalCode: "",
              territory: "",
              countryCode: "",
              mailAddressType: "postal",
            },
            contact: [{ type: "", number: "" }],
            address: {
              address1: "",
              address2: "",
              city: "",
              postalCode: "",
              territory: "",
              countryCode: "",
              isSameMailAddress: false,
            },
          },
          repDetails: {
            applicantType: "solicitor",
            organizationName: "",
            address: {
              address1: "",
              address2: "",
              city: "",
              postalCode: "",
              territory: "",
              countryCode: "",
            },
            email: "",
            details: {
              firmOrgName: "",
              pronoun: "",
              givenName: "",
              lastName: "",
            },
            contact: [{ type: "", number: "" }],
          },
          repRelation: "",
          applicantRole: "",
        },
        formerEmployerDetails: {
          formerEmployer: {
            abn: null,
            applicantType: null,
            details: {
              role: "",
              title: "",
              givenName: "",
              lastName: "",
              sameAddress: null,
              email: "",
            },
            mailAddress: {
              address1: "",
              address2: "",
              city: "",
              postalCode: "",
              territory: "",
              countryCode: "",
              mailAddressType: "postal",
            },
            contact: [{ type: "", number: "" }],
            address: {
              address1: "",
              address2: "",
              city: "",
              postalCode: "",
              territory: "",
              countryCode: "",
              isSameMailAddress: false,
            },
            address2: {
              address1: "",
              address2: "",
              city: "",
              postalCode: "",
              territory: "",
              countryCode: "",
              isSameMailAddress: false,
            },
          },
          appRep: "",
        },
        lodgeTheApplicationDetails: {
          agreeToTerms: null,
          objectToConfidentiality: null,
        },
      },

      form8: {
        userRole: "", // [dismissedPerson, unionOfficeHolder, helper]
        dismissedPerson: {
          // this is the same entity as the applicant if applicant.type === individual

          // this will be either the dismissed person or the union officer, depending on applicant.type
          title: "",
          preferredPronoun: "",
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

          over18: null, // in the case of applicant.type === org: referring to the orgContact?
        },
        rep: {
          relationToDismissedPerson: "",
          relationToDismissedPersonDetails: "",
          title: "",
          preferredPronoun: "",
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
        applicant: {
          type: "", // [org,individual]
          orgName: "", // if applicant.type === org
          orgContactPerson: {
            // if applicant.type === org
            title: "",
            preferredPronoun: "",
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
          hasRep: null,
          // should the following be about the applicant or about the contact person or about the dismissed person?
          needsInterpreter: null,
          needsInterpreterLanguage: "",
          needsInterpreterLanguageDetails: "",
          needsInterpreterLanguageNotFound: false,
          needsAccessibility: null,
          needsAccessibilityDetails: "",
          researchConsent: null,
          doesNotHaveAnAddress: null,

          // end of F8 new stuff
        },
        respondents: [
          {
            businessDetailsString:
              "ABC pty ltd Trading as MY ABC, ABN: 12345678",
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
        ],
      },

      form: {
        userRole: "", // [dismissedPerson, unionOfficeHolder, helper]
        dismissedPerson: {
          // this is the applicant in applicant.type !== org
        },
        applicant: {
          type: "", // [org,individual]
          orgName: "", // if applicant.type === org
          contactDetails: {
            // this will be either the dismissed person or the union officer, depending on applicant.type
            title: "",
            preferredPronoun: "",
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
          over18: null, // in the case of applicant.type === org: referring to the orgContact?
          needsInterpreter: null, // as above
          needsInterpreterLanguage: "", // as above
          needsInterpreterLanguageDetails: "", // as above
          needsInterpreterLanguageNotFound: false, // as above
          needsAccessibility: null, // as above
          needsAccessibilityDetails: "", // as above
          researchConsent: null,
          doesNotHaveAnAddress: null,
          hasRep: null,

          // end of F8 new stuff
          applicantType: "",
          title: "",
          preferredPronoun: "",
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
          // over18: null,
          // needsInterpreter: null,
          // needsInterpreterLanguage: "",
          // needsInterpreterLanguageDetails: "",
          // needsInterpreterLanguageNotFound: false,
          // needsAccessibility: null,
          // needsAccessibilityDetails: "",
          // researchConsent: null,
          // doesNotHaveAnAddress: null,
          // hasRep: null,
        },

        applyingForSelf: null,

        rep: {
          title: "",
          preferredPronoun: "",
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
          preferredPronoun: "",
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
          relationshipToApplicant: "",
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
