<template>
  <b-container fluid class="h-100">
    <b-row class="vh-100">
      <b-col md="6" sm="12">
        <div class="section">
          <h2 class="text-primary">
            <img
              src="~/assets/img/fwc_logo.png"
              alt="Fair Work Commission South Australia"
              style="height: 82px"
            /><br />
            Fair Work Commission Online Portal
          </h2>
          <div class="mt-2 divider text-primary" />
          <div class="intro-text">
            <p>
              Welcome to the Fair Work Commission  Online
              Lodgement Service. You can use this service to submit
              applications, track your cases and file case documentation.
            </p>

            <p>
              For any questions or clarifications about the use of this portal
              or about Fair Work Commission in general, please refer to our website at
              <a href=" https://lsc.sa.gov.au">https://lsc.sa.gov.au </a>
              (online chat, phone call and email help available).
            </p>
          </div>
        </div>
      </b-col>
      <b-col class="login-col" md="6" sm="12">
        <div class="section login">
          <div class="max-width-500">
            <Nuxt />
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.divider {
  width: 50px;
  border: 3px solid;
  border-radius: 25px;
  background-color: var(--primary);
}

.login-col {
  background-color: white;
}

.intro-text {
  margin-top: 40px;
}

@media (min-width: 768px) {
  .section {
    padding-top: 40%;
  }
}

@media (min-width: 1200px) {
  .section {
    padding-left: 15%;
    padding-right: 15%;
  }
}

@media (min-width: 1400px) {
  .section {
    padding-top: 30%;
    padding-left: 20%;
    padding-right: 20%;
  }
}

@media (min-width: 992px) {
  .max-width-500 {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
