import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink, Route} from 'react-router-dom'
import VariableList from '../../Components/VariableList'
import {UL} from '@blueprintjs/core'

import listPossibilities from '../../_helpers/listPossibilities'

const HEADERS_BY_FLAG = {c: 'Categories', g: 'Glass Types', i: 'Ingredients'}

class TabBrowser extends Component {
  state = {
    visibleList: [],
    listHeader: 'Browse by Category, Ingredient, or Glass Type',
    currentFlag: '',
    cachedLists: {},
  }

  static propTypes = {
    match: PropTypes.object,
  }

  updateListState = flag => {
    listPossibilities(flag).then(newList => {
      this.setState({
        visibleList: [...newList],
        listHeader: HEADERS_BY_FLAG[flag],
        currentFlag: flag,
      })
    })
  }

  clickListItem = evt => evt

  render() {
    let {match} = this.props
    let update = this.updateListState,
      listItemClick = this.clickListItem
    return (
      <div className="beverage-browser">
        <h2 className="variable-list-header">List Drinks By:</h2>
        <UL className="variable-list-nav-list">
          <li className="variable-list-nav-link">
            <NavLink onClick={() => update('i')} to={`${match.url}/by-ingredient`}>
              <p className="variable-list-nav-link-text">Ingredients</p>
            </NavLink>
          </li>
          <li className="variable-list-nav-link">
            <NavLink onClick={() => update('g')} to={`${match.url}/by-glass`}>
              <p className="variable-list-nav-link-text">Glass Types</p>
            </NavLink>
          </li>
          <li className="variable-list-nav-link">
            <NavLink onClick={() => update('c')} to={`${match.url}/by-category`}>
              <p className="variable-list-nav-link-text">Categories</p>
            </NavLink>
          </li>
        </UL>
        <Route
          path={`${match.url}/by-ingredient`}
          render={() => (
            <VariableList clickHandler={listItemClick} updateList={update} {...this.state} />
          )}
        />
        <Route
          path={`${match.url}/by-glass`}
          render={() => (
            <VariableList clickHandler={listItemClick} updateList={update} {...this.state} />
          )}
        />
        <Route
          path={`${match.url}/by-category`}
          render={() => (
            <VariableList clickHandler={listItemClick} updateList={update} {...this.state} />
          )}
        />
      </div>
    )
  }
}

export default TabBrowser
