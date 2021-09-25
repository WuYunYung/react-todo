import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import List from './List'
import Footer from './Footer'

export default class App extends Component {

  state = {
    todos: []
  }

  addTodo = todoItem => {
    this.setState({
      todos: [...this.state.todos, todoItem]
    })
  }

  updateTodo = (id, value) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) return {
          ...todo, done: value
        }
        return todo
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id
      })
    })
  }

  deleteAllDoneTodo = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.done)
    })
  }

  changeAllTodoStatus = (done) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return { ...todo, done }
      })
    })
  }

  render() {
    const { state, addTodo, updateTodo, deleteTodo } = this
    const { todos } = state
    return (
      <div id="app">
        <Header addTodo={addTodo} />
        <main>
          <List
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        </main>
        <Footer
          todos={todos}
          deleteAllDoneTodo={this.deleteAllDoneTodo}
          changeAllTodoStatus={this.changeAllTodoStatus}
        />
      </div>
    )
  }
}
