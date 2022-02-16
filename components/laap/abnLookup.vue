<template>
  <div>
  
            <b-form-group
              label="Please enter an ABN or business name and click Search"
            >
              <b-form-input
                v-model="form.employerBusinessDetails.businessNameString"
              ></b-form-input>
              <b-button
                variant="primary"
                style="float: right"
                class="mt-2"
                v-b-modal="`select-abn`"
                >Search</b-button
              >
            </b-form-group>
             <div class="text-right">
            <b-button variant="link" class="p-0 mb-4" v-b-modal="`manual-abn-${modalId}`">
              Click here if you cannot find the right business
            </b-button>
    </div>
            <b-modal :id="`select-abn`" title="ABN Lookup">
              <template #modal-header="{ close }">
                <h6>Business Lookup</h6>
                <!-- Emulate built in modal header close button action -->
                <i
                  @click="close()"
                  v-b-tooltip.hover
                  title="Close"
                  class="bi bi-x fs-3 removeIcon"
                ></i>
              </template>

              <b-row>
                <b-col>
                  <b-form-group
                    label="We've found a few matches, please select the correct one."
                    class="mt-4"
                  >
                    <b-form-radio-group
                      v-model="
                        form.employerBusinessDetails.businessDetailsString
                      "
                      :options="[
                        'XYZ trading, ABN 98989898',
                        'Comfy Beds trading as Best Beds, ABN 45454545',
                      ]"
                      @change="onSelectedNewAbn"
                    ></b-form-radio-group>
                  </b-form-group>
                  <notice
                    message="Dev notice:<br>When the user selects a new business, the modal closes, provided business address is updated, and a toast (a floating message at the top right of the screen) will inform the user that it was updated."
                  ></notice>
                </b-col>
              </b-row>
            </b-modal>


             <b-modal :id="`manual-abn-${modalId}`" title="ABN Lookup" >
              <template #modal-header="{ close }">
                <h6>Business details</h6>
                <!-- Emulate built in modal header close button action -->
                <i
                  @click="close()"
                  v-b-tooltip.hover
                  title="Close"
                  class="bi bi-x fs-3 removeIcon"
                ></i>
              </template>

              <b-row>
                <b-col>
                  <b-form-group
                    label="Business Name"
                    class="mt-4"
                  >
                    <b-form-input></b-form-input>
                  </b-form-group>
                   <b-form-group
                    label="Business Trading name (optional)"
                    class="mt-4"
                  >
                    <b-form-input></b-form-input>
                  </b-form-group>
                   <b-form-group
                    label="Business ABN (optional)"
                    class="mt-4"
                  >
                    <b-form-input></b-form-input>
                  </b-form-group>
                 
                </b-col>
              </b-row>
            </b-modal>
  </div>
</template>

<script>
export default {
  name: "abnLookup",

  props: {
     form: {
      type: Object,
      default: () => ({})
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
      // random id for the modal
      modalId: Math.random()
        .toString(36)
        .substring(7),
    };
  },
  computed: {
   
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped >
</style>
