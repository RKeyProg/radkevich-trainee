import { createStore } from "vuex";
import tooltips from "./modules/tooltips";

export default createStore({
  modules: {
    tooltips,
  },
});
