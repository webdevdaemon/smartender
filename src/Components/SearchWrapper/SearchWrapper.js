/**
* @augments {Component<{		match:object,	>}
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import autoComp from '../../_helpers/searchModule'

import SearchResultsListWrapper from '../SearchResultsListWrapper'
import SearchFormWrapper from '../SearchFormWrapper'

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

	runAutoComp = (str) =>
		autoComp(str)
			.then((list) => {
				this.setState({ listResults: list })
				this.setState({ cache: { ...this.state.cache, [str]: list } })
			})
			.catch((err) => new Error(err.message))

	updateUI = (evt) => {
		const searchString = evt.target.value
		this.setState({ searchString })
		if (this.state.cache.hasOwnProperty(searchString)) {
			this.setState({ listResults: this.state.cache[searchString] })
		} else {
			this.runAutoComp(searchString)
		}
	}

	render() {
		const { searchString, listResults } = this.state
		return (
			<div className="search-wrapper">
				<SearchFormWrapper searchString={searchString} updateUI={this.updateUI} />
				<hr />
				<SearchResultsListWrapper listResults={listResults} match={this.props.match} />
			</div>
		)
	}
}

export default SearchWrapper
