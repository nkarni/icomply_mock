<template>
  <div>
    <strong>Employee organisation search</strong>
    <b-form-group label="Employee organisation name or abbreviation">
      <b-form-input></b-form-input>

    </b-form-group>
    <b-form-group label="Suburb/Town/Locality (optional)">
      <b-form-input></b-form-input>
    </b-form-group>
     <b-form-group label="State (optional)">
      <b-form-select :options="['ACT','NSW','NT','QLD','SA','TAS', 'VIC', 'WA']"></b-form-select>
    </b-form-group>
    <b-form-group>
      <b-button variant="primary" style="float: right" class="mt-2" @click="showSelectOne = true">Search</b-button>
    </b-form-group>
    

    <!-- found a some matches -->
    <div v-if="showSelectOne">
      <b-form-group label="We've found a few matches, please select the correct one." class="mt-4">
        <b-form-radio-group stacked v-model="form.businessDetails" :options="[
          {
            text: 'Org1, ACT Branch',
            value: { name: 'Org1, ACT Branch', address: '12 Main Street, Canberra ACT 1234', town: 'Canberra', state: 'VIC' },
          },
          {
            text: 'Org1, ACT Branch',
            value: { name: 'Org1, NSW Branch', address: '555 Side Street, Sydney NSW 2000', town: 'Penrith', state: 'NSW' },
          },
          {
            text: 'Org2',
            value: { name: 'Org2', address: '333 Main Street, Canberra ACT 1234', town: 'Canberra', state: 'VIC' },
          },
          {
            text: 'Org3',
            value: { name: 'Org2', address: '333 Main Street, Canberra ACT 1234', town: 'Canberra', state: 'VIC' },
          },
          
         
          // {
          //   text: 'I have not found the business',
          //   value: { name: 'Other', address: '' ,town: '', state: ''},
          // },
        ]"></b-form-radio-group>
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

  </div>
</template>

<script>
import formVue from "../../layouts/form.vue";
import laap from "../../pages/laap.vue";
export default {
  components: { laap },
  name: "unionLookup",

  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    businessDetails: {
      type: Object,
      default: () => ({}),
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

  },
};
</script>

<style lang="scss" scoped >
</style>
