import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './Sections/Header'
import Page from './Sections/Page'
import Footer from './Sections/Footer'

class App extends Component {
  static propTypes = {
    children: PropTypes.any,
    header: PropTypes.node,
    content: PropTypes.node,
    footer: PropTypes.node,
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Page>
        
        
        
        </Page>
        <Footer />
      </div>
    )
  }
}

export default App
