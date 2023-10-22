<template>
  <HeroGlobal :hero="hero" />
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
  <ContactUs />
</template>

<script>
import "tailwindcss/tailwind.css";
import ContactUs from "../components/ContactUs.vue";
import HeroGlobal from "../components/HeroGlobal.vue";
import ObserverComponent from "../components/IntersectionObserver.vue";
import ServiceCard from "../components/ServiceCard.vue";

export default {
  name: "ServicesPage",
  components: {
    ContactUs,
    HeroGlobal,
    ObserverComponent,
    ServiceCard,
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
            "Owning a second home or investment (student) property doesn’t have to be stressful. At North Simcoe Property Management, we create custom plans for each rental property to ensure you’re getting the most out of your investment. Whether you’re out of the country, or just too busy to manage your property, we can take the stress out of the day to day that comes with being a landlord in Ontario.",
            "Here is how we work for you:",
          ],
          listItems: [
            "Develop a comprehensive plan for managing properties.",
            "Create a budget to cover all operational costs associated with proerty management",
            "Develop a tenant screening process to ensure the best tenants are chosen.",
            "Create an effective communication system with landlords and tenants.",
            "Establish policies and procedures for handling maintenance and repair issues.",
            "Develop a system for tracking rent payments and security deposits.",
            "Establish a system for collecting rent and managing delinquent payments.",
            "Monitor market trends to ensure competitive rental rates.",
            "Handle all Landlord Tenant Board issues",
          ],
          paragraphEnd:
            "Ready to work with our team? Fill out a form below or reach out at",
          phone: "+1 (647) 500-1747",
          link: "/forms-test",
          linkTitle: "Fill in Residential App",
        },

        {
          id: 2,
          icon: "building",
          iconPos: "right",
          title: "Commercial Property Management",
          paragraph: [
            "Commercial property management involves the management of any property used for business purposes, such as office buildings, warehouses, and retail spaces. It involves managing the day-to-day operations of the property, maintaining and improving the condition of the property, and ensuring compliance with local and Canadian laws.",
            "At North Simcoe Property Management, our responsibilities include finding tenants, collecting rent, handling tenant complaints, and performing regular maintenance and repairs.",
          ],
          paragraphEnd:
            "Ready to work with our team? Fill out a form below or reach out at",
          phone: "+1 (647) 500-1747",
          link: "/forms-test",
          linkTitle: "Fill in Commercial App",
        },
        {
          id: 3,
          icon: "dollar-sign",
          iconPos: "left",
          title: "Custom Pricing",
          paragraph: [
            "Mixed use property management involves managing properties that offer a combination of residential, commercial, and/or industrial uses. It requires a specific set of skills and knowledge to successfully manage all of the different elements.",
            "Our responsibilities as a mixed use property manager include:",
          ],
          listItems: [
            "Managing rental agreements and leases for residential, commercial, and industrial tenants",
            "Handling tenant issues, such as complaints and disputes",
            "Ensuring that all maintenance and repairs are attended to in a timely fashion",
            "Overseeing all property management operations, such as budgeting, accounting, and financial planning",
            "Developing and enforcing rules and regulations for tenants",
            "Negotiating and executing contracts with service providers, such as landscapers and contractors",
            "Supervising security personnel and ensuring the safety of tenants and their property",
            "Monitoring and responding to any changes in local or state laws that may affect the property",
            "Working with local government agencies to ensure the property’s compliance with zoning ordinances and other regulations",
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
            "Maintaining a property in top-notch condition is crucial for its value preservation and the satisfaction of its tenants. At North Simcoe Property Management, we offer Full Property Maintenance services to alleviate property owners from the hassles associated with property upkeep.",
            "Our services encompass a wide range of maintenance tasks, ensuring your property remains in pristine condition.",
            "North Simcoe Property Management is dedicated to preserving and enhancing the value of your real estate investments, ensuring your properties not only meet but exceed industry standards. Our Full Property Maintenance service is a testament to this commitment.",
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
