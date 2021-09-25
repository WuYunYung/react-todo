import React, { Component } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Item from '../Item'

const StyleList = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  margin: 0;
`

export default class List extends Component {

  static propTypes = {
    todos: propTypes.array.isRequired,
    updateTodo: propTypes.func.isRequired,
    deleteTodo: propTypes.func.isRequired
  }

  render() {
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <StyleList>
        {todos.map(todo =>
          <Item
            key={todo.id}
            {...todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />)}
      </StyleList>
    )
  }
}
