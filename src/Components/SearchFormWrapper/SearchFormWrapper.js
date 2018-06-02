import React from 'react'
import PropTypes from 'prop-types'
import SearchForm from '../SearchForm'

const SearchFormWrapper = ({searchString, updateUI}) => (
	<div className='search-form-wrapper'>
		<SearchForm
			searchString={searchString}
			updateUI={updateUI}
		/>
	</div>
)

SearchFormWrapper.propTypes = {
	searchString: PropTypes.string,
	updateUI: PropTypes.func,
}

export default SearchFormWrapper