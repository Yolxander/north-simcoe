<!-- App.vue -->

<template>
  <div class="overflow-hidden">
    <TopNavBar />
    <NavBarSide />
    <router-view />
    <FooterGlobal />
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import TopNavBar from "./components/NavBarTop.vue";
import NavBarSide from "./components/NavBarSide.vue";
import FooterGlobal from "./components/FooterGlobal.vue";

import router from "./router";

export default {
  components: {
    TopNavBar,
    NavBarSide,
    FooterGlobal,
  },
  router,
};
</script>

<style></style>
