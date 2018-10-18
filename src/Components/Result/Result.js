
import React from 'react'
import PropTypes from 'prop-types'
import {Card, Elevation} from '@blueprintjs/core'

const Result = ({item, isTag, children, onClick, flag}) => {
  return (
    <Card
      interactive
      className={'search-result-line-item'}
      elevation={Elevation.THREE}
      style={{
        backgroundImage: `url(${item.thumbnail})`,
        bockgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      {isTag
        ? <li onClick={() => onClick(item, flag)}>{item.name}</li>
        : children
      }
    </Card>
  )
}

Result.propTypes = {
  children: PropTypes.node,
  item: PropTypes.object,
  isTag: PropTypes.bool,
}

export default Result
