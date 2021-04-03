import { createStore } from 'vuex'

export default createStore({
  state: {
    toasts: []
  },
  mutations: {
    showToast (state, toast) {
      const _old = [...state.toasts]
      state.toasts = [toast, ..._old]
      this.dispatch("resetAsync")
    },
    getToasts (state) {
      return state.toasts
    },
    resetToasts (state) {
      state.toasts = []
    },
    resetToast (state) {
      state.toasts.pop()
    },
  },
  actions: {
    resetAsync({commit, state}) {
      if (state.toasts.length > 0) {
        setTimeout(() => {
          commit("resetToast")
        }, 1700)
      } else {
        setTimeout(() => {
          commit("resetToasts")
        }, 1700)
      }

    }
  },
  modules: {
  }
})
