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

const baseUrl = "https://northsimcoepm.ca";
const defaultImage = `${baseUrl}/logo.png`;

const routes = [
  {
    path: "/",
    component: {
      ...Home,
      setup() {
        const pageUrl = baseUrl;
        const pageTitle = "North Simcoe Property Management in Simcoe County";
        const pageDescription = "North Simcoe Property Management is a full service property management company helping landlords & tenants in Simcoe, York, Peel, Dufferin, Hamilton & Muskoka regions.";
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
        const pageTitle = "Full Service Property Management Team | North Simcoe PM";
        const pageDescription = "We're a professional property management team in Simcoe County. We service Simcoe, York, Peel, Dufferin, Hamilton, Niagara & Muskoka regions. Contact us today.";
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
        const pageTitle = "Our Professional Property Management Services | North Simcoe PM";
        const pageDescription = "Check out our full list of property management services here. We manage properties all over Simcoe, York, Peel, Dufferin & Muskoka regions.";
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
        const pageTitle = "Contact Us | North Simcoe Property Management";
        const pageDescription = "Get in touch with the team at North Simcoe Property Management here.";
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
        const pageTitle = "Tenant Rental Application | North Simcoe Property Management";
        const pageDescription = "Interested in one of our residential properties? To apply for one of our rentals, fill out a tenant application here.";
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
        const pageTitle = "Commercial Rental Form | North Simcoe Property Management";
        const pageDescription = "Interested in one of our commercial or mixed use properties? Fill out a commercial tenant application here.";
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
        const pageTitle = "Our Rental Properties | Gallery | North Simcoe PM";
        const pageDescription = "View our gallery of rental properties we manage here. North Simcoe PM professionally manages residential to commercial and mixed use buildings.";
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
        const pageTitle = "Thank You for Submitting";
        const pageDescription = "Your form has been submitted";
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
