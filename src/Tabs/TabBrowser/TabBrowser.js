import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink, Route} from 'react-router-dom'

// import listPossibilities from '../../_helpers/listPossibilities'

class TabBrowser extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // componentDidMount() {}
  // static propTypes = {}
  // updateList = () => {}
  // filterList = () => {}

  render() {
    const {match} = this.props
    return (
      <main className="tab__browser">
        <h2 className='tab__title'></h2>
      </main>
    )
  }
}

export default TabBrowser
