<template>
  <div>
    <b-form>
      <b-tabs
        content-class="mt-3 inner-tab"
        active-nav-item-class="text-primary laap-inner-nav-item-active"
        nav-class="laap-inner-nav"
        v-model="innerTabIndex"
      >
        <b-tab
          title="Benefits"
          :title-link-class="[
            'laap-inner-title-link',
            { 'laap-inner-nav-item-complete': true },
          ]"
        >
          <section class="border-bottom border-secondary mb-4 pb-2">
            <b-row>
              <b-col cols="4">
                <h6>Financial Details</h6>
                <p>
                  You must give us all relevant financial information about your
                  financial circumstances.<br /><br />All fields are mandatory
                  unless marked as optional.
                </p>
              </b-col>
              <b-col>
                <b-form-group
                  :label="
                    DoYouStringCont + ' receive a pension or benefit allowance?'
                  "
                >
                  <b-form-radio-group
                    id="receivesBenefit"
                    v-model="form.entities.applicant.benefits.receivesBenefit"
                    :options="boolOptions"
                    name="receivesBenefit"
                  ></b-form-radio-group>
                </b-form-group>

                <div v-if="form.entities.applicant.benefits.receivesBenefit">
                  <b-form-group :label="yourString + ' CRN Number (Centrelink reference number)'">
                    <b-form-input
                      id="crnNumber"
                      name="crnNumber"
                      v-model="form.entities.applicant.benefits.crnNumber"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    :label="'OR ' + yourString + ' DVA Number (Department of Veterans\' Affairs)'"
                    description="A CRN number or DVA number is required"
                  >
                    <b-form-input
                      id="dvaNumber"
                      name="dvaNumber"
                      v-model="form.entities.applicant.benefits.dvaNumber"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    :label="
                      'Select the types of payment(s) ' +
                      youString +
                      ' receive' +
                      additionalS
                    "
                  >
                    <b-form-checkbox-group
                      id="benefitsPaymentTypes"
                      stacked
                      v-model="
                        form.entities.applicant.benefits.benefitsPaymentTypes
                      "
                      :options="benefitsOptions"
                      name="benefitsPaymentTypes"
                    ></b-form-checkbox-group>
                  </b-form-group>

                    <b-form-group
                  :label="'Please provide details'"
                  v-if="form.entities.applicant.benefits.benefitsPaymentTypes.includes('None of the above')"
                >
                  <b-form-textarea
                    v-model="form.entities.applicant.benefits.benefitsPaymentTypesDetails"
                    rows="3"
                    max-rows="6"
                    
                  ></b-form-textarea>
                </b-form-group>

                  <b-form-group
                    :label="
                      DoYouStringCont +
                      ' receive' +
                      additionalS +
                      ' the maximum payment?'
                    "
                    v-if="
                      form.entities.applicant.benefits.benefitsPaymentTypes
                        .length > 1 ||
                      (form.entities.applicant.benefits.benefitsPaymentTypes
                        .length === 1 &&
                        form.entities.applicant.benefits
                          .benefitsPaymentTypes[0] !== 'None of the above')
                    "
                  >
                    <b-form-radio-group
                      id="maxPayment"
                      v-model="form.entities.applicant.benefits.maxPayment"
                      :options="boolOptions"
                      name="maxPayment"
                    ></b-form-radio-group>
                  </b-form-group>
                </div>
              </b-col>
            </b-row>
          </section>

          <section class="border-bottom border-secondary mb-4 pb-2">
            <b-row>
              <b-col cols="4">
                <h6>Benefit Amounts</h6>
                <p>
                  If you provide consent to LSC checking the details of your
                  benefit or pension with Centrelink, we don&rsquo;t need any
                  other information.
                </p>
              </b-col>
              <b-col>
                <b-form-group
                  :label="
                    DoYouStringCont +
                    ' consent to LSC checking the benefit or pension details with Centrelink?'
                  "
                >
                  <b-form-radio-group
                    id="consentToCentrelink"
                    v-model="
                      form.entities.applicant.benefits.consentToCentrelink
                    "
                    :options="boolOptions"
                    name="consentToCentrelink"
                  ></b-form-radio-group>
                </b-form-group>
                <b-form-group
                  label="Authority to Release"
                  v-if="
                    form.entities.applicant.benefits.consentToCentrelink ===
                    true
                  "
                >
                  <div>
                    <p>
                      I consent and authorise:<br />the Fair Work Commission
                      Commission (LSC) to use Centrelink Confirmation eServices
                      to perform a Centrelink enquiry of my Centrelink Customer
                      details and concession card status in order to enable LSC
                      to determine if I qualify for a grant of aid.<br />The
                      Australian Government Department of Human Services (the
                      department) to provide the results of that enquiry to LSC.
                    </p>
                    <p>I understand that:</p>
                    <ul>
                      <li>
                        The department will disclose to LSC my personal
                        information including my name, address, concession card
                        status, payment type, payment status for LSC to confirm
                        my eligibility for Legal Aid.
                      </li>
                      <li>
                        This consent, once signed, remains valid while I have an
                        active Legal Aid file, but I can stop it at any time by
                        writing to LSC or the department.
                      </li>
                      <li>
                        I can obtain proof of my means from the department and
                        provide it to LSC so that my eligibility for Legal Aid
                        can be determined.
                      </li>
                      <li>
                        If I withdraw my consent or do not alternatively provide
                        proof of my means, I may not be eligible for Legal Aid.
                      </li>
                      <li>
                        A brochure is available from Centrelink that provides
                        more details about the Centrelink Confirmation eServices
                        or on Centrelink's website at
                        <a href="www.humanservices.gov.au" target="_blank"
                          >www.humanservices.gov.au</a
                        >
                      </li>
                    </ul>
                  </div>
                  <b-form-checkbox
                    v-if="
                      form.entities.applicant.benefits.consentToCentrelink ===
                      true
                    "
                    id="authoriseCentrelink"
                    v-model="
                      form.entities.applicant.benefits.authoriseCentrelink
                    "
                    name="authoriseCentrelink"
                    :value="true"
                    :unchecked-value="false"
                  >
                    I agree{{ additionalS }} to the above
                  </b-form-checkbox>
                </b-form-group>

                <b-form-group
                  v-if="
                    form.entities.applicant.benefits.maxPayment === false &&
                    form.entities.applicant.benefits.consentToCentrelink ===
                      false
                  "
                  label="How much is received per fortnight from any pension, benefit or allowance?"
                >
                  <b-form-input
                    id="benefitsAmount"
                    name="benefitsAmount"
                    v-model="form.entities.applicant.benefits.benefitsAmount"
                    v-if="
                      form.entities.applicant.benefits.consentToCentrelink ===
                      false
                    "
                  ></b-form-input>
                </b-form-group>
                <notice
                  v-if="
                    form.entities.applicant.benefits.consentToCentrelink ===
                    false
                  "
                  class="mb-4"
                  :message="
                    'If you do not provide us consent to obtain ' +
                    yourString +
                    ' financial details directly from Centrelink, a Centrelink Income Statement will be required in the attachments page'
                  "
                ></notice>
              </b-col>
            </b-row>
          </section>

          <section class="border-bottom border-secondary mb-4 pb-2">
            <b-row>
              <b-col cols="4">
                <h6>Financially Associated Person</h6>
                <p>
                  The term 'Financially Associated Person' refers to anyone who:
                  regularly gives you money or pays your bills; OR shares your
                  living expenses
                </p>
                <p>For example a spouse, partner or relative.</p>
                <p>
                  The only time we do not need their information is when: they
                  have an opposing interest in your legal proceedings; or you
                  have separated from them.
                </p>
              </b-col>
              <b-col>
                <b-form-group
                  :label="
                    DoYouStringCont + ' have a financially associated person?'
                  "
                >
                  <b-form-radio-group
                    id="hasFap"
                    v-model="form.entities.applicant.details.hasFap"
                    :options="boolOptions"
                    name="hasFap"
                  ></b-form-radio-group>
                </b-form-group>
                <entity></entity>

                <entity
                  v-if="form.entities.applicant.details.hasFap === true"
                  :entity="form.entities.fap"
                  idPrefix="fap"
                  showFirstName
                  showLastName
                  firstNameLabel="Their given name(s)"
                  lastNameLabel="Their family name(s)"
                >
                  <template v-slot:additionalFields>
                    <b-form-group :label="'Relationship to ' + youString">
                      <b-form-select
                        v-model="form.entities.fap.relationshipToApplicant"
                        id="relationshipToApplicant"
                        name="relationshipToApplicant"
                        :options="[
                          { value: 'Spouse', text: 'Spouse' },
                          { value: 'Defacto', text: 'Defacto' },
                          { value: 'Partner', text: 'Partner' },
                          { value: 'Child', text: 'Child' },
                          { value: 'StepChild', text: 'Step Child' },
                          { value: 'Parent', text: 'Parent' },
                          { value: 'Other', text: 'Other' },
                        ]"
                      ></b-form-select>
                    </b-form-group>
                    <b-form-group
                      label="Do they receive a Centrelink pension or benefit or allowance (optional)?"
                    >
                      <b-form-radio-group
                        id="fap.receivesBenefit"
                        v-model="form.entities.fap.receivesBenefit"
                        :options="boolOptions"
                        name="fap.receivesBenefit"
                      ></b-form-radio-group>
                      <div
                        class="form-text"
                        v-if="form.entities.fap.receivesBenefit === true"
                      >
                        <notice
                          message="A copy of their most recent Centrelink Income Statement may be required."
                        ></notice>
                      </div>
                    </b-form-group>

                    <b-form-group
                      label="Their CRN (optional)"
                      v-if="form.entities.fap.receivesBenefit === true"
                    >
                      <b-form-input
                        id="fap.crnNumber"
                        name="fap.crnNumber"
                        v-model="form.entities.fap.crnNumber"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Select the type of payment(s) they receive"
                      v-if="form.entities.fap.receivesBenefit === true"
                    >
                      <b-form-checkbox-group
                        stacked
                        id="fap.benefitsPaymentTypes"
                        v-model="form.entities.fap.benefitsPaymentTypes"
                        :options="benefitsOptions"
                        name="fap.benefitsPaymentTypes"
                      ></b-form-checkbox-group>
                    </b-form-group>

                    <b-form-group
                      label="Do they receive the maximum payment?"
                      v-if="form.entities.fap.receivesBenefit === true"
                    >
                      <b-form-radio-group
                        id="fap.receivesMaxBenefits"
                        v-model="form.entities.fap.receivesMaxBenefits"
                        :options="boolOptions"
                        name="fap.receivesMaxBenefits"
                      ></b-form-radio-group>
                    </b-form-group>
                  </template>
                </entity>
              </b-col>
            </b-row>
          </section>

          <div class="hackButtonsWrapper">
            <b-row class="mt-4">
              <b-col cols="12" class="text-right">
                <b-button v-if="innerTabIndex === 0" @click="parentTabIndex(1)"
                  >Save & Prev</b-button
                >
                <b-button v-if="innerTabIndex < 5" @click="innerTabIndex++"
                  >Save & Next</b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-tab>

        <b-tab
          title="Property"
          :title-link-class="[
            'laap-inner-title-link',
            { 'laap-inner-nav-item-complete': false },
          ]"
        >
          <section class="border-bottom border-secondary mb-4 pb-2" style="min-height:500px">
            <b-row>
              <b-col cols="4">
                <h6>Property Details</h6>
                <p>Legal Aid is not free.</p>
                <p>
                  Simple guilty pleas, very short criminal trials and family
                  dispute resolutions usually cost less than $2,280.00.
                </p>
                <p>
                  By accepting aid you accept the conditions. Read our
                  <a href="#">charge brochure</a> for more information. All
                  fields are manadatory unless marked as optional.
                </p>
                <p>
                  We need to know about any real estate properties
                  {{ youString }} own{{ additionalS }} or paying off in
                  Australia or elsewhere.
                </p>
              </b-col>
              <b-col>
                <b-form-group
                  :label="DoYouStringCont + ' own (or paying off) ' + yourString + ' home?'"
                >
                  <b-form-radio-group
                    v-model="form.entities.applicant.property.ownsAHome"
                    :options="boolOptions"
                  ></b-form-radio-group>
                </b-form-group>

                <property
                  :property="form.entities.applicant.property.properties[0]"
                  :form="form"
                  v-if="form.entities.applicant.property.ownsAHome === true"
                ></property>
              </b-col>
            </b-row>
          </section>
          <section
            class="border-bottom border-secondary mb-4 pb-2"
            v-if="form.entities.applicant.property.ownsAHome === true"
          >
            <b-row>
              <b-col cols="4">
                <h6>Additional Property</h6>
              </b-col>
              <b-col>
                <b-form-group
                  :label="
                    DoYouStringCont +
                    ' own (or paying off) another real estate property in Australia or elsewhere?'
                  "
                >
                  <b-form-radio-group
                    v-model="form.ownsAdditionalHome"
                    :options="boolOptions"
                  ></b-form-radio-group>
                </b-form-group>

                <div v-if="form.entities.applicant.property.ownsAHome === true">
                  <property
                    :property="form.entities.applicant.property.properties[1]"
                    :form="form"
                    v-if="form.ownsAdditionalHome === true"
                  ></property>
                </div>
              </b-col>
            </b-row>
          </section>
          <section
            class="border-bottom border-secondary mb-4 pb-2"
            v-if="form.entities.applicant.details.hasFap === true"
          >
            <b-row>
              <b-col cols="4">
                <h6>
                  Property Owned by {{ form.entities.fap.firstName }}
                  {{ form.entities.fap.lastName }}
                </h6>
                <p v-if="form.repType === 'self'">
                  We need to know about any real estate properties the
                  Applicant's Financially Associated Person owns or paying off
                  in Australia or elsewhere
                </p>
                <p v-else>
                  We need to know about any real estate properties the
                  Applicant's Financially Associated Person owns or paying off
                  in Australia or elsewhere
                </p>
              </b-col>
              <b-col>
                <b-form-group
                  :label="
                    'does ' +
                    form.entities.fap.firstName +
                    ' ' +
                    form.entities.fap.lastName +
                    ' own (or paying off) a real estate property in Australia or elsewhere?'
                  "
                >
                  <b-form-radio-group
                    v-model="form.entities.applicant.property.fapOwnsHome"
                    :options="boolOptions"
                  ></b-form-radio-group>
                </b-form-group>

                <property
                  :property="form.entities.fap.property"
                  :form="form"
                  :showCoOwners="false"
                  v-if="form.entities.applicant.property.fapOwnsHome === true"
                ></property>
              </b-col>
            </b-row>
          </section>
          <div class="hackButtonsWrapper">
            <b-row class="mt-4">
              <b-col cols="12" class="text-right">
                <b-button  @click="innerTabIndex--"
                  >Save & Prev</b-button
                >
                <b-button  @click="innerTabIndex++"
                  >Save & Next</b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-tab>

        <b-tab
          title="Income & Assets"
          :title-link-class="[
            'laap-inner-title-link',
            { 'laap-inner-nav-item-complete': false },
          ]"
        >
          <income-assets-applicant :form="form"></income-assets-applicant>
          <income-assets-fap
            v-if="form.entities.applicant.details.hasFap"
            :form="form"
          ></income-assets-fap>

          <div class="hackButtonsWrapper">
            <b-row class="mt-4">
              <b-col cols="12" class="text-right">
                <b-button  @click="innerTabIndex--"
                  >Save & Prev</b-button
                >
                <b-button  @click="parentTabIndex(3)"
                  >Save & Next</b-button
                >
              </b-col>
            </b-row>
          </div>

        </b-tab>
      </b-tabs>
    </b-form>
  </div>
</template>

<script>
import Entity from "./entity.vue";
import entityAddress from "./entityAddress.vue";
import IncomeAssetsApplicant from "./incomeAssetsApplicant.vue";
import IncomeAssetsFap from "./incomeAssetsFap.vue";
import Notice from "./notice.vue";
import Property from "./property.vue";
export default {
  components: {
    entityAddress,
    Entity,
    Property,
    Notice,
    IncomeAssetsApplicant,
    IncomeAssetsFap,
  },
  name: "eligibility",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      innerTabIndex: 0,
      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
      benefitsOptions: [
        "Age Pension",
        "ABSTUDY",
        "Austudy",
        "Department of Veteran Affairs Payments",
        "Disability Support Pension",
        "JobSeeker Payment",
        "Parenting Payment",
        "Youth Allowance",
        "None of the above",
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
    yoursString: function () {
      return this.form.repType === "self" ? "yours" : "the Applicant/'s";
    },
    haveYouString: function () {
      return this.form.repType === "self" ? "have you" : "has the Applicant";
    },
    noIncomeLabel() {
      if (this.form.repType === "self") {
        return "If you do not receive any income, please give details of how you are supported";
      } else {
        return "If the Applicant does not receive any income, please give details of how they are supported";
      }
    },
  },
  methods: {
    parentTabIndex(index) {
      this.$emit("changeTabIndex", index);
    },
  },
};
</script>

<style lang="scss" scoped >
.tab-content {
  padding-left: 0px !important;
}
.hackButtonsWrapper {
 margin-left: -120px;
    margin-right: -20px;
    padding-right: 5px;
    margin-bottom: -20px;
    background: #f5f5f5;
    border-top: #f5f5f5 30px solid;
}
.hackButtonsWrapper .btn {
  padding-left: 15px !important;
  padding-right: 15px !important;
}
</style>
