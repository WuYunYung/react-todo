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
  background: #0000;
  color:#f00;
  text-shadow: 1px 1px 1px #ddd;
  cursor: pointer;
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
        {show ? <TextBtn>DELETE</TextBtn> : '' }
      </Item>
    )
  }
}
