import React, { Component } from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import store from '../redux/store';

const StyledHeader = styled.header`
  box-shadow: 0 3px 3px #ddd;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  align-items: center;
`

const StyledInput = styled.input`
  flex-grow: 1;
  display: block;
  height: 100%;
  border: none;
  outline: none;
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
        <StyledInput
          type="text"
          placeholder="请输入..."
          onKeyUp={this.handleEnter}
        />
      </StyledHeader>
    )
  }
}
