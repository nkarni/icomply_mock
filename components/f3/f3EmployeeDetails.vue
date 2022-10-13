<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Applicant's information</h6>

            <p>
              This is the person who has lodged the claim. During the case, we will call this person the Applicant.
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
            <p>
              Only employees are covered by national unfair dismissal laws. 
            </p>
            <p>
              You can find information about who is and isn't covered on the <a href="https://www.fwc.gov.au/people-excluded-national-unfair-dismissal-laws" target="_blank">website</a>
            </p>
          </b-col>
          <b-col>
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
            <div
              v-if="
                form.engagementType && form.engagementType !== 'An employee'
              "
            >
              <notice
                message="The Fair Work Act only protects employees from unfair dismissal.<br>
If the Applicant was not an employee you can object to the claim"
                class="my-4"
                borderClass="red"
              ></notice>
              <objections :form="form" :objectionIndex="1"></objections>

              
            </div>
            <b-form-group label="Was the Applicant a casual?"   v-if="
                form.engagementType && form.engagementType === 'An employee'
              " >
              <b-form-radio-group v-model="form.casual" :options="boolOptions">
              </b-form-radio-group>
            </b-form-group>

            <div v-if="form.casual === true">
              <notice
                class="mb-4"
                :borderClass="'red'"
                message="If you employed the Applicant a casual and their casual employment was not regular and systematic, you can object to the claim."
              ></notice>
              <objections :form="form" :objectionIndex="7"></objections>
              
            </div>

            <!-- <b-form-group
              label="Did the business employ the Applicant as a regular casual?"
            >
              <b-form-radio-group
                v-model="form.engagementRegularCasual"
                :options="boolOptions"
              >
              </b-form-radio-group>
            </b-form-group> -->

            <!-- <div v-if="form.engagementRegularCasual === false">
              <notice
                class="mb-4"
                message="If you employed the Applicant a casual and their casual employment was not regular and systematic, you can object to the claim below at the ‘Objections’ tab."
              ></notice>

              <objections :form="form" :objectionIndex="1"></objections>
            </div> -->
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
          </b-col>
          <b-col>
            <div v-if="form.casual === true">
              <b-row>
                <b-col cols="6">
                  <b-form-group label="Hourly rate (gross, before tax):">
                    <b-input-group prepend="$">
                      <b-form-input v-model="form.employeeWage"></b-form-input>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Average hours per week">
                    <b-form-input v-model="form.averageWeeklyHours">
                    </b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </div>
            <div v-else>
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
            </div>

            <notice
              class="mb-3"
              v-if="annualWage > 0"
              :message="'Calculated annual wage is: $' + annualWage"
            ></notice>

            <!-- <notice
              class="mb-3"
              :message="'If you believe the Applicant’s income was more than the high income threshold, you can object to the claim.'"
            ></notice> -->

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
              :label="'Was the Applicant covered by an award or enterprise agreement?'"
            >
              <b-form-radio-group
                v-model="form.employeeHasAwardAgreement"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              v-if="form.employeeHasAwardAgreement === true"
              label="Name of award or agreement"
            >
              <b-form-input
                v-model="form.employeeAwardAgreementName"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              v-if="form.employeeHasAwardAgreement === true"
              label="Award number (optional)"
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

            <div v-if="form.employeeHasAwardAgreement === false">
              <notice
                class="mb-4"
                :borderClass="'red'"
                :message="'If an employee is not covered by a modern award or enterprise agreement, they must have an annual rate of earnings of less than the high income threshold to be eligible to make an unfair dismissal claim.<a href=\'https://www.fwc.gov.au/high-income-threshold\' target=\'_blank\'> Click here</a> to read more about the high income threshold.'"
              ></notice>

              <objections
                v-if="form.employeeHasAwardAgreement === false"
                :form="form"
                :objectionIndex="5"
              ></objections>
            </div>

            <!-- <objections v-if="form.employeeHasAwardAgreement === false" :form="form" :objectionIndex="5" :title="'Do you want to object to the claim because the Applicant earned more than the high income threshold?'"></objections> -->
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
import Objections from "../common/objections.vue";
export default {
  components: { entity, Notice, EntityAddress, Objections },
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
    annualWage: function () {
      if (this.form.casual) {
        if (this.form.averageWeeklyHours > 0 && this.form.employeeWage > 0) {
          return this.form.averageWeeklyHours * this.form.employeeWage * 52;
        }
      } else {
        if (this.form.employeeWeeklyWageFrequency === "Hourly") {
          if (this.form.averageWeeklyHours > 0 && this.form.employeeWage > 0) {
            return this.form.averageWeeklyHours * this.form.employeeWage * 52;
          }
        } else if (this.form.employeeWeeklyWageFrequency === "Weekly") {
          return this.form.employeeWage * 52;
        } else if (this.form.employeeWeeklyWageFrequency === "Fortnightly") {
          return this.form.employeeWage * 26;
        } else if (this.form.employeeWeeklyWageFrequency === "Monthly") {
          return this.form.employeeWage * 12;
        } else if (this.form.employeeWeeklyWageFrequency === "Yearly") {
          return this.form.employeeWage;
        }
      }
      return 0;
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
