import React, { Component } from 'react'
import SearchFormWrapper from '../SearchFormWrapper'
import SearchResultsListWrapper from '../SearchResultsListWrapper'

import autoComp from '../../_helpers/searchModule'

class SearchWrapper extends Component {

  constructor() {
    super()
		this.state = {
			searchString: '',
			listResults: [],
			cache: null,
		}
  }

  updateSearchString = event => {
    const searchString = event.target.value
    this.setState(
			async function(prevState) {
				let listResults = []
				const results = await autoComp(searchString)
				results.forEach(({ name, id }) => listResults.push(`${name}_${id}`))
        console.log(listResults)
				return {
					listResults,
					searchString,
				}
      },
      () => {
				this.setState({
					cache: new Map(
						this.state.cache,
						[searchString, this.state.listResults]
					)
				})
      }
    )
  }

  render() {
    const { cache, searchString, results, listResults } = this.state
    return (
      <div className='search-wrapper'>
        <h2>{'Find That Recipe!'}</h2>
        <SearchFormWrapper
          cache={cache}
          searchString={searchString}
          initSearch={this.initSearch}
          updateCacheObject={this.updateCacheObject}
          updateResultsArray={this.updateResultsArray}
          updateSearchString={this.updateSearchString}
        />
        <hr />
				<SearchResultsListWrapper list={listResults} />
      </div>
    )
  }
}

export default SearchWrapper
