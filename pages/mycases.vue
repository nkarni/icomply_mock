<template>
  <b-container>


    <b-row>
      <b-col>
        <h3 class="text-primary">My Cases</h3>
        <p>
          View information about your cases including current status and submit
          documents
        </p>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col>
        <b-form-group class="mt-2">
          <b-form-radio-group class="mt-4" :options="['Active cases', 'All cases']"></b-form-radio-group>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Search">
          <b-form-input></b-form-input>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Status">
          <b-form-select :options="['All']"></b-form-select>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Year">
          <b-form-select :options="['All']"></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="text-right">
        <b-button variant="link">Download as CSV</b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-form-group>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Case</th>
                <th scope="col">Case no.</th>
                <th scope="col">Registered</th>
                <th scope="col">Status</th>
                <th scope="col">Case type</th>
                <th scope="col">Funding status</th>
                <th class="text-center" scope="col">Upload</th>
                <th class="text-center" scope="col">Open</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) of cases" :key="index" v-bind:id="index">
                <td>
                  {{ item.caseName }}
                </td>
                <td>
                  {{ item.caseNo }}
                </td>
                <td>
                  {{ item.reg }}
                </td>

                <td>
                  {{ item.status }}
                </td>
                <td>
                  {{ item.type }}
                </td>
                <td>
                  {{ item.fundingStatus }}
                </td>
                <td class="text-center">
                  <b-button variant="link" class="p-0" @click.prevent="" v-b-tooltip.hover title="Upload documents">
                    <b-icon icon="cloud-arrow-up" />
                  </b-button>
                </td>
                <td class="text-center">
                  <b-button variant="outline-dark" class="btn-sm" @click.prevent="$router.push('/case')">Open</b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-form-group>
      </b-col>
    </b-row>


  </b-container>
</template>

<script>
export default {
  layout: "user",
  data() {
    return {
      user: "solicitor",
      cases: [
        {
          caseName: "Ruth Richards",
          caseNo: "2022/AM00013",
          reg: "23-03-2022",
          status: "Processing",
          type: "Family",
          fundingStatus: "Approved",
        },
      ],
      history: [
        {
          date: '29-03-2022',
          event: 'Practice Management Conference File Created',
          desc: 'Test'
        }
      ],
      docs: [
        {
          date: '29-03-2022',
          event: 'Should this column really be  an "event"?',
          desc: 'Test'
        }
      ]
    };
  },
  mounted: function () { },
  methods: {},
  computed: {},
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
</style>