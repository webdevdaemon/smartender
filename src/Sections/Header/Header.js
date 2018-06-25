import React from 'react'
import PropTypes from 'prop-types'

import Masthead from '../../Components/Masthead'
import FaBars from 'react-icons/lib/fa/bars'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'

const MenuButton = () => (
  <div className="menu-button">
    <FaBars height="5vh" width="5vh" />
  </div>
)
const BackButton = () => (
  <div className="back-button">
    <FaAngleLeft height="7vh" width="7vh" />
  </div>
)
const Header = ({ children }) => (
  <div className="header">
    <BackButton />
    <Masthead title="brbckr" subTitle="" />
    <MenuButton />
  </div>
)

Header.propTypes = {
  children: PropTypes.any,
}
export default Header
