<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Are you the Applicant?</h6>
            <p>The applicant is the person this form is about, the person who has been dismissed from their employment.</p>
            <p>Throughout this form - all fields are mandatory unless specifically marked as optional.</p>
          </b-col>
          <b-col>

            <b-form-group label="Are you making this application for yourself, or someone else?" class="mt-3">
              <b-form-radio-group
                v-model="form.applyingForSelf"
                :options="applyingForSelfOptions"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              v-if="form.applyingForSelf === false"
              label="What is your relationship to the applicant?"
            >
             <b-form-radio-group
                v-model="form.formFiller.isLawyerUnionOrPaidAgent"
                :options="repTypeOptions"
              ></b-form-radio-group>
            </b-form-group>
            <entity
            v-if="form.applyingForSelf === false && form.formFiller.isLawyerUnionOrPaidAgent === true"
            showTitle
            showFirstName
            showLastName
            showPhones
            showEmail
            showPostalAddress
            postalAddressLabel="Your postal address (not the Applicant)"
            :entity="form.formFiller"
            :orgNameLabel="'Firm or Organisation name'"
            showOrgName
            >
            </entity>

            <notice v-if="form.applyingForSelf === false && form.formFiller.isLawyerUnionOrPaidAgent === false" class="mb-2" :message="'We will contact you about this case in the future'"></notice>

          </b-col>
        </b-row>
      </section>

          <section
        class="border-bottom border-secondary mb-4 pb-4"
      >
        <b-row>
          <b-col cols="4">
            <h6>Your age</h6>
          <p>If you are under 18 you must have a guardian (WHAT DOES THAT MEAN? WHAT DO THEY NEED TO DO ABOUT IT?)</p> 
          </b-col>
          <b-col>
            <b-form-group label="Are you over 18?">
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
            <b-form-group label="Will you need an interpreter?">
              <b-form-radio-group
                v-model="form.needsInterpreter"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group
              v-if="form.needsInterpreter === true"
              label="What language?"
            >
              <b-form-input
                v-model="form.needsInterpreterLanguage"
              ></b-form-input>
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
            <b-form-group label="Do you have any accessibility requirements?">
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
              label="Can we pass on your contact details to an external provider so they can invite you to take part in research?"
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
  name: "aboutYou",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      repTypeOptions: [
        { text: "I am their lawyer or paid agent", value: true },
        { text: "Family or friend", value: false },
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
