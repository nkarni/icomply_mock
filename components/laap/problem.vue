<template>
  <div>
    <section class="border-bottom border-secondary mb-4 pb-2">
      <b-row>
        <b-col cols="4">
          <h6>Lawyer Preferences</h6>
          <p>
            You may choose a particular lawyer whom you want to handle your
            case. <br /><br />If you do not have a particular lawyer in mind, we
            will choose one for you. If you prefer to see a male or female
            lawyer, please write this on the form too. <br /><br />We will take
            your choice into account when assessing the application, but we are
            unable to guarantee your choice of lawyer.
          </p>
        </b-col>
        <b-col>
          <b-form-group
            :label="
              'In respect of this application, who ' +
              DoYouStringCont +
              ' want ' +
              yourString +
              ' lawyer to be?'
            "
          >
            <b-form-radio-group
              stacked
              v-model="form.problem.preferredLawyerType"
              :options="[
                'A Legal Services Commission lawyer',
                'A private lawyer',
                'I don\'t mind',
              ]"
            ></b-form-radio-group>
          </b-form-group>
          <entity
            :form="form"
            :entity="form.problem.preferredLawyer"
            :showFirstName="
              form.problem.preferredLawyerType !== '' &&
              form.problem.preferredLawyerType !== 'I don\'t mind'
            "
            :showLastName="
              form.problem.preferredLawyerType !== '' &&
              form.problem.preferredLawyerType !== 'I don\'t mind'
            "
            :showOrgName="
              form.problem.preferredLawyerType === 'A private lawyer'
            "
            :showPhones="
              form.problem.preferredLawyerType !== '' &&
              form.problem.preferredLawyerType !== 'I don\'t mind'
            "
            firstNameLabel="The lawyer's give name(s) (if known)"
            lastNameLabel="The lawyer's give name(s) (if known)"
            orgNameLabel="The lawyer's firm or organisation name"
            phonesLabel="The lawyer's phone number"
          >
          </entity>

          <b-form-group
            label="Are there any preferences related to the choice of lawyer?"
            v-if="form.problem.preferredLawyerType === 'A private lawyer'"
          >
            <b-form-textarea
              v-model="form.problem.preferredLawyerDetails"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
    </section>
    <section class="border-bottom border-secondary mb-4 pb-2">
      <b-row>
        <b-col cols="4">
          <h6>What is this application for?</h6>
          <p>
            Choose all that apply, a relevant section will automtically show
            below to match your selection(s).<br /><br />

            If you are not sure what your application is about and would like to
            talk to a Lawyer, call 1300 366 424 to arrange free legal advice.
          </p>
        </b-col>
        <b-col>
          <b-form-group>
            <b-form-checkbox-group
              stacked
              v-model="form.problem.problemType"
              :options="[
                'Criminal Law problem',
                'Family Law problem',
                'Civil/General Law problem',
                'Children removed from your care by Department of Child Protection (DCP)',
              ]"
            ></b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>
    </section>

    <div v-if="form.problem.problemType.includes('Criminal Law problem')">
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Criminal Law</h6>
            <p>
              If you are not sure and would like to talk to a Lawyer, call 1300
              366 424 to arrange free legal advice.
            </p>
          </b-col>
          <b-col>
            <b-form-group :label="DoYouStringCont + ' have to go to court?'">
              <b-form-radio-group
                stacked
                v-model="form.problem.criminalLaw.haveToGoCourt"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>

            <!-- Criminal Law: Courts -->
            <div v-if="form.problem.criminalLaw.haveToGoCourt">
              <div
                v-for="(court, index) of form.problem.criminalLaw.courts"
                :key="index"
                v-bind:id="index"
                class="mb-2 courts pl-3 mb-4"
              >
                <div v-if="form.problem.criminalLaw.courts.length > 0">
                  <strong>Court {{ index + 1 }}</strong
                  ><b-button
                    variant="link"
                    class="p-0"
                    @click.prevent="removeCriminalLawCourt(index)"
                    v-b-tooltip.hover
                    title="Remove"
                    ><b-icon icon="x-circle"
                  /></b-button>
                </div>

                <court
                  :form="form"
                  :court="court"
                  :courtType="'criminalLaw'"
                ></court>
              </div>

              <div class="text-right">
                <b-button
                  variant="link"
                  class="p-0 mb-4"
                  @click.prevent="addCriminalLawCourt"
                  >Click here to add another Court</b-button
                >
              </div>
            </div>

            <!-- Criminal Law: Parole Boards -->
            <b-form-group
              :label="DoYouStringCont + ' have to go to a parole board?'"
            >
              <b-form-radio-group
                stacked
                v-model="form.problem.criminalLaw.hasParoleBoard"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
            <div v-if="form.problem.criminalLaw.hasParoleBoard">
              <div
                v-for="(board, index) of form.problem.criminalLaw.paroleBoards"
                :key="index"
                v-bind:id="index"
                class="mb-2 courts pl-3 mb-4"
              >
                <div v-if="form.problem.criminalLaw.paroleBoards.length > 0">
                  <strong>Parole Board {{ index + 1 }}</strong
                  ><b-button
                    variant="link"
                    class="p-0"
                    @click.prevent="removeCriminalLawParoleBoard(index)"
                    v-b-tooltip.hover
                    title="Remove"
                    ><b-icon icon="x-circle"
                  /></b-button>
                </div>

                <b-form-group
                  :label="
                    'When is ' +
                    yourString +
                    ' next Parole Board date (if known)'
                  "
                >
                  <b-form-datepicker
                    v-model="board.date"
                    class="mb-2"
                  ></b-form-datepicker>
                </b-form-group>

                <b-form-group
                  :label="'Please provide details about your Parole'"
                >
                  <b-form-textarea
                    v-model="board.reason"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
              </div>

              <div class="text-right">
                <b-button
                  variant="link"
                  class="p-0 mb-4"
                  @click.prevent="addCriminalLawParoleBoard"
                  >Click here to add another Parole Board</b-button
                >
              </div>
            </div>

            <!-- Criminal Law: Appeal Courts -->
            <b-form-group :label="DoYouStringCont + ' want to appeal against'">
              <b-form-checkbox-group
                stacked
                v-model="form.problem.criminalLaw.appealingAgainst"
                :options="['A conviction', 'A sentence']"
              ></b-form-checkbox-group>
            </b-form-group>
            <div v-if="form.problem.criminalLaw.appealingAgainst.length > 0">
              <div
                v-for="(court, index) of form.problem.criminalLaw.appealCourts"
                :key="index"
                v-bind:id="index"
                class="mb-2 courts pl-3 mb-4"
              >
                <div v-if="form.problem.criminalLaw.appealCourts.length > 0">
                  <strong>Court {{ index + 1 }}</strong
                  ><b-button
                    variant="link"
                    class="p-0"
                    @click.prevent="removeCriminalLawAppealCourt(index)"
                    v-b-tooltip.hover
                    title="Remove"
                    ><b-icon icon="x-circle"
                  /></b-button>
                </div>

                <court
                  :form="form"
                  :court="court"
                  :courtType="'criminalLaw.appealCourts'"
                ></court>
              </div>

              <div class="text-right">
                <b-button
                  variant="link"
                  class="p-0 mb-4"
                  @click.prevent="addCriminalLawAppealCourt"
                  >Click here to add another Appeal</b-button
                >
              </div>
            </div>

            <b-form-group
              :label="
                DoYouStringCont +
                ' have a criminal record/previous convictions?'
              "
            >
              <b-form-radio-group
                stacked
                v-model="form.problem.criminalLaw.hasCriminalRecord"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              :label="
                'Have the police taken any of ' +
                yourString +
                ' your belonging under a proceeds of crime order?'
              "
            >
              <b-form-radio-group
                stacked
                v-model="form.problem.criminalLaw.policeTakenBelonging"
                :options="boolOptions"
              ></b-form-radio-group>
              <notice
                v-if="form.problem.criminalLaw.policeTakenBelonging"
                :message="
                  'A copy of ' +
                  yourString +
                  ' order will be required in the attachments page.'
                "
              ></notice>
            </b-form-group>
          </b-col>
        </b-row>
      </section>
    </div>

    <!-- Family law section -->
    <div v-if="form.problem.problemType.includes('Family Law problem')">
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Family Law</h6>
            <p>
              If you are not sure and would like to talk to a Lawyer, call 1300
              366 424 to arrange free legal advice.
            </p>
          </b-col>
          <b-col>
            <b-form-group :label="DoYouStringCont + ' have to go to a?'">
              <b-form-radio-group
                stacked
                v-model="form.problem.familyLaw.haveToGoto"
                :options="['Court', 'Family Dispute Resolution Conference']"
              ></b-form-radio-group>
            </b-form-group>
            <!-- family law court details -->
            <div v-if="form.problem.familyLaw.haveToGoto === 'Court'">
              <b-form-group label="Which court?">
                <b-form-select
                  v-model="form.problem.familyLaw.courtType"
                  :options="['Select one from family courts options']"
                ></b-form-select>
              </b-form-group>

              <b-form-group label="Which suburb/town?">
                <b-form-select
                  v-model="form.problem.familyLaw.courtTown"
                  :options="[
                    'Options will cascade from the selected court option ',
                  ]"
                ></b-form-select>
              </b-form-group>

              <b-form-group label="Court File Number">
                <b-form-input
                  v-model="form.problem.familyLaw.courtFileNumber"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                :label="'When is ' + yourString + ' next court date (if known)'"
              >
                <b-form-datepicker
                  v-model="form.problem.familyLaw.nextDate"
                  class="mb-2"
                ></b-form-datepicker>
              </b-form-group>

              <b-form-group
                :label="'What is the next Court date for? e.g. mentions,committal'"
              >
                <b-form-textarea
                  v-model="form.problem.familyLaw.nextDateReason"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </div>

            <!-- family law conference details  -->
            <div
              v-if="
                form.problem.familyLaw.haveToGoto ===
                'Family Dispute Resolution Conference'
              "
            >
              <b-form-group :label="'Conference date (if known)'">
                <b-form-datepicker
                  v-model="form.problem.familyLaw.conferenceDate"
                  class="mb-2"
                ></b-form-datepicker>
              </b-form-group>

              <b-form-group label="Other party's given name(s)">
                <b-form-input
                  v-model="form.problem.familyLaw.otherPartyFirstName"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Other party's family name(s)">
                <b-form-input
                  v-model="form.problem.familyLaw.otherPartyLastName"
                ></b-form-input>
              </b-form-group>

              <b-form-group :label="'Is a Community Legal Centre involved?'">
                <b-form-radio-group
                  stacked
                  v-model="form.problem.familyLaw.isClcInvolved"
                  :options="boolOptions"
                ></b-form-radio-group>
              </b-form-group>

              <b-form-group label="Which Community Legal Centre?">
                <b-form-select
                  v-if="form.problem.familyLaw.isClcInvolved"
                  v-model="form.problem.familyLaw.whichClc"
                  :options="['Select one from CLC options']"
                ></b-form-select>
              </b-form-group>
            </div>
            <b-form-group
              :label="
                DoYouStringCont +
                ' want to appeal against a decision of the court?'
              "
            >
              <b-form-radio-group
                stacked
                v-model="form.problem.familyLaw.wantsToAppeal"
                :options="boolOptions"
              ></b-form-radio-group>
            </b-form-group>
            <!-- Family Law Appeal details -->
            <div v-if="form.problem.familyLaw.wantsToAppeal">
              <b-form-group>
                <b-form-textarea
                  label="Please provide details"
                  v-model="form.problem.familyLaw.appealDetails"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>

              <b-form-group label="Which court?">
                <b-form-select
                  v-model="form.problem.familyLaw.appealCourtType"
                  :options="['Select one from family appeal courts options']"
                ></b-form-select>
              </b-form-group>

              <b-form-group label="Which suburb/town?">
                <b-form-select
                  v-model="form.problem.familyLaw.appealCourtTown"
                  :options="[
                    'Options will cascade from the selected court option ',
                  ]"
                ></b-form-select>
              </b-form-group>

              <b-form-group
                :label="'What was the date of the original decision?'"
              >
                <b-form-datepicker
                  v-model="form.problem.familyLaw.appealCourtDate"
                  class="mb-2"
                ></b-form-datepicker>
              </b-form-group>
            </div>

            <!--  Family law problem-->
            <b-form-group
              :label="
                'What is ' + yourString + ' family or relationship problem?'
              "
              description="If you are not sure what your application is about and would like to talk to a Lawyer, call 1300 366 424 to arrange free legal advice."
            >
              <b-form-checkbox-group
                stacked
                v-model="form.problem.familyLaw.problemType"
                :options="familyLawProblemTypeOptions"
              ></b-form-checkbox-group>
            </b-form-group>

            <notice
              class="mb-4"
              message="Get legal advice by calling 1300 366 424"
              v-if="form.problem.familyLaw.problemType.includes('Unsure')"
            ></notice>

            <b-form-group
              :label="'have the police applied for an intervention order about this matter?'"
            >
              <b-form-radio-group
                stacked
                v-model="form.problem.familyLaw.policeAppliedForIntervention"
                :options="['Yes', 'No', 'Unsure']"
              ></b-form-radio-group>
            </b-form-group>
            <notice
              class="mb-4"
              v-if="
                form.problem.familyLaw.policeAppliedForIntervention === 'Yes'
              "
              message="A copy of the intervention order will be required in the attachments step."
            ></notice>

            <b-form-group
              v-if="
                form.problem.familyLaw.policeAppliedForIntervention === true
              "
            >
              <b-form-textarea
                label="Please provide details"
                v-model="form.problem.familyLaw.policeInterventionDetails"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>

            <b-form-group
              :label="'Tell us more about ' + yourString + ' problem'"
            >
              <b-form-textarea
                v-model="form.problem.familyLaw.problemDetails"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
            <notice
              v-if="
                form.problem.familyLaw.policeAppliedForIntervention === true
              "
              message="If you have any documentation about this family matter you can upload them in the attachments step."
            ></notice>
          </b-col>
        </b-row>
      </section>

      <div v-if="form.problem.problemType.includes('Family Law problem')">
        <section class="border-bottom border-secondary mb-4 pb-2">
          <b-row>
            <b-col cols="4">
              <h6>Who is the person {{ youAreString }} in dispute with</h6>
            </b-col>
            <b-col>
              <entity
                :form="form"
                :entity="form.entities.otherParty"
                showAddress
                showFirstName
                showLastName
                addressLabel="Address (optional)"
              ></entity>

              <b-form-group :label="'Date of birth (optional)'">
                <b-form-datepicker
                  v-model="form.entities.otherParty.dob"
                  class="mb-2"
                ></b-form-datepicker>
              </b-form-group>

              <b-form-group :label="'Relationship to you'">
                <b-form-select
                  v-model="form.entities.otherParty.relationshipToApplicant"
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

              <b-form-group :label="'Do they have a lawyer?'">
                <b-form-radio-group
                  stacked
                  v-model="form.entities.otherParty.hasLawyer"
                  :options="['Yes', 'No', 'Unsure']"
                ></b-form-radio-group>
              </b-form-group>

              <div v-if="form.entities.otherParty.hasLawyer === 'Yes'">
                <b-form-group :label="'Their lawyer given name(s)'">
                  <b-form-input
                    v-model="form.entities.otherParty.lawyerFirstName"
                  ></b-form-input>
                </b-form-group>

                <b-form-group :label="'Their lawyer family name(s)'">
                  <b-form-input
                    v-model="form.entities.otherParty.lawyerLastName"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  :label="'Law firm'"
                  v-if="form.entities.otherParty.hasLawyer === true"
                >
                  <b-form-input
                    v-model="form.entities.otherParty.lawyerLastName"
                  ></b-form-input>
                </b-form-group>

                <entity-address
                  :address="form.entities.otherParty.lawyerAddress"
                ></entity-address>
              </div>

              <b-form-group
                :label="
                  haveYouString +
                  ' been to counselling/mediation or any family dispute resolution sessions with the person you are in dispute with? '
                "
              >
                <b-form-radio-group
                  stacked
                  v-model="form.problem.familyLaw.beenToCounseling"
                  :options="boolOptions"
                ></b-form-radio-group>
                <notice
                  class="mb-4"
                  v-if="form.problem.familyLaw.beenToCounseling === true"
                  message="A copy of the family dispute resolution certificate will be required in the attachments step."
                ></notice>
              </b-form-group>

              <b-form-group
                :label="
                  AreYouString +
                  ' or ' +
                  haveYouString +
                  ' been married the person you are in dispute with? '
                "
              >
                <b-form-radio-group
                  stacked
                  v-model="form.problem.familyLaw.marriedToOtherParty"
                  :options="boolOptions"
                ></b-form-radio-group>
              </b-form-group>
              <div v-if="form.problem.familyLaw.marriedToOtherParty === true">
                <b-form-group :label="'Marriage date'">
                  <b-form-datepicker
                    v-model="form.problem.familyLaw.marriageDate"
                    class="mb-2"
                  ></b-form-datepicker>
                </b-form-group>
                <b-form-group :label="'Separation date'">
                  <b-form-datepicker
                    v-model="form.problem.familyLaw.SeparationDate"
                    class="mb-2"
                  ></b-form-datepicker>
                </b-form-group>
                <b-form-group :label="'Divorce date'">
                  <b-form-datepicker
                    v-model="form.problem.familyLaw.DivorceDate"
                    class="mb-2"
                  ></b-form-datepicker>
                </b-form-group>
              </div>
              <div v-if="form.problem.familyLaw.marriedToOtherParty === false">
                <b-form-group
                  :label="
                    wereYouString +
                    ' in a de-facto relationship with the person you are in dispute with? '
                  "
                >
                  <b-form-radio-group
                    stacked
                    v-model="form.problem.familyLaw.defacto"
                    :options="boolOptions"
                  ></b-form-radio-group>
                </b-form-group>

                <div v-if="form.problem.familyLaw.defacto === true">
                  <b-form-group :label="'Date relationship started'">
                    <b-form-datepicker
                      v-model="form.problem.familyLaw.relationshipStartDate"
                      class="mb-2"
                    ></b-form-datepicker>
                  </b-form-group>
                  <b-form-group :label="'Separation date'">
                    <b-form-datepicker
                      v-model="form.problem.familyLaw.SeparationDate"
                      class="mb-2"
                    ></b-form-datepicker>
                  </b-form-group>
                </div>
              </div>
            </b-col>
          </b-row>
        </section>
      </div>
    </div>
    <!-- Civic law section -->
    <div v-if="form.problem.problemType.includes('Civil/General Law problem')">
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Civic/General Law</h6>
            <p>For example:</p>
<ul>
<li>What the legal problem is</li>
<li>How is involved and how they are involved</li>
<li>How and when the legal problem started</li>
<li>What has happened since then</li>
<li>Financial details (if you don't receive any income)</li>
<li>Any special circumstances that apply to your situation</li>
</ul>
          </b-col>
          <b-col>
            <b-form-group :label="DoYouStringCont + ' have to go to a'">
              <b-form-radio-group
                stacked
                v-model="form.problem.civicLaw.haveToGoto"
                :options="['Court','Tribunal']"
              ></b-form-radio-group>
            </b-form-group>

            <!-- Civic law court details -->
            <div v-if="form.problem.civicLaw.haveToGoto === 'Court'">
              <b-form-group label="Which court?">
                <b-form-select
                  v-model="form.problem.civicLaw.courtType"
                  :options="['Select one from civic courts options']"
                ></b-form-select>
              </b-form-group>

              <b-form-group label="Which suburb/town?">
                <b-form-select
                  v-model="form.problem.civicLaw.courtTown"
                  :options="[
                    'Options will cascade from the selected court option ',
                  ]"
                ></b-form-select>
              </b-form-group>

              <b-form-group label="Court File Number">
                <b-form-input
                  v-model="form.problem.familyLaw.courtFileNumber"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                :label="'When is ' + yourString + ' next court date (if known)'"
              >
                <b-form-datepicker
                  v-model="form.problem.civicLaw.nextDate"
                  class="mb-2"
                ></b-form-datepicker>
              </b-form-group>

              <b-form-group
                :label="'What is the next Court date for? e.g. mentions, committal, trial'"
              >
                <b-form-textarea
                  v-model="form.problem.civicLaw.nextDateReason"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </div>

          </b-col>
        </b-row>
      </section>
    </div>
  </div>
</template>

<script>
import Court from "./court.vue";
import Entity from "./entity.vue";
import EntityAddress from "./entityAddress.vue";
import Notice from "./notice.vue";
export default {
  name: "problem",
  components: { Entity, Court, Notice, EntityAddress },
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
      familyLawProblemTypeOptions: [
        "Who my children live with (residency/custody)",
        "How much time my children spend with me or the other parent (contact/access)",
        "Decisions about how my children are raised (eg schooling, health, religion)",
        "Child support/maintenance/paternity",
        "Property settlement",
        "Spousal maintenance",
        "Divorce",
        "Enforcing a court order or advising an order has been breached",
        "Seeking to change family court orders due to family violence",
        "Applying for an intervention order",
        "Responding to an application for an intervention order",
        "Unsure",
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
  },
  methods: {
    addCriminalLawCourt() {
      this.form.problem.criminalLaw.courts.push({
        courtType: null,
        courtTown: null,
        nextDate: "",
        nextDateReason: "",
        offenses: "",
        offenceDetails: "",
        victims: [
          {
            firstName: "",
            lastName: "",
          },
        ],
        hasOtherCharged: null,
        othersCharged: [{ firstName: "", lastName: "" }],
      });
    },
    removeCriminalLawCourt(i) {
      this.form.problem.criminalLaw.courts.splice(i);
    },
    addCriminalLawParoleBoard() {
      this.form.problem.criminalLaw.paroleBoards.push({
        date: "",
        details: "",
      });
    },
    removeCriminalLawParoleBoard(i) {
      this.form.problem.criminalLaw.paroleBoards.splice(i);
    },
    addCriminalLawAppealCourt() {
      this.form.problem.criminalLaw.appealCourts.push({
        courtType: null,
        courtSuburb: null,
        nextDate: "",
        nextDateReason: "",
        offenses: "",
        offenceDetails: "",
        victims: [
          {
            firstName: "",
            lastName: "",
          },
        ],
        hasOtherCharged: null,
        othersCharged: [{ firstName: "", lastName: "" }],
      });
    },
    removeCriminalLawAppealCourt(i) {
      this.form.problem.criminalLaw.appealCourts.splice(i);
    },
  },
};
</script>

<style lang="scss" scoped >
.courts {
  border-left: 4px solid var(--primaryLighter) !important;
}
</style>