import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import styled from 'react-emotion'

import Columns from '../Columns'
import Column from '../Column'
import slugify from '../../_helpers/slugify'
import topLevelRoutes from '../../TopLevelRoutes'

const styledNavButton = styled('a')`
  width: 100%;
  height: 100%;
  display: flex;
`

const FooterNavButton = ({children}) => (
  <Column>{children}</Column>
)

const StyledNav = styled('nav')`
  background: #fcfcfc;
  width: 100vw;
  height: 100%;
`

const Nav = () => (
  <StyledNav className="nav footer__nav">
    <Columns>
      {() => {
        return topLevelRoutes.map(({label, icon}) => (
          <FooterNavButton>
            {() => (
              <NavLink to={`/${slugify(label)}`}>
                {icon}
                <p className="footer-nav-text">{label}</p>
              </NavLink>
            )}
          </FooterNavButton>
        ))
      }}
    </Columns>
  </StyledNav>
)

Nav.propTypes = {
  children: PropTypes.any,
}

export default Nav
