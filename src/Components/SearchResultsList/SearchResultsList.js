import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchResultsList extends Component {

	static propTypes = {
		children: PropTypes.any,
	}

	render() {
		const { children } = this.props
    return (
      <ul className='search-results-list'>
				{children}
      </ul>
    )
  }
}

export default SearchResultsList