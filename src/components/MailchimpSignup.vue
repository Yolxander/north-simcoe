<template>
  <div
    class="max-w-screen-xl p-10 md:p-32 mx-auto flex flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
  >
    <div class="py-10 md:py-0 md:w-3/5">
      <h2 class="text-sm font-semibold mb-4 text-brown font-archivo">
        NEWSLETTER
      </h2>
      <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
      <h3 class="text-3xl font-semibold mb-4 text-brown font-archivo">
        Stay up to date
      </h3>
      <p class="font-open-sans text-brown text-2xl">
        Subscribe to our newsletter for the latest property management tips, updates, and news.
      </p>
    </div>

    <form
      :action="formAction"
      method="post"
      target="_blank"
      class="w-full relative md:w-2/5"
    >
      <div
        class="flex flex-col mb-2 z-10 relative bg-white rounded-lg shadow-md p-4 border-4 border-solid border-teal"
      >
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="mce-EMAIL"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Email address *</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="FNAME"
            id="mce-FNAME"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
          />
          <label
            for="mce-FNAME"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >First Name</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="LNAME"
            id="mce-LNAME"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
          />
          <label
            for="mce-LNAME"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Last Name</label>
        </div>
      </div>
      <!-- Honeypot field for spam prevention -->
      <div aria-hidden="true" style="position: absolute; left: -5000px;">
        <input
          type="text"
          name="b_748331f318d06d00f2198e662_88cc1be418"
          tabindex="-1"
          value=""
        />
      </div>
      <div
        class="bg-teal w-[300px] h-[250px] absolute top-[-20px] right-[-20px] md:top-[-40px] md:right-[-40px] z-negative"
      ></div>
      <button
        type="submit"
        class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center"
      >
        Subscribe
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MailchimpSignup",
  data() {
    return {
      formAction:
        "https://northsimcoepm.us17.list-manage.com/subscribe/post?u=748331f318d06d00f2198e662&id=88cc1be418&f_id=00e6c0e1f0",
    };
  },
};
</script>

<style></style>
