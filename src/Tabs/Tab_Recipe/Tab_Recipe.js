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

const InfoLine = ({entry, info}) => (
  <div className={`${entry} line`}>
    <div className={`${entry} label`}>
			<p className={`${entry} label-text--left`}>
				{`${entry}`}
			</p>
    </div>
    <div className={`${entry} info`}>
			<p className={`${entry} label-text--right`}>
				{`${info}`}
			</p>
    </div>
  </div>
)

const InfoTable = recipe => {
  let mappableRecipe = Object.entries(recipe)
  return (
    <div className="info-table">
			{mappableRecipe.map((pair, dex) => ( 
				<InfoLine
					entry={pair[0]}
					info={pair[1]}
					key={`key-${dex}`}
				/>))}
    </div>
  )
}

const IngredientsTable = ingredients => (
	<table className='ingredients-table'>
		{ingredients.map(arr => (
			<tr key={`k-${arr[0]}`}>
				<td className='td-l'>{arr[0]}</td>
				<td className='td-r'>{arr[1] || '--'}</td>
			</tr>
		))}
	</table>
)

const HowTo = howTo => (
	<p className="how-to">{howTo}</p>
)

class Tab_Recipe extends Component {
	
	render() {
		const {recipe} = this.props.location.state
		const {id, ingredients, thumbnail, name, howTo, glass, ...rest} = recipe
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

export default Tab_Recipe
