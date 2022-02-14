<template>
  <div>
     <b-tabs
        v-model="tabIndex"
        vertical
        nav-wrapper-class="w-30"
        class="w-100"
        active-nav-item-class="text-primary laap-nav-item-active"
        nav-class="laap-nav"
        content-class="card p-3"
      >
        <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-3',
            { 'laap-nav-item-complete': true },
          ]"
        >
          <template #title>
            <h5>About you</h5>
            <span>Some details we need know</span>
          </template>
          <f-2-about-you :form="form"></f-2-about-you>
        
        </b-tab>

        <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-3',
            { 'laap-nav-item-complete': false },
          ]"
        >
          <template #title>
            <h5>Contact details</h5>
            <span>Your contact details</span>
          </template>
         <f-2-contact-details :form="form"></f-2-contact-details>
        </b-tab>

        <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-3',
            { 'laap-nav-item-complete': false },
          ]"
        >
          <template #title>
            <h5>Former employer</h5>
            <span>Details about the employer</span>
          </template>
         <f-2-employer-details :form="form"></f-2-employer-details>
        </b-tab>

   <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-3',
            { 'laap-nav-item-complete': false },
          ]"
        >
          <template #title>
            <h5>The dismissal</h5>
            <span>Details about your employment and the dismissal</span>
          </template>
         <f-2-dismissal :form="form"></f-2-dismissal>
        </b-tab>
        <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-3',
            { 'laap-nav-item-complete': false },
          ]"
        >
          <template #title>
            <h5>Attachments</h5>
            <span>Upload documents</span>
          </template>

          <f-2-attachments :form="form"></f-2-attachments>
         
        </b-tab>

        <b-tab
          :title-link-class="[
            'laap-title-link',
            'mb-2',
            'p-4',
            { 'laap-nav-item-complete': false },
          ]"
        >
          <template #title>
            <h5>Review and submit</h5>
            <span>Review your information and lodge the form</span>
          </template>
        
        </b-tab>
        
      </b-tabs>
  </div>
</template>

<script>
export default {
  name: "f2SideMenu",

  props: {
    
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
     
    };
  },
  computed: {
   
  },
  methods: {},
};
</script>

<style lang="scss" scoped >
</style>
