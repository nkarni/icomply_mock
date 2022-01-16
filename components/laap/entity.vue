<template>
  <div>
    <b-form-group :label="orgNameLabel" v-if="showOrgName">
      <b-form-input
        :id="idPrefix + '-orgName'"
        :name="idPrefix + '-orgName'"
        v-model="entity.orgName"
      ></b-form-input>
    </b-form-group>
    <b-form-group :label="firstNameLabel" v-if="showFirstName">
      <b-form-input
        :id="idPrefix + '-firstName'"
        :name="idPrefix + '-firstName'"
        v-model="entity.firstName"
      ></b-form-input>
    </b-form-group>
    <b-form-group :label="lastNameLabel" v-if="showLastName">
      <b-form-input
        :id="idPrefix + '-lastName'"
        :name="idPrefix + '-lastName'"
        v-model="entity.lastName"
      ></b-form-input>
    </b-form-group>
    <b-form-group :label="emailLabel" v-if="showEmail">
      <b-form-input
        :id="idPrefix + '-email'"
        :name="idPrefix + '-email'"
        v-model="entity.email"
      ></b-form-input>
    </b-form-group>
    <b-form-group v-if="showIsSafeEmail" :label="safeEmailAddressLabel">
      <b-form-radio-group
        id="isAEmailSafeToMail"
        v-model="entity.isEmailSafeToMail"
        :options="boolOptions"
        name="isAEmailSafeToMail"
      ></b-form-radio-group>
    </b-form-group>

    <div v-if="showPhones">
      <label>{{ phonesLabel }}</label>

      <div
        v-for="(phone, index) of entity.phones"
        :key="index"
        v-bind:id="index"
      >
        <b-row
        >
          <b-col cols="4">
            <b-form-group>
              <b-form-select
                v-model="entity.phones[index].type"
                :id="idPrefix + '-phoneType' + index"
                :name="idPrefix + '-phoneType' + index"
                :options="[
                  { value: 'mobile', text: 'Mobile' },
                  { value: 'landline', text: 'Land line' },
                ]"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group>
              <b-form-input
                :id="idPrefix + '-phoneNumber' + index"
                :name="idPrefix + '-phoneNumber' + index"
                v-model="entity.phones[index].number"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="1">
            <i
              @click.prevent="removePhone(index)"
              v-b-tooltip.hover
              title="Remove"
              class="bi bi-x-circle fs-5 removeIcon"
            ></i>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group v-if="showIsSafePhone" :label="safePhoneLabel">
              <b-form-radio-group
                id="showIsSafePhone"
                v-model="entity.phones[index].isSafe"
                :options="boolOptions"
                name="showIsSafePhone"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
      </div>

      <div class="text-end">
        <b-button variant="link" class="p-0" @click.prevent="addPhone"
          >Add another phone number</b-button
        >
      </div>
    </div>

    <entity-address
      v-if="showAddress"
      :addressLabel="addressLabel"
      :address="entity.address"
      showOrgName
    ></entity-address>
    
     <b-form-group v-if="showPostalAddessSame">
              <b-form-checkbox
                id="postalAddressSame"
                v-model="entity.postalAddressSame"
                name="postalAddressSame"
                :value="true"
                :unchecked-value="false"
              >
                {{ postalAddessSameLabel}}
              </b-form-checkbox>
            </b-form-group>
            

    <entity-address
      v-if="showPostalAddress && !entity.postalAddressSame"
      :addressLabel="postalAddressLabel"
      :address="entity.postalAddress"
    ></entity-address>
    
    
    
    
    <b-form-group
      v-if="showIsSafePostalAddress"
      :label="safePostalAddressLabel"
    >
      <b-form-radio-group
        id="isPostalAddressSafeToMail"
        v-model="entity.isPostalAddressSafeToMail"
        :options="boolOptions"
        name="isPostalAddressSafeToMail"
      ></b-form-radio-group>
    </b-form-group>

      <b-form-group v-if="showPreferredContact" :label="preferredContactLabel">
              <b-form-select
                v-model="entity.preferredContact"
                id="preferredContact"
                name="preferredContact"
                :options="preferredContactOptions"
              ></b-form-select>
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
    firstNameLabel: {
      type: String,
      default: "Given name(s)",
    },
    showFirstName: {
      type: Boolean,
      default: false,
    },
    lastNameLabel: {
      type: String,
      default: "Family name(s)",
    },
    showLastName: {
      type: Boolean,
      default: false,
    },
    emailLabel: {
      type: String,
      default: "Email",
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
preferredContactLabel: {
      type: String,
      default: "Preferred Contact",
    },
    showPreferredContact: {
      type: Boolean,
      default: false,
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
      let options = []
      if(this.entity.email.length){
        options.push(
          { value: 'email', text: 'Email' }
        )
      }
      if(this.entity.phones.length){
        options.push(
          { value: 'phone', text: 'Phone' }
        )
      }
      if(this.entity.postalAddress){
        options.push(
          { value: 'mail', text: 'Mail' }
        )
      }
      return options
    }
  },
  methods: {
    addPhone() {
      this.entity.phones.push({ type: "", number: "", isSafe: null });
    },
    removePhone(i) {
      this.entity.phones.splice(i);
    },
    onAddressModalClose() {
      this.addressString = this.entity.addresses[0].join;
      // @todo use this to show in address field?
    },
  },
};
</script>

<style lang="scss" scoped >
</style>