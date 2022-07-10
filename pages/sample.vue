<template>
  <div>
    <b-row v-if="numOfFields > maxFieldsForOneColumn"> 
        <b-col class="controlledWidth"  v-for="(field, index) of fields" :key="index" v-bind:id="index">
            <b-form-group :label="field.label">
            
              <b-form-input :style="'width: ' + field.inputWidth + 'px'"></b-form-input>
            </b-form-group>
         
        </b-col>
    </b-row>
    
  </div>
</template>
    <script>
export default {
  layout: "form",
  data() {
    return {
      fields: [],
      numOfFields: 13,
      maxFieldsForOneColumn: 6
    };
  },
  mounted() {
    var i
    for (i = 0; i <= this.numOfFields; i++) {
      this.fields.push({ label: "Field " + (i + 1), inputWidth: Math.floor(Math.random() * 250)});
    }
  },
   computed: {
    colsSize: function () {
      return this.numOfFields > this.maxFieldsForOneColumn ? "6" : "12";
    }
   }
};
</script>
<style scoped>
.controlledWidth {
  width: 300px
}
</style>