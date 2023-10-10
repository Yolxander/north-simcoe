<template>
  <div class="max-w-screen-xl mx-auto py-8">
    <div
      class="max-w-screen-xl p-10 md:p-28 md:pr-0 mx-auto flex flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
    >
      <div class="md:w-1/3">
        <h2
          class="text-sm font-extrabold mb-4 text-brown font-libre-baskerville"
        >
          WHAT WE DO
        </h2>
        <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
        <h3
          class="text-3xl font-extrabold mb-4 text-brown font-libre-baskerville"
        >
          Our services lorem ipsum dolor.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          purus eget ligula aliquam, eu fermentum lectus feugiat. Sed sit amet
          nisl quis ipsum gravida congue. Aenean ut mi nunc. Donec facilisis
          tristique arcu vel venenatis.
        </p>

        <button
                @click="navigateToServicesPage"
          type="button"
          class="w-[80px] h-[80px] text-brown bg-teal font-bold rounded-full text-sm px-5 py-2.5 text-center mt-3 hover:bg-tealdark hover:text-white focus:outline-none focus:ring-4 focus:ring-tealdark"
        >
          FIND OUT MORE
        </button>

      </div>
      <div
        class="flex justify-center flex-wrap py-4 md:py-0 md:w-2/3 text-brown text-center"
      >
        <div>
          <div
            class="w-full md:w-56 p-2 border-solid border-teal border-4 rounded-xl mb-4 mr-4"
          >
            <font-awesome-icon
              :icon="['fas', 'house-chimney']"
              class="text-5xl mb-2"
            />
            <h4 class="font-bold mb-2 font-libre-baskerville">
              RESIDENTIAL PROPERTY MANAGEMENT
            </h4>
            <p class="font-source-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div
            class="w-full md:w-56 p-2 border-solid border-teal border-4 rounded-xl mb-4 mr-4"
          >
            <font-awesome-icon
              :icon="['fas', 'building']"
              class="text-5xl mb-2"
            />
            <h4 class="font-bold mb-2 font-libre-baskerville">
              COMMERCIAL PROPERTY MANAGEMENT
            </h4>
            <p class="font-source-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div>
          <div
            class="w-full md:w-56 p-2 border-solid border-teal border-4 rounded-xl mb-4"
          >
            <font-awesome-icon
              :icon="['fas', 'dollar-sign']"
              class="text-5xl mb-2"
            />
            <h4 class="font-bold mb-2 font-libre-baskerville">
              CUSTOM PRICING
            </h4>
            <br />
            <p class="font-source-serif">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur, quos?
            </p>
          </div>
          <div
            class="w-full md:w-56 p-2 border-solid border-teal border-4 rounded-xl mr-4"
          >
            <font-awesome-icon
              :icon="['fas', 'screwdriver-wrench']"
              class="text-5xl mb-2"
            />
            <h4 class="font-bold mb-2 font-libre-baskerville">
              FULL PROPERTY MAINTENANCE
            </h4>
            <p class="font-source-serif">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, illo
              molestiae.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "WhatWeDo",
    methods: {
        navigateToServicesPage() {
            this.$router.push({ name: 'ServicesPage' });
        },
    }
};
</script>

<style></style>
