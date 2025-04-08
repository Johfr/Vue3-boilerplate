// composables/useTodos.ts
import { ref } from 'vue'
import type { Todo } from '@/types/Todo'

export const useTodos = () => {
  const todoItems = ref<Todo[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchTodos = async () => {
    loading.value = true
    try {
      const res = await fetch('/api/todos')
      if (!res.ok) throw new Error('Erreur serveur')
      const data = await res.json()
      todoItems.value = data
    } catch (err: any) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const updateTodo = async (item: Todo, method: string): Promise<void> => {
    loading.value = true
    try {
      let fetchUri = '/api/todos/'+ item.id

      if (method === 'POST') fetchUri = '/api/todos/'
      
      const res = await fetch(fetchUri, {
        method,
        body: JSON.stringify(item)
      })
      
      if (!res.ok) throw new Error('Erreur serveur')
    } catch (err: any) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    todoItems,
    loading,
    error,
    fetchTodos,
    updateTodo,
  }
}
