<template>
  <div>
    <b-row v-if="fulWidthLabel" class="mb-4">
      <b-col cols="12">
        <div class="mb-2" v-html="label"></div>
        <div class="font-italic" v-html="value"></div>
      </b-col>
    </b-row>
    <b-row v-else :class="rowClass">
      <b-col cols="4">
        <label>{{ label }}</label>
      </b-col>
      <b-col cols="8" v-html="value"> </b-col>
    </b-row>
    <b-row v-if="mismatchDetected && doComparison" style="margin-top: -15px;margin-bottom: 15px; margin-left: 161px;">
      <b-col style="font-size:12px;color:#808080fc">
        {{misMatchMessage}}: <span  v-html="compareTo"></span>
      </b-col>
    </b-row>
      <!-- <div :class="borderClass + ' notice p-2'" v-html="message"></div> -->

<div class="mb-4 notice  p-2"  v-if="mismatchDetected && 1===3">
<b-row>
  <b-col class="redtext">
    {{misMatchMessage}}
  </b-col>
</b-row>
<b-row class="redtext"  >
    <b-col cols="4">
        <label>{{ label }}</label>
      </b-col>
      <b-col >
        <div  v-html="compareTo"></div>
       
        <!-- <Notice borderClass="red" :message="misMatchMessage + '<br>' + label + (compareTo.length > 30 ? '<br>': ' ') + compareTo"> </Notice> -->
      </b-col>
    </b-row>
</div>
    
  </div>
</template>

<script>
import Notice from "../laap/notice.vue";

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
      default: () => "",
    },
    value: {
      type: String,
      default: () => "",
    },
    rowClass: {
      type: String,
      default: () => "mb-2",
    },
    fulWidthLabel: {
      type: Boolean,
      default: () => false,
    },
    compareTo: {
      type: String,
      default: () => "",
    },
    misMatchMessage: {
      type: String,
      default: () => "You entered",
    },
    doComparison: {
      type: Boolean,
      default: true
    }
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
    mismatchDetected() {
      if (this.compareTo !== "") {
        if (this.value !== this.compareTo) {
          return true;
        }
      }
      return null;
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
  components: { Notice },
};
</script>

<style lang="scss" scoped >
.notice{
  background: var(--grey-100) !important;
  color: var(--primaryDark) !important;
  border-left: 4px red solid;
}
.redtext{
  color: red;
}
</style>