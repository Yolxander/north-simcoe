<template>
  <HeroGlobal :hero="hero" />
  <ContactUs />
</template>

<script>
import "tailwindcss/tailwind.css";
import ContactUs from "../components/ContactUs.vue";
import HeroGlobal from "../components/HeroGlobal.vue";

export default {
  name: "ContactPage",
  components: {
    ContactUs,
    HeroGlobal,
  },
  data() {
    return {
      hero: {
        title: "CONTACTS",
      },
    };
  },
};
</script>

<style></style>
