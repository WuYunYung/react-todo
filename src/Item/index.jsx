import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  render() {
    return (
      <li className="item">
        <label>
          <input type="checkbox" />
          <span>XXXXXX</span>
        </label>
        <button>DELETE</button>
      </li>
    )
  }
}
