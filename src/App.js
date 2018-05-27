import React, {Component} from 'react'
import Main from './Components/Main'
import {BrowserRouter} from 'react-router-dom'
import {UIContext, CacheContext, RecipeContext} from './contexts'

const AppContextWrapper = ({children, st}) => (
  <CacheContext.Provider value={st.cache}>
    <UIContext.Provider value={st.ui}>
			<RecipeContext.Provider
				value={st.recipe}>
        {children}
      </RecipeContext.Provider>
    </UIContext.Provider>
  </CacheContext.Provider>
)

class App extends Component {
  state = {
    ui: {
      uiState: {
        sidebar_left: false,
        sidebar_right: false,
        overlay: false,
        modal: false,
      },
      updateUIState: null, // <- replace w/ handler
    },
    cache: {
      searchCache: {},
      updateSearchCache: null, // <- replace w/ handler
    },
    recipe: {
      currentRecipe: {},
      updateCurrentRecipe: null, // <- replace w/ handler
    },
  }

  updateSearchCache = (searchCache = {}) => {
    this.setState({cache: {searchCache}})}
  updateCurrentRecipe = (currentRecipe = {}) => {
		this.setState({recipe: {currentRecipe}})}
  updateUIState = (uiState = {}) => {
    this.setState({ui: {uiState}})}

  render() {
    const injectableCbObject = {
			cache: {updateSearchCache: this.updateSearchCache},
			recipe: {updateCurrentRecipe: this.updateCurrentRecipe},
			ui: {updateUIState: this.updateUIState},
    }
    return (
      <BrowserRouter>
        <AppContextWrapper st={{...this.state, ...injectableCbObject}}>
          <Main />
        </AppContextWrapper>
      </BrowserRouter>
    )
  }
}

export default App
