<template>
  <section class="fixed top-0 left-0 w-full h-[100dvh] z-50">
    <iframe
      title="NEW LANDLORD CONTRACT NORTH SIMCOE"
      src="https://eu.jotform.com/sign/262174751376058/invite/01kzcszdpq4a94a0fe4deeba0e?signEmbed=1"
      class="w-full h-full border-0 z-10"
      scrolling="auto"
      @load="handleLoad"
    ></iframe>
    <div
      v-if="isLoading"
      class="absolute inset-0 bg-teal flex flex-col items-center justify-center z-20"
    >
      <h1 class="text-2xl font-archivo font-semibold text-white">New Landlord Contract ...</h1>
    </div>
  </section>
</template>

<script>
import "tailwindcss/tailwind.css";

export default {
  name: "LandlordContractPage",
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    handleLoad() {
      this.isLoading = false;
    },
  },
};
</script>
