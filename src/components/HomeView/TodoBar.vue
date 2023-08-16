<script setup>
import { computed } from 'vue'

const emit = defineEmits(['delete','toggle-completed'])
const props = defineProps({
    todo: {
        type: Object,
        required: true
    }
})

const renderCorrectIcon = computed(() => {
    return props.todo.completed ? 'fas fa-check-square' : 'fas fa-square'
})

const toggleCompleted = () => {
    emit('toggle-completed', props.todo)
}

const deleteTodo = () => {
    emit('delete', props.todo)
}

</script>
        
<template>
    <div class="app-bar">
        <button class="btn-circle" @click="toggleCompleted">
            <i :class="renderCorrectIcon"></i>
        </button>
        <button class="btn-circle" @click="deleteTodo">
            <i class="fas fa-times"></i>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.app-bar {
    padding: 0px 0px 25px 0px;
}

.filters {
    margin-left: 20px;
}

.btn-circle {
    @include circle-button
}

.btn-circle:not(:first-of-type) {
    margin-left: 10px;
}
</style>