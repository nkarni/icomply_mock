<template>
  <div>
    <b-form>
      <section class="border-bottom border-secondary mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Your dismissal</h6>
            <p>
              Tell us about {{ yourString }} dismissal. What happened and why
              {{ DoYouStringCont }} think it was unfair?
            </p>
            <p>
              We will send a copy of this to {{ yourString }} former employer.
              This is so they can understand {{ youString }} side of the case.
            </p>
            <p>
              If {{ youAreString }} worried about particular information being
              passed on, don’t include it yet. Lodge the completed form within
              the 21-day time limit and then contact us to talk about whether
              you should send the information to us.
            </p>
          </b-col>
          <b-col>
            <b-form-group
              :label="this.form.userRole === 'dismissedPerson' ? 'Why do you think you were dismissed? Tick all that apply' : 'Why do you think dismissed person was dismissed? Tick all that apply'"
            >
              <b-form-checkbox-group
                v-model="form.perceivedDismissalReasons"
                stacked
              >
                <b-form-checkbox value="Race">Race</b-form-checkbox>
                <b-form-checkbox value="Colour">Colour</b-form-checkbox>
                <b-form-checkbox value="Sex">Sex</b-form-checkbox>
                <b-form-checkbox value="Sexual orientation"
                  >Sexual orientation</b-form-checkbox
                >
                <b-form-checkbox value="Age">Age</b-form-checkbox>
                <b-form-checkbox value="Physical or mental disability"
                  >Physical or mental disability</b-form-checkbox
                >
                <b-form-checkbox value="Marital status"
                  >Marital status</b-form-checkbox
                >
                <b-form-checkbox value="Family or carer’s responsibilities"
                  >Family or carer’s responsibilities</b-form-checkbox
                >
                <b-form-checkbox value="Pregnancy">Pregnancy</b-form-checkbox>
                <b-form-checkbox value="Religion">Religion</b-form-checkbox>
                <b-form-checkbox value="Political opinion"
                  >Political opinion</b-form-checkbox
                >
                <b-form-checkbox
                  value="Nationality, national extraction or social origin (s351)"
                  >Nationality, national extraction or social origin
                  (s351)</b-form-checkbox
                >

                <b-form-checkbox
                  v-if="this.form.userRole === 'dismissedPerson'"
                  value="I was dismissed because I had a temporary absence from work due to an illness or injury (s352)"
                  >I was dismissed because I had a temporary absence from work
                  due to an illness or injury (s352)</b-form-checkbox
                >
                <b-form-checkbox
                v-else
                  value="Because the dismissed person had a temporary absence from work due to an illness or injury (s352)"
                  >The dismissed person was dismissed because they had a temporary absence from work
                  due to an illness or injury (s352)</b-form-checkbox
                >


                <b-form-checkbox
                v-if="this.form.userRole === 'dismissedPerson'"
                  value="I was dismissed because I had an absence from work during maternity leave or other parental leave (s340, s351)"
                  >I was dismissed because I had an absence from work during
                  maternity leave or other parental leave (ss 340,
                  351)</b-form-checkbox
                >
                 <b-form-checkbox
                  v-else
                  value="Because the dismissed person had an absence from work during maternity leave or other parental leave (s340, s351)"
                  >The dismissed person was dismissed because they had an absence from work during
                  maternity leave or other parental leave (ss 340,
                  351)</b-form-checkbox
                >


                <b-form-checkbox
                  v-if="this.form.userRole === 'dismissedPerson'"
                  value="I was dismissed because of my workplace rights (s340)"
                  >I was dismissed because of my workplace rights (s340)
                  <small class="form-text text-muted">
                    I was dismissed because I had a workplace right, or because
                    I exercised or proposed to exercise a workplace right.
                    <br />For example, because I asked about being paid for
                    overtime or complained about not getting breaks.
                  </small>
                </b-form-checkbox>
                <b-form-checkbox
                v-else
                  value="Because of the dismissed person's workplace rights (s340)"
                  >The dismissed person was dismissed because of my workplace rights (s340)
                  <small class="form-text text-muted">
                    The dismissed person was dismissed because they had a workplace right, or because
                    they exercised or proposed to exercise a workplace right.
                    <br />For example, because they asked about being paid for
                    overtime or complained about not getting breaks.
                  </small>
                </b-form-checkbox>


                <b-form-checkbox
                v-if="this.form.userRole === 'dismissedPerson'"
                  value="I was dismissed because of industrial activities (s346)"
                  >I was dismissed because of industrial activities (s346)
                  <small class="form-text text-muted"
                    >I was dismissed because I engaged in or proposed to engage
                    in industrial activity (such as belonging to a union), or
                    because I refused to participate in any industrial
                    action.</small
                  ></b-form-checkbox
                >
                <b-form-checkbox
                v-else
                  value="Because of industrial activities (s346)"
                  >The dismissed person was dismissed because of industrial activities (s346)
                  <small class="form-text text-muted"
                    >The dismissed person was dismissed because they engaged in or proposed to engage
                    in industrial activity (such as belonging to a union), or
                    because they refused to participate in any industrial
                    action.</small
                  ></b-form-checkbox
                >

                <b-form-checkbox
                v-if="this.form.userRole === 'dismissedPerson'"
                  value="My employer dismissed me so they could engage me as an independent contractor to do the same job or substantially the same job (s358)"
                  >My employer dismissed me so they could engage me as an
                  independent contractor to do the same job or substantially the
                  same job (s358)</b-form-checkbox
                >
                <b-form-checkbox
                v-else
                  value="The employer dismissed the dismissed person so they could engage them as an independent contractor to do the same job or substantially the same job (s358)"
                  >The employer dismissed the dismissed person so they could engage them as an
                  independent contractor to do the same job or substantially the
                  same job (s358)</b-form-checkbox
                >
              </b-form-checkbox-group>
            </b-form-group>

            <b-form-group
              :label="
                'What happened and why ' +
                DoYouStringCont +
                ' think it is discriminatory or unlawful?'
              "
            >
              <b-form-textarea
                v-model="form.employeeDescOfWhatHappened"
                rows="9"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4 pb-2">
        <b-row>
          <b-col cols="4">
            <h6>Desired outcome</h6>
            <p>
             The Commission can only assist the parties to resolve this application through conciliation. </p>
             <p>Use this field to explain what you are seeking by lodging this application. What you write here will be discussed in conciliation with your former employer to see if you can come to an agreement to resolve your application.</p>
             
          
          </b-col>
          <b-col>
            <b-form-group
              :label="'What outcome ' + DoYouStringCont + ' want from this case?'"
            >
              <b-form-textarea
                v-model="form.employeeDesiredOutcomes"
                rows="9"
              ></b-form-textarea>
            </b-form-group>
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
import vagueDate from "../common/vagueDate.vue";
export default {
  components: { entity, Notice, EntityAddress, vagueDate },
  name: "f8Dismissal",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      disOptions: [
        { text: "Race", value: "Race" },
        { text: "Family or friend", value: "abc" },
      ],
      applyingForSelfOptions: [
        { text: "I am the applicant (submitting for myself)", value: true },
        {
          text: "I am submitting this form on behalf of someone else",
          value: false,
        },
      ],
      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
    };
  },
  computed: {
    youString: function () {
      return this.form.userRole === "dismissedPerson"
        ? "you"
        : "the dismissed person";
    },
    yourString: function () {
      return this.form.userRole === "dismissedPerson"
        ? "your"
        : "the dismissed person's";
    },

     DoYouStringCont: function () {
      return this.form.userRole === "dismissedPerson"
        ? "do you"
        : "does the dismissed person";
    },
    yoursString: function () {
      return this.form.userRole === "dismissedPerson"
        ? "yours"
        : "the dismissed person's";
    },
    IWasString: function(){
       return this.form.userRole === "dismissedPerson"
        ? "I was"
        : "the dismissed person was dismissed";
    },
     youAreString: function(){
       return this.form.userRole === "dismissedPerson"
        ? "You are"
        : "the dismissed person is";
    }

    // youString: function () {
    //   return this.form.applyingForSelf ? "you" : "the Applicant";
    // },
    // yourString: function () {
    //   return this.form.applyingForSelf ? "your" : "the Applicant's";
    // },
    // AreYouString: function () {
    //   return this.form.applyingForSelf ? "are you" : "is the Applicant";
    // },
    // DoYouString: function () {
    //   return this.form.applyingForSelf ? "do you" : "is the Applicant";
    // },
    // DoYouStringCont: function () {
    //   return this.form.applyingForSelf ? "do you" : "does the Applicant";
    // },
    // youAreString: function () {
    //   return this.form.applyingForSelf ? "you are" : "the Applicant is";
    // },
    // wereYouString: function () {
    //   return this.form.applyingForSelf ? "were you" : "was the Applicant";
    // },
    // AreYouString: function () {
    //   return this.form.applyingForSelf ? "are you" : "the Applicant is";
    // },
    // AreYouStringReverse: function () {
    //   return this.form.applyingForSelf ? "are you" : "is the Applicant";
    // },
    // additionalS: function () {
    //   return this.form.applyingForSelf ? "" : "s";
    // },
    // yoursString: function () {
    //   return this.form.applyingForSelf ? "yours" : "the Applicant/'s";
    // },
    // haveYouString: function () {
    //   return this.form.applyingForSelf ? "have you" : "has the Applicant";
    // },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
