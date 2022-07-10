<template>
  <div>
    <!-- <notice
      class="mb-3"
      :message="'Legal name must match drivers license or name on an official ID document.'"
    ></notice> -->

    <entity
      :entity="form.permitHolder"
      showFirstName
      showLastName
      showEmail
      :showMiddleName="true"
      :firstNameLabel="'Legal first name'"
      :lastNameLabel="'Legal surname'"
      :middleNameLabel="'Middle name'"
      :showPreferredName="true"
      showOtherNames
      showPhones
      :emailDesc="emailDesc"
  
      :haveMiddleNameLabel="DoYouString + ' have a middle name?'"
      :havePreferredNameLabel="DoYouString + ' have a preferred name?'"
      :haveOtherNamesLabel="HaveYouString + ' known by any other names?'"
      
    >
    </entity>
    <notice class="mb-4" :message="'If you give us a mobile number for the proposed permit holder, we may send them reminders by SMS'" ></notice>

      <b-form-group v-if="!firstPerson" label="Does the proposed permit holder hold a Digital iD™ matching their full legal as provided on this form?">
      <b-form-radio-group :options="boolOptions" v-model="form.permitHolder.hasDigitalId">
      </b-form-radio-group>
    </b-form-group>
    <b-form-group v-if="firstPerson" label="Do you hold a Digital iD™ matching your full legal name as provided on this form?">
      <b-form-radio-group :options="boolOptions" v-model="form.permitHolder.hasDigitalId">
      </b-form-radio-group>
    </b-form-group>
     <notice
     v-if="form.permitHolder.hasDigitalId === false && !firstPerson"
      class="mb-3"
      :message="'Please contact FWC.'"
    ></notice>
 <notice
     v-if="form.permitHolder.hasDigitalId === false && firstPerson"
      class="mb-3"
      :message="'You will require a Digital iD™ that matches your full legal name provided above before this application can be lodged'"
    ></notice>

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
    <notice
      v-if="form.permitHolder.previouslyHeldAnEntryPermit === true"
      class="mt-2 mb-2"
      :message="'If a permit is returned more than 7 days after expiry or cannot be returned because it is lost, the proposed permit holder may be asked to provide a statutory declaration explaining the failure to comply with s.517 of the Fair Work Act 2009.'"
    ></notice>

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
      <b-form-textarea
        v-model="form.permitHolder.previousPermitNotReturnedReason"
      >
      </b-form-textarea>
    </b-form-group>

    <b-form-group
      label="Please provide a statutory Declaration (optional)"
      v-if="form.permitHolder.previousPermitReturned === false"
    >
      <b-form-file></b-form-file>
    </b-form-group>
    <b-form-group
      label="Has that permit been returned on time?"
      v-if="form.permitHolder.previousPermitReturned === true"
    >
      <b-form-radio-group
        v-model="form.permitHolder.previousPermitReturnedOnTime"
        :options="boolOptions"
      ></b-form-radio-group>
    </b-form-group>
    <b-form-group
      label="Please provide a statutory Declaration (optional)"
      v-if="form.permitHolder.previousPermitReturned === true && form.permitHolder.previousPermitReturnedOnTime === false"
    >
      <b-form-file></b-form-file>
    </b-form-group>
  </div>
</template>

<script>
import entity from "../../common/entity.vue";
import EntityAddress from "../../common/entityAddress.vue";
import Notice from "../../common/notice.vue";
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
    firstPerson: function () {
      return (
        this.form.userRole === "permitHolder" ||
        (this.form.userRole === "admin" && this.form.permitHolder.isSameAsAdmin)
      );
    },

    employeeOrOfficeHolderLabel: function () {
      if (this.firstPerson) {
        return "What is your role in ths organisation?";
      } else {
        return "The proposed permit holder is:";
      }
    },
    positionOrOfficeHeldLabel: function () {
      if (this.firstPerson) {
        return "What is your office or position?";
      } else {
        return "What is their office or position?";
      }
    },
    previouslyHeldAnEntryPermitLabel: function () {
      if (this.firstPerson) {
        return "Have you previously held an entry permit?";
      } else {
        return "Has this person previously held an entry permit?";
      }
    },
    previousPermitNumberLabel: function () {
      if (this.firstPerson) {
        return "What is your most recent or current permit number?";
      } else {
        return "What is their most recent or current permit number?";
      }
    },
    emailDesc: function () {
      if (this.firstPerson) {
        return "";
      } else {
        return "The email address will be used to notify the Proposed Permit holder";
      }
    },

    youString: function () {
      return this.firstPerson ? "you" : "they";
    },
    yourString: function () {
      return this.firstPerson ? "your" : "their";
    },
    AreYouString: function () {
      return this.firstPerson ? "are you" : "are they";
    },
    DoYouString: function () {
      return this.firstPerson ? "do you" : "do they";
    },

    youAreString: function () {
      return this.firstPerson ? "you are" : "they are";
    },
    wereYouString: function () {
      return this.firstPerson ? "were you" : "were they";
    },

    HaveYouString: function () {
      return this.form.userRole === "permitHolder"
        ? "have you been"
        : "have they been";
    },
  },
  methods: {
    onWrongBusinessNameClick() {
      if (form.businessDetailsCorrect === false) {
        this.businessDetailsWereWrong = true;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
