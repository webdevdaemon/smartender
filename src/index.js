import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {FocusStyleManager} from '@blueprintjs/core'
// import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

FocusStyleManager.onlyShowFocusOnTabs()
// registerServiceWorker()
