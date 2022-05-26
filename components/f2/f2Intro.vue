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
              TBD
            </p>
          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Before you start</h6>

          </b-col>
          <b-col>
            <p>
              Have the following information ready before you begin completing
              this form:
            </p>
            <ol>
              <li>Dates of your employment.</li>
              <li>What type of employee you were.</li>
              <li>Why you believe the dismissal was 'harsh, unjust or
                unreasonable'.</li>
              <li>Business and contact details of your employer.</li>
              <li>A copy of your payslip and termination letter, if you have
                them.</li>
            </ol>
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
              Complete the form - you must answer every question, we will tell you if a field is optional.
            </p>
          </b-col>
        </b-row>
      </section>

      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>What will happen next</h6>
          </b-col>
          <b-col>
            <p>
              After we receive your application, we:
            </p>


            <ol>
              <li>Send a copy to your employer.</li>
              <li>Organise a conciliation to help you and your employer discuss the issues.</li>

            </ol>
          </b-col>
        </b-row>
      </section>

      <section class=" mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Privacy</h6>
          </b-col>
          <b-col>
            <p>
              After we receive your application, we:
            </p>


            <ol>
              <li>Send a copy to your employer.</li>
              <li>Organise a conciliation to help you and your employer discuss the issues.</li>
            </ol>
            <p>
              Read the
              <a href="https://www.fwc.gov.au/documents/documents/forms/form_f42-privacy.pdf">Privacy notice</a>
              to find out what personal information we collect, why we collect
              it, and what we do with it.
            </p>
            <p>The Commission may publish on its website:</p>
            <ul>
              <li>
                the names of the applicant organisation and the proposed permit
                holder; and
              </li>
              <li>
                that the organisation has applied for an entry permit to be
                issued to the proposed permit holder; and
              </li>
              <li>
                that third parties may make submissions to the Commission as to
                whether the proposed permit holder is a fit and proper person to
                be issued with an entry permit.
              </li>
            </ul>
            <p>
              If the Commission decides to issue an entry permit, the Commission
              will publish on its website the names of the applicant
              organisation and the permit holder, and the permit details.
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
  name: "f2Intro",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
     
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
  },
  methods: {
   
  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
