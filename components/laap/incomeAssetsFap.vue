<template>
  <div>
              <section class="border-bottom border-secondary mb-4 pb-2">
            <b-row>
              <b-col cols="4">
                <h6>{{ fapName }}'s Income Details</h6>
                <p>All fields are mandatory unless marked as optional.</p>
              </b-col>
              <b-col>
                <b-form-group :label="'Is ' + fapName + ' currently employed?'">
                  <b-form-radio-group
                  stacked
                    v-model="form.entities.fap.incomeAssets.employmentType"
                    :options="['Employed', 'Self employed', 'Unemployed']"
                  ></b-form-radio-group>
                </b-form-group>

                <b-form-group
                  v-if="form.entities.fap.incomeAssets.employmentType === 'Self employed'"
                  :label="
                    'Is ' + fapName + ' a primary producer (farmer, grazier etc)?'
                  "
                >
                  <b-form-radio-group
                    v-model="form.entities.fap.incomeAssets.isPrimaryProducer"
                    :options="boolOptions"
                  ></b-form-radio-group>
                </b-form-group>

                <b-form-group
                  label="Net weekly wages or earnings"
                  description="The amount paid after tax, the cash income."
                  v-if="form.entities.fap.incomeAssets.employmentType !== 'Unemployed'"
                >
                <b-input-group  prepend="$" >
                  <b-form-input
                    v-model="form.entities.fap.incomeAssets.benefitsAmount"
                  ></b-form-input>
                </b-input-group>
                </b-form-group>

                <notice class="mb-4"
                  v-if="form.entities.fap.incomeAssets.employmentType === 'Employed'"
                  :message="
                    'A copy of their' +
                    ' last 4 payslips will be required in the attachments page.'
                  "
                ></notice>

                <notice class="mb-4"
                  v-if="form.entities.fap.incomeAssets.employmentType === 'Self employed'"
                  :message="
                    'A copy of ' +
                    'their' +
                    ' last tax return and Profit & Loss statement will be required in the attachments page.'
                  "
                ></notice>

                <b-form-group
                  :label="fapName + '\'s usual job'"
                  v-if="form.entities.fap.incomeAssets.employmentType === 'Employed'"
                >
                  <b-form-select
                    v-model="form.entities.fap.incomeAssets.usualJob"
                    :options="usualJobOption"
                  ></b-form-select>
                </b-form-group>

                <b-form-group
                  :label="
                    'When did they last do paid work? (optional)'
                  "
                  description="Enter the month and year."
                  v-if="form.entities.fap.incomeAssets.employmentType === 'Unemployed'"
                >
                  <b-form-input v-model="form.entities.fap.incomeAssets.lasWorked"></b-form-input>
                </b-form-group>

                <b-form-group
                  :label="
                    'Enter the net amount of any other income or payment  (after tax) ' +
                    'they ' +
                    'receive and how often ' +
                    youString +
                    ' receive' +
                    additionalS +
                    ' it'
                  "
                >
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Income</th>
                        <th scope="col">Frequency</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(income, index) of form.entities.fap.incomeAssets
                          .incomePayments"
                        :key="index"
                        v-bind:id="index"
                      >
                        <td>
                          {{ income.type }}
                        </td>
                        <td align="right">
                          <b-form-select
                            v-model="income.incomePayments"
                            :options="['Weekly', 'fortnightly', 'Monthly']"
                          ></b-form-select>
                        </td>
                        <td align="right">
                          <b-input-group  prepend="$" >
                          <b-form-input v-model="income.amount"></b-form-input>
                          </b-input-group>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </b-form-group>

                <b-form-group
                  :label="noIncomeLabel"
                  description="This field is mandatory if no other income was indicated."
                >
                  <b-form-input
                    v-model="form.entities.fap.incomeAssets.noIncomeExplanation"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </section>

          <section class="border-bottom border-secondary mb-4 pb-2">
            <b-row>
              <b-col cols="4">
                <h6>{{ fapName }}'s Expenses</h6>
              </b-col>
              <b-col>
                <b-form-group
                  :label="
                    'Enter the amount of ' +
                    'their expenses' +
                    ' and how frequently they are paid'
                  "
                >
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Expense</th>
                        <th scope="col">Frequency</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(expense, index) of form.entities.fap.incomeAssets
                          .expensePayments"
                        :key="index"
                        v-bind:id="index"
                      >
                        <td>
                          {{ expense.type }}
                        </td>
                        <td align="right">
                          <b-form-select
                            v-model="expense.frequency"
                            :options="['Weekly', 'fortnightly', 'Monthly']"
                          ></b-form-select>
                        </td>
                        <td align="right">
                          <b-input-group  prepend="$" >
                          <b-form-input v-model="expense.amount"></b-form-input>
                          </b-input-group>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </b-form-group>
              </b-col>
            </b-row>
          </section>

          <section class="border-bottom border-secondary mb-4 pb-2">
            <b-row>
              <b-col cols="4">
                <h6>{{ fapName }}'s Vehicles</h6>
                <p>
                  We need to know about any motor vehicles where
                  their equity is more than $30,000.
                </p>
              </b-col>
              <b-col>
                <b-form-group
                  :label="
                     'Do they' + ' own any motor vehicles with equity greater than $30,000?'
                  "
                >
                  <b-form-radio-group
                    v-model="form.entities.fap.incomeAssets.hasVehicles"
                    :options="boolOptions"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-group
                  :label="'Please list their vehicles'"
                  v-if="form.entities.fap.incomeAssets.hasVehicles === true"
                >
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Make</th>
                        <th scope="col">Model</th>
                        <th scope="col">Year</th>
                        <th scope="col">Sale value</th>
                        <th scope="col">Amount owing</th>
                        <td scope="col">&nbsp;</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(car, index) of form.entities.fap.incomeAssets.vehicles"
                        :key="index"
                        v-bind:id="index"
                      >
                        <td align="right">
                          <b-form-input v-model="car.make"></b-form-input>
                        </td>
                        <td align="right">
                          <b-form-input v-model="car.model"></b-form-input>
                        </td>
                        <td align="right">
                          <b-form-input v-model="car.year"></b-form-input>
                        </td>
                        <td align="right">
                          <b-input-group  prepend="$" >
                          <b-form-input v-model="car.value"></b-form-input>
                          </b-input-group>
                        </td>
                        <td align="right">
                          <b-input-group  prepend="$" >
                          <b-form-input v-model="car.owing"></b-form-input>
                          </b-input-group>
                        </td>
                        <td class="align-middle">
                    <b-button
                      variant="link"
                      class="p-0"
                      @click.prevent="removeCar(index)"
                      v-b-tooltip.hover
                      title="Remove"
                      ><b-icon icon="x-circle"
                    /></b-button>
                  </td>
                        
                      </tr>
                    </tbody>
                  </table>
                  <div class="text-right">
                    <b-button
                      variant="link"
                      class="p-0 mb-4"
                      @click.prevent="addCar"
                      >Click here to add another vehicle</b-button
                    >
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
          </section>

          <section class="border-bottom border-secondary mb-4 pb-2">
            <b-row>
              <b-col cols="4">
                <h6>Other Information</h6>
              </b-col>
              <b-col>
                <b-form-group
                  :label="'Their' + ' current bank balance'"
                  description="Enter combined total if more than one account."
                >
                <b-input-group  prepend="$" >
                  <b-form-input
                    v-model="form.entities.fap.incomeAssets.bankBalance"
                  ></b-form-input>
                </b-input-group>
                </b-form-group>

                <b-form-group
                  :label="
                    'Do they' +
                    ' own any shares/investments/cryptocurrency?'
                  "
                >
                  <b-form-radio-group
                    v-model="form.entities.fap.incomeAssets.hasInvestments"
                    :options="boolOptions"
                  ></b-form-radio-group>
                </b-form-group>

                <b-form-group
                  :label="'Please provide net value if sold today'"
                  description="Enter combined total."
                  v-if="form.entities.fap.incomeAssets.hasInvestments"
                >
                <b-input-group  prepend="$" >
                  <b-form-input
                    v-model="form.entities.fap.incomeAssets.investmentsValue"
                  ></b-form-input>
                </b-input-group>
                </b-form-group>

              
                 <b-form-group
                  :label="
                    'Have they' +
                    ' sold or given away money or real estate property in the last 12 months worth more than $1,000?' 
                  "
                >
                  <b-form-radio-group
                    v-model="form.entities.fap.incomeAssets.gaveAwayMoneyOrProperty"
                    :options="boolOptions"
                  ></b-form-radio-group>
                </b-form-group>

    
                <b-form-group label="Please provide details">
                  <b-form-textarea
                    v-model="form.entities.fap.incomeAssets.gaveAwayMoneyOrPropertyDetails"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>


              </b-col>
            </b-row>
          </section>
  </div>
</template>

<script>
import Notice from "./notice.vue";
export default {
  name: "incomeAssetsFap",
  components: {Notice},
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
   
  },
  data() {
    return {
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
      usualJobOption: [
        "Accommodation and Food Services",
        "Administrative and Support Services",
        "Agriculture, Forestry, Fishing",
        "Arts and Recreation Services",
        "Construction",
        "Education and Training",
        "Electricity, Gas, Water, Waste Services",
        "Financial and Insurance Services",
        "Health Care and Social Assistance",
        "Information Media and Telecommunications",
        "Manufacturing",
        "Mining",
        "Other Services",
        "Professional, Scientific, Technical Services",
        "Public Administration and Safety",
        "Rental, Hiring and Real Estate Services",
        "Retail Trade",
        "Transport, Postal and Warehousing",
        "Wholesale Trade",
      ],
    };
  },
  computed: {   
    fapName: function(){
      return this.form.entities.fap.firstName + ' ' + this.form.entities.fap.lastName
    },
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
    addCar() {
      this.form.entities.applicant.incomeAssets.vehicles.push({
        make: "",
        model: "",
        year: "",
        value: "",
        owing: "",
      });
    },
    removeCar(i) {
       this.form.entities.applicant.incomeAssets.vehicles.splice(i,1);
    },
  },
};
</script>

<style  scoped >
.notice{
  border-left: 4px solid var(--success) !important;
  background: var(--grey-100) !important;
  color: var(--grey-500) !important;
}
  
</style>