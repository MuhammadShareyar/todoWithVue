<template>

  <div class="scroll-area-sm">
    <div class="ps-show-limits">
      <div style="position: static" class="ps ps--active-y">
        <div class="ps-content">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(todo, key) in todos" :key="key">
              <TodoListItem :todo="todo"></TodoListItem>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


</template>


<script>
import TodoListItem from "@/components/TodoListItem.vue";
import {  mapState } from "vuex";

export default {
  components: {
    TodoListItem,
  },
  computed: {
    ...mapState({
      todos: (state) => state.todo.todos,
    }),
  },
 
};
</script>