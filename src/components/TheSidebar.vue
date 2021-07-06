<template>
	<aside class="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
        <a href="#" class="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
          <i class="fe fe-x"><span class="sr-only"></span></i>
        </a>
        <nav class="vertnav navbar navbar-light">
          <!-- nav bar -->
          <div class="w-100 mb-4 d-flex">
            <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
              <img style="width: 100%;" src="../assets/images/school-portal-2.png">
            </a>
          </div>
          <ul class="navbar-nav flex-fill w-100 mb-2">
          	<li class="nav-item w-100">
              <router-link class="nav-link" to="/dashboard">
                <i class="fe fe-user fe-16"></i>
                <span class="ml-3 item-text">Profile</span>
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a href="#dashboard" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
                <i class="fe fe-settings fe-16"></i>
                <span class="ml-3 item-text">Account Settings</span><span class="sr-only">(current)</span>
              </a>
              <ul class="collapse list-unstyled pl-4 w-100" id="dashboard">
                <li class="nav-item active">
                  <router-link class="nav-link pl-3" to="/dashboard/edit_account"><span class="ml-1 item-text">Edit account</span></router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link pl-3" to="/dashboard/change_password"><span class="ml-1 item-text">change password</span></router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item w-100">
              <router-link class="nav-link" to="/dashboard">
                <i class="fe fe-book-open fe-16"></i>
                <span class="ml-3 item-text">Register Courses</span>
              </router-link>
            </li>
            <li class="nav-item w-100">
              <router-link class="nav-link" to="/dashboard">
                <i class="fe fe-eye fe-16"></i>
                <span class="ml-3 item-text">Check Results</span>
              </router-link>
            </li>
          </ul>
          
          <ul class="navbar-nav flex-fill w-100 mb-2">
            <li class="nav-item w-100">
              <a @click.prevent="logout" class="nav-link" href="calendar.html">
                <i class="fe fe-log-out fe-16"></i>
                <span class="ml-3 item-text">Logout</span>
              </a>
            </li>
          </ul>
          <div class="btn-box w-100 mt-4 mb-1">
            <button @click="logout" type="button" class="btn mb-2 btn-primary btn-lg btn-block">
              <i class="fe fe-home fe-12 mr-2"></i><span class="small">Go home</span>
            </button>
          </div>
        </nav>
      </aside>
</template>
<script>
export default {
	methods: {
		logout() {
			this.$store.commit("LOG_OUT", null)
			this.$router.push("/login")
		}
	}
}
</script>