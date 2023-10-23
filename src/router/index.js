import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import CompanyPage from "../views/CompanyPage.vue";
import ServicesPage from "../views/ServicesPage.vue";
import GalleryPage from "../views/GalleryPage.vue";
import Contact from "../views/Contact.vue";
import Forms from "@/views/TenantFormPage.vue";
import CommercialFormPage from "@/views/CommercialFormPage.vue";
// import NotFound from "@/views/NotFound.vue"; // Import a 404 Not Found component if you have one
import { useHead } from "@vueuse/head";

const routes = [
  {
    path: "/",
    component: {
      ...Home,
      setup() {
        useHead({
          title: "North Simcoe Property Management in Simcoe County",
          meta: [
            {
              name: `description`,
              content: "North Simcoe Property Management is a full service property management company helping landlords & tenants in Simcoe, York, Peel, Dufferin & Muskoka regions."
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
        useHead({
          title: "Full Service Property Management Team | North Simcoe PM",
          meta: [
            {
              name: `description`,
              content: "We're a professional property management team in Simcoe County. We service Simcoe, York, Peel, Dufferin & Muskoka regions. Contact us today."
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
        useHead({
          title: "Our Professional Property Management Services | North Simcoe PM",
          meta: [
            {
              name: `description`,
              content: "Check out our full list of property management services here. We manage properties all over Simcoe, York, Peel, Dufferin & Muskoka regions."
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
        useHead({
          title: "Contact Us | North Simcoe Property Management",
          meta: [
            {
              name: `description`,
              content: "Get in touch with the team at North Simcoe Property Management here."
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
        useHead({
          title: "Tenant Rental Application | North Simcoe Property Management",
          meta: [
            {
              name: `description`,
              content: "Interested in one of our residential properties? To apply for one of our rentals, fill out a tenant application here."
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
        useHead({
          title: "Commercial Rental Form | North Simcoe Property Management",
          meta: [
            {
              name: `description`,
              content: "Interested in one of our commercial or mixed use properties? Fill out a commercial tenant application here."
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
        useHead({
          title: "Our Rental Properties | Gallery | North Simcoe PM",
          meta: [
            {
              name: `description`,
              content: "View our gallery of rental properties we manage here. North Simcoe PM professionally manages residential to commercial and mixed use buildings."
            },
          ],
        });
      },
    },
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
