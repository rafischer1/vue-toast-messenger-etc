import { createStore } from "vuex";

export default createStore({
  state: {
    toasts: []
  },
  mutations: {
    showToast(state, toast) {
      const _old = [...state.toasts];
      state.toasts = [toast, ..._old];
      this.dispatch("resetAsync");
    },
    getToasts(state) {
      return state.toasts;
    },
    clearToast(state) {
      state.toasts.pop();
    }
  },
  actions: {
    resetAsync({ commit }) {
      setTimeout(() => {
        commit("clearToast");
      }, 1700);
    }
  },
  modules: {}
});
