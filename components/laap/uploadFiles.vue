<template>
  <div>
      <div
        v-for="(file, index) in files"
        :key="index"
        v-bind:id="index"
        class="mb-2 courts pl-3 mb-4"
      >
       <b-form-file
        v-model="file.uploadedFile"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
    ></b-form-file>
      </div>
    </div>
</template>

<script>
export default {
  name: "notice",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    numOfFiles: {type: Number, default: 1},
    file: {
      type: Object,
      default: () => ({}),
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