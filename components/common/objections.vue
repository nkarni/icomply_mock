<template>
  <div>
    <div v-if="objectionIndex > -1">
      <b-form-group
        :label="
          'Do you want to object to the claim because ' +
          form.objections[objectionIndex].text.toLowerCase() +
          '?'
        "
      >
        <b-form-radio-group
          :options="boolOptions"
          v-model="form.objections[objectionIndex].selected"
        >
        </b-form-radio-group>
      </b-form-group>
      <b-form-group
        v-if="form.objections[objectionIndex].selected === true"
        label="Please provide details"
      >
        <b-form-textarea
          v-model="form.objections[objectionIndex].details"
        ></b-form-textarea>
      </b-form-group>
    </div>
    <div v-else>
      <div
        v-for="(objection, index) of form.objections"
        :key="index"
        v-bind:id="index"
        class="mb-2"
      >
        <div >
          <b-form-group>
            <b-form-checkbox
              v-model="form.objections[index].selected"
              :value="true"
              :unchecked-value="false"
            >
              {{ objection.text }}
            </b-form-checkbox>
          </b-form-group>
          <b-form-group
            v-if="form.objections[index].selected === true"
            label="Please provide details"
          >
            <b-form-textarea
              v-model="form.objections[index].details"
            ></b-form-textarea>
          </b-form-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "objections",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    objectionIndex: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return { boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],};
  },
  computed: {},
  methods: {},
};
</script>

<style  scoped >
</style>