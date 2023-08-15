<script setup>
import { ref } from 'vue'

const title = ref('')
const description = ref('')

const addTodo = () => {
    if (title.value === '') {
        alert('Title is required')
        return
    }

    const todo = {
        id: Math.random().toString(36).substr(2, 9),
        title: title.value,
        description: description.value,
        completed: false,
        date: new Date().toLocaleString()
    }

    const todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))

    title.value = ''
    description.value = ''

    alert('Todo added successfully')
}

</script>

<template>
    <div class="wrapper">
        <div>You are about to add a new todo</div>
        <div>
            <k-input kid="title" placeholder="Todo title" :isRequired="true" class="topcoat-text-input--large"
                errorClass="error" v-model="title" />
        </div>

        <div>
            <textarea v-model="description" class="topcoat-textarea--large" rows="6" cols="36"
                placeholder="Description"></textarea>
        </div>
        <div>
            <button @click="addTodo" class="topcoat-button--large--cta">Add a new TODO</button>
            <router-link to="/" class="topcoat-button--large back-button">Back to home</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: solid 1px rgba(0, 0, 0, 0.1);
    background-color: white;
    padding: 15px 30px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.back-button{
    margin-left: 10px;
}
</style>
