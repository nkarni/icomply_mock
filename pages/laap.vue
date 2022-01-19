<template>
  <b-container>
    <b-row>
      <b-col cols="12" md="6">
        <h3 class="text-primary">Application for Legal Aid</h3>
      </b-col>
      <b-col cols="12" md="6" class="text-right">
        <NuxtLink to="/home" class="text-right pr-0">
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
            { 'laap-nav-item-complete': true },
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
            { 'laap-nav-item-complete': true },
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
            { 'laap-nav-item-complete': false },
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
            { 'laap-nav-item-complete': false },
          ]"
        >
          <template #title>
            <h5>The legal problem</h5>
            <span>Information about the legal help needed</span>
          </template>
          <laap-applicant-details :form="form"></laap-applicant-details>
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
            { 'laap-nav-item-complete': false },
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
      <b-col cols="12" class="text-right">
        <b-button :disabled="tabIndex === 0" @click="tabIndex--">Prev</b-button>
        <b-button :disabled="tabIndex === 5" @click="tabIndex++">Next</b-button>
      </b-col>
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
              }
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
            incomeAssets: {
              employmentType: null,
              isPrimaryProducer: null,
              netWeeklyEarning: "",
              usualJob: "",
              lasWorked: "",
              noIncomeExplanation: "",
              incomePayments: [
                {
                  type: "Child support",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Rent received",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Workess compensation",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Superannuation",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Income from Trusts",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Spousal maintenance",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Other",
                  frequency: "",
                  amount: "",
                },
              ],
              expensePayments: [
                {
                  type: "Rent/Board",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Mortgage",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Rates",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Childcare fees",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Child support",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Spousal maintenance",
                  frequency: "",
                  amount: "",
                },
              ],
              hasVehicles: null,
              vehicles: [
                {
                  make: "",
                  model: "",
                  year: "",
                  value: "",
                  owing: "",
                },
              ],
              bankBalance: "",
              hasInvestments: null,
              investmentsValue: "",
              hasLegalFeesBeenPaid: null,
              hasLegalFeesBeenPaidDetails: "",
              gaveAwayMoneyOrProperty: null,
              gaveAwayMoneyOrPropertyDetails: "",
            },
            details: {
              lscFileNumber: "",
              otherGivenName: "",
              otherFamilyName: "",
              homeless: null,
              apyLands: null,
              aboriginality: "",
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
              hasFap: null,
            },
            benefits: {
              receivesBenefit: null,
              crnNumber: "",
              dvaNumber: "",
              benefitsPaymentTypes: [],
              maxPayment: null,
              consentToCentrelink: null,
              authoriseCentrelink: null,
              benefitsAmount: "",
            },
            property: {
              ownsAHome: null,
              ownsAdditionalHome: null,
              fapOwnsHome: null,
              properties: [
                {
                  homeCurrentValue: "",
                  homeMortgageOwing: "",
                  homeSoleOwner: null,
                  homeOwnershipShare: "",
                  homeCoOwners: "",
                  homeCoOwnersRelationship: "",
                  homeCoOwnersRelationshipDetail: "",
                  propertyAddress: {
                    line1: "",
                    line2: "",
                    suburb: "",
                    postcode: "",
                    state: "",
                    country: "",
                  },
                },
                {
                  homeCurrentValue: "",
                  homeMortgageOwing: "",
                  homeSoleOwner: null,
                  homeOwnershipShare: "",
                  homeCoOwners: "",
                  homeCoOwnersRelationship: "",
                  homeCoOwnersRelationshipDetail: "",
                  propertyAddress: {
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
          },
          fap: {
            firstName: "",
            lastName: "",
            crn: "",
            relationshipToApplicant: "",
            benefitsPaymentTypes: [],
            receivesMaxBenefits: null,
            property: {
              homeCurrentValue: "",
              homeMortgageOwing: "",
              homeSoleOwner: null,
              homeOwnershipShare: "",
              homeCoOwners: "",
              homeCoOwnersRelationship: "",
              homeCoOwnersRelationshipDetail: "",
              propertyAddress: {
                line1: "",
                line2: "",
                suburb: "",
                postcode: "",
                state: "",
                country: "",
              },
            },
            incomeAssets: {
              employmentType: null,
              isPrimaryProducer: null,
              netWeeklyEarning: "",
              usualJob: "",
              lasWorked: "",
              noIncomeExplanation: "",
              incomePayments: [
                {
                  type: "Child support",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Rent received",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Workess compensation",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Superannuation",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Income from Trusts",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Spousal maintenance",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Other",
                  frequency: "",
                  amount: "",
                },
              ],
              expensePayments: [
                {
                  type: "Rent/Board",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Mortgage",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Rates",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Childcare fees",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Child support",
                  frequency: "",
                  amount: "",
                },
                {
                  type: "Spousal maintenance",
                  frequency: "",
                  amount: "",
                },
              ],
              hasVehicles: null,
              vehicles: [
                {
                  make: "",
                  model: "",
                  year: "",
                  value: "",
                  owing: "",
                },
              ],
              bankBalance: "",
              hasInvestments: null,
              investmentsValue: "",
              hasLegalFeesBeenPaid: null,
              hasLegalFeesBeenPaidDetails: "",
              gaveAwayMoneyOrProperty: null,
              gaveAwayMoneyOrPropertyDetails: "",
            },
          },
        },

        repRelation: "",
        repRelationDetail: "",
        authToDisclose: null,
        authToDiscloseRelationship: "",
        authToDiscloseGivenName: "",
        authToDiscloseLastName: "",
        authToDiscloseContactDetail: "",

        // incomeAssets: {
        //   employmentType: null,
        //   isPrimaryProducer: null,
        //   netWeeklyEarning: "",
        //   usualJob: "",
        //   lasWorked: "",
        //   noIncomeExplanation: "",
        //   incomePayments: [
        //     {
        //       type: "Child support",
        //       frequency: "",
        //       amount: "",
        //     },
        //     {
        //       type: "Rent received",
        //       frequency: "",
        //       amount: "",
        //     },
        //     {
        //       type: "Workess compensation",
        //       frequency: "",
        //       amount: "",
        //     },
        //     {
        //       type: "Superannuation",
        //       frequency: "",
        //       amount: "",
        //     },
        //     {
        //       type: "Income from Trusts",
        //       frequency: "",
        //       amount: "",
        //     },
        //     {
        //       type: "Spousal maintenance",
        //       frequency: "",
        //       amount: "",
        //     },
        //     {
        //       type: "Other",
        //       frequency: "",
        //       amount: "",
        //     },
        //   ],
        //   expensePayments: [
        //     {
        //       type: "Rent/Board",
        //       frequency: "",
        //       amount: "",
        //     },
        //     {
        //       type: "Mortgage",
        //       frequency: "",
        //       amount: "",
        //     },
        //     {
        //       type: "Rates",
        //       frequency: "",
        //       amount: "",
        //     },
        //     {
        //       type: "Childcare fees",
        //       frequency: "",
        //       amount: "",
        //     },
        //     {
        //       type: "Child support",
        //       frequency: "",
        //       amount: "",
        //     },
        //     {
        //       type: "Spousal maintenance",
        //       frequency: "",
        //       amount: "",
        //     },
        //   ],
        //   hasVehicles: null,
        //   vehicles: [
        //     {
        //       make: "",
        //       model: "",
        //       year: "",
        //       value: "",
        //       owing: "",
        //     },
        //   ],
        //   bankBalance: "",
        //   hasInvestments: null,
        //   investmentsValue: "",
        //   hasLegalFeesBeenPaid: null,
        //   hasLegalFeesBeenPaidDetails: "",
        //   gaveAwayMoneyOrProperty: null,
        //   gaveAwayMoneyOrPropertyDetails: "",
        // },
      },
      tabIndex: 2,
    };
  },
  mounted: function () {},
  methods: {},
};
</script>
