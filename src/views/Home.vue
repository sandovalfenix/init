<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import SiberNav from "../components/SiberNav.vue";
</script>
<template>
  <div class="min-h-full">
    <SiberNav />
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
  /* import { useRouter } from "vue-router"; */
  export default {
    name: "Home",
    /* setup() {
      const router = useRouter();

      goToDashboard = () => {
        if (isAuthenticated) {
          router.push("/dashboard");
        } else {
          router.push("/login");
        }
      };
    }, */
  };
</script>