<template>
  <div>
    <b-form-group
      label="Please enter business name or ABN and click Search"
      v-if="showSearch"
    >
      <b-form-input></b-form-input>
      <b-button
        variant="primary"
        style="float: right"
        class="mt-2"
        @click="showSelectOne = true"
        >Search</b-button
      >
    </b-form-group>

    <!-- found a some matches -->
    <div v-if="showSelectOne">
      <b-form-group
        label="We've found a few matches, please select the correct one."
        class="mt-4"
      >
        <b-form-radio-group
          @change="onBusinessSelected"
          :options="[
            {
              text: 'XYZ trading, ABN 98989898',
              value: { name: 'XYZ Trading', tradingName: '', abn: '98989898' },
            },
            {
              text: 'Comfy Beds trading as Best Beds, ABN 45454545',
              value: {
                name: 'Comfy Beds',
                tradingName: 'Best Beds',
                abn: '45454545',
              },
            },
            {
              text: 'I have not found the business',
              value: { name: 'Other', tradingName: '', abn: '' },
            },
          ]"
        ></b-form-radio-group>
      </b-form-group>
    </div>
    <div v-if="showAddManually">
      <b-row>
        <b-col>
          <b-form-group label="Business Name" class="mt-4">
            <b-form-input v-model="businessDetails.name"></b-form-input>
          </b-form-group>
          <b-form-group label="Business Trading name (optional)" class="mt-4">
            <b-form-input v-model="businessDetails.tradingName"></b-form-input>
          </b-form-group>
          <b-form-group label="Business ABN (optional)" class="mt-4">
            <b-form-input v-model="businessDetails.abn"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </div>
    <!-- add manually-->
    <!-- <div v-if="showAddManually">
      <b-row>
        <b-col>
          <b-form-group label="Business Name" class="mt-4" >
            <b-form-input v-model="businessDetails.name"></b-form-input>
          </b-form-group>
          <b-form-group label="Business Trading name (optional)" class="mt-4">
            <b-form-input v-model="businessDetails.tradingName"></b-form-input>
          </b-form-group>
          <b-form-group label="Business ABN (optional)" class="mt-4">
            <b-form-input v-model="businessDetails.abn"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      </div> -->
  </div>
</template>

<script>
import laap from "../../pages/laap.vue";
export default {
  components: { laap },
  name: "abnLookup",

  props: {
    businessDetails: {
      type: Object,
      default: () => ({}),
    },
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
      showSelectOne: false,
      showAddManually: false,
      showSearch: true,
      // random id for the modal
      modalId: Math.random().toString(36).substring(7),
      selectedBusiness: {},
    };
  },
  computed: {},
  methods: {
    onManualBusiness() {
      this.showSearch = false;
      this.showAddManually = true;
      this.showSelectOne = false;
      this.$emit("businessSelected");
    },
    onBusinessSelected(newBus) {
      if (newBus.name === "Other") {
        this.showAddManually = true;
        return;
      }
      // this.showSearch = false;
      this.showSelectOne = false;
      this.businessDetails.name = newBus.name;
      this.businessDetails.tradingName = newBus.tradingName;
      this.businessDetails.abn = newBus.abn;
      this.businessDetails.businessNameString = newBus.name;

      if (this.businessDetails.tradingName !== "") {
        this.businessDetails.businessNameString +=
          " trading as " + this.businessDetails.businessNameString;
      }
      if (this.businessDetails.abn !== "") {
        this.businessDetails.businessNameString +=
          " ABN: " + this.businessDetails.abn;
      }

      this.$emit("businessSelected", newBus);
    },
  },
};
</script>

<style lang="scss" scoped >
</style>
