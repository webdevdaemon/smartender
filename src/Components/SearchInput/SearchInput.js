import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = ({ searchString, updateSearchString }) => (
  <div>
    <input 
			type='text'
			value={searchString} 
			onChange={updateSearchString} 
			
		/>
  </div>
)

SearchInput.propTypes = {
	searchString: PropTypes.string,
	updateSearchString: PropTypes.func,
}

export default SearchInput
