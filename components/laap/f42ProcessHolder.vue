<template>
  <div>
    <b-form>
      <!-- <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col>
            <h5>Process overview</h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </b-col>
        </b-row>
      </section> -->
      <section class=" mb-4 pb-4">
        <b-row>
          <b-col>
            <h5>How the process works</h5>

            <b-form-group>
              <b-list-group >
                <b-list-group-item>
                  <h6>1.   An administrator from you union has started an entry permit application on your behalf.</h6>
                 
                    
                </b-list-group-item>
                <b-list-group-item>
                  <h6>2.   You will need to provide your personal details, ID documents, supporting documents and sign a statuary declaration confirming your details.</h6>
                  
                </b-list-group-item>
                <b-list-group-item>
                  <h6>3. Your application will then be submitted to FWC by your union administrator.</h6>
                
                </b-list-group-item>
                <b-list-group-item>
                  <h6>4.  Once submitted you will be contacted by FWC to complete a final interview via video call to complete the application to receive your permit.</h6>
                 
                </b-list-group-item>
                
              </b-list-group>
            </b-form-group>
          </b-col>
        </b-row>
      </section>
         <section class="mb-4 pb-4">
        <b-row>
          <b-col>
            <h5>What you will provide now</h5>

            <b-form-group>
              <b-list-group >
                <b-list-group-item>
                  <h6>Confirm Full legal names (given, middle and surname)</h6>
                </b-list-group-item>
                <b-list-group-item>
                  <h6>Details of entry permit training</h6>
                  
                </b-list-group-item>
                <b-list-group-item>
                  <h6>Passport photo of yourself</h6>
                </b-list-group-item>
                <b-list-group-item>
                  <h6>Two forms of identification</h6>
                 
                </b-list-group-item>
                
              </b-list-group>
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
  name: "f42ProcessAdmin",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      repTypeOptions: [
        "I am their lawyer or paid agent",
        "Union representative",
        "Family or friend",
      ],
      applyingForSelfOptions: [
        { text: "I am the applicant (submitting for myself)", value: true },
        {
          text: "I am submitting this form on behalf of someone else",
          value: false,
        },
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
