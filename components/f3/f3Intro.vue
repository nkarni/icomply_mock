<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Process overview</h6>
          </b-col>
          <b-col>
            <p>
              The Fair Work Commission has received an application about unfair
              dismissal from [first name] [last name]. We refer to [first name]
              [last name] as 'the Applicant'.
            </p>
            <p>We refer to the business named in the application as 'the Respondent'</p>
            <p>
              We have not made a decision about whether the dismissal was
              unfair.
            </p>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>What you need to do now</h6>
          </b-col>
          <b-col>
            <p>
              Tell us your side of the case by completing this form (Form F3).
            </p>
            <p>
              Start by reading the application (Form F2), and have the following
              information ready:
         
            <ul>
              <li>Your business details, including your ABN.</li>
              <li>
                The dates of the applicant's employment, including the date you
                told them they were dismissed.
              </li>
              <li>Information about the applicant's pay.</li>
              <li>Information about the size of your business.</li>
            </ul>
               </p>
            <p>You must complete the Form F3 by the due date/by DD MMM YYYY.</p>
            <p>Answer every question.  We will tell you if a question is optional.</p>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>What will happen next</h6>
          </b-col>
          <b-col>
            <p>After we receive your completed form, a copy will be given to the Applicant.</p>
            <p>You can find information about the next steps on our  <a
            target="_blank"
                href="https://www.fwc.gov.au/job-loss-or-dismissal/unfair-dismissal/process-unfair-dismissal-claims"
                >website</a
              >.</p>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Privacy</h6>
          </b-col>
          <b-col>
            <p>
              Read the  <a
              target="_blank"
                href="https://asset.fwc.gov.au/documents/documents/forms/form_f3-privacy.pdf"
                >Privacy notice</a
              >
               to find out what personal information we collect, why we collect it, and what we do with it.
            </p>
            <p>The Commission may:
<ul>
  <li>
    publish a decision on its website about the names of the Applicant and the Respondent and details about the case, and
  </li>
    <li>
give the information you give us to to the Applicant and their representative (if they have one).
  </li>
</ul>

            </p>
            <p>If you have concerns about particular information being passed on, contact us to discuss the information before you send it to us.</p>
            
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
export default {
  components: { entity, Notice, EntityAddress },
  name: "f3Intro",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
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
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
