import React from 'react'
import PropTypes from 'prop-types'

const Tab_Randomizer = ({ children }) => (
    <div className='randomizer'>
      <h2>{'Drink Randomizer'}</h2>
      {children}
    </div>
)

Tab_Randomizer.propTypes = {
  children: PropTypes.any,
}

export default Tab_Randomizer
