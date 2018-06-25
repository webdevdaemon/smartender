import React from 'react'
import PropTypes from 'prop-types'
import SearchResultsList from '../SearchResultsList'

const SearchResultsListWrapper = props => (
  <div className='search-results-list-wrapper'>
		<SearchResultsList
			listResults={props.listResults}
		/>
  </div>
)

SearchResultsListWrapper.propTypes = {
	listResults: PropTypes.array,
}

export default SearchResultsListWrapper