<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Applicant's information</h6>

            <p>
              During the case, we will call the person who has made the
              application the Applicant.
            </p>
          </b-col>
          <b-col>
            <b-form-group label="Applicant's first name:">
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
          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Type of work</h6>
          </b-col>
          <b-col>
            <b-form-group label="Was the Applicant working:">
              <b-form-radio-group
                stacked
                v-model="form.engagementCommitment"
                :options="['Full time or Part time', 'Casual']"
              >
              </b-form-radio-group>
            </b-form-group>
            <notice
              v-if="form.engagementCommitment === 'Casual'"
              class="mb-4"
              message="The Fair Work Act only protects casual employees from unfair dismissal if their casual employment was regular and systematic and the employee reasonably expected that arrangement to continue.  <br>To be 'regular and systematic', the roster or pattern should be similar each time and part of an ongoing schedule or plan for the business."
            ></notice>


 <b-form-group label="Did the business employ the Applicant as a regular casual?">
              <b-form-radio-group
                v-model="form.engagementRegularCasual"
                :options="boolOptions"
              >
              </b-form-radio-group>
            </b-form-group>
             <notice
              v-if="form.engagementRegularCasual === false"
              class="mb-4"
              message="If you employed the Applicant a casual and their casual employment was not regular and systematic, you can object to the claim below at the ‘Objections’ tab."
            ></notice>
            

            <b-form-group label="Was the Applicant:">
              <b-form-radio-group
                stacked
                v-model="form.engagementType"
                :options="engagementTypeOptions"
              >
              </b-form-radio-group>
            </b-form-group>
            <b-form-group
              v-if="form.engagementType === 'Other'"
              label="Please provide details:"
            >
              <b-form-input v-model="form.engagementTypeDetails"></b-form-input>
            </b-form-group>
            <notice
              v-if="
                form.engagementType && form.engagementType !== 'An employee'
              "
              message="The Fair Work Act only protects employees from unfair dismissal.  <br>You can object to the claim if the Applicant was not an employee.  <br>Include this information later under ‘Jurisdictional objections’ at the ‘Other details’ tab."
              class="my-4"
              borderClass="red"
            ></notice>
          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Pay and benefits</h6>
            <p>
              Employees who earn above a high income threshold are not protected
              from unfair dismissal unless they are covered by an award or
              agreement.
            </p>
            <p>
              Find the high income threshold on the
              <a
                href=" https://www.fwc.gov.au/high-income-threshold"
                target="_blank"
                >website.</a
              >
            </p>
            <p>
              If you believe the Applicant’s income was more than the threshold,
              you can object to the claim. Include this information later under
              ‘Jurisdictional objections’ at the ‘Other details’ tab.
            </p>
          </b-col>
          <b-col>
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
            <notice
              class="mb-4"
              message="If the Applicant was employed as a casual, write the hourly rate and describe their average weekly hours. "
            ></notice>

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
      engagementTypeOptions: [
        "An employee",
        "An independent contractor",
        "A volunteer",
        "Other",
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
