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
            :message="'Tell us the proposed permit holder’s full legal name, including their middle name(s). If they don\’t have a middle name, write \'N/A\'.<br><br>Legal name must match drivers license or name on an official ID document.'"
          ></notice>
            <entity
              :entity="form.permitHolder"
              showFirstName
              showLastName
              showMiddleName
              showEmail
              :firstNameLabel="'Legal given name(s)'"
              :lastNameLabel="'Legal surname'"
              :middleNameLabel="'Middle name'"
              :showPreferredName="true"
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

            <b-form-group label="What is their office or position?">
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

              <b-form-group label="What is their most recent or current permit number?" v-if="form.permitHolder.previouslyHeldAnEntryPermit === true">
              <b-form-input v-model="form.permitHolder.previousPermitNumber">
              </b-form-input>
            </b-form-group>

             <b-form-group
              label="Has that permit been returned?"
              v-if="form.permitHolder.previouslyHeldAnEntryPermit === true"
            >
              <b-form-radio-group
                v-model="form.permitHolder.previousPermitReturned"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
              <b-form-group
      label="Why has it not been returned?"
      v-if="form.permitHolder.previousPermitReturned === false"
    >
      <b-form-input v-model="form.permitHolder.previousPermitNotReturnedReason">
      </b-form-input>
    </b-form-group>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Permit training</h6>
            <p>Give details of the training completed and the date it was completed.</p><p>
Attach evidence showing the proposed permit holder has successfully completed the relevant training. 
</p> <p>See Rule 51 of the Fair Work Commission Rules 2013. </p>
<p> You can find information about right of entry training on our website.
            </p>


            <!-- <p>
              You can provide further information on behalf of the Proposed
              Permit Holder.
            </p>
            <p>
              Although this is optional, it will help to improve the process and
              make it faster and more efficient (temporary text!)
            </p> -->
          </b-col>
          <b-col>
            <!-- <b-form-group
              label="Do you have access to their training information (including evidence of completion)?"
            >
              <b-form-radio-group
                :options="boolOptions"
                v-model="form.admin.hasHolderTrainingInfo"
              ></b-form-radio-group>
            </b-form-group> -->
            <div >
              <f-42-training :form="form"></f-42-training>
            </div>
          </b-col>
        </b-row>
      </section>
      <section class=" mb-4 pb-2 border-bottom border-secondary">
        <b-row>
          <b-col cols="4">
            <h6>Photograph</h6>
            <p>
              Provide a photograph of the Proposed Permit Holder that
              follows the FWC requirements <a href="https://asset.fwc.gov.au/documents/documents/forms/form_42c.pdf">click here</a> for more information.
            </p>
          </b-col>
          <b-col>
            <!-- <b-form-group
              label="Do you have access to a recent passport photo of the Proposed Permit Holder?"
            >
              <b-form-radio-group
                :options="boolOptions"
                v-model="form.admin.hasHolderPhoto"
              ></b-form-radio-group>
            </b-form-group> -->
            <div >
                            <notice class="mb-2" message="Only .jpg and .jpeg files are accepted, file size limit is 5MB"></notice>

              <b-form-group
                label="Attach a photograph"
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

  <section class=" mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Other information</h6>
            
          </b-col>
          <b-col>
            
            <f-42-holder-super-details :form="form"></f-42-holder-super-details>
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
import f42Training from "./f42/f42Training.vue";
import f42HolderSuperDetails from  "./f42/f42HolderSuperDetails.vue";
export default {
  components: { entity, Notice, EntityAddress, AbnLookup, f42Training , f42HolderSuperDetails},
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
