<template>
  <div>
    <section class=" mb-4 pb-2">
      <b-row>
        <b-col>
          <h6>Attachments</h6>
          <p>
            Please attach a copy of your dismissal letter if you have one. You don’t need to provide additional
            attachments at this stage. You can submit them later. We can also ask you to provide extra information or
            evidence later if we need it.
          </p>
          <p>
            If you are worried about particular information being passed on, don’t include it yet. Lodge your completed
            form within the 21-day time limit and then contact us to talk about whether you should send the information
            to us.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>

          <b-form-group class="text-center">
            <b-button variant="primary" v-b-modal="`file-modal`">Add a file</b-button>
          </b-form-group>
          <notice message="<small>Prototype notes: <br>
            Not all functionality is enabled in the prototype. However, see below description of how it will work:<br>
            <ul>
              <li>
All mandatory files will be listed in the table above and the user can select a file to upload
              </li>
              <li>
When a file is uploaded, the file select input is replaced with the uploaded file name
              </li>
              <li>
clicking on the pencil icon will open the popup to edit the file and its comment (if the file is a mandatory file (e.g. Dismissal letter), you can not change its document type)
              </li>
              <li>
Clicking on the x will remove the file. If it i sa mandatory file, it will reset it and the row will remain in the table, if it is not a mandatory file the row will be deleted. 
              </li>
              <li>
                When a document type expects more than one file (e.g. 'upload your last 4 pay slips'), Clicking on Add another docType will add another file input in the same doc type row.
              </li>
              <li>
                When additional files are allowed, the Add a file button will show. Clicking on it will open a popup (you can try that).
              </li>
            </ul>
            .</small>"></notice>
        </b-col>
      </b-row>
      <b-modal :id="`file-modal`" title="BootstrapVue">
        <template #modal-header="{ close }">
          <h6>Upload file</h6>
          <!-- Emulate built in modal header close button action -->
          <i @click="close()" v-b-tooltip.hover title="Close" class="bi bi-x fs-3 removeIcon"></i>
        </template>


        <b-row>
          <b-col>
            <b-form-group label="Document Type">
              <b-form-select :options="['LOV of allowed doc types']">
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group>
              <b-form-file placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here...">
              </b-form-file>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="Comments">
              <b-form-textarea rows="6"> </b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </b-modal>
    </section>
  </div>
</template>

<script>
import Notice from "../common/notice.vue";
import uploadFiles from "../common/uploadFiles.vue";
export default {
  components: { uploadFiles, Notice },
  name: "F8Attachments",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {

  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
