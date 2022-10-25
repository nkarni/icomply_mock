<template>
  <div>
  
  <b-row v-if="!readOnly">
    <b-col cols="4" v-if="indented">
      <h6>&nbsp;</h6>
    </b-col>
    <b-col>
      <b-row>
        <b-col :cols="indented ? 9 : 6">
          <b-form-group label="Signature (type your name)">
            <b-form-input v-model="signature.name"> </b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group>
            Date: {{ this.$moment().format("D/M/YYYY") }}
          </b-form-group>
        </b-col>
      </b-row>
    </b-col>
  </b-row>

  <b-row v-if="readOnly">
    <b-col cols="4" v-if="indented">
      <h6>&nbsp;</h6>
    </b-col>
    <b-col>
      <b-row>
        
        <b-col cols="12">
          Signed by signedName on signatureDate
        </b-col>
      </b-row>
    </b-col>
  </b-row>
    
</div>
</template>

<script>
export default {
  name: "f42Signature",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    signature: {
      type: Object,
      default: () => ({}),
    },
    indented: {
      type: Boolean,
      default: true,
    },
    readOnly: {
      type: Boolean,
      default: false,
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
  methods: {},
};
</script>

<style lang="scss" scoped >
</style>