/**
 * @augments {Component<{  updateUI:Function.isRequired,  searchString:string,>}
 */
import React from 'react'
import PropTypes from 'prop-types'
import SearchInput from '../SearchInput/SearchInput'

const SearchForm = ({updateUI, searchString}) => (
  <div className="search-form">
    <SearchInput updateUI={updateUI} searchString={searchString} />
  </div>
)

SearchForm.propTypes = {
  updateUI: PropTypes.func.isRequired,
  searchString: PropTypes.string,
}

export default SearchForm
