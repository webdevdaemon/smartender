import React from 'react'
import PropTypes from 'prop-types'

import { Card, Elevation } from '@blueprintjs/core'

const SearchResultLineItem = ({children, data}) => {
  return (
    <Card
      interactive
      className={'search-result-line-item'}
      elevation={Elevation.THREE}
      style={{
        backgroundImage: `url(${data.thumbnail})`,
        backgroundColor: 'rgba(0, 0, 0, 0.33)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      {children}
    </Card>
  )
}

SearchResultLineItem.propTypes = {
  children: PropTypes.node
}

export default SearchResultLineItem
