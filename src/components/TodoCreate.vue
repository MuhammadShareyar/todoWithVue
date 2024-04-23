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

<script>

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            todo: "",
            todoError: null
        }
    },
    computed: {
        ...mapGetters({
            todosCount:"todo/todosCount"
        }),
    },
    methods: {
        createToDo() {
            if (this.todo.length === 0) {
                this.todoError = "Invalid input!";
                return false;
            }
            var id = this.todosCount + 1;
            var newtodo = { id: id, name: this.todo, done: false, rejected: false };
            this.$store.dispatch("todo/addTodo", newtodo);
            this.todo = "";
        }
    }
}
</script>