import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Employee from './pages/Employee'
import Add from './pages/Add'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/employee/:id" exact component={Employee} />
            <Route path="/add" exact component={Add} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
