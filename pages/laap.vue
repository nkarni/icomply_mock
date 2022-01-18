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
        v-model="tabIndex"
        vertical
        nav-wrapper-class="w-30"
        class="w-100"
        active-nav-item-class="text-primary laap-nav-item-active"
        nav-class="laap-nav"
        content-class="card p-4"
      >
        <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-4',
            {'laap-nav-item-complete': true}
          ]"
        >
          <template #title>
            <h5>Conditions of Legal Aid</h5>
            <span>The eligibility criteria explained</span>
          </template>
          <laap-conditions :form="form"></laap-conditions>
        </b-tab>

        <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-4',
            {'laap-nav-item-complete': false}
          ]"
        >
          <template #title>
            <h5>Applicant details</h5>
            <span>Contact and other details</span>
          </template>
          <laap-applicant-details :form="form"></laap-applicant-details>
        </b-tab>

        <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-4',
            {'laap-nav-item-complete': false}
          ]"
        >
          <template #title>
            <h5>Eligibility</h5>
            <span>Applicant's means test</span>
          </template>
          <laap-eligibility :form="form"></laap-eligibility>
        </b-tab>

        <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-4',
            {'laap-nav-item-complete': false}
          ]"
        >
          <template #title>
            <h5>The legal problem</h5>
            <span>Information about the legal help needed</span>
          </template>
          <laap-eligibility :form="form"></laap-eligibility>
        </b-tab>

        <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-4',
            {'laap-nav-item-complete': false}
          ]"
        >
          <template #title>
            <h5>Attachments</h5>
            <span>Relevant attachments to support the application</span>
          </template>
          <laap-attachments :form="form"></laap-attachments>
        </b-tab>

        <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-4',
            {'laap-nav-item-complete': false}
          ]"
        >
          <template #title>
            <h5>Lodge the application</h5>
            <span>Confirm and submit the application</span>
          </template>
          <laap-lodge :form="form"></laap-lodge>
        </b-tab>
      </b-tabs>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12">
        <b-card>
          <pre>{{ form }}</pre>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: "user",

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
      tabIndex: 1,
    };
  },
  mounted: function () {},
  methods: {},
};
</script>

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
