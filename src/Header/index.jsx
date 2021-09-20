import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  box-shadow: 0 3px 3px #ddd;
  box-sizing: border-box;
  padding: 8px;
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
  render() {
    return (
      <StyledHeader className="header">
        <StyledInput type="text" placeholder="New todo..."/>
      </StyledHeader>
    )
  }
}
