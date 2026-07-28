<template>
  <HeroGlobal :hero="hero" />
  <ObserverComponent classToToggle="fadeInTop" playOnce="true">
    <section class="max-w-6xl mx-auto w-full py-16 md:py-20 px-8 md:px-12 flex flex-col md:flex-row gap-12 md:gap-16 items-start">
      <!-- Map Area -->
      <div class="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg map-container bg-gray-100">
        <div id="map"></div>
      </div>

      <!-- Contact Details -->
      <div class="w-full md:w-1/2 flex flex-col pt-0 md:pt-8">
        <h3 class="text-sm font-semibold tracking-wider uppercase text-brown font-archivo mb-2">
          How to find us
        </h3>
        <div class="w-12 h-1 bg-teal mb-6"></div>
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-brown font-archivo">
          Contact info
        </h2>
        <p class="text-gray-600 mb-10 font-open-sans text-lg leading-relaxed">
          Get in touch with us for any inquiries. Learn more about our <a href="/services" class="text-teal hover:underline font-semibold">property management services</a> or <a href="/our-company" class="text-teal hover:underline font-semibold">meet our team</a>.
        </p>

        <div class="space-y-8">
          <!-- Email -->
          <div class="flex items-start gap-4">
            <div class="mt-1 text-teal text-3xl flex-shrink-0">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </div>
            <div>
              <h4 class="font-bold text-xl mb-1 text-brown font-archivo">Email</h4>
              <p class="text-gray-600 mb-1 font-open-sans">Send us an email</p>
              <a href="mailto:info@northsimcoepm.ca" @click="trackEmailClick" class="text-brown text-lg font-open-sans hover:text-teal transition-colors">info@northsimcoepm.ca</a>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex items-start gap-4">
            <div class="mt-1 text-teal text-3xl flex-shrink-0">
              <font-awesome-icon :icon="['fas', 'phone']" />
            </div>
            <div>
              <h4 class="font-bold text-xl mb-1 text-brown font-archivo">Phone</h4>
              <p class="text-gray-600 mb-1 font-open-sans">Give us a call</p>
              <a href="tel:+16475001747" @click="trackPhoneClick" class="text-brown text-lg font-open-sans hover:text-teal transition-colors">+1 (647) 500-1747</a>
            </div>
          </div>

          <!-- Address -->
          <div class="flex items-start gap-4">
            <div class="mt-1 text-teal text-3xl flex-shrink-0">
              <font-awesome-icon :icon="['fas', 'location-dot']" />
            </div>
            <div>
              <h4 class="font-bold text-xl mb-1 text-brown font-archivo">Address</h4>
              <p class="text-brown text-lg mb-2 font-open-sans">Simcoe County, Ontario, Canada</p>
              <p class="text-gray-600 font-open-sans leading-relaxed">Serving: Simcoe County, York, Peel, Dufferin and Muskoka Regions. Cities include: Bolton, Bradford, Caledon, Newmarket, Barrie, and more.</p>
            </div>
          </div>

          <!-- Follow Us -->
          <div class="flex items-start gap-4">
            <div class="mt-1 text-teal text-3xl flex-shrink-0">
              <font-awesome-icon :icon="['fas', 'share-nodes']" />
            </div>
            <div>
              <h4 class="font-bold text-xl mb-1 text-brown font-archivo">Follow Us</h4>
              <p class="text-gray-600 mb-3 font-open-sans">Connect with us on social media</p>
              <div class="flex gap-4">
                <a href="https://www.facebook.com/share/1FdDUTEdVB/?mibextid=wwXIfr" @click="trackSocialClick('facebook')" target="_blank" class="text-brown hover:text-teal text-2xl transition-colors">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
                <a href="https://www.instagram.com/northsimcoe_propertymanagement?igsh=NHVzNWUwdTE4OTcx&utm_source=qr" @click="trackSocialClick('instagram')" target="_blank" class="text-brown hover:text-teal text-2xl transition-colors">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
                <a href="https://www.youtube.com/@NorthSimcoePropertyManagement/shorts" @click="trackSocialClick('youtube')" target="_blank" class="text-brown hover:text-teal text-2xl transition-colors">
                  <font-awesome-icon :icon="['fab', 'youtube']" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ObserverComponent>

  <ObserverComponent classToToggle="fadeInTop" playOnce="true">
    <section class="max-w-6xl mx-auto w-full py-16 px-8 md:px-12 flex justify-start relative">
      <div class="relative w-full max-w-lg">
        <!-- Decorative background square -->
        <div class="absolute -right-8 -top-8 w-64 h-64 bg-teal/60 z-0 rounded-lg"></div>
        <!-- Card Content -->
        <div class="relative z-10 bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-100 p-2">
          <img
            src="/photos/88C3C4CD-C5F1-4F57-9DAD-202C9AECEA76.JPEG"
            alt="North Simcoe Property Management contact information graphic"
            class="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </section>
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
import { trackEvent } from "../services/analytics";
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
      const source = new VectorSource();
      const vector = new VectorLayer({
        source,
      });
      const raster = new TileLayer({
        source: new OSM(),
      });
      this.map = new Map({
        controls: defaultControls({
          attribution: false,
          zoom: true,
        }).extend([
          new ScaleLine({
            units: "degrees",
          }),
        ]),
        target: "map",
        layers: [raster, vector],
        view: new View({
          projection: "EPSG:4326",
          center: [-79.95, 44.4773],
          zoom: 8.5,
        }),
      });
    },
    trackPhoneClick() {
      trackEvent("phone_click", {
        event_category: "contact",
        event_label: "contact_page"
      });
    },
    trackEmailClick() {
      trackEvent("email_click", {
        event_category: "contact",
        event_label: "contact_page"
      });
    },
    trackSocialClick(platform) {
      trackEvent("social_click", {
        event_category: "engagement",
        event_label: platform
      });
    }
  },
};
</script>

<style>
.map-container {
  position: relative;
  height: 400px;
}

@media (min-width: 768px) {
  .map-container {
    height: 500px;
  }
}

#map {
  position: absolute;
  inset: 0;
}
</style>
