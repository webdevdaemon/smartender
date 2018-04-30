import React from 'react'
import PropTypes from 'prop-types'
import { image } from '../../_helpers/dbQueries'

const VariableList = ({ list, header, match, ...props }) => (
  <div className="variable-list-wrapper">
    <h4>{header}</h4>
    <ul className="variable-list">
      {(() => {
        if (header === 'Ingredients') {
          return list.sort().map(
            (item, dex) => (
              <li key={`${item}_0${dex}`} className="list-item-clickable">
                <div className="list-item-img"
                  style={{ backgroundImage: `url(${image.ingredient.medium(item)})` }}
                />
                <div className="list-item-name">{item}</div>
              </li>
            )
          )
        } else {
          return list.sort().map((item, dex) => (
            <li key={`${item}_0${dex}`} className="list-item-clickable">
              <div className="list-item-img" />
              <div className="list-item-name">{item}</div>
            </li>)
          )
        }
      })()}
    </ul>
  </div>
)

VariableList.propTypes = {
  updateList: PropTypes.func,
  clickHandler: PropTypes.func,
  list: PropTypes.array,
  header: PropTypes.string,
  match: PropTypes.any,
}

export default VariableList
