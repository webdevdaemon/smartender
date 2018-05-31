import React, { Component } from 'react'

import Selector from '../../Components/Selector'
import VariableList from '../../Components/VariableList'

import INGREDIENTS from '../../_helpers/listIngredients'

class Tab_Ingredients extends Component {
  state = {
    allIngredients: INGREDIENTS,
    currentValue: ' ',
    chosen: [],
  }

  getCurrVal = val => {
    this.setState((prev) => ({ currentValue: val, }),
      () => { this.setState({ chosen: this.state.allIngredients[this.state.currentValue] || '' }) })
  }

  

  render() {
    let { currentValue, chosen: list } = this.state

    return (
      <div className="ingredients">
        <h2>All Ingredients</h2>
        <Selector currentValue={currentValue} callParent={this.getCurrVal} />
        <VariableList list={list} char={currentValue} />
      </div>
    )
  }
}

export default Tab_Ingredients
