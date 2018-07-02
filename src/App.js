import React, {Component} from 'react'
import Main from './Components/Main'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
	state = {
		searchCache: {},
		currentRecipe: {},
		history: [],
  }

  updateSearchCache = searchCache => {this.setState({searchCache})}
  updateCurrentRecipe = currentRecipe => {this.setState({currentRecipe})}

	render() {
		const updateFunctions = {
			updateSearchCache: this.updateSearchCache,
			updateCurrentRecipe: this.updateCurrentRecipe,
		}
		return (
			<BrowserRouter>
				<Main {...this.state} {...updateFunctions} />
			</BrowserRouter>
    )
  }
}

export default App
