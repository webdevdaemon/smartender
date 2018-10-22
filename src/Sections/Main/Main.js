import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const ElMain = styled('main')`
  position: absolute;
  top:0; bottom:0; left:0; right:0;
  min-height: 100vh; max-height: 100vh;
  z-index: 1;
`

const Main = ({children}) => (
  <ElMain>
    {children}
  </ElMain>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
