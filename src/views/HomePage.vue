<template>
  <HeroHome />
  <ObserverComponent classToToggle="fadeInTop" playOnce="true">
    <LayoutTwoSections :intro="intro" />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInRight" playOnce="true">
    <AboutUsHome />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
    <WhatWeDoHome />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInRight" playOnce="true">
    <ServiceAriaHome />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
    <TestimonialsHome />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInBottom" playOnce="true">
    <ContactUs />
  </ObserverComponent>
</template>

<script>
import "tailwindcss/tailwind.css";
import HeroHome from "../components/HeroHome.vue";
import AboutUsHome from "../components/AboutUsHome.vue";
import WhatWeDoHome from "../components/WhatWeDoHome.vue";
import ServiceAriaHome from "../components/ServiceAriaHome.vue";
import TestimonialsHome from "../components/TestimonialsHome.vue";
import LayoutTwoSections from "../components/LayoutTwoSections.vue";
import ContactUs from "../components/ContactUs.vue";
import ObserverComponent from "../components/IntersectionObserver.vue";

export default {
  name: "HomePage",
  components: {
    HeroHome,
    LayoutTwoSections,
    AboutUsHome,
    WhatWeDoHome,
    ServiceAriaHome,
    TestimonialsHome,
    ContactUs,
    ObserverComponent,
  },
  data() {
    return {
      intro: [
        {
          title: "CLIENT FOCUS",
          subtitle: "Your investment is our priority.",
          textleft: "",
          textrightP1: "",
          textrightP2:
            "Whether you're a landlord looking for professional property management, or a tenant looking to rent, North Simcoe Property Management has you covered.",
        },
      ],
    };
  },
};
</script>

<style>
/* Add any custom styling for the Home component here */
</style>
