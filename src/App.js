import React, {Component} from 'react'
import Main from './Components/Main'
import {BrowserRouter} from 'react-router-dom'
import {base} from './base'
import {FocusStyleManager, Classes} from '@blueprintjs/core'

import '../node_modules/@blueprintjs/core/lib/css/blueprint.css'
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css'

FocusStyleManager.onlyShowFocusOnTabs()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    const addFns = {
      addDrinkName: this.addDrinkName,
      addDrinkRecipe: this.addDrinkRecipe,
    }
    return (
      <BrowserRouter>
        <Main
          {...this.state}
          addDrinkFunctions={addFns}
          className={Classes.DARK}
        />
      </BrowserRouter>
    )
  }
  
  updateListResults = listResults => this.setState({listResults})

  isCached = obj => {
    // const [key, val] = Object.entries(obj)[0]
    this.setState(({searchCache}) => ({searchCache: {...searchCache, ...obj}}))
  }
  
  addDrinkName = drinkName => {
    const uniqueId = `${drinkName}-${Date.now()}`
    const alpha = /\w/.test(drinkName[0])
    ? `${drinkName[0]}`.toLowerCase()
    : '_'
    const listToMerge = {
      [alpha]: {
        ...this.state.drinks[alpha],
        drinkName: uniqueId,
      }
    }
    const drinks = {
      ...this.state.drinks,
      ...listToMerge
    }
    this.setState({drinks: {...drinks}})
  }
  
  addDrinkRecipe = drinkRecipe => {
    console.log(arguments[0])
    return {}
  }
  
  $sync(endpoint) {
    return base.syncState(endpoint, {
      context: this, state: endpoint,
    })
  }

  $bind(endpoint) {
    return base.bindToState(endpoint, {
      context: this, state: endpoint,
    })
  }

  /**
   * predicate function that returns true if user is an admin
   * @param {String} username
   * @returns {Bool}
   */
  determineUserAccessLevel = (username = 'cmorganwebdev') => {
    return username === 'cmorganwebdev'
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
