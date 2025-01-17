<template>
  <div
    class="flex justify-center items-center flex-wrap p-10 md:pt-20 md:pl-48 md:pr-20"
  >
    <div :ref="`service-${service.id}`" class="max-w-screen-xl mx-auto py-8">
      <div
        class="flex flex-wrap md:flex-nowrap items-center justify-center"
        :class="service.iconPos === 'left' ? 'flex-row' : 'flex-row-reverse'"
      >
        <div class="text-center md:w-1/3">
          <font-awesome-icon
            :icon="['fas', service.icon]"
            class="text-9xl mb-2 text-teal"
          />
        </div>
        <!-- Text content -->
        <div class="md:w-2/3">
          <div class="card-body font-open-sans">
            <h3
              class="text-3xl font-semibold text-brown font-archivo py-6 text-center md:text-left"
            >
              {{ service.title }}
            </h3>
            <p
              v-for="(paragraph, index) in service.paragraph"
              :key="index"
              class="font-open-sans text-2xl text-brown mb-4"
            >
              {{ paragraph }}
            </p>
            <ul class="list-decimal list-inside pl-5">
              <li
                v-for="(item, index) in service.listItems"
                :key="'item-' + index"
                class="flex items-start font-open-sans text-2xl text-brown mb-4"
              >
                <font-awesome-icon
                  :icon="['fas', 'circle']"
                  class="text-sm mr-4 pt-3 text-teal"
                />
                {{ item }}
              </li>
            </ul>
            <p class="font-open-sans text-2xl text-brown mb-4">
              {{ service.paragraphEnd }}
              <a :href="service.phone" class="animate-link">
                {{ service.phone }}
              </a>
            </p>
              <a
                      v-if="isExternalLink(service.link) && service.linkTitle"
                      :href="service.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-brown bg-teal font-bold rounded-full text-sm px-5 py-2.5 text-center mt-3 hover:bg-tealdark hover:text-white focus:outline-none focus:ring-4 focus:ring-tealdark uppercase"

              >
                  {{ service.linkTitle }}
              </a>
              <router-link
                      v-else-if="service.link && service.linkTitle"
              :to="service.link"
              type="button"
              class="text-brown bg-teal font-bold rounded-full text-sm px-5 py-2.5 text-center mt-3 hover:bg-tealdark hover:text-white focus:outline-none focus:ring-4 focus:ring-tealdark uppercase"
            >
              {{ service.linkTitle }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    service: Object,
  },
    methods: {
        isExternalLink(link) {
            return /^(https?:\/\/)/.test(link);
        },
    },
};
</script>

<style></style>
