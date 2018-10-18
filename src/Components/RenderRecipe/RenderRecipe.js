import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {getDrinkByName} from '../../_helpers/browseModule'

class RenderRecipe extends Component {
  static propTypes = {
    name: PropTypes.string,
    recipe: PropTypes.shape({
      iba: PropTypes.string,
      name: PropTypes.string,
      glass: PropTypes.string,
      alcoholic: PropTypes.bool,
      category: PropTypes.string,
      thumbnail: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      howTo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      ingredients: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    }),
    children: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      recipe: null,
    }
  }

  async componentDidMount() {
    const {recipe} = this.props
    if (recipe) {
      return this.setState({
        recipe: {...recipe},
        isLoading: false,
      })
    } else {
      const {name} = this.props
      const rcp = await getDrinkByName(name)
      return rcp
        .then(r => this.setState({recipe: {...r}, isLoading: false}))
        .catch(err => Error(err))
    }
  }

  render() {
    const {children, name} = this.props
    const {isLoading, recipe} = this.state
    return (
      <React.Fragment>
        {children({
          name,
          recipe: isLoading ? null : {...recipe},
        })}
      </React.Fragment>
    )
  }
}

export default RenderRecipe
