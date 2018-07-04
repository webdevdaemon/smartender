import React, {Component} from 'react'
import Main from './Components/Main'
import {BrowserRouter} from 'react-router-dom'
import {base} from './base'
import {drinkNames} from './_db/drinkNames'

// const DRINK_NAMES = {...drinkNames}

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			drinks: {},
			recipes: {},
		}
	}
	
	componentWillMount() {
		this.drinksRef = base.syncState('drinks', {
			context: this,
			state: 'drinks',
		})
		this.recipesRef = base.syncState('recipes', {
			context: this,
			state: 'recipes',
		})
	}

	componentWillUnmount() {
		base.removeBinding(this.drinksRef)
		base.removeBinding(this.recipesRef)
	}

	addDrinkName = drinkName => {
		// const uniqueId = `${drinkName}-${Date.now()}`
		const alpha = /\w/.test(drinkName[0])
			? `${drinkName[0]}`.toLowerCase()
			: "_"
		const listToMerge = {[alpha]: [...this.state.drinks[alpha], drinkName]}
		const drinks = Object.assign({}, this.state.drinks, listToMerge)
		this.setState({drinks: {...drinks}})
	}

	addDrinkRecipe = drinkRecipe => {
		console.log(arguments[0])
		return {}
	}

	render() {
		const addFns = {
			addDrinkName: this.addDrinkName,
			addDrinkRecipe: this.addDrinkRecipe,
		}
		return (
			<BrowserRouter>
				<Main {...this.state}
					addDrinkFunctions={addFns}
				/>
			</BrowserRouter>
    )
  }
}

export default App
