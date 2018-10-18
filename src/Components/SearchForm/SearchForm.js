/**
 * @augments {Component<{  updateSearchResults:Function.isRequired,  searchString:string,>}
 */
import React from 'react'
import PropTypes from 'prop-types'
import SearchInput from '../SearchInput/SearchInput'

const SearchForm = ({updateSearchResults, searchString}) => (
  <div className="search-form">
    <SearchInput updateSearchResults={updateSearchResults} searchString={searchString} />
  </div>
)

SearchForm.propTypes = {
  updateSearchResults: PropTypes.func.isRequired,
  searchString: PropTypes.string,
}

export default SearchForm
