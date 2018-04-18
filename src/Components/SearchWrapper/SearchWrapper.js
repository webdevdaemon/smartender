import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SearchWrapper extends Component {
  state = {}

  static propTypes = {}

  render() {
    let {children, ...$} = this.props

    return (
    <div className="SearchWrapper">
      <h2>
        {children}
      </h2>
    </div>
    )
  }
}

export default SearchWrapper
