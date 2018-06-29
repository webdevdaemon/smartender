import React from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

import Home from '../Tabs/Home'
import TabSearch from '../Tabs/TabSearch'
import TabRandomizer from '../Tabs/TabRandomizer'
import TabRecipe from '../Tabs/TabRecipe'
import TabBrowser from '../Tabs/TabBrowser'

const PageRoutes = props => (
  <div className="app-wrapper">
		<Route exact path="/" render={
			({match}) => <Home {...props} match={match} />
		}/>
    <Route path="/search" render={
			({match}) => <TabSearch {...props} match={match} />
		}/>
    <Route path="/browser" render={
			({match}) => <TabBrowser {...props} match={match} />
		}/>
    <Route path="/randomizer" render={
			({match}) => <TabRandomizer {...props} match={match} />
		}/>
		<Route path="/recipe/:id" render={
			props => (
				<TabRecipe {...props} />
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
