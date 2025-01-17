<template>
  <HeroGlobal :hero="hero" />
  <ObserverComponent classToToggle="fadeInTop" playOnce="true">
    <div
      class="max-w-screen-xl p-10 md:p-32 mx-auto flex flex-col md:flex-row md:items-center md:space-x-8 md:gap-5"
    >
      <!-- Left Section -->
      <div class="md:py-0 md:w-3/5">
        <h2 class="text-sm font-semibold mb-4 text-brown font-archivo">
          HOW TO FIND US
        </h2>
        <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
        <h3 class="text-3xl font-semibold mb-4 text-brown font-archivo">
          Contact info
        </h3>
        <p class="text-brown mb-6 font-open-sans text-xl">
          Get in touch with us for any inquiries.
        </p>

        <!-- Email Section -->
        <div class="flex items-start content-center mb-4">
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            class="text-teal mr-4 text-5xl"
          />
          <div class="animate-link">
            <h3 class="text-xl font-semibold text-brown font-archivo align-end">
              Email
            </h3>
            <p class="font-open-sans text-brown text-2xl">Send us an email</p>
            <a
              href="mailto:info@northsimcoepm.ca"
              class="font-open-sans text-brown text-xl md:text-2xl animate-link"
              >info@northsimcoepm.ca</a
            >
          </div>
        </div>

        <div class="flex items-start content-center mb-4">
          <font-awesome-icon
            :icon="['fas', 'phone']"
            class="text-teal mr-4 text-5xl"
          />
          <div class="animate-link">
            <h3 class="text-xl font-semibold text-brown font-archivo align-end">
              Phone
            </h3>
            <p class="font-open-sans text-brown text-2xl">Give us a call</p>
            <a
              href="tel:+1(647)-500-1747"
              class="font-open-sans text-brown text-xl md:text-2xl"
            >
              +1 (647) 500-1747
            </a>
          </div>
        </div>

        <div class="flex items-start content-center mb-4">
          <font-awesome-icon
            :icon="['fas', 'map-marker-alt']"
            class="text-teal mr-4 text-6xl"
          />
          <div>
            <!-- <div class="flex"> -->
            <h3 class="text-xl font-semibold text-brown font-archivo align-end">
              Area
            </h3>
            <p class="font-open-sans text-brown text-xl md:text-2xl">
              Simcoe, York, Peel, Dufferin, Niagara and Muskoka Regions
            </p>
          </div>
        </div>
      </div>

      <!-- Right Section - Map -->
      <div className="md:w-2/5 bg-gray-200 rounded-lg p-4 map-container">
        <!-- Embed your map here -->
        <div id="map"></div>
      </div>
    </div>
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInBottom" playOnce="true">
    <ContactUs />
  </ObserverComponent>
</template>

<script>
import "tailwindcss/tailwind.css";
import ContactUs from "../components/ContactUs.vue";
import HeroGlobal from "../components/HeroGlobal.vue";
import ObserverComponent from "../components/IntersectionObserver.vue";

// Import OpenLayers dependencies
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { defaults as defaultControls, ScaleLine } from "ol/control";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { useHead } from "@vueuse/head";

export default {
  name: "ContactPage",
  components: {
    ContactUs,
    HeroGlobal,
    ObserverComponent,
  },
  data() {
    return {
      hero: {
        title: "CONTACT",
      },
    };
  },
  async mounted() {
    await this.initiateMap();
    this.$nextTick(() => {
      this.map.updateSize();
    });
  },
  setup() {
    useHead({
      // Can be static or computed
      title: "Contacts",
      meta: [
        {
          name: `description`,
          content: "this is the contact page",
        },
      ],
    });
  },
  methods: {
    initiateMap() {
      // create vector layer
      var source = new VectorSource();
      var vector = new VectorLayer({
        source: source,
      });
      // create title layer
      var raster = new TileLayer({
        source: new OSM(),
      });
      // create map with 2 layers
      this.map = new Map({
        controls: defaultControls({
          attribution: false, // Disable the attribution control
          zoom: true, // Keep the zoom control
        }).extend([
          new ScaleLine({
            units: "degrees",
          }),
        ]),
        target: "map",
        layers: [raster, vector],
        view: new View({
          projection: "EPSG:4326",
          center: [-79.95, 44.4773], // Update the center coordinates here
          zoom: 8.5,
        }),
      });
    },
  },
};
</script>

<style>
/* Parent div */
.map-container {
  position: relative;
  height: 50vh;
}

/* Map container */
#map {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* Add other styles as needed */
</style>

<style></style>
