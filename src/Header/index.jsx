import React, { Component } from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import { Input } from 'antd'
import store from '../redux/store';
import { todoAddAction } from '../redux/todo_action'

const StyledHeader = styled.header`
  box-shadow: 0 3px 3px #ddd;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  align-items: center;
`

export default class Header extends Component {

  state = {
    value: ''
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({ value })
  }

  handleEnter = e => {
    const { keyCode, target } = e
    const { value } = target
    if (keyCode !== 13) return
    if (!value) return
    store.dispatch(todoAddAction({
      id: nanoid(),
      content: value,
      done: false
    }))
    this.setState({ value: '' })
  }

  render() {
    const { value } = this.state
    return (
      <StyledHeader className="header">
        <Input
          bordered={false}
          placeholder="请输入..."
          allowClear
          value={value}
          onChange={this.handleChange}
          onKeyUp={this.handleEnter} />
      </StyledHeader>
    )
  }
}
