<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Review your submission</h6>
            <p>
              Please check the information you provided. You can go back and
              edit information as required by clicking on the pencil icon, or by
              navigation back to the relevant section. <br /><br />When you are
              confident the information is correct proceed to confirm and submit
              the form.
            </p>
          </b-col>
          <b-col> 

            



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

      t : [
        {
          label: 'About you',
          data: [
            {
               label: 'Business name and ABN',
               value: this.form.businessDetails.businessDetailsString
            },
            {
               label: 'Business postal address',
               value: this.form.businessDetails.postalAddressString
            },
            {
               label: 'Industry',
               value: (this.form.businessDetails.industry !== '' ? this.form.businessDetails.industry : this.form.businessDetails.industryDetails)
            },
            {
               label: 'Contact person name',
               value: this.form.businessDetails.contactPerson.firstName + ' ' + this.form.businessDetails.contactPerson.firstName
            },
            {
               label: 'Contact person email',
               value: this.form.businessDetails.contactPerson.email
            },
            {
               label: 'Contact person phone',
               value: (this.form.businessDetails.contactPerson.phones.length > 0 ? this.form.businessDetails.contactPerson.phones[0].phone + ' (' + this.form.businessDetails.contactPerson.phones[0].type + ')' : '')
            },
            {
               label: 'Will you need an interpreter?',
               value: this.form.needsInterpreter + (form.needsInterpreterLanguage.length > 0? '(' + form.needsInterpreterLanguage + ')' : '')
            },
            {
               label: 'Do you have any accessibility requirements?',
               value: this.form.needsAccessibility + (form.needsAccessibilityDetails.length > 0? '(' + form.needsAccessibilityDetails + ')' : '')
            },
             {
               label: 'Do you have a representative?',
               value: boolToString(this.form.hasRep)
            }
          ]
        },
         {
          label: 'About you',
          data: [
            {
               label: 'Business name and ABN',
               value: this.form.businessDetails.businessDetailsString
            },
            {
               label: 'Business postal address',
               value: this.form.businessDetails.postalAddressString
            },
            {
               label: 'Industry',
               value: (this.form.businessDetails.industry !== '' ? this.form.businessDetails.industry : this.form.businessDetails.industryDetails)
            },
            {
               label: 'Contact person name',
               value: this.form.businessDetails.contactPerson.firstName + ' ' + this.form.businessDetails.contactPerson.firstName
            },
            {
               label: 'Contact person email',
               value: this.form.businessDetails.contactPerson.email
            },
            {
               label: 'Contact person phone',
               value: (this.form.businessDetails.contactPerson.phones.length > 0 ? this.form.businessDetails.contactPerson.phones[0].phone + ' (' + this.form.businessDetails.contactPerson.phones[0].type + ')' : '')
            }
          ]
        }
      ],

      en: {
        businessDetails: {
          businessDetailsString: "ABC pty ltd Trading as MY ABC, ABN: 12345678",
          name: "",
          abn: "",
          postalAddress: {
            line1: "",
            line2: "",
            suburb: "",
            postcode: "",
            state: "",
            country: "",
          },
          postalAddressString: "22 Main street, Sydney NSW 2000",
          industryDetails: "",
          industry: "",
          contactPerson: {
            firstName: "",
            lastName: "",
            email: "",
            phones: [
              {
                type: "",
                number: "",
                isSafe: null,
              },
            ],
          },
          numberOfEmployeesIsUnder: 0,
        },
        needsInterpreter: null,
        needsInterpreterLanguage: "",
        needsAccessibility: null,
        needsAccessibilityDetails: "",
        researchConsent: null,
        rep: {
          firstName: "",
          lastName: "",
          email: "",
          phones: [
            {
              type: "",
              number: "",
              isSafe: null,
            },
          ],
          postalAddress: {
            line1: "",
            line2: "",
            suburb: "",
            postcode: "",
            state: "",
            country: "",
          },
        },
        employeeFirstName: "John",
        employeeLastName: "Smith",
        caseNumber: "ABC123",
        employeeWeeklyWage: "",
        employeeHasOtherBenefits: null,
        employeeHasOtherBenefitsDetails: "",
        employeeHasAwardAgreement: null,
        employeeAwardAgreementName: "",
        employeeAwardAgreementNumber: "",
        followedCode: "",
        employeeDescOfWhatHappened: "Their input will show here....",
        employerDescOfWhatHappened: "",
        independentContractor: null,
        employmentStartDate: "",
        employmentDismissedDate: "",
        employmentEndDate: "",
        otherInfo: "",
      },
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
    boolToString(){
       if(val){
         return 'Yes' 
       }
        return 'No'
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
