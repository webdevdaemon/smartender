import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Route, Link} from 'react-router-dom'

import Tab_Recipe from '../../Tabs/Tab_Recipe'
import SearchResultLineItem from '../SearchResultLineItem'
import PageRoutes from '../../_helpers/page-routes'

class SearchResultsList extends Component {
	
	static propTypes = {
    listResults: PropTypes.array,
    match: PropTypes.object,
  }

  render() {
    const {listResults} = this.props
    return (
			<div className="search-results-list-wrapper">
				<ul className="search-results-list">
					{
						listResults.map(obj => {
							const {name, id} = obj
							return (
							<li className='search-results-line-item'>
									<Link to={{pathname: `/recipe/${id}`, state: {recipe: obj}}}
										key={`${id}`} style={{width: '100%', height: '7vh',}}>
									
									{name}
								
								</Link>
							</li>
							)
						})
					}
				</ul>
			</div>
    )
  }
}

export default SearchResultsList
