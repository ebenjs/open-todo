<script setup>

import { ref, onMounted, watch  } from 'vue';
import Todo from './Todo.vue';
import AppBar from './AppBar.vue';

const filteredTodo = ref([])
const currentTab = ref('all')

const emit = defineEmits(['show'])
const props = defineProps(['todos'])

const showDetails = (data) => {
    emit('show', data)
}

const filterCompleted = () => {
    filteredTodo.value = props.todos.filter(todo => todo.completed)
    currentTab.value = 'completed'
}

const filterOngoing = () => {
    filteredTodo.value = props.todos.filter(todo => !todo.completed)
    currentTab.value = 'ongoing'
}

const filterShowAll = () => {
    filteredTodo.value = props.todos
    currentTab.value = 'all'
}

onMounted(() => {
    filteredTodo.value = props.todos
})

watch(props.todos, (newTodos) => {
  console.log(`newtodo is: ${newTodos}`)
  switch (currentTab.value) {
    case 'all':
      filterShowAll()
      break
    case 'completed':
      filterCompleted()
      break
    case 'ongoing':
      filterOngoing()
      break
  }
})

</script>

<template>
    <div class="todo-list">
        <div class="filters">
            <div class="topcoat-button-bar__item">
                <button class="topcoat-button-bar__button--large" @click="filterShowAll">Show all</button>
            </div>
            <div class="topcoat-button-bar__item">
                <button class="topcoat-button-bar__button--large" @click="filterCompleted">Completed</button>
            </div>
            <div class="topcoat-button-bar__item">
                <button class="topcoat-button-bar__button--large" @click="filterOngoing">On going</button>
            </div>
        </div>
        <Todo v-for="todo in filteredTodo" :key="todo.id" :todo="todo" @show="showDetails" />
    </div>
</template>

<style lang="scss" scoped>
.todo-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: solid 1px rgba(0, 0, 0, 0.1);
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.filters{
    width: 50px;
    background-color: red;
}
</style>
