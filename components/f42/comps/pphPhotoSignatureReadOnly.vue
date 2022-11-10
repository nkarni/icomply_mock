<template>
  <div>
    <b-form v-if="!twoColumns">
      <section class="mb-4 pb-2">
        <b-row>
          <b-col>
            <h6>Photograph</h6>
            <div>Image will show here</div>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4 pb-2">
        <b-row>
          <b-col>
            <h6>Signature</h6>
            <div>Image will show here</div>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4">
        <b-row>
          <b-col>
            <h6>The proposed permit holder's declaration</h6>
            <div>
              <p>
                I, <br />James Paul Roberts <br />positionName<br />Of orgName,
                branch, full streetAddress
              </p>

              <p>Declare that:</p>
              <ol>
                <li>
                  I have provided a photograph of myself to the member of the
                  Committee of Management named above (the member of the
                  Committee of Management). The photograph meets the Fair Work
                  Commission&rsquo;s requirements for entry permit photographs.
                </li>
                <li>I have provided my signature</li>
                <li>
                  Have shown the member of the Committee of Management the
                  following other document(s) containing my signature:
                  <ul>
                    <li>
                      Document name as a link to view it in a new tab or
                      download it
                    </li>
                  </ul>
                </li>
              </ol>
              <f42-signature
                :form="form"
                :signature="form.permitHolder.dec.signature"
                :readOnly="true"
                :indented="false"
              ></f42-signature>
            </div>
          </b-col>
        </b-row>
      </section>
    </b-form>

    <b-form v-if="twoColumns">
      <section class="mb-4 pb-2 border-bottom border-secondary">
        <b-row>
          <b-col cols="4">
            <h6>Photograph</h6>
          </b-col>
          <b-col>
            <div>Image will show here</div>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4 pb-2 border-bottom border-secondary">
        <b-row>
          <b-col cols="4">
            <h6>Signature</h6>
          </b-col>
          <b-col>
            <div>Image will show here</div>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4 pb-2 border-bottom border-secondary">
        <b-row>
          <b-col cols="4">
            <h6>The proposed permit holder's declaration</h6>
          </b-col>
          <b-col>
            <div>
              <p>
                I, <br />James Paul Roberts <br />positionName<br />Of orgName,
                branch, full streetAddress
              </p>

              <p>Declare that:</p>
              <ol>
                <li>
                  I have attached a photograph of myself that meets the Fair
                  Work Commission’s requirements for entry permit photographs.
                </li>
                <li>I have attached an image of my signature</li>
                <li>
                  I Have shown the member of the Committee of Management, [MCM
                  Name and Position to embed here], the following other
                  document(s) containing my signature:
                  ABCD <br>
                XYZ
                  
                </li>
              </ol>
              <f42-signature
                :form="form"
                :signature="form.permitHolder.dec.signature"
                :readOnly="true"
                :indented="false"
              ></f42-signature>
            </div>
          </b-col>
        </b-row>
      </section>
    </b-form>
  </div>
</template>
    
    <script>
import entity from "../../common/entity.vue";
import EntityAddress from "../../common/entityAddress.vue";
import Notice from "../../common/notice.vue";

export default {
  components: {
    entity,
    Notice,
    EntityAddress,
  },
  name: "pphPhotoSignatureReadOnly",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    twoColumns: {
      type: Boolean,
      default: false,
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
    youString: function () {
      return this.form.repType === "self" ? "you" : "the Applicant";
    },
    yourString: function () {
      return this.form.repType === "self" ? "your" : "the Applicant's";
    },
    AreYouString: function () {
      return this.form.repType === "self" ? "are you" : "is the Applicant";
    },
    DoYouString: function () {
      return this.form.repType === "self" ? "do you" : "is the Applicant";
    },
    DoYouStringCont: function () {
      return this.form.repType === "self" ? "do you" : "does the Applicant";
    },
    youAreString: function () {
      return this.form.repType === "self" ? "you are" : "the Applicant is";
    },
    wereYouString: function () {
      return this.form.repType === "self" ? "were you" : "was the Applicant";
    },
    AreYouString: function () {
      return this.form.repType === "self" ? "are you" : "the Applicant is";
    },
  },
  methods: {},
};
</script>
    
    <style lang="scss" scoped>
h6::first-letter {
  text-transform: uppercase;
}
</style>
    