import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import CompanyPage from "../views/CompanyPage.vue";
import ServicesPage from "../views/ServicesPage.vue";
import GalleryPage from "../views/GalleryPage.vue";
import Contact from "../views/Contact.vue";
import Forms from "@/views/TenantFormPage.vue";
import CommercialFormPage from "@/views/CommercialFormPage.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/our-company", component: CompanyPage },
  { path: "/services", name: "ServicesPage", component: ServicesPage },
  { path: "/contact", component: Contact },
  { path: "/residential-form", component: Forms },
  { path: "/commercial-form", component: CommercialFormPage },
  { path: "/gallery", component: GalleryPage },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
