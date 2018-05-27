import React from 'react'
import PropTypes from 'prop-types'
import SearchResultsList from '../SearchResultsList'

const SearchResultsListWrapper = ({ listResults, match }) => (
  <div className='search-results-list-wrapper'>
		<SearchResultsList
			listResults={listResults}
			match={match}
		/>
  </div>
)

SearchResultsListWrapper.propTypes = {
	listResults: PropTypes.array,
	match: PropTypes.object,
}

export default SearchResultsListWrapper