<template>
  <div>
  
     <entity-address
                    addressLabel="Property address"
                    :address="property.propertyAddress"
                  ></entity-address>

                  <b-form-group label="Current market value">
                    <b-form-input
                      v-model="property.homeCurrentValue"
                    ></b-form-input>
                  </b-form-group>

                   <b-form-group label="Current mortgage owing">
                    <b-form-input
                      v-model="property.homeMortgageOwing"
                    ></b-form-input>
                  </b-form-group>

                  <div v-if="showCoOwners">

                  <b-form-group :label="AreYouStringReverse + ' the sole owner of the property?'">
                  <b-form-radio-group
                    v-model="property.homeSoleOwner"
                    :options="boolOptions"
                  ></b-form-radio-group>
                </b-form-group>

                <div v-if="property.homeSoleOwner === false">

                 <b-form-group :label="'What percentage ' + DoYouStringCont + ' own?'" >
                    <b-form-input
                      v-model="property.homeOwnershipShare"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="How many co-owners?" >
                    <b-form-input
                      v-model="property.homeCoOwners"
                    ></b-form-input>
                  </b-form-group>

                <b-form-group b-form-group :label="'Co-owner\'s relationship to ' + youString + '?'">
                  <b-form-radio-group
                  stacked
                    v-model="property.homeCoOwnersRelationship"
                    :options="['Spouse or Defacto', 'Ex-spouse or ex-defacto', 'Other']"
                  ></b-form-radio-group>
                </b-form-group>

                  <b-form-group label="Provide details" v-if="property.homeCoOwnersRelationship === 'Other'">
                    <b-form-input
                      v-model="property.homeCoOwnersRelationshipDetail"
                    ></b-form-input>
                  </b-form-group>
                  </div>
                  </div>

  </div>
</template>

<script>
import entityAddress from "./entityAddress.vue";
export default {
  components: { entityAddress },
  name: "entity",
  props: {
    idPrefix: {
      type: String,
      default: "entity-form",
    },
    property: {
      type: Object,
      default: () => ({}),
    },
    form: {
      type: Object,
      default: () => ({}),
    } ,
    showCoOwners: {
      type: Boolean,
      default: true,
    } 
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
    AreYouStringReverse: function () {
      return this.form.repType === "self" ? "are you" : "is the Applicant";
    },
    additionalS: function () {
      return this.form.repType === "self" ? "" : "s";
    },
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped >
</style>