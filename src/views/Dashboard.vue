<template>
  <div class="wrapper">
    <TheHeader />
    <TheSidebar />
    <main role="main" class="main-content">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-10">
              <router-view />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue"
import TheSidebar from "@/components/TheSidebar.vue"
export default {
  components: {
    TheHeader,
    TheSidebar
  }
}
</script>
