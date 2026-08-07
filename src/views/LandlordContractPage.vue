<template>
  <section class="fixed top-0 left-0 w-full h-full z-50">
    <iframe
      title="NEW LANDLORD CONTRACT NORTH SIMCOE"
      src="https://eu.jotform.com/sign/262174751376058/invite/01kzcszdpq4a94a0fe4deeba0e?signEmbed=1"
      class="w-full h-full border-0"
    ></iframe>
  </section>
</template>

<script>
import "tailwindcss/tailwind.css";

export default {
  name: "LandlordContractPage",
  mounted() {
    document.documentElement.classList.add("h-full", "overflow-hidden");
    document.body.classList.add("h-full", "overflow-hidden");
  },
  beforeUnmount() {
    document.documentElement.classList.remove("h-full", "overflow-hidden");
    document.body.classList.remove("h-full", "overflow-hidden");
  },
};
</script>
