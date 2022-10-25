<template>
    <div>
      <Transition>
        <b-row :class="disableConvictedIndustrialLaw ? 'disabled' : ''">
          <b-col class="numberCol"> a. </b-col>
          <b-col class="pl-1">
            <b-form-group
              :label="
                haveYouStr +
                ' ever been convicted of an offence against an industrial law?'
              "
            >
              <b-form-radio-group
                :disabled="disableConvictedIndustrialLaw"
                v-model="dec.convictedIndustrialLaw"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
  
            <b-form-group
              label="Please provide details"
              v-if="dec.convictedIndustrialLaw === true"
            >
              <b-form-textarea
                :disabled="readOnly"
                v-model="dec.convictedIndustrialLawDetails"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </Transition>
  
      <Transition>
        <b-row :class="disableConvictedOther ? 'disabled' : ''">
          <b-col class="numberCol"> b. </b-col>
          <b-col class="pl-1">
            <b-form-group>
              <label>
                {{ haveYouStr }} ever been convicted of an offence against a law
                of the Commonwealth, a State, a Territory or a foreign country,
                involving: <br />(i) entry onto premises; or <br />(ii) fraud or
                dishonesty; or <br />(iii) intentional use of violence against
                another person or intentional damage or destruction of property?
              </label>
  
              <b-form-radio-group
                :disabled="disableConvictedOther"
                v-model="dec.convictedOther"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
  
            <b-form-group
              label="Please provide details"
              v-if="dec.convictedOther === true"
            >
              <b-form-textarea
                :disabled="readOnly"
                v-model="dec.convictedOtherDetails"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </Transition>
  
      <Transition>
        <b-row :class="disableOrderedToPay ? 'disabled' : ''">
          <b-col class="numberCol"> c. </b-col>
          <b-col class="pl-1">
            <b-form-group
              :label="
                haveYouStr +
                ', or any other person (which includes a union), ever been ordered to pay a penalty under the Fair Work Act 2009 or any other industrial law in relation to action taken by ' +
                youStr +
                '?'
              "
            >
              <b-form-radio-group
                :disabled="disableOrderedToPay"
                v-model="dec.orderedToPay"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
  
            <b-form-group
              label="Please provide details"
              v-if="dec.orderedToPay === true"
            >
              <b-form-textarea
                :disabled="readOnly"
                v-model="dec.orderedToPayDetails"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </Transition>
  
      <Transition>
        <b-row :class="disableHadRevoked ? 'disabled' : ''">
          <b-col class="numberCol"> d. </b-col>
          <b-col class="pl-1">
            <b-form-group
              :label="
                haveYouStr +
                ' had revoked, suspended or made subject to conditions, any permit issued under Part 3 4 of the Fair Work Act 2009 or a similar law of the Commonwealth (no matter when in force)?'
              "
            >
              <b-form-radio-group
                :disabled="disableHadRevoked"
                v-model="dec.hadRevoked"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
  
            <b-form-group
              label="Please provide details"
              v-if="dec.hadRevoked === true"
            >
              <b-form-textarea
                :disabled="readOnly"
                v-model="dec.hadRevokedDetails"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </Transition>
  
      <Transition>
        <b-row :class="disableHadConditionsImposed ? 'disabled' : ''">
          <b-col class="numberCol"> e. </b-col>
          <b-col class="pl-1">
            <b-form-group
              :label="
                haveYouStr +
                ' had cancelled or suspended or had conditions imposed on a right of entry for industrial or occupational health and safety (OHS) purposes, by any court, or other person or body, under a State or Territory industrial law or a State or Territory OHS law?'
              "
            >
              <b-form-radio-group
                :disabled="disableHadConditionsImposed"
                v-model="dec.hadConditionsImposed"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
  
            <b-form-group
              label="Please provide details"
              v-if="dec.hadConditionsImposed === true"
            >
              <b-form-textarea
                :disabled="readOnly"
                v-model="dec.hadConditionsImposedDetails"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </Transition>
  
      <Transition>
        <b-row :class="disableBeenDisqualified ? 'disabled' : ''">
          <b-col class="numberCol"> f. </b-col>
          <b-col class="pl-1">
            <b-form-group
              :label="
                haveYouStr +
                ' been disqualified, by any court, or other person or body, under a State or Territory industrial law or a State or Territory OHS law, from exercising, or applying for, a right of entry for industrial or OHS purposes under that law?'
              "
            >
              <b-form-radio-group
                :disabled="disableBeenDisqualified"
                v-model="dec.beenDisqualified"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
  
            <b-form-group
              label="Please provide details"
              v-if="dec.beenDisqualified === true"
            >
              <b-form-textarea
                :disabled="readOnly"
                v-model="dec.beenDisqualifiedDetails"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </Transition>
  
      <Transition>
        <b-row :class="disableAwareOfMatters ? 'disabled' : ''">
          <b-col class="numberCol"> g. </b-col>
          <b-col class="pl-1">
            <b-form-group
              :label="'Are you aware of any other matters that may be relevant to whether the proposed permit holder is a fit and proper person to hold a permit?'"
            >
              <b-form-radio-group
                :disabled="disableAwareOfMatters"
                v-model="dec.awareOfMatters"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
  
            <b-form-group
              label="Please provide details"
              v-if="dec.awareOfMatters === true"
            >
              <b-form-textarea
                :disabled="readOnly"
                v-model="dec.awareOfMattersDetails"
              ></b-form-textarea>
            </b-form-group>
            <notice
              class="mb-2"
              :message="'The Commission can take into account any other matter that it considers relevant to whether the proposed permit holder is a fit and proper person to hold a permit. This may include adverse comments made about the proposed permit holder in a Commission or court decision, regardless of whether the proposed permit holder was a party to the proceeding.'"
            >
            </notice>
          </b-col>
        </b-row>
      </Transition>
  
      <Transition>
        <b-row :class="disableInquiries ? 'disabled' : ''">
          <b-col class="numberCol"> h. </b-col>
          <b-col class="pl-1">
            <b-form-group
              :label="'I have made the following inquiries (including inquiries of the proposed permit holder) to satisfy myself that my answers at paragraphs 2(a) to (g) above are true and correct.'"
            >
            </b-form-group>
  
            <b-form-group
              label="Describe the inquiries you made and what you did to satisfy yourself that the proposed permit holder meets the permit qualification matters listed in s.513(1)(b) to (f) of the Fair Work Act 2009:"
            >
              <b-form-textarea
                :disabled="readOnly"
                :class="disableInquiries ? 'disabled' : ''"
                v-model="dec.inquiries"
                rows="6"
                max-rows="12"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </Transition>
      <Transition>
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
      </Transition>
    </div>
  </template>
  
  <script>
  import entity from "../../common/entity.vue";
  import EntityAddress from "../../common/entityAddress.vue";
  import Notice from "../../common/notice.vue";
  export default {
    components: { entity, Notice, EntityAddress },
    name: "mcmPqm",
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
      disableConvictedIndustrialLaw: function () {
        return this.dec.didAboveTraining === null;
      },
      disableConvictedOther: function () {
        return !(
          this.dec.convictedIndustrialLaw === false ||
          this.dec.convictedIndustrialLawDetails.length > 2
        );
      },
      disableOrderedToPay: function () {
        return !(
          this.dec.convictedOther === false ||
          this.dec.convictedOtherDetails.length > 2
        );
      },
      disableHadRevoked: function () {
        return !(
          this.dec.orderedToPay === false ||
          this.dec.orderedToPayDetails.length > 2
        );
      },
      disableHadConditionsImposed: function () {
        return !(
          this.dec.hadRevoked === false || this.dec.hadRevokedDetails.length > 2
        );
      },
      disableBeenDisqualified: function () {
        return !(
          this.dec.hadConditionsImposed === false ||
          this.dec.hadConditionsImposedDetails.length > 2
        );
      },
      disableAwareOfMatters: function () {
        return !(
          this.dec.beenDisqualified === false ||
          this.dec.beenDisqualifiedDetails.length > 2
        );
      },
      disableInquiries: function () {
        return !(
          this.dec.awareOfMatters === false ||
          this.dec.awareOfMattersDetails.length > 2
        );
      },
    },
    methods: {
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
  .numberCol {
    padding-right: 0px;
    max-width: 30px;
  }
  .disabled {
    opacity: 0.4;
  }
  </style>
  