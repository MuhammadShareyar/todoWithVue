export default {
  getTodos: (state) => {
    return state.todos;
  },
  doneTodos: (state) => {
    return state.todos.filter((todo) => todo.done);
  },
  todosCount: (state) => {
    return state.todos.length;
  },
};
