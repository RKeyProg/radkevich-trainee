const tooltips = {
  namespaced: true,
  state: {
    isShown: false,
    text: "",
    type: "success",
  },
  mutations: {
    SET_TOOLTIP: (state, tooltip) => {
      state.isShown = tooltip.isShown;
      state.text = tooltip.text;
      state.type = tooltip.type;
    },
  },
  actions: {
    show({ commit, dispatch }, tooltip) {
      commit("SET_TOOLTIP", {
        isShown: true,
        text: tooltip.text,
        type: tooltip.type,
      });
    },
    hide({ commit, state }) {
      commit("SET_TOOLTIP", {
        ...state,
        isShown: false,
      });
    },
  },
};

export default tooltips;
