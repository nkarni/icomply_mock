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

        <div class="indent-1 pl-3">
          <!-- About you -->
          <div class="mb-4 pb-4 border-bottom border-secondary">
            <b-row>
              <b-col>
                <h6>About you</h6>
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
            <review-item
              v-if="form.applyingForSelf === true"
              label="Are you the Applicant?"
              value="Yes"
            ></review-item>

            <div v-else-if="form.applyingForSelf === false">
              <review-item
                label="Are you the Applicant?"
                value="No, I am submitting the application on behalf of the applicant"
              ></review-item>

              <review-item
                label="What is your relationship to the applicant?"
                :value="
                  form.formFiller.isLawyerUnionOrPaidAgent === true
                    ? 'I am their lawyer or paid agent'
                    : 'Family or friend'
                "
              ></review-item>

              <review-item
                v-if="form.formFiller.isLawyerUnionOrPaidAgent === true"
                label="Your details (HC)"
                value="Mrs Jane Lane, AArdvark Law Firm<br>Email: john@aardvark.com.au<br> Mobile: 0432 123 123 <br>Postal Address: 45 Main Street, Sydney 2000 NSW Australia"
              ></review-item>
            </div>

            <review-item
              :label="AreYouStringReverse + ' over 18?'"
              :value="form.applicant.over18"
            ></review-item>

            <review-item
              :label="'Will ' + youString + ' need an interpreter?'"
              :value="boolToString(form.applicant.needsInterpreter)"
            ></review-item>

            <review-item
              :label="DoYouStringCont + ' have any accessibility requirements?'"
              :value="
                boolToString(form.applicant.needsAccessibility) +
                (form.applicant.needsAccessibilityDetails.length > 0
                  ? ' (' + form.applicant.needsAccessibilityDetails + ')'
                  : '')
              "
            >
            </review-item>

            <review-item
              :label="
                'Can we pass on ' +
                yourString +
                ' contact details to an external provider so they can invite you to take part in research?'
              "
              :value="boolToString(form.applicant.researchConsent)"
            >
            </review-item>
          </div>

          <!-- Contact details -->
          <div class="mb-4 pb-4 border-bottom border-secondary">
            <b-row>
              <b-col>
                <h6>Contact details</h6>
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
            <review-item
              :label="yourString + ' contact (HC)'"
              value="Mr. Sam Smith<br>Email: sam@smith.com<br>Mobile: 0402 123 123, Landline: 02 6677 5544<br>Postal address: 22 Main street, Sydney 2000 NSW Australia"
            ></review-item>
            <review-item
              :label="
                DoYouStringCont +
                ' have a representative (lawyer/union rep etc)?'
              "
              :value="boolToString(form.applicant.hasRep)"
            ></review-item>
            <review-item
              :label="yourString + ' representative (HC)'"
              value="Mrs John Barr, Barr Law Firm<br>Email: john@bar.com.au<br> Mobile: 0432 123 123 <br>Postal Address: 45 Main Street, Sydney 2000 NSW Australia"
            ></review-item>
          </div>

          <!-- Employer -->
          <div class="mb-4 pb-4 border-bottom border-secondary">
            <b-row>
              <b-col>
                <h6>Former employer</h6>
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
            <review-item
              :label="'Business details (HC)'"
              :value="'ABC pty ltd Trading as MY ABC, ABN: 12345678<br>13 Side Street, Sydney 2000 NSW Australia'"
            ></review-item>

            <review-item
              :label="'Is this the address ' + youString + ' worked at?'"
              :value="
                boolToString(
                  form.employerBusinessDetails
                    .businessAddressIsEmploymentAddress
                )
              "
            ></review-item>
            <review-item
              v-if="
                form.employerBusinessDetails
                  .businessAddressIsEmploymentAddress === false
              "
              :label="'What was the address ' + youString + ' worked at? (HC)'"
              :value="'45 Left Road, Sydney 2000 NSW Australia'"
            ></review-item>
            <review-item
              :label="'Contact person role'"
              :value="form.employerBusinessDetails.contactPerson.role"
            ></review-item>
            <review-item
              :label="'Contact person details (HC)'"
              value="Mr. Sam Smith<br>Email: sam@smith.com<br>Mobile: 0402 123 123, Landline: 02 6677 5544"
            ></review-item>
          </div>

          <!-- Dismissal -->
          <div class="mb-4 pb-4">
            <b-row>
              <b-col>
                <h6>The dismissal</h6>
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
            <review-item
              :label="'When did ' + yourString + ' employment start? (HC)'"
              :value="'2011'"
            ></review-item>
            <review-item
              :label="'When did ' + yourString + ' employment end? (HC)'"
              :value="'11 February 2020'"
            ></review-item>
            <review-item
              :label="
                'When ' + wereYouString + ' told about being dismissed? (HC)'
              "
              :value="'15 January 2020'"
            ></review-item>
            <review-item
              :label="'When did ' + yourString + ' dismissal take effect? (HC)'"
              :value="'15 February 2020'"
            ></review-item>
            <review-item
              :label="'Are you lodging this form within the 21 days limit?'"
              :value="boolToString(form.lodgingWithin21DaysLimit)"
            ></review-item>
            <review-item
              v-if="form.lodgingWithin21DaysLimit === false"
              :label="'The form may be late. Why is it being lodged late?'"
              :value="form.lodgingWithin21DaysLimitDetails"
            ></review-item>

            <review-item
              :label="'Have ' + youString + ' started any other claims?'"
              :value="boolToString(form.startedOtherClaims)"
            ></review-item>

            <review-item
              v-if="form.startedOtherClaims === true"
              :label="'Details of other claims'"
              :value="form.startedOtherClaimsDetails"
            ></review-item>
            <review-item
              :label="
                'What happened and why ' +
                DoYouStringCont +
                ' think it is unfair?'
              "
              :value="form.employeeDescOfWhatHappened"
            ></review-item>
            <review-item
              :label="'What outcome ' + DoYouString + ' want from this case?'"
              :value="form.employeeDesiredOutcomes"
            ></review-item>
          </div>
          <notice
            :message="'mockup notice: HC means hard coded, it will be dynamic and show provided info in the final build. Similarly, the link to the relevant tab for editing will be activated in the final build.'"
          ></notice>
        </div>
      </section>
      <section class="mb-4 pb-2 border-bottom border-secondary">
        <b-row>
          <b-col cols="4">
            <h6>Confirm</h6>
          </b-col>
          <b-col>
            <b-form-group>
              <b-form-checkbox
                v-model="form.agreeToTerms"
                :value="true"
                :unchecked-value="false"
              >
                I confirm that this form was filled by me {firstname} {lastname}
                and that the information provided is true.
              </b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4 pb-2 border-bottom border-secondary">
        <b-row>
          <b-col cols="4">
            <h6>Payment</h6>
            <p>It costs $74.90 to start an unfair dismissal case.</p> 

<p>If you can’t afford to pay the fee, you can ask us to waive it. Download and complete the Fee waiver form. Send it to us at the same time as you send us your unfair dismissal form.</p>
          </b-col>
          <b-col>
            <b-form-group :label="DoYouStringCont + ' require a fee waiver?'">
              <b-form-radio-group
                :options="boolOptions"
                v-model="form.requireFeeWaiver"
              >
              </b-form-radio-group>
            </b-form-group>

            <div v-if="form.requireFeeWaiver === true">
              <label
                >Step 1: <a href="">click here</a> to Download the fee waiver
                request form</label
              >
              <label>Step 2: sign the form you have downloaded</label>
              <label>Step 3: upload the signed fee waiver request form:</label>
              <b-form-file> </b-form-file>
            </div>
            <div v-else>
              <b-form-group
                :label="'The fee will be paid by'"
                v-if="form.applyingForSelf === false"
              >
                <b-form-radio-group
                  :options="['Me', 'The Applicant']"
                  v-model="form.feePaidBy"
                >
                </b-form-radio-group>
              </b-form-group>

              <b-form-group
                :label="'Payment method'"
                v-if="form.applyingForSelf === true || form.feePaidBy === 'Me'"
              >
                <b-form-radio-group
                  :options="['Pay online now', 'Pay offline']"
                  v-model="form.paymentMethod"
                >
                </b-form-radio-group>
              </b-form-group>
              <div v-if="form.paymentMethod === 'Pay online now' && form.feePaidBy !== 'The Applicant'">
                <b-form-group :label="'Name on card'">
                  <b-form-input v-model="form.cardName"></b-form-input>
                </b-form-group>
                <b-form-group :label="'Card number'">
                  <b-form-input v-model="form.cardNumber"></b-form-input>
                </b-form-group>
                <b-row>
                  <b-col cols="3">
                    <b-form-group :label="'Expiry'">
                      <b-form-input v-model="form.cardName"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="3">
                    <b-form-group :label="'CVV'">
                  <b-form-input v-model="form.cardCvv"></b-form-input>
                </b-form-group>
                  </b-col>
                </b-row>

                
              </div>
            </div>
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
import entity from "./entity.vue";
import EntityAddress from "./entityAddress.vue";
import Notice from "./notice.vue";
import ReviewItem from "./reviewItem.vue";
export default {
  components: { entity, Notice, EntityAddress, ReviewItem },
  name: "f2Rev",
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
    AreYouStringReverse: function () {
      return this.form.applyingForSelf ? "are you" : "is the Applicant";
    },
    additionalS: function () {
      return this.form.applyingForSelf ? "" : "s";
    },
    yoursString: function () {
      return this.form.applyingForSelf ? "yours" : "the Applicant/'s";
    },
    haveYouString: function () {
      return this.form.applyingForSelf ? "have you" : "has the Applicant";
    },

    contactPersonName: function () {
      return this.personToString(this.form.businessDetails.contactPerson);
    },

    sections: function () {
      return [];
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
      if (this.form.entities.applicant.details.numOfDependents < 0) return;
      if (
        this.form.entities.applicant.details.numOfDependents <
        this.form.entities.applicant.details.dependants.length
      ) {
        while (
          this.form.entities.applicant.details.numOfDependents <
          this.form.entities.applicant.details.dependants.length
        ) {
          this.form.entities.applicant.details.dependants.pop();
        }
      } else if (
        this.form.entities.applicant.details.numOfDependents >
        this.form.entities.applicant.details.dependants.length
      ) {
        while (
          this.form.entities.applicant.details.numOfDependents >
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
.indent-1 {
  border-left: 4px solid var(--primaryLighter) !important;
}
</style>
