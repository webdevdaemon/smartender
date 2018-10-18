import React from 'react'
import PropTypes from 'prop-types'
import SearchForm from '../SearchForm'

const SearchFormWrapper = ({searchString, updateSearchResults}) => (
	<div className='search-form-wrapper'>
		<SearchForm
			searchString={searchString}
			updateSearchResults={updateSearchResults}
		/>
	</div>
)

SearchFormWrapper.propTypes = {
	searchString: PropTypes.string,
	updateSearchResults: PropTypes.func,
}

export default SearchFormWrapper