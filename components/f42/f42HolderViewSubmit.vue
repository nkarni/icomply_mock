<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Right of entry training</h6>
          </b-col>
          <b-col>
            <b-form-group>
              <div v-if="form.permitHolder.trainings.length > 0">
                <div
                  v-for="(training, index) of form.permitHolder.trainings"
                  :key="index"
                  v-bind:id="index"
                  class="mb-2"
                >
                  Name: {{ training.trainingName }}<br />
                  Method: {{ training.trainingMethod }}<br />Completed on:
                  {{ training.trainingCompletionDate }}<br />Evidence:
                  <a target="_blank" href="">Click Here</a>
                </div>
              </div>

              <div v-else>No training details provided.</div>
            </b-form-group>
          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="">
            <h6>Declaration</h6>
            <label>Answer each question in the declaration below.</label>

            <notice
              class="mb-2 danger"
              :borderClass="'red'"
              message="<p>Giving false or misleading information is a serious offence. A person who:
                            <ul>
                                <li>knowingly or recklessly makes a false or misleading statement in an application for
                                    an entry permit; or</li>
                                <li>knowingly gives false or misleading information in an application for an entry
                                    permit</li>
                            </ul>
                            is guilty of an offence, the punishment for which is imprisonment for up to 12 months if
                                the statement is made or information is provided knowingly, or up to 6 months if the
                                statement is made recklessly - see Part 7.4, s.136 and s.137.1 of the Criminal Code.</p>"
            ></notice>
            <notice
              class="mb-2"
              message=" Section 513(2) of the Fair Work Act 2009 has the effect that certain offences do not need to be disclosed.
"
            ></notice>

            <p>
              This is a declaration by the proposed permit holder in support of
              an application to the Fair Work Commission under s.512 of the Fair
              Work Act 2009 for an entry permit.
            </p>

            <p>
              I, <br />James Paul Roberts <br />positionName<br />Of orgName,
              branch, full streetAddress
            </p>
            <p>Declare that each answer I give below is true and correct:</p>
            <f-42-holder-super-details
              :form="form"
              :dec="form.permitHolder.dec"
            ></f-42-holder-super-details>
           
          </b-col>
        </b-row>
      </section>
        <section class="border-bottom border-secondary  mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Signature</h6>
          </b-col>
          <b-col>
            <b-row>
              <b-col cols="6">
                <b-form-group label="Name">
                  <b-form-input  v-model="form.permitHolder.dec.signedName">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Date">
                  <b-form-datepicker placeholder=""  v-model="form.permitHolder.dec.signedDate">
                    </b-form-datepicker>
                  </b-form-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4 pb-2">
        <b-row>
          <b-col>
            <h5>Submit</h5>
            <p></p>

            <p v-if="form.permitHolder.confirmInfo === false">
              The form will be sent to the administrator for review and
              correction.
            </p>
            <p v-else>
              The form will be submitted for verification by a member of
              Committee of Management and passed on to FWC for review.
            </p>
            <b-col class="text-center mt-3">
              <b-button variant="primary">Submit the form</b-button>
            </b-col>
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
import f42HolderSuperDetails from "./common/f42HolderSuperDetails.vue";
export default {
  components: { entity, Notice, EntityAddress, f42HolderSuperDetails },
  name: "f42HolderViewSubmit",
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

    contactPersonName: function () {
      return this.personToString(this.form.businessDetails.contactPerson);
    },

    sections: function () {
      return [
        {
          label: "About you",
          data: [
            {
              label: "Business name and ABN",
              value: this.form.businessDetails.businessDetailsString,
            },
            {
              label: "Business postal address",
              value: this.form.businessDetails.postalAddressString,
            },
            {
              label: "Industry",
              value:
                this.form.businessDetails.industry +
                (this.form.businessDetails.industryDetails !== ""
                  ? ": " + this.form.businessDetails.industryDetails
                  : ""),
            },
            {
              label: "Contact person (HC)",
              value:
                "Mr. Sam Smith<br>email: sam@smith.com<br>mobile: 0402 123 123, landline: 02 6677 5544",
            },
            {
              label: "Will you need an interpreter?",
              value:
                this.boolToString(this.form.needsInterpreter) +
                (this.form.needsInterpreterLanguage.length > 0
                  ? " (" + this.form.needsInterpreterLanguage + ")"
                  : ""),
            },
            {
              label: "Do you have any accessibility requirements?",
              value:
                this.boolToString(this.form.needsAccessibility) +
                (this.form.needsAccessibilityDetails.length > 0
                  ? " (" + this.form.needsAccessibilityDetails + ")"
                  : ""),
            },
            {
              label: "Representative (HC)",
              value:
                "Mrs Jane Lane, AArdvark Law Firm<br>email: john@aardvark.com.au<br> mobile: 0432 123 123 <br>Postal Address: 45 Main Street, Sydney 2000 NSW Australia",
            },
            {
              label:
                "Can we pass on your contact details to an external provider so they can invite you to take part in research?",
              value: this.boolToString(this.form.researchConsent),
            },
          ],
        },
        {
          label: "About the employee",
          data: [
            {
              label: "Name",
              value:
                this.form.employeeFirstName + " " + this.form.employeeLastName,
            },
            {
              label: "Case number:",
              value: this.form.caseNumber,
            },
          ],
        },
        {
          label: "About the business",
          data: [
            {
              label:
                "How many employees did your business have when the employee was dismissed? (HC)",
              value: "10 to 14 employees",
            },
            {
              label: "What was the employee's weekly wage?",
              value: this.form.employeeWeeklyWage,
            },
            {
              label: "Did they get any other benefits?",
              value:
                this.boolToString(this.form.employeeHasOtherBenefits) +
                (this.form.employeeHasOtherBenefitsDetails.length > 0
                  ? " (" + this.form.employeeHasOtherBenefitsDetails + ")"
                  : ""),
            },
            {
              label: "Were they covered by an award or enterprise agreement?",
              value:
                this.boolToString(this.form.employeeHasAwardAgreement) +
                (this.form.employeeHasAwardAgreement === true
                  ? " (Award name: " +
                    this.form.employeeAwardAgreementName +
                    ", Award number: " +
                    this.form.employeeAwardAgreementNumber +
                    ")"
                  : ""),
            },
          ],
        },
        {
          label: "The dismissal",
          data: [
            {
              label:
                "Did you follow the Small Business Fair Dismissal Code when you dismissed the employee?",
              value: this.form.followedCode,
            },
            {
              label: "What happened?",
              value: this.form.employerDescOfWhatHappened,
            },
            {
              label: "Were they engaged as an independent contractor?",
              value: this.boolToString(this.form.independentContractor),
            },
            {
              label: "What date did they start? (HC)",
              value: "22 February 2020",
            },
            {
              label: "What date were they told they were being dismissed? (HC)",
              value: "22 December 2021",
            },
            {
              label: "What date did their employment end? (HC)",
              value: "22 January 2022",
            },
          ],
        },
        {
          label: "Other Details",
          data: [
            {
              label: "Is there anything else you need to tell us??",
              value: this.form.otherInfo,
            },
          ],
        },
      ];
    },
  },
  methods: {
    boolToString(val) {
      if (val === true) {
        return "Yes";
      }
      return "No";
    },
    personToString(person) {
      var str;
      // let personName = 'sdfsdfsdf'
      str = person.firstName + " " + person.lastName + ",jhglkjg";
      // console.log('str', str)

      str += " " + person.email;

      if (person.email.length > 0) {
        str = +" " + person.email;
      }
      if (person.phones.length > 0) {
        person.phones.forEach((phone) => {
          if (phone.phone !== "") {
            str += " " + phone.phone + " (" + phone.type + ")";
          }
        });
        str += " " + person.email;
      }
      console.log("person", person);
      console.log("str", str);
      return str;
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
