<template>
  <div>
    <h2 class="h3 mb-4 page-title">Profile</h2>
    <div class="card mb-4 shadow">
      <div class="card-body my-n3">
        <div class="row mt-5 align-items-center">
          <div class="col-md-3 text-center mb-5">
            <div class="avatar avatar-xl">
              <img :src="'http://localhost:4000/media/'+profile.passport" alt="..." class="avatar-img rounded-circle">
            </div>
          </div>
          <div class="col-md-6 mx-auto">
            <div class="row align-items-center">
              <div class="col-md-7">
                <h4 class="mb-1">{{ profile.fullname }}</h4>
                <p class="mb-3"><span class="badge badge-dark p-1">{{ profile.department }}</span></p>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-md-7">
                <p> Gender: <strong>{{ profile.gender }}</strong> </p>
                <!-- <p> Date of Birth: <strong>{{ profile.dob }}</strong> </p> -->
                <p> Email: <strong>{{ profile.email }}</strong> </p>
                <p> Matric no: <strong>{{ profile.mat_no }}</strong> </p>
                <p> Department: <strong>{{ profile.department }}</strong> </p>
                <p> Year: <strong>{{ profile.level }}</strong> </p>
                <p> Phone number: <strong>{{ profile.phone_no }}</strong> </p>
                <p> State: <strong>{{ profile.state }}</strong> </p>
                <p> LGA: <strong>{{ profile.lga }}</strong> </p>
                <p> Nationality: <strong>{{ profile.nationality }}</strong> </p>
              </div>
              <div class="col">
                <p class="mb-0">Address: <strong>{{ profile.address }}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-4">
      <div class="col-md-4">
        <div class="card mb-4 shadow">
          <div class="card-body my-n3">
            <div class="row align-items-center">
              <div class="col-3 text-center">
                <span class="circle circle-lg bg-light">
                  <i class="fe fe-user fe-24 text-primary"></i>
                </span>
              </div> <!-- .col -->
              <div class="col">
                <router-link to="/dashboard/edit_account">
                  <h3 class="h5 mt-4 mb-1">Edit Account</h3>
                </router-link>
              </div> <!-- .col -->
            </div> <!-- .row -->
          </div> <!-- .card-body -->
          <div class="card-footer">
            <router-link to="/dashboard/edit_account" class="d-flex justify-content-between text-muted"><span>Account Settings</span><i class="fe fe-chevron-right"></i></router-link>
          </div> <!-- .card-footer -->
        </div> <!-- .card -->
      </div> <!-- .col-md-->
      <div class="col-md-4">
        <div class="card mb-4 shadow">
          <div class="card-body my-n3">
            <div class="row align-items-center">
              <div class="col-3 text-center">
                <span class="circle circle-lg bg-light">
                  <i class="fe fe-shield fe-24 text-primary"></i>
                </span>
              </div> <!-- .col -->
              <div class="col">
                <router-link to="/dashboard/change_password">
                  <h3 class="h5 mt-4 mb-1">Security</h3>
                </router-link>
              </div> <!-- .col -->
            </div> <!-- .row -->
          </div> <!-- .card-body -->
          <div class="card-footer">
            <router-link to="/dashboard/change_password" class="d-flex justify-content-between text-muted"><span>Change password</span><i class="fe fe-chevron-right"></i></router-link>
          </div> <!-- .card-footer -->
        </div> <!-- .card -->
      </div> <!-- .col-md-->
      <div class="col-md-4">
        <div class="card mb-4 shadow">
          <div class="card-body my-n3">
            <div class="row align-items-center">
              <div class="col-3 text-center">
                <span class="circle circle-lg bg-light">
                  <i class="fe fe-bell fe-24 text-primary"></i>
                </span>
              </div> <!-- .col -->
              <div class="col">
                <a @click.prevent="logout" href="#">
                  <h3 class="h5 mt-4 mb-1">Logout</h3>
                </a>
              </div> <!-- .col -->
            </div> <!-- .row -->
          </div> <!-- .card-body -->
          <div class="card-footer">
            <a @click.prevent="logout" href="" class="d-flex justify-content-between text-muted"><span>Logout</span><i class="fe fe-chevron-right"></i></a>
          </div> <!-- .card-footer -->
        </div> <!-- .card -->
      </div> <!-- .col-md-->
    </div> <!-- .row-->
  </div>
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