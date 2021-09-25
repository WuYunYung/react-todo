import React, { Component } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const Item = styled.li`
  padding: 16px;
  display: flex;
  align-items: center;
  user-select: none;
  &:hover{
    background:#ddd2;
  } 
`
const Label = styled.label`
  flex-grow: 1;
`
const TextBtn = styled.button`
  border: none;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display:flex;
  justify-content:center;
  align-items:center;
  &:before {
    content: "\\1F5D9";
    line-height:8px;
    font-size:8px;
  }
`

export default class index extends Component {

  static propTypes = {
    id: propTypes.string.isRequired,
    updateTodo: propTypes.func.isRequired,
    done: propTypes.bool.isRequired
  }

  state = {
    show: false
  }

  handleMouse = flag => {
    return () => {
      this.setState({
        show: flag
      })
    }
  }

  handleChange = e => {
    const { checked } = e.target
    const { updateTodo, id } = this.props
    updateTodo(id, checked)
  }

  handleClick = () => {
    const { deleteTodo, id } = this.props
    if (!window.confirm('是否确认删除?')) return
    deleteTodo(id)
  }

  render() {
    const { show } = this.state
    const { content, done } = this.props
    return (
      <Item
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <Label>
          <input type="checkbox" onChange={this.handleChange} checked={done} />
          <span>{content}</span>
        </Label>
        {show ? <TextBtn onClick={this.handleClick} /> : ''}
      </Item>
    )
  }
}
