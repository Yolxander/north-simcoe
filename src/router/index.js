import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import CompanyPage from "../views/CompanyPage.vue";
import ServicesPage from "../views/ServicesPage.vue";
import Contact from "../views/Contact.vue";
import ComingSoonHome from "@/components/ComingSoonHome.vue";
import AboutUsHome from "@/components/AboutUsHome.vue";
import Forms from "@/views/FormsPage.vue";

const routes = [
  { path: "/", component: ComingSoonHome },
  { path: "/home-test", component: Home },
  { path: "/our-company-test", component: CompanyPage },
  { path: "/services-test", component: ServicesPage },
  { path: "/about-us-test", component: AboutUsHome },
  { path: "/contact-test", component: Contact },
  { path: "/forms-test", component: Forms },
];

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
});

export default router;
