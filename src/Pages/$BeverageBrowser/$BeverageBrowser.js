import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import VariableList from '../../Components/VariableList'

class $BeverageBrowser extends Component {
  state = {
    visibleList: [],
    listHeader: '',
    currentValue: ' ',
    cachedLists: {},
  }

  static propTypes = {
    match: PropTypes.any,
  }  

  getCurrVal = val => {
    this.setState(
      prev => ({ currentValue: val }),
      () => { this.setState({ chosen: this.state.allIngredients[this.state.currentValue] || '', }) },
    )
  }

  render() {
    let {
      visibleList,
      // listHeader,
      // currentValue
    } = this.state
    let { match } = this.props
    return (
      <div className='beverage-browser'>
        <h2>Browsing Beverages By:</h2>
        <ul>
          <li>
            <Link to={`${match.url}/by-ingredient`}>Ingredient</Link>
          </li>
          <li>
            <Link to={`${match.url}/by-glass`}>Glass Type</Link>
          </li>
          <li>
            <Link to={`${match.url}/by-category`}>Category</Link>
          </li>
        </ul>

        <Route
          path="/:list"
          component={() => <VariableList {...this.props} {...this.state} list={visibleList} />}
        />

        {/*
         It's possible to use regular expressions to control what param values should be matched.
            * "/order/asc"  - matched
            * "/order/desc" - matched
            * "/order/foo"  - not matched
      */}
      </div>
    )
  }
}

export default $BeverageBrowser
