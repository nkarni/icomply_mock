<template>
     <b-tab
              :title-link-class="[
                'laap-title-link',
                'mb-2',
                'p-3',
                { 'laap-nav-item-complete': false },
              ]"
            >
              <template #title>
                <h5>{{ label }}</h5>
              </template>
              <f-42-process-admin :form="form"></f-42-process-admin>
            </b-tab>
  </template>
  
  <script>
  export default {
    name: "tabItem",
    props: {
      form: {
        type: Object,
        default: () => ({}),
      },
      label: {
        type: String,
        default: () => (''),
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
      
    },
    methods: {
      
    },
  };
  </script>
  