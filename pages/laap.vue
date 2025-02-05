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
            <h5>Conditions of Legal Aid</h5>
            <span>The eligibility criteria explained</span>
          </template>
          <laap-conditions :form="form"></laap-conditions>
        </b-tab>

        <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-3',
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
            'p-3',
            { 'laap-nav-item-complete': false },
          ]"
        >
          <template #title>
            <h5>Financial Information</h5>
            <span>Applicant's means test</span>
          </template>
          <laap-eligibility @changeTabIndex="changeTabIndex" :form="form"></laap-eligibility>
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
            <h5>The legal problem</h5>
            <span>Information about the legal help needed</span>
          </template>
          <laap-problem :form="form"></laap-problem>
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

    <b-row class="mt-4" v-if="tabIndex !== 2">
      <b-col cols="12" class="text-right">
        <b-button v-if="tabIndex > 0"  @click="tabIndex--">Save & Prev</b-button>
        <b-button v-if="tabIndex < 5" @click="tabIndex++">Save & Next</b-button>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12">
        <b-card>
          <p>Validation information and limitations of this mockup:</p>
          <ul>
             <li>
              The purpose of this prototype is to verify the logic of conditionally hidden fields, labels and text, and user flow. It does not apply validation.</li>
              <li>
The data is not saved in a database - the form data will reset every time the browser window is refreshed. When testing different use cases, it would be good to refresh the browser window and start with a fresh form when switching from on use case to another (to avoid confusion).
              </li>

             <li>
              Each tab will be validated before the user can go to the next tab (this ensures they don't have to go back and forth to pass validation). This mockup doesn't affect validation however the rule is that All visible fields are mandatory unless they are marked as
              optional. However, the following specific rules should be mentioned:
            </li>
            <ul>
            <li>
              At least one contact method is required (email, phone or address)  (applies to the Applicant's address only, or to all?)
            </li>
            <li>
              All number fields will be validated as integers, except when it is
              currency field (it will allow a decimal)
            </li>
            <li>
              CRN number validated as 9 digits and 1 letter, DVA number is 8
              digits. Either a CRN number or DVA number is mandatory (if
              showing)
            </li>
            </ul>
            <li>
              The section below shows the data as it exists in the form and is updated in real time. The data structure is temporary and may be changed when actual development starts. However, I thought it may help you in seeing what data exists in the form as you test it. 
            </li>
            <li>
              With regards to tabs navigation, the following two items will be completed when we build the site and do not work in the prototype because they depend on validation:
              <ul>
                <li>Tab navigation links will change colour depending on the state of that tab (currently open has blue tag, completed is in green, etc)</li>
                <li>The next/previous button don't progress ot the inner tabs inside Eligibility step </li>
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
          <pre>{{ form.problem.criminalLaw.appealCourts }}</pre>
          <pre>{{ form }}</pre>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: "form",
  data() {
    return {
      form: {
        agreeToConditions: null,
        repType: "",
        isLscPanelMember: null,
        prevRepresented: null,
        repSolicitorOrgName: "",
        entities: {
          repSolicitor: {
            orgName: "",
            orgAddress: "",
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
                isSafe: null,
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
              dob: '',
              hasOtherNames: null,
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
              benefitsPaymentTypesDetails: '',
              maxPayment: null,
              consentToCentrelink: null,
              authoriseCentrelink: null,
              benefitsAmounts: [],
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
          otherParty: {
            firstName: "",
            lastName: "",
            crn: "",
            relationshipToApplicant: "",
            lawyerFirstName: "",
            lawyerLastName: "",
            hasLawyer: null,
            lawyerFirm: "",
            lawyerAddress: {
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

        repRelation: "",
        repRelationDetail: "",
        authToDisclose: null,
        authToDiscloseRelationship: "",
        authToDiscloseGivenName: "",
        authToDiscloseLastName: "",
        authToDiscloseContactDetail: "",
        problem: {
          preferredLawyerType: "",
          preferredLawyerDetails: "",
          preferredLawyer: {
            orgName: "",
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
          lawyerOrgName: "",
          problemType: [],
          criminalLaw: {
            haveToGoCourt: null,
            courts: [
              {
                courtType: null,
                courtTown: null,
                nextDate: "",
                nextDateReason: "",
                nextDateReasonDetails: "",
                offenses: "",
                offenceDetails: "",
                victims: [
                  {
                    firstName: "",
                    lastName: "",
                  },
                ],
                hasOtherCharged: null,
                othersCharged: [{ firstName: "", lastName: "" }],
              },
            ],
            hasParoleBoard: null,
            paroleBoards: [
              {
                date: "",
                details: "",
              },
            ],
            appealingAgainst: [],
            appealCourts: [
              {
                courtType: null,
                courtTown: null,
                nextDate: "",
                nextDateReason: "",
                offenses: "",
                offenceDetails: "",
                victims: [
                  {
                    firstName: "",
                    lastName: "",
                  },
                ],
                hasOtherCharged: null,
                othersCharged: [{ firstName: "", lastName: "" }],
              },
            ],
            hasCriminalRecord: "",
            policeTakenBelonging: null,
          },
          familyLaw: {
            haveToGoto: null,
            courtType: null,
            courtTown: null,
            nextDate: "",
            nextDateReason: "",
            nextDateReasonDetails: "",
            courtFileNumber: "",
            conferenceDate: "",
            otherPartyFirstName: "",
            otherPartyLastName: "",
            isClcInvolved: null,
            whichClc: "",
            wantsToAppeal: null,
            appealDetails: "",
            appealCourtType: "",
            appealCourtTown: "",
            appealCourtDate: "",
            problemType: [],
            policeAppliedForIntervention: null,
            policeInterventionDetails: "",
            problemDetails: "",
            beenToCounseling: null,
            marriedToOtherParty: null,
            marriageDate: "",
            SeparationDate: "",
            DivorceDate: "",
            inDefacto: null,
            relationshipStartDate: "",
          },
          civilLaw: {
            haveToGoto: null,
            courts: [
              {
                courtType: null,
                courtTown: null,
                nextDate: "",
                nextDateReason: "",
                courtFileNumber: "",
              },
            ],
            tribunals: [
              {
                details: "",
              },
            ],
            wantsToAppeal: null,
            appealDetails: "",
            appealCourtType: "",
            appealCourtTown: "",
            appealCourtDate: "",
            problemType: [],

            problemDetails: "",
          },
          dcp: {
            relationshipToChildren: '',
             courtType: null,
            courtTown: null,
            nextDate: "",
            courtFileNumber: "",
            hasDcpDocuments: null,
          }
        },
        coverLetterDetails: '',
        agreeToTerms: null,
        objectToConfidentiality: null
      },
      tabIndex: 0,
    };
  },
  mounted: function () {},
  methods: {
    changeTabIndex(index){
      this.tabIndex = index
      console.log('changed to index', index)
    }
  },
};
</script>
