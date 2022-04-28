<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Contact details</h6>
            <p>
              We need to be able to send {{youString}} information about {{yourString}} case. The
              former employer will also need to send {{youString}} information about their
              side of the case.
            </p>
            <p v-if="form.applyingForSelf === true">
              During the case, we will call you the Applicant. This is because
              you are the person making this application about your dismissal.
            </p>
          </b-col>
          <b-col>
            <entity
              showTitle
              showFirstName
              showLastName
              showPhones
              showEmail
              showPostalAddress
              :entity="form.applicant"
            >
            </entity>
            <b-form-group>
              <b-form-checkbox
                v-model="form.doesNotHaveAnAddress"
                :value="true"
                :unchecked-value="false"
              >
                Check this box if <span v-if="form.applyingForSelf === true">you don't</span><span v-else>the Applicant doesn't</span> have an address.
              </b-form-checkbox>
            </b-form-group>
            <b-form-group
              :label=" DoYouStringCont +  ' have a representative (lawyer/union rep etc)?'"
            >
              <b-form-radio-group
                v-model="form.applicant.hasRep"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

      <section
        class="border-bottom border-secondary mb-4 pb-2"
        v-if="form.applicant.hasRep === true"
      >
        <b-row>
          <b-col cols="4">
            <h6>Representative</h6>
           <p>Please provide details about this representative if you know them.</p>
          </b-col>
          <b-col>
            
            <entity
              v-if="form.applicant.hasRep === true"
              :entity="form.rep"
              showOrgName
              showPhones
              showFirstName
              showLastName
              showEmail
              showPostalAddress
              showTitle
              :orgNameLabel="'Firm or Organisation name'"
            >
            </entity>
          </b-col>
        </b-row>
      </section>

          <section
        class="border-bottom border-secondary mb-4 pb-4"
      >
        <b-row>
          <b-col cols="4">
            <h6>{{ yourString }} age</h6>
          <p>If {{ youAreString }} under 18 {{youString}} must have a guardian.</p> 
          </b-col>
          <b-col>
            <b-form-group :label="AreYouStringReverse + ' over 18?'">
              <b-form-radio-group
                v-model="form.applicant.over18"
                :options="over18Options"
              ></b-form-radio-group>
            </b-form-group>
           
          </b-col>
        </b-row>
      </section>
     
      <section
        class="border-bottom border-secondary mb-4 pb-4"
      >
        <b-row>
          <b-col cols="4">
            <h6>Interpreter service</h6>
            We might hold a conference or hearing about your case. It is
            important that you can understand what is happening during the
            proceeding. We can arrange an interpreter for you. You can find
            information about help for non-English speakers on our website.
          </b-col>
          <b-col>
            <b-form-group :label="'Will ' + youString + ' need an interpreter?'">
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
          </b-col>
        </b-row>
      </section>

      <section
        class="border-bottom border-secondary mb-4 pb-4"
      >
        <b-row>
          <b-col cols="4">
            <h6>Accessibility</h6>
            It’s important that everyone has access to our services. If you have access needs, we can make arrangements so that you can participate fully in your case. You can read more about accessibility on our website.
          </b-col>
          <b-col>
            <b-form-group :label=" DoYouStringCont + ' have any accessibility requirements?'">
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

      <section
        class="mb-4 pb-2"
       
      >
        <b-row>
          <b-col cols="4">
            <h6>Research Consent</h6>
            We do research so we can improve our services. Sometimes we use
            external providers to do the research for us.
          </b-col>
          <b-col>
            <b-form-group
              :label="'Can we pass on ' + yourString + ' contact details to an external provider so they can invite you to take part in research?'"
            >
              <b-form-radio-group
                v-model="form.researchConsent"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
      </section>
    </b-form>
  </div>
</template>

<script>
import entity from "./entity.vue";
import EntityAddress from "./entityAddress.vue";
import Notice from "./notice.vue";
export default {
  components: { entity, Notice, EntityAddress },
  name: "f8AboutYou",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      repTypeOptions: [
        "I am their lawyer or paid agent" ,
        "Union representative",
        "Family or friend",
      ],
       applyingForSelfOptions: [
        { text: "I am the applicant (submitting for myself)", value: true },
        { text: "I am submitting this form on behalf of someone else", value: false },
      ],
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
  methods: {
    onSelectedNewAbn() {
      this.form.businessDetailsCorrect = true;
      this.$bvModal.hide("manual-abn");
    },
    onNumDepnedantsChange() {
      if (this.form.entities.applicant.details.numOfDependants < 0) return;
      if (
        this.form.entities.applicant.details.numOfDependants <
        this.form.entities.applicant.details.dependants.length
      ) {
        while (
          this.form.entities.applicant.details.numOfDependants <
          this.form.entities.applicant.details.dependants.length
        ) {
          this.form.entities.applicant.details.dependants.pop();
        }
      } else if (
        this.form.entities.applicant.details.numOfDependants >
        this.form.entities.applicant.details.dependants.length
      ) {
        while (
          this.form.entities.applicant.details.numOfDependants >
          this.form.entities.applicant.details.dependants.length
        ) {
          this.form.entities.applicant.details.dependants.push({
            firstName: "",
            lastName: "",
            dob: "",
            relationship: "",
            stayOvernight: null,
            involvedInLegalIssue: null,
          });
        }
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
