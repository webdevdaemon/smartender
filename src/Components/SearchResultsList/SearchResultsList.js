import React from 'react'
import PropTypes from 'prop-types'
import SearchResultLineItem from '../SearchResultLineItem'


const SearchResultsList = props => (
	<ul className='search-results-list'>
		{
			props.listResults.map(({ name, id, ...rest }) => {
				return (
					<SearchResultLineItem name={name} key={`li-${id}`} drinkID={id} />
				)
			})
		}
	</ul>
)

SearchResultsList.propTypes = {
	listResults: PropTypes.array,
}

export default SearchResultsList