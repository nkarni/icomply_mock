<template>
    <div>
      <div
        v-for="(training, index) of form.permitHolder.trainings"
        :key="index"
        v-bind:id="index"
        class="mb-4"
      >
        <strong v-if="form.permitHolder.trainings.length > 1">Training {{index + 1}}:</strong>
        <review-item :rowClass="'mb-0'" :label="'Name:'" :value="training.trainingName"></review-item>
        <review-item :rowClass="'mb-0'" :label="'Method:'" :value="training.trainingMethod"></review-item>
        <review-item :rowClass="'mb-0'" :label="'Completed on:'" :value="training.trainingCompletionDate"></review-item>
        <review-item :rowClass="'mb-0'" :label="'Evidence:'" value="<a >Click Here</a>"></review-item>
  
      </div>
  
      <div v-if="mismatchDetected"  class="mb-4 notice  p-2">
        <div
            v-for="(training, index) of form.permitHolder.trainings"
            :key="index"
            v-bind:id="index"
            class="mb-4 redtext"
          >
            <strong v-if="form.admin.permitHolderDataEnteredByAdmin.trainings.length > 1">Training {{index + 1}}:</strong>
            <review-item :rowClass="'mb-0'" :label="'Name:'" :value="training.trainingName"></review-item>
            <review-item :rowClass="'mb-0'" :label="'Method:'" :value="training.trainingMethod"></review-item>
            <review-item :rowClass="'mb-0'" :label="'Completed on:'" :value="training.trainingCompletionDate"></review-item>
            <review-item :rowClass="'mb-0'" :label="'Evidence:'" value="<a >Click Here</a>"></review-item>
  
          </div>
      
      </div>
  
    </div>
  
  </template>
  
  <script>
  import entity from "../../common/entity.vue";
  import EntityAddress from "../../common/entityAddress.vue";
  import Notice from "../../common/notice.vue";
  import reviewItem from "../../common/reviewItem.vue";
  export default {
    components: { entity, Notice, EntityAddress, reviewItem },
    name: "pphTraining",
    props: {
      form: {
        type: Object,
        default: () => ({}),
      },
      compareToAdminEntered: {
        type: Boolean,
        default: () => (false),
      },
      misMatchMessage: {
        type: String,
        default: () => "You have entered: ",
      },
    },
    data() {
      return {
        businessDetailsWereWrong: false,
        showIsBusinessDetailsCorrect: true,
  
        boolOptions: [
          { text: "Yes", value: true },
          { text: "No", value: false },
        ],
      };
    },
    computed: {
       mismatchDetected() {
        // CURRENTLY WE DO NOT ALLOW PPH TO EDIT THEIR TRAINING, ONLY ADMIN
        if (this.compareToAdminEntered ) {
          if (this.form.permitHolder.trainings !== this.form.admin.permitHolderDataEnteredByAdmin.trainings) {
            return true;
          }
        }
        return null;
      },
  
      employeeOrOfficeHolderLabel: function () {
        if (this.form.userRole === "permitHolder") {
          return "What is your role in ths organisation?";
        } else {
          return "The proposed permit holder is:";
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
      phoneToString(phones) {
        let str = "";
  
        if (phones.length > 0) {
          phones.forEach((phone, i) => {
            if (phone.number !== "") {
              if (i > 0) {
                str += "<br>";
              }
              str += phone.number + " (" + phone.type + ")";
            }
          });
        }
  
        return str;
      },
      namesToString(names) {
        let str = "";
        if (names.length > 0) {
          names.forEach((name, i) => {
            if (i > 0) {
              str += "<br>";
            }
            str += name.firstName + " " + name.lastName;
          });
        }
  
        return str;
      },
      boolToString(val) {
        if (val === true) {
          return "Yes";
        }
        return "No";
      },
      prevPermitToString() {
        if (this.form.permitHolder.previouslyHeldAnEntryPermit === false) {
          return "No previous permit";
        } else {
          let str = "Permit no. " + this.form.permitHolder.previousPermitNumber;
          if (this.form.permitHolder.previousPermitReturned === true) {
            if (this.form.permitHolder.previousPermitReturnedOnTime === true) {
              str += "<br>The permit was returned on time";
            } else {
              str += "<br>The permit was returned late";
              if (this.form.permitHolder.previousPermitStatDecFile !== "") {
                str += "<br>(statutory declaration attached)";
              }
            }
          } else {
            str +=
              "<br>The permit was not returned for the reason: " +
              this.form.permitHolder.previousPermitNotReturnedReason;
          }
          return str;
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  h6::first-letter {
    text-transform: uppercase;
  }
  .notice{
    background: var(--grey-100) !important;
    color: var(--primaryDark) !important;
    border-left: 4px red solid;
  }
  .redtext{
    color: red;
  }
  </style>
  