import React, {Component} from 'react'

// import random from '../../_helpers/randomModule'

class TabRandomizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      recipe: null,
      isLoading: true,
    }
  }

  // componentDidMount() {}

  render() {
    const {isLoading, recipe, id} = this.state
    return isLoading ? (
      <h4 className="h4" />
    ) : (
      <a class={`button is-primary is-large ${isLoading && 'is-loading'}`}>{'"Suprise Me"'}</a>
    )
  }
}

export default TabRandomizer
