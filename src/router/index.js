import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import CompanyPage from "../views/CompanyPage.vue";
import ServicesPage from "../views/ServicesPage.vue";
import GalleryPage from "../views/GalleryPage.vue";
import Contact from "../views/Contact.vue";
import Forms from "@/views/TenantFormPage.vue";
import CommercialFormPage from "@/views/CommercialFormPage.vue";
import NotFound from "@/views/NotFound.vue";
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
