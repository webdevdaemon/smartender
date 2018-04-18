import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from '../../Pages/Home'

const Nav = ({ children, ...props }) => (
  <div className="Nav">
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink to="/random">Random</NavLink>
          </li>
          <li>
            <NavLink to="/ingredients">by Ingredient</NavLink>
          </li>
        </ul>
        <hr />
      </div>
    </Router>
  </div>
)
Nav.propTypes = {
  children: PropTypes.any,
}

Nav.defaultProps = {}

export default Nav
