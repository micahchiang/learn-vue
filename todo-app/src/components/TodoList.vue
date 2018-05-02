<template>
    <div>
        <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
        <todo @complete-todo="completeTodo" @delete-todo="deleteTodo" v-for="(todo, index) in todos" :todo="todo" :key="index"></todo>
    </div>
</template>

<script>
import Todo from './Todo';
export default {
  props: ['todos'],
  components: {
    Todo
  },
  methods: {
    deleteTodo(todo) {
      let todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo) {
      let todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    }
  }
};
</script>

<style>

</style>


