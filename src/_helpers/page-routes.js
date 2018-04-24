import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../Pages/Home'
import $Search from '../Pages/$Search'
import $Randomizer from '../Pages/$Randomizer'
import $BeverageBrowser from '../Pages/$BeverageBrowser'

const PageRoutes = () => (
  <div className="app-wrapper">
    <Route exact path="/" component={Home} />
    <Route path="/search" component={$Search} />
    <Route path="/browser" component={$BeverageBrowser} />
    <Route path="/randomizer" component={$Randomizer} />
  </div>
)

export default PageRoutes
