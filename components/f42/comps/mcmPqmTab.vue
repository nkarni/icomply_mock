<template>
    <div>
      <b-form>
        <section class="mb-4">
          <b-row>
            <b-col cols="">
              <h6>Declaration</h6>
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
                This is a declaration by the proposed permit holder in support of
                an application to the Fair Work Commission under s.512 of the Fair
                Work Act 2009 for an entry permit.
              </p>
  
              <p>
                I, <br />Sam JOhn Smith <br />positionName<br />Of orgName,
                branch, full streetAddress
              </p>
              <p>Declare that each answer I give below is true and correct:</p>
              <pphPqm
                :form="form"
                :dec="form.committeeMember.dec"
              ></pphPqm>
            </b-col>
          </b-row>
        </section>
  
        <section :class="'mb-4 ' + (disableSignature ? 'disabled' : '')">
          <f42-signature
            :form="form"
            :signature="form.committeeMember.dec.signature"
            :indented="false"
          ></f42-signature>
        </section>
  
        <section
          :class="
            'border-top border-secondary mb-4 pt-4 ' +
            (disableSignature === true ? ' disabled ' : '')
          "
        >
          <b-row>
            <b-col>
              <h5>Submit</h5>
              <p></p>
              <p>
                The form will be submitted for verification by the administrator.
              </p>
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
  import mcmPqm from "./mcmPqm.vue";
  import f42Signature from "../common/f42Signature.vue";
  export default {
    components: { entity, Notice, EntityAddress,f42Signature, pphPqm },
    name: "pphPqmTab",
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
      youString: function () {
        return this.form.applyingForSelf ? "you" : "the Applicant";
      },
      yourString: function () {
        return this.form.applyingForSelf ? "your" : "the Applicant's";
      },
      AreYouString: function () {
        return this.form.applyingForSelf ? "are you" : "is the Applicant";
      },
      DoYouString: function () {
        return this.form.applyingForSelf ? "do you" : "is the Applicant";
      },
      DoYouStringCont: function () {
        return this.form.applyingForSelf ? "do you" : "does the Applicant";
      },
      youAreString: function () {
        return this.form.applyingForSelf ? "you are" : "the Applicant is";
      },
      wereYouString: function () {
        return this.form.applyingForSelf ? "were you" : "was the Applicant";
      },
      AreYouString: function () {
        return this.form.applyingForSelf ? "are you" : "the Applicant is";
      },
  
      contactPersonName: function () {
        return this.personToString(this.form.businessDetails.contactPerson);
      },
      disableSignature: function () {
        return !(
          this.form.permitHolder.dec.awareOfMatters === false ||
          this.form.permitHolder.dec.awareOfMattersDetails.length > 2
        );
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
    },
  };
  </script>
    
    <style lang="scss" scoped>
  h6::first-letter {
    text-transform: uppercase;
  }
  .disabled {
    opacity: 0.4;
  }
  </style>
    