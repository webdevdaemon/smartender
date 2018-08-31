import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'

import Masthead from '../../Components/Masthead'
import FaPlus from 'react-icons/lib/fa/plus'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'

const AddRecipeButton = () => (
  <Link
    to={{
      pathname: '/add'
    }}
  >
    <div className="menu-button">
      <FaPlus height="7vh" width="7vh" />
    </div>
  </Link>
)

const BackButton = ({ location, history, ...props }) => {
  console.log({ location, history })
  return (
    <a
      onClick={() => {
        console.log({ location, history, props })
        return history.goBack()
      }}
      className="back-button"
    >
      <FaAngleLeft height="7vh" width="7vh" />
    </a>
  )
}

const Header = props => (
  <div className="header">
    <BackButton {...props} />
    <Masthead title="brbckr" subTitle="" />
    <AddRecipeButton />
  </div>
)

Header.propTypes = {
  children: PropTypes.any
}
export default withRouter(Header)
