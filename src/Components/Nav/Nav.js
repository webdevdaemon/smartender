import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <div className="nav">
    <ul>
      <li className='nav-link'>
        <NavLink to="/" exact>Smartender HQ</NavLink>
      </li>
      <li className='nav-link'>
        <NavLink to="/search">Drink Search</NavLink>
      </li>
      <li className='nav-link'>
        <NavLink to="/randomizer">Random Drink</NavLink>
      </li>
      <li className='nav-link'>
        <NavLink to="/browser">Browse Beverages</NavLink>
      </li>
    </ul>
  </div>
)

Nav.propTypes = {
  children: PropTypes.any,
}

export default Nav
