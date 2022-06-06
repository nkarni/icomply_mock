<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Type of work and dates</h6>
            <p>Click here to read about the difference between employees and independent contractors on our website (link: TBC)</p>
          </b-col>
          <b-col>
            <b-form-group label="Was the Applicant:">
              <b-form-radio-group stacked v-model="form.engagementType" :options="engagementTypeOptions">
              </b-form-radio-group>
            </b-form-group>
                <b-form-group
              v-if="form.engagementType === 'Other'"
              label="Please provide details:"
            >
              <b-form-input
                v-model="form.engagementTypeDetails"
              ></b-form-input>
            </b-form-group>
            <notice v-if="form.engagementType && form.engagementType !== 'An employee'" message="The Fair Work Act only protects employees from unfair dismissal.  <br>You can object to the claim if the Applicant was not an employee.  <br>Include this information later under ‘Jurisdictional objections’ at the ‘Other details’ tab." class=" my-4" borderClass="red"></notice>
          
            <b-form-group :label="startDateLabel">
              <b-form-datepicker v-model="form.employmentStartDate" class="mb-2"></b-form-datepicker>
            </b-form-group>
            <notice class="mb-3"
              :message="'If you are not sure how to answer this enter the last day they attended work'"></notice>

            <b-form-group :label="employmentEndlabel">
              <b-form-datepicker v-model="form.employmentEndDate" class="mb-2"></b-form-datepicker>
            </b-form-group>

            <notice
              :message="'Dev note: <br>1. Validate that dismissal date is on or after employment start date <br>2. notification date must be on or after contract start date <br>3. validate that dates in the past for dismissal, employment start or employment notification'">
            </notice>
          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>What happened?</h6>
            <p>
              Read what your former employee wrote in their application form.
              <br /><br />Write a response to what they’ve written.
              <br /><br />Attach a copy of the dismissal letter if there was
              one.
            </p>
          </b-col>
          <b-col>
            <label>The employee wrote the following:</label>
            <div style="
                font-style: italic;
                border-left: 2px solid gray;
                padding-left: 8px;
              " class="ml-2 mb-4">
              {{ form.employeeDescOfWhatHappened }}
            </div>
            <notice class="mb-3" message="Your former employee will see the answers you give in this form. This is so they can understand your side of the case. 
<br>If you are worried about particular information being passed on, don’t include it yet. Submit your completed form without it and then contact us to discuss whether you should send the information to us.
"></notice>

            <b-form-group label="Write a response to what they’ve written">
              <b-form-textarea v-model="form.employerDescOfWhatHappened" rows="12" max-rows="18"></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Dismissal information</h6>
          </b-col>
          <b-col>
            <b-form-group :label="wereTheyDismissedLabel">
              <b-form-radio-group stacked v-model="form.wasDismissed" :options="boolOptions"></b-form-radio-group>
            </b-form-group>

            <b-form-group :label="'What date were they told they were being dismissed?'"
              v-if="form.wasDismissed === true">
              <b-form-datepicker v-model="form.employmentDismissedDate" class="mb-2"></b-form-datepicker>
            </b-form-group>
            <div v-if="
              form.businessDetails.numberOfEmployeesIsUnder < 15 &&
              form.wasDismissed === true
            ">
              <b-form-group
                label="Did you follow the Small Business Fair Dismissal Code when you dismissed the employee?"
                v-if="form.independentContractor !== true">
                <b-form-radio-group stacked v-model="form.followedCode" :options="boolOptions"></b-form-radio-group>
              </b-form-group>
              <b-form-group v-if="form.followedCode === 'Yes'"
                label="If you completed the Small Business Fair Dismissal checklist attach a copy">
                <b-form-file placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here...">
                </b-form-file>
              </b-form-group>
            </div>
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
  name: "dismissal",
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
        'An employee',
        'An independent contractor',
        'A volunteer',
        'Other'
      ]
    };
  },
  computed: {
    employmentEndlabel: function () {
      // if (this.form.independentContractor === true) {
      //   return "What date did their contract end?";
      // }
      return "What date did the Applicant stop working for the business?";
    },
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
    startDateLabel() {
      // if (this.form.independentContractor !== true) {
        return "What date did the Applicant start working for the business?";
      // } else {
      //   return "What date did their contract start?";
      // }
    },
    wereTheyDismissedLabel() {
      if (this.form.independentContractor === true) {
        return "when were they told that their contract was ending?";
      }
      return "Were they dismissed?";
    },
  },
  methods: {
    onSelectedNewAbn() {
      this.form.businessDetailsCorrect = true;
      this.$bvModal.hide("manual-abn");
    },
    onNumDepnedantsChange() {
      if (this.form.entities.applicant.details.numOfDependants < 0) return;
      if (
        this.form.entities.applicant.details.numOfDependants <
        this.form.entities.applicant.details.dependants.length
      ) {
        while (
          this.form.entities.applicant.details.numOfDependants <
          this.form.entities.applicant.details.dependants.length
        ) {
          this.form.entities.applicant.details.dependants.pop();
        }
      } else if (
        this.form.entities.applicant.details.numOfDependants >
        this.form.entities.applicant.details.dependants.length
      ) {
        while (
          this.form.entities.applicant.details.numOfDependants >
          this.form.entities.applicant.details.dependants.length
        ) {
          this.form.entities.applicant.details.dependants.push({
            firstName: "",
            lastName: "",
            dob: "",
            relationship: "",
            stayOvernight: null,
            involvedInLegalIssue: null,
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
