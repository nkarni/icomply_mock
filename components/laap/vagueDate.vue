<template>
  <div>
    <label v-html="dateLabel"></label>
  <b-form-group
            >
          
              <b-form-datepicker
               v-if="date.unknownDate !== true"
                v-model="date"
                class="mb-2"
              ></b-form-datepicker>
            </b-form-group>
             <b-form-group
            >
              <b-form-checkbox
                    v-model="date.unknownDate"
                    :value="true"
                    :unchecked-value="false"
                  >
                    I don’t know the exact date
                  </b-form-checkbox>
            </b-form-group>
           
            <b-form-group :label="approxDateLabel" v-if="date.unknownDate === true">
              <b-row>
                <b-col cols="2">
                  <b-form-group label="Day">
                    <b-form-input v-model="date.dateDay"></b-form-input>
                  </b-form-group>
                </b-col>
                 <b-col cols="5">
                  <b-form-group label="Month">
                    <b-form-input v-model="date.dateMonth"></b-form-input>
                  </b-form-group>
                </b-col>
                 <b-col cols="5">
                  <b-form-group label="Year">
                    <b-form-input v-model="date.dateYear"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              
            </b-form-group>
            
  </div>
</template>

<script>
export default {
  name: "vagueDate",

  props: {
    date: {
      type: Object,
      default: () => ({
       dateDay: '',
       dateMonth: '',
       dateYear: '',
       unknownDate: false
      }),
      
    },
     dateLabel: {
        type: String,
        default: "Select the date",
      },
      approxDateLabel: {
        type: String,
        default: "Enter the approximate date",
      },
   
  },
  data() {
    return {
      // random id for the modal
      modalId: Math.random()
        .toString(36)
        .substring(7),
    };
  },
  computed: {
   
  },
  methods: {},
};
</script>

<style lang="scss" scoped >
</style>
