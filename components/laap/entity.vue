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

    <label v-if="showPhones">{{ phonesLabel }}</label>

    <b-row
      v-for="(phone, index) of entity.phones"
      :key="index"
      v-bind:id="index"
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
    <div class="text-end">
      <b-button variant="link" class="p-0" @click.prevent="addPhone"
        >Add another phone number</b-button
      >
    </div>
    <entity-address v-if="showAddress" :addressLabel="addressLabel" :address="entity.address"></entity-address>
    <entity-address v-if="showPostalAddress" :addressLabel="postalAddressLabel" :address="entity.postalAddress"></entity-address>

    {{ entity }}
  </div>
</template>

<script>
import entityAddress from './entityAddress.vue';
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
      default: true,
    },
    firstNameLabel: {
      type: String,
      default: "Given name(s)",
    },
    showFirstName: {
      type: Boolean,
      default: true,
    },
    lastNameLabel: {
      type: String,
      default: "Family name(s)",
    },
    showLastName: {
      type: Boolean,
      default: true,
    },
    emailLabel: {
      type: String,
      default: "Email",
    },
    showEmail: {
      type: Boolean,
      default: true,
    },
    phonesLabel: {
      type: String,
      default: "Phone number(s)",
    },
    showPhones: {
      type: Boolean,
      default: true,
    },
    addressLabel: {
      type: String,
      default: "Address",
    },
    showAddress: {
      type: Boolean,
      default: true,
    },
    postalAddressLabel: {
      type: String,
      default: "Postal Address",
    },
    showPostalAddress: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      firstnameLabel: "",
    };
  },
  computed: {},
  methods: {
    addPhone() {
      this.entity.phones.push({ type: "", number: "" });
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