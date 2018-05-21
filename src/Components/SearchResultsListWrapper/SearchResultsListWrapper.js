import React from 'react'
import PropTypes from 'prop-types'
import SearchResultsList from '../SearchResultsList'

const SearchResultsListWrapper = ({ listResults }) => (
  <div className='search-results-list-wrapper'>
		<SearchResultsList listResults={listResults} />
  </div>
)

SearchResultsListWrapper.propTypes = {
	listResults: PropTypes.array,
}

export default SearchResultsListWrapper