<template>
  <nav
    class="bg-transparent fixed z-20 md:h-auto md:right-0 w-full border-b-4 border-double border-teal md:border-b-0 backdrop-filter backdrop-blur-lg md:backdrop-blur-none"
  >
    <div
      class="w-full max-w-screen-xl flex flex-wrap items-center justify-between md:justify-end mx-auto"
    >
      <div
        class="flex w-full items-center justify-between px-10 p-4 md:space-x-8 md:w-auto md:pl-2 md:border md:border-transparent md:border-solid md:border-1 md:backdrop-filter md:backdrop-blur-lg md:bg-teal/40 md:rounded relative"
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
                class="md:fill-brown"
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              ></path>
            </svg>
            <span class="md:text-brown pl-1 hidden md:block"
              >+1 (647) 500-1747</span
            >
          </a>
        </p>
        <!-- Logo -->
        <router-link
          to="/"
          class="flex items-center block md:hidden cursor-pointer"
        >
          <img
            src="../assets/logo-text.png"
            class="max-w-[200px]"
            alt="North Simcoe Logo"
          />
        </router-link>
        <div
          tabindex="1"
          @click="toggleMenu"
          class="relative z-10 cursor-pointer"
        >
          <div
            class="line w-[35px] h-[3px] bg-brown md:bg-brown mb-2 transition-opacity duration-300 ease"
            :class="{ 'opacity-0': isMenuOpen }"
          ></div>
          <div
            class="line w-[35px] h-[3px] bg-brown md:bg-brown mb-1 mb-2 transition-transform duration-300 ease transform"
            :class="{ 'rotate-45 absolute md:bg-black': isMenuOpen }"
          ></div>
          <div
            class="line w-[35px] h-[3px] bg-brown md:bg-brown mb-2 transition-transform duration-300 ease transform"
            :class="{ '-rotate-45 md:bg-black': isMenuOpen }"
          ></div>
        </div>
        <div
          v-show="isMenuOpen"
          class="menu absolute h-screen inset-0 m-0 text-4xl bg-white backdrop-filter backdrop-blur-sm rounded z-6 flex flex-col items-start justify-center font-archivo p-6 md:w-screen md:left-[-30px] animate-link"
        >
          <router-link
            to="/"
            class="block text-brown mb-2"
            active-class="text-tealdark"
            >HOME</router-link
          >
          <router-link
            to="/our-company"
            class="block text-brown mb-2"
            active-class="text-tealdark"
            >OUR COMPANY</router-link
          >
          <router-link
            to="/services"
            class="block text-brown mb-2"
            active-class="text-tealdark"
            >SERVICES</router-link
          >
          <div class="group" :class="{ 'animate-chevron': showDropdown }">
            <p
              class="block text-brown mb-2 cursor-pointer"
              @click="toggleDropdown"
            >
              FORMS
              <font-awesome-icon
                :icon="['fas', 'chevron-down']"
                :class="showDropdown ? 'animate-chevron' : ''"
                class="chevron"
              />
            </p>
            <div v-if="showDropdown" class="w-64 z-10 text-2xl">
              <router-link
                to="/commercial-form"
                class="block text-brown p-2"
                active-class="text-tealdark"
                >COMMERCIAL FORM</router-link
              >
              <router-link
                to="/residential-form"
                class="block text-brown p-2"
                active-class="text-tealdark"
                >RESIDENTIAL FORM</router-link
              >
            </div>
          </div>
          <router-link
            to="/gallery"
            class="block text-brown mb-2"
            active-class="text-tealdark"
            >GALLERY</router-link
          >
          <router-link
            to="/contact"
            class="block text-brown"
            active-class="text-tealdark"
            >CONTACT</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarTop",
  // components: {SocialIcons},
  props: ["currentRoute"],
  data() {
    return {
      isMenuOpen: false,
      showDropdown: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
  watch: {
    $route() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style>
.menu {
  /* TO DO: come maybe just use css, something buggy comes form tailwind */
  margin: 0 !important;
}

.chevron {
  transform: rotate(0);
  transition: transform 0.25s ease-out;
}

.chevron.animate-chevron {
  transform: rotate(-180deg);
}

@media screen and (max-width: 612px) {
  #socials {
    display: none;
  }
}
</style>
