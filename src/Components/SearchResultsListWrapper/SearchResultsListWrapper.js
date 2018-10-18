/**
* @augments {Component<{	listResults:array,>}
*/
import React from 'react'
import PropTypes from 'prop-types'
import ListResults from '../ListResults'

const SearchResultsListWrapper = props => (
  <div className='search-results-list-wrapper'>
		<ListResults
			listResults={props.listResults}
		/>
  </div>
)

SearchResultsListWrapper.propTypes = {
	listResults: PropTypes.array,
}

export default SearchResultsListWrapper