const todos = []

export default function todo_reducer(store = todos, { type, data }) {
  switch (type) {
    case 'todo/add':
      return [...store, data]
    case 'todo/update':
      return store.map(todo => {
        if (todo.id !== data.id) return todo
        return { ...todo, ...data }
      })
    case 'todo/delete':
      const { id } = data
      return store.filter(todo => {
        return todo.id !== id
      })
    case 'todo/deleteAllDone':
      return store.filter(todo => !todo.done)
    case 'todo/changeAllStatus':
      const { done } = data
      return store.map(todo => {
        return { ...todo, done }
      })
    default:
      return store
  }
}