<template>
  <div class="max-w-screen-xl mx-auto py-8">
    <div
      class="max-w-screen-xl p-10 md:pt-28 md:pl-28 md:pr-0 pb-0 mx-auto flex flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
    >
      <div class="md:w-2/5">
        <h2
          class="text-sm font-semibold mb-4 text-brown font-semibold font-archivo"
        >
          WHAT WE DO
        </h2>
        <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
        <h3
          class="text-3xl font-semibold mb-4 text-brown font-semibold font-archivo"
        >
          Professional Property Management Services.
        </h3>
        <p class="font-open-sans text-2xl text-brown">
          From finding quality tenants, FREE legal advice to property
          maintenance and beyond, we provide full service property management on
          residential, commercial, and mixed-use buildings. <a href="/services" class="text-teal hover:underline font-semibold">View our complete property management services</a> or <a href="/contact" class="text-teal hover:underline font-semibold">get in touch</a> to learn more.
        </p>
      </div>
      <div
        class="flex justify-center flex-wrap py-4 md:py-0 md:w-3/5 text-brown text-center text-xl"
      >
        <div class="">
          <div
            class="md:w-56 xs:mr-4 p-2 border-solid border-teal border-4 rounded-xl mb-4"
          >
            <font-awesome-icon
              :icon="['fas', 'house-chimney']"
              class="text-5xl mb-2"
            />
            <h4 class="font-semibold mb-2 font-archivo">
              RESIDENTIAL PROPERTY MANAGEMENT
            </h4>
          </div>
          <div
            class="md:w-56 p-2 border-solid border-teal border-4 rounded-xl mb-4"
          >
            <font-awesome-icon :icon="['fas', 'shop']" class="text-5xl mb-2" />
            <h4 class="font-semibold mb-2 font-archivo">
              MIXED USE PROPERTY MANAGEMENT
            </h4>
          </div>
        </div>
        <div class="">
          <div
            class="md:w-56 p-2 xs:mr-4 border-solid border-teal border-4 rounded-xl mb-4"
          >
            <font-awesome-icon
              :icon="['fas', 'building']"
              class="text-5xl mb-2"
            />
            <h4 class="font-semibold mb-2 font-archivo">
              COMMERCIAL PROPERTY MANAGEMENT
            </h4>
          </div>
          <div
            class="w-full md:w-56 md:p-[22px] p-2 border-solid border-teal border-4 rounded-xl mr-4"
          >
            <font-awesome-icon
              :icon="['fas', 'dollar-sign']"
              class="text-5xl mb-2"
            />
            <h4 class="font-semibold mb-2 font-archivo">CUSTOM PRICING</h4>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-center max-w-screen-xl px-10 md:px-28 md:justify-start"
    >
      <button
        @click="navigateToServicesPage"
        type="button"
        class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal rounded-lg text-sm w-auto px-5 py-2.5 text-center font-semibold font-archivo mt-4"
      >
        FIND OUT MORE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatWeDo",
  methods: {
    navigateToServicesPage() {
      this.$router.push({ name: "ServicesPage" });
    },
  },
};
</script>

<style></style>
