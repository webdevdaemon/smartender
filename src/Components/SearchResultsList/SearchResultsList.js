import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchResultLineItem from '../SearchResultLineItem'
import { BrowserRouter as Route, Link } from 'react-router-dom'

class SearchResultsList extends Component {
  
  static propTypes = {
    listResults: PropTypes.array,
    match: PropTypes.object,
  }

  render() {
    const {match, listResults} = this.props

    return (
			<div className='search-results-list-wrapper'>
				
        <ul className='search-results-list'>
          {listResults.map(
						obj => {
							const {name, id} = obj
							return (
								<Link to={`/recipe/${id}`}
									className='search-results-line-item--link'
									id={id}
									key={`drink-link-${id}`}
								>
									{name}
								</Link>
							)
						})}
				</ul>
				
      </div>
    )
  }
}


export default SearchResultsList