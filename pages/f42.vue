<template>
<div>
 
<b-container v-if="form.userRole !== ''">
    
    <b-row>
      <b-col cols="8" >
        <h3 class="text-primary">Application for an entry permit</h3>
      </b-col>
      <b-col cols="4" class="text-right">
       
        <b-button>Reference: YCFRU</b-button>
          <b-button variant="primary">Save for later</b-button>
      </b-col>
    </b-row>
     <b-row class="mt-4">
      <b-col  >
        <h5 class="text-primary">Current status: Started</h5>
        <small>Status progression is Started >> Awaiting Entry Holder confirmation >> Awaiting Member of Committee of Management confirmation >> Ready for submission >> Submitted</small>
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
            <h5>The proposed Entry Permit holder</h5>
            <!-- <span>Their details</span> -->
          </template>
          <f-3-dismissal :form="form"></f-3-dismissal>
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
            <h5>The Member of Committee of Management</h5>
            <!-- <span>Their details</span> -->
          </template>
          <f-3-other-info :form="form"></f-3-other-info>
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
          <f-3-review :form="form"></f-3-review>
        </b-tab>
      </b-tabs>
    </b-row>

    <b-row class="mt-4" v-if="tabIndex !== 2">
      <b-col cols="12" class="text-right">
        <b-button variant="primary" v-if="tabIndex > 0" @click="tabIndex--" class="mr-2">Save & Prev</b-button>
        <b-button variant="primary" v-if="tabIndex < 5" @click="tabIndex++">Save & Next</b-button>
      </b-col>
    </b-row>

   
</b-container>
 <b-container >
    <b-row class="mt-4">
      <b-col>
        <h4>Select a role:</h4>
        <div v-if="form.userRole != ''">Current view is {{form.userRole}}</div>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col cols="4">
        <b-button variant="outline-primary" @click.prevent="form.userRole='admin'">
       <h4>Administrator view</h4>  Start an application, or edit an existing one
       </b-button>
      </b-col>
      <b-col cols="4">
         <b-button variant="outline-primary"  @click.prevent="form.userRole='holder'">
       <h4>Proposed Permit Holder view</h4>Join an application
         </b-button>
      </b-col>
          <b-col cols="4">
             <b-button variant="outline-primary"  @click.prevent="form.userRole='management'">
       <h4>Member of Committee of Management view</h4>Join an application
             </b-button>
      </b-col>
    </b-row>
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

</div>
  
</template>

<script>
import f42ProcessAdmin from "../components/laap/f42ProcessAdmin.vue";
import f42YourDetails from "../components/laap/f42YourDetails.vue";
import F3Circumstances from "../components/laap/f3Circumstances.vue";
import F3Dismissal from "../components/laap/f3Dismissal.vue";
import f3EmployeeDetails from "../components/laap/f3EmployeeDetails.vue";
import F3OtherInfo from '../components/laap/f3OtherInfo.vue';
import F3Review from '../components/laap/f3Review.vue';
import F3files from '../components/laap/f3files.vue';
export default {
  components: { f42ProcessAdmin, f42YourDetails, f3EmployeeDetails, F3Circumstances, F3Dismissal, F3OtherInfo, F3Review, F3files },
  layout: "form",
  data() {
    return {
      form: {

        userRole: '',
        admin: {
          hasDifferentPostalAddress: false,
          confirmAuthorised: false,
          firstName: '',
          lastName: '',
          email: '',
          postalAddress: {
            line1: "",
            line2: "",
            suburb: "",
            postcode: "",
            state: "",
            country: "",
          },
        },
        permitHolder: {

        },
        committeeMember: {

        },



        businessDetailsCorrect: null,
        employeeProvidedBusinessNameString: "Sydney Bins ABN 12345678",
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
          postalAddressString: "22 Main street, Sydney NSW 2000",
          industryDetails: "",
          industry: "",
          contactPerson: {
             title:"",
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
        needsInterpreter: null,
        needsInterpreterLanguage: "",
        needsAccessibility: null,
        needsAccessibilityDetails: "",
        researchConsent: null,
        hasRep: null,
        rep: {
          title:"",
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
        employeeFirstName: "John",
        employeeLastName: "Smith",
        caseNumber: "ABC123",
        jurisdictionalObjections: [],
        employeeWage: "",
        employeeWeeklyWageFrequency: "",
        averageWeeklyHours:"",
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
        otherInfo: "",
      },
      formX: {
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
              dob: "",
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
              benefitsPaymentTypesDetails: "",
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
            relationshipToChildren: "",
            courtType: null,
            courtTown: null,
            nextDate: "",
            courtFileNumber: "",
            hasDcpDocuments: null,
          },
        },
        coverLetterDetails: "",
        agreeToTerms: null,
        objectToConfidentiality: null,
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
