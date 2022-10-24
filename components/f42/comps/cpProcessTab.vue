<template>
    <div>
      <b-form>
        <section class="pb-4">
          <b-row>
            <b-col>
              <h6>Process overview</h6> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </b-col>
          </b-row>
        </section>
        <section class="">
          <b-row>
            <b-col>
              <h6>What you will do today</h6>
              <ol>
                <li>
                  Provide your contact details Explanation text about why you need
                  to provide this
                </li>
                <li>
                  Provide proposed permit holder details Explanation text about
                  why you need to provide this&nbsp;
                </li>
                <li>
                  Provide Member of Committee of Management details Explanation
                  text about why you need to provide this
                </li>
                <li>
                  Invite the proposed permit holder to confirm their details
                </li>
                <li>Explanation text about why you need to do this</li>
              </ol>
              <p>
                Throughout this form - all fields are mandatory unless
                specifically marked as optional.
              </p>
  
              <!-- <b-form-group>
                <b-list-group>
                  <b-list-group-item>
                    <h6>1. Provide your contact details</h6>
                    <span class="ml-3"
                      >Explanation text about why you need to provide this</span
                    >
                  </b-list-group-item>
                  <b-list-group-item>
                    <h6>2. Provide proposed permit holder details</h6>
                    <span class="ml-3"
                      >Explanation text about why you need to provide this</span
                    >
                  </b-list-group-item>
                  <b-list-group-item>
                    <h6>3. Provide Member of Committee of Management details</h6>
                    <span class="ml-3"
                      >Explanation text about why you need to provide this</span
                    >
                  </b-list-group-item>
                  <b-list-group-item>
                    <h6>
                      4. Invite the proposed permit holder to confirm their
                      details
                    </h6>
                    <span class="ml-3"
                      >Explanation text about why you need to do this</span
                    >
                  </b-list-group-item>
                </b-list-group>
              </b-form-group> -->
            </b-col>
          </b-row>
        </section>
        <section class="">
          <b-row>
            <b-col>
              <h6>What will happen next</h6>
              <ul>
                <li>
                  The proposed permit holder will be invited to complete their
                  part of the application.
                </li>
                <li>
                  They will review their details, verify their identity, provide
                  additional supporting documents and sign their statuary
                  declarations.
                </li>
                <li>
                  Then the Member of Committee of Management will be invited to
                  review the proposed permit holder details, approve them for the
                  entry and sign their statuary declarations.
                </li>
                <li>
                  You will then be invited to submit the application to FWC for
                  review.
                </li>
              </ul>
  
              <!-- <b-form-group>
                <div class="mt-4">
                  <p>
                    The proposed permit holder will be invited to complete their
                    part of the application. They will review their details,
                    verify their identity, provide additional supporting documents
                    and sign their statuary declarations.
                  </p>
                </div>
                <div class="mt-4">
                  <p>
                    Then the Member of Committee of Management will be invited to
                    review the proposed permit holder details, approve them for
                    the entry and sign their statuary declarations.
                  </p>
                </div>
                <div class="mt-4">
                  <p>
                    You will then be invited to submit the application to FWC for
                    review.
                  </p>
                </div>
              </b-form-group> -->
            </b-col>
          </b-row>
        </section>
        <section class="mb-4 pb-2">
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
  
        <section class="border-top border-secondary mt-4 pt-4">
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
        console.log(this.adminUserRoleArraySelection, 'adminUserRoleArraySelection')
        if (this.adminUserRoleArraySelection === 'cp') {
          this.form.adminUserRolesArray = ["admin"];
        } else if (this.adminUserRoleArraySelection === 'cppph') {
          this.form.adminUserRolesArray = ["admin", "pph"];
        } else if (this.adminUserRoleArraySelection === 'cpmember') {
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
  