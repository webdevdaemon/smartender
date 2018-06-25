import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../Sections/Header'
import Page from '../../Sections/Page'
import Footer from '../../Sections/Footer'
import PageRoutes from '../../_helpers/page-routes'
import Nav from '../Nav'
import Overlay from '../../Sections/Overlay'

const Main = props => (
  <div className="main grid-layout">
		<Header {...props}/>

    <Page>
			<PageRoutes {...props}/>
		</Page>
		
		<Overlay>
		
		</Overlay>

    <Footer>
			<Nav {...props}/>
    </Footer>
  </div>
)

Main.propTypes = {
	searchCache: PropTypes.object,
	currentRecipe: PropTypes.object,
	updateSearchCache: PropTypes.func,
	updateCurrentRecipe: PropTypes.func,
}

export default Main
