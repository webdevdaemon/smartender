import React, { Component } from 'react'
import SearchFormWrapper from '../SearchFormWrapper'
import SearchResultsListWrapper from '../SearchResultsListWrapper'

import { autoComp } from '../../_helpers/searchModule'

class SearchWrapper extends Component {

  constructor() {
    super()
    this.state = {
      searchString: '',
      searchStringLength: 0,
      results: [],
      cache: {},
    }
  }

  updateSearchString = event => {
    const searchString = event.target.value,
      searchStringLength = searchString.length

    this.setState(async function(prevState) {
			const results = searchString.length < 2
				? await autoComp(searchString)
				: autoComp(searchString, prevState.results)
      // #region
			console.groupCollapsed('updateSearchString =>')
			console.log('searchString', searchString)
			console.log('results', results)
			console.groupEnd()
      // #endregion
      return {
        results,
        searchString,
        searchStringLength,
				cache: Object.assign(
					{},
					{ [searchString]: results },
          prevState.cache,
        )
      }
    })
  }

  updateResultsArray = results => this.setState({ results })
  updateCacheObject = cache => this.setState({ cache })

  initSearch = searchString => {}

  render() {
    const { cache, searchString, results } = this.state
    console.log(this.state)
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
        <SearchResultsListWrapper results={results} />
      </div>
    )
  }
}

export default SearchWrapper
