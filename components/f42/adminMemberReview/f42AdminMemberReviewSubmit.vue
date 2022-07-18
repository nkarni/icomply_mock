<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col>
            <div v-if="form.committeeMember.isSameAsAdmin">
              <h5>
                Answer each question in the declaration below
              </h5>
              <!-- <p>
                You have already checked and confirmed the information below.
              </p> -->
            </div>
            <div v-else>
              <h5>
              Review the information provided by the member.
            </h5>
            <p>
              Please check the information provided. Where the information you
              have provided differs than the information provided by the
              committee member - it is highlighted, please correct your
              records.
            </p>
            </div>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Your details</h6>
          </b-col>
          <b-col cols="8">
            <f-42-member-details-review
              :form="form"
            ></f-42-member-details-review>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-2" v-if="!form.committeeMember.isSameAsAdmin === true">
        <b-row>
          <b-col cols="4">
            <h6>Confirmation of the photo and signature</h6>
          </b-col>
          <b-col cols="8"> TBD (should be part of the declaration?) </b-col>
        </b-row>
      </section>

        <section class=" mb-4 pb-2 border-bottom border-secondary" v-else>
                <b-row>
                    <b-col cols="4">
                        <h6>Proposed permit holder photograph & signature</h6>
                    </b-col>
                    <b-col>

                        TBD (they can see it in the last tab, should we just ask them to confirm it is true?)

                    </b-col>
                </b-row>
            </section>

           



      <section class="border-bottom border-secondary mb-4 pb-2" v-if="!form.committeeMember.isSameAsAdmin === true">
        <b-row>
          <b-col cols="4">
            <h6>The committee member declaration</h6>
            <p>The committee member has submitted the following declaration</p>
          </b-col>
          <b-col cols="8">
            <f-42-member-dec-review :form="form"></f-42-member-dec-review>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-2" v-else>
        <b-row>
          <b-col cols="4">
            <h6>The committee member declaration</h6>
            <p>Answer each question in the declaration below.</p>
          </b-col>
          <b-col cols="8">
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
              This is a declaration in support of an application to the Fair Work Commission under s.512 of the Fair
              Work Act 2009 for an entry permit, for the following proposed permit holder:
            </p>
            <p>
              Sam Jonhn Smith
            </p>
            <p>
              I, <br>Don Burrows, <br> officeHeld <br>
              Of orgName, branch, full streetAddress
            </p>
            <p>
              Declare that:
            <ol>
              <li>Having made proper inquiries, I believe that the proposed permit holder is a fit and proper person to
                hold an entry permit.</li>
              <li> Each answer I give below is true and correct to the best of my knowledge:
              </li>
            </ol>


            </p>

            
            <f-42-member-dec-comp :form="form" :dec="form.committeeMember.dec"></f-42-member-dec-comp>
            <div v-if="form.committeeMember.dec.beenDisqualified === false || form.committeeMember.dec.beenDisqualifiedDetails.length > 2">
             <notice class="mb-2"
              :message="'The Commission can take into account any other matter that it considers relevant to whether the proposed permit holder is a fit and proper person to hold a permit. This may include adverse comments made about the proposed permit holder in a Commission or court decision, regardless of whether the proposed permit holder was a party to the proceeding.'">
            </notice>

            <!-- <f-42-holder-super-details :form="form" :dec="form.committeeMember.dec"></f-42-holder-super-details> -->
            <b-form-group
              :label="'Are you aware of any other matters that may be relevant to whether the proposed permit holder is a fit and proper person to hold a permit?'">
              <b-form-radio-group v-model="form.committeeMember.dec.awareOfMatters" :options="boolOptions">
              </b-form-radio-group>
            </b-form-group>

            <b-form-group label="Please provide details" v-if="form.committeeMember.dec.awareOfMatters === true">
              <b-form-textarea v-model="form.committeeMember.dec.awareOfMattersDetails"></b-form-textarea>
            </b-form-group>


             

            <b-form-group
            v-if="form.committeeMember.dec.awareOfMatters === false || form.committeeMember.dec.awareOfMattersDetails.length > 2"
              label="Describe the inquiries you made and what you did to satisfy yourself that the proposed permit holder meets the permit qualification matters listed in s.513(1)(b) to (f) of the Fair Work Act 2009:">
              <b-form-textarea v-model="form.committeeMember.inquiries" rows="6" max-rows="12"></b-form-textarea>
            </b-form-group>
            </div>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Submit</h6>
            <p>Submit the form to the Commission</p>
          </b-col>
          <b-col>
            <b-col class="text-center mt-3">
              <b-button
                variant="primary"
                v-if="!form.committeeMember.isSameAsAdmin"
                >Submit</b-button
              >
              <b-button variant="primary" v-else
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
    f42MemberDecReview,
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
