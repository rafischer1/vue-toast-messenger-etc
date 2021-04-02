import { createStore } from 'vuex'

export default createStore({
  state: {
    toasts: []
  },
  mutations: {
    showToast (state, toast) {
      state.toasts = [toast]
      this.dispatch("resetAsync")
    },
    getToasts (state) {
      return state.toasts
    },
    resetToasts (state) {
      state.toasts = []
    },
  },
  actions: {
    resetAsync({commit}) {
      setTimeout(() => {
        commit("resetToasts")
      }, 1500)
    }
  },
  modules: {
  }
})
