<template>
  <div
    class="max-w-screen-xl p-10 md:p-28 mx-auto flex flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
  >
    <div class="py-10 md:py-0 md:w-1/2">
      <h2 class="text-sm font-semibold mb-4 text-brown font-archivo">
        {{ title }}
      </h2>
      <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
      <h3 class="text-3xl font-semibold mb-4 text-brown font-archivo">
        {{ subtitle }}
      </h3>
      <p class="font-open-sans text-2xl">
        {{ description }}
      </p>
    </div>
    <div class="md:w-1/2 relative">
      <h3 class="text-2xl font-semibold mb-4 text-brown font-archivo">
        {{ areasTitle }}
      </h3>
      <div class="flex flex-wrap font-open-sans text-2xl justify-left">
        <div class="pr-4">
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Barrie
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Midland
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Orillia
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Everett
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Muskoka
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Bradford
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Newmarket/Aurora
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Shelburne
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Bolton
          </p>
        </div>
        <div>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Innisfil
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Alliston
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Tottenham
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Caledon
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Orangeville
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Vaughan
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Georgina
          </p>
          <p>
            <font-awesome-icon
              class="mr-4 text-teal text-3xl"
              :icon="['fas', 'location-dot']"
            />Keswick
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceAriaHome",
  props: {
    title: {
      type: String,
      default: "SERVICE AREA",
    },
    subtitle: {
      type: String,
      default: "Explore Our Coverage Area.",
    },
    description: {
      type: String,
      default:
        "Don’t worry - we got you covered. Our team services across Simcoe County, York, Dufferin, Muskoka, and Peel Regions.",
    },
    areasTitle: {
      type: String,
      default: "Some of the many areas we professionally manage properties in:",
    },
  },
};
</script>

<style></style>
