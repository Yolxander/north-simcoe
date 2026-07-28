<template>
  <section class="max-w-6xl mx-auto w-full py-20 md:py-24 px-8 md:px-12 flex flex-col md:flex-row gap-12 md:gap-16 items-start">
    <!-- Form Intro -->
    <div class="w-full md:w-1/3 pt-0 md:pt-12">
      <h3 class="text-sm font-semibold tracking-wider uppercase text-brown font-archivo mb-2">
        Contact Us
      </h3>
      <div class="w-12 h-1 bg-teal mb-6"></div>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 text-brown font-archivo">
        Ready to start?
      </h2>
      <p class="text-gray-600 font-open-sans text-xl">
        Reach out to us now!
      </p>
    </div>

    <!-- Form Area -->
    <div class="w-full md:w-2/3 relative flex justify-end">
      <!-- Decorative background rectangle -->
      <div class="absolute top-0 right-0 w-3/4 h-full bg-teal/60 z-0 -mt-8 -mr-8 rounded-tr-lg hidden md:block"></div>
      <div class="relative z-10 bg-white border-2 border-teal rounded-lg p-8 md:p-10 w-full shadow-lg">
        <form ref="form" @submit.prevent="sendEmail" class="flex flex-col gap-6">
          <div>
            <input
              type="text"
              v-model="user_name"
              id="name"
              name="name"
              placeholder="Name"
              required
              class="w-full border-0 border-b-2 border-gray-300 focus:border-teal focus:ring-0 py-3 px-0 text-gray-700 bg-transparent transition-colors placeholder:text-gray-500 font-open-sans"
            />
          </div>
          <div>
            <input
              type="email"
              v-model="user_email"
              id="email"
              name="email"
              placeholder="Email address"
              required
              class="w-full border-0 border-b-2 border-gray-300 focus:border-teal focus:ring-0 py-3 px-0 text-gray-700 bg-transparent transition-colors placeholder:text-gray-500 font-open-sans"
            />
          </div>
          <div class="mt-2">
            <textarea
              id="message"
              v-model="message"
              name="message"
              placeholder="Your message here..."
              required
              rows="5"
              class="w-full border-2 border-gray-300 focus:border-teal focus:ring-0 rounded-md py-3 px-4 text-gray-700 bg-white transition-colors placeholder:text-gray-500 font-open-sans"
            ></textarea>
          </div>
          <div class="mt-2">
            <button
              v-if="!email_sent"
              type="submit"
              class="bg-teal hover:bg-tealdark text-white font-medium py-3 px-8 rounded-md transition-colors shadow-sm"
            >
              Submit
            </button>
            <button
              v-if="email_sent"
              type="submit"
              class="bg-teal hover:bg-tealdark text-white font-medium rounded-full text-sm w-10 h-10 flex items-center justify-center transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';
import { trackEvent } from "@/services/analytics";
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
            emailjs.send('service_v98lvdp', 'template_1d5ijcf', {
                user_name: this.user_name,
                user_email: this.user_email,
                message: this.message,
            }, 'NxLLnhlEW3KDj2zPO')
                .then((result) => {
                    this.email_sent = true;
                    trackEvent("contact_form_submit", {
                        event_category: "conversion",
                        event_label: "contact_us"
                    });
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    }


};
</script>

<style></style>
