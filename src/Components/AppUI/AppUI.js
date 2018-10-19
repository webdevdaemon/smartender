import React from 'react'
// import PropTypes from 'prop-types'
import Header from '../../Sections/Header'
import Page from '../../Sections/Page'
import Footer from '../../Sections/Footer'
import PageRoutes from '../../_helpers/page-routes'
import Nav from '../Nav'

const AppUI = props => (
  <div className='app-ui'>
    <Header/>
    <Main>
      <PageRoutes/>
    </Main>
    <Footer>
      <Nav/>
    </Footer>
  </div>
)

export default AppUI
