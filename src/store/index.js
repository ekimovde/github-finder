import Vue from 'vue'
import Vuex from 'vuex'

import repos from './repos'
import search from './search'
import sort from './sort'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    repos,
    search,
    sort
  }
})