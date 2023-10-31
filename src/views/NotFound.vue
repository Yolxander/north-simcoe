<template>
  <HeroGlobal :hero="hero" />
</template>

<script>
import "tailwindcss/tailwind.css";
import HeroGlobal from "../components/HeroGlobal.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "CompanyPage",
  components: {
    HeroGlobal,
  },
  data() {
    return {
      hero: {
        title: "OOPS, THIS PAGE DOESN'T EXIST",
      },
    };
  },
  setup() {
    useHead({
      title: "Not Found",
      meta: [
        {
          name: `description`,
          content: "this is not found page",
        },
      ],
    });
  },
};
</script>

<style></style>
