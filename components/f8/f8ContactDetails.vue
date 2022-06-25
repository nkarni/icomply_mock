<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Are you the Applicant?</h6>
            <p>
              The applicant is the person this form is about, the person who has
              been dismissed from their employment.
            </p>
            <p>
              Throughout this form - all fields are mandatory unless
              specifically marked as optional.
            </p>
          </b-col>
          <b-col>
            <b-form-group
              label="Are you making this application for yourself, or someone else?"
              class="mt-3"
            >
              <b-form-radio-group
                v-model="form.userRole"
                :options="userRoleOptions"
              ></b-form-radio-group>
            </b-form-group>

          </b-col>
        </b-row>
      </section>
      <section
        class="border-bottom border-secondary mb-4 pb-2"
        v-if="form.userRole == 'unionOfficeHolder'"
      >
        <b-row>
          <b-col cols="4">
            <h6>Association details</h6>
          </b-col>
          <b-col>
            <b-form-group label="Name of association">
              <b-form-input v-model="form.applicant.orgName">
              </b-form-input>
            </b-form-group>
            <entity
              showFirstName
              showLastName
              showPhones
              showEmail
              showPreferredPronoun
              :firstNameLabel="'Contact person\'s first name'"
              :lastNameLabel="'Contact person\'s surname'"
              :entity="form.applicant.orgContactPerson"
            >
            </entity>
            
          </b-col>
        </b-row>
      </section>

        <section
        class="border-bottom border-secondary mb-4 pb-2"
        v-if="form.userRole !== ''"
      >
        <b-row>
          <b-col cols="4">
            <h6>{{ yourString }} contact details</h6>
            <p>
              We need to be able to send {{ youString }} information about
              {{ yourString }} case. The former employer will also need to send
              {{ youString }} information about their side of the case.
            </p>
            <p v-if="form.applyingForSelf === true">
              During the case, we will call you the Applicant. This is because
              you are the person making this application about your dismissal.
            </p>
          </b-col>
          <b-col>
            <entity
              showFirstName
              showLastName
              showPhones
              showEmail
              showPostalAddress
              showPreferredPronoun
              :entity="form.dismissedPerson"
            >
            </entity>
            <b-form-group>
              <b-form-checkbox
                v-model="form.doesNotHaveAnAddress"
                :value="true"
                :unchecked-value="false"
              >
                Check this box if
                <span v-if="form.applyingForSelf === true">you don't</span
                ><span v-else>the Applicant doesn't</span> have an address.
              </b-form-checkbox>
            </b-form-group>
            <b-form-group :label="DoYouStringCont + ' have a representative?'">
              <b-form-radio-group
                v-model="form.dismissedPerson.hasRep"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4 pb-4" v-if="form.dismissedPerson.hasRep === true">
        <b-row>
          <b-col cols="4">
            <h6>Representative</h6>
            <p>
              Please provide details about this representative if you know them.
            </p>
          </b-col>
          <b-col>
            <b-form-group :label="'Relationship to ' + youString">
              <b-form-radio-group
                stacked
                v-model="form.rep.relationToDismissedPerson"
                :options="repTypeOptions"
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group
              label="Please provide details"
              v-if="form.rep.relationToDismissedPerson === 'Other'"
            >
              <b-form-input
                v-model="form.rep.relationToDismissedPersonDetails"
              ></b-form-input>
            </b-form-group>

            <entity
              :entity="form.rep"
              showPreferredPronoun
              :showOrgName="form.rep.relationToDismissedPerson !== 'Family member or friend'"
              showPhones
              showFirstName
              showLastName
              showEmail
              showPostalAddress
              :orgNameLabel="form.rep.relationToDismissedPerson === 'Other' ? 'Firm or Organisation name (optional)' : 'Firm or Organisation name'"
            >
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
  name: "f8ContactDetails",
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
      userRoleOptions: [
        {
          text: "I am the applicant (submitting for myself)",
          value: "dismissedPerson",
        },
        {
          text: "I am submitting this form on behalf of someone else",
          value: "helper",
        },
        {
          text: "The Applicant is a industrial association lodging on behalf of its member(s)",
          value: "unionOfficeHolder",
        },
      ],
      repTypeOptions: [
        "Lawyer, Paid agent, union representative",
        "Family member or friend",
        "Other",
      ],
    };
  },
  computed: {
    youString: function () {
      return this.form.userRole === "dismissedPerson"
        ? "you"
        : "the dismissed person";
    },
    yourString: function () {
      return this.form.userRole === "dismissedPerson"
        ? "your"
        : "the dismissed person's";
    },
    DoYouStringCont: function () {
      return this.form.userRole === "dismissedPerson"
        ? "do you"
        : "does the dismissed person";
    },


  },
  methods: {},
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
