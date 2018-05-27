import React from 'react'
import PropTypes from 'prop-types'

const SearchResultLineItem = ({name}) =>
  <li className='search-results-line-item'>{name}</li>

SearchResultLineItem.propTypes = {
  name: PropTypes.string,
  drinkID: PropTypes.string,
  match: PropTypes.object,
  onClick: PropTypes.func,
}

export default SearchResultLineItem