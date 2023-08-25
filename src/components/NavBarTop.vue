<template>
  <nav
    class="bg-transparent fixed z-20 md:h-auto md:right-0 w-full border-b-4 border-double border-teal md:border-b-0 backdrop-filter backdrop-blur-lg md:backdrop-blur-none"
  >
    <div
      class="w-full max-w-screen-xl flex flex-wrap items-center justify-between p-4 md:justify-end"
    >
      <!-- Flex container for "Call Us" and "Navigation Links" -->
      <div
        class="flex w-full justify-between items-center md:space-x-8 md:w-auto md:pl-2 md:border md:border-transparent md:border-solid md:border-1 md:backdrop-filter md:backdrop-blur-sm md:rounded"
      >
          <SocialIcons v-if="!showPhoneNumber" />

        <p v-if="showPhoneNumber"  class="text-brown">
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
                class=""
                fill="currentColor"
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              ></path>
            </svg>
            <span class="pl-2 hidden md:block">+1 (647) 500-1747</span>
          </a>
        </p >
        <!-- Logo -->
        <router-link to="/" class="flex items-center block md:hidden">
          <img
            src="../assets/logo-text.png"
            class="max-w-[200px]"
            alt="North Simcoe Logo"
          />
        </router-link>

        <div v-if="showPhoneNumber" >
          <div tabindex="1" @click="toggleMenu">
            <div
              class="line w-[35px] h-1 bg-brown mb-1 transition-opacity duration-300 ease"
              :class="{ 'opacity-0': isMenuOpen }"
            ></div>
            <div
              class="line w-[35px] h-1 bg-brown mb-1 transition-transform duration-300 ease transform"
              :class="{ 'rotate-45 absolute': isMenuOpen }"
            ></div>
            <div
              class="line w-[35px] h-1 bg-brown mb-1 transition-transform duration-300 ease transform"
              :class="{ '-rotate-45': isMenuOpen }"
            ></div>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
import SocialIcons from "@/components/SocialIcons.vue";
// import ContactUs from "@/components/ContactUs.vue";
// import HeroGlobal from "@/components/HeroGlobal.vue";
// import LayoutTwoSections from "@/components/LayoutTwoSections.vue";
export default {
  name: "NavBarTop",
    components: {SocialIcons},
    props: ['currentRoute'],
  data() {
    return {
      isMenuOpen: false,
        showPhoneNumber: true,
    };
  },
    created() {
        this.handleRouteChange()
    },


    watch: {
        currentRoute() {
            this.handleRouteChange()
        }
    },

    methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
      handleRouteChange() {
          if(this.currentRoute=== '/'){
              this.showPhoneNumber = false
          } else {
              this.showPhoneNumber = true
          }
      }
  },

};
</script>

<style>
/* Custom styling for the HeaderGlobal component here */
</style>
