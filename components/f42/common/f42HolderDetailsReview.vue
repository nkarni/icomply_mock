<template>
  <div>
    <notice
      class="mb-3"
      :message="'Legal name must match drivers license or name on an official ID document.'"
    ></notice>

    <review-item
      v-if="form.permitHolder.hasMiddleName === false"
      :label="'Name:'"
      :value="form.permitHolder.firstName + ' ' + form.permitHolder.lastName"
      :compareTo="form.admin.permitHolderDataEnteredByAdmin.firstName + ' ' + form.admin.permitHolderDataEnteredByAdmin.lastName"
    ></review-item>

    <review-item
      v-else
      :label="'Name:'"
      :value="
        form.permitHolder.firstName +
        ' ' +
        form.permitHolder.middleName +
        ' ' +
        form.permitHolder.lastName
      "
      :compareTo="form.admin.permitHolderDataEnteredByAdmin.firstName +
        ' ' +
        form.admin.permitHolderDataEnteredByAdmin.middleName +
        ' ' +
        form.admin.permitHolderDataEnteredByAdmin.lastName"
    ></review-item>

    <review-item
      v-if="form.permitHolder.hasPreferredName === true"
      :label="'Preferred name:'"
      :value="form.permitHolder.preferredName"
      :compareTo="form.admin.permitHolderDataEnteredByAdmin.preferredName"
    ></review-item>

    <review-item
      v-if="form.permitHolder.hasOtherNames === true"
      :label="'Other names:'"
      :value="namesToString(form.permitHolder.otherNames)"
      :compareTo="namesToString(form.admin.permitHolderDataEnteredByAdmin.otherNames)"
    ></review-item>

    <review-item
      :label="'Email:'"
      :value="form.permitHolder.email"
      :compareTo="form.admin.permitHolderDataEnteredByAdmin.email"
    ></review-item>

    <review-item
      :label="'Phone(s):'"
      :value="phoneToString(form.permitHolder.phones)"
      :compareTo="phoneToString(form.admin.permitHolderDataEnteredByAdmin.phones)"
    ></review-item>

    <review-item
      :label="'Holds a matching Digital iD™?'"
      :value="boolToString(form.permitHolder.hasDigitalId)"
      :compareTo="boolToString(form.admin.permitHolderDataEnteredByAdmin.hasDigitalId)"
    ></review-item>

    <review-item
      v-if="form.permitHolder.employeeOrOfficeHolder === 'An Office Holder'"
      :label="'Office/Position:'"
      :value="
        'An office holder holding the office: ' +
        form.permitHolder.positionOrOfficeHeld
      "
       :compareTo="'An office holder holding the office: ' +
        form.admin.permitHolderDataEnteredByAdmin.positionOrOfficeHeld"
    ></review-item>

    <review-item
      v-else
      :label="'Office/Position:'"
      :value="
        'An employee holding the position: ' +
        form.permitHolder.positionOrOfficeHeld
      "
      :compareTo="
        'An employee holding the position: ' +
        form.admin.permitHolderDataEnteredByAdmin.positionOrOfficeHeld
      "
    ></review-item>

    <review-item
      :label="'Previous permit:'"
      :value="prevPermitToStringPph()"
      :compareTo="prevPermitToStringAdminEntered()"
    ></review-item>

  </div>
</template>

<script>
import entity from "../../common/entity.vue";
import EntityAddress from "../../common/entityAddress.vue";
import Notice from "../../common/notice.vue";
import reviewItem from "../../common/reviewItem.vue";
export default {
  components: { entity, Notice, EntityAddress, reviewItem },
  name: "f42HolderDetailsReview",
  props: {
    form: {
      type: Object,
      default: () => ({}),
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
    prevPermitToStringPph() {
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
    prevPermitToStringAdminEntered() {
      if (this.form.admin.permitHolderDataEnteredByAdmin.previouslyHeldAnEntryPermit === false) {
        return "No previous permit";
      } else {
        let str = "Permit no. " + this.form.admin.permitHolderDataEnteredByAdmin.previousPermitNumber;
        if (this.form.admin.permitHolderDataEnteredByAdmin.previousPermitReturned === true) {
          if (this.form.admin.permitHolderDataEnteredByAdmin.previousPermitReturnedOnTime === true) {
            str += "<br>The permit was returned on time";
          } else {
            str += "<br>The permit was returned late";
            if (this.form.admin.permitHolderDataEnteredByAdmin.previousPermitStatDecFile !== "") {
              str += "<br>(statutory declaration attached)";
            }
          }
        } else {
          str +=
            "<br>The permit was not returned for the reason: " +
            this.form.admin.permitHolderDataEnteredByAdmin.previousPermitNotReturnedReason;
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
</style>
