import React, {Component} from 'react'

class SearchForm extends Component {
  static propTypes = {}

  render() {
    let {children, ...$} = this.props
    return (<form>{children}</form>)
  }
}

export default SearchForm
