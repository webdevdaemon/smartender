import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../Sections/Header'
import Page from '../../Sections/Page'
import Footer from '../../Sections/Footer'
import PageRoutes from '../../_helpers/page-routes'
import Nav from '../Nav'

const Main = props => (
  <div className="main grid-layout">
		<Header {...props}/>

    <Page>
			<PageRoutes {...props}/>
    </Page>

    <Footer>
			<Nav {...props}/>
    </Footer>
  </div>
)

Main.propTypes = {}

export default Main
