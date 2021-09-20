import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import List from './List'
import Footer from './Footer'

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <main>
          <List />
        </main>
        <Footer />
      </div>
    )
  }
}
