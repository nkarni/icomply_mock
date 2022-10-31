<template>
  <div>
    <b-form>
      <section class=" border-top border-secondary mt-4 pt-4">
        <b-row>
          <b-col cols="4">
            <h6>Your details</h6>
            <p>
              We have pre-populated your details from our records. Please check
              and correct if required.
            </p>
            <p>
              We will contact you if we have questions about the application.
            </p>
          </b-col>
          <b-col>
            <notice
              class="mb-4"
              v-if="form.permitHolder.isSameAsAdmin"
              :message="'Enter your full details in the next step.'"
            ></notice>

            <entity
              v-if="!form.permitHolder.isSameAsAdmin"
              :entity="form.admin"
              showFirstName
              showLastName
              showEmail
              showPhones
              :firstNameLabel="'First name'"
              :lastNameLabel="'Surname'"
            >
            </entity>
            <b-form-group
              label="Role/Position"
              v-if="!form.permitHolder.isSameAsAdmin"
            >
              <b-form-input v-model="form.admin.position"></b-form-input>
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
import UnionLookup from "../../common/unionLookup.vue";
export default {
  components: { entity, Notice, EntityAddress, UnionLookup },
  name: "cpIdentity",
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
</style>
