import { createApp } from "vue";
import App from "./App.vue";
import VueSmoothScroll from "v-smooth-scroll";

createApp(App)
  .use(VueSmoothScroll, {
    duration: 1000,
    offset: 0,
    updateHistory: false,
  })
  .mount("#app");
