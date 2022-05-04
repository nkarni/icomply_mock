<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Applicant details</h6>
            <p>
              The following details are your Union organisation as recorded in
              our system.
            </p>
            <p>
              If you have a different postal address than the Union, please
              provide it.
            </p>
            <p>
              Throughout this form - all fields are mandatory unless
              specifically marked as optional.
            </p>
          </b-col>
          <b-col>
            <b-form-group>
              <p>Australian manufacturing Workers' Union, Carlton Branch
                </p>
            <p>
              251 Queensberry Street, Carlton Victoria 3053
               
            </p>
              <p>
                The organisation is registered under the Fair Work (Registered Organisation) Act 2009 (the RC Act)
              </p>
              
            </b-form-group>

            <b-form-group >
              <b-form-checkbox
                v-model="form.admin.hasDifferentPostalAddress"
                :value="true"
                :unchecked-value="false"
              >
                I have a different postal address to union organisation address.
              </b-form-checkbox>
            </b-form-group>

            <div v-if="form.admin.hasDifferentPostalAddress === true">
             <entity
              :entity="form.admin"
              showPostalAddress
              :postalAddressLabel="'Your postal address'"
            >
            </entity>
            </div>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Your details</h6>
            <p> We have pre-populated your details from our records. Please check and correct if required.</p>
            <p>Is here a better place to put the 'why we need it' rather than in the intro page? </p>
          </b-col>
          <b-col>
          <entity
              :entity="form.admin"
              showFirstName
              showLastName
              showEmail
              :showMiddleName="true"
              :firstNameLabel="'Legal first name'"
              :lastNameLabel="'Legal surname'"
              :middleNameLabel="'Middle name (optional)'"
            >
            </entity>
          </b-col>
        </b-row>
      </section>
       <section class=" mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Your declaration</h6>
            
          </b-col>
          <b-col>
          <b-form-group >
              <b-form-checkbox
                v-model="form.admin.confirmAuthorised"
                :value="true"
                :unchecked-value="false"
              >
                I am authorised to lodge this application on behalf of the above named Organisation or Branch.
              </b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-row>
      </section>
      
    </b-form>
  </div>
</template>

<script>
import AbnLookup from "./abnLookup.vue";
import entity from "./entity.vue";
import EntityAddress from "./entityAddress.vue";
import Notice from "./notice.vue";
export default {
  components: { entity, Notice, EntityAddress, AbnLookup },
  name: "yourDetails",
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
      showIsBusinessDetailsCorrect: true,
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
    onWrongBusinessNameClick() {
      if (form.businessDetailsCorrect === false) {
        this.businessDetailsWereWrong = true;
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
