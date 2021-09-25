import React, { Component } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const MsFooter = styled.footer`
  border-top: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  & > p{
    flex-grow:1;
  }
`

const MsButton = styled.button`
  background: #f00;
  border:none;
  border-radius:5px;
  color:#fff;
  padding:4px 8px;
`

export default class Footer extends Component {

  static propTypes = {
    todos: propTypes.array.isRequired,
    deleteAllDoneTodo: propTypes.func.isRequired,
    changeAllTodoStatus: propTypes.func.isRequired
  }

  handleClick = () => {
    if (!window.confirm('请确认是否删除所有已完成todo？')) return
    this.props.deleteAllDoneTodo()
  }

  handleChange = (e) => {
    const { checked } = e.target
    this.props.changeAllTodoStatus(checked)
  }

  render() {

    const { todos } = this.props

    const todos_count = todos.length

    const done_count = todos.reduce((acc, cur) => {
      if (cur.done) return acc + 1
      return acc
    }, 0)

    const isAllDone = todos_count !== 0 && done_count === todos_count

    return (
      <MsFooter className="footer">
        <input type="checkbox" onChange={this.handleChange} checked={isAllDone} />
        <p>已完成{done_count}/总共{todos_count}</p>
        <MsButton onClick={this.handleClick}>删除所有已完成</MsButton>
      </MsFooter>
    )
  }
}
