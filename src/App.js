 
import {base} from './base'
import React, {Component} from 'react'
import AppUI from './Components/AppUI/index'
import {BrowserRouter} from 'react-router-dom'
// import {getListByTag} from './_helpers/browseModule'
// import autoComp from './_helpers/searchModule'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      admin: false,
      avatar: null,
      user: null,
      drinks: {},
    }
  }

  __authSetState__ = (stObj) => {/*update global auth st*/}

  render() {
    return (
      <BrowserRouter>
        <AppUI {...this.state}/>
      </BrowserRouter>
    )
  }
}

export default App
