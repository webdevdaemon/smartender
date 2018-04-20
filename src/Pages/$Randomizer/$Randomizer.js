import React from 'react'
import PropTypes from 'prop-types'

const $Randomizer = ({ children }) => (
    <div className='randomizer'>
      <h2>{'Drink Randomizer'}</h2>
      {children}
    </div>
)

$Randomizer.propTypes = {
  children: PropTypes.any,
}

export default $Randomizer
