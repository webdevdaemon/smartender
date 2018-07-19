import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink, Route } from 'react-router-dom'
import VariableList from '../../Components/VariableList'

import listPossibilities from '../../_helpers/listPossibilities'
import ListNavLink from '../../Components/ListNavLink/ListNavLink'
import browse from '../../_helpers/browseModule'


const HEADERS_BY_FLAG = {c: 'Category', g: 'Glass Type', i: 'Ingredient'}
const DEFAULT_HEADER = 'Browse by Category, Ingredient, or Glass Type'

class TabBrowser extends Component {
  state = {
    isTags: true,
    list: [],
    listHeader: DEFAULT_HEADER,
    currentFlag: '',
  }

  static propTypes = {
    match: PropTypes.object,
  }

  switchList = flag => {
    listPossibilities(flag)
      .then((list) => list.map(str => ({name: str})))
      .then((newList) => {
        this.setState({
          isTags: true,
          list: [...newList],
          listHeader: HEADERS_BY_FLAG[flag],
          currentFlag: flag,
        })
      })
      .catch(err => Error(err))
  }
  
  onClickTag = ({tag, flag = this.state.currentFlag}) => {
    browse.listBy.tag({tag, flag})
      .then((newList) => {
        this.setState({
          isTags: false,
          list: [...newList],
          listHeader: `${tag}`,
          currentFlag: flag,
        })
      })
  } 

  render() {
    let { match } = this.props
    let switchListTo = this.switchList, onClickTag = this.onClickTag
    return (
      <div className="beverage-browser">
        
      <h2 className="variable-list-header">{'List Drinks By:'}</h2>

        <ul className="variable-list-nav-list">
          {
            Object.entries(HEADERS_BY_FLAG)
              .map(([flag, listName]) =>
                ListNavLink({
                  listName,
                  baseUrl: '/browse',
                  onClick: (() => switchListTo(flag)),
                  routestate:   {...this.state},
                }))
          }
        </ul>

        <Route
          path={'/browse/tags-by-ingredient'}
          render={() => (
            <VariableList
              clickHandler={onClickTag} 
              {...this.state} 
            />
          )}
        />
        <Route
          path={'/browse/tags-by-glass'}
          render={() => (
            <VariableList
              clickHandler={onClickTag} 
              {...this.state} 
            />
          )}
        />
        <Route
          path={'/browse/tags-by-category'}
          render={() => (
            <VariableList
              clickHandler={onClickTag} 
              {...this.state} 
            />
          )}
        />
        <Route
          path={'/browse/by-tag/:name'}
          render={() => {
            return (
              <VariableList
                clickHandler={onClickTag} 
                {...this.state} 
              />
            )}}
        />
      </div>
    )
  }
}

export default TabBrowser
