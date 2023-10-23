<template>
  <div class="hero-container">
    <div class="hero-overlay"></div>
    <!-- Bluish overlay -->
    <div
      class="flex md:flex-row md:items-center md:space-x-8 md:justify-between max-w-screen-xl h-screen p-10 pt-20 md:p-28 mx-auto relative"
    >
      <div class="flex flex-col justify-center font-archivo font-semibold">
        <p class="text-lg mb-4 text-white">NORTH SIMCOE PROPERTY MANAGEMENT</p>
        <hr class="w-10 md:w-48 h-1 my-4 border-0 rounded bg-white" />
        <h2 class="text-4xl md:text-7xl mb-4 text-white">
          Top property management company in Simcoe County.
        </h2>
        <hr class="w-10 md:w-48 h-1 my-4 border-0 rounded bg-white" />
        <p class="text-lg mb-4 text-white">
          Servicing Simcoe, Dufferin, York, Peel & Muskoka Regions
        </p>
      </div>
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
.hero-container {
  position: relative;
  background-image: url("../assets/hero1.jpeg");
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
