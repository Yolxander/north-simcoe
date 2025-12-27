<template>
  <HeroGlobal :hero="hero" />
  <ObserverComponent classToToggle="fadeInTop" playOnce="true">
    <div class="max-w-screen-xl p-10 md:p-28 mx-auto">
      <h2 class="text-sm font-semibold mb-4 text-brown font-archivo">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <hr class="w-10 h-1 my-4 border-0 rounded bg-teal" />
      <h3 class="text-3xl font-semibold mb-8 text-brown font-archivo">
        Common Questions About Our Property Management Services
      </h3>
      <p class="font-open-sans text-brown text-xl mb-12">
        Find answers to the most common questions about property management services in Simcoe County and surrounding areas. <a href="/contact" class="text-teal hover:underline font-semibold">Contact us</a> if you have additional questions.
      </p>
    </div>
  </ObserverComponent>

  <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
    <div class="max-w-screen-xl p-10 md:p-28 mx-auto">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="mb-8 pb-8 border-b border-teal/20 last:border-b-0"
      >
        <h4
          class="text-2xl font-semibold mb-4 text-brown font-archivo cursor-pointer"
          @click="toggleFaq(index)"
        >
          <span class="flex items-center">
            <span class="mr-3 text-teal">{{ index + 1 }}.</span>
            {{ faq.question }}
            <font-awesome-icon
              :icon="['fas', faq.isOpen ? 'chevron-up' : 'chevron-down']"
              class="ml-auto text-teal text-xl transition-transform duration-300"
              :class="{ 'rotate-180': faq.isOpen }"
            />
          </span>
        </h4>
        <div
          v-show="faq.isOpen"
          class="ml-8 font-open-sans text-brown text-xl leading-relaxed"
          v-html="faq.answer"
        ></div>
      </div>
    </div>
  </ObserverComponent>

  <ObserverComponent classToToggle="fadeInBottom" playOnce="true">
    <ContactUs />
  </ObserverComponent>
</template>

<script>
import "tailwindcss/tailwind.css";
import ContactUs from "../components/ContactUs.vue";
import HeroGlobal from "../components/HeroGlobal.vue";
import ObserverComponent from "../components/IntersectionObserver.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "FAQPage",
  components: {
    ContactUs,
    HeroGlobal,
    ObserverComponent,
  },
  data() {
    return {
      hero: {
        title: "FAQ",
      },
      faqs: [
        {
          question: "What areas do you serve?",
          answer:
            "We provide property management services throughout Simcoe County and beyond. Our service areas include York, Peel, Dufferin, Hamilton, Niagara, and Muskoka Regions. We serve cities such as Barrie, Newmarket, Caledon, Bradford, Bolton, and many more communities. <a href='/services' class='text-teal hover:underline font-semibold'>View our full service areas</a>.",
          isOpen: true,
        },
        {
          question: "What services do you offer?",
          answer:
            "We offer comprehensive property management services including residential property management, commercial property management, mixed-use property management, full property maintenance, and custom pricing. We also provide FREE legal services for Landlord Tenant Board issues and handle all form filings at no additional charge. <a href='/services' class='text-teal hover:underline font-semibold'>Learn more about our services</a>.",
          isOpen: false,
        },
        {
          question: "How do I get started?",
          answer:
            "Getting started is easy! You can <a href='/contact' class='text-teal hover:underline font-semibold'>contact us</a> directly by phone at <a href='tel:+16475001747' class='text-teal hover:underline font-semibold'>+1 (647) 500-1747</a> or email at <a href='mailto:info@northsimcoepm.ca' class='text-teal hover:underline font-semibold'>info@northsimcoepm.ca</a>. You can also fill out our <a href='https://form.jotform.com/240387727172057' target='_blank' class='text-teal hover:underline font-semibold'>residential form</a> or <a href='https://form.jotform.com/240397250346052' target='_blank' class='text-teal hover:underline font-semibold'>commercial form</a> to get started.",
          isOpen: false,
        },
        {
          question: "Do you charge a fee to find tenants?",
          answer:
            "No, we do not charge the common one month's rent fee to find a tenant. This is all inclusive in our monthly fee, which makes us a better value compared to our competitors. We develop a comprehensive tenant screening process to ensure the best tenants are chosen for your property.",
          isOpen: false,
        },
        {
          question: "What are your fees?",
          answer:
            "We offer custom pricing tailored to each property. Our services are tax deductible and there are no hidden fees. We carefully review your property and offer custom pricing so you get the best return on investment. <a href='/contact' class='text-teal hover:underline font-semibold'>Contact us</a> for a personalized quote.",
          isOpen: false,
        },
        {
          question: "Do you handle Landlord Tenant Board issues?",
          answer:
            "Yes! We handle all Landlord Tenant Board issues and offer FREE legal services. We also do not charge for filing any forms and starting the process to get a court date. This is one of the many ways we provide value to our clients.",
          isOpen: false,
        },
        {
          question: "What types of properties do you manage?",
          answer:
            "We manage residential properties, commercial properties, and mixed-use properties. Whether you own a single-family home, multi-unit residential building, office space, retail space, warehouse, or a combination of residential and commercial units, we can help. <a href='/services' class='text-teal hover:underline font-semibold'>Learn more about our property management services</a>.",
          isOpen: false,
        },
        {
          question: "How do you handle maintenance and repairs?",
          answer:
            "We arrange full property maintenance services to keep your property in top-notch condition. We establish policies and procedures for handling maintenance and repair issues, ensuring everything is attended to in a timely fashion. We also negotiate and execute contracts with service providers such as landscapers and contractors.",
          isOpen: false,
        },
        {
          question: "How do you collect rent?",
          answer:
            "We establish a system for collecting rent and managing delinquent payments. We monitor market trends to ensure competitive rental rates and handle all aspects of rent collection, including following up on late payments and managing any issues that arise.",
          isOpen: false,
        },
        {
          question: "Can I meet your team before signing up?",
          answer:
            "Absolutely! We'd love to meet with you to discuss your property management needs. <a href='/our-company' class='text-teal hover:underline font-semibold'>Learn more about our team</a> and <a href='/contact' class='text-teal hover:underline font-semibold'>contact us</a> to schedule a consultation. We're here to answer any questions you may have.",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    },
  },
  setup() {
    useHead({
      title: "FAQ | Property Management Questions | North Simcoe PM",
      meta: [
        {
          name: `description`,
          content:
            "Frequently asked questions about property management services in Simcoe County. Learn about our services, pricing, tenant screening, maintenance, and more. Get answers to common landlord questions.",
        },
        {
          property: "og:title",
          content: "FAQ | Property Management Questions | North Simcoe PM",
        },
        {
          property: "og:description",
          content:
            "Frequently asked questions about property management services in Simcoe County. Learn about our services, pricing, tenant screening, maintenance, and more.",
        },
        {
          property: "og:url",
          content: "https://northsimcoepm.com/faq",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: "https://northsimcoepm.com/logo.png",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "FAQ | Property Management Questions | North Simcoe PM",
        },
        {
          name: "twitter:description",
          content:
            "Frequently asked questions about property management services in Simcoe County. Learn about our services, pricing, and more.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://northsimcoepm.com/faq",
        },
      ],
    });
  },
};
</script>

<style></style>

