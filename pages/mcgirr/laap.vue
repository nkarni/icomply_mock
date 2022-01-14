<template>
  <div class="container p-5">
    <b-row>
      <h3 class="mb-3">
        <span>Bias Detection Events</span
        ><span style="float: right; font-size: 14px"
          ><NuxtLink to="list" class="nav-link pr-0"
            >Back to dashboard</NuxtLink
          ></span
        >
      </h3>
      <b-tabs v-model="tabIndex" small card vertical nav-wrapper-class="col-3">
        <b-tab>
          <template #title>
            <h5>Conditions of Legal Aid</h5>
            <p>The eligiblity criteria explained</p>
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
            <h5>Applicant details</h5>
            <p>Contact and other details</p>
          </template>
          <applicant-details :form="form" ></applicant-details>
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
            <h5>Eligiblity</h5>
            <p>Applicant’s means test</p>
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
            <h5>The legal problem</h5>
            <p>Information about the legal help needed</p>
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
            <h5>Attachments</h5>
            <p>Relevant attachments to support the application</p>
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
import BiasTab from "~/components/biasTab.vue";
import DatasetTab from "~/components/datasetTab.vue";
import ApplicantDetails from "~/components/laap/applicantDetails.vue";
import Attachments from "~/components/laap/attachments.vue";
import Conditions from "~/components/laap/conditions.vue";
import Eligibility from "~/components/laap/eligibility.vue";
import Problem from "~/components/laap/problem.vue";
import ReviewTab from "~/components/reviewTab.vue";
import toggle from "~/components/toggle.vue";
export default {
  layout: 'user',
  components: {
    toggle,
    DatasetTab,
    BiasTab,
    ReviewTab,
    Conditions,
    Problem,
    Attachments,
    Eligibility,
    ApplicantDetails,
  },
  data() {
    return {
      form: {
        var1: "Commerically (bought it)",
        repType: '',
        isLscPanelMember: '',
        prevRepresented: '',
        repSolicitorOrgName: '',
        entities : {
          repSolicitor: {
            orgName: '',
            firstname: '',
            lastname: '',
            email: '',
            phones : []
          },
          applicant: {

          }
        }
      },
      tabIndex: 0,
    };
  },
  mounted: function () {},
  methods: {},
};
</script>

<style>
</style>