<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>About the Applicant (organisation or branch)</h6>     
            <p>
              The permit will be posted to the address of the organisation or branch address unless you provide a different address.
            </p>
           
          </b-col>
          <b-col>
            <union-lookup v-if="form.businessDetails.name === ''" :form="form" ></union-lookup>
            <b-form-group v-if="form.businessDetails.name !== ''">

              <p>{{ form.businessDetails.name}}</p>
               <p>{{ form.businessDetails.address}}</p>
              
            
              <div ><a @click.prevent="form.businessDetails.name = ''" href="">Change organisation</a></div>
            </b-form-group>
            

            <b-form-group v-if="form.businessDetails.name !== ''" >
              <b-form-checkbox
                v-model="form.admin.hasDifferentPostalAddress"
                :value="true"
                :unchecked-value="false"
              >
                Post the permit to a different address.
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
            <b-form-group>
              <b-form-checkbox
                v-model="form.permitHolder.isSameAsAdmin"
                :value="true"
                :unchecked-value="false"
              >
                Check this box if you are also the Proposed Permit Holder.
              </b-form-checkbox>
            </b-form-group>
            <notice  v-if="form.permitHolder.isSameAsAdmin" :message="'Enter your full details in the next step.'"></notice>

          <entity
          v-if="!form.permitHolder.isSameAsAdmin"
              :entity="form.admin"
              showFirstName
              showLastName
              showEmail
              
              :firstNameLabel="'First name'"
              :lastNameLabel="'Surname'"
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
import entity from "../common/entity.vue";
import EntityAddress from "../common/entityAddress.vue";
import Notice from "../common/notice.vue";
import UnionLookup from "../common/unionLookup.vue";
export default {
  components: { entity, Notice, EntityAddress, UnionLookup },
  name: "yourDetails",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
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
    onBusinessSelected() {
      
      
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
