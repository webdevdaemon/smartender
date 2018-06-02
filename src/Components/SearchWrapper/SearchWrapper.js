import React, {Component} from 'react'
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

  updateUI = event => {
		const searchString = event.target.value
    this.setState({searchString})
    console.log('SearchWrapper: \n', {props: this.props, state: this.state})

    if (this.state.cache.hasOwnProperty(searchString)) {
      this.setState({
        listResults: this.state.cache[searchString],
      })
      console.log('$$$ Cached Response')
    } else {
      autoComp(searchString)
        .then(list => {
          this.setState({ listResults: list })
          this.setState({
						cache: {
							...this.state.cache,
							[searchString]: list,
						},
          })
          console.log('___HTTP GET RESPONSE')
        })
        .catch(err => new Error(err.message))
    }
  }

  render() {
    const {searchString, listResults} = this.state
    return (
      <div className="search-wrapper">
        <h2>{'Find That Recipe!'}</h2>
        <SearchFormWrapper
          searchString={searchString}
          updateUI={this.updateUI}
        />
        <hr />
        <SearchResultsListWrapper listResults={listResults} match={this.props.match} />
      </div>
    )
  }
}

export default SearchWrapper
