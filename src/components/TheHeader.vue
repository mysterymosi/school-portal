<template>
	<nav class="topnav navbar navbar-light">
        <button type="button" class="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar">
          <i class="fe fe-menu navbar-toggler-icon"></i>
        </button>
        <form class="form-inline mr-auto searchform text-muted">
          <input class="form-control mr-sm-2 bg-transparent border-0 pl-4 text-muted" type="search" placeholder="Type something..." aria-label="Search">
        </form>
        <ul class="nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-muted pr-0" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="avatar avatar-sm mt-2">
                <img :src="'http://localhost:4000/media/'+profile.passport" alt="..." class="avatar-img rounded-circle">
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <a @click.prevent="logout" class="dropdown-item" href="#">Log out</a>
            </div>
          </li>
        </ul>
      </nav>
</template>

<script>
export default {
	computed: {
		profile() {
			return this.$store.getters.getprofile
		}
	},
	methods: {
		logout() {
			this.$store.commit("LOG_OUT", null)
			this.$router.push("/login")
		}
	}
}
</script>