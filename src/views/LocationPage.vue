<template>
  <HeroGlobal :hero="hero" />
  <ObserverComponent classToToggle="fadeInTop" playOnce="true">
    <LayoutTwoSections :intro="intro" />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
    <ServiceCard :service="residentialService" />
  </ObserverComponent>
  <ObserverComponent classToToggle="fadeInRight" playOnce="true">
    <ServiceCard :service="commercialService" />
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
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "LocationPage",
  components: {
    ContactUs,
    HeroGlobal,
    ObserverComponent,
    ServiceCard,
    LayoutTwoSections,
  },
  setup() {
    const route = useRoute();
    // Extract location from route path (e.g., "/property-management-barrie" -> "barrie")
    const path = route.path;
    const locationSlug = path.replace("/property-management-", "") || "barrie";

    // Location data mapping
    const locationData = {
      barrie: {
        name: "Barrie",
        region: "Simcoe County",
        title: "Property Management Barrie | Expert Landlord Services",
        description: "Professional property management services in Barrie, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Barrie property owners with comprehensive property management solutions.",
        h1: "Property Management Services in Barrie, Ontario",
        introContent: "North Simcoe Property Management is Barrie's trusted property management company, providing comprehensive landlord and tenant services throughout the city. Whether you own residential rental properties, commercial buildings, or mixed-use developments in Barrie, our experienced team handles everything from tenant screening to maintenance coordination.",
        introRightP1: "Our Barrie property management services include tenant screening, rent collection, maintenance coordination, legal compliance, and comprehensive property oversight. We understand the local Barrie rental market and work to maximize your property's value and rental income.",
        introRightP2: "Whether you own residential properties, commercial buildings, or mixed-use developments in Barrie, North Simcoe Property Management provides the expertise and local knowledge you need for successful property management. We serve property owners throughout Barrie and surrounding Simcoe County communities.",
        keywords: "property management Barrie, Barrie property manager, landlord services Barrie, rental property management Barrie, property management company Barrie Ontario",
      },
      newmarket: {
        name: "Newmarket",
        region: "York Region",
        title: "Property Management Newmarket | Expert Landlord Services",
        description: "Professional property management services in Newmarket, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Newmarket property owners in York Region with comprehensive property management solutions.",
        h1: "Property Management Services in Newmarket, Ontario",
        introContent: "North Simcoe Property Management extends its expert property management services to Newmarket, a growing urban center in York Region. Whether you own residential rental properties, commercial buildings, or mixed-use developments in Newmarket, our experienced team provides comprehensive landlord and tenant services tailored to the local market.",
        introRightP1: "Our Newmarket property management services include tenant screening, rent collection, maintenance coordination, legal compliance, and comprehensive property oversight. We understand the unique dynamics of the Newmarket and York Region rental market and work to maximize your property's value and rental income.",
        introRightP2: "Whether you own residential properties, commercial buildings, or mixed-use developments in Newmarket, North Simcoe Property Management provides the expertise and local knowledge you need for successful property management. We serve property owners throughout Newmarket and surrounding York Region communities.",
        keywords: "property management Newmarket, Newmarket property manager, landlord services Newmarket, rental property management Newmarket, property management company Newmarket Ontario",
      },
      caledon: {
        name: "Caledon",
        region: "Peel Region",
        title: "Property Management Caledon | Expert Landlord Services",
        description: "Professional property management services in Caledon, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Caledon property owners in Peel Region with comprehensive property management solutions.",
        h1: "Property Management Services in Caledon, Ontario",
        introContent: "North Simcoe Property Management provides expert property management services to Caledon, an expanding community in Peel Region. Whether you own residential rental properties, commercial buildings, or mixed-use developments in Caledon, our experienced team delivers comprehensive landlord and tenant services designed for the local market.",
        introRightP1: "Our Caledon property management services include tenant screening, rent collection, maintenance coordination, legal compliance, and comprehensive property oversight. We understand the unique characteristics of the Caledon and Peel Region rental market and work to maximize your property's value and rental income.",
        introRightP2: "Whether you own residential properties, commercial buildings, or mixed-use developments in Caledon, North Simcoe Property Management provides the expertise and local knowledge you need for successful property management. We serve property owners throughout Caledon and surrounding Peel Region communities.",
        keywords: "property management Caledon, Caledon property manager, landlord services Caledon, rental property management Caledon, property management company Caledon Ontario",
      },
      bradford: {
        name: "Bradford",
        region: "Simcoe County",
        title: "Property Management Bradford | Expert Landlord Services",
        description: "Professional property management services in Bradford, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Bradford property owners in Simcoe County with comprehensive property management solutions.",
        h1: "Property Management Services in Bradford, Ontario",
        introContent: "North Simcoe Property Management provides expert property management services to Bradford, a thriving community in Simcoe County. Whether you own residential rental properties, commercial buildings, or mixed-use developments in Bradford, our experienced team delivers comprehensive landlord and tenant services tailored to the local market.",
        introRightP1: "Our Bradford property management services include tenant screening, rent collection, maintenance coordination, legal compliance, and comprehensive property oversight. We understand the unique dynamics of the Bradford and Simcoe County rental market and work to maximize your property's value and rental income.",
        introRightP2: "Whether you own residential properties, commercial buildings, or mixed-use developments in Bradford, North Simcoe Property Management provides the expertise and local knowledge you need for successful property management. We serve property owners throughout Bradford and surrounding Simcoe County communities.",
        keywords: "property management Bradford, Bradford property manager, landlord services Bradford, rental property management Bradford, property management company Bradford Ontario",
      },
      bolton: {
        name: "Bolton",
        region: "Peel Region",
        title: "Property Management Bolton | Expert Landlord Services",
        description: "Professional property management services in Bolton, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Bolton property owners in Peel Region with comprehensive property management solutions.",
        h1: "Property Management Services in Bolton, Ontario",
        introContent: "North Simcoe Property Management extends its expert property management services to Bolton, a growing community in Peel Region. Whether you own residential rental properties, commercial buildings, or mixed-use developments in Bolton, our experienced team provides comprehensive landlord and tenant services designed for the local market.",
        introRightP1: "Our Bolton property management services include tenant screening, rent collection, maintenance coordination, legal compliance, and comprehensive property oversight. We understand the unique characteristics of the Bolton and Peel Region rental market and work to maximize your property's value and rental income.",
        introRightP2: "Whether you own residential properties, commercial buildings, or mixed-use developments in Bolton, North Simcoe Property Management provides the expertise and local knowledge you need for successful property management. We serve property owners throughout Bolton and surrounding Peel Region communities.",
        keywords: "property management Bolton, Bolton property manager, landlord services Bolton, rental property management Bolton, property management company Bolton Ontario",
      },
      kleinburg: {
        name: "Kleinburg",
        region: "York Region",
        title: "Property Management Kleinburg | Expert Landlord Services",
        description: "Professional property management services in Kleinburg, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Kleinburg property owners in York Region with comprehensive property management solutions.",
        h1: "Property Management Services in Kleinburg, Ontario",
        introContent: "North Simcoe Property Management provides expert property management services to Kleinburg, a charming community in York Region. Whether you own residential rental properties, commercial buildings, or mixed-use developments in Kleinburg, our experienced team delivers comprehensive landlord and tenant services tailored to the local market.",
        introRightP1: "Our Kleinburg property management services include tenant screening, rent collection, maintenance coordination, legal compliance, and comprehensive property oversight. We understand the unique dynamics of the Kleinburg and York Region rental market and work to maximize your property's value and rental income.",
        introRightP2: "Whether you own residential properties, commercial buildings, or mixed-use developments in Kleinburg, North Simcoe Property Management provides the expertise and local knowledge you need for successful property management. We serve property owners throughout Kleinburg and surrounding York Region communities.",
        keywords: "property management Kleinburg, Kleinburg property manager, landlord services Kleinburg, rental property management Kleinburg, property management company Kleinburg Ontario",
      },
      cookstown: {
        name: "Cookstown",
        region: "Simcoe County",
        title: "Property Management Cookstown | Expert Landlord Services",
        description: "Professional property management services in Cookstown, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Cookstown property owners in Simcoe County with comprehensive property management solutions.",
        h1: "Property Management Services in Cookstown, Ontario",
        introContent: "North Simcoe Property Management extends its expert property management services to Cookstown, a welcoming community in Simcoe County. Whether you own residential rental properties, commercial buildings, or mixed-use developments in Cookstown, our experienced team provides comprehensive landlord and tenant services designed for the local market.",
        introRightP1: "Our Cookstown property management services include tenant screening, rent collection, maintenance coordination, legal compliance, and comprehensive property oversight. We understand the unique characteristics of the Cookstown and Simcoe County rental market and work to maximize your property's value and rental income.",
        introRightP2: "Whether you own residential properties, commercial buildings, or mixed-use developments in Cookstown, North Simcoe Property Management provides the expertise and local knowledge you need for successful property management. We serve property owners throughout Cookstown and surrounding Simcoe County communities.",
        keywords: "property management Cookstown, Cookstown property manager, landlord services Cookstown, rental property management Cookstown, property management company Cookstown Ontario",
      },
      tottenham: {
        name: "Tottenham",
        region: "Simcoe County",
        title: "Property Management Tottenham | Expert Landlord Services",
        description: "Professional property management services in Tottenham, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Tottenham property owners in Simcoe County with comprehensive property management solutions.",
        h1: "Property Management Services in Tottenham, Ontario",
        introContent: "North Simcoe Property Management provides expert property management services to Tottenham, a vibrant community in Simcoe County. Whether you own residential rental properties, commercial buildings, or mixed-use developments in Tottenham, our experienced team delivers comprehensive landlord and tenant services tailored to the local market.",
        introRightP1: "Our Tottenham property management services include tenant screening, rent collection, maintenance coordination, legal compliance, and comprehensive property oversight. We understand the unique dynamics of the Tottenham and Simcoe County rental market and work to maximize your property's value and rental income.",
        introRightP2: "Whether you own residential properties, commercial buildings, or mixed-use developments in Tottenham, North Simcoe Property Management provides the expertise and local knowledge you need for successful property management. We serve property owners throughout Tottenham and surrounding Simcoe County communities.",
        keywords: "property management Tottenham, Tottenham property manager, landlord services Tottenham, rental property management Tottenham, property management company Tottenham Ontario",
      },
      nobleton: {
        name: "Nobleton",
        region: "York Region",
        title: "Property Management Nobleton | Expert Landlord Services",
        description: "Professional property management services in Nobleton, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Nobleton property owners in York Region with comprehensive property management solutions.",
        h1: "Property Management Services in Nobleton, Ontario",
        introContent: "North Simcoe Property Management extends its expert property management services to Nobleton, a growing community in York Region. Whether you own residential rental properties, commercial buildings, or mixed-use developments in Nobleton, our experienced team provides comprehensive landlord and tenant services designed for the local market.",
        introRightP1: "Our Nobleton property management services include tenant screening, rent collection, maintenance coordination, legal compliance, and comprehensive property oversight. We understand the unique characteristics of the Nobleton and York Region rental market and work to maximize your property's value and rental income.",
        introRightP2: "Whether you own residential properties, commercial buildings, or mixed-use developments in Nobleton, North Simcoe Property Management provides the expertise and local knowledge you need for successful property management. We serve property owners throughout Nobleton and surrounding York Region communities.",
        keywords: "property management Nobleton, Nobleton property manager, landlord services Nobleton, rental property management Nobleton, property management company Nobleton Ontario",
      },
      schomberg: {
        name: "Schomberg",
        region: "York Region",
        title: "Property Management Schomberg | Expert Landlord Services",
        description: "Professional property management services in Schomberg, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Schomberg property owners in York Region with comprehensive property management solutions.",
        h1: "Property Management Services in Schomberg, Ontario",
        introContent: "North Simcoe Property Management provides expert property management services to Schomberg, a charming community in York Region. Whether you own residential rental properties, commercial buildings, or mixed-use developments in Schomberg, our experienced team delivers comprehensive landlord and tenant services tailored to the local market.",
        introRightP1: "Our Schomberg property management services include tenant screening, rent collection, maintenance coordination, legal compliance, and comprehensive property oversight. We understand the unique dynamics of the Schomberg and York Region rental market and work to maximize your property's value and rental income.",
        introRightP2: "Whether you own residential properties, commercial buildings, or mixed-use developments in Schomberg, North Simcoe Property Management provides the expertise and local knowledge you need for successful property management. We serve property owners throughout Schomberg and surrounding York Region communities.",
        keywords: "property management Schomberg, Schomberg property manager, landlord services Schomberg, rental property management Schomberg, property management company Schomberg Ontario",
      },
      alliston: {
        name: "Alliston",
        region: "Simcoe County",
        title: "Property Management Alliston | Expert Landlord Services",
        description: "Professional property management services in Alliston, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Alliston property owners in Simcoe County with comprehensive property management solutions.",
        h1: "Property Management Services in Alliston, Ontario",
        introContent: "North Simcoe Property Management extends its expert property management services to Alliston, a thriving community in Simcoe County. Whether you own residential rental properties, commercial buildings, or mixed-use developments in Alliston, our experienced team provides comprehensive landlord and tenant services designed for the local market.",
        introRightP1: "Our Alliston property management services include tenant screening, rent collection, maintenance coordination, legal compliance, and comprehensive property oversight. We understand the unique characteristics of the Alliston and Simcoe County rental market and work to maximize your property's value and rental income.",
        introRightP2: "Whether you own residential properties, commercial buildings, or mixed-use developments in Alliston, North Simcoe Property Management provides the expertise and local knowledge you need for successful property management. We serve property owners throughout Alliston and surrounding Simcoe County communities.",
        keywords: "property management Alliston, Alliston property manager, landlord services Alliston, rental property management Alliston, property management company Alliston Ontario",
      },
      "king-city": {
        name: "King City",
        region: "York Region",
        title: "Property Management King City | Expert Landlord Services",
        description: "Professional property management services in King City, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving King City property owners in York Region with comprehensive property management solutions.",
        h1: "Property Management Services in King City, Ontario",
        introContent: "North Simcoe Property Management provides expert property management services to King City, a growing community in York Region. Whether you own residential rental properties, commercial buildings, or mixed-use developments in King City, our experienced team delivers comprehensive landlord and tenant services tailored to the local market.",
        introRightP1: "Our King City property management services include tenant screening, rent collection, maintenance coordination, legal compliance, and comprehensive property oversight. We understand the unique dynamics of the King City and York Region rental market and work to maximize your property's value and rental income.",
        introRightP2: "Whether you own residential properties, commercial buildings, or mixed-use developments in King City, North Simcoe Property Management provides the expertise and local knowledge you need for successful property management. We serve property owners throughout King City and surrounding York Region communities.",
        keywords: "property management King City, King City property manager, landlord services King City, rental property management King City, property management company King City Ontario",
      },
    };

    const location = locationData[locationSlug] || locationData.barrie;

    // Residential service with location context
    const residentialService = computed(() => ({
      id: 1,
      icon: "house-chimney",
      iconPos: "left",
      title: `Residential Property Management in ${location.name}`,
      paragraph: [
        `Owning a second home or investment property in ${location.name} doesn't have to be stressful. At North Simcoe Property Management, we create custom plans for each rental property in ${location.name} to ensure you're getting the most out of your investment. Whether you're out of the country, or just too busy to manage your property, we can take the stress out of the day to day that comes with being a landlord in ${location.region}.`,
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
      link: "https://form.jotform.com/240387727172057",
      linkTitle: "Fill in Residential App",
    }));

    // Commercial service with location context
    const commercialService = computed(() => ({
      id: 2,
      icon: "building",
      iconPos: "right",
      title: `Commercial Property Management in ${location.name}`,
      paragraph: [
        `Commercial property management in ${location.name} involves the management of any property used for business purposes, such as office buildings, warehouses, and retail spaces. At North Simcoe Property Management, we manage the day-to-day operations of commercial properties in ${location.name}, maintaining and improving the condition of the property, and ensuring compliance with local and Canadian laws.`,
        `Our responsibilities include finding tenants, collecting rent, handling tenant complaints, and ensuring your commercial property in ${location.name} operates smoothly and profitably.`,
      ],
      link: "https://form.jotform.com/240397250346052",
      linkTitle: "Fill in Commercial App",
    }));

    const hero = computed(() => ({
      title: location.h1,
    }));

    const intro = computed(() => [
      {
        title: `PROPERTY MANAGEMENT IN ${location.name.toUpperCase()}`,
        subtitle: `Expert Landlord Services in ${location.name}, ${location.region}`,
        textleft: location.introContent,
        textrightP1: location.introRightP1,
        textrightP2: location.introRightP2,
      },
    ]);

    return {
      hero,
      intro,
      residentialService,
      commercialService,
    };
  },
  methods: {
    isExternalLink(link) {
      return /^(https?:\/\/)/.test(link);
    },
  },
};
</script>

<style></style>

