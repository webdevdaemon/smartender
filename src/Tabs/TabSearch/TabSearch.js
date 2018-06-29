import React from 'react'

import SearchWrapper from '../../Components/SearchWrapper/SearchWrapper'

const TabSearch = props => (
	<div className='search'>
		<h2>{'Drink Search'}</h2>
		<SearchWrapper {...props}/>
	</div>
)

TabSearch.propTypes = {}

export default TabSearch
