<template>
  <HeroGlobal :hero="hero" />
  <LayoutTwoSections :intro="intro" />
  <div
    class="max-w-screen-xl p-10 md:p-28 mx-auto flex flex-col items-center text-center"
  >
    <h2 class="text-sm font-semibold text-brown font-archivo">MEET THE TEAM</h2>
    <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
    <h3 class="text-3xl font-semibold mb-4 text-brown font-archivo">
      Meet the talented team at North Simcoe Property Management:
    </h3>

    <!-- <div class="flex justify-center md:w-1/2 relative"> -->
    <img
      class="max-w-full rounded-xl max-h-[50vh] border-3 border-teal"
      src="../assets/team.png"
      alt=""
    />
    <!-- <div
        class="before-image bg-teal absolute right-[-15px] md:right-[15px] top-[-15px] md:top-[-25px] w-[calc(60%+40px)] h-[calc(60%+40px)] bg-teal-500 z-[-1]"
      ></div> -->
    <!-- </div> -->
  </div>
  <LayoutTwoSections :intro="serviceAreas" />
  <ContactUs />
</template>

<script>
import "tailwindcss/tailwind.css";
import ContactUs from "../components/ContactUs.vue";
import HeroGlobal from "../components/HeroGlobal.vue";
import LayoutTwoSections from "../components/LayoutTwoSections.vue";

export default {
  name: "CompanyPage",
  components: {
    ContactUs,
    HeroGlobal,
    LayoutTwoSections,
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
            "We help landlords that own residential and commercial properties, and multi-use buildings. Our team will also handle all Landlord Tenant Board issues and we offer FREE legal advice.",
        },
      ],
      serviceAreas: [
        {
          title: "SERIVCE AREAS",
          subtitle: "Explore Our Coverage Area.",
          textleft:
            "North Simcoe serves several locations in and around the Simcoe County Area, York, Peel, Dufferin and Muskoka Region.",
          textrightP1:
            "Barrie | Midland | Orillia | Everett | Muskoka | Gravenhurst | Huntsville | Bracebridge | Shelburne",
          textrightP2:
            "Bradford | Newmarket/Aurora | Innisfil | Alliston | Tottenham | Caledon | Orangeville | Vaughan | Georgina",
        },
      ],
    };
  },
};
</script>

<style></style>
