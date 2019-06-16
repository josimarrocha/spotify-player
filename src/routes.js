import React from 'react'
import { Switch, Route } from 'react-router'
import home from './pages/home'
import player from './pages/player'

const routes = () => (
  <Switch>
    <Route path='/' exact component={home} />
    <Route path='/player/:songId' exact component={player} />
  </Switch>
)

export default routes