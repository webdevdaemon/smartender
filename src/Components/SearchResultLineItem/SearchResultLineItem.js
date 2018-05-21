import React from 'react'
import PropTypes from 'prop-types';

const SearchResultLineItem = props =>
	<li className='search-results-line-item'>
		<p>{`${props.name}`}</p>
	</li>

SearchResultLineItem.propTypes = {
	name: PropTypes.string,
	drinkID: PropTypes.string,
}

export default SearchResultLineItem
