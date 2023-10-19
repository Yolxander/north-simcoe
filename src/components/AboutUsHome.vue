<template>
  <div
    class="max-w-screen-xl p-10 md:p-28 mx-auto flex flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
  >
    <div class="flex justify-center md:w-1/2 relative">
      <img
        src="../assets/about1.jpg"
        alt="Your Image"
        class="z-10 md:max-w-[80%]"
      />
      <div
        class="before-image bg-teal absolute right-[-15px] md:right-[15px] top-[-15px] md:top-[-25px] w-[calc(60%+40px)] h-[calc(60%+40px)] bg-teal-500 z-[-1]"
      ></div>
    </div>
    <div class="py-10 md:py-0 md:w-1/2">
      <h2 class="text-sm font-semibold mb-4 text-brown font-archivo">
        ABOUT US
      </h2>
      <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
      <h3 class="text-3xl font-semibold mb-4 text-brown font-archivo">
        Your Simcoe Rental Experts.
      </h3>
      <p class="font-open-sans text-2xl text-brown">
        We are a full service property management company located in Simcoe
        County. We work with landlords by helping them enjoy all the benefits of
        owning investment properties by taking away all the stress and hassles
        of dealing with day to day.
      </p>
      <router-link
        to="/our-company"
        type="button"
        class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full w-auto px-5 py-2.5 text-center mt-4"
      >
        READ MORE
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsHome",
};
</script>

<style></style>
