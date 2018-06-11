import React from 'react'
import PropTypes from 'prop-types'

const labels = [
	"Bartender's Choice!",
	"Surprise Me...",
	"...You Tell Me",
	"Something Good...",
	"What's Good Here?",
	"Something Strong",
]

const ButtonRandom = props => (
  <button className="button-random">{
    labels[Math.floor(Math.random() * 6)]
  }</button>
)

ButtonRandom.propTypes = {}
ButtonRandom.defaultProps = {}

export default ButtonRandom
