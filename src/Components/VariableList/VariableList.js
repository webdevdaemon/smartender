import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const Tag = ({name, click}) => (
  <li className='variable-list-item tag'>
    <NavLink to={{
      pathname: `/browse/recipes-by-tag/${name}`,
    }}
      onClick={() => click({tag: name})}>
      <p>{name}</p>
    </NavLink>
  </li>
)

const Recipe = ({name, id}) => (
  <li className='variable-list-item recipe'>
    <NavLink to={{
      pathname: `/recipe/${id}`,
      state: {
        recipe: {id, incomplete: true}
      },
    }}>
      <p>{name}</p>
    </NavLink>
  </li>
)

class VariableList extends Component {

  static propTypes = {
    isTags: PropTypes.bool,
    onClickTag: PropTypes.func,
    list: PropTypes.array,
    listHeader: PropTypes.string,
  }

  render() {
    const {isTags, list, listHeader, onClickTag} = this.props
    return (
      <div className="variable-list-wrapper">
        <h4>{listHeader}</h4>
        <ul className="variable-list">
          {isTags ?
              list.map((item, dex) =>
                <Tag name={item.name} key={`li-${dex}`} click={onClickTag} />
              )
              :
              list.map((item, dex) =>
                <Recipe name={item.name} key={`li-${dex}`} id={item.id} />
              )}
        </ul>
      </div>
    )
  }
}


export default VariableList
