<template>
  <div class="text-center">
    <b-button-group class="d-grid gap-2 d-md-block">
      <b-button  @click="tabIndex--">Previous</b-button>
      &nbsp;
      <b-button @click="tabIndex++" v-if="!last">Next</b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: "nextPrevButtons",
  props: {
    tabIndex: {
      type: Number,
      default: () => 0,
    },
    last: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped >
</style>