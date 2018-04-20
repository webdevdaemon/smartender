import React from 'react'
import PropTypes from 'prop-types'

const prefix = 'https://www.thecocktaildb.com/api/json/v1/1/'

const VariableList = ({ list, char }) => (
  <div className="variable-list-wrapper">
    <h4>{`Available Ingredients for Letter: ${char}`}</h4>
    <ul className="variable-list ingredients-list">
      {list.map(ing => (
        <li className="ingredient" key={`I-${ing.substring(-3)}`}>
          <a href={`filter.php?i=Gin`}>{ing}</a>
        </li>
      ))}
    </ul>
  </div>
)

VariableList.propTypes = {
  list: PropTypes.array,
  char: PropTypes.string,
}

export default VariableList

