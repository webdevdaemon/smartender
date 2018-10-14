import React, {Component} from 'react'
import PropTypes from 'prop-types'


import normalize from '../../_helpers/normalizeDrinkObject'

class RenderRecipe extends Component {
  static propTypes = {
    recipe: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number
      ]),
      name: PropTypes.string,
      glass: PropTypes.string,
      category: PropTypes.string,
      iba: PropTypes.oneOfType([
        PropTypes.string, PropTypes.object
      ]),
      howTo: 'Shake scotch, juice of lime, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with 1/2 slice lemon, top with the cherry, and serve.',
      thumbnail: 'https://www.thecocktaildb.com/images/media/drink/0dnb6k1504890436.jpg',
      ingredients:
        [['Scotch', '1 1/2 oz '],
        ['Lime', 'Juice of 1/2 '],
        ['Powdered sugar', '1/2 tsp '],
        ['Lemon', '1/2 slice '],
        ['Cherry', '1 ']],
      alcoholic: true}),
    name: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }
  
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: null,
      glass: null,
      category: null,
      iba: null,
      howTo: null,
      thumbnail: null,
      ingredients: null,
      alcoholic: null,
    }
  }
  
  componentDidMount() {
    const {recipe, id, name} = this.props
    if (recipe) return this.setState({...recipe})
    else {
      this.setState((state, {id, name}) => {
        
        return {
          
        }
      })
    }
  }
  
  
  render() {
    const {children, id, name} = this.props
    return <React.Fragment>{
      children({
        ...this.state
      })
    }</React.Fragment>
  }
}

export default RenderRecipe
