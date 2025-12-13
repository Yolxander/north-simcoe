import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import CompanyPage from "../views/CompanyPage.vue";
import ServicesPage from "../views/ServicesPage.vue";
import GalleryPage from "../views/GalleryPage.vue";
import Contact from "../views/Contact.vue";
import Forms from "@/views/TenantFormPage.vue";
import CommercialFormPage from "@/views/CommercialFormPage.vue";
import NotFound from "@/views/NotFound.vue";
import LocationPage from "@/views/LocationPage.vue";
import { useHead } from "@vueuse/head";
import SuccessComponent from "@/components/SuccessComponent.vue";

const baseUrl = "https://northsimcoepm.com";
const defaultImage = `${baseUrl}/logo.png`;

const routes = [
  {
    path: "/",
    component: {
      ...Home,
      setup() {
        const pageUrl = baseUrl;
        const pageTitle = "Property Management Simcoe County | Rental Services";
        const pageDescription = "Expert property management in Simcoe County, York, Peel, Dufferin, Hamilton & Muskoka. Professional landlord and tenant services for residential and commercial properties.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
        });
      },
    },
  },
  {
    path: "/our-company",
    component: {
      ...CompanyPage,
      setup() {
        const pageUrl = `${baseUrl}/our-company`;
        const pageTitle = "Professional Property Management Team | Simcoe County Experts";
        const pageDescription = "Meet our experienced property management team serving Simcoe, York, Peel, Dufferin, Hamilton, Niagara & Muskoka. Expert landlord services and tenant management. Get started today!";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
        });
      },
    },
  },
  {
    path: "/services",
    name: "ServicesPage",
    component: {
      ...ServicesPage,
      setup() {
        const pageUrl = `${baseUrl}/services`;
        const pageTitle = "Property Management Services | Residential, Commercial & Mixed Use";
        const pageDescription = "Comprehensive property management services for residential, commercial, and mixed-use properties in Simcoe, York, Peel, Dufferin & Muskoka. Tenant screening, maintenance, and more.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
        });
      },
    },
  },
  {
    path: "/contact",
    component: {
      ...Contact,
      setup() {
        const pageUrl = `${baseUrl}/contact`;
        const pageTitle = "Contact Property Management Experts | Simcoe County";
        const pageDescription = "Contact North Simcoe Property Management for expert landlord and tenant services. Serving Simcoe, York, Peel, Dufferin, Hamilton & Muskoka regions. Get a free consultation today!";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
        });
      },
    },
  },
  {
    path: "/residential-form",
    component: {
      ...Forms,
      setup() {
        const pageUrl = `${baseUrl}/residential-form`;
        const pageTitle = "Residential Tenant Application | Apply for Rental Properties";
        const pageDescription = "Apply for residential rental properties in Simcoe County. Complete our tenant application form for residential property rentals. Quick and easy application process.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
        });
      },
    },
  },
  {
    path: "/commercial-form",
    component: {
      ...CommercialFormPage,
      setup() {
        const pageUrl = `${baseUrl}/commercial-form`;
        const pageTitle = "Commercial Property Rental Application | Business Space Leasing";
        const pageDescription = "Apply for commercial and mixed-use property rentals in Simcoe County. Complete our commercial tenant application for office, retail, and business space leasing.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
        });
      },
    },
  },
  {
    path: "/gallery",
    component: {
      ...GalleryPage,
      setup() {
        const pageUrl = `${baseUrl}/gallery`;
        const pageTitle = "Property Gallery | Residential & Commercial Rental Properties";
        const pageDescription = "Browse our gallery of professionally managed rental properties in Simcoe County. View residential, commercial, and mixed-use properties available for lease.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
        });
      },
    },
  },
  {
    path: "/success",
    component: {
      ...SuccessComponent,
      setup() {
        const pageUrl = `${baseUrl}/success`;
        const pageTitle = "Thank You | Form Submitted Successfully";
        const pageDescription = "Thank you for submitting your property management inquiry. Our team will contact you shortly to discuss your property management needs.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
        });
      },
    },
  },
  {
    path: "/property-management-barrie",
    component: {
      ...LocationPage,
      setup() {
        const pageUrl = `${baseUrl}/property-management-barrie`;
        const pageTitle = "Property Management Barrie | Expert Landlord Services";
        const pageDescription = "Professional property management services in Barrie, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Barrie property owners with comprehensive property management solutions.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              name: "keywords",
              content: "property management Barrie, Barrie property manager, landlord services Barrie, rental property management Barrie, property management company Barrie Ontario",
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
          script: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "North Simcoe Property Management - Barrie",
                "telephone": "+1 (647) 500-1747",
                "email": "info@northsimcoepm.ca",
                "url": pageUrl,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Barrie",
                  "addressRegion": "Ontario",
                  "addressRegionCode": "ON",
                  "addressCountry": "CA",
                  "addressCountryCode": "CA"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Barrie"
                },
                "description": "Professional property management services in Barrie, Ontario. Expert landlord and tenant services for residential and commercial properties."
              }),
            },
          ],
        });
      },
    },
  },
  {
    path: "/property-management-newmarket",
    component: {
      ...LocationPage,
      setup() {
        const pageUrl = `${baseUrl}/property-management-newmarket`;
        const pageTitle = "Property Management Newmarket | Expert Landlord Services";
        const pageDescription = "Professional property management services in Newmarket, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Newmarket property owners in York Region with comprehensive property management solutions.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              name: "keywords",
              content: "property management Newmarket, Newmarket property manager, landlord services Newmarket, rental property management Newmarket, property management company Newmarket Ontario",
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
          script: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "North Simcoe Property Management - Newmarket",
                "telephone": "+1 (647) 500-1747",
                "email": "info@northsimcoepm.ca",
                "url": pageUrl,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Newmarket",
                  "addressRegion": "Ontario",
                  "addressRegionCode": "ON",
                  "addressCountry": "CA",
                  "addressCountryCode": "CA"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Newmarket"
                },
                "description": "Professional property management services in Newmarket, Ontario. Expert landlord and tenant services for residential and commercial properties."
              }),
            },
          ],
        });
      },
    },
  },
  {
    path: "/property-management-caledon",
    component: {
      ...LocationPage,
      setup() {
        const pageUrl = `${baseUrl}/property-management-caledon`;
        const pageTitle = "Property Management Caledon | Expert Landlord Services";
        const pageDescription = "Professional property management services in Caledon, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Caledon property owners in Peel Region with comprehensive property management solutions.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              name: "keywords",
              content: "property management Caledon, Caledon property manager, landlord services Caledon, rental property management Caledon, property management company Caledon Ontario",
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
          script: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "North Simcoe Property Management - Caledon",
                "telephone": "+1 (647) 500-1747",
                "email": "info@northsimcoepm.ca",
                "url": pageUrl,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Caledon",
                  "addressRegion": "Ontario",
                  "addressRegionCode": "ON",
                  "addressCountry": "CA",
                  "addressCountryCode": "CA"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Caledon"
                },
                "description": "Professional property management services in Caledon, Ontario. Expert landlord and tenant services for residential and commercial properties."
              }),
            },
          ],
        });
      },
    },
  },
  {
    path: "/property-management-bradford",
    component: {
      ...LocationPage,
      setup() {
        const pageUrl = `${baseUrl}/property-management-bradford`;
        const pageTitle = "Property Management Bradford | Expert Landlord Services";
        const pageDescription = "Professional property management services in Bradford, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Bradford property owners in Simcoe County with comprehensive property management solutions.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              name: "keywords",
              content: "property management Bradford, Bradford property manager, landlord services Bradford, rental property management Bradford, property management company Bradford Ontario",
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
          script: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "North Simcoe Property Management - Bradford",
                "telephone": "+1 (647) 500-1747",
                "email": "info@northsimcoepm.ca",
                "url": pageUrl,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bradford",
                  "addressRegion": "Ontario",
                  "addressRegionCode": "ON",
                  "addressCountry": "CA",
                  "addressCountryCode": "CA"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Bradford"
                },
                "description": "Professional property management services in Bradford, Ontario. Expert landlord and tenant services for residential and commercial properties."
              }),
            },
          ],
        });
      },
    },
  },
  {
    path: "/property-management-bolton",
    component: {
      ...LocationPage,
      setup() {
        const pageUrl = `${baseUrl}/property-management-bolton`;
        const pageTitle = "Property Management Bolton | Expert Landlord Services";
        const pageDescription = "Professional property management services in Bolton, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Bolton property owners in Peel Region with comprehensive property management solutions.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              name: "keywords",
              content: "property management Bolton, Bolton property manager, landlord services Bolton, rental property management Bolton, property management company Bolton Ontario",
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
          script: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "North Simcoe Property Management - Bolton",
                "telephone": "+1 (647) 500-1747",
                "email": "info@northsimcoepm.ca",
                "url": pageUrl,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bolton",
                  "addressRegion": "Ontario",
                  "addressRegionCode": "ON",
                  "addressCountry": "CA",
                  "addressCountryCode": "CA"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Bolton"
                },
                "description": "Professional property management services in Bolton, Ontario. Expert landlord and tenant services for residential and commercial properties."
              }),
            },
          ],
        });
      },
    },
  },
  {
    path: "/property-management-kleinburg",
    component: {
      ...LocationPage,
      setup() {
        const pageUrl = `${baseUrl}/property-management-kleinburg`;
        const pageTitle = "Property Management Kleinburg | Expert Landlord Services";
        const pageDescription = "Professional property management services in Kleinburg, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Kleinburg property owners in York Region with comprehensive property management solutions.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              name: "keywords",
              content: "property management Kleinburg, Kleinburg property manager, landlord services Kleinburg, rental property management Kleinburg, property management company Kleinburg Ontario",
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
          script: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "North Simcoe Property Management - Kleinburg",
                "telephone": "+1 (647) 500-1747",
                "email": "info@northsimcoepm.ca",
                "url": pageUrl,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Kleinburg",
                  "addressRegion": "Ontario",
                  "addressRegionCode": "ON",
                  "addressCountry": "CA",
                  "addressCountryCode": "CA"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Kleinburg"
                },
                "description": "Professional property management services in Kleinburg, Ontario. Expert landlord and tenant services for residential and commercial properties."
              }),
            },
          ],
        });
      },
    },
  },
  {
    path: "/property-management-cookstown",
    component: {
      ...LocationPage,
      setup() {
        const pageUrl = `${baseUrl}/property-management-cookstown`;
        const pageTitle = "Property Management Cookstown | Expert Landlord Services";
        const pageDescription = "Professional property management services in Cookstown, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Cookstown property owners in Simcoe County with comprehensive property management solutions.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              name: "keywords",
              content: "property management Cookstown, Cookstown property manager, landlord services Cookstown, rental property management Cookstown, property management company Cookstown Ontario",
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
          script: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "North Simcoe Property Management - Cookstown",
                "telephone": "+1 (647) 500-1747",
                "email": "info@northsimcoepm.ca",
                "url": pageUrl,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Cookstown",
                  "addressRegion": "Ontario",
                  "addressRegionCode": "ON",
                  "addressCountry": "CA",
                  "addressCountryCode": "CA"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Cookstown"
                },
                "description": "Professional property management services in Cookstown, Ontario. Expert landlord and tenant services for residential and commercial properties."
              }),
            },
          ],
        });
      },
    },
  },
  {
    path: "/property-management-tottenham",
    component: {
      ...LocationPage,
      setup() {
        const pageUrl = `${baseUrl}/property-management-tottenham`;
        const pageTitle = "Property Management Tottenham | Expert Landlord Services";
        const pageDescription = "Professional property management services in Tottenham, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Tottenham property owners in Simcoe County with comprehensive property management solutions.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              name: "keywords",
              content: "property management Tottenham, Tottenham property manager, landlord services Tottenham, rental property management Tottenham, property management company Tottenham Ontario",
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
          script: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "North Simcoe Property Management - Tottenham",
                "telephone": "+1 (647) 500-1747",
                "email": "info@northsimcoepm.ca",
                "url": pageUrl,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Tottenham",
                  "addressRegion": "Ontario",
                  "addressRegionCode": "ON",
                  "addressCountry": "CA",
                  "addressCountryCode": "CA"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Tottenham"
                },
                "description": "Professional property management services in Tottenham, Ontario. Expert landlord and tenant services for residential and commercial properties."
              }),
            },
          ],
        });
      },
    },
  },
  {
    path: "/property-management-nobleton",
    component: {
      ...LocationPage,
      setup() {
        const pageUrl = `${baseUrl}/property-management-nobleton`;
        const pageTitle = "Property Management Nobleton | Expert Landlord Services";
        const pageDescription = "Professional property management services in Nobleton, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Nobleton property owners in York Region with comprehensive property management solutions.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              name: "keywords",
              content: "property management Nobleton, Nobleton property manager, landlord services Nobleton, rental property management Nobleton, property management company Nobleton Ontario",
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
          script: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "North Simcoe Property Management - Nobleton",
                "telephone": "+1 (647) 500-1747",
                "email": "info@northsimcoepm.ca",
                "url": pageUrl,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Nobleton",
                  "addressRegion": "Ontario",
                  "addressRegionCode": "ON",
                  "addressCountry": "CA",
                  "addressCountryCode": "CA"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Nobleton"
                },
                "description": "Professional property management services in Nobleton, Ontario. Expert landlord and tenant services for residential and commercial properties."
              }),
            },
          ],
        });
      },
    },
  },
  {
    path: "/property-management-schomberg",
    component: {
      ...LocationPage,
      setup() {
        const pageUrl = `${baseUrl}/property-management-schomberg`;
        const pageTitle = "Property Management Schomberg | Expert Landlord Services";
        const pageDescription = "Professional property management services in Schomberg, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Schomberg property owners in York Region with comprehensive property management solutions.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              name: "keywords",
              content: "property management Schomberg, Schomberg property manager, landlord services Schomberg, rental property management Schomberg, property management company Schomberg Ontario",
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
          script: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "North Simcoe Property Management - Schomberg",
                "telephone": "+1 (647) 500-1747",
                "email": "info@northsimcoepm.ca",
                "url": pageUrl,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Schomberg",
                  "addressRegion": "Ontario",
                  "addressRegionCode": "ON",
                  "addressCountry": "CA",
                  "addressCountryCode": "CA"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Schomberg"
                },
                "description": "Professional property management services in Schomberg, Ontario. Expert landlord and tenant services for residential and commercial properties."
              }),
            },
          ],
        });
      },
    },
  },
  {
    path: "/property-management-alliston",
    component: {
      ...LocationPage,
      setup() {
        const pageUrl = `${baseUrl}/property-management-alliston`;
        const pageTitle = "Property Management Alliston | Expert Landlord Services";
        const pageDescription = "Professional property management services in Alliston, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving Alliston property owners in Simcoe County with comprehensive property management solutions.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              name: "keywords",
              content: "property management Alliston, Alliston property manager, landlord services Alliston, rental property management Alliston, property management company Alliston Ontario",
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
          script: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "North Simcoe Property Management - Alliston",
                "telephone": "+1 (647) 500-1747",
                "email": "info@northsimcoepm.ca",
                "url": pageUrl,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Alliston",
                  "addressRegion": "Ontario",
                  "addressRegionCode": "ON",
                  "addressCountry": "CA",
                  "addressCountryCode": "CA"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Alliston"
                },
                "description": "Professional property management services in Alliston, Ontario. Expert landlord and tenant services for residential and commercial properties."
              }),
            },
          ],
        });
      },
    },
  },
  {
    path: "/property-management-king-city",
    component: {
      ...LocationPage,
      setup() {
        const pageUrl = `${baseUrl}/property-management-king-city`;
        const pageTitle = "Property Management King City | Expert Landlord Services";
        const pageDescription = "Professional property management services in King City, Ontario. Expert landlord and tenant services for residential and commercial properties. Serving King City property owners in York Region with comprehensive property management solutions.";
        useHead({
          title: pageTitle,
          meta: [
            {
              name: `description`,
              content: pageDescription,
            },
            {
              name: "keywords",
              content: "property management King City, King City property manager, landlord services King City, rental property management King City, property management company King City Ontario",
            },
            {
              property: "og:title",
              content: pageTitle,
            },
            {
              property: "og:description",
              content: pageDescription,
            },
            {
              property: "og:url",
              content: pageUrl,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:image",
              content: defaultImage,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: pageTitle,
            },
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
          link: [
            {
              rel: "canonical",
              href: pageUrl,
            },
          ],
          script: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "North Simcoe Property Management - King City",
                "telephone": "+1 (647) 500-1747",
                "email": "info@northsimcoepm.ca",
                "url": pageUrl,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "King City",
                  "addressRegion": "Ontario",
                  "addressRegionCode": "ON",
                  "addressCountry": "CA",
                  "addressCountryCode": "CA"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "King City"
                },
                "description": "Professional property management services in King City, Ontario. Expert landlord and tenant services for residential and commercial properties."
              }),
            },
          ],
        });
      },
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },

  // { path: "/:catchAll(.*)", component: NotFound }, // Handle 404 Not Found. Add this route last
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Title';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'Default Description');
  }
  next();
});

export default router;
