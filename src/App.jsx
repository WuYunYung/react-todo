import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import './App.css'
import Header from './Header'
import List from './List'
import Footer from './Footer'

export default class App extends Component {

  render() {
    return (
      <Router>
        <div id="app">
          <Header />
          <main>
            <nav>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
            </nav>
            <div>
              <Switch>
                <Route path="/home">there is home!</Route>
                <Route path="/about">there is about!</Route>
                <Redirect to="/home" />
              </Switch>
            </div>
            <List />
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
}
