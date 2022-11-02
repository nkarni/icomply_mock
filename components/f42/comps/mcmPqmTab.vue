<template>
  <div>
    <b-form>
      <section class="mb-4">
        <b-row>
          <b-col cols="">
            <mcmPqm :form="form" :dec="form.committeeMember.dec"></mcmPqm>
          </b-col>
        </b-row>
      </section>

      <section :class="'mb-4 ' + (disableSignature ? 'disabled' : '')">
        <f42-signature
          :form="form"
          :signature="form.committeeMember.dec.signature"
          :indented="false"
        ></f42-signature>
      </section>

      <section
        :class="
          'border-top border-secondary mb-4 pt-4 ' +
          (disableSignature === true ? ' disabled ' : '')
        "
      >
        <b-row>
          <b-col>
            <h5>Submit</h5>
            <p></p>
            <p>
              The form will be submitted for verification by the administrator.
            </p>
            <b-col class="text-center mt-3">
              <b-button variant="primary">Submit the form</b-button>
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
import mcmPqm from "./mcmPqm.vue";
import f42Signature from "../common/f42Signature.vue";
export default {
  components: { entity, Notice, EntityAddress, f42Signature, mcmPqm },
  name: "pphPqmTab",
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
    disableSignature: function () {
      return !(
        this.form.permitHolder.dec.awareOfMatters === false ||
        this.form.permitHolder.dec.awareOfMattersDetails.length > 2
      );
    },
  },
  methods: {
    boolToString(val) {
      if (val === true) {
        return "Yes";
      }
      return "No";
    },
    personToString(person) {
      var str;
      // let personName = 'sdfsdfsdf'
      str = person.firstName + " " + person.lastName + ",jhglkjg";
      // console.log('str', str)

      str += " " + person.email;

      if (person.email.length > 0) {
        str = +" " + person.email;
      }
      if (person.phones.length > 0) {
        person.phones.forEach((phone) => {
          if (phone.phone !== "") {
            str += " " + phone.phone + " (" + phone.type + ")";
          }
        });
        str += " " + person.email;
      }
      console.log("person", person);
      console.log("str", str);
      return str;
    },
  },
};
</script>
    
    <style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
.disabled {
  opacity: 0.4;
}
</style>
    