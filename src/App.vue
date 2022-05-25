<template>
  <div id="app">
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDoList
  }
}
</script>

<style>

@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
@import "./assets/css/app.css";
</style>
