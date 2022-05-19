<template>
  <div :class="borderClass + ' notice p-2'" v-html="message"></div>
</template>

<script>
export default {
  name: "notice",
  props: {
    message: {
      type: String,
      default: ''
    },
    borderClass: {
      type: String,
      default: 'yellow'
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style  scoped >
.notice {

  background: var(--grey-100) !important;
  color: var(--grey-500) !important;
}

.green {
  border-left: 4px solid var(--success) !important;
}

.blue {
  border-left: 4px solid var(--primary) !important;
}

.yellow {
  border-left: 4px solid var(--yellow) !important;
}
</style>