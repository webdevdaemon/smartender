import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const StyledFooter = styled('footer')`
  position: absolute;
  bottom:0; left:0; right: 0; top: auto;
  min-width: 100vw;
  min-height: 10vh;
  max-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 0;
	padding: 0;
	

`

const Footer = ({ children }) =>
  <StyledFooter className="footer">
    {children}
  </StyledFooter>

Footer.propTypes = {
  children: PropTypes.any,
}

export default Footer
