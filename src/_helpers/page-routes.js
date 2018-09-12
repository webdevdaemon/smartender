/**
 * @augments {Component<{  searchCache:object,  currentRecipe:object,  updateSearchCache:Function,	updateCurrentRecipe:Function,	setAuthState:Function.isRequired,	authenticated:boolean.isRequired,	admin:boolean,	user:object,	drinks:object,	recipes:object,	ingredients:object,	glasses:object,	categories:object,	searchCache:object,	searchCacheRoster:any,	listResults:array,>}
 */
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

const PageRoutes = props => {
	const _props = {...props}
  return (
    <div className="app-wrapper">
      <Route
        path="/account"
        render={({match, ...props}, _props) => <TabAccount {..._props} {...props} match={match} />}
      />
      <Route exact path="/" render={({match, ...props}, _props) => <Home {...props} match={match} />} />
      <Route
        path="/search"
        render={({match, ...props}, _props) => <TabSearch {..._props} {...props} match={match} />}
      />
      <Route
        path="/browser"
        render={({match, ...props}, _props) => <TabBrowser {..._props} {...props} match={match} />}
      />
      <Route path="/add" render={({match, ...props}, _props) => <TabAdd {..._props} {...props} match={match} />} />
      <Route
        path="/randomizer"
        render={({match, ...props}, _props) => <TabRandomizer {..._props} {...props} match={match} />}
      />
      <Route
        path="/recipe/:id"
        render={({match, location, history, ...props}) => (
          <TabRecipe {..._props} {...props} match={match} location={location} history={history} />
        )}
      />
    </div>
  )
}

PageRoutes.propTypes = {
  searchCache: PropTypes.object,
  currentRecipe: PropTypes.object,
  updateSearchCache: PropTypes.func,
  updateCurrentRecipe: PropTypes.func,
  setAuthState: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  admin: PropTypes.bool,
  user: PropTypes.object,
  drinks: PropTypes.object,
  recipes: PropTypes.object,
  ingredients: PropTypes.object,
  glasses: PropTypes.object,
  categories: PropTypes.object,
  searchCache: PropTypes.object,
  searchCacheRoster: PropTypes.any,
  listResults: PropTypes.array,
}

export default PageRoutes
