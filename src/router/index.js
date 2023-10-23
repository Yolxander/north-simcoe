import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import CompanyPage from "../views/CompanyPage.vue";
import ServicesPage from "../views/ServicesPage.vue";
import GalleryPage from "../views/GalleryPage.vue";
import Contact from "../views/Contact.vue";
// import ComingSoonHome from "@/components/ComingSoonHome.vue";
import Forms from "@/views/FormsPage.vue";
// import NotFound from "@/views/NotFound.vue"; // Import a 404 Not Found component if you have one

const routes = [
  // { path: "/", component: ComingSoonHome },
  { path: "/", component: Home },
  { path: "/our-company", component: CompanyPage },
  { path: "/services", name: "ServicesPage", component: ServicesPage },
  { path: "/contact", component: Contact },
  { path: "/forms", component: Forms },
  { path: "/gallery", component: GalleryPage },
  // { path: "/:catchAll(.*)", component: NotFound }, // Handle 404 Not Found. Add this route last
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Added process.env.BASE_URL to ensure correct base path
  routes,

});

export default router;
