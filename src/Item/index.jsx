import React, { Component } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Checkbox } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import store from '../redux/store'
import { todoUpdateAction, todoDeleteAction } from '../redux/todo_action'


const Item = styled.li`
  height: 64px;
  padding: 0 16px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  user-select: none;
  &:hover{
    background:#ddd2;
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
    store.dispatch(todoUpdateAction({ id, done: checked }))
  }

  handleClick = () => {
    const { id } = this.props
    if (!window.confirm('是否确认删除?')) return
    store.dispatch(todoDeleteAction({ id }))
  }

  render() {
    const { show } = this.state
    const { content, done } = this.props
    return (
      <Item
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <Checkbox
          onChange={this.handleChange}
          checked={done}>
          {content}
        </Checkbox>
        {show ? <Button
          type="link"
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={this.handleClick} /> : ''}
      </Item>
    )
  }
}
