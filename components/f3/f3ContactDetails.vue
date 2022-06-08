<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Who is completing this form?</h6>
          </b-col>
          <b-col>
 <b-form-group
              label="Are you the Respondent contact person?"
              class="mt-3"
            >
              <b-form-radio-group
              stacked
                v-model="form.formFillerPersona"
                :options="formFillerPersonaOptions"
              ></b-form-radio-group>
            </b-form-group>
             <b-form-group
              v-if="form.formFillerPersona === 'Other'"
              label="Please provide details"
            >
              <b-form-input
                v-model="form.formFillerPersonaDetails"
              ></b-form-input>
            </b-form-group>
          </b-col>
          </b-row>
          </section>

      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Business details</h6>
            <p>
              The following details were provided by the Applicant in their
              Application. Please check the details and correct if required.
            </p>
           
          </b-col>
          <b-col>
            
            <div>
             <b-form-group
              label="The Applicant provided the following business details:"
              class="mt-3"
            >
              {{ form.employeeProvidedBusinessNameString }}
            </b-form-group>

            <b-form-group
              label="Are those details correct?"
              class="mt-3"
            >
              <b-form-radio-group
                v-model="form.employeeProvidedBusinessIsCorrect"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
            </div>

            <div v-if="form.employeeProvidedBusinessIsCorrect === false">

            <!-- do a search and select a new business or enter details if not found, via the component-->
              <f3-abn-lookup
              v-if="form.businessDetails.name === ''"
                :businessDetails="form.businessDetails"
                @businessSelected="onSelectedNewAbn"
                @manualBusinessEntry="onManualBusinessEntry"
              ></f3-abn-lookup>
          

            <!--  show the selection -->
            <div v-if="form.businessDetails.name !== ''">
              <label>
                You have corrected the business to:
              </label>
                <p>
               {{ form.businessDetails.name}} <span v-if="form.businessDetails.tradingName.length > 0">{{ form.businessDetails.tradingName}} </span> ABN: {{form.businessDetails.abn}}
               <br> <a href="" @click.prevent="changeSelectedBusiness">Change</a>
              </p>
             
            </div>
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
              v-if="businessNameVerified"
              :addressLabel="'Postal address'"
              :address="form.businessDetails.postalAddress"
              :addressHelp="'You can select another address - start typing the correct address and select one of the options'"
              :addressString="form.businessDetails.postalAddressString"
            ></entity-address>
          </b-col>
        </b-row>
      </section>
      <section
        class="border-bottom border-secondary mb-4 pb-4"
        v-if="businessNameVerified"
      >
        <b-row>
          <b-col cols="4">
            <h6>Contact person</h6>
            <p>The Applicant provided these details of a contact person for the business.</p> 
           <p>You can nominate a different person if there is someone else who should be the main contact. Please update any information if needed.</p>
           <notice message="DEV NOTE: pre-populate contact person details as provided in F2" borderClass="none" class="mt-2"> </notice>
          </b-col>
          <b-col>
            <entity
              :entity="form.businessDetails.contactPerson"
              showPhones
              showFirstName
              showLastName
              showEmail
               showPreferredPronoun
            >
            </entity>
          </b-col>
        </b-row>
      </section>

      <section
        class="border-bottom border-secondary mb-4 pb-4"
        v-if="businessNameVerified"
      >
        <b-row>
          <b-col cols="4">
            <h6>Representative</h6>
            A representative is a person who acts for you in the case but who
            isn’t an employee of your business. They could be a lawyer, paid
            agent, employer organisation or chamber of commerce. You don’t need
            to have a representative. <a href="">Click here </a>to read more
            about whether or not to have a representative on our website.
          </b-col>
          <b-col>
            <b-form-group label="Do you have a representative?">
              <b-form-radio-group
                v-model="form.hasRep"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group label="Type of representative"  v-if="form.hasRep === true">
              <b-form-radio-group
              stacked
                v-model="form.repType"
                :options="repTypeOptions"
              ></b-form-radio-group>
            </b-form-group>

           <!-- <b-form-group
              v-if="form.repType === 'Other' &&  form.hasRep === true"
              label="Please provide details"
            >
              <b-form-input
                v-model="form.repTypeDetails"
              ></b-form-input>
            </b-form-group> -->

            
            <entity
              v-if="form.hasRep === true"
              :entity="form.rep"
              showOrgName
              showPhones
              showFirstName
              showLastName
              showEmail
              showPostalAddress
           
              :orgNameLabel="form.repType === 'Other' ? 'Organisation name (optional)' : 'Organisation name'"
            >
            </entity>
          </b-col>
        </b-row>
      </section>
      <section
        class="border-bottom border-secondary mb-4 pb-4"
        v-if="businessNameVerified"
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
        class=" mb-4 pb-4"
        v-if="businessNameVerified"
      >
        <b-row>
          <b-col cols="4">
            <h6>Accessibility</h6>
            It’s important that everyone has access to our services. If you have
            access needs, we can make arrangements so that you can participate
            fully in your case. You can read more about accessibility on our
            website.
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

      
    </b-form>
  </div>
</template>

<script>
import f3AbnLookup from "../f3/f3AbnLookup.vue";
import entity from "../common/entity.vue";
import EntityAddress from "../common/entityAddress.vue";
import Notice from "../common/notice.vue";
export default {
  components: { entity, Notice, EntityAddress, f3AbnLookup },
  name: "f3ContactDetails",
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
     
      formFillerPersonaOptions: [
        "Yes, I am an owner/director/employee of the Respondent",
       "No, I am representing the Respondent in this matter",
       "Other"
      ],
      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
      repTypeOptions: [
        'lawyer, paid agent, employer association, peak body','Other'
      ],
      manualBusinessEntry: false
    };
  },
  computed: {
    businessNameVerified: function(){
      return (this.form.employeeProvidedBusinessIsCorrect === true || (this.form.employeeProvidedBusinessIsCorrect === false && this.form.businessDetails.name !== '') || this.manualBusinessEntry)
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
  },
  methods: {
      onEmployeeProvidedBusinessIsCorrectClick() {
      if (form.employeeProvidedBusinessIsCorrect === false) {
        this.showSearch = true
      }else{

      }
    },
    onSelectedNewAbn(newBus) {
      this.form.businessDetails.name = newBus.name
      this.form.businessDetails.tradingName = newBus.tradingName
      this.form.businessDetails.abn = newBus.abn
      this.form.businessDetails.postalAddress.postalAddressString = ''
      this.showSearch = false
     
    },
    changeSelectedBusiness(){
      this.form.businessDetails.name = ''
      this.form.businessDetails.tradingName = ''
      this.form.businessDetails.abn = ''
    },
    onManualBusinessEntry(){
      this.manualBusinessEntry = true
    }
  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
