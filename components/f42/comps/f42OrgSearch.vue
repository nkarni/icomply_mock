<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>About the Applicant (organisation or branch)</h6>
            <p>
              The permit will be posted to the address of the organisation or
              branch address unless you provide a different address.
            </p>
          </b-col>
          <b-col>
            <union-lookup
              v-if="form.businessDetails.name === ''"
              :form="form"
            ></union-lookup>
            <b-form-group v-if="form.businessDetails.name !== ''">
              <p>{{ form.businessDetails.name }}</p>
              <p>{{ form.businessDetails.address }}</p>

              <div>
                <a @click.prevent="form.businessDetails.name = ''" href=""
                  >Change organisation</a
                >
              </div>
            </b-form-group>

            <b-form-group v-if="form.businessDetails.name !== ''">
              <b-form-checkbox
                v-model="form.admin.hasDifferentPostalAddress"
                :value="true"
                :unchecked-value="false"
              >
                Post the permit to a different address.
              </b-form-checkbox>
            </b-form-group>

            <div v-if="form.admin.hasDifferentPostalAddress === true">
              <entity
                :entity="form.admin"
                showPostalAddress
                :postalAddressLabel="'Your postal address'"
              >
              </entity>
            </div>
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
  name: "f42OrgSearch",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      businessDetailsWereWrong: false,
      showIsBusinessDetailsCorrect: true,
      repTypeOptions: [
        { text: "I am the Applicant (submitting for myself)", value: "self" },
        { text: "I am the Applicant's solicitor", value: "solicitor" },
        {
          text: "I am submitting this form on behalf of the Applicant",
          value: "other",
        },
      ],
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
    onBusinessSelected() {},
  },
};
</script>
  
  <style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
  