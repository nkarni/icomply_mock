<template>
  <div>
    <b-form-group
      :label="
        haveYouStr +
        ' ever been convicted of an offense against an industrial law?'
      "
    >
      <b-form-radio-group
        v-model="form.permitHolder.convictedIndustrialLaw"
        :options="boolOptions"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      label="Please provide details"
      v-if="form.permitHolder.convictedIndustrialLaw === true"
    >
      <b-form-textarea
        v-model="form.permitHolder.convictedIndustrialLawDetails"
      ></b-form-textarea>
    </b-form-group>

    <b-form-group>
      <label>
        {{ haveYouStr }} ever been convicted of an offense against a law of the
        Commonwealth, a State, a Territory or a foreign country, involving:
        <br />(i) entry onto premises; or <br />(ii) fraud or dishonesty; or
        <br />(iii) intentional use of violence against another person or
        intentional damage or destruction of property?
      </label>

      <b-form-radio-group
        v-model="form.permitHolder.convictedOther"
        :options="boolOptions"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      label="Please provide details"
      v-if="form.permitHolder.convictedOther === true"
    >
      <b-form-textarea
        v-model="form.permitHolder.convictedOtherDetails"
      ></b-form-textarea>
    </b-form-group>

    <b-form-group
      :label="
        haveYouStr +
        ', or any other person (which includes a union), ever been ordered to pay a penalty under the Fair Work Act 2009 or any other industrial law in relation to action taken by ' + youStr  + '?'
      "
    >
      <b-form-radio-group
        v-model="form.permitHolder.orderedToPay"
        :options="boolOptions"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      label="Please provide details"
      v-if="form.permitHolder.orderedToPay === true"
    >
      <b-form-textarea
        v-model="form.permitHolder.orderedToPayDetails"
      ></b-form-textarea>
    </b-form-group>

    <b-form-group
      :label="
        haveYouStr +
        ' had revoked, suspended or made subject to conditions, any permit issued under Part 3 4 of the Fair Work Act 2009 or a similar law of the Commonwealth (no matter when in force)?'
      "
    >
      <b-form-radio-group
        v-model="form.permitHolder.hadRevoked"
        :options="boolOptions"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      label="Please provide details"
      v-if="form.permitHolder.hadRevoked === true"
    >
      <b-form-textarea
        v-model="form.permitHolder.hadRevokedDetails"
      ></b-form-textarea>
    </b-form-group>

     <b-form-group
      :label="
        haveYouStr +
        ' had cancelled or suspended or had conditions imposed on a right of entry for industrial or occupational health and safety (OHS) purposes, by any court, or other person or body, under a State or Territory industrial law or a State or Territory OHS law?'
      "
    >
      <b-form-radio-group
        v-model="form.permitHolder.hadConditionsImposed"
        :options="boolOptions"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      label="Please provide details"
      v-if="form.permitHolder.hadConditionsImposed === true"
    >
      <b-form-textarea
        v-model="form.permitHolder.hadConditionsImposedDetails"
      ></b-form-textarea>
    </b-form-group>

    <b-form-group
      :label="
        haveYouStr +
        ' been disqualified, by any court, or other person or body, under a State or Territory industrial law or a State or Territory OHS law, from exercising, or applying for, a right of entry for industrial or OHS purposes under that law?'
      "
    >
      <b-form-radio-group
        v-model="form.permitHolder.beenDisqualified"
        :options="boolOptions"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      label="Please provide details"
      v-if="form.permitHolder.beenDisqualified === true"
    >
      <b-form-textarea
        v-model="form.permitHolder.beenDisqualifiedDetails"
      ></b-form-textarea>
    </b-form-group>

    
  </div>
</template>

<script>
import entity from "../entity.vue";
import EntityAddress from "../entityAddress.vue";
import Notice from "../notice.vue";
export default {
  components: { entity, Notice, EntityAddress },
  name: "f42HolderSuperDetails",
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
      aboriginalityOptions: [
        { text: "Yes, Aboriginal", value: "aboriginal" },
        { text: "Yes, Torres Strait Islander", value: "islander" },
        { text: "Both Aboriginal and Torres Strait Islander", value: "both" },
        { text: "No", value: "no" },
      ],
    };
  },
  computed: {
    haveYouStr: function () {
      if (this.form.userRole === "permitHolder") {
        return "have you";
      } else {
        return "Has the Proposed Permit Holder";
      }
    },
    youStr: function () {
      if (this.form.userRole === "permitHolder") {
        return "you";
      } else {
        return "The Proposed Permit Holder";
      }
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
</style>
