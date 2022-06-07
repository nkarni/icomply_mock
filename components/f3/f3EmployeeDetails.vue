<template>
  <div>
    <b-form>
      <section class="mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Applicant's information</h6>
           
            <p>During the case, we will call the person who has made the application the Applicant.</p>
            <p>Employees who earn above a high income threshold are not protected from unfair dismissal unless they are covered by an award or agreement. </p>
             <p>Find the high income threshold on the <a href=" https://www.fwc.gov.au/high-income-threshold" target="_blank">website.</a></p>  
             <p>If you believe the Applicant’s income was more than the threshold, you can object to the claim.  Include this information later under ‘Jurisdictional objections’ at the ‘Other details’ tab.</p> 
          </b-col>
          <b-col>
            <b-form-group label="Applicant's given name:">
              <b-form-input
                v-model="form.employeeFirstName"
                disabled
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Applicant's surname:">
              <b-form-input
                v-model="form.employeeLastName"
                disabled
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Case number:">
              <b-form-input v-model="form.caseNumber" disabled></b-form-input>
            </b-form-group>

             <notice
              class="mb-4"
              message="If they were casual, write the hourly rate and describe their average weekly hours. "
            ></notice>
            <b-row>
              <b-col cols="6">
                <b-form-group label="Normal pay (gross, before tax):">
                  <b-input-group prepend="$">
                    <b-form-input v-model="form.employeeWage"></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group :label="'Frequency:'">
                  <b-form-select
                    v-model="form.employeeWeeklyWageFrequency"
                    :options="[
                      'Hourly',
                      'Weekly',
                      'Fortnightly',
                      'Monthly',
                      'Yearly',
                    ]"
                  ></b-form-select>
                </b-form-group>
              </b-col>
            </b-row>

            <b-form-group
              label="Average weekly hours:"
              v-if="form.employeeWeeklyWageFrequency === 'Hourly'"
            >
              <b-form-input v-model="form.averageWeeklyHours"></b-form-input>
            </b-form-group>

            <b-form-group
              :label="'Did they get any other benefits, such as a work car or mobile phone?'"
            >
              <b-form-radio-group
                v-model="form.employeeHasOtherBenefits"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group
              v-if="form.employeeHasOtherBenefits === true"
              label="Describe them here, including their value"
            >
              <b-form-textarea
                v-model="form.employeeOtherBenefitsDetails"
              ></b-form-textarea>
            </b-form-group>

            <b-form-group
              :label="'Were they covered by an award or enterprise agreement?'"
            >
              <b-form-radio-group
                v-model="form.employeeHasAwardAgreement"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              v-if="form.employeeHasAwardAgreement === true"
              label="Name of award or agreement "
            >
              <b-form-input
                v-model="form.employeeAwardAgreementName"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              v-if="form.employeeHasAwardAgreement === true"
              label="Award or agreement number "
            >
              <b-form-input
                v-model="form.employeeAwardAgreementNumber"
              ></b-form-input>
            </b-form-group>
            <notice
              v-if="form.employeeHasAwardAgreement === true"
              class="mb-4"
              message="If you don’t have these details handy, use our <a href=''>agreement search</a> or <a href=''>awards list</a> to find the correct name and number"
            >
            </notice>
          </b-col>
        </b-row>
      </section>
     
    </b-form>
  </div>
</template>

<script>
import entity from "../common/entity.vue";
import EntityAddress from "../common/entityAddress.vue";
import Notice from "../common/notice.vue";
export default {
  components: { entity, Notice, EntityAddress },
  name: "employeeDetails",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
    };
  },
  computed: {
    youString: function () {
      return this.form.repType === "self" ? "you" : "the Applicant";
    },
    yourString: function () {
      return this.form.repType === "self" ? "your" : "the Applicant's";
    },
    AreYouString: function () {
      return this.form.repType === "self" ? "are you" : "is the Applicant";
    },
    DoYouString: function () {
      return this.form.repType === "self" ? "do you" : "is the Applicant";
    },
    DoYouStringCont: function () {
      return this.form.repType === "self" ? "do you" : "does the Applicant";
    },
    youAreString: function () {
      return this.form.repType === "self" ? "you are" : "the Applicant is";
    },
    wereYouString: function () {
      return this.form.repType === "self" ? "were you" : "was the Applicant";
    },
    AreYouString: function () {
      return this.form.repType === "self" ? "are you" : "the Applicant is";
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
