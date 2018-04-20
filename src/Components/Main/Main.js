import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Header from '../../Sections/Header'
import Page from '../../Sections/Page'
import Footer from '../../Sections/Footer'
import Overlay from '../../Sections/Overlay'

import Home from '../../Pages/Home'
import $Search from '../../Pages/$Search'
import $Randomizer from '../../Pages/$Randomizer'
import $Ingredients from '../../Pages/$Ingredients'

import Nav from '../Nav'

const Main = ({ children }) => (
  <div className="main grid-layout">
    {/* <Overlay /> */}
    <Header>
      <Nav />
    </Header>
    <Page>
      <div className="app-wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/search" component={$Search} />
        <Route path="/randomizer" component={$Randomizer} />
        <Route path="/ingredients" component={$Ingredients} />
      </div>
    </Page>
    <Footer />
  </div>
)

Main.propTypes = {
  children: PropTypes.any,
}

export default Main
