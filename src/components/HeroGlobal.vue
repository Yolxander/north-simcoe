<template>
  <div
    class="hero-container-global h-[60vh] flex items-end md:items center p-10 pt-20 md:pl-28 md:pb-10"
  >
    <div class="hero-overlay"></div>
    <div
      class="flex flex-col justify-center md:w-4/5 font-libre-baskerville absolute"
    >
      <p class="text-m md:mb-4 text-white font-bold">
        NORTH SIMCOE PROPERTY MANAGEMENT
      </p>
      <hr class="w-10 md:w-48 h-1 my-4 border-0 rounded bg-white" />
      <h1 class="text-4xl md:text-7xl font-bold mb-4 text-white">
        Our Company
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroHome",
};
</script>

<style>
/* Custom styling for the Hero component here */
.hero-container-global {
  position: relative;
  background-image: url("../assets/hero-global.jpeg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 128, 128, 0.6);
}
</style>
