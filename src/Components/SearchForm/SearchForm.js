import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ updateUI, searchString }) => (
	<div className="search-form">
		<input
			className="search-form-input"
			placeholder=""
			type="text"
			value={searchString}
			onChange={e => updateUI(e)}
			onSubmit={e => e.preventDefault()}
		/>
	</div>
)

SearchForm.propTypes = {
	updateUI: PropTypes.func,
	searchString: PropTypes.string,
}

export default SearchForm
