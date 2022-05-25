import mutationTypes from './mutations-types';
export default {
  addTodo({ commit }, data) {
    commit(mutationTypes.ADD_TODOS, data);
  },

  rejectTodo({ commit }, id) {
    commit(mutationTypes.REJECT_TODOS, id);
  },
  deleteTodo({ commit }, id) {
    commit(mutationTypes.DELETE_TODOS, id);
  },
  doneTodo({ commit }, id) {
    commit(mutationTypes.DONE_TODOS, id);
  },
};
    