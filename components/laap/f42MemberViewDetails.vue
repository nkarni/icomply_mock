<template>
  <div>
    <b-form>
      <section class=" mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Your details</h6>
            <p>
              The following details were provided by the union administrator.
            </p>
            <p>
              Please check that they are accurate and correct if required, they must match your name on your driver license or on an official ID document.
            </p>
            <p>
              Throughout this form - all fields are mandatory unless
              specifically marked as optional.
            </p>
          </b-col>
          <b-col>
           
<entity
              :entity="form.committeeMember"
              showFirstName
              showLastName
              showEmail
:firstNameLabel="'Legal first name'"
:lastNameLabel="'Surname'"
              
            >
            </entity>
             <b-form-group label="Office held">
              <b-form-input v-model="form.committeeMember.officeHeld"></b-form-input>
            </b-form-group>
            <b-form-group >
              <b-form-checkbox
                v-model="form.permitHolder.confirmDetails"
                :value="true"
                :unchecked-value="false"
              >
                I confirm my details are correct.
              </b-form-checkbox>
            </b-form-group>

          
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
  components: { entity, Notice, EntityAddress, },
  name: "f42MemberViewDetails",
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

  mounted() {
		this.form.committeeMember.firstName='Nina',
    this.form.committeeMember.lastName='Simone'
    this.form.committeeMember.email='nina@simone.com'
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
    onWrongBusinessNameClick() {
      if (form.businessDetailsCorrect === false) {
        this.businessDetailsWereWrong = true;
      }
    },
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
