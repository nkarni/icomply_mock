<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Your details</h6>
            <p>
              Please provide the required details. Note that they must match
              your name on your driver license or on an official ID document.
            </p>
          </b-col>
          <b-col>
            <pph-identity :form="form"></pph-identity>
          </b-col>
        </b-row>
      </section>
      <section class="mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Right of entry training</h6>
            <p>
              Give details of the training completed and the date it was
              completed.
            </p>
            <p>
              Attach evidence showing the proposed permit holder has
              successfully completed the relevant training.
            </p>
            <p>See Rule 51 of the Fair Work Commission Rules 2013.</p>
            <p>
              You can find information about right of entry training on
              <a
                href="https://www.fwc.gov.au/registered-organisations/entry-permits/training-permit-holders-must-complete"
                target="_blank"
                >our website</a
              >.
            </p>

          </b-col>
          <b-col>
          
            <div>
              <pph-training :form="form"></pph-training>
            </div>
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
import pphIdentity from "../comps/pphIdentity.vue";
import pphTraining from "../comps/pphTraining.vue";
export default {
  components: {
    entity,
    Notice,
    EntityAddress,
    pphIdentity,
    pphTraining
  },
  name: "cpAndPphPphYourDetailsTab",
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
  methods: {},
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
