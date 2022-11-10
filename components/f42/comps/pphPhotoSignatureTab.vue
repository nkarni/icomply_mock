<template>
  <div>
    <b-form>
      <section class="mb-4 pb-2 border-bottom border-secondary">
        <b-row>
          <b-col cols="4">
            <h6>Photograph</h6>
            <p>
              Provide a photograph that follows the FWC requirements
              <a
                target="_blank"
                href="https://www.fwc.gov.au/registered-organisations/entry-permits/about-fair-work-entry-permits/how-we-process-fair-work-entry"
                >click here</a
              >
              for more information.
            </p>
          </b-col>
          <b-col>
            <div>
              <b-form-group label="Attach a photograph">
                <b-form-file
                  v-model="form.permitHolder.photoFile"
                  placeholder="Choose a file or drop it here..."
                  drop-placeholder="Drop file here..."
                >
                </b-form-file>
              </b-form-group>
              <notice
                class="mb-2"
                message="Only .jpg and .jpeg files are accepted, file size limit is 5MB"
              ></notice>
            </div>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4 pb-2 border-bottom border-secondary">
        <b-row>
          <b-col cols="4">
            <h6>Signature</h6>
            <p>Provide an image of your signature.</p>
          </b-col>
          <b-col>
            <div>
              <b-form-group label="Attach a a signature">
                <b-form-file
                  v-model="form.permitHolder.photoFile"
                  placeholder="Choose a file or drop it here..."
                  drop-placeholder="Drop file here..."
                >
                </b-form-file>
              </b-form-group>
              <notice
                class="mb-2"
                message="Only .jpg and .jpeg files are accepted, file size limit is 5MB"
              ></notice>
            </div>
          </b-col>
        </b-row>
      </section>

      <section class="mb-4">
        <b-row>
          <b-col cols="4">
            <h6>Declaration</h6>
            <p>Please read and answer the declaration carefully.</p>
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
                  
                </li>
              </ol>
<b-form-group>
              <b-form-textarea
                v-model="form.permitHolder.showedDocs"
                rows="3"
                max-rows="12"
              ></b-form-textarea>
            </b-form-group>

             
            </div>
          </b-col>
        </b-row>
      </section>
      <section :class="' mb-4  '">
        <f42-signature
          :form="form"
          :signature="form.permitHolder.dec.signature"
          :inclWarning="true"
        ></f42-signature>
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
  name: "pphPhotoSignatureTab",
  props: {
    form: {
      type: Object,
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
  