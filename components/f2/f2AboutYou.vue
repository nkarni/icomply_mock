<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>{{ yourString }} age</h6>
            <p>
              {{ youString }} can still apply if {{ youAreString }} are under 18, but  {{ youString }} may need a parent or guardian present for certain parts of the process.
            </p>
          </b-col>
          <b-col>
            <b-form-group
              :label="AreYouStringReverse + ' 18 years of age or over?'"
            >
              <b-form-radio-group
                v-model="form.applicant.over18"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
            <notice
              v-if="form.applicant.over18 === false"
              message="You can still apply if you are under 18, but you may need a parent or guardian present for certain parts of the process."
            ></notice>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Interpreter service</h6>
            We might hold a conference or hearing about {{yourString}} case. We can
            arrange an interpreter for {{ youString }}. You can find information
            about help for non-English speakers on our
            <a
              target="_blank"
              href=" https://www.fwc.gov.au/about-us/contact-us/language-help-non-english-speakers"
              >website</a
            >.
          </b-col>
          <b-col>
            <b-form-group
              :label="'Will ' + youString + ' need an interpreter?'"
            >
              <b-form-radio-group
                v-model="form.needsInterpreter"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group
              v-if="form.needsInterpreter === true"
              label="What language?"
            >
              <b-form-select
                :options="['LOV from caseHq']"
                v-model="form.needsInterpreterLanguage"
              ></b-form-select>
            </b-form-group>
             <b-form-group v-if="form.needsInterpreter === true">
              <b-form-checkbox v-model="form.needsInterpreterLanguageNotFound"  :value="true"
                :unchecked-value="false">
                My langauge is not listed
              </b-form-checkbox>
           </b-form-group>
            <b-form-group label="Please provide details" v-if="form.needsInterpreterLanguageNotFound">
            <b-form-input v-model="form.needsInterpreterLanguageDetails"></b-form-input>
            </b-form-group>
          
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Accessibility</h6>

            If {{ youHaveString }} access needs, we can make arrangements so that {{ youString }} can
            participate fully in your case. You can read more about
            accessibility on our <a href="https://www.fwc.gov.au/about-us/legal-and-freedom-information/about-website/accessibility" target="_blank">website</a>.
  
           
          </b-col>
          <b-col>
            <b-form-group
              :label="DoYouStringCont + ' have any accessibility requirements?'"
            >
              <b-form-radio-group
                v-model="form.needsAccessibility"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group
              v-if="form.needsAccessibility === true"
              label="What do you need?"
            >
              <b-form-input
                v-model="form.needsAccessibilityDetails"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

    
    </b-form>
  </div>
</template>

<script>
import entity from "../common/entity.vue";
import EntityAddress from "../common/entityAddress.vue";
import Notice from "../common/notice.vue";
export default {
  components: { entity, Notice, EntityAddress },
  name: "aboutYou",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      over18Options: [
        { text: "yes, I am over 18", value: true },
        { text: "no, I am under 18", value: false },
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
    youHaveString: function () {
      return this.form.applyingForSelf ? "you have" : "the Applicant has";
    },
    youString: function () {
      return this.form.applyingForSelf ? "you" : "the Applicant";
    },
    yourString: function () {
      return this.form.applyingForSelf ? "your" : "the Applicant's";
    },
    AreYouString: function () {
      return this.form.applyingForSelf ? "are you" : "is the Applicant";
    },
    DoYouString: function () {
      return this.form.applyingForSelf ? "do you" : "is the Applicant";
    },
    DoYouStringCont: function () {
      return this.form.applyingForSelf ? "do you" : "does the Applicant";
    },
    youAreString: function () {
      return this.form.applyingForSelf ? "you are" : "the Applicant is";
    },
    wereYouString: function () {
      return this.form.applyingForSelf ? "were you" : "was the Applicant";
    },
    AreYouString: function () {
      return this.form.applyingForSelf ? "are you" : "the Applicant is";
    },
    AreYouStringReverse: function () {
      return this.form.applyingForSelf ? "are you" : "is the Applicant";
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}

</style>
