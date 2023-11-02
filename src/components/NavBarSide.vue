<template>
  <div
    class="border-double border-r-8 border-teal flex flex-col justify-between w-20 h-screen p-4 fixed z-10 bg-white top-0 hidden md:flex z-30 fixed"
  >
    <router-link to="/" class="flex items-center">
      <img
        src="../assets/logo.png"
        class="mr-3 cursor-pointer"
        alt="North Simcoe Logo"
      />
    </router-link>

    <div class="flex flex-col items-center mb-4">
      <a
        href="https://www.instagram.com/northsimcoe_propertymanagement/?hl=en"
        class="text-brown hover:text-gray-800 text-2xl"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a
        href="https://www.alpha.facebook.com/people/North-Simcoe-Property-Management/100091986706375/?mibextid=LQQJ4d"
        class="text-brown hover:text-gray-800 text-2xl"
      >
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarSide",
};
</script>
