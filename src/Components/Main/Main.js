/**
* @augments {Component<{	user:any,	drinks:object,	recipes:object,	ingredients:object,	glasses:object,	categories:object,	modalVisible:boolean,	sidebarVisible:boolean,	addDrinkNamefunc,	addDrinkRecipefunc,	toggleSidebarfunc,	toggleModal:Function,	toggleAccount:Function,	toggleLogin:Function,>}
*/
import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../Sections/Header'
import Page from '../../Sections/Page'
import Footer from '../../Sections/Footer'
import PageRoutes from '../../_helpers/page-routes'
import Nav from '../Nav'
import Sidebar from '../../Sections/Sidebar'
import Modal from '../../Sections/Modal'

const Main = props => (
  <div className="main grid-layout">
		<Header {...props}/>

    <Page>
			<PageRoutes {...props}/>
			<Sidebar {...props} />
			<Modal {...props} />
		</Page>
		
		
    <Footer>
			<Nav {...props}/>
    </Footer>
  </div>
)

Main.propTypes = {
	user: PropTypes.any,
	drinks: PropTypes.object,
	recipes: PropTypes.object,
	ingredients: PropTypes.object,
	glasses: PropTypes.object,
	categories: PropTypes.object,
	modalVisible: PropTypes.bool,
	sidebarVisible: PropTypes.bool,
	addDrinkName:PropTypes.func,
	addDrinkRecipe:PropTypes.func,
	toggleSidebar:PropTypes.func,
	toggleModal: PropTypes.func,
	toggleAccount: PropTypes.func,
	toggleLogin: PropTypes.func,
}

export default Main
