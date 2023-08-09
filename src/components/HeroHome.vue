<template>
  <div class="hero-container">
    <div class="hero-overlay"></div>
    <!-- Bluish overlay -->
    <div
      class="flex md:flex-row md:items-center md:space-x-8 md:justify-between max-w-screen-xl h-screen p-10 md:p-28 mx-auto relative"
    >
      <div class="flex flex-col justify-center md:w-4/5 font-libre-baskerville">
        <p class="text-lg mb-4 text-brown font-bold">
          NORTH SIMCOE PROPERTY MANAGEMENT
        </p>
        <hr class="w-10 md:w-48 h-1 my-4 border-0 rounded bg-brown" />
        <h2 class="text-4xl md:text-7xl font-bold mb-4 text-brown">
          Top propety management company in Simcoe County.
        </h2>
        <hr class="w-10 md:w-48 h-1 my-4 border-0 rounded bg-brown" />
        <a
          href="#"
          class="inline-flex items-center py-2.5 text-2xl text-2xl font-semibold text-center text-brown hover:underline focus:ring-4 focus:outline-none focus:ring-gray-600 dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          Learn more
          <svg
            class="w-5 h-5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
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
