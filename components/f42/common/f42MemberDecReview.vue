<template>
  <div>
   
    <review-item
    fulWidthLabel
      :label="'a. ' +
        haveYouStr +
        ' ever been convicted of an offence against an industrial law?'
      "
      :value="
        boolToStringWithDetails(
          form.committeeMember.dec.convictedIndustrialLaw,
          form.committeeMember.dec.convictedIndustrialLawDetails
        )
      "
    ></review-item>

    <review-item
    fulWidthLabel
      :label="'b. ' +
        haveYouStr +
        ' ever been convicted of an offence against a law of the Commonwealth, a State, a Territory or a foreign country, involving: <br />(i) entry onto premises; or <br />(ii) fraud ordishonesty; or <br />(iii) intentional use of violence against another person or intentional damage or destruction of property?'
      "
      :value="
        boolToStringWithDetails(
          form.committeeMember.dec.convictedOther,
          form.committeeMember.dec.convictedOtherDetails
        )
      "
    ></review-item>

    <review-item
    fulWidthLabel
      :label=" 'c. ' +
        haveYouStr +
        ', or any other person (which includes a union), ever been ordered to pay a penalty under the Fair Work Act 2009 or any other industrial law in relation to action taken by ' +
        youStr +
        '?'
      "
      :value="
        boolToStringWithDetails(
          form.committeeMember.dec.orderedToPay,
          form.committeeMember.dec.orderedToPayDetails
        )
      "
    ></review-item>

    <review-item
    fulWidthLabel
      :label="'d. ' +
        haveYouStr +
        ' had revoked, suspended or made subject to conditions, any permit issued under Part 3 4 of the Fair Work Act 2009 or a similar law of the Commonwealth (no matter when in force)?'
      "
      :value="
        boolToStringWithDetails(
          form.committeeMember.dec.hadRevoked,
          form.committeeMember.dec.hadRevokedDetails
        )
      "
    ></review-item>

    <review-item
    fulWidthLabel
      :label="'e. ' +
        haveYouStr +
        ' had cancelled or suspended or had conditions imposed on a right of entry for industrial or occupational health and safety (OHS) purposes, by any court, or other person or body, under a State or Territory industrial law or a State or Territory OHS law?'
      "
      :value="
        boolToStringWithDetails(
          form.committeeMember.dec.hadConditionsImposed,
          form.committeeMember.dec.hadConditionsImposedDetails
        )
      "
    ></review-item>

    <review-item
    fulWidthLabel
      :label="'f. ' +
        haveYouStr +
        ' been disqualified, by any court, or other person or body, under a State or Territory industrial law or a State or Territory OHS law, from exercising, or applying for, a right of entry for industrial or OHS purposes under that law?'
      "
      :value="
        boolToStringWithDetails(
          form.committeeMember.dec.beenDisqualified,
          form.committeeMember.dec.beenDisqualifiedDetails
        )
      "
    ></review-item>

    <review-item
    fulWidthLabel
      :label="'g. ' +
        ' Are you aware of any other matters that may be relevant to whether the proposed permit holder is a fit and proper person to hold a permit?'
      "
      :value="
        boolToStringWithDetails(
          form.committeeMember.dec.awareOfMatters,
          form.committeeMember.dec.awareOfMattersDetails
        )
      "
    ></review-item>

    <review-item
    fulWidthLabel
      :label="'h. ' +
        ' I have made the following inquiries (including inquiries of the proposed permit holder) to satisfy myself that my answers at paragraphs 2(a) to (g) above are true and correct.'
      "
      :value="form.committeeMember.dec.inquiries"
    ></review-item>

    <b-row :class="'mt-4'">
      <b-col class="numberCol"> i. </b-col>
      <b-col class="pl-1">
        <b-form-group
          label="The proposed permit holder has received appropriate training about the rights and responsibilities of an entry permit holder. The details of the training the proposed permit holder have completed are:
"
        >
          <div
            v-if="
              form.permitHolder.trainings.length > 0 &&
              form.permitHolder.trainings[0].trainingName.length > 0
            "
          >
            <div
              v-for="(training, index) of form.permitHolder.trainings"
              :key="index"
              v-bind:id="index"
              class="mb-2"
            >
              Name: {{ training.trainingName }}<br />
              Method: {{ training.trainingMethod }}<br />Completed on:
              {{ training.trainingCompletionDate }}<br />Evidence:
              <a target="_blank" href="">Click Here</a>
            </div>
          </div>

          <div v-else>No training details provided.</div>
        </b-form-group>
      </b-col>
    </b-row>

 

    
  </div>
</template>

<script>
import entity from "../../common/entity.vue";
import EntityAddress from "../../common/entityAddress.vue";
import Notice from "../../common/notice.vue";
import reviewItem from "../../common/reviewItem.vue";
export default {
  components: { entity, Notice, EntityAddress, reviewItem },
  name: "f42MemberDecReview",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    dec: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      decItems: [
        "didAboveTraining",
        "convictedIndustrialLaw",
        "convictedOther",
        "orderedToPay",
        "hadRevoked",
        "hadConditionsImposed",
        "beenDisqualified",
        "awareOfMatters",
      ],
      businessDetailsWereWrong: false,
      showIsBusinessDetailsCorrect: true,

      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
    };
  },
  computed: {
    haveYouStr: function () {
      if (this.form.userRole === "permitHolder") {
        return "have you";
      } else {
        return "Has the proposed permit holder";
      }
    },
    youStr: function () {
      if (this.form.userRole === "permitHolder") {
        return "you";
      } else {
        return "The proposed permit holder";
      }
    },
  },
  methods: {
    onWrongBusinessNameClick() {
      if (form.businessDetailsCorrect === false) {
        this.businessDetailsWereWrong = true;
      }
    },
    boolToString(val) {
      if (val === true) {
        return "Yes";
      }
      return "No";
    },

    boolToStringWithDetails(val, details) {
      if (val === true) {
        return "Yes:<br>" + details;
      }
      return "No";
    },
  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
.numberCol {
  padding-right: 0px;
  max-width: 30px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 2.5s ease !important;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
