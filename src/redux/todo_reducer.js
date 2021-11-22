import {
  TODO_ADD,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_DELETE_ALL_DONE,
  TODO_CHANGE_ALL_STATUS
} from './constant'

const todos = []

export default function todo_reducer(store = todos, { type, data }) {
  switch (type) {
    case TODO_ADD:
      return [...store, data]
    case TODO_UPDATE:
      return store.map(todo => {
        if (todo.id !== data.id) return todo
        return { ...todo, ...data }
      })
    case TODO_DELETE:
      const { id } = data
      return store.filter(todo => {
        return todo.id !== id
      })
    case TODO_DELETE_ALL_DONE:
      return store.filter(todo => !todo.done)
    case TODO_CHANGE_ALL_STATUS:
      const { done } = data
      return store.map(todo => {
        return { ...todo, done }
      })
    default:
      return store
  }
}