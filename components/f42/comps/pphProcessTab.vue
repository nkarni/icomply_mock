<template>
    <div>
      <b-form>
        <section class="">
          <b-row>
            <b-col>
              <h6>Process overview</h6>
              <p>Your organisation has started an application for the Fair Work Commission to issue an entry permit to you.</p>
            </b-col>
          </b-row>
        </section>
        <section class="">
          <b-row>
            <b-col>
              <h6>What you need to do:</h6>
              <ul>
                <li>upload your signature and a recent photograph; and </li>
                <li>
                  complete your declarations in support of the application.
                </li>
              </ul>
              <p><a
                target="_blank"
                href="https://www.fwc.gov.au/registered-organisations/entry-permits/about-fair-work-entry-permits/how-we-process-fair-work-entry"
                >Click here</a
              > for information about photograph requirements.</p>
              <!-- <p>
                Throughout this form - all fields are mandatory unless
                specifically marked as optional.
              </p> -->
            </b-col>
          </b-row>
        </section>
        <section class="">
          <b-row>
            <b-col>
              <h6>What happens next?</h6>
              <p>After you submit your declarations, the Committee of Management member will be invited to make a declaration in support of the application. </p>
              <p>The application will then be lodged with the Commission.</p>
              <p>After the application is lodged, the Commission may contact you so we can confirm your identity in a recorded video call.</p>
            </b-col>
          </b-row>
        </section>
        <section class="mb-4 pb-4">
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
      </b-form>
    </div>
  </template>
  
  <script>
  import entity from "../../common/entity.vue";
  import EntityAddress from "../../common/entityAddress.vue";
  import Notice from "../../common/notice.vue";
  export default {
    components: { entity, Notice, EntityAddress },
    name: "pphProcessTab",
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
      AreYouStringReverse: function () {
        return this.form.applyingForSelf ? "are you" : "is the Applicant";
      },
    },
  
  };
  </script>
  
  <style lang="scss" scoped>
  h6::first-letter {
    text-transform: uppercase;
  }
  </style>
  