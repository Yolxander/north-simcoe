<template>
  <div class="max-w-screen-xl p-10 md:p-28 md:text-end">
    <h2
      class="text-sm font-semibold mb-4 text-brown font-semibold font-archivo"
    >
      TESTIMONIALS
    </h2>
    <hr class="w-10 h-1 my-4 border-0 rounded bg-teal mx-0 md:ml-auto" />

    <h3 class="text-3xl mb-4 text-brown font-semibold font-archivo">
      What our clients say about us.
    </h3>
  </div>
  <swiper
    :slides-per-view="1"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="bg-white rounded-lg shadow-md p-4">
        <svg
          class="w-10 h-10 mx-auto mb-3 text-teal dark:text-teal"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path
            d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
          />
        </svg>
        <blockquote>
          <p
            class="text-2xl italic font-medium text-brown dark:text-white font-open-sans"
          >
            "Recently we had to make some big changes that left our mothers
            condo available to rent. But, we lacked the time and knowledge to
            move forward. I met with Linda and was impressed with her knowledge,
            commitment and professionalism. She was assertive and the condo was
            rented within weeks of it being listed with a high quality tenant!
            Our family couldn’t be happier with this North Simcoe Property
            Management."
          </p>
        </blockquote>

        <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <div
            class="flex items-center divide-x-2 divide-teal dark:divide-teal"
          >
            <cite
              class="pr-3 font-medium text-brown dark:text-white font-open-sans"
              >Kelly Miner</cite
            >
            <cite class="pl-3 text-sm text-brown dark:text-white font-open-sans"
              >Landlord</cite
            >
          </div>
        </figcaption>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-white rounded-lg shadow-md p-4">
        <svg
          class="w-10 h-10 mx-auto mb-3 text-teal dark:text-teal"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path
            d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
          />
        </svg>
        <blockquote>
          <p
            class="text-2xl italic font-medium text-brown dark:text-white font-open-sans"
          >
            "Great company! They give me peace of mind. I live out of the
            country and I am always in the loop and I know my units are being
            property looked after. I never have to waits overly long periods of
            times For responses to my questions and the tenants are also happy!"
          </p>
        </blockquote>

        <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <div
            class="flex items-center divide-x-2 divide-teal dark:divide-teal"
          >
            <cite class="pl-3 text-sm text-brown dark:text-white font-open-sans"
              >D & L Properties</cite
            >
          </div>
        </figcaption>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-white rounded-lg shadow-md p-4">
        <svg
          class="w-10 h-10 mx-auto mb-3 text-teal dark:text-teal"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path
            d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
          />
        </svg>
        <blockquote>
          <p
            class="text-2xl italic font-medium text-brown dark:text-white font-open-sans"
          >
            "So glad we switched to North Simcoe from our old property managers.
            It's been nothing but a great experience. Linda really makes the
            time to understand our needs and find us the right tenants and make
            it hassle-free! Gives us the time to focus on our family."
          </p>
        </blockquote>

        <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <div
            class="flex items-center divide-x-2 divide-teal dark:divide-teal"
          >
            <cite
              class="pr-3 font-medium text-brown dark:text-white font-open-sans"
              >Evelina B.</cite
            >
            <cite class="pl-3 text-sm text-brown dark:text-white font-open-sans"
              >Landlord</cite
            >
          </div>
        </figcaption>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-white rounded-lg shadow-md p-4">
        <svg
          class="w-10 h-10 mx-auto mb-3 text-teal dark:text-teal"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path
            d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
          />
        </svg>
        <blockquote>
          <p
            class="text-2xl italic font-medium text-brown dark:text-white font-open-sans"
          >
            "Had the pleasure of having Linda take care of my investment
            property needs. She is highly professional and was able to get
            tenants into my place very quickly and at market rate. Linda took
            care of all the vetting and ensuring tenants were setup correctly
            for utilities accounts. Great option for those searching for a full
            service property manager."
          </p>
        </blockquote>

        <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <div
            class="flex items-center divide-x-2 divide-teal dark:divide-teal"
          >
            <cite
              class="pr-3 font-medium text-brown dark:text-white font-open-sans"
              >Satjot J.</cite
            >
            <cite class="pl-3 text-sm text-brown dark:text-white font-open-sans"
              >Landlord</cite
            >
          </div>
        </figcaption>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-white rounded-lg shadow-md p-4">
        <svg
          class="w-10 h-10 mx-auto mb-3 text-teal dark:text-teal"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path
            d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
          />
        </svg>
        <blockquote>
          <p
            class="text-2xl italic font-medium text-brown dark:text-white font-open-sans"
          >
            "We are so thrilled with the amount of experience Linda and her team
            bring to the table. They are reliable, knowledgeable and creative
            with the management of our property. They are also extremely
            detailed; from their screening process to reporting. I feel very
            comfortable in my decision of going with North Simcoe. We are so
            grateful for you guys, thank you for giving us the financial
            stability we needed with our rental!"
          </p>
        </blockquote>

        <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <div
            class="flex items-center divide-x-2 divide-teal dark:divide-teal"
          >
            <cite
              class="pr-3 font-medium text-brown dark:text-white font-open-sans"
              >Rosa T.</cite
            >
            <cite class="pl-3 text-sm text-brown dark:text-white font-open-sans"
              >Landlord</cite
            >
          </div>
        </figcaption>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style>
.swiper {
  height: 100%;
  overflow: visible;
  width: 80%;
}

.swiper-slide {
  align-items: center;
  background: #fff;
  display: flex;
  justify-content: center;
  margin: 50px 20px 50px 0;
  text-align: center;
}

.swiper-button-prev {
  color: #93c3bf;
  left: 0;
  top: 0;
  position: absolute;
}

.swiper-button-next {
  color: #93c3bf;
  top: 0;
  position: absolute;
}

.swiper-pagination {
  margin-left: 10px;
}

.swiper-pagination-bullet {
  background: #93c3bf;
}

@media (min-width: 1024px) {
  .swiper {
    width: 800px;
  }

  .swiper-button-prev {
    left: 700px;
  }
}
</style>
