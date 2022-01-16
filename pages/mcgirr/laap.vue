<template>
  <div class="container p-5 laap">
    <b-row>
      <h3 class="mb-3">
        <span class="text-primary">Application for Legal Aid</span>
        <span style="float: right; font-size: 14px">
          <NuxtLink to="list" class="nav-link pr-0">
            Back to dashboard
          </NuxtLink>
        </span>
      </h3>
      <b-tabs v-model="tabIndex" small vertical nav-wrapper-class="col-3">
        <b-tab >
          <template #title>
            <div :class = "(tabIndex > 0 ? 'completed' : '')">
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
            <div :class = "(tabIndex > 1 ? 'completed' : '')">
            <h5>Applicant details</h5>
            <p>Contact and other details</p>
            </div>
          </template>
          <applicant-details :form="form"></applicant-details>
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
            <div :class = "(tabIndex > 2 ? 'completed' : '')">
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
            <div :class = "(tabIndex > 3 ? 'completed' : '')">
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
            <div :class = "(tabIndex > 5 ? 'completed' : '')">
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
  </div>
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
                isSafe: false
              },
              {
                type: "landline",
                number: "0266856655",
                isDafe: null
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
          lscFileNumber: '',
          otherGivenName: '',
          otherFamilyName: '',
          homeless: null,
          apyLands: null,
          aborginality: '',
          inPrison: null,
          prisonName: '',
          prisonSection: '',
          prisonId: '',
          gender: '',
          bornOs: null,
          bornWhere: '',
          homeLanguage: '',
          requireInterpreter: null,
          language: '',
          disability: '',
          disabilityDetail: '',
          requireExtraHelp: null,
          extraHelpDetail: '',
          under18: null,
          relationshipStatus: '',
          relationshipStatusDetail: '',
          riskOfViolence: null,
          familyViolenceAllegation: null,
          riskOfElderAbuse: null,
          dependants: [
            
          ],
          numOfDependants: '',
          repRelation: '',
          repRelationDetail:'',
          authToDisclose:null,
          authToDiscloseRelationship: '',
          authToDiscloseGivenName: '',
          authToDiscloseLastName: '',
          authToDiscloseContactDetail: ''
      },
      tabIndex: 0,
    };
  },
  mounted: function () {},
  methods: {},
};
</script>

<style scoped>
.nav-tabs .nav-link {
  font-size: 1.1rem;
}
.nav-item h5 {
  font-size: 1.15rem;
}
.col-3 {
  width: 20%;
}
</style>