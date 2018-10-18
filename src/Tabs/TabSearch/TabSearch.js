import React from 'react'
import PropTypes from 'prop-types'

import SearchWrapper from '../../Components/SearchWrapper/SearchWrapper'

const TabSearch = (props) => (
	<div className='search'>
		<h2 className='tab-header'>{'Recipe Search'}</h2>
		<SearchWrapper {...props}/>
	</div>
)

TabSearch.propTypes = {
	updateSearchResults: PropTypes.func.isRequired,
}

export default TabSearch
