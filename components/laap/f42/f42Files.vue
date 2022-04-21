<template>
  <div>

      <div
        v-for="(file, index) of files"
        :key="index"
        v-bind:id="index"
      >
        <b-row :class="trainingRowClass">
          <b-col cols="4">
             <!-- <label style="font-weight:bold">File {{ index+1 }}</label> -->
            <b-form-group label="Document type:">
              <b-form-select
                v-model="files[index].docType"
                :options="['Type 1', 'Type 2']"
              ></b-form-select>
            </b-form-group>
          </b-col>
           <b-col>
            <b-form-group
                          label="File:"
                        >
                          <b-form-file
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                          ></b-form-file>
                        </b-form-group>
          </b-col>
          <b-col cols="1" class="align-middle">
            <b-form-group label=" ">
   <b-button
                            variant="link"
                            class="p-0 mt-4"
                            @click.prevent="removeFile(index)"
                            v-b-tooltip.hover
                            title="Remove"
                            v-if="index > 0"
                            ><b-icon icon="x-circle"
                          /></b-button>
            </b-form-group>
         
          </b-col>
        </b-row>
      </div>
      <div class="text-right">
        <b-button variant="link" class="p-0 mb-4" @click.prevent="addFile"
          >Click here to add another document</b-button
        >
      </div>
    </div>

</template>

<script>

export default {
  
  name: "f42Files",
  props: {
    files: {
      type: Array,
      default: () => ({}),
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
    trainingRowClass(){
      if(this.files.length > 1){
        return 'training mb-3'
      }else{
        return ''
      }
    },
    
  },
  methods: {
    addFile() {
      this.files.push({
              docType: "",
              file: "",
            });
    },
    removeFile(i) {
      this.files.splice(i,1);
    },
   
  
  },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
.training {
  border-left: 4px solid var(--primaryLighter) !important;
}
</style>
