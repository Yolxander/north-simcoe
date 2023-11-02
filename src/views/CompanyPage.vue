<template>
  <HeroGlobal :hero="hero" />
  <ObserverComponent classToToggle="fadeInTop" playOnce="true">
    <LayoutTwoSections :intro="intro" />
  </ObserverComponent>
  <div
    class="max-w-screen-xl p-10 md:p-28 mx-auto flex flex-wrap md:flex-nowrap"
  >
    <div class="md:w-3/5 mb-6 md:mb-0">
      <ObserverComponent classToToggle="fadeInTop" playOnce="true">
        <h2 class="text-sm font-semibold text-brown font-archivo">
          MEET THE TEAM
        </h2>
        <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
        <h3 class="text-3xl font-semibold mb-4 text-brown font-archivo">
          Meet the talented team at North Simcoe PM
        </h3>
        <p class="font-open-sans text-brown text-2xl">
          Meet the dynamic duo driving our success: Linda Shipley and Larry
          Pomfret, who together seamlessly blend strategic vision and
          operational wizardry to elevate every property under our care.
        </p>
      </ObserverComponent>
    </div>
    <!-- <div class="flex justify-center md:w-1/2 relative"> -->
    <ObserverComponent classToToggle="fadeInBottom" playOnce="true">
      <img
        class="max-w-full rounded-xl max-h-[50vh] border-3 border-teal"
        src="../assets/team.png"
        alt=""
      />
      <div
        class="before-image bg-teal absolute right-[-15px] md:right-[15px] top-[-15px] md:top-[-25px] w-[calc(60%+40px)] h-[calc(60%+40px)] bg-teal-500 z-[-1]"
      ></div>
    </ObserverComponent>
    <!-- <div
        class="before-image bg-teal absolute right-[-15px] md:right-[15px] top-[-15px] md:top-[-25px] w-[calc(60%+40px)] h-[calc(60%+40px)] bg-teal-500 z-[-1]"
      ></div> -->
    <!-- </div> -->
  </div>
  <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
    <ServiceAriaHome
      :title="serviceAreas[0].title"
      :subtitle="serviceAreas[0].subtitle"
      :description="serviceAreas[0].description"
      :areasTitle="serviceAreas[0].areasTitle"
    />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInBottom" playOnce="true">
    <ContactUs />
  </ObserverComponent>
</template>

<script>
import "tailwindcss/tailwind.css";
import ContactUs from "../components/ContactUs.vue";
import HeroGlobal from "../components/HeroGlobal.vue";
import LayoutTwoSections from "../components/LayoutTwoSections.vue";
import ServiceAriaHome from "../components/ServiceAriaHome.vue";
import ObserverComponent from "../components/IntersectionObserver.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "CompanyPage",
  components: {
    ContactUs,
    HeroGlobal,
    LayoutTwoSections,
    ServiceAriaHome,
    ObserverComponent,
  },
  data() {
    return {
      hero: {
        title: "OUR COMPANY",
      },
      intro: [
        {
          title: "ABOUT NORTH SIMCOE",
          subtitle: "Full Service Property Management Team",
          textleft:
            "We are a full service property management company in Simcoe County. Our service areas include York, Simcoe, Dufferin, Muskoka, and Peel Regions.",
          textrightP1: "",
          textrightP2:
            "We help landlords that own residential, commercial and multi-use properties. Our team will also handle all Landlord Tenant Board issues and we offer FREE legal advice.",
        },
      ],
      serviceAreas: [
        {
          title: "OUR COVERAGE AREA",
          subtitle: "Servicing Simcoe County & Beyond",
          description:
            "North Simcoe Property Management serves several locations in and around the Simcoe County Area. We also service York, Peel, Dufferin and Muskoka Regions.",
          areasTitle: "See our full list of communities below:",
        },
      ],
    };
  },
  setup() {
    useHead({
      // Can be static or computed
      title: "Our Company",
      meta: [
        {
          name: `description`,
          content: "this is the our company page",
        },
      ],
    });
  },
};
</script>

<style></style>
