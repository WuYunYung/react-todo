import React, { Component } from 'react'
import styled from 'styled-components'
import store from '../redux/store'
import { Button, Checkbox } from 'antd';

const MsFooter = styled.footer`
  border-top: 1px solid #ddd;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  & > p{
    flex-grow:1;
  }
`

export default class Footer extends Component {

  handleClick = () => {
    if (!window.confirm('请确认是否删除所有已完成todo？')) return
    store.dispatch({ type: 'todo/deleteAllDone' })
  }

  handleChange = (e) => {
    const { checked } = e.target
    store.dispatch({
      type: 'todo/changeAllStatus',
      data: { done: checked }
    })
  }

  render() {

    const todos = store.getState()

    const todos_count = todos.length

    const done_count = todos.reduce((acc, cur) => {
      if (cur.done) return acc + 1
      return acc
    }, 0)

    const isAllDone = todos_count !== 0 && done_count === todos_count

    return (
      <MsFooter className="footer">
        <Checkbox
          onChange={this.handleChange}
          checked={isAllDone}>
          已完成{done_count}/总共{todos_count}
        </Checkbox>
        <Button
          type="danger"
          onClick={this.handleClick}>
          删除所有已完成
        </Button>
      </MsFooter>
    )
  }
}
