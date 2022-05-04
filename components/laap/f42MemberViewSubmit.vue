<template>
  <div>
    <b-form>
  

      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col>
            <h5>Declaration</h5>

            <b-form-group :label="'Are you aware of any other matters that may be relevant to whether the permit holder is a fit and proper person to hold a permit?'"
    >
    <notice class="mb-2" :message="'The Commission can take into account any other matter that it considers relevant to whether the proposed permit holder is a fit and proper person to hold a permit. This may include adverse comments made about the proposed permit holder in a Commission or court decision, regardless of whether the proposed permit holder was a party to the proceeding.'" /></notice>
      <b-form-radio-group
        v-model="form.permitHolder.awareOfMatters"
        :options="boolOptions"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      label="Please provide details"
      v-if="form.permitHolder.awareOfMatters === true"
    >
      <b-form-textarea
        v-model="form.permitHolder.awareOfMattersDetails"
      ></b-form-textarea>
    </b-form-group>

     <b-form-group
            label="Describe the inquiries you made and what you did to satisfy yourself that the Proposed Permit Holder meets the permit qualification matters listed in 2.513(1)(b) to (f) of the Fair Work Act 2009:"
          >
            <b-form-textarea
             
              v-model="form.committeeMember.inquiries"
              rows="6"
              max-rows="12"
             
            ></b-form-textarea>
     </b-form-group>
    
          </b-col>
        </b-row>
        <b-row>
          <b-col>
           <p>A signature mechanism (TBD)</p>
          </b-col>
        </b-row>
        <!-- <notice :message="'mockup notice: HC means hard coded, it will be dynamic and show provided info in the final build. Similarly, the link to the relevant tab for editing will be activated in the final build.'"></notice> -->
      </section>
      
      <section
        class=" mb-4 pb-2"
      >
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
import entity from "./entity.vue";
import EntityAddress from "./entityAddress.vue";
import Notice from "./notice.vue";
export default {
  components: { entity, Notice, EntityAddress },
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
        return "Has the Proposed Permit Holder";
      }
    },
    youStr: function () {
      if (this.form.userRole === "permitHolder") {
        return "you";
      } else {
        return "The Proposed Permit Holder";
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
