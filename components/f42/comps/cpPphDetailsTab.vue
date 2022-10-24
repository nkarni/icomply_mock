<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>The proposed permit holder</h6>

            <p>Provide details of the proposed permit holder.</p>
            <p>
              This information will be reviewed and can be edited by the
              proposed permit holder if incorrect.
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
import pphTraining from "../comps/pphTraining.vue";
import pphIdentity from "../comps/pphIdentity.vue";
export default {
  components: {
    entity,
    Notice,
    EntityAddress,
    pphTraining,
    pphIdentity,
  },
  name: "cpPphDetailsTab",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      businessDetailsWereWrong: false,
      showIsBusinessDetailsCorrect: true,
      repTypeOptions: [
        { text: "I am the Applicant (submitting for myself)", value: "self" },
        { text: "I am the Applicant's solicitor", value: "solicitor" },
        {
          text: "I am submitting this form on behalf of the Applicant",
          value: "other",
        },
      ],
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
  methods: {
    onWrongBusinessNameClick() {
      if (form.businessDetailsCorrect === false) {
        this.businessDetailsWereWrong = true;
      }
    },
    onSelectedNewAbn() {
      this.form.businessDetailsCorrect = true;
      this.$bvModal.hide("manual-abn");
    },
  },
};
</script>
  
  <style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
  