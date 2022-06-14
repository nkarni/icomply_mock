<template>
  <b-container class="mb-5">
    <div id="options">
      <b-row>
        <b-col>
          <b-form-group label="Matter Validation Position">
            <b-form-radio-group
              stacked
              :options="matterValidationPositionOptions"
              v-model="matterValidationPosition"
            >
            </b-form-radio-group>
          </b-form-group>
          <b-form-group label="Filters to include">
            <b-form-checkbox-group
              stacked
              :options="['topic', 'type', 'role']"
              v-model="filters"
            >
            </b-form-checkbox-group>
          </b-form-group>
          <b-form-group label="Include 'select a role'">
            <b-form-radio-group
              stacked
              :options="boolOptions"
              v-model="includeSelectRole"
            >
            </b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
    </div>

    <!-- Heading section -->
    <b-row>
      <b-col>
        <h3 class="text-primary">Apply online</h3>
        <p>
          Submit your application and supporting documents online.
          <br />Select the most relevant application to proceed. If you need
          more information about an application you can click on the 'more info'
          link. <br />You can filter the list of available applications by
          searching for a keyword or by topic and type
        </p>
      </b-col>
    </b-row>

    <!-- matter validation before -->
    <div v-if="matterValidationPosition === 'before'">
      <b-row class="mt-4">
        <b-col cols="4">
          <b-form-group
            label="Is this application related to an existing case?"
          >
            <b-radio-group
              :options="boolOptions"
              v-model="haveCase"
            ></b-radio-group>
          </b-form-group>
        </b-col>
        <b-col cols="4" v-if="haveCase">
          <b-form-group
            label="Enter your case number and validate it:"
            description="For example: 2022/AG000043"
          >
            <b-form-input></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="4" v-if="haveCase">
          <b-form-group class="mt-1">
            <b-button
              class="mt-4"
              v-if="!matterValidated"
              size="md"
              variant="primary"
              @click="matterValidated = !matterValidated"
            >
              Validate
            </b-button>

            <b-icon
              v-if="matterValidated"
              class="h1 mt-4"
              variant="success"
              icon="check"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </div>

    <div
      v-if=" this.haveCase === false ||
        !(this.matterValidationPosition === 'before' && !this.matterValidated)
      "
    >
      <!-- <b-row>
      <b-col>
        <h5 class="text-primary">1) Filter the list - what is your application about? (optional)</h5>
      </b-col>
    </b-row> -->

      <!-- Search section -->
      <b-row class="mt-4">
        <b-col cols="3">
          <b-form-group label="Search by keyword">
            <b-form-input></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="1" v-if="filters.length">
          <b-form-group style="margin-top: 6px">
            <p class="text-center mt-4">OR</p>
          </b-form-group>
        </b-col>
        <b-col v-if="filters.includes('topic')">
          <b-form-group label="Application topic">
            <b-form-select
              :options="['Select one', 'item1', 'item2']"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col v-if="filters.includes('type')">
          <b-form-group label="Application type">
            <b-form-select
              :options="['Select one', 'itemA', 'itemB']"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col v-if="filters.includes('role')" class="text-end">
          <b-form-group label="Role">
            <b-form-select
              style="max-width: 350px"
              :options="['Select one', 'itemA', 'itemB']"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- <b-row class="mt-4">
        <b-col>
          <b-form-group label="Search by keyword">
            <b-form-input></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group style="margin-top: 6px">
            <p class="text-center mt-4">OR</p>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Select what your application is about">
            <b-form-select
              :options="['Select one', 'item1', 'item2']"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col >
          <b-form-group label="Select the type of application">
            <b-form-select
              :options="['Select one', 'itemA', 'itemB']"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row> -->

      <!-- <b-row>
      <b-col>
        <h5 class="text-primary">2) Pick an application - if you need an explanation about the application, click 'more info'</h5>
      </b-col>
    </b-row> -->

      <b-row>
        <b-col>
          <b-form-group>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th width="200px" scope="col">Act or list</th>
                  <th scope="col">Application</th>
                  <th width="100px" scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Terminations</p>
                  </td>
                  <td>
                    Form F2 - Application for unfair dismissal remedy<a
                      class="small ml-3"
                      href=""
                      @click.prevent="f2MoreInfo = !f2MoreInfo"
                      >{{ f2MoreInfoText }}</a
                    >
                    <div v-if="f2MoreInfo" class="mt-2">
                      <p>
                        Use this form to lodge an unfair dismissal application
                        with the Fair Work Commission. This form and any
                        supporting information should be lodged within 21 days
                        of your dismissal taking effect.
                      </p>
                    </div>
                  </td>

                  <td class="text-center">
                    <b-button
                      v-if="
                        matterValidationPosition === 'after' ||
                        includeSelectRole
                      "
                      variant="outline-dark"
                      class="btn-sm px-4"
                      v-b-modal="`case-modal`"
                      v-b-tooltip.hover
                      title="Start F2 Application"
                      >Select</b-button
                    >
                    <b-button
                      v-else
                      variant="outline-dark"
                      class="btn-sm px-4"
                      v-b-tooltip.hover
                      title="Start F2 Application"
                      >Select</b-button
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </b-form-group>
        </b-col>
      </b-row>
    </div>

    <b-modal :id="`case-modal`" title="BootstrapVue">
      <template #modal-header="{ close }">
        <h6>Before you proceed</h6>
        <!-- Emulate built in modal header close button action -->
        <i
          @click="close()"
          v-b-tooltip.hover
          title="Close"
          class="bi bi-x fs-3 removeIcon"
        ></i>
      </template>

      <b-row v-if="includeSelectRole" class="mb-4">
        <b-col>
          <b-form-group
            label="Select the applicant role that describes you:"
            description="If your role is not listed it may be that you are not eligible to make this type of application."
          >
            <b-form-select :options="['role1', 'role2']"></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <div v-if="matterValidationPosition === 'after'">
        <b-row>
          <b-col>
            <b-form-group
              label="Is this application related to an existing case?"
            >
              <b-radio-group
                :options="boolOptions"
                v-model="haveCase"
              ></b-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row v-if="haveCase">
          <b-col>
            <b-form-group
              label="Enter your case number:"
              description="For example: 2022/AG000043"
            >
              <b-form-input></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </div>

      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="outline-primary" @click="cancel()">
          Cancel
        </b-button>
        <b-button
          size="md"
          variant="primaryDark"
          @click="
            selectingForNewClaim = false;
            ok();
          "
        >
          Continue
        </b-button>
      </template>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  layout: "user",
  data() {
    return {
      f2MoreInfo: false,
      haveCase: null,
      matterValidated: false,
      matterValidationPosition: "before",
      includeSelectRole: true,
      filters: ["topic", "type", "role"],
      boolOptions: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
      matterValidationPositionOptions: [
        { text: "Before form selection", value: "before" },
        { text: "After form selection", value: "after" },
      ],
    };
  },
  mounted: function () {},
  methods: {},
  computed: {
    f2MoreInfoText: function () {
      return this.f2MoreInfo ? "Less info" : "More info";
    },
  },
};
</script>
<style scoped>
.form-control {
  max-width: 400px;
}

.boldLabel label {
  font-weight: bold;
  margin-bottom: 12;
}
#options {
  right: 0;
  position: fixed;
  tp: 0;
  padding: 10px;
  background: white;
  max-width: 450px;
}
</style>