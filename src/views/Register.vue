<template>
  <div class="wrapper vh-100">
    <div class="row align-items-center h-100">
      <form id="theform" class="col-lg-6 col-md-8 col-10 mx-auto">
        <div class="mx-auto text-center my-4">
          <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
            <img src="../assets/images/school-portal-2.png">
          </a>
          <h2 class="mb-3">Register</h2>
        </div>
        <div class="form-group">
          <label for="fullname">Full name</label>
          <input type="text" id="fullname" name="fullname" class="form-control">
        </div>
        <div class="form-group">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" name="email" id="inputEmail4">
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" id="address" name="address" class="form-control">
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="simple-select2">Department</label>
            <select name="department" class="form-control select2" id="simple-select2">
              <optgroup label="Faculty of Physical Science">
                <option>Computer Science</option>
                <option>Mathematics</option>
              </optgroup>
              <optgroup label="Faculty of Education">
                <option>Social science education</option>
                <option>Education biology</option>
                <option>Mathematics education</option>
                <option>English education</option>
              </optgroup>
            </select>
          </div> <!-- form-group -->
          <div class="form-group col-md-6">
            <label for="phonenumber">Phone number</label>
            <input type="tel" id="phonenumber" name="phone_number" class="form-control">
          </div>
        </div>
        <div class="form-group mb-3">
          <label for="customFile">Upload passport</label>
          <div class="custom-file">
            <input name="passport" type="file" class="custom-file-input" id="customFile">
            <label class="custom-file-label" for="customFile">Choose file</label>
          </div>
        </div>
        <div class="form-group mb-3">
          <label for="custom-select">Year</label>
          <select name="level" class="custom-select" id="custom-select">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="form-group mb-3">
          <label for="gender-select">Gender</label>
          <select name="gender" class="custom-select" id="gender-select">
            <option selected value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="nationality">Nationality</label>
          <input name="nationality" type="text" id="nationality" class="form-control">
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="state">State</label>
            <input name="state" type="text" id="state" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="lga">LGA</label>
            <input name="lga" type="text" id="lga" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword5">Password</label>
          <input name="password" type="password" class="form-control" id="inputPassword5">
        </div>
        <button @click.prevent="signup" class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        <div class="checkbox mt-3 text-center">
          <router-link to="/login">
            Already registered?</router-link>
        </div>
        <p class="mt-5 mb-3 text-muted text-center">© 2020</p>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async signup() {
      const theForm = document.querySelector("#theform")
      let fd = new FormData(theForm)
      try {
        await this.$store.dispatch("register", fd)
        this.$router.push("/dashboard")
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
a {
  color: #6c757d;
}

a:hover {
  text-decoration: none;
}
</style>