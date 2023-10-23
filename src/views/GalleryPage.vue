<template>
  <HeroGlobal :hero="hero" />
  <ObserverComponent classToToggle="fadeInTop" playOnce="true">
    <div class="p-12 md:p-24 text-center">
      <h3 class="text-3xl font-semibold text-brown font-archivo">
        See some of the beautiful properties we manage
      </h3>
    </div>
  </ObserverComponent>
  <div
    class="grid grid-cols-2 md:grid-cols-3 gap-4 pr-8 pl-8 pb-12 md:pl-24 md:pr-12"
  >
    <ObserverComponent classToToggle="fadeInTop" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery1.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInBottom" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery2.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInTop" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery6.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInTop" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery4.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInBottom" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery5.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInTop" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery3.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInTop" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery13.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInBottom" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery8.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInTop" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery9.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInTop" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery14.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInBottom" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery16.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInTop" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery12.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInTop" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery7.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInBottom" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery10.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInTop" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery11.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInTop" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery17.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
    <ObserverComponent classToToggle="fadeInBottom" playOnce="true">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="../assets/gallery/gallery15.jpg"
          alt=""
        />
      </div>
    </ObserverComponent>
  </div>
  <ContactUs />
</template>

<script>
import "tailwindcss/tailwind.css";
import ContactUs from "../components/ContactUs.vue";
import HeroGlobal from "../components/HeroGlobal.vue";
import ObserverComponent from "../components/IntersectionObserver.vue";

export default {
  name: "GalleryPage",
  components: {
    ContactUs,
    HeroGlobal,
    ObserverComponent,
  },
  data() {
    return {
      hero: {
        title: "GALLERY",
      },
    };
  },
};
</script>

<style></style>
