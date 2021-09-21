import React, { Component } from 'react'
import styled from 'styled-components'

const Item = styled.li`
  padding: 8px;
  display: flex;
  align-items: center;
  user-select: none;
  &:hover{
    background:#ddd2;
  } 
`
const Label = styled.label`
  flex-grow: 1;
`;

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

  state = {
    show: false
  }

  handleMouse = (flag) => {
    return () => {
      this.setState({
        show: flag
      })
    }
  }

  render() {
    const { show } = this.state
    return (
      <Item
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <Label>
          <input type="checkbox" />
          <span>XXXXXX</span>
        </Label>
        {show ? <TextBtn /> : '' }
      </Item>
    )
  }
}
