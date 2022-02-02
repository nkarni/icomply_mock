<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col >
            <h6>Review your submission</h6>
            <p>
              Please check the information you provided. You can go back and
              edit information as required by clicking on the pencil icon, or by
              navigation back to the relevant section. <br /><br />When you are
              confident the information is correct proceed to confirm and submit
              the form.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col> 


      <div
        v-for="(section, index) of sections"
        :key="index"
        v-bind:id="index"
         class="mb-4"
      >
      <b-row>
        <b-col>
          <h6>{{section.label}}</h6>
          </b-col>
          <b-col class="text-right">
            <b-button
                          variant="link"
                          class="p-0"
                          @click.prevent=""
                          v-b-tooltip.hover
                          title="Edit this section (coming soon)"
                          ><b-icon icon="pencil"
                        /></b-button>
          </b-col>
          </b-row>
        <b-row
        v-for="(item, n) of section.data"
        :key="n"
        v-bind:id="n"
       class="mb-2"
        >
          <b-col cols="4">
          {{item.label}}
          </b-col>
          <b-col cols="8" v-html="item.value">
          </b-col>
          
        </b-row>
      
      </div>
            



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

      sections : [
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
               label: 'Contact person (HC)',
               value: 'Sam Smith<br>email: sam@smith.com<br>mobile: 0402 123 123, landline: 02 6677 5544'
            },
            {
               label: 'Will you need an interpreter?',
               value: this.boolToString(this.form.needsInterpreter) + (this.form.needsInterpreterLanguage.length > 0? ' (' + this.form.needsInterpreterLanguage + ')' : '')
            },
            {
               label: 'Do you have any accessibility requirements?',
               value: this.boolToString(this.form.needsAccessibility) + (this.form.needsAccessibilityDetails.length > 0? ' (' + this.form.needsAccessibilityDetails + ')' : '')
            },
             {
               label: 'Representative (HC)',
               value: 'John Lane, AArdvark Law Firm<br>email: john@aardvark.com.au<br> mobile: 0432 123 123 <br>Postal Address: 45 Main Street, Sydney 2000 NSW Australia'
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

    contactPersonName: function () {
        return this.personToString(this.form.businessDetails.contactPerson) 
    }

  },
  methods: {
    boolToString(val){
       if(val === true){
         return 'Yes' 
       }
        return 'No'
    },
    personToString(person){
      var str 
      // let personName = 'sdfsdfsdf'
      str = person.firstName + ' ' + person.lastName + ',jhglkjg'
      // console.log('str', str)

      str += ' ' + person.email
      
      if(person.email.length > 0){
        str =+ ' ' + person.email
      }
       if(person.phones.length > 0){
         person.phones.forEach(phone => {
           if(phone.phone !== ''){
             str += ' ' + phone.phone + ' (' + phone.type + ')'
           }
        })
        str += ' ' + person.email
      }
       console.log('person', person)
      console.log('str', str)
      return str

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
