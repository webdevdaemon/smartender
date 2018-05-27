import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import VariableList from '../../Components/VariableList'

import listPossibilities from '../../_helpers/listPossibilities'

const HEADERS_BY_FLAG = { c: 'Categories', g: 'Glass Types', i: 'Ingredients' }

class $BeverageBrowser extends Component {
  state = {
    visibleList: [],
    listHeader: 'Browse by Category, Ingredient, or Glass Type',
    currentFlag: '',
    cachedLists: {},
  }

  static propTypes = { match: PropTypes.any }

  updateListState = async flag => {
    let newList = await listPossibilities(flag)
    this.setState(
      prevState =>
        prevState.visibleList.length === 0 ? { visibleList: newList } : { visibleList: [] },
      () =>
        this.setState({
          visibleList: this.state.visibleList === [] || newList,
          listHeader: HEADERS_BY_FLAG[flag],
          currentFlag: flag,
        }),
    )
  }

  clickListItem = evt => evt

  render() {
    let { match } = this.props
    let update = this.updateListState, listItemClick = this.clickListItem
    return (
      <div className="beverage-browser">
        <h2 className="variable-list-header">List Drinks By:</h2>
        <ul className="variable-list-nav-list">
          <li className="variable-list-nav-link">
            <Link onClick={() => update('i')} to={`${match.url}/by-ingredient`}>
              <p className="variable-list-nav-link-text">Ingredients</p>
            </Link>
          </li>
          <li className="variable-list-nav-link">
            <Link onClick={() => update('g')} to={`${match.url}/by-glass`}>
              <p className="variable-list-nav-link-text">Glass Types</p>
            </Link>
          </li>
          <li className="variable-list-nav-link">
            <Link onClick={() => update('c')} to={`${match.url}/by-category`}>
              <p className="variable-list-nav-link-text">Categories</p>
            </Link>
          </li>
        </ul>

        <Route
          path={`${match.url}/by-ingredient`}
          render={() => (
            <VariableList
              clickHandler={listItemClick}
              updateList={update}
              list={this.state.visibleList}
              header={this.state.listHeader}
            />
          )}
        />
        <Route
          path={`${match.url}/by-glass`}
          render={() => (
            <VariableList
              clickHandler={listItemClick}
              updateList={update}
              list={this.state.visibleList}
              header={this.state.listHeader}
            />
          )}
        />
        <Route
          path={`${match.url}/by-category`}
          render={() => (
            <VariableList
              clickHandler={listItemClick}
              updateList={update}
              list={this.state.visibleList}
              header={this.state.listHeader}
            />
          )}
        />
      </div>
    )
  }
}

export default $BeverageBrowser
