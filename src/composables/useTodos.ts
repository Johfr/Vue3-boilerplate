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

  return {
    todoItems,
    loading,
    error,
    fetchTodos
  }
}
