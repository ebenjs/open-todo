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
    @include box-design;
    padding: 15px 30px;
}

.back-button{
    margin-left: 10px;
}
</style>
