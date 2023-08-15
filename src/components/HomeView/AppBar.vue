<script setup>

const emit = defineEmits(['delete-all'])

const removeAll = () => {
    emit('delete-all')
}

</script>
        
<template>
    <div class="app-bar">
        <div class="row">
            <div class="col-lg-4">
                <span class="">
                    <div class="topcoat-button-bar__item">
                        <button class="topcoat-button--large--cta" @click="() => $router.push({ name: 'addTodo' })">Add a TODO</button>
                        <button class="topcoat-button--large--cta danger" @click="removeAll">Remove all TODOs</button>
                    </div>
                </span>
            </div>
            <div class="col-lg-8">
                <div class="topcoat-button-bar">

                </div>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.app-bar {
    padding: 0px 0px 25px 0px;
}

.danger {
    background-color: $error-color;
    margin-left: 10px;
}
</style>