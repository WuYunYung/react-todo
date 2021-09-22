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

  render() {
    return (
      <div id="app">
        <Header addTodo={this.addTodo} />
        <main>
          <List
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
        </main>
        <Footer />
      </div>
    )
  }
}
