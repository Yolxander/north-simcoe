<template>
  <HeroGlobal :hero="hero" />
  <ObserverComponent classToToggle="fadeInTop" playOnce="true">
    <LayoutTwoSections :intro="intro" />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
    <ServiceCard :service="services[0]" />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInRight" playOnce="true">
    <ServiceCard :service="services[1]" />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
    <ServiceCard :service="services[2]" />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInRight" playOnce="true">
    <ServiceCard :service="services[3]" />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
    <ServiceCard :service="services[4]" />
  </ObserverComponent>
  <ContactUs />
</template>

<script>
import "tailwindcss/tailwind.css";
import ContactUs from "../components/ContactUs.vue";
import HeroGlobal from "../components/HeroGlobal.vue";
import ObserverComponent from "../components/IntersectionObserver.vue";
import ServiceCard from "../components/ServiceCard.vue";
import LayoutTwoSections from "../components/LayoutTwoSections.vue";

export default {
  name: "ServicesPage",
  components: {
    ContactUs,
    HeroGlobal,
    ObserverComponent,
    ServiceCard,
    LayoutTwoSections,
  },
    methods: {
        updateLinksForMobile() {
            // Always use the JotForm links regardless of device
            this.services[0].link = "https://form.jotform.com/240387727172057";
            this.services[1].link = "https://form.jotform.com/240397250346052";
        },
        isExternalLink(link) {
            return /^(https?:\/\/)/.test(link);
        }
    },
    mounted() {
        this.updateLinksForMobile();
    },
  data() {
    return {
      hero: {
        title: "OUR SERVICES",
      },
      services: [
        {
          id: 1,
          icon: "house-chimney",
          iconPos: "left",
          title: "Residential Property Management",
          paragraph: [
            "Owning a second home or investment property doesn't have to be stressful. At North Simcoe Property Management, we create custom plans for each rental property to ensure you're getting the most out of your investment. Whether you're out of the country, or just too busy to manage your property, we can take the stress out of the day to day that comes with being a landlord in Ontario.",
            "Here is how we work for you:",
          ],
          listItems: [
            "Develop a comprehensive plan for managing properties.",
            "Develop a tenant screening process to ensure the best tenants are chosen.",
            "Create an effective communication system with landlords and tenants.",
            "Establish policies and procedures for handling maintenance and repair issues.",
            "Establish a system for collecting rent and managing delinquent payments.",
            "Monitor market trends to ensure competitive rental rates.",
            "Handle all Landlord Tenant Board issues",
          ],
          link: "/residential-form",
          linkTitle: "Fill in Residential App",
        },

        {
          id: 2,
          icon: "building",
          iconPos: "right",
          title: "Commercial Property Management",
          paragraph: [
            "Commercial property management involves the management of any property used for business purposes, such as office buildings, warehouses, and retail spaces. It involves managing the day-to-day operations of the property, maintaining and improving the condition of the property, and ensuring compliance with local and Canadian laws.",
            "At North Simcoe Property Management, our responsibilities include finding tenants, collecting rent, handling tenant complaints.",
          ],
          link: "/commercial-form",
          linkTitle: "Fill in Commercial App",
        },
        {
          id: 3,
          icon: "shop",
          iconPos: "left",
          title: "Mixed use Property Management Services",
          paragraph: [
            "Mixed use property management involves managing properties that offer a combination of residential and commercial uses. It requires a specific set of skills and knowledge to successfully manage all of the different elements.",
            "Our responsibilities as a mixed use property manager include:",
          ],
          listItems: [
            "Managing rental agreements and leases for residential and commercial tenants",
            "Handling tenant issues, such as complaints and disputes",
            "Ensuring that all maintenance and repairs are attended to in a timely fashion",
            "Overseeing all property management operations, such as budgeting, accounting, and financial planning",
            "Developing and enforcing rules and regulations for tenants",
            "Negotiating and executing contracts with service providers, such as landscapers and contractors",
          ],
          paragraphEnd:
            "Ready to work with our team? Fill out a form below or reach out at",
          phone: "+1 (647) 500-1747",
        },
        {
          id: 4,
          icon: "screwdriver-wrench",
          iconPos: "right",
          title: "Full Property Maintenance",
          paragraph: [
            "Maintaining a property in top-notch condition is crucial for its value preservation and the satisfaction of its tenants. At North Simcoe Property Management, we arrange Full Property Maintenance services to alleviate property owners from the hassles associated with property upkeep.",
            "North Simcoe Property Management is dedicated to preserving and enhancing the value of your real estate investments, ensuring your properties not only meet but exceed industry standards.",
          ],
        },
        {
          id: 5,
          icon: "dollar-sign",
          iconPos: "left",
          title: "Custom Pricing",
          paragraph: [
            "We know that each property is unique. Our team carefully reviews your property and offers custom pricing, so you get the best return on investment.",
          ],
          paragraphEnd:
            "Ready to work with our team? Fill out a form below or reach out at",
          phone: "+1 (647) 500-1747",
        },
      ],
      intro: [
        {
          title: "WHAT WE OFFER",
          subtitle: "Our Property Management Services.",
          textleft:
            "We at North Simcoe have many reasons why we differ from the rest. We offer custom pricing, free legal advice when it comes to the landlord tenant board, as well as no charge for filing any forms and starting the process to get a court date. <a href='/our-company' class='text-teal hover:underline font-semibold'>Learn more about our team</a> or <a href='/contact' class='text-teal hover:underline font-semibold'>contact us</a> for more information.",
          textrightP1:
            "We do not charge the common one month rent to find a tenant, that is all inclusive in our monthly fee, which, in the long run, do to us waving that cost, we end up being the better value from our competitors.",
          textrightP2:
            "Our services are tax deductable and there are no hidden fees. Those are just a few of the many reasons why you should pick us to manage your property for you! <a href='/gallery' class='text-teal hover:underline font-semibold'>View our property gallery</a> to see examples of our work. For information about landlord and tenant rights in Ontario, visit the <a href='https://tribunalsontario.ca/ltb/' target='_blank' rel='noopener noreferrer nofollow' class='text-teal hover:underline font-semibold'>Landlord Tenant Board</a>.",
        },
      ],
    };
  },
};
</script>

<style></style>
