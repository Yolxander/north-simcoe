<template>
  <div class="hero-container h-[80vh]">
    <div class="hero-overlay"></div>
    <div
      class="flex md:flex-row md:items-center md:space-x-8 md:justify-between max-w-screen-xl p-10 md:p-28 mx-auto relative"
    >
      <div class="flex flex-col justify-center md:w-4/5 font-libre-baskerville">
        <p class="text-lg mb-4 text-brown font-bold">
          NORTH SIMCOE PROPERTY MANAGEMENT
        </p>
        <hr class="w-10 md:w-48 h-1 my-4 border-0 rounded bg-brown" />
        <h2 class="text-4xl md:text-7xl font-bold mb-4 text-brown">About Us</h2>
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
  background-color: rgba(147, 195, 191, 0.6);
}
</style>
