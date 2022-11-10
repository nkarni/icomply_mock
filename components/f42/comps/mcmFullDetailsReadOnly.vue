<template>
    <div>
      <b-form>
        <section class="border-bottom border-secondary mb-4 pb-2">
          <b-row>
            <b-col cols="4">
              <h6>The committee member's details</h6>
            </b-col>
            <b-col cols="8">
              <mcm-identity-read-only
                :form="form"
              ></mcm-identity-read-only>
            </b-col>
          </b-row>
        </section>

        <section class="border-bottom border-secondary mb-4 pb-2">
          <b-row>
            <b-col cols="4">
              <h6>Photo and signature</h6>
            </b-col>
            <b-col cols="8">
              <div>
              <p>
                I, <br />Sam Smith<br />positionName<br />Of orgName,
                branch, full streetAddress
              </p>

              <p>Declare that:</p>
              <ol>
                <li>
                  The photograph above is a true photograph of the proposed permit holder [PPH Name and position to embed here].
                </li>
                <li>
                  I have compared the signature above to the signatures in one or more other signed documents shown to me by the proposed permit holder [PPH Name and position], and I believe the signature to be a true signature of the proposed permit holder.
                </li>
                <li>
                  The other signed document(s) shown to me by the proposed permit holder [Name and position] were:
                  <br>ABCD</br>
                  XYZ
                </li>
                
              </ol>
            </div>
            </b-col>
          </b-row>
        </section>
  
         <section class="border-bottom border-secondary mb-4 pb-2">
          <b-row>
            <b-col cols="4">
              <h6>The committee member's declaration</h6>
              <p>The The committee member has submitted the following declaration</p>
            </b-col>
            <b-col cols="8">
              <mcm-pqm-read-only
                :form="form"
              ></mcm-pqm-read-only>
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
  import mcmIdentityReadOnly from "./mcmIdentityReadOnly.vue";
  import mcmPqmReadOnly from "./mcmPqmReadOnly.vue";
  
  
  export default {
    components: {
      entity,
      Notice,
      EntityAddress,
      reviewItem,
      pphIdentityReadOnly,
      pphPhotoSignatureReadOnly,
      pphPqmReadOnly,
      mcmIdentityReadOnly,
      mcmPqmReadOnly
    },
    name: "mcmFullDetailsReadOnly",
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
  