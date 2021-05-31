export default {
  state: {
    search: '',
    placeholder: 'Type username...'
  },
  mutations: {
    changeSearch (state, payload) {
      state.search = payload
    }
  },
  actions: {
    setSearch ({commit}, payload) {
      commit('changeSearch', payload)
    }
  },
  getters: {
    getSearch (state) {
      return state.search
    },
    getPlaceholder (state) {
      return state.placeholder
    }
  }
}