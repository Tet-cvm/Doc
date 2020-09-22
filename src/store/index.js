import { createStore } from "vuex"
import { initialize } from "./../assets/js/appBuild.js"

initialize();

export default createStore({
  state: {
    stateLogin: false,
    stateRole: 2, // 0 管理员； 1 维护者； 2 使用者；
  },
  getters: {
    getStateLogin(state) {
      return state.stateLogin;
    },
    getStateRole(state) {
      return state.stateRole;
    }
  },
  mutations: {
    setStateLogin(state, stateLogin) {
      state.stateLogin = stateLogin;
    },
    setStateRole(state, stateRole) {
      state.stateRole = stateRole;
    }
  },
  actions: {
  },
  modules: {
  }
})
