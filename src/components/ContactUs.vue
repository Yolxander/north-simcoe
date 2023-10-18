<template>
  <div
    class="contact-us max-w-screen-xl p-10 md:p-32 mx-auto flex flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
  >
    <div class="py-10 md:py-0 md:w-3/5">
      <h2 class="text-sm font-extrabold mb-4 text-brown font-libre-baskerville">
        CONTACT US
      </h2>
      <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
      <h3
        class="text-3xl font-extrabold mb-4 text-brown font-libre-baskerville"
      >
        Ready to start?
      </h3>
      <p class="font-source-serif">Reach out to us now!</p>
      <div class="md:mt-24">
        <p
          class="text-2xl font-extrabold mb-4 text-brown font-libre-baskerville"
        >
          <span class="mr-4 text-tealdark"
            ><font-awesome-icon :icon="['fas', 'envelope']"
          /></span>
          <a href="mailto:info@northsimcoe.com">info@northsimcoe.com</a>
        </p>
      </div>
    </div>

    <form class="w-full relative md:w-2/5">
      <div
        class="flex flex-col mb-2 z-10 relative bg-white rounded-lg shadow-md p-4 border-4 border-solid border-teal"
      >
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_text"
            id="floating_text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Name</label
          >
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Email address</label
          >
        </div>
        <div>
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-brown dark:text-white"
          ></label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-teal focus:ring-teal focus:border-teal"
            placeholder="Your message here..."
          ></textarea>
        </div>
      </div>
      <div
        class="bg-teal w-[300px] h-[250px] absolute top-[-20px] right-[-20px] md:top-[-40px] md:right-[-40px] z-negative"
      ></div>
      <button
        type="submit"
        class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style></style>
