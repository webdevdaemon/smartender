import React from 'react'
import PropTypes from 'prop-types'

const Main = ({children}) => (
  <main className="main">
    {children}
  </main>
)

Main.propTypes = {
  children: PropTypes.any,
}

export default Main
