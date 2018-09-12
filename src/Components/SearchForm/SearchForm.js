import React from 'react'
import PropTypes from 'prop-types'
import SearchInput from '../SearchInput/SearchInput'

class SearchForm extends React.Component {
  render() {
    return (
      <div className="search-form">
        <SearchInput {...this.props} />
      </div>
    )
  }
}

SearchForm.propTypes = {
  updateUI: PropTypes.func,
  searchString: PropTypes.string,
}

export default SearchForm
