<template>
  <div>
    <b-form>
      <section class="mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Your details</h6>
            <p>
              The following details were provided by the union administrator.
            </p>
            <p>Please check that they are accurate and correct if required.</p>
          </b-col>
          <b-col>
            <entity
              :entity="form.committeeMember"
              showFirstName
              showLastName
              showEmail
              :firstNameLabel="'Legal first name'"
              :lastNameLabel="'Surname'"
              showPhones
            >
            </entity>
            <b-form-group label="Office held">
              <b-form-input
                v-model="form.committeeMember.officeHeld"
              ></b-form-input>
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
export default {
  components: { entity, Notice, EntityAddress },
  name: "mcmYourDetailsTab",
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
  methods: {},
};
</script>
  
  <style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
  