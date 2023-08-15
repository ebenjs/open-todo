<script setup>
import { ref } from 'vue';
import TodoBar from './TodoBar.vue';

import { dummyTodos } from '@/data-provider/dummy-todos';

const emit = defineEmits(['delete', 'toggle-completed'])
const props = defineProps({
    todo: {
        type: Object,
        required: true
    }
})

const onDeleteTodo = (data) => {
    emit('delete', data)
}

const onToggleCompleted = (data)=>{
    emit('toggle-completed', data)
}

</script>

<template>
    <div class="todo-detail">
        <div v-if="todo.title">
            <TodoBar :todo="todo" @delete="onDeleteTodo" @toggle-completed="onToggleCompleted" />
            <h1>{{ todo.title }}</h1>
            <p>{{ todo.description }}</p>
            <p>
            <small>
                Added on {{ todo.date }}
            </small>
        </p>
        </div>
        <div v-else>
            No data loaded yet
        </div>
    </div>
</template>

<style lang="scss" scoped>
.todo-detail {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: solid 1px rgba(0, 0, 0, 0.1);
    background-color: white;
    padding: 15px 30px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
