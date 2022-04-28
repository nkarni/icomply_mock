<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Employment dates</h6>
            <p>
              <strong >There is a minimum employment period for unfair dismissal
                cases:</strong
              ><br />
              <span class="cap-first">{{youString}}</span> must have been working for the employer for at least 6 months
              to qualify for unfair dismissal. If {{youString}} worked for a business with
              less than 15 employees, {{youString}} must have worked there for at least 12
              months. This is called the minimum employment period for unfair
              dismissal cases.
            </p>
            <p>If you don't know the exact date, you can give an estimate.</p>
          </b-col>
          <b-col>
            <vague-date
              :date="form.employmentStart"
              :dateLabel="'When did ' + yourString + ' employment start?'"
              class="mb-4"
            ></vague-date>
            <notice
              :message="'Are you sure you have selected the correct date? Please check the minimum employment period. If it is less than min period ' + youString + ' may not be covered by unfair dismissal laws.<br><small>This message will only show if an exact end date was entered and it is less than 6 months from today.</small>'"
            ></notice>

            <br />

            <!-- <vague-date
              :date="form.employmentEnd"
              :dateLabel="'When did ' + yourString + ' employment end?'"
            ></vague-date>
<br /> -->

 <b-form-group
              :label="wereYouString + ' told about being dismissed?'"
            >
              <b-form-radio-group
                v-model="form.wasToldAboutDismissal"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
            <vague-date
              v-if="form.wasToldAboutDismissal"
              :date="form.dismissalTold"
              :dateLabel="'When ' + wereYouString + ' told about being dismissed?'"
            ></vague-date>
          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Effective dismissal date</h6>
            <p>
              This is generally the last day of {{yourString}} employment. If {{youString}} didn’t
              find out {{youString}} were being dismissed until after {{yourString}} last day, then
              it’s generally the day {{youString}} found out {{youString}} <span v-if="form.applyingForSelf === false">was</span><span v-else>were</span> being dismissed. You
              can find out more about
              <a href="">when a dismissal takes effect</a> on our website.
            </p>
          </b-col>
          <b-col>
            <vague-date
              :date="form.effectiveDismissalDate"
              :dateLabel="'When did ' + yourString + ' dismissal take effect?'"
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
              The 21-day time limit starts the day after {{yourString}} dismissal took
              effect. Weekends and public holidays are counted in the 21 days.
              We must receive {{yourString}} form within this 21-day period. You can read
              more about <a href="">how the 21 days is calculated</a> on our
              website.
            </p>
            <p>
              Your case may only go ahead if there are
              <strong>exceptional circumstances</strong>. If you think {{yourString}}
              circumstances are exceptional, tell us why and continue to lodge
              the form. We may ask {{youString}} to provide extra information or evidence
              later if we need it.
            </p>
            <notice
              message="<small>Dev notice: This section will only show if an exact date was provided for effective dismissal AND that date is more than 21 days from today</small>"
            ></notice>
          </b-col>
          <b-col>
            <b-form-group
              :label="'Are you lodging this form within the 21 days limit?'"
            >
              <b-form-radio-group
                v-model="form.lodgingWithin21DaysLimit"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group
              label="The form may be late. Why is it being lodged late?"
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
              Tell us about any other claims that were started about {{yourString}}
              dismissal at the Fair Work Commission or somewhere else (e.g. the
              Human Rights Commission)
            </p>
          </b-col>
          <b-col>
            <b-form-group :label="'Have ' + youString + ' started any other claims?'">
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
  name: "f8Employment",
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
