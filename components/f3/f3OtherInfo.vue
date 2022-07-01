<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Jurisdictional objections</h6>
            <p>Select any objections that apply (you can select more than one)</p>
          </b-col>
          <b-col>

            <!-- <b-form-group label="If you have any objections to the application please select them below and provide information for each (optional)"> -->

              <div v-for="(objection, index) of form.objections" :key="index" v-bind:id="index" class="mb-2 ">
                <b-form-group>
                  <b-form-checkbox v-model="form.objections[index].selected" :value="true" :unchecked-value="false">
                    {{ objection.text }}
                  </b-form-checkbox>
                </b-form-group>
                <b-form-group  v-if="form.objections[index].selected === true" label="Please provide details">
                  <b-form-textarea v-model="form.objections[index].details"></b-form-textarea>
                </b-form-group>
              </div>

             </b-form-group>

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
export default {
  components: { entity, Notice, EntityAddress },
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
