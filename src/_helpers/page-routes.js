import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../Tabs/Home'
import Tab_Search from '../Tabs/Tab_Search'
import Tab_Randomizer from '../Tabs/Tab_Randomizer'
import Tab_Recipe from '../Tabs/Tab_Recipe'
import Tab_Browser from '../Tabs/Tab_Browser'

const PageRoutes = props => (
  <div className="app-wrapper">
    <Route exact path="/" render={
			({match}) => <Home {...props} match={match}/>
		} />
    <Route path="/search" render={
			({match}) => <Tab_Search {...props} match={match}/>
		} />
    <Route path="/browser" render={
			({match}) => <Tab_Browser {...props} match={match}/>
		} />
    <Route path="/randomizer" render={
			({match}) => <Tab_Randomizer {...props} match={match}/>
		} />
		{/* <Route path="/recipe/:id" render={
			({match}) => {
				console.log({match})
				return (
					<Tab_Recipe/>
				)
			}
		} /> */}
  </div>
)

export default PageRoutes
