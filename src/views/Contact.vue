<template>
  <HeroGlobal :hero="hero" />
  <div
    class="max-w-screen-xl p-10 md:p-32 mx-auto flex flex-col md:flex-row md:items-center md:space-x-8 md:gap-5"
  >
    <!-- Left Section -->
    <div class="py-10 md:py-0 md:w-3/5">
      <h1
        class="text-3xl font-semibold mb-4 text-brown font-archivo font-semibold"
      >
        Contact Us
      </h1>
      <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
      <p class="text-brown mb-6 font-open-sans text-xl">
        Get in touch with us for any inquiries.
      </p>

      <!-- Email Section -->
      <div class="flex items-center mb-4">
        <font-awesome-icon
          :icon="['fas', 'envelope']"
          class="text-teal mr-4 text-2xl"
        />
        <a
          href="mailto:hello@myemaildigital.com"
          class="text-2xl font-semibold mb-4 text-brown font-archivo hover:underline"
          >info@northsimcoepm.com</a
        >
      </div>

      <!-- Phone Section -->
      <div class="flex items-center mb-4">
        <font-awesome-icon
          :icon="['fas', 'phone']"
          class="text-teal mr-4 text-2xl"
        />
        <a
          href="tel:+1(555)-123-4567"
          class="text-2xl font-semibold mb-4 text-brown font-archivo hover:underline"
          >+1(555)-123-4567</a
        >
      </div>

      <!-- Office Section -->
      <div class="flex items-center mb-4">
        <font-awesome-icon
          :icon="['fas', 'map-marker-alt']"
          class="text-teal mr-4 text-2xl"
        />
        <span class="text-2xl font-semibold mb-4 text-brown font-archivo"
          >123 Main Street, Anytown, USA</span
        >
      </div>

      <a href="#" class="text-blue-500 hover:underline">Get Directions ></a>
    </div>

        <!-- Right Section - Map -->
        <div className="md:w-2/5 bg-gray-200 rounded-lg p-4 map-container">
            <!-- Embed your map here -->
            <div id="map"></div>
        </div>
    </div>
    <ContactUs/>
</template>

<script>
import "tailwindcss/tailwind.css";
import ContactUs from "../components/ContactUs.vue";
import HeroGlobal from "../components/HeroGlobal.vue";

// Import OpenLayers dependencies
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import {defaults as defaultControls, ScaleLine} from "ol/control";
import {Tile as TileLayer, Vector as VectorLayer} from "ol/layer";
import {OSM, Vector as VectorSource} from "ol/source";

export default {
    name: "ContactPage",
    components: {
        ContactUs,
        HeroGlobal,
    },
    data() {
        return {
            hero: {
                title: "CONTACTS",
            },
        };
    },
    async mounted() {
        await this.initiateMap();
        this.$nextTick(() => {
            this.map.updateSize();
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
                    attribution: false,  // Disable the attribution control
                    zoom: true,  // Keep the zoom control
                }).extend([
                    new ScaleLine({
                        units: "degrees",
                    }),
                ]),
                target: "map",
                layers: [raster, vector],
                view: new View({
                    projection: "EPSG:4326",
                    center: [-79.95, 44.4773],  // Update the center coordinates here
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
