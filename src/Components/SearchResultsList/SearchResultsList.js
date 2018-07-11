import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class SearchResultsList extends Component {

	static propTypes = {listResults: PropTypes.array,match: PropTypes.object,}

	render() {
		const {listResults} = this.props
		return (
			<div className='search-results-list-wrapper'>
				<ul className='search-results-list'>
					{listResults.map(obj => {
					const {name, id} = obj
					return (
						<li className='search-results-line-item' key={`li-${id}`}>
							<Link style={{width: '100%', height: '7vh'}} key={`li-${id}`}
								to={{pathname: `/recipe/${id}`, state: {recipe: obj}}}
							>{name}</Link>
						</li>
					)})}
     </ul>
   </div>
		)
	}
}

export default SearchResultsList
