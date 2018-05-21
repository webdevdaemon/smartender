import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchForm from '../SearchForm'

class SearchFormWrapper extends Component {

	static propTypes = {
		searchString: PropTypes.string,
		updateUI: PropTypes.func,
	}

  render() {
    let { searchString, updateUI } = this.props
    return (
      <div className='search-form-wrapper'>
				<SearchForm
					searchString={searchString}
					updateUI={updateUI}
				/>
      </div>
    )
  }
}

export default SearchFormWrapper