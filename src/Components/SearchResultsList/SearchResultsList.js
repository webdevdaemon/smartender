import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchResultsList extends Component {
  state = { data: [] }

	static propTypes = {
		children: PropTypes.any,
	}

  render() {
    return (
      <div className='SearchResultsList'>

      </div>
    )
  }
}

export default SearchResultsList