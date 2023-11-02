import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import CompanyPage from "../views/CompanyPage.vue";
import ServicesPage from "../views/ServicesPage.vue";
import GalleryPage from "../views/GalleryPage.vue";
import Contact from "../views/Contact.vue";
import ComingSoonHome from "@/components/ComingSoonHome.vue";
import Forms from "@/views/TenantFormPage.vue";
// import CommercialFormPage from "@/views/CommercialFormPage.vue";
// import NotFound from "@/views/NotFound.vue"; // Import a 404 Not Found component if you have one
import CommercialForm from "@/components/ComercialForm.vue";
import SuccessComponent from "@/components/SuccessComponent.vue";
const routes = [
  { path: "/", component: ComingSoonHome },
  { path: "/home-test", component: Home },
  { path: "/our-company-test", component: CompanyPage },
  { path: "/services-test", name: "ServicesPage", component: ServicesPage },
  { path: "/contact-test", component: Contact },
  { path: "/forms-test", component: Forms },
  { path: "/commercial-form", component: CommercialForm },
  { path: "/gallery-test", component: GalleryPage },
  { path: "/success", component: SuccessComponent },
  // { path: "/:catchAll(.*)", component: NotFound }, // Handle 404 Not Found. Add this route last
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Added process.env.BASE_URL to ensure correct base path
  routes,

});

export default router;
