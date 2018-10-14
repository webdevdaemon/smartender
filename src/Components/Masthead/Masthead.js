import React from 'react'
import PropTypes from 'prop-types'

const Masthead = ({title}) =>
  <div className='masthead'>
    <h2 className='masthead-title'>
      {title}
    </h2>
  </div>

Masthead.propTypes = {title: PropTypes.string.isRequired}

export default Masthead
