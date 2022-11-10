<template>
  <div>
    <b-form>
      <section class="pb-2">
        <b-row>
          <b-col>
            <h6>Process overview</h6>

            <p>
              Use this application form to apply for an entry permit for an
              official of an employee organisation or association.
            </p>
            <h6>
              Starting the form
            </h6>
            <p>
              The form must be started by a contact person who is authorised to
              lodge the application on the organisation&rsquo;s behalf. The
              contact person can be:
            </p>
            <ul>
              <li>the proposed permit holder; or</li>
              <li>
                the Committee of Management member making the application; or
              </li>
              <li>another person.</li>
            </ul>

            <p>If you start the form you will be responsible for:</p>
            <ul>
              <li>inviting other users to complete their declarations;</li>
              <li>reviewing the information provided by other users;</li>
              <li>lodging the form with the Fair Work Commission.</li>
            </ul>

            <p><strong>Step 1 </strong>You will need to:</p>
            <ul>
              <li>provide administrative details for the application; and</li>
              <li>
                attach evidence that the proposed permit holder has completed
                appropriate training about the rights and responsibilities of a
                permit holder.
              </li>
            </ul>

            <p>
              <strong>Step 2 </strong>The proposed permit holder will be
              prompted to:
            </p>
            <ul>
              <li>upload their signature and a recent photograph; and</li>
              <li>complete declarations in support of the application.</li>
            </ul>

            <p>
              <strong>Step 3 </strong>The Committee of Management member will be
              prompted to:
            </p>
            <ul>
              <li>review the proposed permit holder&rsquo;s declarations;</li>
              <li>complete a declaration in support of the application.</li>
            </ul>
          
            <h6 class="mt-4">Before you start this form</h6>
            <p>Please check that the proposed permit holder:</p>

            <ul>
              <li>
                has completed appropriate training about the rights and
                responsibilities of a permit holder
              </li>
              <li>has obtained a Digital iD from Australia Post*</li>
              <li>
                will be available to verify their identity with the Commission
                after the application is lodged.
              </li>
            </ul>

            <p>
              *Note: the proposed permit holder&rsquo;s Digital iD must match
              their name on the application form. If they can&rsquo;t obtain a
              Digital iD in the same name or they do not want to obtain one,
              please contact us before lodging the application
            </p>
            
            <p>Please check that the Committee of Management member:</p>
            <ul>
              <li>
                has made appropriate enquiries to satisfy themselves of the
                permit qualification matters
              </li>
              <li>
                will be available to respond to requests for further information
                after the application is lodged.
              </li>
            </ul>
          </b-col>
        </b-row>
  
        <b-row>
          <b-col>
            <h6>Privacy</h6>
            <p>
              Read the
              <a
                href="https://www.fwc.gov.au/documents/documents/forms/form_f42-privacy.pdf"
                >Privacy notice</a
              >
              to find out what personal information we collect, why we collect
              it, and what we do with it.
            </p>
            <p>The Commission may publish on its website:</p>
            <ul>
              <li>
                the names of the applicant organisation and the proposed permit
                holder; and
              </li>
              <li>
                that the organisation has applied for an entry permit to be
                issued to the proposed permit holder; and
              </li>
              <li>
                that third parties may make submissions to the Commission as to
                whether the proposed permit holder is a fit and proper person to
                be issued with an entry permit.
              </li>
            </ul>
            <p>
              If the Commission decides to issue an entry permit, the Commission
              will publish on its website the names of the applicant
              organisation and the permit holder, and the permit details.
            </p>
          </b-col>
        </b-row>
      </section>

      <section class="border-top border-secondary  pt-4">
        <b-row>
          <b-col cols="4">
            <h6>Your role</h6>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              label="Please indicate your role(s) in this application:"
            >
              <b-radio-group
                v-model="adminUserRoleArraySelection"
                stacked
                @change="onAdminUserRoleArraySelection"
                :options="[
                  { text: 'I am the Contact Person', value: 'cp' },
                  {
                    text: 'I am the Contact Person AND Proposed Permit Holder',
                    value: 'cppph',
                  },
                  {
                    text: 'I am the Contact Person AND Member of Committee of Management',
                    value: 'cpmember',
                  },
                ]"
              >
              </b-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
      </section>
    </b-form>
  </div>
</template>
  
  <script>
import Notice from "../../common/notice.vue";
export default {
  components: { Notice },
  name: "cpProcessTab",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      adminUserRoleArraySelection: null,

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
    AreYouStringReverse: function () {
      return this.form.applyingForSelf ? "are you" : "is the Applicant";
    },
  },
  methods: {
    onAdminUserRoleArraySelection() {
      console.log(
        this.adminUserRoleArraySelection,
        "adminUserRoleArraySelection"
      );
      if (this.adminUserRoleArraySelection === "cp") {
        this.form.adminUserRolesArray = ["admin"];
      } else if (this.adminUserRoleArraySelection === "cppph") {
        this.form.adminUserRolesArray = ["admin", "pph"];
      } else if (this.adminUserRoleArraySelection === "cpmember") {
        this.form.adminUserRolesArray = ["admin", "member"];
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
  