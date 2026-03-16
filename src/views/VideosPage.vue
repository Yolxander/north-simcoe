<template>
  <HeroGlobal :hero="hero" />
  <ObserverComponent classToToggle="fadeInTop" playOnce="true">
    <div class="p-12 md:p-24 text-center">
      <h3 class="text-3xl font-semibold text-brown font-archivo mb-4">
        Property Management Videos
      </h3>
      <p class="text-brown font-open-sans text-xl">
        Watch our latest videos covering property management tips, property tours, and more.
        <a href="/contact" class="text-teal hover:underline font-semibold">Contact us</a> to learn how we can help manage your property.
      </p>
    </div>
  </ObserverComponent>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-12 md:px-24"
  >
    <ObserverComponent
      v-for="video in videos"
      :key="video.id"
      :classToToggle="video.id % 2 === 0 ? 'fadeInTop' : 'fadeInBottom'"
      playOnce="true"
    >
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="aspect-video bg-gray-200 flex items-center justify-center">
          <svg
            class="w-16 h-16 text-teal opacity-60"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div class="p-4">
          <h4 class="text-lg font-semibold text-brown font-archivo mb-2">
            {{ video.title }}
          </h4>
          <p class="text-sm text-gray-600 font-open-sans">
            {{ video.description }}
          </p>
        </div>
      </div>
    </ObserverComponent>
  </div>
  <ObserverComponent classToToggle="fadeInRight" playOnce="true">
    <MailchimpSignup />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInBottom" playOnce="true">
    <ContactUs />
  </ObserverComponent>
</template>

<script>
import "tailwindcss/tailwind.css";
import ContactUs from "../components/ContactUs.vue";
import HeroGlobal from "../components/HeroGlobal.vue";
import MailchimpSignup from "../components/MailchimpSignup.vue";
import ObserverComponent from "../components/IntersectionObserver.vue";

export default {
  name: "VideosPage",
  components: {
    ContactUs,
    HeroGlobal,
    MailchimpSignup,
    ObserverComponent,
  },
  data() {
    return {
      hero: {
        title: "VIDEOS",
      },
      videos: [
        {
          id: 1,
          title: "Property Management Tips",
          description:
            "Essential tips for landlords and property owners to maximize their investment.",
          videoUrl: "",
          thumbnailUrl: "",
        },
        {
          id: 2,
          title: "Tenant Guide",
          description:
            "Everything tenants need to know about renting with North Simcoe.",
          videoUrl: "",
          thumbnailUrl: "",
        },
        {
          id: 3,
          title: "Property Tour",
          description:
            "Take a virtual tour of some of our beautifully managed properties.",
          videoUrl: "",
          thumbnailUrl: "",
        },
        {
          id: 4,
          title: "Maintenance Best Practices",
          description:
            "Learn about our proactive maintenance approach to keep your property in top shape.",
          videoUrl: "",
          thumbnailUrl: "",
        },
        {
          id: 5,
          title: "Commercial Properties",
          description:
            "Discover our commercial property management services and available spaces.",
          videoUrl: "",
          thumbnailUrl: "",
        },
        {
          id: 6,
          title: "Client Testimonials",
          description:
            "Hear from our satisfied clients about their experience with North Simcoe.",
          videoUrl: "",
          thumbnailUrl: "",
        },
      ],
    };
  },
};
</script>

<style></style>
