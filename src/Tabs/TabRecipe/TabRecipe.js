import React, {Component} from 'react'
import FeatureImage from '../../Components/FeatureImage/FeatureImage'
import FeatureTitle from '../../Components/FeatureTitle/FeatureTitle'

const RecipeHero = (src, title) => (
	<div className='recipe-hero'>
		<FeatureImage src={src}>
			<FeatureTitle title={title} />
		</FeatureImage>
	</div>
)

const IngredientsTable = ingredients => (
	<table className='ingredients-table'>
		<tbody>
			{ingredients.map(arr => (
				<tr key={`k-${arr[0]}`}>
					<td className='td-l'>{arr[0]}</td>
					<td className='td-r'>{arr[1] || '--'}</td>
				</tr>
			))}
		</tbody>
	</table>
)

const HowTo = howTo => <p className="how-to">{howTo}</p>

export default class TabRecipe extends Component {
	render() {
		const recipe = this.props.location.state.recipe()
		const {id, ingredients, thumbnail, name, howTo, glass} = recipe
    return (
			<div className="recipe-page" id={id}>
				{RecipeHero(thumbnail, name)}
				<div className='recipe-slide'>
					{IngredientsTable([['Glass Type', glass], ...ingredients])}
					{HowTo(howTo)}
				</div>
      </div>
    )
  }
}