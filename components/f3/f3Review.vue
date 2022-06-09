<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col>
            <h5>Review your submission</h5>
            <p>
              Please check the information you provided. You can go back and
              edit information as required by clicking on the pencil icon, or by
              navigation back to the relevant section.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div v-for="(section, index) of sections" :key="index" v-bind:id="index"
              :class="'mb-4  pb-4 ' + (index < 4 ? 'border-bottom border-secondary' : '')">
              <b-row>
                <b-col>
                  <h6>{{ section.label }}</h6>
                </b-col>
                <b-col class="text-right">
                  <b-button variant="link" class="p-0" @click.prevent="" v-b-tooltip.hover
                    title="Edit this section (coming soon)">
                    <b-icon icon="pencil" />
                  </b-button>
                </b-col>
              </b-row>
              <b-row v-for="(item, n) of section.data" :key="n" v-bind:id="n" class="mb-2">
                <b-col cols="4">
                  {{ item.label }}
                </b-col>
                <b-col cols="8" v-html="item.value"> </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
        <notice
          :message="'mockup notice: HC means hard coded, it will be dynamic and show provided info in the final build. Similarly, the link to the relevant tab for editing will be activated in the final build.'">
        </notice>
      </section>
       <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Research Consent</h6>
            We do research so we can improve our services. Sometimes we use
            external providers to do the research for us.
          </b-col>
          <b-col>
            <b-form-group
              :label="
                'Can we pass on ' +
                yourString +
                ' contact details to an external provider so they can invite you to take part in research?'
              "
            >
              <b-form-radio-group
                v-model="form.researchConsent"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary  mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Print a draft</h6>
            <p>When you submit the form a final PDF containing the full form information will be emailed to you. However, if you wish to print a draft before you submit the form you can do so.</p>
          </b-col>
          <b-col>

            <b-form-group>
             <b-button variant="outline-primary">Print a draft</b-button>
            </b-form-group>
          </b-col>
        </b-row>
      </section>
      <section class=" mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Confirm & Submit</h6>
          </b-col>
          <b-col>

            <b-form-group>
              <b-form-checkbox v-model="form.agreeToTerms" :value="true" :unchecked-value="false">
                I confirm that this form was filled by me {form filler's firstname and lastname}
                and that the information provided is true.
              </b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

      <b-row>
        <b-col class="text-center mt-3">
          <b-button variant="primary">Submit the form</b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import entity from "../common/entity.vue";
import EntityAddress from "../common/entityAddress.vue";
import Notice from "../common/notice.vue";
export default {
  components: { entity, Notice, EntityAddress },
  name: "review",
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
      return this.form.formFillerPersona === 'self' ? "you" : "the Applicant";
    },
    yourString: function () {
      return this.form.formFillerPersona === 'self' ? "your" : "the Applicant's";
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
          label: "Objections",
          data: [
             {
              label: 'Objections (HC)',
              value: '<p>The Applicant was not an employee <br> Details here</p><p>The dismissal was a case of genuine redundancy <br> Details here</p>'
            },
            {
              label: "Is there anything else you need to tell us?",
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
