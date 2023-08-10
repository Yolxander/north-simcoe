<template>
  <HeroGlobal />
  <LayoutTwoSections :intro="intro" />
</template>

<script>
import "tailwindcss/tailwind.css";
import HeroGlobal from "../components/HeroGlobal.vue";
import LayoutTwoSections from "../components/LayoutTwoSections.vue";

export default {
  name: "CompanyPage",
  components: {
    HeroGlobal,
    LayoutTwoSections,
  },
  data() {
    return {
      intro: [
        {
          title: "OUR COMPANY",
          subtitle: "Full Service Property Management Team.",
          textleft:
            "Are you getting tired of the concern, phone calls, filling vacancies, dealing with strangers and having no time to enjoy life? You know you made the right decision to buy that income property, but things just aren’t as rosy as you believed they would be. The markets are plummeting so you don’t want to go back to that roller coaster ride.",
          textrightP1:
            "At the end of the day, real estate always increases in value. Those monthly cheques are nice too!",
          textrightP2:
            "Let RPM show you how having the right property management company can actually net you more income while losing 'all of the hassles.'",
        },
      ],
    };
  },
};
</script>

<style></style>
