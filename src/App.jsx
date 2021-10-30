import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
      <Router>
        <div id="app">
          <Header addTodo={addTodo} />
          <main>
            <nav>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
            </nav>
            <div>
              <Switch>
                <Route path="/home">there is home!</Route>
                <Route path="/about">there is about!</Route>
              </Switch>
            </div>
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
      </Router>
    )
  }
}
