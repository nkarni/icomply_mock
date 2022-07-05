<template>
  <div>
    <b-row v-if="name === 'didAboveTraining'">
      <b-col class="numberCol"> a. </b-col>
      <b-col class="pl-1">
        <b-form-group
          :label="'Have you received the appropriate training, shown above, about the rights and responsibilities of an entry permit holder?'"
        >
          <b-form-radio-group
            :disabled="readOnly"
            v-model="dec.didAboveTraining"
            :options="boolOptions"
          ></b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>






    
  </div>
</template>

<script>
export default {
  name: "decItem",
  props: {
    index: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      letters: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style  scoped >
</style>