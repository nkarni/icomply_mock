<template>
  <b-container>


    <b-row>
      <b-col>
        <h3 class="text-primary">Apply online</h3>
        <p>
          Submit your application and supporting documents online.
        </p>
        <p>Select the application most relevant for you. If you need more information about an application you can click on the 'more info' link.</p>
        <p>You can filter the list of available applications by searching for a keyword or by topic and type</p>
      </b-col>
    </b-row>

    <!-- <b-row>
      <b-col>
        <h5 class="text-primary">1) Filter the list - what is your application about? (optional)</h5>
      </b-col>
    </b-row> -->

    <b-row class="mt-4">
      
      <b-col>
        <b-form-group label="Search by keyword">
          <b-form-input></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="2">
        <b-form-group style="margin-top:6px">
          <p class="text-center mt-4">OR</p>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Select what your application is about">
          <b-form-select :options="['Select one','item1', 'item2']"></b-form-select>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Select the type of application">
          <b-form-select :options="['Select one','itemA', 'itemB']"></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

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
                <th width="200px" scope="col" >Act or list</th>
                <th scope="col">Application</th>
                <th width="100px" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td>
<p>Terminations</p>
                </td>
                <td>
                  Form F2 - Application for unfair dismissal remedy<a class="small ml-3" href="" @click.prevent="f2MoreInfo = !f2MoreInfo" >{{f2MoreInfoText}}</a>
                  <div v-if="f2MoreInfo" class="mt-2">
                    <p>Use this form to lodge an unfair dismissal application with the Fair Work Commission. This form and any supporting information should be lodged within 21 days of your dismissal taking effect.</p>
                  </div>
                </td>
                
                
                <td class="text-center">
                  <b-button variant="outline-dark" class="btn-sm px-4" v-b-tooltip.hover title="Start F2 Application" >Select</b-button>
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
    f2MoreInfo: false
    };
  },
  mounted: function () { },
  methods: {},
  computed: {
    f2MoreInfoText: function(){
      return this.f2MoreInfo ? 'Less info' : 'More info'
    }
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
</style>