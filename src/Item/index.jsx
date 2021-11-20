import React, { Component } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import store from '../redux/store'

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
  display:flex;
  align-items: center;

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
    const { id } = this.props
    store.dispatch({
      type: 'todo/update',
      data: { id, done: checked }
    })
  }

  handleClick = () => {
    const { id } = this.props
    if (!window.confirm('是否确认删除?')) return
    store.dispatch({
      type: 'todo/delete',
      data: { id }
    })
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
