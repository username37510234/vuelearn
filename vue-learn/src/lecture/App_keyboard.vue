<template>
  <div>
    <input type="text" @keyup.enter="addTodo" />
    <ul>
      <li v-for="(todo,index) in todos" :key="index">
      {{ todo }} <button @click="delTodo(index)">x</button></li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
setup(){
  const todos = reactive([]);

  const addTodo = e => {
    todos.push(e.target.value);
    e.target.value = '';
    e.target.focus();
  }
  const delTodo = index => {
    todos.splice(index,1);
  }
  return {
    todos,
    addTodo,
    delTodo
  }
}
}
</script>

<style>

</style>