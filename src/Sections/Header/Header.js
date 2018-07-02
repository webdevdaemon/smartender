import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

import Masthead from '../../Components/Masthead'
import FaPlus from 'react-icons/lib/fa/plus'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'

const AddRecipeButton = () => (
  <div className="menu-button">
    <FaPlus height="7vh" width="7vh" />
  </div>
)

const BackButton = ({location, history}) => {
  console.dir({location, history})
  return (
    <a onClick={history.goBack} className="back-button">
      <FaAngleLeft height="7vh" width="7vh" />
    </a>
  )
}

const Header = props => (
  <div className="header">
    <BackButton {...props}/>
    <Masthead title="brbckr" subTitle="" />
    <AddRecipeButton />
  </div>
)

Header.propTypes = {
  children: PropTypes.any,
}
export default withRouter(Header)
