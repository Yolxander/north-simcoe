<template>
  <HeroGlobal :hero="hero" />
  <!-- <ServiceCard
    :number="42"
    :title="'Example Title'"
    :paragraph="['Paragraph 1', 'Paragraph 2', 'Paragraph 3']"
    :bulletPoints="['Point 1', 'Point 2', 'Point 3']"
    :paragraph2="['Paragraph 1', 'Paragraph 2', 'Paragraph 3']"
  /> -->

  <ContactUs />
</template>

<script>
import "tailwindcss/tailwind.css";
import ContactUs from "../components/ContactUs.vue";
import HeroGlobal from "../components/HeroGlobal.vue";
// import ServiceCard from "../components/ServiceCard.vue";

export default {
  name: "ServicesPage",
  components: {
    ContactUs,
    HeroGlobal,
    // ServiceCard,
  },
  data() {
    return {
      hero: {
        title: "OUR SERVICES",
      },
    };
  },
};
</script>

<style></style>
<!-- :icon="['fas', 'iconName']" -->
