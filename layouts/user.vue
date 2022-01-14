<template>
  <div>
    <b-navbar
      class="top-navbar--container"
      toggleable="lg"
    >
      <div class="container-md">
        <router-link
          title="Mcgirr Technologies"
          aria-label="Mcgirr Technologies"
          target="_self"
          class="navbar-brand top-navbar--brand"
          to="/mcgirr/home"
        >
          <img
            src="/img/mcms.png"
            alt="Mcgirr Technologies Logo"
            style="height: 40px;"
          >
        </router-link>

        <b-navbar-toggle
          target="nav-collapse"
        />

        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <ul class="navbar-nav top-navbar--main">
            <li class="nav-item">
              <router-link
                title="Home"
                aria-label="Home"
                class="nav-link"
                to="/user"
                target="_self"
              >
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <a
                title="Apply"
                aria-label="Apply"
                class="nav-link"
                :href="
                  'http://localhost:8080' +
                    '/trunk_mcms/apps/ols-fee/ols-triage.jsp#!/ols-triage'
                "
                target="_self"
              >
                Apply
              </a>
            </li>
            <li class="nav-item">
              <router-link
                title="Pending Forms"
                aria-label="Pending Forms"
                class="nav-link"
                to="/user/pending-forms"
                target="_self"
              >
                Pending Forms
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                title="History"
                aria-label="History"
                class="nav-link"
                to="/user/history"
                target="_self"
              >
                History
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav top-navbar--main ml-md-auto">
            <b-nav-item-dropdown
              text="John Doe"
              right
            >
              <b-dropdown-item to="/user/update-password">
                Update password
              </b-dropdown-item>
              <b-dropdown-item to="/user/profile-manager">
                Profile management
              </b-dropdown-item>
              <b-dropdown-item to="/mcgirr">
                Logout
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- <li class="nav-item">
              <a
                role="button"
                title="Show help content"
                aria-label="Show help content"
                tabindex="0"
                class="nav-link top-navbar--help p-0"
                @click="$emit('click')"
                @keyup.enter="$emit('click')"
              >
                <b-icon icon="question-circle" />
              </a>
            </li> -->
          </ul>
        </b-collapse>
      </div>
    </b-navbar>

    <b-container class="mt-4">
      <Nuxt />
    </b-container>

    <footer>
      <div class="row">
        <div class="col-12 text-center mb-3 text-grey-500">
          Copyright &copy; mcGirr technologies
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.top-navbar--container {
	background-color: white;
	border-bottom: 1px solid var(--grey-200);
}

.top-navbar--main .dropdown-item {
	color: var(--primary);
	font-weight: 500;
	font-size: 0.875rem;
}

.top-navbar--main {
	align-items: center;
}

.top-navbar--container .nav-link {
	color: var(--primary);
	padding-left: 1rem;
	padding-right: 1rem;
	font-weight: 500;
}

.top-navbar--container .top-navbar--brand {
	color: var(--primary);
	font-weight: 600;
	padding: 0;
}

.top-navbar--container .top-navbar--help {
	color: #6c6c6c;
	font-size: 1.2rem;
	line-height: 1;
	cursor: pointer;
}
</style>
