<template>
  <div>
    <b-form-group
      :label="addressLabel"
      description="Start typing your address and select one of the options"
      class="mb-0"
    >
      <b-form-input
        :id="idPrefix + '-address'"
        :name="idPrefix + '-address'"

      ></b-form-input>
    </b-form-group>

    <div class="text-right">
      <b-button variant="link" class="p-0 mb-4" v-b-modal="`manual-address-${modalId}`">
        Click here if you cannot find the right address
      </b-button>
    </div>

    <b-modal :id="`manual-address-${modalId}`" title="BootstrapVue">
      <template #modal-header="{ close }">
        <h6>Address {{ modalId }}</h6>
        <!-- Emulate built in modal header close button action -->
        <i
          @click="close()"
          v-b-tooltip.hover
          title="Close"
          class="bi bi-x fs-3 removeIcon"
        ></i>
      </template>

      <b-form-group label="Address line 1">
        <b-form-input
          :id="idPrefix + '-line1'"
          :name="idPrefix + '-line1'"
          v-model="address.line1"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Address line 2">
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
          v-model="address.Suburb"
        ></b-form-input>
      </b-form-group>
      <b-row>
        <b-col>
          <b-form-group label="Postcode">
            <b-form-input
              :id="idPrefix + '-Postcode'"
              :name="idPrefix + '-Postcode'"
              v-model="address.Postcode"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="State">
            <b-form-input
              :id="idPrefix + '-State'"
              :name="idPrefix + '-State'"
              v-model="address.State"
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
    </b-modal>

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
      // random id for the modal
      modalId: Math.random()
        .toString(36)
        .substring(7),
    };
  },
  computed: {
  },
  methods: {},
};
</script>

<style lang="scss" scoped >
</style>
