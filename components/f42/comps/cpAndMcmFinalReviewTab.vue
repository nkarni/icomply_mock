<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row >
          <b-col>
            <h5>
              Review the information provided by the proposed permit holder
            </h5>
            <p>
              Please check the information provided. Where the information you
              have provided differs than the information provided by the
              proposed permit holder - it is highlighted, please correct your
              records.
            </p>
          </b-col>
        </b-row >
      </section>

      <pph-full-details-read-only :form="form"></pph-full-details-read-only>

      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col>
            <h5>Review the information you have provided</h5>
           
          </b-col>
        </b-row>
      </section>

      <mcm-full-details-read-only :form="form"></mcm-full-details-read-only>

      <section class="mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Save and Proceed</h6>
            <p v-if="!form.committeeMember.isSameAsAdmin">
              Invite the committee member to verify their information
            </p>
            <p v-else>Confirm and submit to the Commission</p>
          </b-col>
          <b-col>
            <b-col class="text-center mt-3">
              <b-button class="mb-4" variant="outline-primary"
                >Download a draft PDF</b-button
              >
              <b-button variant="primary"
                >Confirm and submit to the Commission</b-button
              >
            </b-col>
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
import reviewItem from "../../common/reviewItem.vue";

import pphIdentityReadOnly from "./pphIdentityReadOnly.vue";
import pphPhotoSignatureReadOnly from "./pphPhotoSignatureReadOnly.vue";
import pphPqmReadOnly from "./pphPqmReadOnly.vue";
import mcmFullDetailsReadOnly from "./mcmFullDetailsReadOnly.vue";
import pphFullDetailsReadOnly from "./pphFullDetailsReadOnly.vue";

export default {
  components: {
    entity,
    Notice,
    EntityAddress,
    reviewItem,
    pphIdentityReadOnly,
    pphPhotoSignatureReadOnly,
    pphPqmReadOnly,
    mcmFullDetailsReadOnly,
    pphFullDetailsReadOnly
  },
  name: "cpAndMcmFinalReviewTab",
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
      return this.form.applyingForSelf ? "you" : "the Applicant";
    },
    yourString: function () {
      return this.form.applyingForSelf ? "your" : "the Applicant's";
    },
    AreYouString: function () {
      return this.form.applyingForSelf ? "are you" : "is the Applicant";
    },
    DoYouString: function () {
      return this.form.applyingForSelf ? "do you" : "is the Applicant";
    },
    DoYouStringCont: function () {
      return this.form.applyingForSelf ? "do you" : "does the Applicant";
    },
    youAreString: function () {
      return this.form.applyingForSelf ? "you are" : "the Applicant is";
    },
    wereYouString: function () {
      return this.form.applyingForSelf ? "were you" : "was the Applicant";
    },
    AreYouString: function () {
      return this.form.applyingForSelf ? "are you" : "the Applicant is";
    },

    contactPersonName: function () {
      return this.personToString(this.form.businessDetails.contactPerson);
    },
  },
  methods: {
    boolToString(val) {
      if (val === true) {
        return "Yes";
      }
      return "No";
    },
    phoneToString(phones) {
      var str = "";

      if (phones.length > 0) {
        phones.forEach((phone, i) => {
          if (phone.number !== "") {
            if (i > 0) {
              str += "<br>";
            }
            str += phone.number + " (" + phone.type + ")";
          }
        });
      }

      return str;
    },
  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
