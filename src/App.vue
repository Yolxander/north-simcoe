<template>
  <div class="overflow-hidden">
    <!-- <TopNavBar :current-route="$route.path" /> -->
    <NavBarSide :current-route="$route.path" />
    <router-view />
    <!-- <FooterGlobal /> -->
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
// import TopNavBar from "./components/NavBarTop.vue";
import NavBarSide from "./components/NavBarSide.vue";
// import FooterGlobal from "./components/FooterGlobal.vue";
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import router from "./router";

export default {
  components: {
    // TopNavBar,
    NavBarSide,
    // FooterGlobal,
  },
  setup() {
    const siteData = reactive({
      title: `North Simcoe Property Management in Simcoe County`,
      description: `North Simcoe Property Management is a leading full service property management company in Simcoe County. Contact us today`,
    });
    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    });
  },
  router,
};
</script>

<style></style>
