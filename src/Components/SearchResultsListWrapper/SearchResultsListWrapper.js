import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchResultsList from '../SearchResultsList'
import SearchResultLineItem from '../SearchResultLineItem'

class SearchResultsListWrapper extends Component {
  state = {}

  static propTypes = { list: PropTypes.array, }

  splitInfo(compoundString) {
		const info = compoundString.split("_")
		console.log(info)
		return info
  }

  createItem(info) {
    return <SearchResultLineItem name={info[0]} id={info[1]} key={`li-${info[1]}`} />
  }

  render() {
		const { list } = this.props
		
    return (
      <div className='search-results-list-wrapper'>
        <SearchResultsList>
					{
						list.map(str => this.createItem(this.splitInfo(str)))
					}
        </SearchResultsList>
      </div>
    )
  }
}

export default SearchResultsListWrapper