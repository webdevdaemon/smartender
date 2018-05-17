import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchForm from '../SearchForm'
import SearchInput from '../SearchInput'

class SearchFormWrapper extends Component {
  state = {}

	static propTypes = {
		cache: PropTypes.object,
		searchString: PropTypes.string,
		updateCacheObject: PropTypes.func,
		updateResultsArray: PropTypes.func,
		updateSearchString: PropTypes.func,
	}

  render() {
		let { searchString, updateSearchString } = this.props
		console.log(searchString, updateSearchString)
    return (
      <div className='search-form-wrapper'>
        <SearchForm>
					<SearchInput
						value={ this.props.searchString }
						updateSearchString={ this.props.updateSearchString }
					/>
        </SearchForm>
      </div>
    )
  }
}

export default SearchFormWrapper