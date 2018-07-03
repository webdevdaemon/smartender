import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const BUTTON_LABELS = [
	"Bartender's Choice!",
	"Surprise Me...",
	"...You Tell Me",
	"Something Good...",
	"What's Good Here?",
	"Something Strong",
]

class ButtonRandom extends Component {
	render() {
		const {id, recipe} = this.props
		return (
			<Link className="button-random" to={{
				pathname: `/recipe/${id}`,
				state: {recipe: {...recipe}},
			}}>{ BUTTON_LABELS[Math.floor(Math.random() * 6)] }</Link >
		)
	}
}

ButtonRandom.propTypes = {
	id: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
	recipe: PropTypes.object,
}

export default ButtonRandom
