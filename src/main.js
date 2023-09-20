import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/app.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPhone,
  faBuilding,
  faHouseChimney,
  faDollarSign,
  faScrewdriverWrench,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";

library.add(
  faPhone,
  faBuilding,
  faHouseChimney,
  faDollarSign,
  faScrewdriverWrench,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faEnvelope,
  faLocationDot
);

const app = createApp(App);

app.config.globalProperties.$gsap = gsap;

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
