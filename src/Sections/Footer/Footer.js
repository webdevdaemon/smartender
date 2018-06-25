import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ children }) =>
  <div className="footer">
    {children}
  </div>

Footer.propTypes = {
  children: PropTypes.any,
}


export default Footer
