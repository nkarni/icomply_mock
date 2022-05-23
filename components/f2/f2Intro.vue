<template>
  <div>
    <b-form>

   <section class=" pb-4">
        <b-row>
          <b-col>
            <h5>Process overview - </h5>
            
              TBC
           
          </b-col>
        </b-row>
      </section>


      <section class=" pb-4">
        <b-row>
          <b-col>
            <h5>Before you start -</h5>
            <h6>
              Have the following information ready before you begin completing
              this form:
            </h6>

           
              <ol>
                <li>Dates of your employment.</li>
                <li>What type of employee you were.</li>
                <li>Why you believe the dismissal was 'harsh, unjust or
                    unreasonable'.</li>
                <li>Business and contact details of your employer.</li>
                <li>A copy of your payslip and termination letter, if you have
                    them.</li>
              </ol>
              <!-- <b-list-group>
                <b-list-group-item>
                  <h6>dates of your employment</h6>
                </b-list-group-item>
                <b-list-group-item>
                  <h6>what type of employee you were</h6>
                </b-list-group-item>
                <b-list-group-item>
                  <h6>
                    why you believe the dismissal was 'harsh, unjust or
                    unreasonable'
                  </h6>
                </b-list-group-item>
                <b-list-group-item>
                  <h6>business and contact details of your employer</h6>
                </b-list-group-item>
                <b-list-group-item>
                  <h6>
                    a copy of your payslip and termination letter, if you have
                    them
                  </h6>
                </b-list-group-item>
              </b-list-group> -->
          
          </b-col>
        </b-row>
      </section>
         <section class=" pb-4">
        <b-row>
          <b-col>
            <h5>What you need to do now -</h5>
           
            
               Complete the form - you must answer every question, we will tell you if a field is optional.
              <!-- <b-list-group>
                <b-list-group-item>
                  <h6>Complete the form - you must answer every question, we will tell you if a field is optional</h6>
                </b-list-group-item>
              </b-list-group>-->
          
          </b-col>
        </b-row>
      </section>
  <section class="pb-4">
        <b-row>
          <b-col>
            <h5>What will happen next -</h5>
            <h6>
             After we receive your application, we:
            </h6>

           
               <ol>
                <li>Send a copy to your employer.</li>
                <li>Organise a conciliation to help you and your employer discuss the issues.</li>
                
              </ol>
              <!-- <b-list-group>
                <b-list-group-item>
                  <h6>send a copy to your employer</h6>
                </b-list-group-item>
                <b-list-group-item>
                  <h6>organise a conciliation to help you and your employer discuss the issues</h6>
                </b-list-group-item>
                
              </b-list-group> -->
            
          </b-col>
        </b-row>
      </section>
           <section class=" pb-2">
        <b-row>
          <b-col>
            <h5>Privacy</h5>
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
import entity from "../common/entity.vue";
import EntityAddress from "../common/entityAddress.vue";
import Notice from "../common/notice.vue";
export default {
  components: { entity, Notice, EntityAddress },
  name: "f2Intro",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      repTypeOptions: [
        "I am their lawyer or paid agent",
        "Union representative",
        "Family or friend",
      ],
      applyingForSelfOptions: [
        { text: "I am the applicant (submitting for myself)", value: true },
        {
          text: "I am submitting this form on behalf of someone else",
          value: false,
        },
      ],
      over18Options: [
        { text: "yes, I am over 18", value: true },
        { text: "no, I am under 18", value: false },
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
    onSelectedNewAbn() {
      this.form.businessDetailsCorrect = true;
      this.$bvModal.hide("manual-abn");
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
