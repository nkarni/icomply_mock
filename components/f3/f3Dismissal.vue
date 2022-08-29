<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Business size {{ timeFromDismissal }}</h6>
            <p>
              Count all full-time and part-time employees, including the
              Applicant. Only count casuals if they were regular casual
              employees
            </p>
            <p>
              You can find more information on our
              <a
                href="https://www.fwc.gov.au/what-minimum-period-employment"
                target="_blank"
                >website</a
              >.
            </p>
          </b-col>
          <b-col>
            <b-form-group
              :label="'How many employees did the business have when the Applicant was dismissed?'"
            >
              <b-form-select
                stacked
                v-model="form.businessDetails.numberOfEmployeesIsUnder"
                :options="numberOfEmployeesOptionsUnder"
              ></b-form-select>
            </b-form-group>
            <div
              v-if="
                parseInt(form.businessDetails.numberOfEmployeesIsUnder) > 0 &&
                parseInt(form.businessDetails.numberOfEmployeesIsUnder) < 16
              "
            >
              <notice
                class="mb-4"
                :borderClass="'red'"
                :message="'If the Respondent is a small business and followed the Small Business Fair Dismissal code you can object to the claim.'"
              ></notice>
              <objections :form="form" :objectionIndex="5"></objections>
            </div>
          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Start date</h6>
            <p>
              You can find out more information about when a dismissal takes
              effect on our
              <a
                href="https://www.fwc.gov.au/when-does-dismissal-take-effect"
                target="_blank"
                >website</a
              >.
            </p>
          </b-col>
          <b-col>
            <b-form-group>
              <label>{{ startDateLabel }}</label>
              <b-form-datepicker
                v-if="form.employmentStartDateNotApplicable !== true"
                v-model="form.employmentStartDate"
                class="mb-2"
              ></b-form-datepicker>
              <b-form-checkbox
                v-model="form.employmentStartDateNotApplicable"
                :value="true"
                :unchecked-value="false"
              >
                Not applicable
              </b-form-checkbox>
            </b-form-group>

            <b-form-group
              v-if="form.employmentStartDateNotApplicable === true"
              label="Please explain why"
            >
              <b-form-textarea
                v-model="form.employmentStartDateNotApplicableDetails"
              ></b-form-textarea>
            </b-form-group>

            <div v-if="form.employmentStartDate != '' && form.employmentStartDateNotApplicable !== true">
              <notice
                class="mb-4"
                :message="'Dev note: <br> Once date is selected for this question - form does a calculation to see if period between Start date and Notified date is less than 6 months ALSO form does calculation to see if period between Start date and Notified date is less than 12 months when value selected in business size is [1-4] [5-9] [10-14]. If either of these is true then following note and objection option appear:'"
              ></notice>
              <notice
                class="mb-4"
                borderClass="red"
                :message="'The Applicant must have been working for at least 6 months to qualify for unfair dismissal. If the Applicant worked for a business with less than 15 employees, the Applicant must have worked there for at least 12 months. This is called the minimum employment period for unfair dismissal cases.<a href=\'https://www.fwc.gov.au/what-minimum-period-employment\' target=\'_blank\'> Click here</a> to read more about the minimum Employment period.'"
              ></notice>
              <objections :form="form" :objectionIndex="4"></objections>
            </div>
          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Date notified</h6>
          </b-col>
          <b-col>
            <b-form-group>
              <label >{{ whatDateWereDismissedLabel }}</label>
              <b-form-datepicker
                v-model="form.employmentDismissedDate"
                @click="form.employmentDismissedDateNotApplicable = false"
                class="mb-2"
              ></b-form-datepicker>
           
              <b-form-checkbox
                v-model="form.employmentDismissedDateNotApplicable"
                :value="true"
                :unchecked-value="false"
              >
                Not applicable
              </b-form-checkbox>
            </b-form-group>
            <b-form-group
              v-if="form.employmentDismissedDateNotApplicable === true"
              label="Please explain why"
            >
              <b-form-textarea
                v-model="form.employmentDismissedDateNotApplicableDetails"
              ></b-form-textarea>
            </b-form-group>

            <div v-if="form.employmentDismissedDateNotApplicable === true">
              <notice
                class="mb-3"
                :borderClass="'red'"
                :message="'If the Applicant was not dismissed you can object to the claim.'"
              ></notice>

              <objections :form="form" :objectionIndex="2"></objections>
            </div>

            <div v-if="form.employmentDismissedDate != '' && form.employmentDismissedDateNotApplicable === false">
              <notice
                class="mb-4"
                :message="'Dev note: <br> Once date is selected for this question - form does a calculation to see if period between Start date and Notified date is less than 6 months ALSO form does calculation to see if period between Start date and Notified date is less than 12 months when value selected in business size is [1-4] [5-9] [10-14]. If either of these is true then following note and objection option appear:'"
              ></notice>
              <notice
                class="mb-4"
                borderClass="red"
                :message="'The Applicant must have been working for at least 6 months to qualify for unfair dismissal. If the Applicant worked for a business with less than 15 employees, the Applicant must have worked there for at least 12 months. This is called the minimum employment period for unfair dismissal cases.<a href=\'https://www.fwc.gov.au/what-minimum-period-employment\' target=\'_blank\'> Click here</a> to read more about the minimum Employment period.'"
              ></notice>
              <objections :form="form" :objectionIndex="4"></objections>
            </div>


      

            <b-form-group
              :label="'What date were they told they were being dismissed?'"
              v-if="form.wasDismissed === true"
            >
              <b-form-datepicker
                v-model="form.employmentDismissedDate"
                class="mb-2"
              ></b-form-datepicker>
            </b-form-group>

            <div v-if="employmentLength && employmentLength < 6">
              <notice
                class="mb-3"
                :message="'An employee may make an application for an unfair dismissal remedy if they have completed a minimum employment period of six months, or one year if the employer is a \'small business\'.  If you believe the Applicant has not met the minimum employment period you can raise an objection to the Application'"
              ></notice>
              <objections :form="form" :objectionIndex="4"></objections>
            </div>

            <div
              v-if="
                form.businessDetails.numberOfEmployeesIsUnder < 15 &&
                form.wasDismissed === true
              "
            >
              <b-form-group
                label="Did you follow the Small Business Fair Dismissal Code when you dismissed the employee?"
                v-if="form.independentContractor !== true"
              >
                <b-form-radio-group
                  v-model="form.followedCode"
                  :options="boolOptions"
                ></b-form-radio-group>
              </b-form-group>
              <b-form-group
                v-if="form.followedCode === 'Yes'"
                label="If you completed the Small Business Fair Dismissal checklist attach a copy"
              >
                <b-form-file
                  placeholder="Choose a file or drop it here..."
                  drop-placeholder="Drop file here..."
                >
                </b-form-file>
              </b-form-group>
            </div>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Last date</h6>
          </b-col>
          <b-col>

            <div>
             
            
               <b-form-group :label="employmentEndlabel">
                 <b-form-datepicker
                   v-model="form.employmentEndDate"
                   class="mb-2"
                 ></b-form-datepicker>
              
              <b-form-checkbox
                v-model="form.employmentEndDateNotApplicable"
                :value="true"
                :unchecked-value="false"
              >
                Not applicable
              </b-form-checkbox>
            </b-form-group>

               <b-form-group
              v-if="form.employmentEndDateNotApplicable === true"
              label="Please explain why"
            >
              <b-form-textarea
                v-model="form.employmentEndDateNotApplicableDetails"
              ></b-form-textarea>
            </b-form-group>

            <div v-if="form.employmentEndDate != '' && form.employmentEndDateNotApplicable !== true">
              <notice
                class="mb-4"
                :message="'Dev note: <br> Once date is selected for this question - form does a calculation to see if period between date the Applicant lodged and the date selected is 21 days or less. If the number of days is greater than 21 then warning note appears:'"
              ></notice>
              <notice
                class="mb-4"
                borderClass="red"
                :message="'If the Applicant has not lodged their application within 21 days of their dismissal taking effect you can object to the claim. There are some exceptions to the 21 day period.<a href=\'https://www.fwc.gov.au/timeframe-lodgment-0\' target=\'_blank\'> Click here</a> to read more about the timeframe for lodgment.'"
              ></notice>
              <objections :form="form" :objectionIndex="0"></objections>
            </div>

              

               <!-- <div v-if="timeFromDismissal && timeFromDismissal > 21">
                 <notice
                   class="mb-3"
                   message="An unfair dismissal application must be lodged with the Fair Work Commission within 21 days after the dismissal takes effect (weekends and national public holidays may impact this timeframe). You can read more about the 21 day time frame for lodgment on our <a href='https://www.fwc.gov.au/timeframe-lodgment-0\'>website</a> You can raise an objection to the application if you believe it has been lodged outside the 21 day timeframe"
                 ></notice>
                 <objections :form="form" :objectionIndex="0"></objections>
               </div>

               <notice
                 borderClass="nothing"
                 :message="'Dev note: <br>1. Validate that dismissal date is on or after employment start date <br>2. notification date must be on or after contract start date <br>3. validate that dates in the past for dismissal, employment start or employment notification'"
               >
               </notice> -->
            

             <!-- <div v-if="form.applicantStillWorksForBusiness === true">
               <b-form-group label="What date was their most recent shift?">
                 <b-form-datepicker
                   v-model="form.mostRecentShift"
                   class="mb-2"
                 ></b-form-datepicker>
               </b-form-group>
             </div> -->
           </div>

            </b-col>
            </b-row>
            </section>
            
      <section class="mb-4 pb-4">
        <b-row>
          <b-col cols="4">
            <h6>Tell us your side of the case</h6>
            <p>
              Read the Applicant’s documents and then briefly tell us your side:
            </p>
            <!-- <p>
              Write a response to what they have written.
            </p> -->
          </b-col>
          <b-col>
            <label>The employee wrote the following:</label>
            <div
              style="
                font-style: italic;
                border-left: 2px solid gray;
                padding-left: 8px;
              "
              class="ml-2 mb-4"
            >
              {{ form.employeeDescOfWhatHappened }}
            </div>
            <notice
              class="mb-3"
              message="Your former employee will see the answers you give in this form. This is so they can understand your side of the case. 
<br>If you are worried about particular information being passed on, don’t include it yet. Submit your completed form without it and then contact us to discuss whether you should send the information to us.
"
            ></notice>

            <b-form-group label="Write a response to what they’ve written">
              <b-form-textarea
                v-model="form.employerDescOfWhatHappened"
                rows="12"
                max-rows="18"
              ></b-form-textarea>
            </b-form-group>
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
import Objections from "../common/objections.vue";
export default {
  components: { entity, Notice, EntityAddress, Objections },
  name: "dismissal",
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
      engagementTypeOptions: [
        "An employee",
        "An independent contractor",
        "A volunteer",
        "Other",
      ],
      numberOfEmployeesOptionsUnder: [
        {
          text: "1 to 4 ",
          value: "4",
        },
        {
          text: "5 to 9 ",
          value: "10",
        },
        {
          text: "10 to 14 ",
          value: "15",
        },
        {
          text: "15 to 19 ",
          value: "20",
        },
        {
          text: "20 to 49",
          value: "50",
        },
        {
          text: "50 to 99",
          value: "100",
        },
        {
          text: "100 to 199",
          value: "200",
        },
        {
          text: "200 to 999",
          value: "1000",
        },
        {
          text: "over 1000",
          value: "999999999",
        },
      ],
    };
  },
  computed: {
    employmentLength() {
      if (
        this.form.employmentDismissedDate.length > 0 &&
        this.form.employmentStartDate.length > 0
      ) {
        return this.$moment(this.form.employmentDismissedDate).diff(
          this.$moment(this.form.employmentStartDate),
          "months"
        );
      }
      return null;
    },
    timeFromDismissal() {
      if (this.form.employmentEndDate.length > 0) {
        return this.$moment().diff(
          this.$moment(this.form.employmentEndDate),
          "days"
        );
      }
      return null;
    },
    employmentEndlabel: function () {
      // if (this.form.independentContractor === true) {
      //   return "What date did their contract end?";
      // }
      return "What date did the Applicant stop working for the business?";
    },
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
    startDateLabel() {
      // if (this.form.independentContractor !== true) {
      return "What date did the Applicant start working for the business?";
      // } else {
      //   return "What date did their contract start?";
      // }
    },
    wereTheyDismissedLabel() {
      if (this.form.independentContractor === true) {
        return "when were they told that their contract was ending?";
      }
      return "Were they dismissed?";
    },
    whatDateWereDismissedLabel() {
      if (this.form.independentContractor === true) {
        return "when were they told that their contract was ending?";
      }
      return "what date was the applicant told they were dismissed?";
    },
  },
  watch: {
    // Note: only simple paths. Expressions are not supported.
    'form.employmentDismissedDateNotApplicable'(newValue) {
      if(newValue === true){
        this.form.employmentDismissedDate = ''
      }
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
