<template>
  <div>
    <span :class="form.userRole === 'admin' ? 'active text-primary' : ''">Started</span>
    <span :class="form.userRole === 'permitHolder' ? 'active text-primary' : ''">- Awaiting Proposed Permit Holder Verification</span>
    <span>- Awaiting Committee of Management Member Verification</span>
    <span>- Ready for Submission</span>

   

  </div>
</template>

<script>

export default {

  name: "f42ProgressBar",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    court: {
      type: Object,
      default: () => ({}),
    },
    courtType: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
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
    AreYouStringReverse: function () {
      return this.form.repType === "self" ? "are you" : "is the Applicant";
    },
    additionalS: function () {
      return this.form.repType === "self" ? "" : "s";
    },
    yoursString: function () {
      return this.form.repType === "self" ? "yours" : "the Applicant/'s";
    },
    haveYouString: function () {
      return this.form.repType === "self" ? "have you" : "has the Applicant";
    },
  },
  methods: {
    addVictim() {
      this.court.victims.push({ firstName: "", lastName: "" });
    },
    removeVictim(i) {
      this.court.victims.splice(i);
    },
    addPersonCharged() {
      this.court.othersCharged.push({ firstName: "", lastName: "" });
    },
    removePersonCharged(i) {
      this.court.othersCharged.splice(i,1);
    },
  },
};
</script>

<style lang="scss" scoped >
.victims {
  border-left: 4px solid var(--primaryLighter) !important;
}

span {
  margin-right: 6px;
  font-size: 1rem;

 
}
 .active {
    font-weight: 700 !important;
    font-size: 1rem;
  }
</style>