import React from 'react'
import PropTypes from 'prop-types'

import SearchWrapper from '../../Components/SearchWrapper/SearchWrapper'

const Tab_Search = props => (
	<div className='search'>
		<h2>{'Drink Search'}</h2>
		<SearchWrapper {...props} />
	</div>
)

Tab_Search.propTypes = {}

export default Tab_Search
