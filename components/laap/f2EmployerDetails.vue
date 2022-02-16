<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Employer business details</h6>
            <p>
              We need to contact {{ yourString }} former employer to tell them
              {{ youString }} have started a case against them. We will send
              them a copy of this form with all your answers in it.
            </p>
            <p>
              During the case, we will call {{ yourString }} former employer
              <strong>the Respondent</strong>. This is because they are
              responding to {{ yoursString }} unfair dismissal case.
            </p>
            <p>
              We need the legal name of {{ yourString }} former employer. This
              may be different from their trading or business name. You can
              normally find it on your pay slips, PAYG payment summary,
              appointment letter or employment contract.
            </p>
          </b-col>
          <b-col>
            <b-form-group
              label="Please enter an ABN or business name and click Search"
            >
              <b-form-input
                v-model="form.employerBusinessDetails.businessNameString"
              ></b-form-input>
              <b-button
                variant="primary"
                style="float: right"
                class="mt-2"
                v-b-modal="`manual-abn`"
                >Search</b-button
              >
            </b-form-group>
            <b-modal :id="`manual-abn`" title="ABN Lookup">
              <template #modal-header="{ close }">
                <h6>ABN Lookup</h6>
                <!-- Emulate built in modal header close button action -->
                <i
                  @click="close()"
                  v-b-tooltip.hover
                  title="Close"
                  class="bi bi-x fs-3 removeIcon"
                ></i>
              </template>

              <b-row>
                <b-col>
                  <b-form-group
                    label="We've found a few matches, please select the correct one."
                    class="mt-4"
                  >
                    <b-form-radio-group
                      v-model="
                        form.employerBusinessDetails.businessDetailsString
                      "
                      :options="[
                        'XYZ trading, ABN 98989898',
                        'Comfy Beds trading as Best Beds, ABN 45454545',
                      ]"
                      @change="onSelectedNewAbn"
                    ></b-form-radio-group>
                  </b-form-group>
                  <notice
                    message="Dev notice:<br>When the user selects a new business, the modal closes, provided business address is updated, and a toast (a floating message at the top right of the screen) will inform the user that it was updated."
                  ></notice>
                </b-col>
              </b-row>
            </b-modal>
            <entity-address
              :addressLabel="'Postal address'"
              :address="form.employerBusinessDetails.postalAddress"
              :addressHelp="'You can select another address - start typing the correct address and select one of the options'"
              :addressString="form.employerBusinessDetails.postalAddressString"
            ></entity-address>

            <b-form-group
              :label="'Is this the address ' + youString + ' worked at?'"
            >
              <b-form-radio-group
                v-model="
                  form.employerBusinessDetails
                    .businessAddressIsEmploymentAddress
                "
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>

            <entity-address
              v-if="
                form.employerBusinessDetails
                  .businessAddressIsEmploymentAddress === false
              "
              :addressLabel="
                'What was the address ' + youString + ' worked at?'
              "
              :address="form.employerBusinessDetails.employmentAddress"
              :addressHelp="'You can select another address - start typing the correct address and select one of the options'"
              :addressString="form.employerBusinessDetails.postalAddressString"
            ></entity-address>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Contact Person</h6>
            <p>
              Please provide details of a contact person at
              {{ yourString }} former employer.
            </p>
          </b-col>
          <b-col>
            <b-form-group label="What is their role?">
              <b-form-input
                :v-model="form.employerBusinessDetails.contactPerson.role"
              ></b-form-input>
            </b-form-group>

            <entity
              :entity="form.employerBusinessDetails.contactPerson"
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
    </b-form>
  </div>
</template>

<script>
import entity from "./entity.vue";
import EntityAddress from "./entityAddress.vue";
import Notice from "./notice.vue";
export default {
  components: { entity, Notice, EntityAddress },
  name: "f2EmployerDetails",
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
