<template>
  <div class="max-w-screen-xl p-10 md:p-28 md:text-end">
    <h2 class="text-sm font-extrabold mb-4 text-brown font-libre-baskerville">
      TESTIMONIALS
    </h2>
    <hr class="w-10 h-1 my-4 border-0 rounded bg-teal mx-0 md:ml-auto" />

    <h3 class="text-3xl font-extrabold mb-4 text-brown font-libre-baskerville">
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
          <p class="text-2xl italic font-medium text-brown dark:text-white">
            "Lorem ipsum dolor sit amet, North Simcoe elit. Similique et ipsum
            accusamus ut perferendis iusto ullam a, quidem accusantium? Nostrum
            est harum eius optio quod odio fugiat eaque ipsa obcaecati!"
          </p>
        </blockquote>

        <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <img
            class="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="profile picture"
          />
          <div
            class="flex items-center divide-x-2 divide-teal dark:divide-teal"
          >
            <cite class="pr-3 font-medium text-brown dark:text-white"
              >Micheal Gough</cite
            >
            <cite class="pl-3 text-sm text-brown dark:text-white"
              >CEO at Google</cite
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
          <p class="text-2xl italic font-medium text-brown dark:text-white">
            "Lorem ipsum dolor sit amet, North Simcoe elit. Similique et ipsum
            accusamus ut perferendis iusto ullam a, quidem accusantium? Nostrum
            est harum eius optio quod odio fugiat eaque ipsa obcaecati!"
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <img
            class="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="profile picture"
          />
          <div
            class="flex items-center divide-x-2 divide-teal dark:divide-teal"
          >
            <cite class="pr-3 font-medium text-brown dark:text-white"
              >Micheal Gough</cite
            >
            <cite class="pl-3 text-sm text-brown dark:text-white"
              >CEO at Google</cite
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
          <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
            "Lorem ipsum dolor sit amet, North Simcoe elit. Similique et ipsum
            accusamus ut perferendis iusto ullam a, quidem accusantium? Nostrum
            est harum eius optio quod odio fugiat eaque ipsa obcaecati!"
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <img
            class="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="profile picture"
          />
          <div
            class="flex items-center divide-x-2 divide-teal dark:divide-teal"
          >
            <cite class="pr-3 font-medium text-brown dark:text-white"
              >Micheal Gough</cite
            >
            <cite class="pl-3 text-sm text-brown dark:text-white"
              >CEO at Google</cite
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
          <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
            "Lorem ipsum dolor sit amet, North Simcoe elit. Similique et ipsum
            accusamus ut perferendis iusto ullam a, quidem accusantium? Nostrum
            est harum eius optio quod odio fugiat eaque ipsa obcaecati!"
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <img
            class="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="profile picture"
          />
          <div class="flex items-center divide-x-2 divide-teal">
            <cite class="pr-3 font-medium text-brown dark:text-white"
              >Micheal Gough</cite
            >
            <cite class="pl-3 text-sm text-brown dark:text-white"
              >CEO at Google</cite
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
