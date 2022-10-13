<template>
  <div>
    <b-form-group :label="orgNameLabel" v-if="showOrgName">
      <b-form-input :id="idPrefix + '-orgName'" :name="idPrefix + '-orgName'" v-model="entity.orgName"></b-form-input>
    </b-form-group>

    <entity-address v-if="showOrgAddress" :addressLabel="orgAddressLabel" :address="entity.orgAddress"></entity-address>

    <b-form-group :label="titleLabel" v-if="showTitle" style="max-width: 150px">
      <b-form-select v-model="entity.title" :options="['Mr.', 'Mrs.', 'Ms.', 'Other']">
      </b-form-select>
    </b-form-group>
    <b-form-group v-if="entity.title === 'Other'" label="Please specify">
      <b-form-input v-model="entity.titleDetails"></b-form-input>
    </b-form-group>
    <b-form-group :label="firstNameLabel" v-if="showFirstName">
      <b-form-input :id="idPrefix + '-firstName'" :name="idPrefix + '-firstName'" v-model="entity.firstName">
      </b-form-input>
    </b-form-group>

    <div v-if="showMiddleName">
      <b-form-group :label="haveMiddleNameLabel">
        <b-form-radio-group v-model="entity.hasMiddleName" :options="boolOptions"></b-form-radio-group>
      </b-form-group>
      <b-form-group :label="middleNameLabel" v-if="showMiddleName && entity.hasMiddleName === true">
        <b-form-input v-model="entity.middleName"></b-form-input>
      </b-form-group>
    </div>

    <b-form-group :label="lastNameLabel" v-if="showLastName">
      <b-form-input :id="idPrefix + '-lastName'" :name="idPrefix + '-lastName'" v-model="entity.lastName">
      </b-form-input>
    </b-form-group>

    <div v-if="showPreferredName">
      <b-form-group :label="havePreferredNameLabel">
        <b-form-radio-group v-model="entity.hasPreferredName" :options="boolOptions"></b-form-radio-group>
      </b-form-group>
      <b-form-group :label="preferredNameLabel" v-if="entity.hasPreferredName === true">
        <b-form-input v-model="entity.preferredName"></b-form-input>
      </b-form-group>
    </div>

<div v-if="showPreferredPronoun">
     
      <b-form-group :label="preferredPronounLabel" description="Please let us know if you have a preference for how the Commission refers to you throughout this case." >
        <b-form-input v-model="entity.preferredPronoun" ></b-form-input>
      </b-form-group>
    </div>


    <div v-if="showOtherNames">
      <b-form-group :label="haveOtherNamesLabel">
        <b-form-radio-group v-model="entity.hasOtherNames" :options="boolOptions"></b-form-radio-group>
      </b-form-group>
      <div v-if="entity.hasOtherNames === true">


        <div v-for="(otherName, index) of entity.otherNames" :key="index" v-bind:id="index" class="mb-2 courts pl-3">
          <b-form-group label="Other first name">
            <b-form-input v-model="
              entity.otherNames[index].firstName
            "></b-form-input>
          </b-form-group>
          <b-form-group label="Other surname">
            <b-form-input v-model="
              entity.otherNames[index].lastName
            "></b-form-input>
          </b-form-group>

          <div class="text-right">
            <b-button variant="link" class="p-0 mb-4" @click.prevent="addOtherName" v-if="
              index < 3 && entity.hasOtherNames
            ">Click here to add another previous name</b-button>
          </div>
        </div>


      </div>
    </div>


    <b-form-group :label="emailLabel" v-if="showEmail" :description="emailDesc">
      <b-form-input :id="idPrefix + '-email'" :name="idPrefix + '-email'" v-model="entity.email"></b-form-input>
    </b-form-group>
    <b-form-group v-if="showIsSafeEmail" :label="safeEmailAddressLabel">
      <b-form-radio-group id="isAEmailSafeToMail" v-model="entity.isEmailSafeToMail" :options="boolOptions"
        name="isAEmailSafeToMail"></b-form-radio-group>
    </b-form-group>

    <div v-if="showPhones">
      <label>{{ phonesLabel }}</label>

      <div v-for="(phone, index) of entity.phones" :key="index" v-bind:id="index">
        <b-row>
          <b-col cols="4">
            <b-form-group>
              <b-form-select v-model="entity.phones[index].type" :id="idPrefix + '-phoneType' + index"
                :name="idPrefix + '-phoneType' + index" :options="[
                  { value: 'mobile', text: 'Mobile' },
                  { value: 'landline', text: 'Land line' },
                ]"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group>
              <b-form-input :id="idPrefix + '-phoneNumber' + index" :name="idPrefix + '-phoneNumber' + index"
                v-model="entity.phones[index].number"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="1" class="align-middle">
            <b-button variant="link" class="p-0" @click.prevent="removePhone(index)" v-b-tooltip.hover title="Remove">
              <b-icon icon="x-circle" />
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group v-if="showIsSafePhone" :label="safePhoneLabel" class="mb-0">
              <b-form-radio-group :id="idPrefix + '-isSafe' + index" :name="idPrefix + '-isSafe' + index"
                v-model="entity.phones[index].isSafe" :options="boolOptions"></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <div class="text-right" v-if="entity.phones === 0 || entity.phones[0].number.length < 8">
        At least one phone number is required.
      </div>

      <div class="text-right">
        <b-button variant="link" class="p-0 mb-4" @click.prevent="addPhone">Click here to add another phone number
        </b-button>
      </div>
    </div>

    <b-form-group :label="mobilePhoneLabel" v-if="showMobilePhone" :description="mobilePhoneDesc">
      <b-form-input v-model="entity.mobilePhone"></b-form-input>
    </b-form-group>

    <entity-address v-if="showAddress" :addressLabel="addressLabel" :address="entity.address" showOrgName>
    </entity-address>

    <b-form-group v-if="showPostalAddessSame">
      <b-form-checkbox id="postalAddressSame" v-model="entity.postalAddressSame" name="postalAddressSame" :value="true"
        :unchecked-value="false">
        {{ postalAddessSameLabel }}
      </b-form-checkbox>
    </b-form-group>

    <entity-address v-if="showPostalAddress && !entity.postalAddressSame" :addressLabel="postalAddressLabel"
      :address="entity.postalAddress"></entity-address>

    <b-form-group v-if="showIsSafePostalAddress" :label="safePostalAddressLabel">
      <b-form-radio-group id="isPostalAddressSafeToMail" v-model="entity.isPostalAddressSafeToMail"
        :options="boolOptions" name="isPostalAddressSafeToMail"></b-form-radio-group>
    </b-form-group>

    <b-form-group v-if="showPreferredContact" :label="preferredContactLabel">
      <b-form-select v-model="entity.preferredContact" id="preferredContact" name="preferredContact"
        :options="preferredContactOptions"></b-form-select>
    </b-form-group>

    <slot name="additionalFields"></slot>
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
    entity: {
      type: Object,
      default: () => ({}),
    },
    orgNameLabel: {
      type: String,
      default: "Organisation name",
    },
    showOrgName: {
      type: Boolean,
      default: false,
    },
    orgAddressLabel: {
      type: String,
      default: "Organisation address",
    },
    showOrgAddress: {
      type: Boolean,
      default: false,
    },
    firstNameLabel: {
      type: String,
      default: "First name",
    },
    showFirstName: {
      type: Boolean,
      default: false,
    },
    middleNameLabel: {
      type: String,
      default: "Middle name(s) (optional)?",
    },
    haveMiddleNameLabel: {
      type: String,
      default: "Do you have a middle name?",
    },
    showMiddleName: {
      type: Boolean,
      default: false,
    },
    showOtherNames: {
      type: Boolean,
      default: false,
    },
    haveOtherNamesLabel: {
      type: String,
      default: "Do you have a other names?",
    },
    havePreferredNameLabel: {
      type: String,
      default: "Do you have a preferred name?",
    },
    lastNameLabel: {
      type: String,
      default: "Surname",
    },
    showLastName: {
      type: Boolean,
      default: false,
    },
    emailLabel: {
      type: String,
      default: "Email",
    },
    emailDesc: {
      type: String,
      default: "",
    },
    showEmail: {
      type: Boolean,
      default: false,
    },
    phonesLabel: {
      type: String,
      default: "Phone number(s)",
    },
    showPhones: {
      type: Boolean,
      default: false,
    },
    addressLabel: {
      type: String,
      default: "Address",
    },
    showAddress: {
      type: Boolean,
      default: false,
    },
    postalAddressLabel: {
      type: String,
      default: "Postal Address",
    },
    showPostalAddress: {
      type: Boolean,
      default: false,
    },
    safeAddressLabel: {
      type: String,
      default: "Is it safe to send you mail to this address?",
    },
    showIsSafeAddress: {
      type: Boolean,
      default: false,
    },
    safePostalAddressLabel: {
      type: String,
      default: "Is it safe to send you mail to this address?",
    },
    showIsSafePostalAddress: {
      type: Boolean,
      default: false,
    },
    safeEmailAddressLabel: {
      type: String,
      default: "Is it safe to contact on this email address?",
    },
    showIsSafeEmail: {
      type: Boolean,
      default: false,
    },
    safePhoneLabel: {
      type: String,
      default: "Is it safe to contact on this phone number?",
    },
    showIsSafePhone: {
      type: Boolean,
      default: false,
    },
    postalAddessSameLabel: {
      type: String,
      default: "Postal address is the same as home address",
    },
    showPostalAddessSame: {
      type: Boolean,
      default: false,
    },
    titleLabel: {
      type: String,
      default: "Title (optional)",
    },
    showTitle: {
      type: Boolean,
      default: false,
    },
    titleLabel: {
      type: String,
      default: "Title (optional)",
    },
    showPreferredPronoun: {
      type: Boolean,
      default: false,
    },
    preferredPronounLabel: {
      type: String,
      default: "Preferred pronoun (optional)",
    },
    showPreferredName: {
      type: Boolean,
      default: false,
    },
    preferredContactLabel: {
      type: String,
      default: "Preferred Contact",
    },
    showPreferredContact: {
      type: Boolean,
      default: false,
    },
    showMobilePhone: {
      type: Boolean,
      default: false,
    },
    mobilePhoneLabel: {
      type: String,
      default: "Mobile Phone",
    },
    mobilePhoneDesc: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      firstnameLabel: "",
      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
    };
  },
  computed: {
    preferredContactOptions: function () {
      // `this` points to the vm instance
      let options = [];
      if (this.entity.email.length) {
        options.push({ value: "email", text: "Email" });
      }
      if (this.entity.phones.length) {
        options.push({ value: "phone", text: "Phone" });
      }
      if (this.entity.postalAddress) {
        options.push({ value: "mail", text: "Mail" });
      }
      return options;
    },
  },
  methods: {
    addPhone() {
      this.entity.phones.push({ type: "", number: "", isSafe: null });
    },
    removePhone(i) {
      this.entity.phones.splice(i, 1);
    },
    onAddressModalClose() {
      this.addressString = this.entity.addresses[0].join;
      // @todo use this to show in address field?
    },
    addOtherName() {
      this.entity.otherNames.push({
        firstName: "",
        lastName: "",
      });
    },
  },
};
</script>

<style lang="scss" scoped >
</style>
