import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Button, Intent, Elevation} from '@blueprintjs/core'

const BUTTON_LABELS = [
	'Bartender\'s Choice!',
	'Surprise Me...',
	'...You Tell Me',
	'Something Good...',
	'What\'s Good Here?',
	'Something Strong',
]

class ButtonRandom extends Component {
	render() {
		const {id, recipe} = this.props
		return <Link to={{pathname: `/recipe/${id}`, state: {recipe: {...recipe}}}}>
        <Button intent={Intent.PRIMARY} large={true} elevation={Elevation.THREE} id="button-random">
          {BUTTON_LABELS[Math.floor(Math.random() * 6)]}
        </Button>
      </Link>
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
