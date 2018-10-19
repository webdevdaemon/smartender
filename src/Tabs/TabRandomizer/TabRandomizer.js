import React, {Component} from 'react'
import FeatureTitle from '../../Components/FeatureTitle'
import RandomizerWrapper from '../../Components/RandomizerWrapper'
// import random from '../../_helpers/randomModule'

class TabRandomizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      recipe: null,
      loading: true,
    }
  }

  // componentDidMount() {}

  render() {
    const {loading, recipe, id} = this.state
    return loading ? (
      <div className="loading">
        <span>Loading...</span>
      </div>
    ) : (
      <div className="randomizer">
        <FeatureTitle title={'Recipe-Randomizer'} />
        <RandomizerWrapper recipe={recipe} id={id} />
      </div>
    )
  }
}

export default TabRandomizer
