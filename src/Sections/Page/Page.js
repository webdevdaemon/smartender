import React from 'react'
import PropTypes from 'prop-types'

const Page = ({children, ...props}) => (
  <div className="page">
    {children}
  </div>
)

Page.propTypes = {
  children: PropTypes.any,
}

export default Page
