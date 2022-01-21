<template>
  <div class="notice p-2" v-html="message"></div>
</template>

<script>
export default {
  name: "notice",
  props: {
    message: {
      type: String,
      default: ''
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
.notice{
  border-left: 4px solid var(--success) !important;
  background: var(--grey-100) !important;
  color: var(--grey-500) !important;
}
  
</style>