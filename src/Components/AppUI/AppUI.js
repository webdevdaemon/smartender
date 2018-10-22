import React from 'react'

import Nav from '../Nav'
import Main from '../../Sections/Main'
import Header from '../../Sections/Header'
import Footer from '../../Sections/Footer'
import PageRoutes from '../../_helpers/page-routes'

import styled from 'react-emotion'

const UI = styled('div')`
  display: block;
  background: #eeffff;
  width: 100vw;
  max-height: 100vh;
  min-height: 100vh;
  z-index: 0;
`

const AppUI = props => (
  <UI className="app-ui">
    <Header />
    <Main>
      <PageRoutes />
    </Main>
    <Footer>
      <Nav />
    </Footer>
  </UI>
)

export default AppUI
