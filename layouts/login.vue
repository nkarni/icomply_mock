<template>
  <b-container
    fluid
    class="h-100"
  >
    <b-row class="vh-100">
      <b-col
        md="6"
        sm="12"
      >
        <div class="section">
          <h2 class="text-primary">
            McGirr Online Lodgement Service
          </h2>
          <div class="mt-2 divider text-primary" />
          <div class="intro-text">
            Welcome to the Fair Work Commission's Online Lodgment Service.
            You can use this service to lodge your initial application form
            and any supporting material you have available at the time of
            submitting your application.

            As part of our commitment to continuous improvement, the Commission
            wants to hear about your experience. We invite you to provide your
            feedback to enquiries@fwc.gov.au.

            Copyright © mcGirr technologies
          </div>
        </div>
      </b-col>
      <b-col
        class="login-col"
        md="6"
        sm="12"
      >
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
