<script setup lang="ts">
import { Todo } from '@/types/Todo'
import TodoItems from '@/components/todo/TodoItems.vue'
import { useTodoStore } from '@/stores/todoStore'
import Vbutton from '@/design-system/Vbutton.vue'
import UpdateTodoForm from '@/components/todo/update-todo-form.vue'

defineProps<{
  items: Todo[]
}>()

const updateTodoName = (item: Todo, newName: string) => useTodoStore().updateName(item, newName)
const toggleTodoStatus = (item: Todo) => useTodoStore().updateStatus(item)

const formModel = ref<boolean>(false)
const formItem = ref<Todo>()

const showUpdateForm = (item: Todo): void => {
  formModel.value = true
  formItem.value = item
}
</script>

<template>
  <h2>Todo list</h2>

  <ul>
    <TodoItems v-for="(item, itemId) in items" :key="itemId" :item="item">
      <template #title>
        <p
          :class="{ '--done': item.status}"
        >
          Name: {{ item.name }}
        </p>
      </template>
      
      <template #actions>
        <Vbutton @click="showUpdateForm(item)" :btnTitle="'update'"/>
        <Vbutton @click="toggleTodoStatus(item)" :btnTitle="'validate'"/>
      </template>
    </TodoItems>
  </ul>

  <UpdateTodoForm v-if="formModel" v-model="formModel" :item="formItem" >
    <template #actions="{slotProps}">
      <Vbutton @click="updateTodoName(slotProps.item, slotProps.newName)" :btnTitle="'Valider'" />
    </template>
  </UpdateTodoForm>

  <!-- <UpdateTodoForm v-if="formModel" v-model="formModel" v-model:title="formItem.name" :item="formItem">
    <template #actions>
      <Vbutton @click="updateTodoName(formItem)" :btnTitle="'changer nom'"/>
    </template>
  </UpdateTodoForm> -->
</template>