/**
* @augments {Component<{    searchString:string,    updateSearchResults:Function.isRequired,  >}
*/
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  static propTypes = {
    searchString: PropTypes.string,
    updateSearchResults: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    this.inputRef.current.focus()
  }

  inputHandler  = e => this.props.updateSearchResults(e)
  submitHandler = e => e.preventDefault()

  render() {
    const {searchString} = this.props
    return (
      <input
        className={'search-form-input'}
        placeholder="Find Recipe..."
        type="text"
        value={searchString}
        onChange={this.inputHandler}
        onSubmit={this.submitHandler}
        ref={this.inputRef}
        id={'recipe-search-input'}
      />
    )
  }
}

export default SearchInput
