import React from 'react'
import PropTypes from 'prop-types'

import slugify from '../../_helpers/slugify'
import Col from '../Col'
import topLevelRoutes from '../../top-level-routes'

const FooterNavButton = ({children, className}) =>
  <Col.umn className={`footer__menu-item column ${className}`}>
    {children}
  </Col.umn>

const Nav = () => (
  <div className="nav footer__nav">
    <Col.umns>
      {topLevelRoutes.map(({label, icon}) => (
        <FooterNavButton>
          <NavLink to={`/${slugify(label)}`}>
            {icon}
            <p className="footer-nav-text">{label}</p>
          </NavLink>
        </FooterNavButton>
      ))}
    </Col.umns>
  </div>
)

Nav.propTypes = {
  children: PropTypes.any,
}

export default Nav
