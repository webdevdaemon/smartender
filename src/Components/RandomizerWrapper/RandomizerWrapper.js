import React, {Component} from 'react'
import ButtonRandom from '../ButtonRandom'
import axios from 'axios'
import {get} from '../../_helpers/queryStringGenerator'

class RandomizerWrapper extends Component {
  state = { data: [] }

  static propTypes    = { }
  static defaultProps = { }

  componentDidMount() {
    axios(`https://www.thecocktaildb.com/api/json/v1/1/random.php`) //?
    .then(x => {x}) //?
  }


  
  
  getRandom = () => {

  }

  render() {
    let {children, ...rest} = this.props
    let {...all} = this.state
    return (
      <div className='RandomizerWrapper'>
        <ButtonRandom />
      </div>
    )
  }
}

export default RandomizerWrapper