import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Reset } from 'styled-reset'
import Home from '@/pages'
import Game from '@/pages/game'
import Games from '@/pages/games'
import Signup from '@/pages/signup'
import Login from '@/pages/login'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Router>
        <Switch>
          <Route path="/games/:id">
            <Game />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
