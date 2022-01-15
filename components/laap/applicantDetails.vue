<template>
  <div>
    <b-form>
      <b-row>
        <b-col cols="4">
          <h5>Are you the Applicant?</h5>
          The Applicant is the person this form is about, If you are not the
          Applicant please provide some details about yourself.NOTE: if you are
          not the Applicant but want to be contacted about this application
          please upload authority documentation in the uploads section, or use
          our Authority to Disclose form
        </b-col>
        <b-col>
          <label
            >Are you making this application for yourself, or someone
            else?</label
          >
          <b-form-group
            label="Are you making this application for yourself, or someone else?"
          >
            <b-form-radio-group
              id="repType"
              v-model="form.repType"
              :options="repTypeOptions"
              name="repType"
            ></b-form-radio-group>
          </b-form-group>

          <b-form-group
            label="Are you a LSC panel lawyer?"
            v-if="form.repType === 'solicitor'"
          >
            <b-form-radio-group
              id="isLscPanelMember"
              v-model="form.isLscPanelMember"
              :options="boolOptions"
              name="isLscPanelMember"
            ></b-form-radio-group>
          </b-form-group>

          <b-form-group
            label="Have you previously represented this client (the applicant)?"
            v-if="form.repType === 'solicitor' && form.isLscPanelMember"
          >
            <b-form-radio-group
              id="prevRepresented"
              v-model="form.prevRepresented"
              :options="boolOptions"
              name="prevRepresented"
            ></b-form-radio-group>
          </b-form-group>
         

          <entity 
          :entity="form.entities.repSolicitor"
          orgNameLabel="Your firm or organisation name"
          idPrefix="repSolicitor"
          >
          </entity>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import entity from "./entity.vue";
export default {
  components: { entity },
  name: "applicantDetails",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      repTypeOptions: [
        { text: "I am the Applicant (submitting for myself)", value: "self" },
        { text: "I am the Applican’ts solicitor", value: "solicitor" },
        {
          text: "I am submitting this form on behalf of the Applicant",
          value: "other",
        },
      ],
      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped >
</style>