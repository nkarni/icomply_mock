<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Your business</h6>
          </b-col>
          <b-col>
            <b-form-group
              :label="'How many employees did your business have when the employee was dismissed?'"
            >
              <b-form-radio-group
                stacked
                v-model="form.businessDetails.numberOfEmployeesIsUnder"
                :options="numberOfEmployeesOptionsUnder"
              ></b-form-radio-group>
            </b-form-group>

            <notice
              message="Count all full-time, part-time and casual employees. Include the employee who was dismissed. <br><br>
If the employee wasn’t dismissed, count the employees you had on 12/12/22 (the date the employee said they were dismissed)."
            ></notice>
          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>The employee's employment</h6>
          </b-col>
          <b-col>
            <b-form-group label="What was their weekly wage (gross)?">
              <b-form-input v-model="form.employeeWeeklyWage"></b-form-input>
            </b-form-group>
            <notice
              class="mb-4"
              message="If they were casual, write the hourly rate and describe their average weekly hours. "
            ></notice>

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
            ></notice>



          </b-col>
        </b-row>
      </section>
    </b-form>
  </div>
</template>

<script>
import entity from "./entity.vue";
import EntityAddress from "./entityAddress.vue";
import Notice from "./notice.vue";
export default {
  components: { entity, Notice, EntityAddress },
  name: "f3circumstances",
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
      numberOfEmployeesOptionsUnder: [
        {
          text: "1 to 4 employees ",
          value: "4",
        },
        {
          text: "5 to 9  employees ",
          value: "10",
        },
        {
          text: "10 to 14  employees ",
          value: "15",
        },
        {
          text: "15 to 19 employees ",
          value: "20",
        },
        {
          text: "20 to 49 employees",
          value: "50",
        },
        {
          text: "50 to 99 employees",
          value: "100",
        },
        {
          text: "100 to 199 employees",
          value: "200",
        },
        {
          text: "200 to 999 employees",
          value: "1000",
        },
        {
          text: "over 1000 employees",
          value: "999999999",
        },
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
