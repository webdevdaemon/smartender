import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchResultsList from '../SearchResultsList/SearchResultsList'

class SearchResultsListWrapper extends Component {
	state = {
		list: []
	}

	static propTypes = {
		children: PropTypes.any,
		results: PropTypes.array,
	}

	refineResultsList() {
		
	}

  render() {
    let { children, results } = this.props
    let { list } = this.state
    return (
			<div className='search-results-list-wrapper'>
				<SearchResultsList list={list} />	
      </div>
    )
  }
}

export default SearchResultsListWrapper