<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>The proposed permit holder Identity</h6>
          </b-col>
          <b-col cols="8">
           <f-42-holder-details-review :form="form" dec="form.permitHolder.dec"></f-42-holder-details-review>

            
          </b-col>
        </b-row>
      </section>

       <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>The proposed permit holder photo and signature</h6>
          </b-col>
          <b-col cols="8">
            Photo and signature will show here when it is decided how we collect them... (including any 'declaration' they fill in that tab)
          </b-col>
        </b-row>
      </section>

       <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>The proposed permit holder training</h6>
          </b-col>
          <b-col cols="8">
            <f-42-holder-training-review
              :form="form"
            ></f-42-holder-training-review>
          </b-col>
        </b-row>
      </section>

       <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>The proposed permit holder declaration</h6>
            <p>The proposed permit holder has submitted the following declaration</p>
          </b-col>
          <b-col cols="8">
            <f-42-holder-dec-review
              :form="form"
            ></f-42-holder-dec-review>
          </b-col>
        </b-row>
      </section>

       <section class="mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Confirmation</h6>
          </b-col>
          <b-col cols="8">
            <b-form-group>
              <b-form-checkbox
                v-model="form.committeeMember.confirmedPphId"
                :value="true"
                :unchecked-value="false"
              >
                I confirm that the proposed permit holder details are correct.
              </b-form-checkbox>
            </b-form-group>
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
import f42Training from "../common/f42Training.vue";
import f42Files from "../common/f42Files.vue";
import f42HolderSuperDetails from "../common/f42HolderSuperDetails.vue";
import f42HolderDetailsReview from "../common/f42HolderDetailsReview.vue";

export default {
  components: {
    entity,
    Notice,
    EntityAddress,
    f42Training,
    f42Files,
    f42HolderSuperDetails,
    f42HolderDetailsReview
  },
  name: "f42MemberViewPph",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      numberOfEmployeesOptionsUnder: [
        {
          text: "1 to 4 employees ",
          value: "4",
        },
        {
          text: "5 to 9  employees ",
          value: "10",
        },
        {
          text: "10 to 14  employees ",
          value: "15",
        },
        {
          text: "15 to 19 employees ",
          value: "20",
        },
        {
          text: "20 to 49 employees",
          value: "50",
        },
        {
          text: "50 to 99 employees",
          value: "100",
        },
        {
          text: "100 to 199 employees",
          value: "200",
        },
        {
          text: "200 to 999 employees",
          value: "1000",
        },
        {
          text: "over 1000 employees",
          value: "999999999",
        },
      ],
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
      aboriginalityOptions: [
        { text: "Yes, Aboriginal", value: "aboriginal" },
        { text: "Yes, Torres Strait Islander", value: "islander" },
        { text: "Both Aboriginal and Torres Strait Islander", value: "both" },
        { text: "No", value: "no" },
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
  mounted() {
    this.form.permitHolder.trainings = [
      {
        trainingName: "Sample training 1",
        trainingMethod: "Online",
        trainingCompletionDate: "25 November 2015",
        trainingFile: null,
      },
      {
        trainingName: "Sample training 2",
        trainingMethod: "Online",
        trainingCompletionDate: "25 November 2019",
        trainingFile: null,
      },
    ];
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
.training {
  border-left: 4px solid var(--primaryLighter) !important;
  padding-left: 10px;
}
</style>
