<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h5>Are you the Applicant?</h5>
            The Applicant is the person this form is about, If you are not the
            Applicant please provide some details about yourself.NOTE: if you
            are not the Applicant but want to be contacted about this
            application please upload authority documentation in the uploads
            section, or use our <a href="">Authority to Disclose form</a>.
          </b-col>
          <b-col>
            <label
              >Are you making this application for yourself, or someone
              else?</label
            >
            <b-form-group
              label="Are you making this application for yourself, or someone else?"
            >
              <b-form-radio-group
                id="repType"
                v-model="form.repType"
                :options="repTypeOptions"
                name="repType"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              label="Are you a LSC panel lawyer?"
              v-if="form.repType === 'solicitor'"
            >
              <b-form-radio-group
                id="isLscPanelMember"
                v-model="form.isLscPanelMember"
                :options="boolOptions"
                name="isLscPanelMember"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              label="Have you previously represented this client (the applicant)?"
              v-if="form.repType === 'solicitor' && form.isLscPanelMember"
            >
              <b-form-radio-group
                id="prevRepresented"
                v-model="form.prevRepresented"
                :options="boolOptions"
                name="prevRepresented"
              ></b-form-radio-group>
            </b-form-group>

            <entity
              v-if="form.repType === 'solicitor'"
              :entity="form.entities.repSolicitor"
              orgNameLabel="Your firm or organisation name"
              idPrefix="repSolicitor"
              showOrgName
              showFirstName
              showLastName
              showEmail
            >
            </entity>
          </b-col>
        </b-row>
      </section>

      <section
        v-if="form.repType"
        class="border-bottom border-secondary mb-4 pb-2"
      >
        <b-row>
          <b-col cols="4" v-if="form.repType === 'self'">
            <h5>Your personal information</h5>
            Please provide details about yourself.
          </b-col>
          <b-col cols="4" v-else>
            <h5>Applicant information</h5>
            Please provide details about the applicant (the person this form is
            about).
          </b-col>
          <b-col>
            <entity
              :entity="form.entities.applicant"
              idPrefix="applicant"
              showFirstName
              :firstNameLabel="yourString + ' given name(s)'"
              showLastName
              :lastNameLabel="yourString + ' family name(s)'"
            >
            </entity>
            <b-form-group
              v-if="form.repType === 'self'"
              label="Have you previously used or been known by any other given names? (optional)"
            >
              <b-form-input
                id="otherFirstName"
                name="otherFirstName"
                v-model="form.otherFirstName"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              v-if="form.repType === 'self'"
              label="Have you previously used or been known by any other family names? (optional)"
            >
              <b-form-input
                id="otherFamilyName"
                name="otherFamilyName"
                v-model="form.otherFamilyName"
              ></b-form-input>
            </b-form-group>

            <div v-if="form.repType === 'solicitor' && form.prevRepresented">
              <b-form-group label="LSC File number (optional)">
                <b-form-input
                  id="lscFileNumber"
                  name="lscFileNumber"
                  v-model="form.lscFileNumber"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label="If no LSC file number is provided, please provide covering letter details (or you can upload a document in the uploads section)"
              >
                <b-form-textarea
                  id="lscFileNumberDetails"
                  name="lscFileNumberDetails"
                  v-model="form.lscFileNumberDetails"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </div>
          </b-col>
        </b-row>
      </section>

      <section
        v-if="form.repType"
        class="border-bottom border-secondary mb-4 pb-2"
      >
        <b-row>
          <b-col cols="4">
            <h5>Contact details</h5>
            We need at least one address (Home address, postal address or email
            address) so we can contact you. <br />
            <strong
              >Please only provide contact information that feels safe to
              provide.</strong
            >
          </b-col>
          <b-col>
            <b-form-group :label="AreYouString + ' homeless or at risk of homelessness?'">
              <b-form-radio-group
                id="homeless"
                v-model="form.homeless"
                :options="boolOptions"
                name="homeless"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group :label="DoYouStringCont + ' live on the APY lands?'">
              <b-form-radio-group
                id="apyLands"
                v-model="form.apyLands"
                :options="boolOptions"
                name="apyLands"
              ></b-form-radio-group>
            </b-form-group>

            <entity
              :entity="form.entities.applicant"
              idPrefix="applicant"
              showAddress showPostalAddress showPostalAddessSame showIsSafePostalAddress showPhones showEmail showIsSafeEmail showPreferredContact showIsSafePhone
              :addressLabel="yourString + ' Home address (even if ' + youAreString + ' in custody)'"
              :emailLabel="yourString + ' email'"
              :phonesLabel="yourString + ' phone number(s)'"
              :safeEmailAddressLabel="'is it safe to contact ' + youString + ' on this email address?'"
              :safePhoneLabel="'is it safe to contact ' + youString + ' on this phone number?'"
              :safePostalAddressLabel="'is it safe to send ' + youString + ' mail to this address?'"
              :postalAddressLabel="yourString + ' postal address'"           
            >
            </entity>

          </b-col>
        </b-row>
      </section>

<section v-if="form.repType" class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h5>{{yourString}} circumstances</h5> 
          </b-col>
          <b-col>
<b-form-group
              :label="DoYouStringCont + ' identify as Aboriginal or Torres Strait Islander?'"
            >
              <b-form-radio-group
                id="aborginality"
                v-model="form.aborginality"
                :options="aboriginalityOptions"
                name="aborginality"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group :label="AreYouString + ' in prison or detention?'">
              <b-form-radio-group
                id="inPrison"
                v-model="form.inPrison"
                :options="boolOptions"
                name="inPrison"
              ></b-form-radio-group>
            </b-form-group>
             <b-form-group v-if="form.inPrison" label="Where">
                <b-form-input
                  id="prisonName"
                  name="prisonName"
                  v-model="form.prisonName"
                ></b-form-input>
              </b-form-group>
               <b-form-group v-if="form.inPrison" label="Section (optional)">
                <b-form-input
                  id="prisonSection"
                  name="prisonSection"
                  v-model="form.prisonSection"
                ></b-form-input>
              </b-form-group>
               <b-form-group v-if="form.inPrison" label="Idnetification number (optional)">
                <b-form-input
                  id="prisonId"
                  name="prisonId"
                  v-model="form.prisonId"
                ></b-form-input>
              </b-form-group>

              <b-form-group :label="wereYouString + ' born overseas?'">
              <b-form-radio-group
                id="bornOs"
                v-model="form.bornOs"
                :options="boolOptions"
                name="bornOs"
              ></b-form-radio-group>
            </b-form-group>
             <b-form-group v-if="form.bornOs" :label="'Where ' + wereYouString + ' born?'">
                <b-form-input
                  id="bornWhere"
                  name="bornWhere"
                  v-model="form.bornWhere"
                ></b-form-input>
              </b-form-group>

                <b-form-group label="What is the main language spoken at home?">
              <b-form-select
                v-model="form.homeLanguage"
                id="homeLanguage"
                name="homeLanguage"
                :options="[
                  { value: 'english', text: 'English' },
                  { value: 'mandarin', text: 'Mandarin' },
                ]"
              ></b-form-select>
            </b-form-group>

            <b-form-group :label="DoYouStringCont + ' require an interpreter?'">
              <b-form-radio-group
                id="requireInterpreter"
                v-model="form.requireInterpreter"
                :options="boolOptions"
                name="requireInterpreter"
              ></b-form-radio-group>
            </b-form-group>

             <b-form-group v-if="form.requireInterpreter" label="What language/dialect?">
              <b-form-select
                v-model="form.language"
                id="language"
                name="language"
                :options="[
                  { value: 'english', text: 'English' },
                  { value: 'mandarin', text: 'Mandarin' },
                ]"
              ></b-form-select>
            </b-form-group>

          </b-col>
        </b-row>
        </section>
    </b-form>
  </div>
</template>

<script>
import entity from "./entity.vue";
export default {
  components: { entity },
  name: "applicantDetails",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      repTypeOptions: [
        { text: "I am the Applicant (submitting for myself)", value: "self" },
        { text: "I am the Applican’ts solicitor", value: "solicitor" },
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
        { text: "Yes, Tores Strait Islander", value: "islander" },
        { text: "Both Aboriginal and Tores Strait Islander", value: "both" },
        { text: "No", value: "no" }

      ]
    };
  },
  computed: {
    youString: function () {
      return this.form.repType === 'self'? 'you' : 'the Applicant';
    },
    yourString: function () {
      return this.form.repType === 'self'? 'your' : 'the Applicant\'s';
    },
    AreYouString: function () {
      return this.form.repType === 'self'? 'are you' : 'is the Applicant';
    },
    DoYouString: function () {
      return this.form.repType === 'self'? 'do you' : 'is the Applicant';
    },
     DoYouStringCont: function () {
      return this.form.repType === 'self'? 'do you' : 'does the Applicant';
    },
    youAreString: function () {
      return this.form.repType === 'self'? 'you are' : 'the Applicant is';
    },
    wereYouString: function () {
      return this.form.repType === 'self'? 'were you' : 'was the Applicant';
    },

    
  },
  methods: {},
};
</script>

<style lang="scss" scoped >
h5::first-letter {
  text-transform: uppercase;
}
</style>