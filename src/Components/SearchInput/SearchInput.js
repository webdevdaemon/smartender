import React from 'react'
import PropTypes from 'prop-types'

class SearchInput extends React.Component {
  constructor() {
		super()
		
  }
	
	static propTypes = {
		searchString: PropTypes.string,
		updateSearchString: PropTypes.func,
	}

  render() {
    return (
      <div>
				<input
					type='text'
					value={ this.props.searchString }
					onChange={ this.props.updateSearchString }
				/>
      </div>
		)
  }
}


export default SearchInput
