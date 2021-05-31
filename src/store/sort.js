export default {
  state: {
    typeSort: {
      currentSort: 'name',
      currentSortDir: 'asc',
    }
  },
  mutations: {
    changeTypeSort (state, payload) {
      state.typeSort = payload
    }
  },
  actions: {
    setSortType ({commit}, payload) {
      console.log(payload)
      commit('changeTypeSort', payload)
    }
  },
  getters: {
    getTypeSort (state) {
      return state.typeSort
    }
  }
}