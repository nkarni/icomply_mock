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

           
            <!-- <entity
            v-if="form.formFiller.relationshipToApplicant"
            showPreferredPronoun
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

            <notice v-if="form.applyingForSelf === false && form.formFiller.relationshipToApplicant === 'Family or friend'" class="mb-2" :message="'We will contact you about this case in the future'"></notice> -->

          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Applicant's contact details</h6>
            <p>
              We need to be able to send {{ youString }} information about {{ yourString }} case. The
              former employer will also need to send {{ youString }} information about their
              side of the case.
            </p>
            <p v-if="form.applyingForSelf === true">
              During the case, we will call you the Applicant. This is because
              you are the person making this application about your dismissal.
            </p>
          </b-col>
          <b-col>
            <entity  showFirstName showLastName showPhones showEmail showPostalAddress showPreferredPronoun
              :entity="form.applicant">
            </entity>
            <b-form-group>
              <b-form-checkbox v-model="form.doesNotHaveAnAddress" :value="true" :unchecked-value="false">
                Check this box if <span v-if="form.applyingForSelf === true">you don't</span><span v-else>the Applicant
                  doesn't</span> have an address.
              </b-form-checkbox>
            </b-form-group>
            <b-form-group :label="DoYouStringCont + ' have a representative?'">
              <b-form-radio-group v-model="form.applicant.hasRep" :options="boolOptions"></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4 pb-4" v-if="form.applicant.hasRep === true">
        <b-row>
          <b-col cols="4">
            <h6>Representative</h6>
            <p>Please provide details about this representative if you know them.</p>
          </b-col>
          <b-col>
             <b-form-group
             
              :label="'Relationship to ' + youString"
            >
             <b-form-radio-group
             stacked
                v-model="form.formFiller.relationshipToApplicant"
                :options="repTypeOptions"
              ></b-form-radio-group>
            </b-form-group>
           <b-form-group label="Please provide details" v-if="form.formFiller.relationshipToApplicant === 'Other'">
            <b-form-input v-model="form.relationshipToApplicantDetails"></b-form-input>
            </b-form-group>

            <entity v-if="form.applicant.hasRep === true" :entity="form.rep" showPreferredPronoun showOrgName showPhones showFirstName
              showLastName showEmail showPostalAddress  :orgNameLabel="'Firm or Organisation name'"  >
            </entity>
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
  name: "f2ContactDetails",
  props: {
    form: {
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
     applyingForSelfOptions: [
        { text: "I am the applicant (submitting for myself)", value: true },
        { text: "I am submitting this form on behalf of someone else", value: false },
      ],
      repTypeOptions: [
        "Lawyer, Paid agent, union representative" ,
        "Family member or friend",
        "Other",
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
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
