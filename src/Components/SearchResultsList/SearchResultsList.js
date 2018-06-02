import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Route, Link} from 'react-router-dom'

import Tab_Recipe from '../../Tabs/Tab_Recipe'
import SearchResultLineItem from '../SearchResultLineItem'

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
								<Link to={`/recipe/${id}`} key={`drink-link-${id}`}>
									<SearchResultLineItem name={name}/>
								</Link>
							)
						})
					}
				</ul>
				<Route path="/recipe/:id" render={
					({match}) => {
						console.log('RecipePageMatch: \n', {match})
						const recipeID = Number(match.params.id)
						const recipe = listResults.find(
							({id}) => Number(id) === recipeID
						)
						return (
							<Tab_Recipe recipe={recipe} />
						)
					}}
				/>
			</div>
    )
  }
}

export default SearchResultsList
