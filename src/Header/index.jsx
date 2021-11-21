import React, { Component } from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import { Input } from 'antd'
import store from '../redux/store';

const StyledHeader = styled.header`
  box-shadow: 0 3px 3px #ddd;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  align-items: center;
`

export default class Header extends Component {

  handleEnter = e => {
    const { keyCode, target } = e
    const { value } = target
    if (keyCode !== 13) return
    if (!value) return
    store.dispatch({
      type: 'todo/add',
      data: {
        id: nanoid(),
        content: value,
        done: false
      }
    })
    target.value = ''
  }

  render() {
    return (
      <StyledHeader className="header">
        <Input
          bordered={false}
          placeholder="请输入..."
          onKeyUp={this.handleEnter} />
      </StyledHeader>
    )
  }
}
