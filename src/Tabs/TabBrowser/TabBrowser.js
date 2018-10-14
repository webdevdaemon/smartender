import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink, Route} from 'react-router-dom'
import VariableList from '../../Components/VariableList'

import listPossibilities from '../../_helpers/listPossibilities'

const HEADERS_BY_FLAG = {c: 'Categories', g: 'Glass Types', i: 'Ingredients'}

class TabBrowser extends Component {
  state = {
    filter: '',
    listHeader: 'Browse by Category, Ingredient, or Glass Type',
    visibleList: [],
    currentFlag: '',
  }

  static propTypes = {match: PropTypes.object}

  updateList = flag => {
    listPossibilities(flag).then(newList => {
      this.setState({
        visibleList: [...newList],
        listHeader: HEADERS_BY_FLAG[flag],
        currentFlag: flag,
      })
    })
  }

  updateFilterString = filter => this.setState({filter})

  filterList = (str = this.state.filter) => {
    if (!str.length) return
    const regX = `/${str}/gi`
    const list = this.state.visibleList
    const visibleList = list.filter(item => regX.test(item))
    this.setState({visibleList})
  }

  onListItemClick = evt => {
    evt.persist()
    const name = evt.target
  }

  render() {
    const {match} = this.props
    const updateList = this.updateList,
          filterList = this.filterList,
          onlistItemClick = this.onListItemClick
    return (
      <div className="beverage-browser">
        <h2 className="variable-list-header">List Drinks By:</h2>
        <ul className="variable-list-nav-list">
          <li className="variable-list-nav-link">
            <NavLink onClick={() => updateList('i')} to={`${match.url}/by-ingredient`}>
              <p className="variable-list-nav-link-text">Ingredients</p>
            </NavLink>
          </li>
          <li className="variable-list-nav-link">
            <NavLink onClick={() => updateList('g')} to={`${match.url}/by-glass`}>
              <p className="variable-list-nav-link-text">Glass Types</p>
            </NavLink>
          </li>
          <li className="variable-list-nav-link">
            <NavLink onClick={() => updateList('c')} to={`${match.url}/by-category`}>
              <p className="variable-list-nav-link-text">Categories</p>
            </NavLink>
          </li>
        </ul>
        <Route
          path={`${match.url}/by-ingredient`}
          render={() => (
            <VariableList 
              clickHandler={onlistItemClick}
              updateList={updateList}
              filterList={filterList}
              {...this.state}
              {...this.props}
            />
          )}
        />
        <Route
          path={`${match.url}/by-glass`}
          render={() => (
            <VariableList 
              clickHandler={onlistItemClick}
              updateList={updateList}
              filterList={filterList}
              {...this.state}
              {...this.props}
            />
          )}
        />
        <Route
          path={`${match.url}/by-category`}
          render={() => (
            <VariableList 
              clickHandler={onlistItemClick}
              updateList={updateList}
              filterList={filterList}
              {...this.state}
              {...this.props}
            />
          )}
        />
      </div>
    )
  }
}

export default TabBrowser
