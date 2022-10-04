<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Jurisdictional objections</h6>
            <p>The Respondent can challenge the claim if they believe the Applicant is not eligible to claim unfair dismissal or if they were not dismissed. 
You can add or review objections here. you can also remove a prefilled objection by un-ticking it.</p><p>Information about objecting to an application can be found on the <a href="https://www.fwc.gov.au/objecting-application-0" target="_blank">website</a></p>
          </b-col>
          <b-col>

            <!-- <b-form-group label="If you have any objections to the application please select them below and provide information for each (optional)"> -->

             <objections :form="form"></objections>

             

            <b-form-group label="Would you like to participate in conciliation?"
              v-if="form.jurisdictionalObjections.length > 0">
              <b-form-radio-group v-model="form.wantsConciliation" :options="boolOptions"></b-form-radio-group>
            </b-form-group>

          </b-col>
        </b-row>
      </section>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Other information</h6>
            <p>If there is anything else that might be important for us to know you can mention it here.<br><br>Leave
              this blank if you have nothing to add.
            </p>
          </b-col>
          <b-col>
            <b-form-group label="Is there anything else you need to tell us? (optional)">
              <b-form-textarea v-model="form.otherInfo" rows="6" max-rows="18"></b-form-textarea>
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
import Objections from '../common/objections.vue';
export default {
  components: { entity, Notice, EntityAddress, Objections },
  name: "otherInfo",
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
  methods: {

  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
