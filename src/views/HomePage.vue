<template>
  <HeroHome />
  <LayoutTwoSections :intro="intro" />
  <AboutUsHome />
  <WhatWeDoHome />
  <ServiceAriaHome />
  <TestimonialsHome />
  <ContactUs />
</template>

<script>
import "tailwindcss/tailwind.css";
// import { gsapSectionMixin } from "../mixins/gsapSectionMixin";
import HeroHome from "../components/HeroHome.vue";
import AboutUsHome from "../components/AboutUsHome.vue";
import WhatWeDoHome from "../components/WhatWeDoHome.vue";
import ServiceAriaHome from "../components/ServiceAriaHome.vue";
import TestimonialsHome from "../components/TestimonialsHome.vue";
import LayoutTwoSections from "../components/LayoutTwoSections.vue";
import ContactUs from "../components/ContactUs.vue";

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
  // mixins: [gsapSectionMixin],
  // data() {
  //   return {
  //     testimonials: [
  //       {
  //         content:
  //           "Lorem ipsum dolor sit amet, North Simcoe elit. Similique et ipsum accusamus perferendis iusto ullam a, quidem accusantium? Nostrum est harum eius optio quod odio fugiat eaqueipsa obcaecati!",
  //         author: "Micheal Gough",
  //         occupation: "CEO at Google",
  //       },
  //     ],
  //   };
  // },
};
</script>

<style>
/* Add any custom styling for the Home component here */
</style>
