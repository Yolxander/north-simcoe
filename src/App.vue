<template>
  <div class="overflow-hidden wrapper">
    <TopNavBar :current-route="$route.path" />
    <NavBarSide :current-route="$route.path" />
    <router-view />
    <FooterGlobal />
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import TopNavBar from "./components/NavBarTop.vue";
import NavBarSide from "./components/NavBarSide.vue";
import FooterGlobal from "./components/FooterGlobal.vue";
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import router from "./router";

export default {
  components: {
    TopNavBar,
    NavBarSide,
    FooterGlobal,
  },
  setup() {
    const siteData = reactive({
      title: `North Simcoe Property Management in Simcoe County`,
      description: `North Simcoe Property Management is a leading full service property management company in Simcoe County. Contact us today`,
    });

    // Local Business JSON-LD Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "North Simcoe Property Management",
      "telephone": "+1 (647) 500-1747",
      "email": "info@northsimcoepm.ca",
      "url": "https://northsimcoepm.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Simcoe County",
        "addressRegion": "Ontario",
        "addressRegionCode": "ON",
        "addressCountry": "CA",
        "addressCountryCode": "CA"
      },
      "@id": "https://northsimcoepm.com",
      "areaServed": [
        {
          "@type": "City",
          "name": "Simcoe County"
        },
        {
          "@type": "City",
          "name": "York Region"
        },
        {
          "@type": "City",
          "name": "Peel Region"
        },
        {
          "@type": "City",
          "name": "Dufferin County"
        },
        {
          "@type": "City",
          "name": "Niagara Region"
        },
        {
          "@type": "City",
          "name": "Muskoka"
        },
        {
          "@type": "City",
          "name": "Bolton"
        },
        {
          "@type": "City",
          "name": "Bradford"
        },
        {
          "@type": "City",
          "name": "Caledon"
        },
        {
          "@type": "City",
          "name": "Newmarket"
        },
        {
          "@type": "City",
          "name": "Barrie"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/share/1FdDUTEdVB/?mibextid=wwXIfr",
        "https://www.instagram.com/northsimcoe_propertymanagement?igsh=NHVzNWUwdTE4OTcx&utm_source=qr",
        "https://www.youtube.com/@NorthSimcoePropertyManagement/shorts"
      ]
    };

    // Organization JSON-LD Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "North Simcoe Property Management",
      "alternateName": "North Simcoe PM",
      "url": "https://northsimcoepm.com",
      "logo": "https://northsimcoepm.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-647-500-1747",
        "contactType": "Customer Service",
        "email": "info@northsimcoepm.ca",
        "areaServed": ["CA"],
        "availableLanguage": ["en"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Simcoe County",
        "addressRegion": "Ontario",
        "addressRegionCode": "ON",
        "addressCountry": "CA",
        "addressCountryCode": "CA"
      },
      "sameAs": [
        "https://www.facebook.com/share/1FdDUTEdVB/?mibextid=wwXIfr",
        "https://www.instagram.com/northsimcoe_propertymanagement?igsh=NHVzNWUwdTE4OTcx&utm_source=qr",
        "https://www.youtube.com/@NorthSimcoePropertyManagement/shorts"
      ],
      "description": "North Simcoe Property Management is a full service property management company providing professional landlord and tenant services for residential, commercial, and mixed-use properties in Simcoe County, York, Peel, Dufferin, Hamilton, Niagara, and Muskoka regions."
    };

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify(localBusinessSchema),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(organizationSchema),
        },
      ],
    });
  },
  router,
};
</script>

<style></style>
