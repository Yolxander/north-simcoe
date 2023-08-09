<template>
  <div
    class="max-w-screen-xl p-10 md:p-28 mx-auto flex flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
  >
    <div class="flex justify-center md:w-1/2 relative">
      <img
        src="../assets/about1.jpg"
        alt="Your Image"
        class="z-10 md:max-w-[80%]"
      />
      <div
        class="before-image bg-teal absolute right-[-15px] md:right-[15px] top-[-15px] md:top-[-25px] w-[calc(60%+40px)] h-[calc(60%+40px)] bg-teal-500 z-[-1]"
      ></div>
    </div>
    <div class="py-10 md:py-0 md:w-1/2">
      <h2 class="text-sm font-extrabold mb-4 text-brown font-libre-baskerville">
        ABOUT US
      </h2>
      <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
      <h3
        class="text-3xl font-extrabold mb-4 text-brown font-libre-baskerville"
      >
        We are lorem ipsum dolor sit amet.
      </h3>
      <p class="font-source-serif">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
        purus eget ligula aliquam, eu fermentum lectus feugiat. Sed sit amet
        nisl quis ipsum gravida congue. Aenean ut mi nunc. Donec facilisis
        tristique arcu vel venenatis. Duis vehicula lacinia aliquam.
      </p>
      <button
        type="button"
        class="text-brown bg-teal font-bold rounded-full text-sm px-5 py-2.5 text-center mt-3 hover:bg-tealdark hover:text-white focus:outline-none focus:ring-4 focus:ring-tealdark"
      >
        READ MORE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsHome",
};
</script>

<style></style>
