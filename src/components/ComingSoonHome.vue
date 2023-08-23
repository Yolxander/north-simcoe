<template>
  <div class="hero-container">
    <div class="hero-overlay"></div>
    <!-- Bluish overlay -->
    <div
      class="flex md:flex-row md:items-center md:space-x-8 md:justify-between max-w-screen-xl h-screen p-10 pt-20 md:p-28 mx-auto relative"
    >
      <div class="flex flex-col justify-center md:w-4/5 font-libre-baskerville space-y-6">
<!--        <hr class="w-10 md:w-48 h-1 my-4 border-0 rounded bg-white" />-->
        <h2 class="text-4xl md:text-7xl font-bold mb-4 text-white">
            Coming Soon
        </h2>
          <p class="text-white w-[60%] text-2xl">
              Exciting things are just around the corner at Simcoe Property Management! While we're preparing to unveil something special, we want to ensure you have all the essential information at your fingertips:
          </p>
<!--        <hr class="w-10 md:w-48 h-1 my-4 border-0 rounded bg-white" />-->
              <div>
                  <SubscriptionForm />
              </div>
      </div>

    </div>

  </div>
</template>

<script>
import SubscriptionForm from './SubscriptionForm.vue'

export default {
  name: "HeroHome",
    components: {
        SubscriptionForm
    }
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
