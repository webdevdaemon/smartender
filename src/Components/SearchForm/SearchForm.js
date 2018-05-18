import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = props => (
	<form className='search-form'>{ props.children }</form>
)

SearchForm.propTypes = {
	children: PropTypes.any
}

export default SearchForm
