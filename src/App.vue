<!-- App.vue -->

<template>
  <div class="overflow-hidden">
<!--    <TopNavBar :current-route="$route.path" />-->
    <NavBarSide :current-route="$route.path" />
    <router-view />
<!--    <FooterGlobal  />-->
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
// import TopNavBar from "./components/NavBarTop.vue";
import NavBarSide from "./components/NavBarSide.vue";
// import FooterGlobal from "./components/FooterGlobal.vue";

import router from "./router";

export default {
  components: {
    // TopNavBar,
    NavBarSide,
    // FooterGlobal,
  },
  router,
};
</script>

<style></style>
