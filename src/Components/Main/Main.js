/**
* @augments {Component<{  setAuthState:Function.isRequired,  authenticated:boolean.isRequired,  admin:boolean,  user:object,  drinks:object,  recipes:object,  ingredients:object,  glasses:object,  categories:object,  searchCache:object,  searchCacheRoster:any,  listResults:array,>}
*/
import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../Sections/Header'
import Page from '../../Sections/Page'
import Footer from '../../Sections/Footer'
import PageRoutes from '../../_helpers/page-routes'
import Nav from '../Nav'

const Main = props => (
  <div className="main grid-layout">
    <Header {...props} />
    <Page>
      <PageRoutes {...props} />
    </Page>
    <Footer>
      <Nav {...props} />
    </Footer>
  </div>
)

Main.propTypes = {
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

export default Main
