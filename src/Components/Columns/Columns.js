import React from 'react'

const Columns = ({children, className}) =>
  <div className={`columns ${className}`}>{children() || children}</div>

export default Columns
