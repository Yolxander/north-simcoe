<template>
  <div class="flex flex-wrap">
    <div
      class="w-full md:w-1/2 p-4 bg-teal-500 text-white flex items-center justify-center"
    >
      <div>
        <h1 class="text-4xl font-bold">{{ number }}</h1>
        <!-- <font-awesome-icon :icon="['fas', 'iconName']" class="text-5xl mt-2" /> -->
      </div>
    </div>

    <div class="w-full md:w-1/2 p-4">
      <div>
        <h2 class="text-2xl font-bold">{{ title }}</h2>
        <div v-if="paragraph && paragraph.length">
          <p v-for="(p, index) in paragraph" :key="index">
            {{ p }}
          </p>
        </div>

        <ul v-if="bulletPoints && bulletPoints.length">
          <li v-for="(point, index) in bulletPoints" :key="index">
            {{ point }}
          </li>
        </ul>

        <div v-if="paragraph2 && paragraph2.length">
          <p v-for="(p2, index) in paragraph2" :key="index">
            {{ p2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServiceCard",
  props: {
    number: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    paragraph: {
      type: [String],
    },
    bulletPoints: {
      type: [String],
    },
    paragraph2: {
      type: [String],
    },
  },
});
</script>

<style></style>
