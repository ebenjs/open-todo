<script setup>

const props = defineProps(['todo'])
const emit = defineEmits(['show'])

const showDetails = () => {
    emit('show', props.todo)
}

</script>

<template>
    <div class="todo" @click="showDetails">
        <h2 class="title">{{ todo.title }}</h2>
        <p> {{ $truncate(todo.description, 50) }} </p>
    </div>
</template>

<style lang="scss" scoped>
.title {
    color: $title-color;
}

.todo {
    border: $default-border;
    padding: 0px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.todo:hover {
    background-color: $hover-background;
    color: $white;
}

.todo:hover>.title {
    color: $white;
}
</style>