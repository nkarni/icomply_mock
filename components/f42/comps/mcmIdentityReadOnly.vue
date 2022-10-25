<template>
  <div>
    <review-item
      :label="'Name:'"
      :value="
        form.committeeMember.firstName + ' ' + form.committeeMember.lastName
      "
      :doComparison="doComparison"
      :compareTo="
        form.admin.committeeMemberDataEnteredByAdmin.firstName +
        ' ' +
        form.admin.committeeMemberDataEnteredByAdmin.lastName
      "
    ></review-item>

    <review-item
      :label="'Email:'"
      :value="form.committeeMember.email"
      :doComparison="doComparison"
      :compareTo="form.admin.committeeMemberDataEnteredByAdmin.email"
    ></review-item>

    <review-item
      :label="'Phone(s):'"
      :value="phoneToString(form.committeeMember.phones)"
      :doComparison="doComparison"
      :compareTo="
        phoneToString(form.admin.committeeMemberDataEnteredByAdmin.phones)
      "
    ></review-item>

    <review-item
      :label="'Office/Position:'"
      :value="form.committeeMember.officeHeld"
      :doComparison="doComparison"
      :compareTo="
        form.admin.committeeMemberDataEnteredByAdmin.positionOrOfficeHeld
      "
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
  name: "mcmIdentityReadOnly",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    doComparison: {
      type: Boolean,
      default: true,
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
      if (this.form.userRole === "committeeMember") {
        return "What is your role in ths organisation?";
      } else {
        return "The proposed permit holder is:";
      }
    },
    positionOrOfficeHeldLabel: function () {
      if (this.form.userRole === "committeeMember") {
        return "What is your office or position?";
      } else {
        return "What is their office or position?";
      }
    },
    previouslyHeldAnEntryPermitLabel: function () {
      if (this.form.userRole === "committeeMember") {
        return "Have you previously held an entry permit?";
      } else {
        return "Has this person previously held an entry permit?";
      }
    },
    previousPermitNumberLabel: function () {
      if (this.form.userRole === "committeeMember") {
        return "What is your most recent or current permit number?";
      } else {
        return "What is their most recent or current permit number?";
      }
    },
    emailDesc: function () {
      if (this.form.userRole === "committeeMember") {
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
    phoneToString(phones) {
      let str = "";

      if (phones && phones.length > 0) {
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
      if (this.form.committeeMember.previouslyHeldAnEntryPermit === false) {
        return "No previous permit";
      } else {
        let str =
          "Permit no. " + this.form.committeeMember.previousPermitNumber;
        if (this.form.committeeMember.previousPermitReturned === true) {
          if (this.form.committeeMember.previousPermitReturnedOnTime === true) {
            str += "<br>The permit was returned on time";
          } else {
            str += "<br>The permit was returned late";
            if (this.form.committeeMember.previousPermitStatDecFile !== "") {
              str += "<br>(statutory declaration attached)";
            }
          }
        } else {
          str +=
            "<br>The permit was not returned for the reason: " +
            this.form.committeeMember.previousPermitNotReturnedReason;
        }
        return str;
      }
    },
    prevPermitToStringAdminEntered() {
      if (
        this.form.admin.committeeMemberDataEnteredByAdmin
          .previouslyHeldAnEntryPermit === false
      ) {
        return "No previous permit";
      } else {
        let str =
          "Permit no. " +
          this.form.admin.committeeMemberDataEnteredByAdmin
            .previousPermitNumber;
        if (
          this.form.admin.committeeMemberDataEnteredByAdmin
            .previousPermitReturned === true
        ) {
          if (
            this.form.admin.committeeMemberDataEnteredByAdmin
              .previousPermitReturnedOnTime === true
          ) {
            str += "<br>The permit was returned on time";
          } else {
            str += "<br>The permit was returned late";
            if (
              this.form.admin.committeeMemberDataEnteredByAdmin
                .previousPermitStatDecFile !== ""
            ) {
              str += "<br>(statutory declaration attached)";
            }
          }
        } else {
          str +=
            "<br>The permit was not returned for the reason: " +
            this.form.admin.committeeMemberDataEnteredByAdmin
              .previousPermitNotReturnedReason;
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
  