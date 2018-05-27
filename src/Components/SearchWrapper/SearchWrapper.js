import React, { Component } from 'react'
import SearchForm from '../SearchForm'
import SearchResultsList from '../SearchResultsList'
import PropTypes from 'prop-types'

import autoComp from '../../_helpers/searchModule'

class SearchWrapper extends Component {

	constructor(props) {
		super(props)
		this.state = {
			searchString: '',
			listResults: [],
			cache: {},
		}
	}

	static propTypes = {
		match: PropTypes.object,
	}

	liftCache = updateObject => {
		console.log(updateObject)
		this.props.updateSearchCache(updateObject)
	}

	updateUI = event => {
		let searchString = `${event.target.value}`, { cache } = this.state
		this.setState({searchString})
		if (cache.hasOwnProperty(searchString) ) {
			this.setState({listResults: cache[searchString]}); console.log('$$$ Cached Response')
		}
		else {
			autoComp(searchString)
				.then(list => {
					const newCache = Object.assign( {}, cache, newCache )
					this.setState({listResults: list})
					this.setState({cache: newCache})
					this.liftCache(newCache)

					console.log('___HTTP GET RESPONSE')
			}).catch(err => new Error(err.message))
		}
	}

	
	render() {
    return (
      <div className='search-wrapper'>
        <h2>{'Find That Recipe!'}</h2>
				<SearchForm
					searchString={this.state.searchString}
					updateUI={this.updateUI} />
        <hr />
				<SearchResultsList
					listResults={this.state.listResults}
					match={this.props.match}
				/>
      </div>
    )
  }
}

export default SearchWrapper
