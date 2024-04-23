import { createStore } from "vuex";
import todo from "./modules/todo/index";

export default createStore({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    todo,
  },
});
