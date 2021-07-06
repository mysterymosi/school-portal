		<template>
  <div>
    <h2 class="h3 mb-4 page-title">Change Password</h2>
    <div class="my-4">
      <form>
        <hr class="my-4">
        <div class="row mb-4">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="inputPassword4">Old Password</label>
                        <input type="password" class="form-control" id="inputPassword5">
                      </div>
                      <div class="form-group">
                        <label for="inputPassword5">New Password</label>
                        <input type="password" class="form-control" id="inputPassword5">
                      </div>
                      <div class="form-group">
                        <label for="inputPassword6">Confirm Password</label>
                        <input type="password" class="form-control" id="inputPassword6">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <p class="mb-2">Password requirements</p>
                      <p class="small text-muted mb-2"> To create a new password, you have to meet all of the following requirements: </p>
                      <ul class="small text-muted pl-4 mb-0">
                        <li> Minimum 8 character </li>
                        <li>At least one special character</li>
                        <li>At least one number</li>
                        <li>Can’t be the same as a previous password </li>
                      </ul>
                    </div>
                  </div>
        <button type="submit" class="btn btn-primary">Save Change</button>
      </form>
    </div> <!-- /.card-body -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullname: null,
      email: null,
      address: null,
      phonenumber: null,
      nationality: null,
      state: null,
      lga: null
    }
  },
  computed: {
    profile() {
      return this.$store.getters.getprofile
    }
  },

  mounted() {
    this.fullname = this.profile.fullname
    this.email = this.profile.email
    this.address = this.profile.address
    this.phonenumber = this.profile.phone_no
    this.nationality = this.profile.nationality
    this.state = this.profile.state
    this.lga = this.profile.lga
  }
}
</script>
