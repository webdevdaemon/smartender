import React from 'react'

const Column = ({children, className}) =>
  <div className={`column ${className}`}>{children || children()}</div>

export default Column
