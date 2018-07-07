import React, { Component } from 'react'
import Main from './Components/Main'
import { BrowserRouter } from 'react-router-dom'
import { base, auth } from './base'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			_v_i_p_: process.env.REACT_APP_WHOAMI === 'webdevdaemon',
			user: null,
			drinks: {},
			recipes: {},
			ingredients: {},
			glasses: {},
			categories: {},
			modalVisible: false,
			sidebarVisible: false,
			accountVisible: false,
		}
	}

	authListener = () =>
		auth.onAuthStateChanged((user) => {
			console.log('user: ', { user })
			this.setState({ user: user ? user : null })
		})

	componentDidMount() {
		if (this.state.user) {
			if (this.state._v_i_p_) {
				this.drinksRef = base.syncState('drinks', { context: this, state: 'drinks' })
				this.recipesRef = base.syncState('recipes', { context: this, state: 'recipes' })
				this.ingredientsRef = base.syncState('ingredients', { context: this, state: 'ingredients' })
				this.glassesRef = base.syncState('glasses', { context: this, state: 'glasses' })
				this.categoriesRef = base.syncState('categories', { context: this, state: 'categories' })
				return
			}
			this.drinksRef = base.bindToState('drinks', { context: this, state: 'drinks' })
			this.recipesRef = base.bindToState('recipes', { context: this, state: 'recipes' })
			this.ingredientsRef = base.bindToState('ingredients', { context: this, state: 'ingredients' })
			this.glassesRef = base.bindToState('glasses', { context: this, state: 'glasses' })
			this.categoriesRef = base.bindToState('categories', { context: this, state: 'categories' })
		}
	}
	componentWillUnmount() {
		base.removeBinding(this.drinksRef)
		base.removeBinding(this.recipesRef)
		base.removeBinding(this.ingredientsRef)
		base.removeBinding(this.glassesRef)
		base.removeBinding(this.categoriesRef)
	}
	addDrinkName = (drinkName) => {
		const uniqueId = `${drinkName}-${Date.now()}`
		const alpha = /\w/.test(drinkName[0]) ? `${drinkName[0]}`.toLowerCase() : '_'
		const listToMerge = {
			[alpha]: {
				...this.state.drinks[alpha],
				drinkName: uniqueId,
			},
		}
		const drinks = {
			...this.state.drinks,
			listToMerge,
		}
		this.setState({ drinks: { ...drinks } })
	}
	addDrinkRecipe = (drinkRecipe) => {
		console.log(arguments[0])
		return {}
	}
	toggleSidebar = (evt) => {
		// evt.persist()
		// if (this.state.modalVisible) {return}
		this.setState((prevSt) => ({
			sidebarVisible: !prevSt.sidebarVisible,
		}))
		console.log({ evt }, 'toggle Sidebar')
		return evt
	}
	toggleModal = (evt) => {
		// evt.persist()
		// if (this.state.sidebarVisible) {return}
		this.setState((prevSt) => ({
			modalVisible: !prevSt.modalVisible,
		}))
		console.log({ evt }, 'toggle Modal')
		return evt
	}
	toggleLogin = ({ user } = this.state) => {
		this.setState({ user: !user })
	}
	toggleAccount = ({ accountVisible, user } = this.state) => {
		user &&
			this.setState({
				accountVisible: !accountVisible,
			})
	}

	render() {
		const addFns = {
			addDrinkName: this.addDrinkName,
			addDrinkRecipe: this.addDrinkRecipe,
		}
		const uiFns = {
			toggleSidebar: this.toggleSidebar,
			toggleModal: this.toggleModal,
		}
		const userFns = {
			toggleAccount: this.toggleAccount,
			toggleLogin: this.toggleLogin,
		}
		return (
			<BrowserRouter>
				<Main {...Object.assign({}, this.state, addFns, userFns, uiFns)} />
			</BrowserRouter>
		)
	}
}

export default App
