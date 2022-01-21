<template>
  <div>
    <section class="border-bottom border-secondary mb-4 pb-2">
      <b-row>
        <b-col cols="4">
          <h6>Confidentiality</h6>
        </b-col>
        <b-col>
          <p>
            Under s31A of the Legal Services Commission Act 1977, the
            information provided in your application form remains confidential
            in most cases.
          </p>
          <p>Your information will be used to:</p>
          <ul>
            <li>assess your eligibility for legal aid</li>
            <li>help your lawyer with your legal representation</li>
            <li>update your personal details in our records</li>
            <li>
              compile statistical information for use by us and our funders.
            </li>
          </ul>
          In order to evaluate our service, your name and telephone number may
          be provided to an organisation to undertake a client survey.
          If you object, please tick here: <input type="checkbox" v-model="form.objectToConfidentiality" class="" value="true" >
         <br><br>
        </b-col>
      </b-row>
    </section>

     <section class="border-bottom border-secondary mb-4 pb-2" v-if="form.repType==='self'">
      <b-row>
        <b-col cols="4">
          <h6>Applicant Deceleration</h6>
        </b-col>
        <b-col>
          <p>
        If you need More information once you accept legal aid, the conditions
        of aid will apply to you whether or not you agree with them or
        understand them.
      </p>
      <p>
        If you do not understand the conditions of aid or need more information
        about legal aid, you can:
      </p>
      <ol style="list-style-type: lower-alpha">
        <li>&nbsp;ask your lawyer</li>
        <li>write to us</li>
        <li>attend one of our offices and speak to us about it, or,</li>
        <li>
          access the Practitioners Guide to Legal Aid on
          <a href="http://www.lsc.sa.gov.au">www.lsc.sa.gov.au</a>
        </li>
      </ol>
      <p>I acknowledge it is an offence to:</p>
      <ul>
        <li>
          Make a false or misleading statement when applying for legal aid
        </li>
        <li>
          Give a false or misleading statement when applying for legal aid
        </li>
        <li>
          Refuse to give information requested by LSC with the intent to deceive
          or mislead LSC.&nbsp;
        </li>
      </ul>
        <b-form-checkbox
                    v-model="form.agreeToTerms"
                    :value="true"
                    :unchecked-value="false"
                  >
                    I have read the confidentiality statement and conditions of legal aid. All the information I have given is true and correct. 
                  </b-form-checkbox>

          
        </b-col>
      </b-row>
    </section>

    <section class="border-bottom border-secondary mb-4 pb-2" v-if="form.repType==='solicitor'">
      <b-row>
        <b-col cols="4">
          <h6>Solicitor's Certificate</h6>
        </b-col>
        <b-col>
          <p>
        If this application is made through a solicitor, this certificate must
        be completed. If not, it may be interpreted as an expression of opinion
        that the application has no merit.
      </p>
      <b-form-group>
       <b-form-checkbox
                    v-model="form.agreeToTerms"
                    :value="true"
                    :unchecked-value="false"
                  >
                    I {{ form.entities.repSolicitor.firstName }} {{ form.entities.repSolicitor.lastName }}, of the firm of {{ form.entities.repSolicitor.orgName }} of {{ form.entities.repSolicitor.address.line1 }} 
        {{ form.entities.repSolicitor.address.line2 }} {{ form.entities.repSolicitor.address.suburb }} {{ form.entities.repSolicitor.address.state }} {{ form.entities.repSolicitor.address.postcode }} {{ form.entities.repSolicitor.address.country }} 
        verify that the applicant
        has consulted me and I am of the opinion that this application has legal
        merit and/or is otherwise deserving of aid.
                  </b-form-checkbox>
      </b-form-group>
     
        </b-col>
      </b-row>
    </section>

   <section class="border-bottom border-secondary mb-4 pb-2" v-if="form.repType==='other'">
      <b-row>
        <b-col cols="4">
          <h6>On behalf of the Applicant</h6>
        </b-col>
        <b-col>
          <p>I acknowledge it is an offence to:</p>
      <ul>
        <li>
          Make a false or misleading statement when applying for legal aid
        </li>
        <li>
          Give a false or misleading statement when applying for legal aid
          Refuse to give information requested by LSC with the intent to deceive
          or mislead LSC.&nbsp;
        </li>
      </ul>
      <b-form-group>
 <b-form-checkbox
                    v-model="form.agreeToTerms"
                    :value="true"
                    :unchecked-value="false"
                  >
                    I have read the confidentiality statement and conditions of legal aid. All the information I have given is true and correct. 
                  </b-form-checkbox>
      </b-form-group>
 
        </b-col>
      </b-row>
   </section>

    <b-row>
      <b-col class="text-center mt-3">
<b-button  variant="primary">Lodge the Application</b-button>
      </b-col>
    </b-row>

    </div>

  
  </div>
</template>

<script>
export default {
  name: "lodge",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped >
</style>