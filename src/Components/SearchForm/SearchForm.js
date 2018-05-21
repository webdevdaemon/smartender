import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ updateUI, searchString }) => (
	<form className='search-form'>
		<input
			type='text'
			value={searchString}
			onChange={updateUI}
		/>
	</form>
)

SearchForm.propTypes = {
	updateUI: PropTypes.func,
	searchString: PropTypes.string,
}

export default SearchForm
