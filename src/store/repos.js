import axios from 'axios'
import sortRepos from '../assets/js/sortRepos'

export default {
  state: {
    error: null,
    repos: null
  },
  mutations: {
    changeRepos (state, { repos, err }) {
      state.repos = repos,
      state.error = err
    },
    changeSortRepos (state, payload) {
      state.repos = payload
    }
  },
  actions: {
    setRepos ({commit}, payload) {
      // https://api.github.com/users/vedees/repos
      console.log('Search: ', payload)
      axios
        .get(`https://api.github.com/users/${payload}/repos`)
          .then(({ data }) => {
            let repos = data
            let error = null
            commit('changeRepos', { repos, error })
          })
          .catch((err) => {
            console.log(err)
            let repos = null
            commit('changeRepos', { repos, err })
          })
    },
    setSortRepos ({ commit, getters }, typeSort) {
      let rep = getters.getRepos
      commit('changeSortRepos', sortRepos(rep, typeSort))
    }
  },
  getters: {
    getError (state) {
      return state.error
    },
    getRepos (state) {
      return state.repos
    }
  }
}