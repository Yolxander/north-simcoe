<template>
  <section class="fixed top-0 left-0 w-full h-[100dvh] z-50">
    <iframe
      v-if="!showWarning"
      title="NEW LANDLORD CONTRACT NORTH SIMCOE"
      src="https://eu.jotform.com/sign/262174751376058/invite/01kzcszdpq4a94a0fe4deeba0e?signEmbed=1"
      class="w-full h-full border-0 z-10"
      scrolling="auto"
      @load="handleLoad"
    ></iframe>
    <div
      v-if="isLoading && !showWarning"
      class="absolute inset-0 bg-teal flex flex-col items-center justify-center z-20"
    >
      <h1 class="text-2xl font-archivo font-semibold text-white">New Landlord Contract ...</h1>
    </div>
    <div
      v-if="showWarning"
      class="absolute inset-0 z-30 bg-white flex flex-col items-center justify-center p-6 text-center"
    >
      <h1 class="text-2xl font-archivo font-semibold text-brown mb-4">Please open this page in Safari</h1>
      <p class="text-navy-200 mb-6">The preview or in-app browser doesn't fully support this form.</p>
      <a :href="currentUrl" class="bg-teal text-white font-archivo font-semibold px-6 py-3 rounded hover:opacity-90 transition-opacity">Open in Safari</a>
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
      showWarning: false,
      currentUrl: window.location.href,
    };
  },
  mounted() {
    if (window.self !== window.top) {
      window.top.location = window.location.href;
      return;
    }
    if (!this.isFullSafari()) {
      this.showWarning = true;
    }
  },
  methods: {
    handleLoad() {
      this.isLoading = false;
    },
    isFullSafari() {
      const ua = navigator.userAgent;
      const isIOS = /iPhone|iPad|iPod/.test(ua);
      if (!isIOS) return true;
      const isSafari = /Safari/.test(ua) && !/CriOS/.test(ua) && !/FxiOS/.test(ua) && !/Chrome/.test(ua) && !/Edg/.test(ua);
      return isSafari;
    },
  },
};
</script>
