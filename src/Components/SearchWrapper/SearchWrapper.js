/**
* @augments {Component<{    match:object,    updateUI:Function.isRequired,    searchString:string,    listResults:array,  >}
*/
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import SearchResultsListWrapper from '../SearchResultsListWrapper'
import SearchFormWrapper from '../SearchFormWrapper'

class SearchWrapper extends Component {
  static propTypes = {
    match: PropTypes.object,
    updateUI: PropTypes.func.isRequired,
    searchString: PropTypes.string,
    listResults: PropTypes.array,
  }

  render() {
    const {searchString, listResults, updateUI, match} = this.props
    return (
      <div className="search-wrapper">
        <SearchFormWrapper searchString={searchString} updateUI={updateUI} />
        <hr />
        <SearchResultsListWrapper listResults={listResults} match={match} />
      </div>
    )
  }
}

export default SearchWrapper
