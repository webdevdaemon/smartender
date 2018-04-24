import React from 'react'
import PropTypes from 'prop-types'

const BackButton = () => (
  <div className="back-button">
    <button className="back-btn">
      <span>{'&lt;'}</span>
    </button>
  </div>
)

const Header = ({ children }) => (
  <div className="header">
    <BackButton />
    {children}
  </div>
)

Header.propTypes = {
  children: PropTypes.any,
}
export default Header
