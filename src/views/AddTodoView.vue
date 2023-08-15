<script setup>
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';

import AddTodoMain from '@/components/AddTodoView/AddTodoMain.vue';

const currentTodo = ref({});


</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <AppHeader />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <AddTodoMain :todo="currentTodo" @delete="onDeleteTodo" @toggle-completed="onToggleCompleted" />
      </div>
    </div>
  </div>
</template>
