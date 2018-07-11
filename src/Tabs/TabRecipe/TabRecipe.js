import React, {Component} from 'react'
import FeatureImage from '../../Components/FeatureImage/FeatureImage'
import FeatureTitle from '../../Components/FeatureTitle/FeatureTitle'

const Hero = ({src, title}) => (
	<div className='recipe-hero'>
		<FeatureImage src={src}>
			<FeatureTitle title={title} />
		</FeatureImage>
	</div>
)

const Table = pairs => <table className='ingredients-table'>
		<tbody>
			{pairs.map(pair => TableRow(pair))}
		</tbody>
	</table>

const TableRow = pair => <tr key={`k-${pair[0]}`}>
		<td className='td-l'>{pair[0]}</td>
		<td className='td-r'>{pair[1] || '--'}</td>
	</tr>

const HowTo = howTo => <div className="how-to">
	<h4 className='how-to-title'>{'Mixing Instructions:'}</h4>
	<p className='how-to-text'>{`${howTo}`}</p>
</div>

export default class TabRecipe extends Component {

	render() {
		const {recipe} = this.props.location.state
		const {id, ingredients, thumbnail, name, howTo, glass} = recipe
    return (
			<div className="recipe-page" id={id}>
				{Hero({src:thumbnail, title:name})}
				<div className='recipe-slide'>
					{Table([['Glass Type', glass], ...ingredients])}
					{HowTo(howTo)}
				</div>
      </div>
    )
  }
}