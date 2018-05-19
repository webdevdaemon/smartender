import React from 'react'
import PropTypes from 'prop-types';

const SearchResultLineItem = ({ name, id }) =>
	<li className='search-results-line-item' drinkID={id}>
		<p>{name}</p>
	</li>

SearchResultLineItem.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
}

export default SearchResultLineItem
