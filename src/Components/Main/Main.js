import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../Sections/Header'
import Page from '../../Sections/Page'
import Footer from '../../Sections/Footer'
import PageRoutes from '../../_helpers/page-routes'
import Masthead from '../Masthead/'
import Nav from '../Nav'

const Main = ({children}) => (
  <div className="main grid-layout">
    <Header />

    <Page>
      <PageRoutes />
    </Page>

    <Footer>
      <Nav />
    </Footer>
  </div>
)

Main.propTypes = {
  children: PropTypes.any,
}

export default Main
