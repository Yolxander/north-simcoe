<template>
  <HeroGlobal :hero="hero" />
  <ObserverComponent classToToggle="fadeInTop" :playOnce="true">
    <div class="pl-10 md:pl-48 pr-10 md:pr-48 py-12 md:py-24 text-center">
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
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-10 md:pl-48 pr-10 md:pr-48 pb-12"
  >
    <ObserverComponent
      v-for="video in videos"
      :key="video.id"
      :classToToggle="video.id % 2 === 0 ? 'fadeInTop' : 'fadeInBottom'"
      :playOnce="true"
    >
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          type="button"
          class="aspect-video w-full bg-gray-200 flex items-center justify-center group relative"
          @click="openVideo(video)"
          :aria-label="`Play video: ${video.title}`"
        >
          <video
            class="absolute inset-0 w-full h-full object-cover"
            :src="video.videoUrl + '#t=1'"
            preload="metadata"
            muted
            playsinline
            :alt="`${video.title} thumbnail`"
          />
          <div class="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />
          <svg
            class="w-16 h-16 text-teal opacity-60 group-hover:opacity-90 transition-opacity"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <div class="p-4">
          <h4 class="text-lg font-semibold text-brown font-archivo mb-2">
            {{ video.title }}
          </h4>
          <p class="text-sm text-gray-600 font-open-sans">
            {{ video.description }}
          </p>
          <button
            type="button"
            class="mt-4 inline-flex items-center text-teal hover:underline font-semibold"
            @click="openVideo(video)"
          >
            Play
          </button>
        </div>
      </div>
    </ObserverComponent>
  </div>

  <div
    v-if="activeVideo"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    role="dialog"
    aria-modal="true"
    :aria-label="`Video player: ${activeVideo.title}`"
    @click.self="closeVideo"
    @keydown.esc="closeVideo"
    tabindex="0"
  >
    <div class="w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl">
      <div class="flex items-center justify-between px-4 py-3 border-b">
        <div class="font-archivo text-brown font-semibold">
          {{ activeVideo.title }}
        </div>
        <button
          type="button"
          class="text-brown/70 hover:text-brown font-semibold"
          @click="closeVideo"
          aria-label="Close video"
        >
          ✕
        </button>
      </div>
      <div class="aspect-video bg-black">
        <video
          v-if="activeVideoStreamUrl"
          ref="modalVideo"
          class="w-full h-full"
          :src="activeVideoStreamUrl"
          controls
          autoplay
          playsinline
        />
        <div v-else class="w-full h-full flex items-center justify-center text-white/80">
          Video link is missing or invalid.
        </div>
      </div>
    </div>
  </div>
  <ObserverComponent classToToggle="fadeInRight" :playOnce="true">
    <MailchimpSignup />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInBottom" :playOnce="true">
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
  constants: {
    SUPABASE_STORAGE_BASE_URL:
      "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/client-cms",
    VIDEO_FOLDER: "northsimcoe/loomly-videos",
    VIDEO_FILENAMES: [
      "Introducing Linda & Larry.mov",
      "About North Simcoe PM.MOV",
      "Aesthetic reel.mov",
      "Bad tenants = bad investments.mov",
      "Blooper Reel - April fools fun.mov",
      "Measure twice, cut once.mov",
      "Maintenance chaos.mov",
      "Maintenance Vs management.mov",
      "One missed regulation.mov",
      "Renting in Simcoe County is not the same as renting in Toronto.mp4",
      "Unit TLC.mov",
      "Weird things people leave behind.mov",
      "The right technology.mov",
      "Key Factors to look for.MOV",
      "Story Time.MOV",
      "Why good tenants leave.mov",
      "Why Hiring the Right Property Management Company Matters.MOV"
    ],
  },
  components: {
    ContactUs,
    HeroGlobal,
    MailchimpSignup,
    ObserverComponent,
  },
  computed: {
    activeVideoStreamUrl() {
      return this.activeVideo?.videoUrl || "";
    },
  },
  watch: {
    activeVideo(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.modalVideo?.play()?.catch(() => {});
          this.$refs.modalVideo?.focus?.();
        });
      }
    },
  },
  data() {
    return {
      hero: {
        title: "VIDEOS",
      },
      activeVideo: null,
      videos: [],
    };
  },
  mounted() {
    this.loadVideos();
  },
  methods: {
    loadVideos() {
      const baseUrl = this.$options.constants.SUPABASE_STORAGE_BASE_URL;
      const folder = this.$options.constants.VIDEO_FOLDER;
      const filenames = this.$options.constants.VIDEO_FILENAMES;

      this.videos = filenames.map((filename, index) => {
        const encodedName = encodeURIComponent(filename);
        const title = this.formatTitleFromFilename(filename);

        return {
          id: index + 1,
          title,
          description: `Watch ${title} from North Simcoe Property Management.`,
          videoUrl: `${baseUrl}/${folder}/${encodedName}`,
        };
      });
    },
    formatTitleFromFilename(filename) {
      const withoutExtension = filename.replace(/\.[^/.]+$/, "");
      const decoded = decodeURIComponent(withoutExtension);
      const cleaned = decoded
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/^north simcoe pm\s*/i, "")
        .replace(/^north simcoe\s*/i, "")
        .trim();

      if (!cleaned) {
        return "Property Management Video";
      }

      return cleaned
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },
    openVideo(video) {
      this.activeVideo = video;
    },
    closeVideo() {
      this.activeVideo = null;
    },
  },
};
</script>

<style></style>
