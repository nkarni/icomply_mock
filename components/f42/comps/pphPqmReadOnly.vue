<template>
  <div>
    <review-item
      fulWidthLabel
      :label="
        'a. ' +
        
        'Have you ever been convicted of an offence against an industrial law?'
      "
      :value="
        boolToStringWithDetails(
          form.permitHolder.dec.convictedIndustrialLaw,
          form.permitHolder.dec.convictedIndustrialLawDetails
        )
      "
    ></review-item>

    <review-item
      fulWidthLabel
      :label="
        'b. ' +
        
        'Have you ever been convicted of an offence against a law of the Commonwealth, a State, a Territory or a foreign country, involving: <br />(i) entry onto premises; or <br />(ii) fraud ordishonesty; or <br />(iii) intentional use of violence against another person or intentional damage or destruction of property?'
      "
      :value="
        boolToStringWithDetails(
          form.permitHolder.dec.convictedOther,
          form.permitHolder.dec.convictedOtherDetails
        )
      "
    ></review-item>

    <review-item
      fulWidthLabel
      :label="
        'c. ' +
       
        'Have you, or any other person (which includes a union), ever been ordered to pay a penalty under the Fair Work Act 2009 or any other industrial law in relation to action taken by ' +
        youStr +
        '?'
      "
      :value="
        boolToStringWithDetails(
          form.permitHolder.dec.orderedToPay,
          form.permitHolder.dec.orderedToPayDetails
        )
      "
    ></review-item>

    <review-item
      fulWidthLabel
      :label="
        'd. ' +
      
        'Have you had revoked, suspended or made subject to conditions, any permit issued under Part 3 4 of the Fair Work Act 2009 or a similar law of the Commonwealth (no matter when in force)?'
      "
      :value="
        boolToStringWithDetails(
          form.permitHolder.dec.hadRevoked,
          form.permitHolder.dec.hadRevokedDetails
        )
      "
    ></review-item>

    <review-item
      fulWidthLabel
      :label="
        'e. ' +
   
        'Have you had cancelled or suspended or had conditions imposed on a right of entry for industrial or occupational health and safety (OHS) purposes, by any court, or other person or body, under a State or Territory industrial law or a State or Territory OHS law?'
      "
      :value="
        boolToStringWithDetails(
          form.permitHolder.dec.hadConditionsImposed,
          form.permitHolder.dec.hadConditionsImposedDetails
        )
      "
    ></review-item>

    <review-item
      fulWidthLabel
      :label="
        'f. ' +
        'Have you been disqualified, by any court, or other person or body, under a State or Territory industrial law or a State or Territory OHS law, from exercising, or applying for, a right of entry for industrial or OHS purposes under that law?'
      "
      :value="
        boolToStringWithDetails(
          form.permitHolder.dec.beenDisqualified,
          form.permitHolder.dec.beenDisqualifiedDetails
        )
      "
    ></review-item>

    <review-item
      fulWidthLabel
      :label="
        'g. ' +
        'Are you aware of any other matters that may be relevant to whether you are a fit and proper person to hold a permit?'
      "
      :value="
        boolToStringWithDetails(
          form.permitHolder.dec.awareOfMatters,
          form.permitHolder.dec.awareOfMattersDetails
        )
      "
    ></review-item>

    <b-row :class="'mt-4'">
      <b-col class="numberCol"> h. </b-col>
      <b-col class="pl-1">
        <b-form-group
          label="I have received appropriate training about the rights and responsibilities of an entry permit holder. The details of the training I have completed are:
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
    <b-row>
      <b-col>
        <f42-signature
            :form="form"
            :signature="form.permitHolder.dec.signature"
            :readOnly="true"
            :indented="false"
          ></f42-signature>
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
  name: "phhPqmReadOnly",
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
  