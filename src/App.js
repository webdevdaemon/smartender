import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {base} from './base'
import Main from './Components/Main'

import autoComp from './_helpers/searchModule'

import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css'
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css'

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
      listResults: [{name: 'no results'}],
    }
  }

  runAutoComp = str =>
    autoComp(str)
      .then(list => {
        this.setState({listResults: list})
        this.setState({searchCache: {...this.state.searchCache, [str]: list}})
      })
      .catch(err => new Error(err.message))

  updateUI = evt => {
    evt.persist()
    const searchString = evt.target.value
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
  setAuthStatus = authenticated => {
    this.setState({authenticated})
  }
  setUserObject = userObj => {
    this.setState({user: userObj})
  }
  setUserAvatar = avatarUrl => {
    this.setState({avatar: avatarUrl})
  }
  setAuthState = user => {
    this.setAuthStatus(!!user)
    this.setUserObject(user)
  }
  dbSync(endpoint) {
    return base.syncState(endpoint, {
      context: this,
      state: endpoint,
    })
  }
  dbBind(endpoint) {
    return base.bindToState(endpoint, {
      context: this,
      state: endpoint,
    })
  }
  componentDidMount() {
    this.drinksRef = base.syncState('drinks', {
      context: this,
      state: 'drinks',
    })
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
            updateUI={this.updateUI}
            setAuthState={this.setAuthState}
            {...this.state}
          />
      </BrowserRouter>
    )
  }
}

export default App
