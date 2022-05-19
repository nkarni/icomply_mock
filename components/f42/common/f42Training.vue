<template>
  <div>
    <div
      v-for="(training, index) of form.permitHolder.trainings"
      :key="index"
      v-bind:id="index"
    >
      <b-row :class="trainingRowClass">
        <b-col>
          <label style="font-weight: bold">Training {{ index + 1 }}</label>
          <b-form-group label="Name of training completed:">
            <b-form-select
              v-model="form.permitHolder.trainings[index].trainingName"
              :options="['Australian Council of Trade Unions (ACTU)']"
            ></b-form-select>
          </b-form-group>

          <b-form-group label="Method of training:">
            <b-form-radio-group
              :options="['Online', 'In Person']"
              v-model="form.permitHolder.trainings[index].trainingMethod"
            ></b-form-radio-group>
          </b-form-group>
          <b-form-group label="Date training completed:">
            <b-form-datepicker
              v-model="
                form.permitHolder.trainings[index].trainingCompletionDate
              "
            ></b-form-datepicker>
          </b-form-group>
          <b-form-group
            label="Attach evidence of training"
            description="Short explanation about how the file will be used."
          >
            <b-form-file
              v-model="form.permitHolder.trainings[index].trainingFile"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
          </b-form-group>
        </b-col>
        <b-col cols="1" class="align-middle">
          <b-button
            variant="link"
            class="p-0"
            @click.prevent="removeTraining(index)"
            v-b-tooltip.hover
            title="Remove"
            v-if="index > 0"
            ><b-icon icon="x-circle"
          /></b-button>
        </b-col>
      </b-row>
    </div>
    <div class="text-right">
      <b-button variant="link" class="p-0 mb-4" @click.prevent="addTraining"
        >Click here to add another training</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "f42Training",
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
    trainingRowClass() {
      if (this.form.permitHolder.trainings.length > 1) {
        return "training mb-3";
      } else {
        return "";
      }
    },
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
    addTraining() {
      this.form.permitHolder.trainings.push({
        trainingName: "",
        trainingMethod: "",
        trainingCompletionDate: "",
        trainingFile: null,
      });
    },
    removeTraining(i) {
      this.form.permitHolder.trainings.splice(i, 1);
    },
    onWrongBusinessNameClick() {
      if (form.businessDetailsCorrect === false) {
        this.businessDetailsWereWrong = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
.training {
  border-left: 4px solid var(--primaryLighter) !important;
}
</style>
