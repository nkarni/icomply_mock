<template>
 <div>
  <b-row v-if="fulWidthLabel" class="mb-4">
    <b-col cols="12">
      <div class="mb-2" v-html="label"></div>

<div class="font-italic" v-html="value"></div>
     
    </b-col>
   
  </b-row>
    <b-row
    v-else
      :class="rowClass"
    >
      <b-col cols="4">
        <label>{{ label }}</label>
      </b-col>
      <b-col cols="8" v-html="value"> </b-col>
    </b-row>
  </div>
</template>

<script>

export default {

  name: "reviewItem",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    item: {
      type: Object,
      default: () => ({}),
    },
     label: {
      type: String,
      default: () => (''),
    },
     value: {
      type: String,
      default: () => (''),
    },
     rowClass: {
      type: String,
      default: () => ('mb-2'),
    },
     fulWidthLabel: {
      type: Boolean,
      default: () => (false),
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
      this.court.othersCharged.splice(i, 1);
    },
  },
};
</script>

<style lang="scss" scoped >
</style>