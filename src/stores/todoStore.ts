import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Todo } from '@/types/Todo'
import { useTodos } from '@/composables/useTodos'

export const useTodoStore = defineStore('todo', () => {
  const { todoItems, fetchTodos, loading, error } = useTodos()
  
  const loadTodos = async () => {
    await fetchTodos()
  }

  const updateStatus = (todoItem: Todo): void => {
    // Trouver l'item dans le tableau et mettre à jour son statut
    const index = todoItems.value.findIndex((item): Boolean => item.name === todoItem.name)

    if (index !== -1) {
      todoItems.value[index].status = !todoItems.value[index].status
    }
  }


  const updateName = (todoItem: Todo, newName: string): void => {
    const index = todoItems.value.findIndex((item): Boolean => item.id === todoItem.id)
    
    if (index !== -1) {
      todoItems.value[index].name = newName
    }
  }

  return {
    loadTodos,
    todoItems,
    updateStatus,
    updateName,
    loading
  }
})
