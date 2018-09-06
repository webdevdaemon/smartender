import React from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

import Home from '../Tabs/Home'
import TabSearch from '../Tabs/TabSearch'
import TabAdd from '../Tabs/TabAdd'
import TabRandomizer from '../Tabs/TabRandomizer'
import TabRecipe from '../Tabs/TabRecipe'
import TabBrowser from '../Tabs/TabBrowser'
import TabAccount from '../Tabs/TabAccount'

const PageRoutes = props => (
  <div className="app-wrapper">
		<Route path="/account" render={props => <TabAccount {...props}/>}/>
		<Route exact path="/" render={props => <Home {...props}/>}/>
		<Route path="/search" render={props => <TabSearch {...props}/>}/>
		<Route path="/browser" render={props => <TabBrowser {...props}/>}/>
		<Route path="/add" render={props => <TabAdd {...props}/>}/>
		<Route path="/randomizer" render={props => <TabRandomizer {...props}/>}/>
		<Route path="/recipe/:id" render={props => <TabRecipe {...props}/>}/>
  </div>
)

PageRoutes.propTypes = {
  searchCache: PropTypes.object,
  currentRecipe: PropTypes.object,
  updateSearchCache: PropTypes.func,
  updateCurrentRecipe: PropTypes.func,
}

export default PageRoutes
