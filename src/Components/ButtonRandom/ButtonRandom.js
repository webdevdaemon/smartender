import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

const labels = [
	"Bartender's Choice!",
	"Surprise Me...",
	"...You Tell Me",
	"Something Good...",
	"What's Good Here?",
	"Something Strong",
]

const ButtonRandom = ({onClick}) => (
	<button
		className="button-random"
		onClick={onClick}
	>
		{labels[Math.floor(Math.random() * 6)]}
	</button>
)

ButtonRandom.propTypes = {
	onClick: PropTypes.func,
}
ButtonRandom.defaultProps = {}

export default ButtonRandom
