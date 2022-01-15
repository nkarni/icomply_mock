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
              :firstNameLabel="
                form.repType === 'self'
                  ? 'Your given name(s)'
                  : 'The Applicant\'s given name(s)'
              "
              showLastName
              :lastNameLabel="
                form.repType === 'self'
                  ? 'Your family name(s)'
                  : 'The Applicant\'s family name(s)'
              "
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
            <b-form-group label="Are you homeless or at risk of homelessness?">
              <b-form-radio-group
                id="homeless"
                v-model="form.homeless"
                :options="boolOptions"
                name="homeless"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group label="Do you live on the APY lands?">
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
              addressLabel="Home address (even if you are in custody)"
            >
            </entity>

           


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
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped >
</style>