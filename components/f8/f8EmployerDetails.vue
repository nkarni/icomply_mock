<template>
  <div>
    <b-form>
      <h5 class="capFirst mb-4">
        {{ yourString }} former employer (the Respondent)
      </h5>

      <div
        v-for="(respondents, index) of form.respondents"
        :key="index"
        v-bind:id="index"
      >
        <div :class="form.respondents.length > 1 ? `left-border pl-3` : ``">
          <b-row v-if="form.respondents.length > 1">
            <b-col>
              <h5>{{ businessNames[index] }}</h5>
            </b-col>
            <b-col cols="1" class="align-middle">
              <b-button
                variant="link"
                class="p-0"
                @click.prevent="removeOrg(index)"
                v-b-tooltip.hover
                title="Remove"
              >
                <b-icon icon="x-circle" />
              </b-button>
            </b-col>
          </b-row>
          <org-respondent
            class="mt-3"
            :form="form"
            :index="index"
          ></org-respondent>
        </div>
        <div class="mt-4 text-center" v-if="index === form.respondents.length -1">
          <b-button variant="outline-primary" @click="addRespondent"
            >Add another respondent</b-button
          >
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import AbnLookup from "../common/abnLookup.vue";
import entity from "../common/entity.vue";
import EntityAddress from "../common/entityAddress.vue";
import Notice from "../common/notice.vue";
import orgRespondent from "../common/orgRespondent.vue";
export default {
  components: { entity, Notice, EntityAddress, AbnLookup, orgRespondent },
  name: "f8EmployerDetails",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      repTypeOptions: [
        { text: "I am their lawyer or paid agent", value: true },
        { text: "Family or friend", value: false },
      ],
      applyingForSelfOptions: [
        { text: "I am the applicant (submitting for myself)", value: true },
        {
          text: "I am submitting this form on behalf of someone else",
          value: false,
        },
      ],
      over18Options: [
        { text: "yes, I am over 18", value: true },
        { text: "no, I am under 18", value: false },
      ],
      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
      aboriginalityOptions: [
        { text: "Yes, Aboriginal", value: "aboriginal" },
        { text: "Yes, Torres Strait Islander", value: "islander" },
        { text: "Both Aboriginal and Torres Strait Islander", value: "both" },
        { text: "No", value: "no" },
      ],
    };
  },
  computed: {
    businessNames: function () {
      let names = [];
      var i;
      for (i = 0; i < this.form.respondents.length; i++) {
        names.push( this.form.respondents[i].name);
      }

      return names;
    },

    youString: function () {
      return this.form.userRole === "dismissedPerson" ? "you" : "the dismissed person";
    },
    yourString: function () {
      return this.form.userRole === "dismissedPerson" ? "your" : "the dismissed person's";
    },
    AreYouString: function () {
      return this.form.userRole === "dismissedPerson" ? "are you" : "is the dismissed person";
    },
    DoYouString: function () {
      return this.form.userRole === "dismissedPerson" ? "do you" : "is the dismissed person";
    },
    DoYouStringCont: function () {
      return this.form.userRole === "dismissedPerson" ? "do you" : "does the dismissed person";
    },
    youAreString: function () {
      return this.form.userRole === "dismissedPerson" ? "you are" : "the dismissed person is";
    },
    wereYouString: function () {
      return this.form.userRole === "dismissedPerson" ? "were you" : "was the dismissed person";
    },
    AreYouString: function () {
      return this.form.userRole === "dismissedPerson" ? "are you" : "the dismissed person is";
    },
    AreYouStringReverse: function () {
      return this.form.userRole === "dismissedPerson" ? "are you" : "is the dismissed person";
    },
    additionalS: function () {
      return this.form.userRole === "dismissedPerson" ? "" : "s";
    },
    yoursString: function () {
      return this.form.userRole === "dismissedPerson" ? "yours" : "the dismissed person/'s";
    },
    haveYouString: function () {
      return this.form.userRole === "dismissedPerson" ? "have you" : "has the dismissed person";
    },
  },
  methods: {
    removeOrg(index) {
      this.form.respondents.splice(index, 1);
    },
    addRespondent() {
      this.form.respondents.push({
        businessDetailsString: "",
        name: "",
        tradingName: "",
        abn: "",
        postalAddress: {
          line1: "",
          line2: "",
          suburb: "",
          postcode: "",
          state: "",
          country: "",
        },
        postalAddressString: "",
        contactPerson: {
          role: "",
          title: "",
          titleDetails: "",
          firstName: "",
          lastName: "",
          email: "",
          phones: [
            {
              type: "",
              number: "",
              isSafe: null,
            },
          ],
        },
        businessAddressIsEmploymentAddress: null,
        employmentAddress: {
          line1: "",
          line2: "",
          suburb: "",
          postcode: "",
          state: "",
          country: "",
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
.left-border {
  border-left: 4px solid var(--primary) !important;
}
</style>
