<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Business details</h6>
            <p>The following details were provided by the employee in their
            Application. Please check the details and correct if required.</p>
            <p>Through this form - all fields are mandatory unless specifically marked as optional.</p>
          </b-col>
          <b-col>
            <b-form-group label="The employee provided the following business details:" class="mt-3">
              
              {{ form.employeeProvidedBusinessNameString }}
            </b-form-group>
            
             <b-form-group label="Are those details correct?" class="mt-3">
              <b-form-radio-group
                v-model="form.businessDetailsCorrect"
                :options="boolOptions"
                @click="onWrongBusinessNameClick"
              ></b-form-radio-group>
            </b-form-group>

  
            <div  v-if="form.businessDetailsCorrect === false">
              <abn-lookup :businessDetails="form.businessDetails"></abn-lookup>
              <!-- Correct business: {{ form.businessDetails.businessDetailsString }} -->
            </div>
            

            
            
            <!-- <b-row>
              <b-col cols="4">
                Business legal name:
              </b-col>
              <b-col>
                ABC Pty Ltd
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="4">
                ABN:
              </b-col>
              <b-col>
                ABC Pty Ltd
              </b-col>
            </b-row> -->

           

           
            
          

            <!-- <b-form-group v-if="businessDetailsWereWrong">
             {{ form.businessDetailsString }}
            </b-form-group>  -->

            <entity-address
              v-if="form.businessDetailsCorrect === true"
              :addressLabel="'Postal address'"
              :address="form.businessDetails.postalAddress"
              :addressHelp="'You can select another address - start typing the correct address and select one of the options'"
              :addressString = form.businessDetails.postalAddressString
            ></entity-address>

            

          </b-col>
        </b-row>
      </section>
      <section
        class="border-bottom border-secondary mb-4 pb-4"
        v-if="form.businessDetailsCorrect === true"
      >
        <b-row>
          <b-col cols="4">
            <h6>Contact person</h6>
            The following contact details were provided by the employee in their
            Application. Please check the details and correct if required.
          </b-col>
          <b-col>
            <entity
              :entity="form.businessDetails.contactPerson"
              showPhones
              showFirstName
              showLastName
              showEmail
              showTitle
            >
            </entity>
          </b-col>
        </b-row>
      </section>
          <section class="border-bottom border-secondary mb-4 pb-4"  v-if="form.businessDetailsCorrect === true">
        <b-row>
          <b-col cols="4">
            <h6>The Business</h6>
          </b-col>
          <b-col>
            <b-form-group :label="'Industry'" v-if="form.businessDetailsCorrect === true">
                <b-form-select
                  v-model="form.businessDetails.industry"
                  :options="[
                   'Industry A', 'Industry B', 'Other']"
                ></b-form-select>
              </b-form-group>
              <b-form-group
                v-if="form.businessDetails.industry === 'Other' && form.businessDetailsCorrect === true"
                label="Please provide details"
              >
                <b-form-textarea
                  v-model="form.businessDetails.industryDetails"
                ></b-form-textarea>
              </b-form-group>
            <b-form-group
              :label="'How many employees did your business have when the employee was dismissed?'"
            >
              <b-form-radio-group
                stacked
                v-model="form.businessDetails.numberOfEmployeesIsUnder"
                :options="numberOfEmployeesOptionsUnder"
              ></b-form-radio-group>
            </b-form-group>

            <notice
              message="Count all full-time, part-time and casual employees. Include the employee who was dismissed. <br><br>
If the employee wasn’t dismissed, count the employees you had on 12/12/22 (the date the employee said they were dismissed)."
            ></notice>
          </b-col>
        </b-row>
      </section>
      <section
        class="border-bottom border-secondary mb-4 pb-4"
        v-if="form.businessDetailsCorrect === true"
      >
        <b-row>
          <b-col cols="4">
            <h6>Representative</h6>
            A representative is a person who acts for you in the case but who isn’t an employee of your business. They could be a lawyer, paid agent, employer organisation or chamber of commerce. You don’t need to have a representative. <a href="">Click here </a>to read more about whether or not to have a representative on our website.
          </b-col>
          <b-col>
            <b-form-group
              label="Do you have a representative?"
            >
              <b-form-radio-group
                v-model="form.hasRep"
                :options="boolOptions"
              ></b-form-radio-group>
               
            </b-form-group>
 <entity
 v-if="form.hasRep === true"
              :entity="form.rep"
              showOrgName
              showPhones
              showFirstName
              showLastName
              showEmail
              showPostalAddress
              showTitle
            >
            </entity>

          </b-col>
        </b-row>
      </section>
      <section
        class="border-bottom border-secondary mb-4 pb-4"
        v-if="form.businessDetailsCorrect === true"
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
        v-if="form.businessDetailsCorrect === true"
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
        class="border-bottom border-secondary mb-4 pb-2"
        v-if="form.businessDetailsCorrect === true"
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
import AbnLookup from './abnLookup.vue';
import entity from "./entity.vue";
import EntityAddress from "./entityAddress.vue";
import Notice from "./notice.vue";
export default {
  components: { entity, Notice, EntityAddress, AbnLookup },
  name: "applicantDetails",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      numberOfEmployeesOptionsUnder: [
        {
          text: "1 to 4 employees ",
          value: "4",
        },
        {
          text: "5 to 9  employees ",
          value: "10",
        },
        {
          text: "10 to 14  employees ",
          value: "15",
        },
        {
          text: "15 to 19 employees ",
          value: "20",
        },
        {
          text: "20 to 49 employees",
          value: "50",
        },
        {
          text: "50 to 99 employees",
          value: "100",
        },
        {
          text: "100 to 199 employees",
          value: "200",
        },
        {
          text: "200 to 999 employees",
          value: "1000",
        },
        {
          text: "over 1000 employees",
          value: "999999999",
        },
      ],
      businessDetailsWereWrong: false,
      repTypeOptions: [
        { text: "I am the Applicant (submitting for myself)", value: "self" },
        { text: "I am the Applicant's solicitor", value: "solicitor" },
        {
          text: "I am submitting this form on behalf of the Applicant",
          value: "other",
        },
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
    onWrongBusinessNameClick(){
      if(form.businessDetailsCorrect === false){
        this.businessDetailsWereWrong = true
      }
    },
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
