// TODO: promise in cdm to take 'id' prop and get the pertinent info for display.

import React, {Component} from 'react'
import axios from 'axios'
import {RecipeContext} from '../../contexts'

const InfoLine = ({entry, info}) => (
	<div className={`${entry}-line`}>
		<div className={`${entry}-label`}>{
			entry
		}</div>
		<div className={`${entry}-info`}>{
			info
		}</div>
	</div>
)

const InfoTable = (recipe = null) => {
	if (recipe === null) return (<div>{'No Recipe Found...'}</div>)
	let mappableRecipe = Object.entries(recipe)
	console.log(mappableRecipe)
	return (
		<div className='column column-recipe-entries'>
			{
				mappableRecipe.map(
					pair => <InfoLine
						entry={pair[0]}
						info={pair[1]}
					/>
				)
			}
		</div>
	)
}



class $RecipePage extends Component{

	constructor(props) {
		super(props)
		this.state = {}
	}
	
	componentDidMount() {
		
	}

	render() {
		return (
			<RecipeContext.Consumer>
				{(value) => {
					return (
					<div className='recipe-page'>
						<h2>{value.currentRecipe.name}</h2>					
						<InfoTable recipe={value.currentRecipe} />	
					</div>
				)}}
			</RecipeContext.Consumer>
		)
	}
}

export default $RecipePage
