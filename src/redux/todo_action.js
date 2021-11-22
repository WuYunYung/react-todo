import {
  TODO_ADD,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_DELETE_ALL_DONE,
  TODO_CHANGE_ALL_STATUS
} from './constant'

export const todoAddAction = (data) => ({ type: TODO_ADD, data })

export const todoUpdateAction = (data) => ({ type: TODO_UPDATE, data })

export const todoDeleteAction = (data) => ({ type: TODO_DELETE, data })

export const todoDeleteAllDoneAction = () => ({ type: TODO_DELETE_ALL_DONE })

export const todoChangeAllStatus = (data) => ({ type: TODO_CHANGE_ALL_STATUS, data })


