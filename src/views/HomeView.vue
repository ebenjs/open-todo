<script setup>
import { ref } from 'vue';
import AppHeader from '../components/AppHeader.vue';
import MainContent from '../components/HomeView/MainContent.vue';
import TodoList from '../components/HomeView/TodoList.vue';
import AppBar from '../components/HomeView/AppBar.vue';

import router from '../router/index.js';

import { dummyTodos } from '../data-provider/dummy-todos';

const currentTodo = ref({});

const sendShowDetails = (data) => {
  currentTodo.value = data;
}

const onDeleteTodo = (data) => {
  const index = dummyTodos.value.findIndex((todo) => todo.id === data.id)
  if (index > -1) {
    dummyTodos.value.splice(index, 1);
    currentTodo.value = {}
  }

  updateLocalStorage(dummyTodos.value)
}

const onDeleteAll = () => {
  dummyTodos.value.splice(0)
  updateLocalStorage(dummyTodos.value)
}

const onToggleCompleted = (data) => {
  const index = dummyTodos.value.findIndex((todo) => todo.id === data.id)
  if (index > -1) {
    dummyTodos.value[index].completed = !dummyTodos.value[index].completed;
  }
  
  updateLocalStorage(dummyTodos.value)
}

const updateLocalStorage = (newData) => {
  localStorage.setItem('todos', JSON.stringify(newData))
}

router.afterEach((to, from) => {
  const todos = localStorage.getItem('todos');
  if (todos) {
    dummyTodos.value = JSON.parse(todos);
  }
})

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <AppHeader />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <AppBar @delete-all="onDeleteAll" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <TodoList :todos="dummyTodos" @show="sendShowDetails" />
      </div>
      <div class="col-lg-8">
        <MainContent :todo="currentTodo" @delete="onDeleteTodo" @toggle-completed="onToggleCompleted" />
      </div>
    </div>
  </div>
</template>
