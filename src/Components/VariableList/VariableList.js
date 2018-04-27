import React from 'react'
import PropTypes from 'prop-types'
// import axios from 'axios'

const VariableList = ({ list, header, match, ...props }) => (
  <div className="variable-list-wrapper">
    <h4>{header}</h4>
    <ul className="variable-list">
      {list.sort().map((item, dex) => (
        <li className="variable-list-item" key={`ID_${item.substring(0, 3).toUpperCase()}-${dex}`}>
          <div>{item}</div>
        </li>
      ))}
    </ul>
  </div>
)

VariableList.propTypes = {
  list: PropTypes.array,
  header: PropTypes.string,
  match: PropTypes.any,
}

export default VariableList
