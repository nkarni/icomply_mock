<template>
  <div>
    <section class="border-bottom border-secondary mb-4 pb-2">
      <b-row>
        <b-col cols="4">
          <h6>Employer business details</h6>
          <p>
            We need the legal name of {{ yourString }} former employer. This may
            be different from their trading or business name. You can normally
            find it on your pay slips, PAYG payment summary, appointment letter
            or employment contract.
          </p>
          <p>
            During the case, we will call {{ yourString }} former employer
            <strong>the Respondent</strong>. This is because they are responding
            to {{ yoursString }} unfair dismissal case.
          </p>
        </b-col>
        <b-col>
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
                    value: {
                      name: 'XYZ Trading',
                      tradingName: '',
                      abn: '98989898',
                    },
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
                  <b-form-input v-model="form.respondents[index].name"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Business Trading name (optional)"
                  class="mt-4"
                >
                  <b-form-input
                    v-model="form.respondents[index].tradingName"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Business ABN (optional)" class="mt-4">
                  <b-form-input v-model="form.respondents[index].abn"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <div class="text-right">
                  <b-button
                    variant="link"
                    class="p-0 mb-4"
                    v-if="!showSearch"
                    @click.prevent="showSearch = true"
                    >Search again
                  </b-button>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <entity-address
                  :addressLabel="'Postal address'"
                  :address="form.respondents[index].postalAddress"
                  :addressHelp="'You can select another address - start typing the correct address and select one of the options'"
                  :addressString="form.respondents[index].postalAddressString"
                ></entity-address>

                <b-form-group
                  :label="'Is this the address ' + youString + ' worked at?'"
                >
                  <b-form-radio-group
                    v-model="form.respondents[index].businessAddressIsEmploymentAddress"
                    :options="boolOptions"
                  ></b-form-radio-group>
                </b-form-group>

                <entity-address
                  v-if="
                    form.respondents[index].businessAddressIsEmploymentAddress === false
                  "
                  :addressLabel="
                    'What was the address ' + youString + ' worked at?'
                  "
                  :address="form.respondents[index].employmentAddress"
                  :addressHelp="'You can select another address - start typing the correct address and select one of the options'"
                  :addressString="form.respondents[index].postalAddressString"
                ></entity-address>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </section>
    <section class="border-bottom border-secondary mb-4 pb-2">
      <b-row>
        <b-col cols="4">
          <h6>Contact Person</h6>
          <p>
            We need to contact {{ yourString }} former employer to tell them
            {{ youString }} have started a case against them. We will send them
            a copy of this form with all your answers in it. Please provide
            details of a contact person at {{ yourString }} former employer.
          </p>
        </b-col>
        <b-col>
          <!-- <b-form-group label="What is their role?">
            <b-form-input
              :v-model="businessDetails.contactPerson.role"
            ></b-form-input>
          </b-form-group> -->

          <entity
            :entity="form.respondents[index].contactPerson"
            showPhones
            showFirstName
            showLastName
            showEmail
            showTitle
          >
          </entity>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import entity from "../common/entity.vue";
import EntityAddress from "../common/entityAddress.vue";
export default {
  name: "orgRespondent",
  components: { entity, EntityAddress },
  props: {
   
    form: {
      type: Object,
      default: () => ({}),
    },
     index: {
      type: Number,
      default: 0,
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
      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
    };
  },
  computed: {
    youString: function () {
      return this.form.userRole === "dismissedPerson"
        ? "you"
        : "the dismissed person";
    },
    yourString: function () {
      return this.form.userRole === "dismissedPerson"
        ? "your"
        : "the dismissed person's";
    },
    DoYouStringCont: function () {
      return this.form.userRole === "dismissedPerson"
        ? "do you"
        : "does the dismissed person";
    },
    yoursString: function () {
      return this.form.userRole === "dismissedPerson"
        ? "yours"
        : "the dismissed person's";
    },
  },
  methods: {
    onManualBusiness() {
      this.showSearch = false;
      this.showAddManually = true;
      this.showSelectOne = false;
      this.$emit("businessSelected");
    },
    onBusinessSelected(newBus) {
      console.log(newBus);
      // if (newBus.name === "Other") {
      //   this.showAddManually = true;
      //   return;
      // }
      this.showAddManually = true;
      this.showSearch = false;
      this.showSelectOne = false;
      this.form.respondents[this.index].name = newBus.name;
      this.form.respondents[this.index].tradingName = newBus.tradingName;
      this.form.respondents[this.index].abn = newBus.abn;
      this.form.respondents[this.index].businessDetailsString = newBus.name;

      if (this.form.respondents[this.index].tradingName !== "") {
        this.form.respondents[this.index].businessDetailsString +=
          " trading as " + this.form.respondents[this.index].businessDetailsString;
      }
      if (this.form.respondents[this.index].abn !== "") {
        this.form.respondents[this.index].businessDetailsString +=
          " ABN: " + this.form.respondents[this.index].abn;
      }

      // this.$emit("businessSelected", newBus);
    },
  },
};
</script>

<style lang="scss" scoped >
</style>
