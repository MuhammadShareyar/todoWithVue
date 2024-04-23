<template>

    <div>

        <div class="todo-indicator" :class="{
            'bg-warning': todo.rejected,
            'bg-success': todo.done,
        }"></div>
        <div class="widget-content p-0">
            <div class="widget-content-wrapper">

                <div class="widget-content-left ml-2">
                    <div class="widget-heading">
                        {{ todo.name }}
                        <div v-if="todo.rejected" class="badge ml-2 badge-danger">
                            Rejected
                        </div>
                        <div v-else class="badge ml-2 badge-info">
                            New
                        </div>
                    </div>
                    <div class="widget-subheading"><i>By Bob</i></div>
                </div>
                <div v-if="!todo.done && !todo.rejected" class="widget-content-right">
                    <button class="
                                    border-0
                                    btn-transition btn btn-outline-success
                                  " @click="doneToDo(todo.id)">
                        <i class="fa fa-check"></i>
                    </button>
                    <button class="
                                    border-0
                                    btn-transition btn btn-outline-danger
                                  " @click="rejectToDo(todo.id)">
                        <i class="fa fa-close"></i>
                    </button>
                    <button class="
                                    border-0
                                    btn-transition btn btn-outline-danger
                                  " @click="deleteToDo(todo.id)">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { defineProps } from 'vue';

/** todoStore */
const todoStore  = useStore();
/** todoStore */

/** defining props */
defineProps(['todo']);
/** defining props */


/** methods declarations */
function rejectToDo(id){
    todoStore.dispatch("todo/rejectTodo",id);
}

function deleteToDo(id) {
    todoStore.dispatch("todo/deleteTodo", id);
}

function doneToDo(id) {
    todoStore.dispatch("todo/doneTodo", id);
}
/** methods declarations */
</script>