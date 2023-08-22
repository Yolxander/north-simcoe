<template>
  <div
    class="border-double border-r-8 border-teal flex flex-col justify-between w-20 h-screen p-4 fixed z-10 bg-white top-0 hidden md:flex"
  >
    <!-- Logo -->
    <router-link to="/" class="flex items-center">
      <img src="../assets/logo.png" class="mr-3" alt="North Simcoe Logo" />
    </router-link>

    <!-- Social Icons -->
    <div v-if="showIcons"  class="flex flex-col items-center mb-4">
      <a href="#" class="text-brown hover:text-gray-800">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a href="#" class="text-brown hover:text-gray-800">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </a>
      <a href="#" class="text-brown hover:text-gray-800">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarSide",
    props: ['currentRoute'],

    data() {
        return {
            showIcons: true,
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
        handleRouteChange() {
            if(this.currentRoute === '/'){
                console.log(this.currentRoute)
                this.showIcons = false
            } else {
                this.showIcons = true
                console.log(this.currentRoute)
            }
        }
    },
};
</script>
