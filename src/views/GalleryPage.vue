<template>
  <HeroGlobal :hero="hero" />
  <div class="pl-8 py-12 md:p-24">
    <h3 class="text-2xl font-semibold text-brown font-archivo">
      See some of the beautiful properties we manage!
    </h3>
  </div>
  <div
    class="grid grid-cols-2 md:grid-cols-4 gap-4 pr-8 pl-8 pb-12 md:pl-24 md:pr-12"
  >
    <div class="grid gap-4">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
          alt=""
        />
      </div>
    </div>
  </div>

  <ContactUs />
</template>

<script>
import "tailwindcss/tailwind.css";
import ContactUs from "../components/ContactUs.vue";
import HeroGlobal from "../components/HeroGlobal.vue";

export default {
  name: "GalleryPage",
  components: {
    ContactUs,
    HeroGlobal,
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
