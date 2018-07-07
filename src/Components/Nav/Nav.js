import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import FaQuestion from 'react-icons/lib/fa/question'
import FaSearch from 'react-icons/lib/fa/search'
import FaPlus from 'react-icons/lib/fa/plus'
import FaCogs from 'react-icons/lib/fa/cogs'
import FaList from 'react-icons/lib/fa/list'

const Nav = () => (
  <div className="nav">
    <ul>
      <li className='nav-link'>
        <NavLink to="/browser">
          <FaList />
          <p className='footer-nav-text'>{'Browse'}</p>
        </NavLink>
      </li>
      <li className='nav-link'>
        <NavLink to="/search">
          <FaSearch />
          <p className='footer-nav-text'>{'Search'}</p>
        </NavLink>
      </li>
      <li className='nav-link'>
        <NavLink to="/randomizer">
          <FaQuestion />  
          <p className='footer-nav-text'>{'Random'}</p>
        </NavLink>
      </li>
      <li className='nav-link'>
        <NavLink to="/add">
          <FaPlus />
          <p className='footer-nav-text'>{'Add'}</p>
        </NavLink>
      </li>
      <li className='nav-link'>
        <NavLink to="/" exact>
          <FaCogs />
          <p className='footer-nav-text'>{'About'}</p>
        </NavLink>
      </li>
    </ul>
  </div>
)

Nav.propTypes = {
  children: PropTypes.any,
}

export default Nav
