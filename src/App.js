import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
// import {Classes} from '@blueprintjs/core'
import {base} from './base'

// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import firebase from 'firebase'
import Main from './Components/Main'

import '../node_modules/@blueprintjs/core/lib/css/blueprint.css'
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      admin: false,
      user: null,
      drinks: {},
      recipes: {},
      ingredients: {},
      glasses: {},
      categories: {},
      searchCache: {},
      searchCacheRoster: new Set(),
      listResults: [],
    }
  }
  render() {
    const fns = {setAuthState: this._setAuthState}
    return (
      <BrowserRouter>
        <Main {...this.state} {...fns} />
      </BrowserRouter>
    )
  }

  updateListResults = listResults => {
    this.setState({listResults})
  }
  setAuthStatus = (authenticated = false) => {
    this.setState({authenticated})
    console.log(`Auth Status: ${authenticated ? 'logged in' : 'logged out'}`)
  }
  setUserObject = (user = {}) => {
    this.setState({user})
    console.log('USER DATA: \n', {user})
  }
  _setAuthState = user => {
    user && this.setUserObject(user)
    this.setAuthStatus(!!user)
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
}

export default App
