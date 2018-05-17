import React, { Component } from 'react'
import SearchFormWrapper from '../SearchFormWrapper'
import SearchResultsListWrapper from '../SearchResultsListWrapper'

class SearchWrapper extends Component {

	constructor() {
		super()
		this.state = {
			searchString: '',
			results: [],
			cache: {},
		}
	}

  updateSearchString = (event) => this.setState({ searchString: event.target.value })
	updateResultsArray = (results) => this.setState({ results })
  updateCacheObject = (cache) => this.setState({ cache })

  render() {

    return (
      <div className='search-wrapper'>
				<h2>{ 'Find That Recipe!' }</h2>
				<SearchFormWrapper
					cache={ this.state.cache }
					searchString={ this.state.searchString }
					updateCacheObject={ this.updateCacheObject }
					updateResultsArray={ this.updateResultsArray }
					updateSearchString={ this.updateSearchString }
				/>
				<hr />
				<SearchResultsListWrapper
					results={ this.state.results }
				/>
      </div>
    )
  }
}

export default SearchWrapper
