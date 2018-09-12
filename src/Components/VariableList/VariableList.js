/**
* @augments {Component<{  updateList:Function,  clickHandler:Function,  visibleList:array,  listHeader:string,  match:any,>}
*/
import React from 'react'
import PropTypes from 'prop-types'

const ClickableListItem = (item, dex) => (
	<li key={`${item}_0${dex}`} id={`${item}`} className='list-item-clickable'>
   <div className='list-item-name'>
     {item}
   </div>
 </li>
)

const VariableList = ({ visibleList, listHeader, match, ...props }) => (
  <div className="variable-list-wrapper">
    <h4>{listHeader}</h4>
    <ul className="variable-list">
      {visibleList.sort().map((item, dex) => ClickableListItem(item, dex))}
    </ul>
  </div>
)

VariableList.propTypes = {
  updateList: PropTypes.func,
  clickHandler: PropTypes.func,
  visibleList: PropTypes.array,
  listHeader: PropTypes.string,
  match: PropTypes.any,
}

export default VariableList
