import React from 'react'
// import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

import Home from '../Tabs/Home'
import TabAdd from '../Tabs/TabAdd'
import TabSearch from '../Tabs/TabSearch'
import TabBrowser from '../Tabs/TabBrowser'
import TabAccount from '../Tabs/TabAccount'
import TabRandomizer from '../Tabs/TabRandomizer'

const PageRoutes = props => {
  return (
    <div className="app-wrapper">
      <Route exact path="/" render={props => <Home />} />
      <Route path="/account" render={props => <TabAccount />}/>
      <Route path="/search" render={props => <TabSearch/>} />
      <Route path="/browser" render={props => <TabBrowser />} />
      <Route path="/add" render={props => <TabAdd />} />
      <Route path="/randomizer" render={props => <TabRandomizer />} />
    </div>
  )
}

export default PageRoutes
