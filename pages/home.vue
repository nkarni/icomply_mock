<template>
  <div>
    <b-row>
      <b-col
        cols="12"
        class="text-center my-5"
      >
        <div class="font-base-large">
          Hi, <span class="color-accent">
            John Doe
          </span>
        </div>
        <h2 class="heading heading-big text-primary">
          Fair Work Commission Lodgement Service
        </h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        class="mb-4"
      >
        <div
          tabindex="0"
          class="menu-item menu-item--shadow"
          @click="$router.push('/triage')"
        >
          <div class="menu-item--icon">
            <b-icon icon="file-earmark-text" />
          </div>
          <h5 class="menu-item--title">
            Apply
          </h5>
          <p class="menu-item--description">
            Submit your application and supporting documents online
          </p>
        </div>
      </b-col>
      <b-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        class="mb-4"
      >
        <div
          tabindex="0"
          class="menu-item menu-item--shadow"
        >
          <div class="menu-item--icon">
            <b-icon icon="list-task" />
          </div>
          <h5 class="menu-item--title">
            Pending Forms
          </h5>
          <p class="menu-item--description">
            View the history of forms you have saved but not yet submitted
          </p>
        </div>
      </b-col>
      <b-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        class="mb-4"
      >
        <div
          tabindex="0"
          class="menu-item menu-item--shadow"
          @keyup.enter="$router.push('/user/history')"
          @click="$router.push('/user/history')"
        >
          <div class="menu-item--icon">
            <b-icon icon="clock-history" />
          </div>
          <h5 class="menu-item--title">
            History
          </h5>
          <p class="menu-item--description">
            <!-- eslint-disable-next-line max-len -->
            View the history of forms you have submitted and their processing status
          </p>
        </div>
      </b-col>
      <b-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        class="mb-4"
      >
        <div
          tabindex="0"
          class="menu-item menu-item--shadow"
        >
          <div class="menu-item--icon">
            <b-icon icon="people" />
          </div>
          <h5 class="menu-item--title">
            User Accounts
          </h5>
          <p class="menu-item--description">
            View and manage portal user accounts
          </p>
        </div>
      </b-col>
      <b-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        class="mb-4"
      >
        <div
          tabindex="0"
          class="menu-item menu-item--shadow"
        >
          <div class="menu-item--icon">
            <b-icon icon="tools" />
          </div>
          <h5 class="menu-item--title">
            LOV Maintenance
          </h5>
          <p class="menu-item--description">
            View and manage LOVs
          </p>
        </div>
      </b-col>
      <b-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        class="mb-4"
      >
        <div
          tabindex="0"
          class="menu-item menu-item--shadow"
        >
          <div class="menu-item--icon">
            <b-icon icon="gear" />
          </div>
          <h5 class="menu-item--title">
            Webservice Maintenance
          </h5>
          <p class="menu-item--description">
            View and manage Webservices
          </p>
        </div>
      </b-col>
      <b-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        class="mb-4"
      >
        <div
          tabindex="0"
          class="menu-item menu-item--shadow"
        >
          <div class="menu-item--icon">
            <b-icon icon="shield-check" />
          </div>
          <h5 class="menu-item--title">
            Permission Maintenance
          </h5>
          <p class="menu-item--description">
            View and manage Permissions
          </p>
        </div>
      </b-col>
      <b-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        class="mb-4"
      >
        <div
          tabindex="0"
          class="menu-item menu-item--shadow"
        >
          <div class="menu-item--icon">
            <b-icon icon="person-check" />
          </div>
          <h5 class="menu-item--title">
            Role Maintenance
          </h5>
          <p class="menu-item--description">
            View and manage User roles
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: 'user'
};
</script>

<style scoped>
.menu-item {
	padding-left: 2rem;
	padding-right: 2rem;
	padding-top: 2.5rem;
	padding-bottom: 2.5rem;
	background-color: white;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	min-height: 14rem;
}

.menu-item--shadow {
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, .15);
}

.menu-item--icon {
	font-size: 2rem;
	color: var(--primary);
}

.menu-item--title {
	font-weight: 600;
	color: var(--primary);
}

.menu-item--description {
	color: var(--grey-500);
}

.color-accent {
	color: var(--accent) !important;
}

.font-base-large {
	font-size: 1rem !important;
}
</style>
