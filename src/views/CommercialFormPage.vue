<template>

  <CommercialForm  />

</template>

<script>
import "tailwindcss/tailwind.css";
import CommercialForm from "@/components/ComercialForm.vue";
export default {
  name: "CommercialFormPage",
  components: {
      CommercialForm,
  },
  data() {
    return {
      intro: [
        {
          title: "ABOUT US",
          subtitle: "Full Service Property Management Team.",
          textleft:
            "Are you getting tired of the concern, phone calls, filling vacancies, dealing with strangers and having no time to enjoy life? You know you made the right decision to buy that income property, but things just aren’t as rosy as you believed they would be. The markets are plummeting so you don’t want to go back to that roller coaster ride.",
          textrightP1:
            "At the end of the day, real estate always increases in value. Those monthly cheques are nice too!",
          textrightP2:
            "Let RPM show you how having the right property management company can actually net you more income while losing 'all of the hassles.'",
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
