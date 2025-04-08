import { defineStore } from 'pinia'
import { Todo } from '@/types/Todo'
import { useTodos } from '@/composables/useTodos'

export const useTodoStore = defineStore('todo', () => {
  const { todoItems, fetchTodos, updateTodo, loading, error } = useTodos()
  
  const loadTodos = async () => {
    await fetchTodos()
  }

  const updateStatus = async (todoItem: Todo): Promise<void> => {
    // Trouve l'item dans le tableau et met à jour son statut
    const index = todoItems.value.findIndex((item): Boolean => item.name === todoItem.name)

    if (index !== -1) {
      todoItems.value[index].status = !todoItems.value[index].status
    }

    await updateTodo(todoItem, 'PUT')
  }

  const updateName = async (todoItem: Todo, newName: string): Promise<void> => {
    const index = todoItems.value.findIndex((item): Boolean => item.id === todoItem.id)

    if (index !== -1) {
      todoItems.value[index].name = newName
    }

    await updateTodo(todoItem, 'PUT')
  }

  const addNewTodo = async (todoItem: Todo, newName: string): Promise<void> => {
    // json server accept only string as key
    const lastTodosId = todoItems.value.at(-1).id
    const newId = (parseInt(lastTodosId) + 1)
    todoItem.id = newId.toString()

    todoItem.name = newName

    await updateTodo(todoItem, 'POST')
    .then(() => todoItems.value.push(todoItem))
  }

  const deleteTodo = async (todoItem: Todo, newName: string): Promise<void> => {
    const index = todoItems.value.findIndex((item): Boolean => item.id === todoItem.id)

    await updateTodo(todoItem, 'DELETE')
    .then(() => todoItems.value.splice(index, 1))
  }

  return {
    loadTodos,
    todoItems,
    updateStatus,
    updateName,
    addNewTodo,
    deleteTodo,
    loading
  }
})
