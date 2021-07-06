<template>
  <div>
    <h2 class="h3 mb-4 page-title">Settings</h2>
    <div class="my-4">
      <form>
        <div class="row mt-5 align-items-center">
          <div class="col-md-3 text-center mb-5">
            <div class="avatar avatar-xl">
              <img :src="'http://localhost:4000/media/'+profile.passport" alt="..." class="avatar-img rounded-circle">
            </div>
          </div>
          <div class="col">
            <div class="row align-items-center">
              <div class="col-md-7">
                <h4 class="mb-1">{{ profile.fullname }}</h4>
                <p class="mb-3"><span class="badge badge-dark p-1">{{ profile.department }}</span></p>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="firstname">Fullname</label>
            <input v-model="fullname" type="text" id="firstname" class="form-control" placeholder="Brown">
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input v-model="email" type="email" class="form-control" id="inputEmail4" placeholder="brown@asher.me">
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress5">Address</label>
          <input v-model="address" type="text" class="form-control" id="inputAddress5" placeholder="P.O. Box 464, 5975 Eget Avenue">
        </div>
        <div class="form-group">
          <label for="nationality">Nationality</label>
          <input v-model="nationality" type="text" class="form-control" id="nationality" placeholder="P.O. Box 464, 5975 Eget Avenue">
        </div>
        <div class="form-group">
          <label for="State">State</label>
          <input v-model="state" type="text" class="form-control" id="State" placeholder="P.O. Box 464, 5975 Eget Avenue">
        </div>
        <div class="form-group">
          <label for="lga">LGA</label>
          <input v-model="lga" type="text" class="form-control" id="lga" placeholder="P.O. Box 464, 5975 Eget Avenue">
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCompany5">Phone number</label>
            <input v-model="phonenumber" type="tel" class="form-control" id="inputCompany5">
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