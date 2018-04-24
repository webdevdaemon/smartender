import React from 'react'
import PropTypes from 'prop-types'

const VariableList = ({ list, header, match }) => (
  <div className="variable-list-wrapper">
    <h4>{`${header}`}</h4>
    <ul className="variable-list">
      {list.map((item, dex) => (
        <li className="variable-list-item"
          key={`ID_${item.substring(0, 5).toUpperCase()}-${dex}`}>
          <a href={`filter.php?i=Gin`}>{item}</a>
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

// const _VariableList = ({ list, char, c_g_i_a }) => (
//   <div className="variable-list-wrapper">
//     <h4>{`Available Ingredients for Letter: ${char}`}</h4>
//     <ul className="variable-list ingredients-list">
//       {list.map(item => (
//         <li className="ingredient" key={`I-${item.substring(-3)}`}>
//           <a href={`filter.php?i=Gin`}>{item}</a>
//         </li>
//       ))}
//     </ul>
//   </div>
// )
