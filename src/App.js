import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {base} from './base'
import Main from './Components/Main'

import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css'
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css'

import {getListByTag} from './_helpers/browseModule'
import autoComp from './_helpers/searchModule'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      admin: false,
      user: null,
      avatar: null,
      drinks: {},
      recipes: {},
      ingredients: {},
      glasses: {},
      categories: {},
      searchCache: {},
      searchString: '',
      listResults: [],
      isTags: false,
    }
  }

  onClickTag = (tag, flag) => {
    const list = getListByTag(tag, flag)
    this.setState({
      listResults: [...list],
      isTags: false,
    })
  }

  setIsTags = bool => this.setState({isTags: bool})

  runAutoComp = str =>
    autoComp(str)
      .then(list => {
        this.setState({listResults: list})
        this.setState({
          searchCache: {
            [str]: list,
            ...this.state.searchCache,
          },
        })
      })
      .catch(err => new Error(err.message))

  updateSearchResults = evt => {
    const searchString = evt.target.value
    if (!searchString) return this.setState({listResults: []})
    this.setState({searchString})
    if (this.state.searchCache.hasOwnProperty(searchString)) {
      this.setState({listResults: this.state.searchCache[searchString]})
    } else {
      this.runAutoComp(searchString)
    }
  }
  updateListResults = listResults => {
    this.setState({listResults})
  }
  setAuthState = user => {
    this.setState({
      user,
      authenticated: !!user,
      avatar: user ? user.photoURL : null,
    })
  }
  dbSync(endpoint) {
    return base.syncState(endpoint, {context: this, state: endpoint})
  }
  dbBind(endpoint) {
    return base.bindToState(endpoint, {context: this, state: endpoint})
  }
  componentDidMount() {
    this.drinksRef = base.syncState('drinks', {context: this, state: 'drinks'})
    this.recipesRef = base.syncState('recipes', {
      context: this,
      state: 'recipes',
    })
    this.recipesRef = base.syncState('ingredients', {
      context: this,
      state: 'ingredients',
    })
    this.recipesRef = base.syncState('glasses', {
      context: this,
      state: 'glasses',
    })
    this.recipesRef = base.syncState('categories', {
      context: this,
      state: 'categories',
    })
    this.searchCacheRef = base.syncState('searchCache', {
      context: this,
      state: 'searchCache',
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Main
          updateSearchResults={this.updateSearchResults}
          setAuthState={this.setAuthState}
          onClickTag={this.onClickTag}
          setIsTags={this.setIsTags}
          {...this.state}
        />
      </BrowserRouter>
    )
  }
}

export default App
