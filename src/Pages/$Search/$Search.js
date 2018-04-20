import React from 'react'
import PropTypes from 'prop-types'

const $Search = ({ children }) => (
  <div className='search'>
    <h2>{'Drink Search'}</h2>
  </div>
)
$Search.propTypes = {
  children: PropTypes.any,
}

export default $Search
