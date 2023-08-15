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
    padding: 15px 30px;
    @include box-design
}
</style>
