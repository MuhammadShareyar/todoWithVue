<template>
    <div class="d-block card-footer">
        <input type="text" class="form-control todo-list-input mr-2" placeholder="What do you need to do today?"
            v-model="todo" />

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
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

/** todoStore */
const todoStore = useStore();
/** todoStore */

/** template vars */
let todo = ref("");
let todoError = ref(null);
let todosCount = ref(0);
/** template vars */


/** methods declarations */
var createToDo = () => {
    if (todo.value.length === 0) {
        todoError.value = "Invalid input!";
        return false;
    }
    var id = todosCount.value + 1;
    var newtodo = { id: id, name: todo.value, done: false, rejected: false };
    todoStore.dispatch("todo/addTodo", newtodo);
    todo.value = "";
}
/** methods declarations */

</script>