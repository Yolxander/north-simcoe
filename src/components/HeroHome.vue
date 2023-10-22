<template>
  <div class="hero-container">
    <div class="hero-overlay"></div>
    <!-- Bluish overlay -->
    <div
      class="flex md:flex-row md:items-center md:space-x-8 md:justify-between max-w-screen-xl h-screen p-10 pt-20 md:p-28 mx-auto relative"
    >
      <div class="flex flex-col justify-center font-archivo font-semibold">
        <p class="text-lg mb-4 text-white">NORTH SIMCOE PROPERTY MANAGEMENT</p>
        <hr class="w-10 md:w-48 h-1 my-4 border-0 rounded bg-white" />
        <h2 class="text-4xl md:text-7xl mb-4 text-white">
          Top property management company in Simcoe County.
        </h2>
        <hr class="w-10 md:w-48 h-1 my-4 border-0 rounded bg-white" />
        <a
          href="#"
          class="inline-flex items-center py-2.5 text-2xl text-2xl font-semibold text-center text-white hover:underline focus:ring-4 focus:outline-none focus:ring-gray-600 dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          Learn more
          <svg
            class="w-5 h-5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>

    <section id="section05" class="demo">
    <a style="margin-bottom: 20px; cursor: pointer"  @click="scrollToNext"><span class="scroll-arrow"></span></a>
    </section>
</template>

<script>
export default {
  name: "HeroHome",
    methods: {
        scrollToNext() {
            const nextSection = document.querySelector('#next-section')
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    },
};
</script>

<style>
/* Custom styling for the Hero component here */
.hero-container {
  position: relative;
  background-image: url("../assets/hero1.jpeg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 128, 128, 0.6);
}

section {
    position: relative;
    width: 100%;
    height: 100%;
}
section::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 80%;
    background: -webkit-linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,.8) 80%,rgba(0,0,0,.8) 100%);
    background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.8) 80%,rgba(0,0,0,.8) 100%);
}

.demo a {
    position: absolute;
    bottom: 20px;
    left: 50%;
    z-index: 2;
    display: inline-block;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    color: #fff;
    font : normal 400 20px/1 'Josefin Sans', sans-serif;
    letter-spacing: .1em;
    text-decoration: none;
    transition: opacity .3s;
}
.demo a:hover {
    opacity: .5;
}


#section05 a {
    padding-top: 70px;
}
#section05 a span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb05 1.5s infinite;
    animation: sdb05 1.5s infinite;
    box-sizing: border-box;
}
@-webkit-keyframes sdb05 {
    0% {
        -webkit-transform: rotate(-45deg) translate(0, 0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        -webkit-transform: rotate(-45deg) translate(-20px, 20px);
        opacity: 0;
    }
}
@keyframes sdb05 {
    0% {
        transform: rotate(-45deg) translate(0, 0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: rotate(-45deg) translate(-20px, 20px);
        opacity: 0;
    }
}

@keyframes scroll-down {
    0% {
        transform: rotate(-45deg) translate(0, 0);
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        transform: rotate(-45deg) translate(-20px, 20px);
        opacity: 0;
    }
}

</style>
