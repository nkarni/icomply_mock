<template>
  <div>
    <h2 class="text-primary">
      Sign in
    </h2>
    <span>
      Don't have an account?
      <nuxt-link to="/registration">Create account</nuxt-link>
    </span>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="email-input-group"
        label="Email Address"
        label-for="email-input"
        label-class="font-weight-bold"
      >
        <b-form-input
          id="email-input"
          v-model="form.email"
          type="email"
          aria-describedby="email-input-feedback"
        />
        <b-form-invalid-feedback
          id="email-input-feedback"
        >
          This field is required and must be an email
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="password-input-group"
        label="Password"
        label-for="password-input"
        label-class="font-weight-bold"
        class="mt-4"
      >
        <b-form-input
          id="password-input"
          v-model="form.password"
          type="password"
          aria-describedby="password-input-feedback"
        />
        <b-form-invalid-feedback
          id="password-input-feedback"
        >
          This field is required and must be a password
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button
        class="w-100 font-weight-bold mt-3"
        type="submit"
        variant="primary"
        to="/mcgirr/home"
      >
        Sign in
      </b-button>
    </b-form>
    <div class="text-right mt-2">
      <nuxt-link
        to="/forgot-password"
        class="text-right"
      >
        Forgot password?
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',

  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
};
</script>