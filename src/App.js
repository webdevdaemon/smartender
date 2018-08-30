import React, {Component} from 'react'
import Main from './Components/Main'
import {BrowserRouter} from 'react-router-dom'
import {base} from './base'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			drinks: {},
			recipes: {},
			ingredients: {},
			glasses: {},
			categories: {},
		}
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
	
	componentDidMount() {
		this.drinksRef = base.syncState('drinks', {
			context: this,
			state: 'drinks',
		})
		this.recipesRef = base.syncState('recipes', {
			context: this,
			state: 'recipes',
		})
		this.recipesRef = base.syncState('ingredients', {
			context: this,
			state: 'ingredients',
		})
		this.recipesRef = base.syncState('glasses', {
			context: this,
			state: 'glasses',
		})
		this.recipesRef = base.syncState('categories', {
			context: this,
			state: 'categories',
		})
	}
	
	componentWillUnmount() {
		base.removeBinding(this.drinksRef)
		base.removeBinding(this.recipesRef)
		base.removeBinding(this.ingredientsRef)
		base.removeBinding(this.glassesRef)
		base.removeBinding(this.categoriesRef)
	}

	addDrinkName = drinkName => {
		const uniqueId = `${drinkName}-${Date.now()}`
		const alpha = /\w/.test(drinkName[0])
			? `${drinkName[0]}`.toLowerCase()
			: '_'
		const listToMerge = {
			[alpha]: {
				...this.state.drinks[alpha],
				drinkName: uniqueId,
			}
		}
		const drinks = {
			...this.state.drinks,
			...listToMerge
		}
		this.setState({drinks: {...drinks}})
	}

	addDrinkRecipe = drinkRecipe => {
		console.log(arguments[0])
		return {}
	}
}

export default App
