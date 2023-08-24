<template>
  <nav
    class="bg-transparent fixed z-20 md:h-auto md:right-0 w-full border-b-4 border-double border-teal md:border-b-0 backdrop-filter backdrop-blur-lg md:backdrop-blur-none"
  >
    <div
      class="w-full max-w-screen-xl flex flex-wrap items-center justify-between p-4 md:justify-end"
    >
      <div
        class="flex w-full justify-between items-center md:space-x-8 md:w-auto md:pl-2 md:border md:border-transparent md:border-solid md:border-1 md:backdrop-filter md:backdrop-blur-sm md:rounded relative"
      >
        <p class="text-brown">
          <a href="tel:+16475001747" class="flex items-center">
            <svg
              class="svg-inline--fa fa-phone text-3xl"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="phone"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                class="md:fill-white"
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              ></path>
            </svg>
            <span class="md:text-white pl-2 hidden md:block"
              >+1 (647) 500-1747</span
            >
          </a>
        </p>
        <!-- Logo -->
        <router-link to="/" class="flex items-center block md:hidden">
          <img
            src="../assets/logo-text.png"
            class="max-w-[200px]"
            alt="North Simcoe Logo"
          />
        </router-link>
        <div tabindex="1" @click="toggleMenu" class="relative z-10">
          <div
            class="line w-[35px] h-[3px] bg-brown md:bg-white mb-2 transition-opacity duration-300 ease"
            :class="{ 'opacity-0': isMenuOpen }"
          ></div>
          <div
            class="line w-[35px] h-[3px] bg-brown md:bg-white mb-1 mb-2 transition-transform duration-300 ease transform"
            :class="{ 'rotate-45 absolute md:bg-black': isMenuOpen }"
          ></div>
          <div
            class="line w-[35px] h-[3px] bg-brown md:bg-white mb-2 transition-transform duration-300 ease transform"
            :class="{ '-rotate-45 md:bg-black': isMenuOpen }"
          ></div>
        </div>
        <div
          v-show="isMenuOpen"
          class="md:absolute md:top-[-20px] md:right-[-45px] mt-2 md:mt-0 md:w-[300px] md:h-screen p-4 bg-white backdrop-filter backdrop-blur-sm rounded z-5 flex flex-col items-end justify-center font-libre-baskerville md:text-2xl md:px-8"
        >
          <a href="/" class="block text-brown mb-2">HOME</a>
          <a href="/our-company" class="block text-brown mb-2">OUR COMPANY</a>
          <a href="/contact" class="block text-brown">CONTACT</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderGlobal",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
/* Custom styling for the HeaderGlobal component here */
</style>
