<template>
  <div>
    <notice
      class="mb-3"
      :message="'Legal name must match drivers license or name on an official ID document.'"
    ></notice>
    <entity
      :entity="form.permitHolder"
      showFirstName
      showLastName
      showEmail
      :showMiddleName="true"
              :firstNameLabel="'Legal first name'"
              :lastNameLabel="'Legal surname'"
              :middleNameLabel="'Middle name (optional)'"
              :showPreferredName="true"
      showMobilePhone
      :emailDesc="emailDesc"
      :mobilePhoneDesc="'The mobile number may be used for notifications'"
      :mobilePhoneLabel="'Mobile phone (optional)'"
    >
    </entity>

    <b-form-group :label="employeeOrOfficeHolderLabel">
      <b-form-radio-group
        stacked
        v-model="form.permitHolder.employeeOrOfficeHolder"
        :options="['An Office Holder', 'An Employee']"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group :label="positionOrOfficeHeldLabel">
      <b-form-input v-model="form.permitHolder.positionOrOfficeHeld">
      </b-form-input>
    </b-form-group>

    <b-form-group :label="previouslyHeldAnEntryPermitLabel">
      <b-form-radio-group
        v-model="form.permitHolder.previouslyHeldAnEntryPermit"
        :options="boolOptions"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      :label="previousPermitNumberLabel"
      v-if="form.permitHolder.previouslyHeldAnEntryPermit === true"
    >
      <b-form-input v-model="form.permitHolder.previousPermitNumber">
      </b-form-input>
    </b-form-group>
                <notice v-if="form.permitHolder.previouslyHeldAnEntryPermit === true" class="mt-2 mb-2" :message="'If a permit is returned more than 7 days after expiry or cannot be returned because it is lost, the proposed permit holder may be asked to provide a statutory declaration explaining the failure to comply with s.517 of the Fair Work Act 2009.'"></notice>


    <b-form-group
      label="Has that permit been returned?"
      v-if="form.permitHolder.previouslyHeldAnEntryPermit === true"
    >
      <b-form-radio-group
        v-model="form.permitHolder.previousPermitReturned"
        :options="boolOptions"
      ></b-form-radio-group>
    </b-form-group>

     <b-form-group
      label="Why has it not been returned?"
      v-if="form.permitHolder.previousPermitReturned === false"
    >
      <b-form-input v-model="form.permitHolder.previousPermitNotReturnedReason">
      </b-form-input>
    </b-form-group>
  </div>
</template>

<script>
import entity from "../entity.vue";
import EntityAddress from "../entityAddress.vue";
import Notice from "../notice.vue";
export default {
  components: { entity, Notice, EntityAddress },
  name: "f42HolderDetailsComp",
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
  computed: {
    
    employeeOrOfficeHolderLabel: function () {
      if (this.form.userRole === "permitHolder") {
        return "What is your role in ths organisation?";
      } else {
        return "The Proposed Permit Holder is:";
      }
    },
    positionOrOfficeHeldLabel: function () {
      if (this.form.userRole === "permitHolder") {
        return "What is your office or position?";
      } else {
        return "What is their office or position?";
      }
    },
    previouslyHeldAnEntryPermitLabel: function () {
      if (this.form.userRole === "permitHolder") {
        return "Have you previously held an entry permit?";
      } else {
        return "Has this person previously held an entry permit?";
      }
    },
    previousPermitNumberLabel: function () {
      if (this.form.userRole === "permitHolder") {
        return "What is your most recent or current permit number?";
      } else {
        return "What is their most recent or current permit number?";
      }
    },
    emailDesc: function () {
      if (this.form.userRole === "permitHolder") {
        return "";
      } else {
        return "The email address will be used to notify the Proposed Permit holder";
      }
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
