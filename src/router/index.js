import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import CompanyPage from "../views/CompanyPage.vue";
import ServicesPage from "../views/ServicesPage.vue";
import Contact from "../views/Contact.vue";
import ComingSoonHome from "@/components/ComingSoonHome.vue";
import AboutUsHome from "@/components/AboutUsHome.vue";
import Forms from "@/views/FormsPage.vue";
// import NotFound from "@/views/NotFound.vue"; // Import a 404 Not Found component if you have one

const routes = [
  { path: "/", component: ComingSoonHome },
  { path: "/home-test", component: Home },
  { path: "/our-company-test", component: CompanyPage },
  { path: "/services-test", name: 'ServicesPage', component: ServicesPage },
  { path: "/about-us-test", component: AboutUsHome },
  { path: "/contact-test", component: Contact },
  { path: "/forms-test", component: Forms },
  // { path: "/:catchAll(.*)", component: NotFound }, // Handle 404 Not Found. Add this route last
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Added process.env.BASE_URL to ensure correct base path
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
