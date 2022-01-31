<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Are you the Applicant?</h6>
            Applicant is the person who needs legal help. If you are not the
            Applicant please provide some details about yourself.
          </b-col>
          <b-col>

            <b-form-group
              label="Are you making this application for yourself, or for someone else?"
            >
              <b-form-radio-group
                id="repType"
                v-model="form.repType"
                :options="repTypeOptions"
                name="repType"
              ></b-form-radio-group>
            </b-form-group>

           

            <b-form-group
              label="Are you a LSC panel lawyer?"
              v-if="form.repType === 'solicitor'"
            >
              <b-form-radio-group
                id="isLscPanelMember"
                v-model="form.isLscPanelMember"
                :options="boolOptions"
                name="isLscPanelMember"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              label="Have you previously represented this client (the applicant)?"
              v-if="form.repType === 'solicitor' && form.isLscPanelMember"
            >
              <b-form-radio-group
                id="prevRepresented"
                v-model="form.prevRepresented"
                :options="boolOptions"
                name="prevRepresented"
              ></b-form-radio-group>
            </b-form-group>

            <entity
              v-if="form.repType === 'solicitor'"
              :entity="form.entities.repSolicitor"
              orgNameLabel="Your firm or organisation name"
              idPrefix="repSolicitor"
              showOrgName
              showFirstName
              showLastName
              showEmail
              showAddress
            >
            </entity>

             <entity
              v-if="form.repType === 'other'"
              :entity="form.entities.repSolicitor"
              idPrefix="repOther"
              showFirstName
              showLastName
              showEmail
            >
            </entity>

            <div v-if="form.repType==='other'">
                      <b-form-group :label="'Your relationship to ' + youString">
              <b-form-select
                v-model="form.repRelation"
                id="repRelation"
                name="repRelation"
                :options="[
                  { value: 'Power of attorney', text: 'Power of attorney' },
                  { value: 'Parent', text: 'Parent' },
                  { value: 'Guardian', text: 'Guardian' },
                  { value: 'Child', text: 'Child' },
                  { value: 'Social worker', text: 'Social worker' },
                  { value: 'Friend', text: 'Friend' },
                  { value: 'Other', text: 'Other' },
                ]"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              v-if="form.repRelation === 'Other'"
              label="Provide details"
            >
              <b-form-input
                id="repRelationDetail"
                name="repRelationDetail"
                v-model="form.repRelationDetail"
              ></b-form-input>
            </b-form-group>
            </div>
          </b-col>
        </b-row>
      </section>

      <section
        v-if="form.repType"
        class="border-bottom border-secondary mb-4 pb-2"
      >
        <b-row>
          <b-col cols="4" v-if="form.repType === 'self'">
            <h6>Your personal information</h6>
            Please provide details about yourself.
          </b-col>
          <b-col cols="4" v-else>
            <h6>Applicant information</h6>
            Please provide details about the applicant (the person this form is
            about).
          </b-col>
          <b-col>
            <entity
              :entity="form.entities.applicant"
              idPrefix="applicant"
              showFirstName
              :firstNameLabel="yourString + ' given name(s)'"
              showLastName
              :lastNameLabel="yourString + ' family name(s)'"
            >
            </entity>
            <b-form-group v-if="form.repType === 'self'" :label="'Have you been known by any other name?'">
              <b-form-radio-group
                v-model="form.entities.applicant.details.hasOtherNames"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group v-if="form.repType === 'other'" :label="'Has the Applicant been known by any other name?'">
              <b-form-radio-group
                v-model="form.entities.applicant.details.hasOtherNames"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>


            <b-form-group
              
              label="Other given names"
              v-if="form.entities.applicant.details.hasOtherNames"
            >
              <b-form-input
                v-model="form.entities.applicant.details.otherGivenName"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              v-if="form.entities.applicant.details.hasOtherNames"
              label="Other family names"
            >
              <b-form-input
                id="otherFamilyName"
                name="otherFamilyName"
                v-model="form.entities.applicant.details.otherFamilyName"
              ></b-form-input>
            </b-form-group>

             <b-form-group
                          :label="yourString + ' date of birth'"
                        >
                          <b-form-datepicker
                            v-model="form.entities.applicant.details.dob"
      
                          ></b-form-datepicker>
             </b-form-group>

            <div v-if="form.repType === 'solicitor' && form.prevRepresented">
              <b-form-group label="LSC File number" description="Either a LSC file number or a cover letter is required">
                <b-form-input
                  id="entities.applicant.details.lscFileNumber"
                  name="entities.applicant.details.lscFileNumber"
                  v-model="form.entities.applicant.details.lscFileNumber"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label="If no LSC file number is provided, please provide covering letter details (or you can upload a document in the uploads section)"
              >
                <b-form-textarea
                  v-model="form.coverLetterDetails"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </div>
            <div v-if="form.repType === 'solicitor' && form.prevRepresented === false">
              <b-form-group
                label="Please provide covering letter details (or you can upload a document in the uploads section)"
              >
                <b-form-textarea
                  v-model="form.coverLetterDetails"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </div>
          </b-col>
        </b-row>
      </section>

      <section
        v-if="form.repType"
        class="border-bottom border-secondary mb-4 pb-2"
      >
        <b-row>
          <b-col cols="4">
            <h6>Contact details</h6>
            We need at least one address (Home address, postal address or email
            address) so we can contact you. <br /><br>
            <strong
              >Please only provide contact information that feels safe to
              provide.</strong
            >
          </b-col>
          <b-col>
            <b-form-group
              :label="AreYouString + ' homeless or at risk of homelessness?'"
            >
              <b-form-radio-group
                id="homeless"
                v-model="form.entities.applicant.details.homeless"
                :options="boolOptions"
                name="homeless"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group :label="DoYouStringCont + ' live on the APY lands?'">
              <b-form-radio-group
                id="apyLands"
                v-model="form.entities.applicant.details.apyLands"
                :options="boolOptions"
                name="apyLands"
              ></b-form-radio-group>
            </b-form-group>

            <entity
              :entity="form.entities.applicant"
              idPrefix="applicant"
              showAddress
              showPostalAddress
              showPostalAddessSame
              showIsSafePostalAddress
              showPhones
              showEmail
              showIsSafeEmail
              showPreferredContact
              showIsSafePhone
              :addressLabel="
                yourString +
                ' Home address (even if ' +
                youAreString +
                ' in custody)'
              "
              :emailLabel="yourString + ' email'"
              :phonesLabel="yourString + ' phone number(s)'"
              :safeEmailAddressLabel="
                'is it safe to contact ' + youString + ' on this email address?'
              "
              :safePhoneLabel="
                'is it safe to contact ' + youString + ' on this phone number?'
              "
              :safePostalAddressLabel="
                'is it safe to send ' + youString + ' mail to this address?'
              "
              :postalAddressLabel="yourString + ' postal address'"
            >
            </entity>
          </b-col>
        </b-row>
      </section>

      <section
        v-if="form.repType"
        class="border-bottom border-secondary mb-4 pb-2"
      >
        <b-row>
          <b-col cols="4">
            <h6>{{ yourString }} circumstances</h6>
          </b-col>
          <b-col>
            <b-form-group
              :label="
                DoYouStringCont +
                ' identify as Aboriginal or Torres Strait Islander?'
              "
            >
              <b-form-radio-group
              stacked
                id="aboriginality"
                v-model="form.entities.applicant.details.aboriginality"
                :options="aboriginalityOptions"
                name="aboriginality"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group :label="AreYouString + ' in prison or detention?'">
              <b-form-radio-group
                id="inPrison"
                v-model="form.entities.applicant.details.inPrison"
                :options="boolOptions"
                name="inPrison"
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group v-if="form.entities.applicant.details.inPrison" label="Where">
              <b-form-input
                id="prisonName"
                name="prisonName"
                v-model="form.entities.applicant.details.prisonName"
              ></b-form-input>
            </b-form-group>
            <b-form-group v-if="form.entities.applicant.details.inPrison" label="Section (optional)">
              <b-form-input
                id="prisonSection"
                name="prisonSection"
                v-model="form.entities.applicant.details.prisonSection"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              v-if="form.entities.applicant.details.inPrison"
              label="Idnetification number (optional)"
            >
              <b-form-input
                id="prisonId"
                name="prisonId"
                v-model="form.entities.applicant.details.prisonId"
              ></b-form-input>
            </b-form-group>

            <b-form-group :label="wereYouString + ' born overseas?'">
              <b-form-radio-group
                id="bornOs"
                v-model="form.entities.applicant.details.bornOs"
                :options="boolOptions"
                name="bornOs"
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group
              v-if="form.entities.applicant.details.bornOs"
              :label="'Where ' + wereYouString + ' born?'"
            >
              <b-form-input
                id="bornWhere"
                name="bornWhere"
                v-model="form.entities.applicant.details.bornWhere"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="What is the main language spoken at home?">
              <b-form-select
                v-model="form.entities.applicant.details.homeLanguage"
                id="homeLanguage"
                name="homeLanguage"
                :options="[
                  { value: 'english', text: 'English' },
                  { value: 'mandarin', text: 'Mandarin' },
                ]"
              ></b-form-select>
            </b-form-group>

            <b-form-group :label="DoYouStringCont + ' require an interpreter?'">
              <b-form-radio-group
                id="requireInterpreter"
                v-model="form.entities.applicant.details.requireInterpreter"
                :options="boolOptions"
                name="requireInterpreter"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              v-if="form.entities.applicant.details.requireInterpreter"
              label="What language/dialect?"
            >
              <b-form-select
                v-model="form.entities.applicant.details.language"
                id="language"
                name="language"
                :options="[
                  { value: 'english', text: 'English' },
                  { value: 'mandarin', text: 'Mandarin' },
                ]"
              ></b-form-select>
            </b-form-group>

            <b-form-group :label="DoYouStringCont + ' have a disability?'">
              <b-form-select
                v-model="form.entities.applicant.details.disability"
                id="disability"
                name="disability"
                :options="[
                  { value: 'none', text: 'No - I don’t have a disability' },
                  { value: 'Intelectual', text: 'Intelectual' },
                  {
                    value: 'Psychological/Psychiatric',
                    text: 'Psychological/Psychiatric',
                  },
                  {
                    value: 'Sensory (including speech)',
                    text: 'Sensory (including speech)',
                  },
                  {
                    value: 'Head injury/stroke/brain damage',
                    text: 'Head injury/stroke/brain damage',
                  },
                  { value: 'Physical', text: 'Physical' },
                  { value: 'Other', text: 'Other' },
                ]"
              ></b-form-select>
            </b-form-group>

            <b-form-group
              v-if="form.entities.applicant.details.disability === 'Other'"
              :label="'Provide details'"
            >
              <b-form-input
                id="disabilityDetail"
                name="disabilityDetail"
                v-model="form.entities.applicant.details.disabilityDetail"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              :label="
                DoYouStringCont +
                ' require extra or practical help to access our services?'
              "
            >
              <b-form-radio-group
                id="requireExtraHelp"
                v-model="form.entities.applicant.details.requireExtraHelp"
                :options="boolOptions"
                name="requireExtraHelp"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              v-if="form.entities.applicant.details.requireExtraHelp"
              :label="'Provide details'"
            >
              <b-form-input
                id="extraHelpDetail"
                name="extraHelpDetail"
                v-model="form.entities.applicant.details.extraHelpDetail"
              ></b-form-input>
            </b-form-group>

            <b-form-group :label="AreYouString + ' under 18?'">
              <b-form-radio-group
                id="under18"
                v-model="form.entities.applicant.details.under18"
                :options="boolOptions"
                name="under18"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group label="Relationship status">
              <b-form-select
                v-model="form.relationshipStatus"
                id="relationshipStatus"
                name="relationshipStatus"
                :options="[
                  { value: 'Never married', text: 'Never married' },
                  { value: 'Married/DeFacto', text: 'Married/DeFacto' },
                  { value: 'Separated', text: 'Separated' },
                  { value: 'Divorced', text: 'Divorced' },
                  { value: 'Widowed', text: 'Widowed' },
                  { value: 'Other', text: 'Other' },
                ]"
              ></b-form-select>
            </b-form-group>

            <b-form-group
              v-if="form.relationshipStatus === 'Other'"
              :label="'Provide details'"
            >
              <b-form-input
                id="relationshipStatusDetail"
                name="relationshipStatusDetail"
                v-model="form.relationshipStatusDetail"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              :label="
                AreYouString +
                ' currently experiencing or at risk of family violence?'
              "
            >
              <b-form-radio-group
                id="riskOfViolence"
                v-model="form.entities.applicant.details.riskOfViolence"
                :options="boolOptions"
                name="riskOfViolence"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              :label="
                'Has an allegation of family violence been made against ' +
                youString +
                '?'
              "
            >
              <b-form-radio-group
                id="familyViolenceAllegation"
                v-model="form.entities.applicant.details.familyViolenceAllegation"
                :options="boolOptions"
                name="familyViolenceAllegation"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              :label="AreYouString + ' experiencing or at risk of elder abuse?'"
              description="Elder abuse is any act occurring within a relationship where there is an expectation of trust, which results in harm to an older person (65 or over). Abuse can include physical, sexual, financial, psychological or social abuse can include neglect."
            >
              <b-form-radio-group
                id="riskOfElderAbuse"
                v-model="form.entities.applicant.details.riskOfElderAbuse"
                :options="boolOptions"
                name="riskOfElderAbuse"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              :label="
                'Has an allegation of elder abuse been made against ' +
                youString +
                '?'
              "
            >
              <b-form-radio-group
                id="elderAbuseAllegation"
                v-model="form.elderAbuseAllegation"
                :options="boolOptions"
                name="elderAbuseAllegation"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

      <section
          v-if="form.repType && form.repType != 'solicitor'"
        class="border-bottom border-secondary mb-4 pb-2"
      >
        <b-row>
          <b-col cols="4">
            <h6>{{ yourString }} dependents</h6>
            Dependents are people you are financially responsible for.
          </b-col>
          <b-col>
            <b-form-group
              :label="
                'How many people ' +
                AreYouString +
                ' financially responsible for?'
              "
            >
              <b-form-input
                id="numOfDependants"
                name="numOfDependants"
                v-model="form.entities.applicant.details.numOfDependants"
                type="number"
                @change="onNumDepnedantsChange"
              ></b-form-input>
            </b-form-group>
            <div v-if="form.entities.applicant.details.dependants.length > 0">
              <div
                v-for="(dependant, index) of form.entities.applicant.details.dependants"
                :key="index"
                v-bind:id="index"
                class="border-5 border-start ps-3 mb-4"
              >
                <h6>Dependant {{ index + 1 }}</h6>
                <b-row>
                  <b-col>
                    <entity
                      :entity="form.entities.applicant.details.dependants[index]"
                      idPrefix="dep0"
                      showFirstName
                      showLastName
                      :firstNameLabel="
                        'Dependant ' + (index + 1) + ' given name(s)'
                      "
                      :lastNameLabel="
                        'Dependant ' + (index + 1) + ' family name(s)'
                      "
                    >
                      <template v-slot:additionalFields>
                        <b-form-group
                          :label="
                            'Dependant ' + index + 1 + ' relationship to you'
                          "
                        >
                          <b-form-select
                            v-model="form.entities.applicant.details.dependants[index].relationship"
                            id="relationship"
                            name="relationship"
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
                          :label="'Dependant ' + index + 1 + 'Date of birth'"
                        >
                          <b-form-datepicker
                            id="dep0dob"
                            v-model="form.entities.applicant.details.dependants[index].dob"
                            class="mb-2"
                          ></b-form-datepicker>
                        </b-form-group>
                        Do they stay overnight with you at least once a week?

                        <b-form-group
                          label="Do they stay overnight with you at least once a week?"
                        >
                          <b-form-radio-group
                            id="stayOvernight"
                            v-model="form.entities.applicant.details.dependants[index].stayOvernight"
                            :options="boolOptions"
                            name="stayOvernight"
                          ></b-form-radio-group>
                        </b-form-group>

                        <b-form-group
                          label="Are they involved in your legal problem?"
                        >
                          <b-form-radio-group
                            id="involvedInLegalIssue"
                            v-model="
                              form.entities.applicant.details.dependants[index].involvedInLegalIssue
                            "
                            :options="boolOptions"
                            name="involvedInLegalIssue"
                          ></b-form-radio-group>
                        </b-form-group>
                      </template>
                    </entity>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
      </section>

     
      <section
        v-if="form.repType && form.repType != 'solicitor'"
        class="border-bottom border-secondary mb-4 pb-2"
      >
        <b-row>
          <b-col cols="4">
            <h6>Authority to disclose</h6>
            This will only apply to the application for aid, not the legal
            matter. If there is a conflict with the person that is nominated, we
            reserve the right to overide the authority
            <br /><br />This authority will be in place for 12 months. If you
            would like to remove the authority please email
            <a href="">grants@lsc.sa.gov.au</a>.
          </b-col>
          <b-col>

            <b-form-group
              :label="
                DoYouStringCont +
                ' authorise us to provide information to another person about your Legal Aid application? '
              "
            >
              <b-form-radio-group
                id="authToDisclose"
                v-model="form.authToDisclose"
                :options="boolOptions"
                name="authToDisclose"
              ></b-form-radio-group>
            </b-form-group>

              <b-form-group label="Their given names(s)"
            v-if="form.authToDisclose" >
            <b-form-input
              id="authToDiscloseGivenName"
              name="authToDiscloseGivenName"
              v-model="form.authToDiscloseGivenName"
            ></b-form-input>
            </b-form-group>

              <b-form-group label="Their family names(s)"
            v-if="form.authToDisclose" >
            <b-form-input
              id="authToDiscloseLastName"
              name="authToDiscloseLastName"
              v-model="form.authToDiscloseLastName"
            ></b-form-input>
            </b-form-group>

              <b-form-group :label=" 'Their relationship to ' + youString "
            v-if="form.authToDisclose" >
            <b-form-input
              id="authToDiscloseRelationship"
              name="authToDiscloseRelationship"
              v-model="form.authToDiscloseRelationship"
            ></b-form-input>
            </b-form-group>

         <b-form-group
                label="Their contact details"
                v-if="form.authToDisclose"
              >
                <b-form-textarea
                  id="authToDiscloseContactDetail"
                  name="authToDiscloseContactDetail"
                  v-model="form.authToDiscloseContactDetail"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>

              <notice v-if="form.authToDisclose === true" message="Please download and sign the
              <a href=''>Authority to Discolose form</a>. You will be asked to
              upload it in the Attachments step."></notice>
          </b-col>
        </b-row>
      </section>
    </b-form>
  </div>
</template>

<script>
import entity from "./entity.vue";
import Notice from './notice.vue';
export default {
  components: { entity, Notice },
  name: "applicantDetails",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      repTypeOptions: [
        { text: "I am the Applicant (submitting for myself)", value: "self" },
        { text: "I am the Applicant's solicitor", value: "solicitor" },
        {
          text: "I am submitting this form on behalf of the Applicant",
          value: "other",
        },
      ],
      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
      aboriginalityOptions: [
        { text: "Yes, Aboriginal", value: "aboriginal" },
        { text: "Yes, Torres Strait Islander", value: "islander" },
        { text: "Both Aboriginal and Torres Strait Islander", value: "both" },
        { text: "No", value: "no" },
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
  },
  methods: {
    onNumDepnedantsChange() {
      if (this.form.entities.applicant.details.numOfDependants < this.form.entities.applicant.details.dependants.length) {
        while (this.form.entities.applicant.details.numOfDependants < this.form.entities.applicant.details.dependants.length) {
          this.form.entities.applicant.details.dependants.pop();
        }
      } else if (this.form.entities.applicant.details.numOfDependants > this.form.entities.applicant.details.dependants.length) {
        while (this.form.entities.applicant.details.numOfDependants > this.form.entities.applicant.details.dependants.length) {
          this.form.entities.applicant.details.dependants.push({
            firstName: "",
            lastName: "",
            dob: "",
            relationship: "",
            stayOvernight: null,
            involvedInLegalIssue: null,
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
