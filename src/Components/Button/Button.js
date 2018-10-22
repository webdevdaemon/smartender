import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  return (
    <button
      id={props.id}
      className={`button ${
        props.bulmaClasses.join(' ')
        } ${props.className} ${props.isLoading && 'is-loading'}`
      }
      onClick={(e) => props.onClick(e)}>{props.children({...props})}</button>
  )
}
  
Button.propTypes = {
  bulmaClasses: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  render: PropTypes.node,
}
