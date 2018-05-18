import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchResultsList from '../SearchResultsList/SearchResultsList'

class SearchResultsListWrapper extends Component {
	state = { }

	static propTypes = {
		results: PropTypes.array,
	}

	refineResultsList() {
		
	}

  render() {
    let { results } = this.props
    return (
			<div className='search-results-list-wrapper'>
				<SearchResultsList list={results} />	
      </div>
    )
  }
}

export default SearchResultsListWrapper