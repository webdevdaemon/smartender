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
        exact
        path="/"
        render={props => <Home {...props} {..._props} match={props.match} />}
      />
      <Route
        path="/account"
        render={props => (
          <TabAccount {...props} {..._props} match={props.match} />
        )}
      />
      <Route
        path="/search"
        render={props => (
          <TabSearch {...props} {..._props} match={props.match} />
        )}
      />
      <Route
        path="/browser"
        render={props => (
          <TabBrowser {...props} {..._props} match={props.match} />
        )}
      />
      <Route
        path="/add"
        render={props => <TabAdd {...props} {..._props} match={props.match} />}
      />
      <Route
        path="/randomizer"
        render={props => (
          <TabRandomizer {...props} {..._props} match={props.match} />
        )}
      />
      <Route
        path="/recipe/:id"
        render={props => (
          <TabRecipe
            {...props}
            {..._props}
            match={props.match}
            location={props.location}
            history={props.history}
          />
        )}
      />
    </div>
  )
}

PageRoutes.propTypes = {
  updateSearchResults: PropTypes.func.isRequired,
  setAuthState: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  currentRecipe: PropTypes.object,
  updateSearchCache: PropTypes.func,
  updateCurrentRecipe: PropTypes.func,
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
