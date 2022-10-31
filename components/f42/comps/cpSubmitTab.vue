<template>
    <div>
      <b-form>
        <section class="border-bottom border-secondary mb-4 pb-2">
          <b-row>
            <b-col>
              <h5>Review your submission</h5>
              <p>
                Please check the information you provided. You can go back and
                edit information as required by clicking on the pencil icon, or by
                navigation back to the relevant section.
              </p>
            </b-col>
          </b-row>
  
          <!-- <notice :message="'mockup notice: HC means hard coded, it will be dynamic and show provided info in the final build. Similarly, the link to the relevant tab for editing will be activated in the final build.'"></notice> -->
        </section>
  
        <section class="border-bottom border-secondary mb-4 pb-2">
          <b-row>
            <b-col cols="4">
              <h6>
                Your details
                <b-button
                  variant="link"
                  class="p-0"
                  @click.prevent=""
                  v-b-tooltip.hover
                  title="Edit this section (coming soon)"
                >
                  <b-icon icon="pencil" />
                </b-button>
              </h6>
            </b-col>
            <b-col cols="8">
              <div v-if="!form.permitHolder.isSameAsAdmin">
                <review-item
                  :label="'Name:'"
                  :value="form.admin.firstName + ' ' + form.admin.lastName"
                ></review-item>
  
                <review-item
                  :label="'Email:'"
                  :value="form.admin.email"
                ></review-item>
  
                <review-item
                  :label="'Phone(s):'"
                  :value="phoneToString(form.admin.phones)"
                ></review-item>
              </div>
  
              <review-item
                :label="'Organisation details:'"
                :value="
                  form.businessDetails.name +
                  ' ' +
                  form.businessDetails.address +
                  ' ' +
                  form.businessDetails.town +
                  ' ' +
                  form.businessDetails.state
                "
              ></review-item>
  
              <review-item
                v-if="!form.permitHolder.isSameAsAdmin"
                :label="'Role/Position:'"
                :value="form.admin.position"
              ></review-item>
  
              <review-item
                :label="'Post permit to a different address?'"
                :value="
                  form.admin.hasDifferentPostalAddress === true
                    ? form.admin.otherAddress
                    : 'No'
                "
              ></review-item>
            </b-col>
          </b-row>
        </section>
  
        <section class="border-bottom border-secondary mb-4 pb-2">
          <b-row>
            <b-col cols="4">
              <h6>
                The proposed permit holder Identity
                <b-button
                  variant="link"
                  class="p-0"
                  @click.prevent=""
                  v-b-tooltip.hover
                  title="Edit this section (coming soon)"
                >
                  <b-icon icon="pencil" />
                </b-button>
              </h6>
            </b-col>
            <b-col cols="8">
              <f-42-holder-details-review
                :form="form"
                dec="form.permitHolder.dec"
              ></f-42-holder-details-review>
            </b-col>
          </b-row>
        </section>
  
        <section class="border-bottom border-secondary mb-4 pb-2">
          <b-row>
            <b-col cols="4">
              <h6>
                The proposed permit holder training
                <b-button
                  variant="link"
                  class="p-0"
                  @click.prevent=""
                  v-b-tooltip.hover
                  title="Edit this section (coming soon)"
                >
                  <b-icon icon="pencil" />
                </b-button>
              </h6>
            </b-col>
            <b-col cols="8">
              <pph-training-read-only :form="form"></pph-training-read-only>
            </b-col>
          </b-row>
        </section>
  
        <section class="border-bottom border-secondary mb-4 pb-2">
          <b-row>
            <b-col cols="4">
              <h6>
                The committee member
                <b-button
                  variant="link"
                  class="p-0"
                  @click.prevent=""
                  v-b-tooltip.hover
                  title="Edit this section (coming soon)"
                >
                  <b-icon icon="pencil" />
                </b-button>
              </h6>
            </b-col>
            <b-col cols="8">
              <f-42-member-details-review
                v-if="!form.committeeMember.isSameAsAdmin"
                :form="form"
                dec="form.permitHolder.dec"
              ></f-42-member-details-review>
              <div v-else>See Your details section</div>
            </b-col>
          </b-row>
        </section>
  
        <section class=" mb-4 pb-2">
          <b-row>
            <b-col cols="4">
              <h6>Your declaration</h6>
            </b-col>
            <b-col cols="8">
              <b-form-group>
                <b-form-checkbox
                  v-model="form.admin.confirmAuthorised"
                  :value="true"
                  :unchecked-value="false"
                >
                  I am authorised to lodge this application on behalf of the above
                  named Organisation or Branch.
                </b-form-checkbox>
              </b-form-group>
            </b-col>
          </b-row>
        </section>
  
        <f42-signature :signature="form.admin.dec.signature"></f42-signature>
  
        <section class="border-top border-secondary mt-4 pt-4">
          <b-row>
            <b-col cols="4">
              <h6>Save and Proceed</h6>
              <p>
                Invite the proposed permit holder to verify their information
              </p>
             
            </b-col>
            <b-col>
              <b-col class=" mt-3">
                
                <b-button
                  variant="primary"
                  >Invite the proposed permit holder</b-button
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
  import pphTrainingReadOnly from "./pphTrainingReadOnly.vue";


  import f42HolderDetailsReview from "../common/f42HolderDetailsReview.vue";
  import f42MemberDetailsReview from "../common/f42MemberDetailsReview.vue";
  import f42HolderTrainingReview from "../common/f42HolderTrainingReview.vue";
  import F42Signature from "../common/f42Signature.vue";
  
  export default {
    components: {
      entity,
      Notice,
      EntityAddress,
      reviewItem,
      f42HolderDetailsReview,
      f42MemberDetailsReview,
      f42HolderTrainingReview,
      F42Signature,
      pphTrainingReadOnly
    },
    name: "cpSubmitTab",
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
  