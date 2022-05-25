<template>
  <div class="hello">
    <div class="row d-flex justify-content-center container">
      <div class="col-md-4">

      </div>
      <div class="col-md-8">
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="card-header-tab card-header">
            <div
              class="
                card-header-title
                font-size-lg
                text-capitalize
                font-weight-normal
              "
            >
              <h3><i class="fa fa-tasks"></i>&nbsp;Task Lists</h3>
            </div>
          </div>
          <div class="scroll-area-sm">
            <div class="ps-show-limits">
              <div style="position: static" class="ps ps--active-y">
                <div class="ps-content">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item"
                      v-for="(todo, key) in todos"
                      :key="key"
                    >
                      <div
                        class="todo-indicator"
                        :class="{
                          'bg-warning': todo.rejected,
                          'bg-success': todo.done,
                        }"
                      ></div>
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <!-- <div class="widget-content-left mr-2"> -->
                            <!-- <div class="custom-checkbox custom-control">
                              <input
                                class="custom-control-input"
                                id="exampleCustomCheckbox12"
                                type="checkbox"
                              /><label
                                class="custom-control-label"
                                for="exampleCustomCheckbox12"
                                >&nbsp;</label
                              >
                            </div> -->
                          <!-- </div> -->
                          <div class="widget-content-left ml-2">
                            <div class="widget-heading">
                              {{ todo.name }}
                              <div
                                v-if="todo.rejected"
                                class="badge ml-2 badge-danger"
                              >
                                Rejected
                              </div>
                              <div v-else class="badge ml-2 badge-info">
                                New
                              </div>
                            </div>
                            <div class="widget-subheading"><i>By Bob</i></div>
                          </div>
                          <div
                            v-if="!todo.done && !todo.rejected"
                            class="widget-content-right"
                          >
                            <button
                              class="
                                border-0
                                btn-transition btn btn-outline-success
                              "
                              @click="doneToDo(todo.id)"
                            >
                              <i class="fa fa-check"></i>
                            </button>
                            <button
                              class="
                                border-0
                                btn-transition btn btn-outline-danger
                              "
                              @click="rejectToDo(todo.id)"
                            >
                              <i class="fa fa-close"></i>
                            </button>
                            <button
                              class="
                                border-0
                                btn-transition btn btn-outline-danger
                              "
                              @click="deleteToDo(todo.id)"
                            >
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="d-block card-footer">
            <input
              type="text"
              class="form-control todo-list-input mr-2"
              placeholder="What do you need to do today?"
              v-model="todo"
            />

            <p v-if="todoError" class="alert alert-danger">
              {{ todoError }}
            </p>
            <div class="text-right mt-2">
              <button class="mr-2 btn btn-link btn-sm">Cancel</button>
              <button class="btn btn-primary" @click="createToDo">
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      todo: "",
      todoError: null,
    };
  },
  computed: {
    ...mapState({
      todos: (state) => state.todo.todos,
    }),
    ...mapGetters(["doneTodos", "getTodos", "todosCount"]),
  },
  methods: {
    createToDo() {
      if (this.todo.length === 0) {
        this.todoError = "Invalid input!";
        return false;
      }
      var id = this.todosCount + 1;
      var newtodo = { id: id, name: this.todo, done: false, rejected: false };
      this.$store.dispatch("addTodo", newtodo);
      this.todo = "";
    },
    rejectToDo(id) {
      this.$store.dispatch("rejectTodo", id);
    },
    deleteToDo(id) {
      this.$store.dispatch("deleteTodo", id);
    },
    doneToDo(id) {
      this.$store.dispatch("doneTodo", id);
    },
  },
};
</script>