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
		<Route path="/account" render={
			({match, ...props}) => (
				<TabAccount {...props} match={match}/>
			)
		} />
		<Route exact path="/" render={
			({match, ...props}) => (
				<Home {...props} match={match}/>
			)
		} />
		<Route path="/search" render={
			({match, ...props}) => (
				<TabSearch {...props} match={match}/>
			)
		} />
		<Route path="/browser" render={
			({match, ...props}) => (
				<TabBrowser {...props} match={match}/>
			)
		} />
		<Route path="/add" render={
			({match, ...props}) => (
				<TabAdd {...props} match={match}/>
			)
		} />
		<Route path="/randomizer" render={
			({match, ...props}) => (
				<TabRandomizer {...props} match={match}/>
			)
		} />
		<Route path="/recipe/:id" render={
			({match, location, history, ...props}) => (
				<TabRecipe {...props} match={match} location={location} history={history}/>
			)
		} />
  </div>
)

PageRoutes.propTypes = {
  searchCache: PropTypes.object,
  currentRecipe: PropTypes.object,
  updateSearchCache: PropTypes.func,
  updateCurrentRecipe: PropTypes.func,
}

export default PageRoutes
