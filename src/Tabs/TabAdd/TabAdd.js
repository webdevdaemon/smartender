/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import styled from 'react-emotion'
// import {INGREDIENTS, GLASS_TYPES} from '../../_helpers/_data/index'

const Add = styled('div')`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100%;
  min-height: 80vh;
`

class TabAdd extends Component {

  state = {
    name: null,
    alcoholic: true,
    glass: null,
    ingredients: null,
    howTo: null,
  }

  updateValue = (st) => {this.setState(st)}

  render() {
    const {name, alcoholic, glass, howTo} = this.state
    return (
      <Add>
        <p>{'Feature Coming SOON...'} </p>
      </Add>
    )
  }
}

export default TabAdd