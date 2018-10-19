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
    }
  }

  __authSetState__ = (stObj) => {/*update global auth st*/}

  render() {
    return (
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    )
  }
}

export default App
