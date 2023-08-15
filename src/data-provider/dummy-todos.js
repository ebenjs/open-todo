import { ref } from "vue";

const todos = localStorage.getItem('todos');
export const dummyTodos = ref(todos ? JSON.parse(todos) : []);