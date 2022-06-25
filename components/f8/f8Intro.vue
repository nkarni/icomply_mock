<template>
  <div>
    <b-form>
      <section class="">
        <b-row>
          <b-col>
            <h6>How the process works</h6>
            <p>
              Making a general protections claim involving dismissal means you
              are alleging that you were dismissed from your job for a reason
              that is covered by general protections laws.
            </p>
            <p>
              The Commission will send a copy of your application to your former
              employer to seek their side of the case.
            </p>
            <p>
              The Commission will schedule a telephone conciliation between you
              and your former employer which will be conducted by a trained
              conciliator. This is an opportunity for you and your former
              employer to settle the matter.
            </p>
            <p>
              If your former employer has a jurisdictional objection to your
              application it may mean the matter is referred to a Member of the
              Commission to determine if the application can proceed.
            </p>
            <p>
              You can read more about the process for general protections
              involving dismissal process on the Commission's
              <a
                href="https://www.fwc.gov.au/job-loss-or-dismissal/dismissal-under-general-protections/process-general-protections-dismissal"
                target="_blank"
                >website.</a
              >
            </p>
          </b-col>
        </b-row>
      </section>
       <section class="">
        <b-row>
          <b-col>
            <h6>Before you start</h6>
           <p>
              Have the following information ready before you begin completing
              this form:
            </p>
            <ol>
              <li>Dates of your employment.</li>
              <li>Why you believe the dismissal breached the general protection laws.</li>
              <li>Business and contact details of your employer.</li>
              <li>A copy of your termination letter, if you have
                one.</li>
            </ol>
          </b-col>
        </b-row>
      </section>
      <section class="">
        <b-row>
          <b-col>
            <h6>What you need to do now</h6>
            <p>
              Complete the form - you must answer every question, we will tell you if a field is optional.
            </p>
          </b-col>
        </b-row>
      </section>
       <section class="">
        <b-row>
          <b-col>
            <h6>What will happen next</h6>
             <p>
              After we receive your application, we:
            </p>
            <ol>
              <li>Send a copy to your former employer.</li>
              <li>Organise a conciliation to help you and your former employer discuss the issues.</li>

            </ol>
          </b-col>
        </b-row>
      </section>
      <section class="mb-4 pb-4">
        <b-row>
          <b-col>
            <h6>Privacy</h6>
            <p>
              Read the
              <a
                href="https://www.fwc.gov.au/documents/documents/forms/form_f42-privacy.pdf"
                >Privacy notice</a
              >
              to find out what personal information we collect, why we collect
              it, and what we do with it.
            </p>
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
  name: "f8Intro",
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
