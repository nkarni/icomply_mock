<template>
    <div>
      <b-form>
       
  
        <section class="border-bottom border-secondary mb-4 pb-2">
          <b-row>
            <b-col cols="4">
              <h6>The proposed permit holder Identity</h6>
            </b-col>
            <b-col cols="8">
              <pph-identity-read-only
                :form="form"
              ></pph-identity-read-only>
            </b-col>
          </b-row>
        </section>
  
         <section class=" mb-4 pb-2">
          <b-row>
            <b-col cols="4">
              <h6>The proposed permit holder declaration</h6>
              <p>The proposed permit holder has submitted the following declaration</p>
            </b-col>
            <b-col cols="8">
              <pph-pqm-read-only
                :form="form"
              ></pph-pqm-read-only>
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
  
  export default {
    components: {
      entity,
      Notice,
      EntityAddress,
      reviewItem,
      pphIdentityReadOnly,
      pphPhotoSignatureReadOnly,
      pphPqmReadOnly,
    },
    name: "mcmAboutPphTab",
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
  