<template>
  <div>
    <b-form>
      <section
        class=" mb-4 pb-4"
      >
        <b-row>
          <b-col cols="4">
            <h6>The Business</h6>
            <p>
             Count all full-time and part-time employees, including the Applicant. Only count casuals if they were regular casual employees  </p>
             <p>You can find more information on our <a href="https://www.fwc.gov.au/what-minimum-period-employment" target="_blank">website</a>.</p>
           
          </b-col>
          <b-col>
           
            <b-form-group
              :label="'Industry'"
            >
              <b-form-select
                v-model="form.businessDetails.industry"
                :options="['LOV from cHQ', 'Industry A', 'Industry B', 'Other']"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              v-if="
                form.businessDetails.industry === 'Other'
              "
              label="Please provide details"
            >
              <b-form-textarea
                v-model="form.businessDetails.industryDetails"
              ></b-form-textarea>
            </b-form-group>
            <b-form-group
              :label="'How many employees did your business have when the employee was dismissed?'"
            >
              <b-form-select
                stacked
                v-model="form.businessDetails.numberOfEmployeesIsUnder"
                :options="numberOfEmployeesOptionsUnder"
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
      </section>
    </b-form>
  </div>
</template>

<script>
import AbnLookup from "../common/abnLookup.vue";
import entity from "../common/entity.vue";
import EntityAddress from "../common/entityAddress.vue";
import Notice from "../common/notice.vue";
export default {
  components: { entity, Notice, EntityAddress, AbnLookup },
  name: "f3BusinessDetails",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      numberOfEmployeesOptionsUnder: [
        {
          text: "1 to 4 ",
          value: "4",
        },
        {
          text: "5 to 9 ",
          value: "10",
        },
        {
          text: "10 to 14 ",
          value: "15",
        },
        {
          text: "15 to 19 ",
          value: "20",
        },
        {
          text: "20 to 49",
          value: "50",
        },
        {
          text: "50 to 99",
          value: "100",
        },
        {
          text: "100 to 199",
          value: "200",
        },
        {
          text: "200 to 999",
          value: "1000",
        },
        {
          text: "over 1000",
          value: "999999999",
        },
      ],
      businessDetailsWereWrong: false,
      showIsBusinessDetailsCorrect: true,
      repTypeOptions: [
        { text: "I am the Applicant (submitting for myself)", value: "self" },
        { text: "I am the Applicant's solicitor", value: "solicitor" },
        {
          text: "I am submitting this form on behalf of the Applicant",
          value: "other",
        },
      ],
      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
      aboriginalityOptions: [
        { text: "Yes, Aboriginal", value: "aboriginal" },
        { text: "Yes, Torres Strait Islander", value: "islander" },
        { text: "Both Aboriginal and Torres Strait Islander", value: "both" },
        { text: "No", value: "no" },
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
  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
