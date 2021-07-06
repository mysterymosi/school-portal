<template>
  <div class="wrapper vh-100">
    <div class="row align-items-center h-100">
      <form class="col-lg-3 col-md-4 col-10 mx-auto text-center">
        <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
          <img src="../assets/images/school-portal-2.png">
        </a>
        <h1 class="h6 mb-3">Sign in</h1>
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input v-model="email" type="email" id="inputEmail" class="form-control form-control-lg" placeholder="Email address" required="" autofocus="">
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Password</label>
          <input v-model="password" type="password" id="inputPassword" class="form-control form-control-lg" placeholder="Password" required="">
        </div>
        <button @click.prevent="login" class="btn btn-lg btn-primary btn-block" type="submit">Let me in</button>
        <div class="checkbox mt-3">
          <router-link to="/register">
            Not registered yet?</router-link>
        </div>
        <p class="mt-5 mb-3 text-muted">© 2020</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			email: null,
			password: null
		}
	},

	methods: {
		async login() {
			try {
				await this.$store.dispatch("login", {
					email: this.email,
					password: this.password
				})
				this.$router.push("/dashboard")
			} catch(error) {
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