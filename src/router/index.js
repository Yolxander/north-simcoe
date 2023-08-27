import { createRouter, createWebHistory } from "vue-router";

// import Home from "../views/HomePage.vue";
import CompanyPage from "../views/CompanyPage.vue";
// import Services from "../views/Services.vue";
// import ApplicationForm from "../views/ApplicationForm.vue";
// import Blog from "../views/Blog.vue";
// import Contact from "../views/Contact.vue";
import ComingSoonHome from "@/components/ComingSoonHome.vue";

const routes = [
  { path: "/", component:ComingSoonHome },
  // { path: "/", component: Home },
  { path: "/our-company", component: CompanyPage },
//   { path: "/services", component: Services },
//   { path: "/application-form", component: ApplicationForm },
//   { path: "/blog", component: Blog },
//   { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
