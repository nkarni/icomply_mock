<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>The Proposed Permit Holder</h6>

            <p>Provide details of the Proposed Permit Holder.</p>
            <p>
              This information will be reviewed and can be edited by the
              Proposed Permit Holder if incorrect.
            </p>
            <p>
              Throughout this form - all fields are mandatory unless
              specifically marked as optional.
            </p>
          </b-col>
          <b-col>
             <notice
             class="mb-3"
            :message="'Legal name must match drivers license or name on an official ID document.'"
          ></notice>
            <entity
              :entity="form.permitHolder"
              showFirstName
              showLastName
              showEmail
              :firstNameLabel="'Legal given name(s)'"
              :lastNameLabel="'Legal surname'"
              showMobilePhone
              :emailDesc="'The email address will be used to notify the Proposed Permit holder'"
              :mobilePhoneDesc="'The mobile number will be used to notify the Proposed Permit holder'"
              :mobilePhoneLabel="'Mobile phone (optional)'"
            >
            </entity>

            <b-form-group label="The Proposed Permit Holder is:">
              <b-form-radio-group
                stacked
                v-model="form.permitHolder.employeeOrOfficeHolder"
                :options="['an Office Holder', 'an Employee']"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group label="What is the office or position held?">
              <b-form-input v-model="form.permitHolder.positionOrOfficeHeld">
              </b-form-input>
            </b-form-group>

            <b-form-group
              label="Has this person previously held an entry permit?"
            >
              <b-form-radio-group
                v-model="form.permitHolder.previouslyHeldAnEntryPermit"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Permit training (optional)</h6>
            <p>
              You can provide further information on behalf of the Proposed
              Permit Holder.
            </p>
            <p>
              Although this is optional, it will help to improve the process and
              make it faster and more efficient (temporary text!)
            </p>
          </b-col>
          <b-col>
            <b-form-group
              label="Do you have access to their training information (including a digital copy of the training document)?"
            >
              <b-form-radio-group
                :options="boolOptions"
                v-model="form.admin.hasHolderTrainingInfo"
              ></b-form-radio-group>
            </b-form-group>
            <div v-if="form.admin.hasHolderTrainingInfo === true">
              <div
                v-for="(training, index) of form.permitHolder.trainings"
                :key="index"
                v-bind:id="index"
              >
                <b-row>
                  <b-col>
                    <b-form-group label="Name of training completed:">
                      <b-form-select
                        v-model="
                          form.permitHolder.trainings[index].trainingName
                        "
                        :options="['Australian Council of Trade Unions (ACTU)']"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group label="Method of training:">
                      <b-form-radio-group
                        options="['Online', 'In Person]"
                        v-model="
                          form.permitHolder.trainings[index].trainingMethod
                        "
                      ></b-form-radio-group>
                    </b-form-group>
                    <b-form-group label="Date training completed:">
                      <b-form-datepicker
                        v-model="
                          form.permitHolder.trainings[index]
                            .trainingCompletionDate
                        "
                      ></b-form-datepicker>
                    </b-form-group>
                    <b-form-group
                      label="Attach a copy of permit training"
                      description="Short explanation about how the file will be used."
                    >
                      <b-form-file
                        v-model="
                          form.permitHolder.trainings[index].trainingFile
                        "
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                      ></b-form-file>
                    </b-form-group>
                  </b-col>
                  <b-col cols="1" class="align-middle">
                    <!-- <b-button
                            variant="link"
                            class="p-0"
                            @click.prevent="removePhone(index)"
                            v-b-tooltip.hover
                            title="Remove"
                            ><b-icon icon="x-circle"
                          /></b-button> -->
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group
                      v-if="showIsSafePhone"
                      :label="safePhoneLabel"
                      class="mb-0"
                    >
                      <b-form-radio-group
                        v-model="entity.phones[index].isSafe"
                        :options="boolOptions"
                      ></b-form-radio-group>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
      </section>
      <section class=" mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Passport photograph (optional)</h6>
            <p>
              Provide Passport photograph of the Proposed Permit Holder that
              follows the FWC requirements. (LINK TO REQUIREMENTS HERE?)
            </p>
          </b-col>
          <b-col>
            <b-form-group
              label="Do you have access to a recent passport photo of the Proposed Permit Holder?"
            >
              <b-form-radio-group
                :options="boolOptions"
                v-model="form.admin.hasHolderPhoto"
              ></b-form-radio-group>
            </b-form-group>
            <div v-if="form.admin.hasHolderPhoto === true">
              <b-form-group
                label="Attach a passport photograph"
                description="Short explanation about how the file will be used."
              >
                <b-form-file
                  v-model="form.permitHolder.photoFile"
                  placeholder="Choose a file or drop it here..."
                  drop-placeholder="Drop file here..."
                ></b-form-file>
              </b-form-group>
            </div>
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
  name: "holderDetails",
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
