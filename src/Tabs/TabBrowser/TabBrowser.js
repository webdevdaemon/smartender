import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink, Route} from 'react-router-dom'
import ListResults from '../../Components/ListResults'

import listPossibilities from '../../_helpers/listPossibilities'

const HEADERS_BY_FLAG = {c: 'Categories', g: 'Glass Types', i: 'Ingredients'}

class TabBrowser extends Component {
  state = {
    listHeader: 'Browse by Category, Ingredient, or Glass Type',

  }

  componentDidMount() {
    if (
      typeof this.props.listResults[0] === 'string') {
      this.props.setIsTags(true)
    }
  }
  

  static propTypes = {
    match: PropTypes.object,
    onClickTag: PropTypes.func,
    listResults: PropTypes.array,
    isTags: PropTypes.bool,
    setIsTags: PropTypes.func,
  }

  updateList = flag => {
    listPossibilities(flag).then(newList => {
      this.setState({
        visibleList: [...newList],
        listHeader: HEADERS_BY_FLAG[flag],
        currentFlag: flag,
      })
    })
  }

  // updateFilterString = filter => this.setState({filter})
  // filterList = (str = this.state.filter) => {
  //   if (!str) return
  //   const regX = `/${str}/gi`
  //   const list = this.state.visibleList
  //   const visibleList = list.filter(item => regX.test(item))
  //   this.setState({visibleList})
  // }

  render() {
    const {match, onClickTag} = this.props
    // const updateList = this.updateList,
    //       filterList = this.filterList,
    //       onlistItemClick = this.onListItemClick
    return (
      <div className="beverage-browser">
        <h2 className="variable-list-header">List Drinks By:</h2>
        <ul className="variable-list-nav-list">
          <li className="variable-list-nav-link">
            <NavLink to={`${match.url}/by-ingredient`}>
              <p className="variable-list-nav-link-text">Ingredients</p>
            </NavLink>
          </li>
          <li className="variable-list-nav-link">
            <NavLink to={`${match.url}/by-glass`}>
              <p className="variable-list-nav-link-text">Glass Types</p>
            </NavLink>
          </li>
          <li className="variable-list-nav-link">
            <NavLink to={`${match.url}/by-category`}>
              <p className="variable-list-nav-link-text">Categories</p>
            </NavLink>
          </li>
        </ul>
        <Route
          path={`${match.url}/by-ingredient`}
          render={() => (
            <ListResults 
              flag={'i'}
              onClickTag={onClickTag}
              {...this.state}
              {...this.props}
            />
          )}
        />
        <Route
          path={`${match.url}/by-glass`}
          render={() => (
            <ListResults 
              flag={'g'}
              onClickTag={onClickTag}
              {...this.state}
              {...this.props}
            />
          )}
        />
        <Route
          path={`${match.url}/by-category`}
          render={() => (
            <ListResults 
              flag={'c'}
              onClickTag={onClickTag}
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
