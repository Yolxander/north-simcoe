<template>
  <div class="max-w-screen-xl mx-auto py-8">
    <div
      :class="[
        'max-w-screen-xl p-10 pr-4 md:pl-28 md:py-10 mx-auto flex',
        { 'flex-row-reverse': left },
        'flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5',
      ]"
    >
      <div class="md:w-1/2 self-end mb-6 md:mb-0">
        <h2 class="text-sm font-semibold mb-4 text-brown font-archivo">
          {{ intro[0].title }}
        </h2>
        <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
        <h3 class="text-3xl font-semibold mb-4 text-brown font-archivo">
          {{ intro[0].subtitle }}
        </h3>
        <p class="font-open-sans text-2xl text-brown" v-html="intro[0].textleft">
        </p>
      </div>
      <div class="md:w-1/2 self-end font-open-sans text-2xl text-brown">
        <p v-html="intro[0].textrightP1">
        </p>
        <br />
        <p v-html="intro[0].textrightP2">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutTwoSections",
  props: {
    intro: {
      type: Array,
    },
    serviceAreas: {
      type: Array,
    },
    left: Boolean,
  },
};
</script>

<style></style>
