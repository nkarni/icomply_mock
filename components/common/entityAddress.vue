<template>
  <div>
    <div v-if="!expandAddress">
      <b-form-group
        :label="addressLabel"
        :description="addressHelp"
        class="mb-0"
      >
        <b-form-input
          :id="idPrefix + '-address'"
          :name="idPrefix + '-address'"
          v-model="addressString"
        ></b-form-input>
      </b-form-group>

      <div class="text-right">
        <b-button variant="link" class="p-0 mb-4" @click="expandAddress = true">
          Click here if you cannot find the right address
        </b-button>
      </div>
    </div>
    <div v-if="expandAddress === true">
      <!-- <template #modal-header="{ close }">
        <h6>Address </h6>
       
        <i @click="close()" v-b-tooltip.hover title="Close" class="bi bi-x fs-3 removeIcon"></i>
      </template> -->

      <b-form-group label="Address line 1">
        <b-form-input
          :id="idPrefix + '-line1'"
          :name="idPrefix + '-line1'"
          v-model="address.line1"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Address line 2 (optional)">
        <b-form-input
          :id="idPrefix + '-line2'"
          :name="idPrefix + '-line2'"
          v-model="address.line2"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Suburb">
        <b-form-input
          :id="idPrefix + '-Suburb'"
          :name="idPrefix + '-Suburb'"
          v-model="address.suburb"
        ></b-form-input>
      </b-form-group>
      <b-row>
        <b-col>
          <b-form-group label="Postcode">
            <b-form-input
              :id="idPrefix + '-Postcode'"
              :name="idPrefix + '-Postcode'"
              v-model="address.postcode"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="State">
            <b-form-input
              :id="idPrefix + '-State'"
              :name="idPrefix + '-State'"
              v-model="address.state"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-group label="Country">
        <b-form-select
          v-model="address.country"
          :id="idPrefix + '-country'"
          :name="idPrefix + '-country'"
          :options="[{ value: 'Australia', text: 'Australia' }]"
        ></b-form-select>
      </b-form-group>
   
    </div>
  </div>
</template>

<script>
export default {
  name: "entityAddress",

  props: {
    addressLabel: {
      type: String,
      default: "Address",
    },
    showAddress: {
      type: Boolean,
      default: true,
    },
    idPrefix: {
      type: String,
      default: "entity-form",
    },
    addressHelp: {
      type: String,
      default: "Start typing your address and select one of the options",
    },
    addressString: {
      type: String,
      default: "",
    },

    address: {
      type: Object,
      default: () => ({
        line1: "",
        line2: "",
        suburb: "",
        postcode: "",
        state: "",
        country: "",
      }),
    },
  },
  data() {
    return {
      expandAddress: false,
      // random id for the modal
      modalId: Math.random().toString(36).substring(7),
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped >
</style>
