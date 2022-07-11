<template>
  <div>
     <review-item :label="'Name:'"
              :value="form.committeeMember.firstName + ' ' + form.committeeMember.lastName"></review-item>
    
     <review-item :label="'Email:'"
              :value="form.committeeMember.email"></review-item>

      <review-item :label="'Phone(s):'"
              :value="phoneToString(form.committeeMember.phones)"></review-item>

               <review-item :label="'Office held:'"
              :value="form.committeeMember.officeHeld"></review-item>

    
  </div>
</template>

<script>
import entity from "../../common/entity.vue";
import EntityAddress from "../../common/entityAddress.vue";
import Notice from "../../common/notice.vue";
import reviewItem from "../../common/reviewItem.vue";
export default {
  components: { entity, Notice, EntityAddress, reviewItem },
  name: "f42MemberDetailsReview",
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
      var str = "";
     
      if (phones.length > 0) {
        phones.forEach((phone, i) => {
          if (phone.number !== "") {
            if(i > 0){
              str += "<br>"
            }
            str += phone.number + " (" + phone.type + ")";
          }
        });
       
      }

      return str;
    },
  }
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
