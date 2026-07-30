<template>
  <!-- Split layout (desktop) + background (mobile) -->
  <div v-if="hero.split" class="hero-split-wrapper">
    <!-- Mobile: background image hero -->
    <div
      class="hero-container-global xl:h-[30vh] flex items-end md:items center p-10 pt-20 pl-10 md:pl-48 md:pb-10 md:hidden"
    >
      <div
        v-if="hero.mobileImage"
        class="hero-bg hero-bg-mobile"
        :class="{ 'hero-bg-flip': hero.flip }"
        :style="{ backgroundImage: `url('${hero.mobileImage}')` }"
      ></div>
      <div
        class="hero-overlay"
        :style="hero.gradient ? { background: hero.gradient } : {}"
      ></div>
      <div class="flex flex-col justify-center md:w-4/5 font-archivo absolute">
        <p class="text-m pr-2 md:mb-4 text-white font-semibold">
          NORTH SIMCOE PROPERTY MANAGEMENT
        </p>
        <hr class="w-10 md:w-48 h-1 my-4 border-0 rounded bg-white" />
        <h1 class="text-4xl md:text-7xl font-semibold mb-4 text-white">
          {{ hero.title }}
        </h1>
      </div>
    </div>
    <!-- Desktop: split layout -->
    <div class="hero-split-desktop hidden md:flex">
      <div
        class="hero-split-overlay"
        :style="hero.gradient ? { background: hero.gradient } : {}"
      ></div>
      <div class="hero-split-text">
        <p class="text-m pr-2 mb-4 text-white font-semibold font-archivo">
          NORTH SIMCOE PROPERTY MANAGEMENT
        </p>
        <hr class="w-48 h-1 my-4 border-0 rounded bg-white" />
        <h1 class="text-7xl font-semibold mb-4 text-white font-archivo">
          {{ hero.title }}
        </h1>
      </div>
      <div class="hero-split-image">
        <img
          :src="hero.splitImage || hero.mobileImage"
          :alt="hero.title"
          class="hero-split-img"
        />
      </div>
    </div>
  </div>
  <!-- Standard layout -->
  <div
    v-else
    class="hero-container-global xl:h-[30vh] flex items-end md:items center p-10 pt-20 pl-10 md:pl-48 md:pb-10"
  >
    <template v-if="hero.image">
      <div
        v-if="!hero.mobileImage"
        class="hero-bg"
        :class="{ 'hero-bg-flip': hero.flip }"
        :style="{ backgroundImage: `url('${hero.image}')` }"
      ></div>
      <div
        v-if="hero.mobileImage"
        class="hero-bg hidden md:block"
        :class="{ 'hero-bg-flip': hero.flip }"
        :style="{ backgroundImage: `url('${hero.image}')` }"
      ></div>
      <div
        v-if="hero.mobileImage"
        class="hero-bg hero-bg-mobile md:hidden"
        :class="{ 'hero-bg-flip': hero.flip }"
        :style="{ backgroundImage: `url('${hero.mobileImage}')` }"
      ></div>
    </template>
    <div
      class="hero-overlay"
      :style="hero.gradient ? { background: hero.gradient } : {}"
    ></div>
    <div class="flex flex-col justify-center md:w-4/5 font-archivo absolute">
      <p class="text-m pr-2 md:mb-4 text-white font-semibold">
        NORTH SIMCOE PROPERTY MANAGEMENT
      </p>
      <hr class="w-10 md:w-48 h-1 my-4 border-0 rounded bg-white" />
      <h1 class="text-4xl md:text-7xl font-semibold mb-4 text-white">
        {{ hero.title }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroGlobal",
  props: {
    hero: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
/* Custom styling for the Hero component here */
.hero-container-global {
  position: relative;
  background-image: url("../assets/hero-global.jpeg");
  background-size: cover;
  background-position: center;
  height: 90vh;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.hero-bg-flip {
  transform: scaleX(-1);
}

.hero-bg-mobile {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 128, 128, 0.6);
}

.hero-split-wrapper {
  width: 100%;
}

.hero-split-desktop {
  position: relative;
  min-height: 80vh;
  background-color: #14b8a6;
}

.hero-split-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.hero-split-text {
  position: relative;
  z-index: 1;
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 3rem 4rem 12rem;
}

.hero-split-image {
  position: relative;
  z-index: 1;
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem 2rem 2rem;
}

.hero-split-img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 0.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
</style>
