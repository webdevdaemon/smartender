import React, { Component } from 'react'
import SearchFormWrapper from '../SearchFormWrapper'
import SearchResultsListWrapper from '../SearchResultsListWrapper'

import autoComp from '../../_helpers/searchModule'

class SearchWrapper extends Component {

	state = {
		searchString: '',
		listResults: [],
		cache: {},
	}

	updateUI = event => {
		let searchString = `${event.target.value}`,
			{ cache } = this.state
		
		this.setState({ searchString })
		console.log({ cache })
		
		if (cache.hasOwnProperty(searchString) ) {
			this.setState({ listResults: cache[searchString] })
			console.log('$$$ Cached Response')
		} else {
			autoComp(searchString)
			.then(list => {
				/* let patience = []
				list.forEach(o => patience.push(o))
				return patience */
				return [...list]
			}).then(list => {
				this.setState({ listResults: list })
				this.setState({
					cache: Object.assign({}, cache, { [searchString]: [...list] })
				})
			}).catch(err => {
				throw Error(`
				autoComp ERROR!!! source @ updateUI in <SearchWrapper/>\n
				\t\t invoked @ <SearchForm /> -> <input>:\n
				${err.message}
				`)
			})
			console.log('___ HTTP GET RESPONSE')
		}
	}
	
	render() {
    return (
      <div className='search-wrapper'>
        <h2>{'Find That Recipe!'}</h2>
        <SearchFormWrapper searchString={this.state.searchString} updateUI={this.updateUI} />
        <hr />
        <SearchResultsListWrapper listResults={this.state.listResults} />
      </div>
    )
  }
}

export default SearchWrapper
