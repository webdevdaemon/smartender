import React, { Component } from 'react'

const InfoLine = ({entry, info}) => (
	<div className={`${entry}-line`}>
   <div className={`${entry}-label`}>
     {entry}
   </div>
   <div className={`${entry}-info`}>
     {info}
   </div>
 </div>
)

const InfoTable = (recipe = null) => {
	if (recipe === null) {return <div>{'No Recipe Found...'}</div>}
	let mappableRecipe = Object.entries(recipe)
	console.log(mappableRecipe)
	return (
		<div className='column column-recipe-entries'>
			{mappableRecipe.map(pair => <InfoLine entry={pair[0]} info={pair[1]} />)}
  </div>
	)
}

class Tab_Recipe extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		console.groupCollapsed("RECIPE_TAB")
		console.log('props => ', this.props)
		console.log('state => ', this.state)
		console.groupEnd()
	}

	render() {
		return (
			<div className='recipe-page'>
    	 <h2>{this.props.location.state.currentRecipe.name}</h2>
     	<InfoTable recipe={this.props.location.state.currentRecipe.name} />
   	</div>
		)
	}
}

export default Tab_Recipe
