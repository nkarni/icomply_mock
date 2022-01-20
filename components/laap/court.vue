<template>
  <div>
    <b-form-group label="Which court?">
      <b-form-select
        v-model="court.courtType"
        :options="['Select one from  ' + courtType + ' courts options']"
      ></b-form-select>
    </b-form-group>

    <b-form-group label="Which suburb/town?">
      <b-form-select
        v-model="court.courtTown"
        :options="['Options will cascade from the selected court option ']"
      ></b-form-select>
    </b-form-group>

    <b-form-group
      :label="'When is ' + yourString + ' next court date (if known)'"
    >
      <b-form-datepicker
        v-model="court.nextDate"
        class="mb-2"
      ></b-form-datepicker>
    </b-form-group>

    <b-form-group
      :label="'What is the next Court date for? e.g. mentions,committal'"
    >
      <b-form-textarea
        v-model="court.nextDateReason"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-form-group>

    <b-form-group
      :label="'What offences ' + haveYouString + ' been charged with?'"
    >
      <b-form-select
        v-model="court.offences"
        :options="['Options from CaseHQ', 'Other']"
      ></b-form-select>
    </b-form-group>
    <b-form-group
      label="Please provide details"
      v-if="court.offences === 'Other'"
    >
      <b-form-textarea
        v-model="court.offenceDetails"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-form-group>

    <label>Please provide names of any alleged victim(s)</label>
    <div
      v-for="(victim, index) of court.victims"
      :key="index"
      v-bind:id="index"
      class="mb-2 victims pl-4"
    >
      <div>
        <strong>Alleged victim {{ index + 1 }}</strong
        ><b-button
          variant="link"
          class="p-0"
          @click.prevent="removeVictim(index)"
          v-b-tooltip.hover
          title="Remove"
          ><b-icon icon="x-circle"
        /></b-button>
      </div>

      <entity
        showFirstName
        showLastName
        form="form"
        :entity="court.victims[index]"
      ></entity>
    </div>
    <div class="text-right">
      <b-button variant="link" class="p-0 mb-4" @click.prevent="addVictim"
        >Click here to add another alleged victim</b-button
      >
    </div>
    <b-form-group
      :label="
        'Was anyone else charged with ' + youString + ' for these offences? '
      "
    >
      <b-form-radio-group
        stacked
        v-model="court.hasOtherCharged"
        :options="boolOptions"
      ></b-form-radio-group>
    </b-form-group>
    <div v-if="court.hasOtherCharged">
      <label>Please provide their name(s)</label>
      <div
        v-for="(person, index) of court.othersCharged"
        :key="index"
        v-bind:id="index"
        class="mb-2 victims pl-3"
      >
        <div>
          <strong>Person {{ index + 1 }}</strong
          ><b-button
            variant="link"
            class="p-0"
            @click.prevent="removePersonCharged(index)"
            v-b-tooltip.hover
            title="Remove"
            ><b-icon icon="x-circle"
          /></b-button>
        </div>

        <entity
          showFirstName
          showLastName
          form="form"
          :entity="court.othersCharged[index]"
        ></entity>
      </div>
      <div class="text-right">
        <b-button
          variant="link"
          class="p-0 mb-4"
          @click.prevent="addPersonCharged"
          >Click here to add another person</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Entity from "./entity.vue";
export default {
  components: { Entity },
  name: "court",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    court: {
      type: Object,
      default: () => ({}),
    },
    courtType: {
      type: String,
      default: "",
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
    AreYouStringReverse: function () {
      return this.form.repType === "self" ? "are you" : "is the Applicant";
    },
    additionalS: function () {
      return this.form.repType === "self" ? "" : "s";
    },
    yoursString: function () {
      return this.form.repType === "self" ? "yours" : "the Applicant/'s";
    },
    haveYouString: function () {
      return this.form.repType === "self" ? "have you" : "has the Applicant";
    },
  },
  methods: {
    addVictim() {
      this.court.victims.push({ firstName: "", lastName: "" });
    },
    removeVictim(i) {
      this.court.victims.splice(i);
    },
    addPersonCharged() {
      this.court.othersCharged.push({ firstName: "", lastName: "" });
    },
    removePersonCharged(i) {
      this.court.othersCharged.splice(i);
    },
  },
};
</script>

<style lang="scss" scoped >
.victims {
  border-left: 4px solid var(--primaryLighter) !important;
}
</style>