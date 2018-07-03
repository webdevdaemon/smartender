import React, {Component} from 'react'
import FeatureTitle from '../../Components/FeatureTitle'
import RandomizerWrapper from '../../Components/RandomizerWrapper'
import random from '../../_helpers/randomModule'

class TabRandomizer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: null,
			recipe: null,
			loading: true,
		}
	}

	componentDidMount() {
		random()
			.then(recipe => {this.updateRecipe({...recipe})})
			.catch(err => new Error(err))
	}

	updateRecipe = recipe => {
		this.setState(() => ({
			id: recipe.id,
			recipe: {...recipe},
		}),
			() => {
				this.setState({
					loading: this.state.recipe === null
				})
			})
	}

	render() {
		const {loading, recipe, id} = this.state
		return (
			loading ? (
				<div className='randomizer-loading'><span>Loading...</span></div>
			) : (
					<div className='randomizer'>
						<FeatureTitle title={'Recipe-Randomizer'} />
						<RandomizerWrapper recipe={recipe} id={id} />
					</div>
				)
		)
	}
}

export default TabRandomizer
