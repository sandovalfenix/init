import { createStore } from "vuex"

import users from './modules/users'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
  }
})

export default store