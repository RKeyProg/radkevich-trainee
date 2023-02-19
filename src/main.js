import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import $axios from "./requests";
import VueSmoothScroll from "v-smooth-scroll";

createApp(App)
  .use(store)
  .use(VueSmoothScroll, {
    duration: 1000,
    offset: 0,
    updateHistory: false,
  })
  .mount("#app");
