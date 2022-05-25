import mutationTypes from "./mutations-types";
export default {
  [mutationTypes.ADD_TODOS](state, data) {
    state.todos = [data, ...state.todos];
  },

  [mutationTypes.REJECT_TODOS](state, id) {
    var todoIndex = state.todos.findIndex((todo) => todo.id === id);
    state.todos[todoIndex].rejected = true;
  },
  [mutationTypes.DELETE_TODOS](state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  [mutationTypes.DONE_TODOS](state, id) {
    var todoIndex = state.todos.findIndex((todo) => todo.id === id);
    state.todos[todoIndex].done = true;
  },
};
