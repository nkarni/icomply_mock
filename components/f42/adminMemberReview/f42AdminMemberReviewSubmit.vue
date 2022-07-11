<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col>
            <h5>
              Review the information provided by the proposed permit holder
            </h5>
            <p>
              Please check the information provided. Where the information you
              have provided differs than the information provided by the
              committee member - it is highlighted, please correct your
              records.
            </p>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>The committee member details</h6>
          </b-col>
          <b-col cols="8">
            <f-42-member-details-review
              :form="form"
            ></f-42-member-details-review>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Confirmation of the photo and signature</h6>
          </b-col>
          <b-col cols="8">
            TBD (should be part of the declaration?)
          </b-col>
        </b-row>
      </section>

       <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>The committee member declaration</h6>
            <p>The committee member has submitted the following declaration</p>
          </b-col>
          <b-col cols="8">
            <f-42-member-dec-review
              :form="form"
            ></f-42-member-dec-review>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Submit</h6>
            <p >
              Submit the form to the Commission
            </p>
          
          </b-col>
          <b-col>
            <b-col class="text-center mt-3">
              <b-button variant="primary" v-if="!form.committeeMember.isSameAsAdmin"
                >Submit</b-button
              >
              <b-button
                variant="primary"
                v-else
                >Confirm and submit to the Commission</b-button
              >
            </b-col>
          </b-col>
        </b-row>
      </section>
    </b-form>
  </div>
</template>

<script>
import entity from "../../common/entity.vue";
import EntityAddress from "../../common/entityAddress.vue";
import Notice from "../../common/notice.vue";
import reviewItem from "../../common/reviewItem.vue";
import f42HolderDetailsReview from "../common/f42HolderDetailsReview.vue";
import f42MemberDetailsReview from "../common/f42MemberDetailsReview.vue";
import f42HolderTrainingReview from "../common/f42HolderTrainingReview.vue";
import f42MemberDecReview from "../common/f42MemberDecReview.vue";


export default {
  components: {
    entity,
    Notice,
    EntityAddress,
    reviewItem,
    f42HolderDetailsReview,
    f42MemberDetailsReview,
    f42HolderTrainingReview,
    f42MemberDecReview
  },
  name: "f42AdminMemberReviewSubmit",
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
    phoneToString(phones) {
      var str = "";

      if (phones.length > 0) {
        phones.forEach((phone, i) => {
          if (phone.number !== "") {
            if (i > 0) {
              str += "<br>";
            }
            str += phone.number + " (" + phone.type + ")";
          }
        });
      }

      return str;
    },
  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
