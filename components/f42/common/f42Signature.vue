<template>
  <div>
  
  <b-row v-if="!readOnly">
    <b-col cols="4" v-if="indented">
      <h6>&nbsp;</h6>
    </b-col>
    <b-col>
     
      <b-row>
        
        <b-col :cols="indented ? 9 : 6">
          
          <b-form-group label="Signature (type your name)">
            <b-form-input v-model="signature.name" @click="onSignatureFocus"> </b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group>
            Date: {{ this.$moment().format("D/M/YYYY") }}
          </b-form-group>
        </b-col>
      </b-row>
    </b-col>
  </b-row>

  <b-row v-if="readOnly">
    <b-col cols="4" v-if="indented">
      <h6>&nbsp;</h6>
    </b-col>
    <b-col>
      <b-row>
        
        <b-col cols="12">
          Signed by signedName on signatureDate
        </b-col>
      </b-row>
    </b-col>
  </b-row>
    
  <b-modal :id="`warning`" title="BootstrapVue">
        <template #modal-header="{ close }" >
          <h6>Please note</h6>
          <!-- Emulate built in modal header close button action -->
          <i @click="close()" v-b-tooltip.hover title="Close" variant="danger" class="bi bi-x fs-3 removeIcon"></i>
        </template>

        <template #modal-footer="{ hide }">
      
      <b-button size="sm" variant="primary" @mouseenter="hide('forget')">
        I Understand
      </b-button>
    </template>
        <b-row>
          <b-col>
           
         
               <p>Giving false or misleading information is a serious offence. A person who:
                              <ul>
                                  <li>knowingly or recklessly makes a false or misleading statement in an application for
                                      an entry permit; or</li>
                                  <li>knowingly gives false or misleading information in an application for an entry
                                      permit</li>
                              </ul>
                              is guilty of an offence, the punishment for which is imprisonment for up to 12 months if
                                  the statement is made or information is provided knowingly, or up to 6 months if the
                                  statement is made recklessly - see Part 7.4, s.136 and s.137.1 of the Criminal Code.</p>
          </b-col>
        </b-row>

       
      </b-modal>
</div>
</template>

<script>
import Notice from "../../common/notice.vue";

export default {
  name: "f42Signature",
  components: {
    Notice,
  },
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    signature: {
      type: Object,
      default: () => ({}),
    },
    indented: {
      type: Boolean,
      default: true,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    inclWarning: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      openedWarning: false,
      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
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
    onSignatureFocus() {
      if (this.inclWarning && !this.openedWarning) {
        this.$bvModal.show("warning");
        this.openedWarning = true
      }
    },
  },
};
</script>

<style lang="scss" scoped >
</style>