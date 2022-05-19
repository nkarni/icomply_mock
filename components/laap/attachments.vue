<template>
  <div>
    <section class="border-bottom border-secondary mb-4 pb-2">
      <b-row>
        <b-col>
          <h6>Attachments</h6>
          <p>
            Please upload all required documents. If you wish to add comments to
            a file, click on the pencil icon.
          </p>
          <notice
            :message="'Prototype notes: <br>Not all functionality is enabled in the prototype.<br>Clicking on the comment icon will open a popup with a text area. When submitted a comment - it will be displayed below the file upload field (see example below).<br>Clicking on Add another ' + docType + ' will add another file input in the same doc type row.'">
          </notice>

          <small></small>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Document Type</th>
                  <th scope="col">File</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(file, index) of files" :key="index" v-bind:id="index">
                  <td>{{ file.type }}</td>
                  <td>
                    <b-row>
                      <b-col class="col-9">
                        <b-form-group description="Click on the pencil icon to add comments about this file (optional)">
                          <b-form-file placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."></b-form-file>
                        </b-form-group>
                      </b-col>
                      <b-col class="text-right" col1>
                        <b-button variant="link" class="p-0" @click.prevent="" v-b-tooltip.hover
                          title="Add/Edit a Comment">
                          <b-icon icon="pencil" />
                        </b-button>
                      </b-col>
                      <b-col class="text-right" col1>
                        <b-button variant="link" class="p-0" @click.prevent="" v-b-tooltip.hover title="Remove">
                          <b-icon icon="x-circle" />
                        </b-button>
                      </b-col>
                    </b-row>

                    <b-row v-if="file.comments">
                      <b-col>
                        <notice :message="'Your comments: ' + file.comments" :borderClass="'blue'"></notice>

                      </b-col>

                    </b-row>
                    <b-row>
                      <b-col class="text-right">
                        <b-button variant="link" class="p-0 mt-3" v-if="file.multi" @click.prevent="">Click here to add
                          another {{ file.type }}</b-button>
                      </b-col>
                    </b-row>
                  </td>
                </tr>
              </tbody>
            </table>
          </b-form-group>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import Notice from "./notice.vue";
import uploadFiles from "../common/uploadFiles.vue";
export default {
  components: { uploadFiles, Notice },
  name: "attachments",
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
    files: function () {
      let docs = [
        {
          type: 'Mockup sample with comments',
          comments: 'This will not be part of the form, only added so it shows how comments will appear.',

        }
      ];
      if (
        this.form.authToDisclose === true
      ) {
        docs.push({
          type: 'Authority to disclose form'
        });
      }
      if (
        this.form.entities.applicant.incomeAssets.employmentType ===
        "Employed" ||
        this.form.entities.applicant.incomeAssets.employmentType ===
        "Self employed"
      ) {
        docs.push({ type: this.yourString + " Pay Slips (last 4)" });
      }

      if (
        this.form.entities.fap.incomeAssets.employmentType ===
        "Employed" ||
        this.form.entities.fap.incomeAssets.employmentType ===
        "Self employed"
      ) {
        docs.push({
          type:
            this.form.entities.fap.firstName +
            " " +
            this.form.entities.fap.lastName +
            " Pay Slip",
          multi: true
        });
      }

      if (
        this.form.entities.applicant.benefits.receivesBenefit === true && this.form.entities.applicant.benefits.maxPayment === true
      ) {
        docs.push({
          type: this.yourString + ' Bank Statement',
          multi: true
        });
      }

      if (
        this.form.entities.applicant.benefits.receivesBenefit === true && this.form.entities.applicant.benefits.maxPayment === true
      ) {
        docs.push({
          type:
            this.form.entities.fap.firstName +
            " " +
            this.form.entities.fap.lastName +
            "'s Bank Statement",
          multi: true
        });
      }

      if (
        this.form.entities.applicant.benefits.maxPayment === false
      ) {
        docs.push({
          type: this.yourString + ' Centrelink Statement'
        });
      }

      if (
        this.form.entities.fap.receivesMaxBenefits === false
      ) {
        docs.push({
          type:
            this.form.entities.fap.firstName +
            " " +
            this.form.entities.fap.lastName +
            "'s Centrelink Statement",
        });
      }

      if (
        this.form.entities.applicant.incomeAssets.employmentType ===
        "Self employed"
      ) {
        docs.push({
          type: this.yourString + ' Profit & Loss Statement'
        });
      }

      if (
        this.form.entities.fap.incomeAssets.employmentType ===
        "Self employed"
      ) {
        docs.push({
          type: this.form.entities.fap.firstName +
            " " +
            this.form.entities.fap.lastName + '/s Profit & Loss Statement'
        });
      }

      if (
        this.form.entities.applicant.incomeAssets.employmentType ===
        "Self employed"
        ||
        this.form.entities.applicant.incomeAssets.isPrimaryProducer === true
      ) {
        docs.push({
          type: this.yourString + ' Tax Return'
        });
      }

      if (
        this.form.entities.fap.incomeAssets.employmentType ===
        "Self employed"
        ||
        this.form.entities.fap.incomeAssets.isPrimaryProducer === true
      ) {
        docs.push({
          type: this.form.entities.fap.firstName +
            " " +
            this.form.entities.fap.lastName + '/s Tax Return'
        });
      }

      if (
        this.form.entities.applicant.incomeAssets.hasLegalFeesBeenPaid === true
      ) {
        docs.push({
          type: 'Paid legal fees Receipts',
          multi: true
        });
      }

      if (

        this.form.problem.dcp.hasDcpDocuments === true
      ) {
        docs.push({
          type: 'Court Order',
          multi: true
        });
        docs.push({
          type: 'DCP Documents',
          multi: true
        });
      }

      if (
        this.form.problem.problemType.includes('Family Law problem')
      ) {
        docs.push({
          type: 'Family Documents',
          multi: true
        });
      }

      if (
        this.form.problem.familyLaw.beenToCounseling === true
      ) {
        docs.push({
          type: 'Family Dispute Resolution Certificate'
        });
        docs.push({
          type: 'Heads of Agreement'
        });
      }

      if (
        this.form.problem.problemType.includes('Criminal Law problem')
      ) {
        docs.push({
          type: 'Criminal Documents',
          multi: true
        });
      }

      if (
        this.form.problem.problemType.includes('Civil/General Law problem')
      ) {
        docs.push({
          type: 'Civil/General Documents',
          multi: true
        });
      }

      if (
        this.form.prevRepresented === true && this.form.coverLetterDetails === ''
      ) {
        docs.push({
          type: 'Covering Letter'
        });
      }


      return docs;
    },
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
    AreYouStringReverse: function () {
      return this.form.repType === "self" ? "are you" : "is the Applicant";
    },
    additionalS: function () {
      return this.form.repType === "self" ? "" : "s";
    },
    yoursString: function () {
      return this.form.repType === "self" ? "yours" : "the Applicant/'s";
    },
    haveYouString: function () {
      return this.form.repType === "self" ? "have you" : "has the Applicant";
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
