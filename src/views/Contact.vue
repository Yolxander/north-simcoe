<template>
  <HeroGlobal :hero="hero" />
  <div class="max-w-screen-xl p-10 md:p-32 mx-auto flex flex-col md:flex-row md:items-center md:space-x-8 md:gap-5">
    <!-- Left Section -->
    <div class="py-10 md:py-0 md:w-3/5">
      <h1 class="text-3xl font-extrabold mb-4 text-brown font-libre-baskerville">Innovative</h1>
      <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
      <p class="text-gray-600 mb-6">Get in touch with us for any inquiries or collaborations.</p>

      <!-- Email Section -->
      <div class="flex items-center mb-4">
        <font-awesome-icon :icon="['fas', 'envelope']" class="text-teal mr-4"/>
        <a href="mailto:hello@myemaildigital.com" class="text-2xl font-extrabold mb-4 text-brown font-libre-baskerville hover:underline">hello@myemaildigital.com</a>
      </div>

      <!-- Phone Section -->
      <div class="flex items-center mb-4">
        <font-awesome-icon :icon="['fas', 'phone']" class="text-teal mr-4"/>
        <a href="tel:+1(555)-123-4567" class="text-2xl font-extrabold mb-4 text-brown font-libre-baskerville hover:underline">+1(555)-123-4567</a>
      </div>

      <!-- Office Section -->
      <div class="flex items-center mb-4">
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="text-teal mr-4"/>
        <span class="text-2xl font-extrabold mb-4 text-brown font-libre-baskerville">123 Main Street, Anytown, USA</span>
      </div>

      <a href="#" class="text-blue-500 hover:underline">Get Directions ></a>
    </div>

    <!-- Right Section - Map -->
    <div class="md:w-2/5 bg-gray-200 rounded-lg p-4">
      <!-- Embed your map here -->
    </div>
  </div>
  <ContactUs />
</template>

<script>
import "tailwindcss/tailwind.css";
import ContactUs from "../components/ContactUs.vue";
import HeroGlobal from "../components/HeroGlobal.vue";

export default {
  name: "ContactPage",
  components: {
    ContactUs,
    HeroGlobal,
  },
  data() {
    return {
      hero: {
        title: "CONTACTS",
      },
    };
  },
};
</script>

<style></style>
