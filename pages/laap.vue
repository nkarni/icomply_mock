<template>
  <b-container>
    <b-row>
      <b-col
        cols="12"
        md="6"
      >
        <h3 class="text-primary">Application for Legal Aid</h3>
      </b-col>
      <b-col
        cols="12"
        md="6"
        class="text-right"
      >
        <NuxtLink
          to="/home"
          class="text-right pr-0"
        >
          Back to dashboard
        </NuxtLink>
      </b-col>
    </b-row>
    <b-row class="mt-4">

      <b-tabs
        vertical
        nav-wrapper-class="w-30"
        class="w-100"
        active-nav-item-class="text-primary laap-nav-item-active"
        nav-class="laap-nav"
        content-class="card p-4"
      >
        <b-tab
          title-link-class="laap-title-link mb-2 p-4 laap-nav-item-complete"
        >
          <template #title>
            <h5>Conditions of Legal Aid</h5>
            <span>The eligibility criteria explained</span>
          </template>
          <conditions :form="form"></conditions>
        </b-tab>

        <b-tab
          active
          title-link-class="laap-title-link mb-2 p-4"
        >
          <template #title>
            <h5>Applicant details</h5>
            <span>Contact and other details</span>
          </template>
          <applicant-details :form="form"></applicant-details>
        </b-tab>

        <b-tab
          title-link-class="laap-title-link mb-2 p-4"
        >
          <template #title>
            <h5>Eligibility</h5>
            <span>Applicant's means test</span>
          </template>
          <eligibility :form="form"></eligibility>
        </b-tab>

        <b-tab
          title-link-class="laap-title-link mb-2 p-4"
        >
          <template #title>
            <h5>The legal problem</h5>
            <span>Information about the legal help needed</span>
          </template>
          <eligibility :form="form"></eligibility>
        </b-tab>

        <b-tab
          title-link-class="laap-title-link mb-2 p-4"
        >
          <template #title>
            <h5>Attachments</h5>
            <span>Relevant attachments to support the application</span>
          </template>
          <attachments :form="form"></attachments>
        </b-tab>

        <b-tab
          title-link-class="laap-title-link mb-2 p-4"
        >
          <template #title>
            <h5>Lodge the application</h5>
            <span>Confirm and submit the application</span>
          </template>
          <lodge :form="form"></lodge>
        </b-tab>
      </b-tabs>

      <b-tabs v-model="tabIndex" small vertical nav-wrapper-class="col-3" class="mt-4">
        <b-tab>
          <template #title>
            <div :class="tabIndex > 0 ? 'completed' : ''">
              <h5>Conditions of Legal Aid</h5>
              The eligiblity criteria explained
            </div>
          </template>
          <conditions :form="form"></conditions>
          <div class="text-center">
            <b-button-group class="mt-2">
              <b-button @click="tabIndex++">Next</b-button>
            </b-button-group>
          </div>
        </b-tab>
        <b-tab>
          <template #title>
            <div :class="tabIndex > 1 ? 'completed' : ''">
              <h5>Applicant details</h5>
              <p>Contact and other details</p>
            </div>
          </template>
          <applicant-details :form="form"></applicant-details>
          <div class="text-center" v-if="form.repType">
            <b-button-group class="d-grid gap-2 d-md-block">
              <b-button @click="tabIndex--">Previous</b-button>
              &nbsp;
              <b-button @click="tabIndex++">Next</b-button>
            </b-button-group>
          </div>
        </b-tab>
        <b-tab>
          <template #title>
            <div :class="tabIndex > 2 ? 'completed' : ''">
              <h5>Eligiblity</h5>
              <p>Applicant’s means test</p>
            </div>
          </template>
          <eligibility :form="form"></eligibility>
          <div class="text-center">
            <b-button-group class="d-grid gap-2 d-md-block">
              <b-button @click="tabIndex--">Previous</b-button>
              &nbsp;
              <b-button @click="tabIndex++">Next</b-button>
            </b-button-group>
          </div>
        </b-tab>
        <b-tab>
          <template #title>
            <div :class="tabIndex > 3 ? 'completed' : ''">
              <h5>The legal problem</h5>
              <p>Information about the legal help needed</p>
            </div>
          </template>
          <problem :form="form"></problem>
          <div class="text-center">
            <b-button-group class="d-grid gap-2 d-md-block">
              <b-button @click="tabIndex--">Previous</b-button>
              &nbsp;
              <b-button @click="tabIndex++">Next</b-button>
            </b-button-group>
          </div>
        </b-tab>
        <b-tab>
          <template #title>
            <div :class="tabIndex > 5 ? 'completed' : ''">
              <h5>Attachments</h5>
              <p>Relevant attachments to support the application</p>
            </div>
          </template>
          <attachments :form="form"></attachments>
          <div class="text-center">
            <b-button-group class="d-grid gap-2 d-md-block">
              <b-button @click="tabIndex--">Previous</b-button>
              &nbsp;
              <b-button @click="tabIndex++">Next</b-button>
            </b-button-group>
          </div>
        </b-tab>
        <b-tab>
          <template #title>
            <h5>Lodge the application</h5>
            <p>Confirm and submit the application</p>
          </template>
          <lodge :form="form"></lodge>
          <div class="text-center">
            <b-button-group class="d-grid gap-2 d-md-block">
              <b-button @click="tabIndex--">Previous</b-button>
            </b-button-group>
          </div>
        </b-tab>
      </b-tabs>
    </b-row>

    <b-row>
      <pre>{{ form }}</pre>
    </b-row>
  </b-container>
</template>

<script>
import ApplicantDetails from "~/components/laap/applicantDetails.vue";
import Attachments from "~/components/laap/attachments.vue";
import Conditions from "~/components/laap/conditions.vue";
import Eligibility from "~/components/laap/eligibility.vue";
import Problem from "~/components/laap/problem.vue";
import Lodge from "~/components/laap/lodge.vue";

export default {
  layout: "user",
  components: {
    Conditions,
    Problem,
    Attachments,
    Eligibility,
    ApplicantDetails,
    Lodge,
  },

  data() {
    return {
      form: {
        repType: "",
        isLscPanelMember: null,
        prevRepresented: "",
        repSolicitorOrgName: "",
        entities: {
          repSolicitor: {
            orgName: "initial",
            firstName: "",
            lastName: "",
            email: "",
            phones: [
              {
                type: "mobile",
                number: "0402222777",
                isSafe: false,
              },
              {
                type: "landline",
                number: "0266856655",
                isDafe: null,
              },
            ],
            address: {
              line1: "",
              line2: "",
              suburb: "",
              postcode: "",
              state: "",
              country: "",
            },
            postalAddress: {
              line1: "",
              line2: "",
              suburb: "",
              postcode: "",
              state: "",
              country: "",
            },
          },
          applicant: {
            orgName: "",
            firstName: "",
            lastName: "",
            email: "",
            phones: [
              {
                type: "",
                number: "",
              },
              {
                type: "",
                number: "",
              },
            ],
            address: {
              line1: "",
              line2: "",
              suburb: "",
              postcode: "",
              state: "",
              country: "",
            },
            postalAddress: {
              line1: "",
              line2: "",
              suburb: "",
              postcode: "",
              state: "",
              country: "",
            },
            isAddressSafeToMail: null,
            isEmailSafeToMail: null,
            isPostalAddressSafeToMail: null,
            postalAddressSame: null,
          },
        },
        lscFileNumber: "",
        otherGivenName: "",
        otherFamilyName: "",
        homeless: null,
        apyLands: null,
        aborginality: "",
        inPrison: null,
        prisonName: "",
        prisonSection: "",
        prisonId: "",
        gender: "",
        bornOs: null,
        bornWhere: "",
        homeLanguage: "",
        requireInterpreter: null,
        language: "",
        disability: "",
        disabilityDetail: "",
        requireExtraHelp: null,
        extraHelpDetail: "",
        under18: null,
        relationshipStatus: "",
        relationshipStatusDetail: "",
        riskOfViolence: null,
        familyViolenceAllegation: null,
        riskOfElderAbuse: null,
        dependants: [],
        numOfDependants: "",
        repRelation: "",
        repRelationDetail: "",
        authToDisclose: null,
        authToDiscloseRelationship: "",
        authToDiscloseGivenName: "",
        authToDiscloseLastName: "",
        authToDiscloseContactDetail: "",
        receivesBenefit: null,
        crnNumber: "",
        dvaNumber: "",
        benefitsPaymentTypes: [],
        maxPayment: null,
        consentToCentrelink: null,
        authoriseCentrelink: null,
        benefitsAmount: "",
        hasFap: null,
        fap: {
          firstName: "",
          lastName: "",
          crn: "",
          relationshipToApplicant: "",
          benefitsPaymentTypes: [],
          receivesMaxBenefits: null,
        },
        ownsAHome: null,
        propertyAddress: {
          line1: "",
          line2: "",
          suburb: "",
          postcode: "",
          state: "",
          country: "",
        },
      },
      tabIndex: 0,
    };
  },
  mounted: function () {},
  methods: {},
};
</script>

<style scoped>
/* .nav-tabs .nav-link {
  font-size: 1.1rem;
}
.nav-item h5 {
  font-size: 1.15rem;
}
.col-3 {
  width: 20%;
} */
</style>

<style>
.laap-nav {
  border-bottom: 0 !important;
}

.laap-title-link {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.laap-title-link:hover {
  background-color: var(--white) !important;
}

.laap-nav-item-complete {
  border: 1px solid var(--grey-200) !important;
  border-left: 3px solid var(--success) !important;
  background-color: var(--white) !important;
  color: var(--success) !important;
}

.laap-nav-item-active {
  border: 1px solid var(--grey-200) !important;
  border-left: 3px solid var(--primary) !important;
}
</style>
