<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Employment dates</h6>
            <p>
              <strong
                >There is a minimum employment period for unfair dismissal
                cases:</strong
              ><br />
              You must have been working for your employer for at least 6 months
              to qualify for unfair dismissal. If you worked for a business with
              less than 15 employees, you must have worked there for at least 12
              months. This is called the minimum employment period for unfair
              dismissal cases.
            </p>
            <p>If you don't know the exact date, you can give an estimate.</p>
          </b-col>
          <b-col>
            <vague-date
              :date="form.employmentStart"
              dateLabel="When did your employment start?"
              class="mb-4"
            ></vague-date>
            <notice
              message="Are you sure you have selected the correct date? Please check the minimum employment period. If it is less than min period you may not be covered by unfair dismissal laws.<br><small>This message will only show if an exact end date was entered and it is less than 6 months from today.</small>"
            ></notice>

            <br />

            <vague-date
              :date="form.employmentEnd"
              dateLabel="When did your employment end?"
            ></vague-date>
<br />
            <vague-date
              :date="form.dismissalTold"
              dateLabel="When were you told you were being dismissed?"
            ></vague-date>
          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Effective dismissal date</h6>
            <p>
              This is generally the last day of your employment. If you didn’t
              find out you were being dismissed until after your last day, then
              it’s generally the day you found out you were being dismissed. You
              can find out more about
              <a href="">when a dismissal takes effect</a> on our website.
            </p>
          </b-col>
          <b-col>
            <vague-date
              :date="form.effectiveDismissalDate"
              dateLabel="When did your dismissal take effect?"
              class="mb-4"
            ></vague-date>
          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>21 days limit</h6>
            <p>
              The 21-day time limit starts the day after your dismissal took
              effect. Weekends and public holidays are counted in the 21 days.
              We must receive your form within this 21-day period. You can read
              more about <a href="">how the 21 days is calculated</a> on our
              website.
            </p>
            <p>
              Your case may only go ahead if there are
              <strong>exceptional circumstances</strong>. If you think your
              circumstances are exceptional, tell us why and continue to lodge
              your form. We may ask you to provide extra information or evidence
              later if we need it.
            </p>
            <notice
              message="<small>Dev notice: This section will only show if an exact date was provided for effective dismissal AND that date is more than 21 days from today</small>"
            ></notice>
          </b-col>
          <b-col>
            <b-form-group
              label="Are you lodging this form within the 21 days limit?"
            >
              <b-form-radio-group
                v-model="form.lodgingWithin21DaysLimit"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group
              label="Your form may be late. Why are you lodging it late?"
              v-if="form.lodgingWithin21DaysLimit === false"
            >
              <b-form-textarea
                v-model="form.lodgingWithin21DaysLimitDetails"
                rows="6"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Other claims</h6>
            <p>
              Tell us about any other claims that were started about your
              dismissal at the Fair Work Commission or somewhere else (e.g. the
              Human Rights Commission)
            </p>
          </b-col>
          <b-col>
            <b-form-group label="Have you started any other claims?">
              <b-form-radio-group
                v-model="form.startedOtherClaims"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group
              label="Please provide details"
              v-if="form.startedOtherClaims === true"
            >
              <b-form-textarea
                v-model="form.startedOtherClaimsDetails"
                rows="6"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

         <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Your dismissal</h6>
            <p>
              Tell us about your dismissal. What happened and why do you think it was unfair?  
            </p>
            <p>
              We will send a copy of this to your former employer. This is so they can understand your side of the case. 
            </p>
            <p>
              If you are worried about particular information being passed on, don’t include it yet. Lodge your completed form within the 21-day time limit and then contact us to talk about whether you should send the information to us.
            </p>
          </b-col>
          <b-col>
           
            <b-form-group
              label="What happened and why do you think it is unfair?"
            >
              <b-form-textarea
                v-model="form.employeeDescOfWhatHappened"
                rows="9"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

           <section class="mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Desired outcome</h6>
            <p>
              There are only two outcomes the Commission can order if we decide that your dismissal was unfair: compensation for lost wages or getting you your job back. 
 
            </p>
            <p>
             You can ask for other things at conciliation, but you’ll only get them if the employer agrees. For example, the employer may agree to pay out your notice period or to giving a statement of service to help you get your next job. 

            </p>
            <p>
            You can find out more about <a href="">possible outcomes</a> on our website. 
       </p>
          </b-col>
          <b-col>
           
            <b-form-group
              label="What outcome do you want from this case?"
            >
              <b-form-textarea
                v-model="form.employeeDesiredOutcomes"
                rows="9"
              ></b-form-textarea>
            </b-form-group>
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
import vagueDate from "./vagueDate.vue";
export default {
  components: { entity, Notice, EntityAddress, vagueDate },
  name: "f2Dismissal",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      repTypeOptions: [
        { text: "I am their lawyer or paid agent", value: true },
        { text: "Family or friend", value: false },
      ],
      applyingForSelfOptions: [
        { text: "I am the applicant (submitting for myself)", value: true },
        {
          text: "I am submitting this form on behalf of someone else",
          value: false,
        },
      ],
      over18Options: [
        { text: "yes, I am over 18", value: true },
        { text: "no, I am under 18", value: false },
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
