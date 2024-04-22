<template>
    <div class="hello">
        <div class="row d-flex justify-content-center container">
            <div class="col-md-4">

            </div>
            <div class="col-md-8">
                <div class="card-hover-shadow-2x mb-3 card">
                    <div class="card-header-tab card-header">
                        <div class="
                            card-header-title
                            font-size-lg
                            text-capitalize
                            font-weight-normal
                        ">
                            <h3><i class="fa fa-tasks"></i>&nbsp;Task Lists</h3>
                        </div>
                    </div>

                    <ToDoList />
                    <TodoCreate />


                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue';
import TodoCreate from '@/components/TodoCreate.vue';

export default {
    components: {
        ToDoList,
        TodoCreate
    }
}
</script>