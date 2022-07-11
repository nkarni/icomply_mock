<template>
  <div>
    <b-form>
      <section class=" mb-4 pb-2">
        <b-row>
          <b-col >
            <h6>Declaration</h6>
            <!-- <p>Answer each question in the declaration below. Section 513(2) of the Fair Work Act 2009 has the effect that certain offences do not need to be disclosed.</p>
            <p>Giving false or misleading information is a serious offence. A person who: · knowingly or recklessly makes a false or misleading statement in an application for an entry permit; or · knowingly gives false or misleading information in an application for an entry permit is guilty of an offence, the punishment for which is imprisonment for up to 12 months if the statement is made or information is provided knowingly, or up to 6 months if the statement is made recklessly – see Part 7.4, s.136 and s.137.1 of the Criminal Code.</p>
          <p>This is a declaration by the proposed permit holder in support of an application to the Fair Work Commission under s.512 of the Fair Work Act 2009 for an entry permit.</p>
          </b-col> -->
         
          <label>Answer each question in the declaration below.</label>
 <notice
                class="mb-2 danger"
                :borderClass="'red'"
                message="<p>Giving false or misleading information is a serious offence. A person who:
                            <ul>
                                <li>knowingly or recklessly makes a false or misleading statement in an application for
                                    an entry permit; or</li>
                                <li>knowingly gives false or misleading information in an application for an entry
                                    permit</li>
                            </ul>
                            is guilty of an offence, the punishment for which is imprisonment for up to 12 months if
                                the statement is made or information is provided knowingly, or up to 6 months if the
                                statement is made recklessly - see Part 7.4, s.136 and s.137.1 of the Criminal Code.</p>"
              ></notice>
 <notice
              class="mb-2"
              message=" Section 513(2) of the Fair Work Act 2009 has the effect that certain offences do not need to be disclosed.
"
            ></notice>

            <p>
              This is a declaration in support of an application to the Fair Work Commission under s.512 of the Fair
              Work Act 2009 for an entry permit, for the following proposed permit holder:
            </p>
            <p>
              Sam Jonhn Smith
            </p>
            <p>
              I, <br>Don Burrows, <br> officeHeld <br>
              Of orgName, branch, full streetAddress
            </p>
            <p>
              Declare that:
            <ol>
              <li>Having made proper inquiries, I believe that the proposed permit holder is a fit and proper person to
                hold an entry permit.</li>
              <li> Each answer I give below is true and correct to the best of my knowledge:
              </li>
            </ol>


            </p>

            
            <f-42-member-dec :form="form" :dec="form.committeeMember.dec"></f-42-member-dec>
            <div v-if="form.committeeMember.dec.beenDisqualified === false || form.committeeMember.dec.beenDisqualifiedDetails.length > 2">
             <notice class="mb-2"
              :message="'The Commission can take into account any other matter that it considers relevant to whether the proposed permit holder is a fit and proper person to hold a permit. This may include adverse comments made about the proposed permit holder in a Commission or court decision, regardless of whether the proposed permit holder was a party to the proceeding.'">
            </notice>

            <!-- <f-42-holder-super-details :form="form" :dec="form.committeeMember.dec"></f-42-holder-super-details> -->
            <b-form-group
              :label="'Are you aware of any other matters that may be relevant to whether the proposed permit holder is a fit and proper person to hold a permit?'">
              <b-form-radio-group v-model="form.committeeMember.dec.awareOfMatters" :options="boolOptions">
              </b-form-radio-group>
            </b-form-group>

            <b-form-group label="Please provide details" v-if="form.committeeMember.dec.awareOfMatters === true">
              <b-form-textarea v-model="form.committeeMember.dec.awareOfMattersDetails"></b-form-textarea>
            </b-form-group>


             

            <b-form-group
            v-if="form.committeeMember.dec.awareOfMatters === false || form.committeeMember.dec.awareOfMattersDetails.length > 2"
              label="Describe the inquiries you made and what you did to satisfy yourself that the proposed permit holder meets the permit qualification matters listed in s.513(1)(b) to (f) of the Fair Work Act 2009:">
              <b-form-textarea v-model="form.committeeMember.inquiries" rows="6" max-rows="12"></b-form-textarea>
            </b-form-group>
            </div>
           

          </b-col>
        </b-row>
      </section>


      <section class="border-top border-secondary  mb-4 pt-4"  v-if="form.committeeMember.inquiries.length > 2">
        <b-row>
          <b-col cols="4">
            <h6>Signature</h6>
          </b-col>
          <b-col>
            <b-row>
              <b-col cols="6">
                <b-form-group label="Name">
                  <b-form-input  v-model="form.committeeMember.dec.signedName">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Date">
                  <b-form-datepicker placeholder=""  v-model="form.committeeMember.dec.signedDate">
                    </b-form-datepicker>
                  </b-form-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </section>

      <section class="border-top border-secondary mb-4 pt-4" v-if="form.committeeMember.dec.signedName.length > 2">
        <b-row>
          <b-col>

            <h5>Submit</h5>
            <p>The form will be submitted to FWC for review.</p>

            <b-col class="text-center mt-3">
              <b-button variant="primary">Submit the form</b-button>
            </b-col>

          </b-col>
        </b-row>
      </section>

    </b-form>
  </div>
</template>

<script>
import entity from "../../common/entity.vue";
import EntityAddress from "../../common/entityAddress.vue";
import Notice from "../../common/notice.vue";
import f42MemberDec from "../common/f42MemberDec.vue";
export default {
  components: { entity, Notice, EntityAddress, f42MemberDec },
  name: "f42MemberViewSubmit",
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
    };
  },
  computed: {
    haveYouStr: function () {
      if (this.form.userRole === "permitHolder") {
        return "have you";
      } else {
        return "Has the proposed permit holder";
      }
    },
    youStr: function () {
      if (this.form.userRole === "permitHolder") {
        return "you";
      } else {
        return "The proposed permit holder";
      }
    },
  },
  methods: {
    boolToString(val) {
      if (val === true) {
        return "Yes";
      }
      return "No";
    },
    personToString(person) {
      var str;
      // let personName = 'sdfsdfsdf'
      str = person.firstName + " " + person.lastName + ",jhglkjg";
      // console.log('str', str)

      str += " " + person.email;

      if (person.email.length > 0) {
        str = +" " + person.email;
      }
      if (person.phones.length > 0) {
        person.phones.forEach((phone) => {
          if (phone.phone !== "") {
            str += " " + phone.phone + " (" + phone.type + ")";
          }
        });
        str += " " + person.email;
      }
      console.log("person", person);
      console.log("str", str);
      return str;
    },
    onNumDepnedantsChange() {
      if (this.form.entities.applicant.details.numOfDependants < 0) return;
      if (
        this.form.entities.applicant.details.numOfDependants <
        this.form.entities.applicant.details.dependants.length
      ) {
        while (
          this.form.entities.applicant.details.numOfDependants <
          this.form.entities.applicant.details.dependants.length
        ) {
          this.form.entities.applicant.details.dependants.pop();
        }
      } else if (
        this.form.entities.applicant.details.numOfDependants >
        this.form.entities.applicant.details.dependants.length
      ) {
        while (
          this.form.entities.applicant.details.numOfDependants >
          this.form.entities.applicant.details.dependants.length
        ) {
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
