<template>
  <div
    class="contact-us max-w-screen-xl p-10 md:p-32 mx-auto flex flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
  >
    <div class="py-10 md:py-0 md:w-3/5">
      <h2 class="text-sm font-semibold mb-4 text-brown font-archivo">
        CONTACT US
      </h2>
      <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
      <h3 class="text-3xl font-semibold mb-4 text-brown font-archivo">
        Ready to start?
      </h3>
      <p class="font-open-sans text-brown text-2xl">Reach out to us now!</p>
    </div>

    <form ref="form" @submit.prevent="sendEmail" class="w-full relative md:w-2/5">
      <div
        class="flex flex-col mb-2 z-10 relative bg-white rounded-lg shadow-md p-4 border-4 border-solid border-teal"
      >
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            v-model="user_name"
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
            v-model="user_email"
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
            v-model="message"
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
              v-if="!email_sent"
        type="submit"
        class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
        <button v-if="email_sent"
                type="submit" class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-full text-sm w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
        </button>
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
  name: "ContactUs",
    data() {
        return {
            user_name: '',
            user_email: '',
            message: '',
            email_sent: false,
        }
    },

    methods: {
        sendEmail() {
            emailjs.send('default_service', 'template_u6gxk3u', {
                user_name: this.user_name,
                user_email: this.user_email,
                message: this.message,
            }, 'NxLLnhlEW3KDj2zPO')
                .then((result) => {
                    this.email_sent = true,
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    }


};
</script>

<style></style>
