import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import ButtonRandom from '../ButtonRandom'
import normalize from '../../_helpers/normalizeDrinkObject'
import axios from 'axios'

const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/random.php`

const RandomRedirect = async () => {
  const random = await axios(endpoint)
    .then(({data}) => data.drinks[0])
    .then(drink => normalize(drink))
  return (
    <div>
      <Redirect
        to={{
          pathname: `/recipe/${random.id}`,
          state: random,
        }}
      />
    </div>
  )
}

class RandomizerWrapper extends Component {
  state = {pressed: false}

  // componentDidMount() { this.setState({pressed: this.state.pressed ? false : false}) }

  isPressed = () => {this.setState({pressed: true})}

  render() {
    return this.state.pressed
      ? (<div> <RandomRedirect /> </div>)
      : (<div className='randomizer-wrapper'><ButtonRandom onClick={this.isPressed} /></div>)
  }
}

export default RandomizerWrapper