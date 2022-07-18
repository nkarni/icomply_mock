<template>
  
    <b-row>
          <b-col cols="4">
            <h6>Signature</h6>
          </b-col>
          <b-col>
            <b-row>
              <b-col cols="6">
                <b-form-group label="Name">
                  <b-form-input  v-model="signature.name">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Date">
                  <b-form-datepicker placeholder=""  v-model="signature.date">
                    </b-form-datepicker>
                  </b-form-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
  
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