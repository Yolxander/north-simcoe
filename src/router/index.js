import { createRouter, createWebHistory } from "vue-router";

// import Home from "../views/HomePage.vue";
import CompanyPage from "../views/CompanyPage.vue";
// import Services from "../views/Services.vue";
// import ApplicationForm from "../views/ApplicationForm.vue";
// import Blog from "../views/Blog.vue";
// import Contact from "../views/Contact.vue";
// import Contact from "../views/Contact.vue";
import ComingSoonHome from "@/components/ComingSoonHome.vue";
import AboutUsHome from "@/components/AboutUsHome.vue";
import ContactUs from "@/components/ContactUs.vue";
import Forms from "@/views/FormsPage.vue";

const routes = [
  { path: "/", component:ComingSoonHome },
  // { path: "/", component: Home },
  { path: "/our-company-test", component: CompanyPage },
//   { path: "/services", component: Services },
//   { path: "/application-form", component: ApplicationForm },
//   { path: "/blog", component: Blog },
  { path: "/about-us-test", component: AboutUsHome },
  { path: "/contact-test", component: ContactUs },
  { path: "/forms-test", component: Forms},
];

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
});

export default router;
